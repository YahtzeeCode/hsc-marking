// storage.js — question-attempt history, local by default, synced via
// Firebase when firebase-config.js has a real config in it.

const LOCAL_HISTORY_KEY = "hsc_history_v1";
const MAX_LOCAL_HISTORY = 2000;

const Store = {
  cloudEnabled: false,
  user: null,
  attempts: [], // newest first
  ready: false,
  _listeners: [],

  onChange(fn) {
    this._listeners.push(fn);
  },
  _notify() {
    this._listeners.forEach((fn) => {
      try { fn(); } catch (e) { console.error(e); }
    });
  },

  init() {
    this._loadLocal();
    this.ready = true;

    if (typeof FIREBASE_CONFIG !== "undefined" && FIREBASE_CONFIG && typeof firebase !== "undefined") {
      try {
        firebase.initializeApp(FIREBASE_CONFIG);
        this.cloudEnabled = true;
        firebase.auth().onAuthStateChanged((user) => {
          this.user = user || null;
          if (user) {
            this._subscribeCloud(user.uid);
          } else {
            this._loadLocal();
            this._notify();
          }
        });
      } catch (e) {
        console.warn("Firebase init failed — running in local-only mode.", e);
        this.cloudEnabled = false;
      }
    }
    this._notify();
  },

  _loadLocal() {
    try {
      this.attempts = JSON.parse(localStorage.getItem(LOCAL_HISTORY_KEY) || "[]");
    } catch (e) {
      this.attempts = [];
    }
    return this.attempts;
  },
  _saveLocal() {
    localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(this.attempts.slice(0, MAX_LOCAL_HISTORY)));
  },

  _subscribeCloud(uid) {
    firebase.firestore()
      .collection("users").doc(uid).collection("attempts")
      .orderBy("timestamp", "desc").limit(1000)
      .onSnapshot(
        (snap) => {
          this.attempts = snap.docs.map((d) => ({ docId: d.id, ...d.data() }));
          this._notify();
        },
        (err) => {
          console.warn("Firestore sync error — falling back to local cache.", err);
        }
      );
  },

  isSignedIn() {
    return !!(this.cloudEnabled && this.user);
  },

  async addAttempt(attempt) {
    attempt = { ...attempt, timestamp: Date.now() };
    if (this.isSignedIn()) {
      await firebase.firestore()
        .collection("users").doc(this.user.uid)
        .collection("attempts").add(attempt);
      // onSnapshot will refresh this.attempts + notify listeners
    } else {
      this.attempts.unshift(attempt);
      this._saveLocal();
      this._notify();
    }
  },

  answeredIds(subject, marks) {
    return this.attempts
      .filter((a) => a.subject === subject && a.marks === marks)
      .map((a) => a.questionId);
  },

  async signInGoogle() {
    if (!this.cloudEnabled) throw new Error("Cloud sync isn't configured yet.");
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },

  async signOut() {
    if (this.cloudEnabled) await firebase.auth().signOut();
  },

  exportJSON() {
    return JSON.stringify(this.attempts, null, 2);
  },

  async importJSON(text) {
    const items = JSON.parse(text);
    if (!Array.isArray(items)) throw new Error("That doesn't look like a valid history export file.");
    for (const item of items) {
      const { docId, timestamp, ...rest } = item;
      await this.addAttempt({ ...rest, timestamp: timestamp || Date.now() });
    }
  },
};
