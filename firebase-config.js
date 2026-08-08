// Cross-device history sync (optional)
// --------------------------------------------------------------
// Paste your Firebase project config below to make your question history
// follow you between devices (laptop, PC, etc). Leave FIREBASE_CONFIG as
// `null` to run in local-only mode — the app works fully either way, your
// history just won't leave the current browser.
//
// How to get a config (free, ~5 minutes):
//   1. Go to https://console.firebase.google.com → "Add project" → give it
//      any name → you can skip Google Analytics.
//   2. In the project, click the "</>" (web) icon to add a web app. Give it
//      a nickname, you do NOT need Firebase Hosting.
//   3. Copy the `firebaseConfig` object it shows you and paste it below,
//      replacing `null`.
//   4. In the left sidebar go to Build → Authentication → Get started →
//      enable the "Google" sign-in provider (one click, then Save).
//   5. In the left sidebar go to Build → Firestore Database → Create
//      database → Start in **production mode** → pick any region.
//   6. Still in Firestore, go to the "Rules" tab and replace the rules with:
//
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            match /users/{userId}/{document=**} {
//              allow read, write: if request.auth != null && request.auth.uid == userId;
//            }
//          }
//        }
//
//      then click "Publish". This makes sure only you (signed in) can ever
//      read or write your own history.
//   7. Reload the app, click the ⚙️ settings icon, and sign in with Google.

const FIREBASE_CONFIG = null;

/* Example — replace the block above with something like this:
const FIREBASE_CONFIG = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
*/
