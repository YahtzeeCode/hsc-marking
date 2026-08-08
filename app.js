// HSC Marking Practice — app logic
// No build step, no server: everything runs in the browser and calls the
// marking model's API directly. History is stored via storage.js (Store),
// which is local-only unless firebase-config.js has a real config in it.

const SUBJECTS = [
  { id: "business-studies", name: "Business Studies", mono: "BS", desc: "Operations, marketing, finance, HR & the business environment", enabled: true },
  { id: "economics", name: "Economics", mono: "EC", desc: "Coming soon", enabled: false },
  { id: "english-standard", name: "English Standard", mono: "EN", desc: "Coming soon", enabled: false },
];

const PROVIDERS = {
  claude: {
    label: "Claude (Anthropic)",
    placeholder: "sk-ant-...",
    helpUrl: "https://console.anthropic.com/settings/keys",
    helpLabel: "console.anthropic.com",
    storageKey: "hsc_key_claude",
    modelStorageKey: "hsc_model_claude",
    defaultModel: "claude-opus-5",
    // Kept short on purpose — Anthropic model IDs are stable for a long time.
    // "Custom" always exists below so this list never has to be complete.
    models: [
      { id: "claude-opus-5", label: "Claude Opus 5 (most capable, default)" },
      { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster, cheaper)" },
      { id: "claude-haiku-4-5", label: "Claude Haiku 4.5 (fastest, cheapest)" },
    ],
  },
  gemini: {
    label: "Gemini (Google)",
    placeholder: "AIza...",
    helpUrl: "https://aistudio.google.com/apikey",
    helpLabel: "aistudio.google.com",
    storageKey: "hsc_key_gemini",
    modelStorageKey: "hsc_model_gemini",
    defaultModel: "gemini-3.6-flash",
    // Google retires "flash" model names every few months — if marking
    // starts failing with a "model not found / no longer available" error,
    // pick a newer one here (or paste an exact ID via "Custom").
    models: [
      { id: "gemini-3.6-flash", label: "Gemini 3.6 Flash (default)" },
      { id: "gemini-3.5-flash-lite", label: "Gemini 3.5 Flash-Lite (fastest, cheapest)" },
      { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash (older)" },
    ],
  },
};
const PROVIDER_STORAGE_KEY = "hsc_provider";
const CUSTOM_MODEL_VALUE = "__custom__";
const SELFMARK_STORAGE_KEY = "hsc_selfmark";
function isSelfMarkMode() {
  return localStorage.getItem(SELFMARK_STORAGE_KEY) === "1";
}
function setSelfMarkMode(on) {
  localStorage.setItem(SELFMARK_STORAGE_KEY, on ? "1" : "0");
}

// ---------------------------------------------------------------------
// Skip queue — skipping a question does NOT count as answered (no history
// attempt is recorded, so it stays eligible for normal random selection too),
// it's just parked here so it can be deliberately revisited later via the
// History tab. Cleared automatically once that question is actually answered
// (through the skip queue or by encountering it normally again).
// ---------------------------------------------------------------------
const SKIP_QUEUE_STORAGE_KEY = "hsc_skip_queue";
function getSkipQueue() {
  try {
    return JSON.parse(localStorage.getItem(SKIP_QUEUE_STORAGE_KEY) || "[]");
  } catch (e) {
    return [];
  }
}
function saveSkipQueue(queue) {
  localStorage.setItem(SKIP_QUEUE_STORAGE_KEY, JSON.stringify(queue));
}
function addToSkipQueue(q, subject) {
  const queue = getSkipQueue();
  if (queue.some((item) => item.questionId === q.id && item.subject === subject)) return;
  queue.unshift({
    questionId: q.id,
    subject,
    marks: q.marks,
    topic: q.topic || null,
    questionText: q.question,
    source: q.source || null,
    timestamp: Date.now(),
  });
  saveSkipQueue(queue);
}
function removeFromSkipQueue(questionId, subject) {
  saveSkipQueue(getSkipQueue().filter((item) => !(item.questionId === questionId && item.subject === subject)));
}

const state = {
  subject: null,
  topic: null,
  marks: null,
  mixed: false,
  question: null,
  exhausted: false,
  historyDetail: null,
  pendingAfterKeySave: null,
};

// ---------------------------------------------------------------------
// View management
// ---------------------------------------------------------------------
function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  updateCrumbs(id);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function updateCrumbs(viewId) {
  const crumbs = document.getElementById("crumbs");
  const historyViews = viewId === "view-history" || viewId === "view-history-detail";

  document.getElementById("nav-home").classList.toggle("active", !historyViews);
  document.getElementById("nav-history").classList.toggle("active", historyViews);

  if (historyViews) {
    crumbs.textContent = "History";
    return;
  }
  const parts = [];
  if (state.subject) {
    const subj = SUBJECTS.find((s) => s.id === state.subject);
    parts.push(subj ? subj.name : state.subject);
  }
  const pastTopicSelect = viewId === "view-markers" || viewId === "view-question" ||
    viewId === "view-result" || viewId === "view-loading" || viewId === "view-selfmark";
  if (pastTopicSelect) {
    parts.push(state.topic || "All topics");
  }
  if (viewId === "view-question" || viewId === "view-result" || viewId === "view-loading" || viewId === "view-selfmark") {
    if (state.mixed) parts.push("Mixed practice");
    else if (state.marks) parts.push(`${state.marks} mark${state.marks > 1 ? "s" : ""}`);
  }
  crumbs.textContent = parts.join("  ›  ");
}

document.getElementById("brand-home").addEventListener("click", () => showView("view-home"));
document.getElementById("nav-home").addEventListener("click", () => showView("view-home"));

// ---------------------------------------------------------------------
// Home: subject cards
// ---------------------------------------------------------------------
function renderSubjects() {
  const grid = document.getElementById("subject-grid");
  grid.innerHTML = "";
  SUBJECTS.forEach((s) => {
    const card = document.createElement("div");
    card.className = "subject-card" + (s.enabled ? "" : " disabled");
    card.innerHTML = `
      <div class="mono">${s.mono}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <span class="badge ${s.enabled ? "live" : "soon"}">${s.enabled ? "Available" : "Coming soon"}</span>
    `;
    if (s.enabled) card.addEventListener("click", () => openSubject(s.id));
    grid.appendChild(card);
  });
}

function openSubject(subjectId) {
  state.subject = subjectId;
  state.topic = null;
  const subj = SUBJECTS.find((s) => s.id === subjectId);
  document.getElementById("topic-subject-title").textContent = subj.name;
  renderTopics();
  showView("view-topics");
}

// ---------------------------------------------------------------------
// Topic grid
// ---------------------------------------------------------------------
// Preferred display order (NESA syllabus order); anything not listed here
// (e.g. a typo'd or one-off topic label from extracted papers) is appended
// afterwards, alphabetically, rather than dropped.
const TOPIC_ORDER = [
  "Nature of Business",
  "Business Management",
  "Business Environment",
  "Operations",
  "Marketing",
  "Finance",
  "Human Resources",
];

function topicsFor(subjectId) {
  const pool = QUESTIONS[subjectId] || [];
  const counts = new Map();
  pool.forEach((q) => {
    const t = q.topic || "Other";
    counts.set(t, (counts.get(t) || 0) + 1);
  });
  const names = Array.from(counts.keys()).sort((a, b) => {
    const ia = TOPIC_ORDER.indexOf(a);
    const ib = TOPIC_ORDER.indexOf(b);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.localeCompare(b);
  });
  return names.map((name) => ({ name, count: counts.get(name) }));
}

function renderTopics() {
  const grid = document.getElementById("topic-grid");
  grid.innerHTML = "";
  topicsFor(state.subject).forEach(({ name, count }) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "marker-pill";
    pill.innerHTML = `
      <span>${name}</span>
      <span class="count">${count}</span>
    `;
    pill.addEventListener("click", () => startTopic(name));
    grid.appendChild(pill);
  });
}

function startTopic(topic) {
  state.topic = topic;
  goToMarkers();
}

document.getElementById("topics-mixed-btn").addEventListener("click", () => {
  state.topic = null;
  goToMarkers();
});

document.getElementById("markers-back-btn").addEventListener("click", () => {
  renderTopics();
  showView("view-topics");
});

function goToMarkers() {
  const subj = SUBJECTS.find((s) => s.id === state.subject);
  document.getElementById("marker-subject-title").textContent = subj.name;
  document.getElementById("marker-page-sub").textContent = state.topic
    ? `${state.topic} — start a mixed session, or pick a specific marker value below.`
    : "All topics — start a mixed session, or pick a specific marker value below.";
  renderMarkers();
  showView("view-markers");
}

// ---------------------------------------------------------------------
// Marker (mark-value) grid
// ---------------------------------------------------------------------
function questionsFor(subjectId, marks) {
  const pool = QUESTIONS[subjectId] || [];
  return pool.filter((q) => q.marks === marks);
}

function filterByTopic(pool, topic) {
  return topic ? pool.filter((q) => q.topic === topic) : pool;
}

function renderMarkers() {
  const grid = document.getElementById("marker-grid");
  grid.innerHTML = "";
  for (let m = 1; m <= 6; m++) {
    const count = filterByTopic(questionsFor(state.subject, m), state.topic).length;
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "marker-pill" + (count === 0 ? " empty" : "");
    pill.innerHTML = `
      <span>${m} mark${m > 1 ? "s" : ""}</span>
      <span class="count">${count}</span>
    `;
    if (count > 0) pill.addEventListener("click", () => startMarker(m));
    grid.appendChild(pill);
  }
}

function startMarker(marks) {
  state.marks = marks;
  state.mixed = false;
  loadNewQuestion();
}

function startMixed() {
  state.marks = null;
  state.mixed = true;
  loadNewQuestion();
}
document.getElementById("mixed-start-btn").addEventListener("click", startMixed);

document.getElementById("q-back-btn").addEventListener("click", () => {
  renderMarkers();
  showView("view-markers");
});
document.getElementById("q-skip-btn").addEventListener("click", () => {
  addToSkipQueue(state.question, state.subject);
  loadNewQuestion();
});
document.getElementById("change-marker-btn").addEventListener("click", () => {
  renderMarkers();
  showView("view-markers");
});
document.getElementById("empty-back-btn").addEventListener("click", () => showView("view-home"));

// ---------------------------------------------------------------------
// Question selection & rendering (no-repeat, backed by Store history)
// ---------------------------------------------------------------------
function loadNewQuestion() {
  const rawPool = state.mixed
    ? (QUESTIONS[state.subject] || [])
    : questionsFor(state.subject, state.marks);
  const pool = filterByTopic(rawPool, state.topic);
  if (pool.length === 0) {
    document.getElementById("empty-message").textContent = "No questions available yet for this combination.";
    showView("view-empty");
    return;
  }
  const answered = new Set(Store.answeredIds(state.subject, state.mixed ? null : state.marks));
  let candidates = pool.filter((q) => !answered.has(q.id));
  let exhausted = false;
  if (candidates.length === 0) {
    exhausted = true;
    candidates = pool.length > 1 && state.question
      ? pool.filter((q) => q.id !== state.question.id)
      : pool;
  }
  const picked = candidates[Math.floor(Math.random() * candidates.length)];
  state.question = picked;
  state.exhausted = exhausted;
  renderQuestion();
  showView("view-question");
}

function renderQuestion() {
  const q = state.question;
  document.getElementById("q-marks-pill").textContent = `${q.marks} mark${q.marks > 1 ? "s" : ""}`;
  document.getElementById("q-topic-pill").textContent = q.topic || "Business Studies";
  document.getElementById("q-source-pill").textContent = q.source || "Original question";
  document.getElementById("repeat-banner").style.display = state.exhausted ? "block" : "none";
  const stimBox = document.getElementById("stimulus-box");
  if (q.stimulus) {
    stimBox.style.display = "block";
    renderStimulusInto(document.getElementById("stimulus-text"), q.stimulus);
  } else {
    stimBox.style.display = "none";
  }
  document.getElementById("question-text").textContent = q.question;
  const ta = document.getElementById("answer-input");
  ta.value = "";
  updateWordCount();
  ta.focus();
}

// Stimulus can be a plain string (old format), or a structured object for
// stimulus that includes data tables (balance sheets, income statements,
// ratio tables, etc):
//   { blocks: [
//       { type: "text", text: "..." },
//       { type: "table", title: "optional caption", columns: ["", "$", "$"],
//         rows: [ ["Sales", "", "350 000"], ["Opening stock", "20 000", ""] ] }
//   ] }
// Blocks render in order; a question can mix narrative text and one or more
// tables. Plain-string stimulus keeps working unchanged.
function renderStimulusInto(container, stimulus) {
  container.innerHTML = "";
  if (!stimulus) return;
  if (typeof stimulus === "string") {
    container.textContent = stimulus;
    return;
  }
  (stimulus.blocks || []).forEach((b) => {
    if (b.type === "table") {
      if (b.title) {
        const p = document.createElement("p");
        p.className = "stim-table-title";
        p.textContent = b.title;
        container.appendChild(p);
      }
      const table = document.createElement("table");
      table.className = "stim-table";
      if (b.columns && b.columns.some((c) => c)) {
        const thead = document.createElement("thead");
        const trh = document.createElement("tr");
        b.columns.forEach((c) => {
          const th = document.createElement("th");
          th.textContent = c;
          trh.appendChild(th);
        });
        thead.appendChild(trh);
        table.appendChild(thead);
      }
      const tbody = document.createElement("tbody");
      (b.rows || []).forEach((r) => {
        const tr = document.createElement("tr");
        r.forEach((cell) => {
          const td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      container.appendChild(table);
    } else {
      const p = document.createElement("p");
      p.className = "stim-text-block";
      p.textContent = b.text;
      container.appendChild(p);
    }
  });
}

// Flattens either stimulus format into plain text for the marking prompt.
function stimulusToPlainText(stimulus) {
  if (!stimulus) return "";
  if (typeof stimulus === "string") return stimulus;
  return (stimulus.blocks || [])
    .map((b) => {
      if (b.type === "table") {
        const header = (b.columns || []).join(" | ");
        const rows = (b.rows || []).map((r) => r.join(" | ")).join("\n");
        return `${b.title ? b.title + "\n" : ""}${header}\n${rows}`.trim();
      }
      return b.text;
    })
    .join("\n\n");
}

const answerInput = document.getElementById("answer-input");
answerInput.addEventListener("input", updateWordCount);
function updateWordCount() {
  const text = answerInput.value.trim();
  const words = text.length === 0 ? 0 : text.split(/\s+/).length;
  document.getElementById("word-count").textContent = `${words} word${words === 1 ? "" : "s"}`;
}

// ---------------------------------------------------------------------
// Submitting for marking
// ---------------------------------------------------------------------
document.getElementById("submit-btn").addEventListener("click", () => {
  const answer = answerInput.value.trim();
  if (!answer) {
    answerInput.focus();
    answerInput.style.borderColor = "var(--bad)";
    setTimeout(() => (answerInput.style.borderColor = ""), 1200);
    return;
  }
  if (isSelfMarkMode()) {
    submitSelfMark(answer);
    return;
  }
  if (!getApiKey()) {
    // Re-checked at resume time (not captured now) so that if the user turns on
    // self-marking mode from inside this same prompt instead of entering a key,
    // Save correctly self-marks the answer rather than still trying the AI call.
    state.pendingAfterKeySave = () => {
      if (isSelfMarkMode()) submitSelfMark(answer);
      else submitForMarking(answer);
    };
    openSettingsModal();
    document.getElementById("apikey-error").textContent =
      `Enter your ${PROVIDERS[getProvider()].label} API key to start marking, or turn on self-marking mode above.`;
    return;
  }
  submitForMarking(answer);
});

async function submitForMarking(answer) {
  showView("view-loading");
  try {
    const grade = await gradeAnswer(state.question, answer);
    renderResult(grade, answer);
    showView("view-result");
    try {
      await Store.addAttempt({
        questionId: state.question.id,
        subject: state.subject,
        marks: state.question.marks,
        topic: state.question.topic || null,
        questionText: state.question.question,
        source: state.question.source || null,
        answer,
        marksAwarded: grade.marks_awarded,
        verdict: grade.verdict,
        strengths: grade.strengths,
        marksLost: grade.marks_lost,
        improvementTips: grade.improvement_tips,
      });
      removeFromSkipQueue(state.question.id, state.subject);
    } catch (e) {
      console.warn("Could not save this attempt to history.", e);
    }
  } catch (err) {
    console.error(err);
    if (err.status === 401 || err.status === 400) {
      state.pendingAfterKeySave = () => submitForMarking(answer);
      openSettingsModal();
      document.getElementById("apikey-error").textContent =
        "That API key was rejected: " + (err.message || "please check it and try again.");
      showView("view-question");
    } else {
      document.getElementById("empty-message").textContent =
        "Something went wrong while marking your answer: " + (err.message || "Unknown error") + ". Please try again.";
      showView("view-empty");
      document.getElementById("empty-back-btn").onclick = () => showView("view-question");
    }
  }
}

// ---------------------------------------------------------------------
// Self-marking mode (no API key) — show the official criteria, key points
// and sample answer, and let the student award their own mark band.
// ---------------------------------------------------------------------
function submitSelfMark(answer) {
  const q = state.question;
  document.getElementById("sm-marks-pill").textContent = `${q.marks} mark${q.marks > 1 ? "s" : ""}`;
  document.getElementById("sm-topic-pill").textContent = q.topic || "Business Studies";
  document.getElementById("sm-source-pill").textContent = q.source || "Original question";
  document.getElementById("sm-question-text").textContent = q.question;
  renderCriteriaList("sm-criteria-list", q.criteria);
  setCriteriaSourceBadge("sm-criteria-source", q.criteriaSource);

  const kpBlock = document.getElementById("sm-keypoints-block");
  if (q.keyPoints) {
    kpBlock.style.display = "block";
    document.getElementById("sm-keypoints-text").textContent = q.keyPoints;
  } else {
    kpBlock.style.display = "none";
  }
  document.getElementById("sm-sample-answer-text").textContent = q.sampleAnswer;
  document.getElementById("sm-your-answer-text").textContent = answer;

  const row = document.getElementById("sm-score-row");
  const hint = document.getElementById("sm-saved-hint");
  row.innerHTML = "";
  hint.textContent = "";
  for (let m = 0; m <= q.marks; m++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "score-pick";
    btn.textContent = String(m);
    btn.addEventListener("click", () => {
      row.querySelectorAll(".score-pick").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      hint.textContent = `Saved ${m}/${q.marks} to your history.`;
      Store.addAttempt({
        questionId: q.id,
        subject: state.subject,
        marks: q.marks,
        topic: q.topic || null,
        questionText: q.question,
        source: q.source || null,
        answer,
        marksAwarded: m,
        verdict: "Self-assessed",
        strengths: [],
        marksLost: [],
        improvementTips: [],
      }).catch((e) => console.warn("Could not save this attempt to history.", e));
      removeFromSkipQueue(q.id, state.subject);
    });
    row.appendChild(btn);
  }

  showView("view-selfmark");
}

document.getElementById("sm-redo-btn").addEventListener("click", () => {
  renderQuestion();
  showView("view-question");
});
document.getElementById("sm-next-btn").addEventListener("click", () => loadNewQuestion());
document.getElementById("sm-change-marker-btn").addEventListener("click", () => {
  renderMarkers();
  showView("view-markers");
});

// ---------------------------------------------------------------------
// Shared grading-prompt construction
// ---------------------------------------------------------------------
const GRADE_FIELDS_SCHEMA = {
  marks_awarded: "integer, between 0 and the maximum for the question",
  verdict: "one short sentence summarising the overall quality of the response",
  strengths: "array of strings — specific things the student did well",
  marks_lost: "array of strings — specific, concrete reasons marks were lost, tied to the marking criteria",
  improvement_tips: "array of strings — actionable tips for how the student could improve their answer",
};

// Official NESA HSC Business Studies syllabus content, by topic (Operations,
// Marketing, Finance, Human Resources — the only four HSC-examinable topics;
// Nature of Business and Business Management are Preliminary/Year 11 only
// and are not tested at HSC level, so they're intentionally not included here).
// Given to the marking AI as context so it knows exactly what content is
// in/out of scope for a topic, not just the question and criteria in isolation.
const SYLLABUS_CONTENT = {
  "Operations": `1 - role of operations management
- strategic role of operations management: cost leadership, good/service differentiation
- goods and/or services in different industries
- interdependence with other key business functions

2 - influences
- globalisation, technology, quality expectations, cost-based competition, government policies, legal regulation, environmental sustainability
- corporate social responsibility: the difference between legal compliance and ethical responsibility; environmental sustainability and social responsibility

3 - operations processes
- inputs: transformed resources (materials, information, customers); transforming resources (human resources, facilities)
- transformation processes: the influence of volume, variety, variation in demand and visibility (customer contact); sequencing and scheduling (Gantt charts, critical path analysis); technology, task design and process layout; monitoring, control and improvement
- outputs: customer service; warranties

4 - operations strategies
- performance objectives: quality, speed, dependability, flexibility, customisation, cost
- new product or service design and development
- supply chain management: logistics, e-commerce, global sourcing
- outsourcing: advantages and disadvantages
- technology: leading edge, established
- inventory management: advantages and disadvantages of holding stock, LIFO, FIFO, JIT
- quality management: control, assurance, improvement
- overcoming resistance to change: financial costs, purchasing new equipment, redundancy payments, retraining, reorganising plant layout, inertia
- global factors: global sourcing, economies of scale, scanning and learning, research and development`,

  "Marketing": `role of marketing
- strategic role of marketing goods and services
- interdependence with other key business functions
- production, selling, marketing approaches
- types of markets: resource, industrial, intermediate, consumer, mass, niche

influences on marketing
- factors influencing customer choice: psychological, sociocultural, economic, government
- consumer laws: deceptive and misleading advertising; price discrimination; implied conditions; warranties
- ethical: truth, accuracy and good taste in advertising; products that may damage health; engaging in fair competition; sugging

marketing process
- situational analysis: SWOT, product life cycle
- market research
- establishing market objectives
- identifying target markets
- developing marketing strategies
- implementation, monitoring and controlling: developing a financial forecast; comparing actual and planned results; revising the marketing strategy

marketing strategies
- market segmentation, product/service differentiation and positioning
- products (goods and/or services): branding; packaging
- price including pricing methods (cost, market, competition-based): pricing strategies (skimming, penetration, loss leaders, price points); price and quality interaction
- promotion: elements of the promotion mix (advertising, personal selling and relationship marketing, sales promotions, publicity and public relations); the communication process (opinion leaders, word of mouth)
- place/distribution: distribution channels; channel choice (intensive, selective, exclusive); physical distribution issues (transport, warehousing, inventory)
- people, processes and physical evidence
- e-marketing
- global marketing: global branding; standardisation; customisation; global pricing; competitive positioning`,

  "Finance": `role of financial management
- strategic role of financial management
- objectives of financial management: profitability, growth, efficiency, liquidity, solvency; short-term and long-term
- interdependence with other key business functions

influences on financial management
- internal sources of finance: retained profits
- external sources of finance: debt (short-term borrowing e.g. overdraft, commercial bills, factoring; long-term borrowing e.g. mortgage, debentures, unsecured notes, leasing); equity (ordinary shares e.g. new issues, rights issues, placements, share purchase plans; private equity)
- financial institutions: banks, investment banks, finance companies, superannuation funds, life insurance companies, unit trusts and the Australian Securities Exchange
- influence of government: Australian Securities and Investments Commission, company taxation
- global market influences: economic outlook, availability of funds, interest rates

processes of financial management
- planning and implementing: financial needs, budgets, record systems, financial risks, financial controls; debt and equity financing (advantages and disadvantages of each); matching the terms and source of finance to business purpose
- monitoring and controlling: cash flow statement, income statement, balance sheet
- financial ratios: liquidity (current ratio = current assets ÷ current liabilities); gearing (debt to equity ratio = total liabilities ÷ total equity); profitability (gross profit ratio = gross profit ÷ sales; net profit ratio = net profit ÷ sales; return on equity ratio = net profit ÷ total equity); efficiency (expense ratio = total expenses ÷ sales; accounts receivable turnover ratio = sales ÷ accounts receivable); comparative ratio analysis (over different time periods, against standards, with similar businesses)
- limitations of financial reports: normalised earnings, capitalising expenses, valuing assets, timing issues, debt repayments, notes to the financial statements
- ethical issues related to financial reports

financial management strategies
- cash flow management: cash flow statements; distribution of payments, discounts for early payment, factoring
- working capital management: control of current assets (cash, receivables, inventories); control of current liabilities (payables, loans, overdrafts); strategies (leasing, sale and lease back)
- profitability management: cost controls (fixed and variable, cost centres, expense minimisation); revenue controls (marketing objectives)
- global financial management: exchange rates; interest rates; methods of international payment (payment in advance, letter of credit, clean payment, bill of exchange); hedging; derivatives`,

  "Human Resources": `role of human resource management
- strategic role of human resources
- interdependence with other key business functions
- outsourcing: human resource functions; using contractors (domestic, global)

key influences
- stakeholders: employers, employees, employer associations, unions, government organisations, society
- legal: the current legal framework — the employment contract (common law rights and obligations of employers and employees, minimum employment standards, minimum wage rates, awards, enterprise agreements, other employment contracts); work health and safety and workers compensation; antidiscrimination and equal employment opportunity
- economic
- technological
- social: changing work patterns, living standards
- ethics and corporate social responsibility

processes of human resource management
- acquisition
- development
- maintenance
- separation

strategies in human resource management
- leadership style
- job design: general or specific tasks
- recruitment: internal or external, general or specific skills
- training and development: current or future skills
- performance management: developmental or administrative
- rewards: monetary and non-monetary, individual or group, performance pay
- global: costs, skills, supply
- workplace disputes: resolution (negotiation, mediation, grievance procedures, involvement of courts and tribunals)

effectiveness of human resource management
- indicators: corporate culture; benchmarking key variables; changes in staff turnover; absenteeism; accidents; levels of disputation; worker satisfaction`,
};

// Official NESA "Glossary of Key Words" (nsw.gov.au/education-and-training/nesa/hsc/student-guide/glossary,
// cross-checked against a second independent source) — defines exactly what
// each command word in a question is asking a student to actually do, e.g.
// "Discuss" requires points for AND against, "Evaluate" requires a judgement
// based on criteria. Used to tell the marking AI what structural/cognitive
// demand the question's command word creates, on top of the content criteria.
const NESA_KEYWORDS = {
  "account for": "State reasons for, report on.",
  "give an account of": "Narrate a series of events or transactions.",
  "analyse": "Identify components and the relationship between them; draw out and relate implications.",
  "apply": "Use, utilise, employ in a particular situation.",
  "appreciate": "Make a judgement about the value of.",
  "assess": "Make a judgement of value, quality, outcomes, results or size.",
  "calculate": "Ascertain/determine from given facts, figures or information.",
  "clarify": "Make clear or plain.",
  "classify": "Arrange or include in classes/categories.",
  "compare": "Show how things are similar or different.",
  "construct": "Make; build; put together items or arguments.",
  "contrast": "Show how things are different or opposite.",
  "critically analyse": "Add a degree or level of accuracy, depth, knowledge, understanding, logic, questioning, reflection and quality to the analysis.",
  "critically evaluate": "Add a degree or level of accuracy, depth, knowledge, understanding, logic, questioning, reflection and quality to the evaluation.",
  "deduce": "Draw conclusions.",
  "define": "State meaning and identify essential qualities.",
  "demonstrate": "Show by example.",
  "describe": "Provide characteristics and features.",
  "discuss": "Identify issues and provide points for and/or against.",
  "distinguish": "Recognise or note/indicate as being distinct or different from; note differences between.",
  "evaluate": "Make a judgement based on criteria; determine the value of.",
  "examine": "Inquire into.",
  "explain": "Relate cause and effect; make the relationships between things evident; provide why and/or how.",
  "extract": "Choose relevant and/or appropriate details.",
  "extrapolate": "Infer from what is known.",
  "identify": "Recognise and name.",
  "interpret": "Draw meaning from.",
  "investigate": "Plan, inquire into and draw conclusions about.",
  "justify": "Support an argument or conclusion.",
  "outline": "Sketch in general terms; indicate the main features of.",
  "predict": "Suggest what may happen based on available information.",
  "propose": "Put forward (e.g. a point of view, idea, argument, suggestion) for consideration or action.",
  "recall": "Present remembered ideas, facts or experiences.",
  "recommend": "Provide reasons in favour.",
  "recount": "Retell a series of events.",
  "summarise": "Express, concisely, the relevant details.",
  "synthesise": "Putting together various elements to make a whole.",
};

// Finds which official NESA command words actually appear in this question's
// text (matches multi-word terms first so e.g. "critically analyse" isn't
// also double-matched as a bare "analyse").
function findKeywordsInQuestion(questionText) {
  if (!questionText) return [];
  const found = [];
  const lower = questionText.toLowerCase();
  const terms = Object.keys(NESA_KEYWORDS).sort((a, b) => b.length - a.length);
  const covered = [];
  terms.forEach((term) => {
    const re = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    const m = re.exec(lower);
    if (!m) return;
    const start = m.index, end = m.index + term.length;
    if (covered.some(([s, e]) => start < e && end > s)) return; // already covered by a longer term
    covered.push([start, end]);
    found.push({ term, definition: NESA_KEYWORDS[term] });
  });
  return found;
}

function buildSystemPrompt() {
  return `You are an experienced, fair but rigorous HSC Business Studies marker working for the NSW Education Standards Authority (NESA). You mark strictly against the official marking criteria provided, using the key points and sample answer only as a guide to what a full-mark response looks like. Award the mark band that best matches what the student's answer actually demonstrates — do not give credit for content, terminology, or structure the answer does not contain, and do not be swayed by length or confident tone alone. Ignore spelling, typing and typographical errors entirely — mark the content and meaning of the response, not how cleanly it was typed, and do not mention spelling/typos in strengths, marks_lost or improvement_tips. Be specific and reference the student's own words when explaining strengths and gaps. Keep feedback constructive, concise and exam-focused.

PRIORITY ORDER when these sources of guidance ever pull in different directions:
1. THE MARKING CRITERIA BANDS PROVIDED FOR THIS SPECIFIC QUESTION are the final authority for which numeric mark is awarded — never award a band the student's answer doesn't actually satisfy just because a lower-priority signal below suggests it, and never award full marks for a top band the answer doesn't meet just because the command word/key-term/stimulus checks all pass.
2. The official NESA command-word definition and whether key terms are defined (both below) sit just under the criteria in importance — they are not optional flavour text. Use them actively when judging which band a borderline answer falls into: if the command word demands a judgement, cause-and-effect reasoning, or points for/against, and the answer structurally doesn't do that, that is a genuine, real reason to place it in a lower band, not merely something to mention in passing feedback.
3. The syllabus content and stimulus-engagement check are supporting context — use them to keep the other two honest (e.g. don't reward off-syllabus content, don't accept a generic non-stimulus answer as equivalent to one that engages the case study) but they rarely override a clear criteria+command-word judgement on their own.

You are also given the official NESA syllabus dot points for this question's topic — use them to judge whether the student's content is genuinely within the syllabus (e.g. don't penalise a correct answer for using different but syllabus-valid terminology, and don't award credit for content that's outside the syllabus for this topic even if it sounds plausible).

If the question contains an official NESA command word (e.g. Explain, Analyse, Discuss, Evaluate), you're given that word's official glossary definition. Treat it as a real, load-bearing part of what the criteria bands are asking for, not just a footnote: "Discuss" requires points for AND against, not just one side; "Evaluate"/"Assess"/"Justify" require an actual judgement or conclusion, not just description; "Explain" requires cause-and-effect reasoning ("because"/"which means"/"leading to"), not just a statement of fact; "Analyse" requires identifying components and relating the implications between them, not just listing them. A response that is missing this and is being considered for a top band should generally be placed in a lower band instead — call this out specifically in marks_lost.

For any question worth 2 or more marks, defining the key term(s) in the question (e.g. define "gearing" before discussing it) is an important, genuinely weighted part of a strong response — not just a nice-to-have. Factor its presence or absence into which band you select when it's a close call, and always call out its absence in improvement_tips when a student jumps straight into discussion without establishing what the term means.

If the question explicitly asks the student to reference the stimulus/case study (e.g. "with reference to the stimulus", "for this business", "using the information provided"), check whether the answer actually engages with specific details from the stimulus (figures, the business's name, scenario specifics) rather than answering in generic terms that could apply to any business. A generic, non-stimulus-engaged answer to a stimulus-based question should not be treated as equivalent to one that properly integrates the stimulus, particularly where the criteria band expects stimulus integration (several do, e.g. "with effective integration of at least two pieces of stimulus data") — reflect this in the mark when it's a close call, and always raise it in marks_lost/improvement_tips.

Always respond with valid JSON only, matching the requested schema exactly — no markdown, no commentary outside the JSON.`;
}

function buildCriteriaText(q) {
  return q.criteria
    .map((c) => `${c.marks} mark${c.marks === 1 ? "" : "s"}: ${c.descriptor}`)
    .join("\n");
}

function buildUserContent(q, studentAnswer) {
  const syllabus = SYLLABUS_CONTENT[q.topic];
  const keywords = findKeywordsInQuestion(q.question);
  const keywordsBlock = keywords.length
    ? `\nCOMMAND WORD(S) IN THIS QUESTION (official NESA glossary definitions):\n${keywords.map((k) => `- "${k.term}": ${k.definition}`).join("\n")}\n`
    : "";
  return `Mark the following HSC Business Studies response.

TOPIC: ${q.topic || "Business Studies"}
${syllabus ? `\nNESA SYLLABUS CONTENT FOR THIS TOPIC (use this to judge what is/isn't in scope):\n${syllabus}\n` : ""}${keywordsBlock}
QUESTION (worth ${q.marks} mark${q.marks > 1 ? "s" : ""}):
${q.question}

${q.stimulus ? `STIMULUS:\n${stimulusToPlainText(q.stimulus)}\n\n` : ""}MARKING CRITERIA:
${buildCriteriaText(q)}

KEY CONTENT POINTS ANSWERS COULD INCLUDE:
${q.keyPoints || "N/A"}

SAMPLE FULL-MARK ANSWER (for reference only — the student's answer does not need to match it exactly):
${q.sampleAnswer}

STUDENT'S ANSWER:
"""
${studentAnswer}
"""

Award a mark from 0 to ${q.marks} based on the marking criteria above, and return your assessment as JSON with exactly these fields:
${JSON.stringify(GRADE_FIELDS_SCHEMA, null, 2)}`;
}

function clampMarks(value, max) {
  const n = Math.round(Number(value));
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(max, n));
}

function parseGradeJSON(text) {
  if (!text) throw new Error("Empty response from the model.");
  let cleaned = text.trim();
  const fenceMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenceMatch) cleaned = fenceMatch[1].trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    const braceMatch = cleaned.match(/\{[\s\S]*\}/);
    if (braceMatch) {
      try { return JSON.parse(braceMatch[0]); } catch (e2) { /* fall through */ }
    }
    throw new Error("Could not parse the marking result.");
  }
}

// ---------------------------------------------------------------------
// Provider dispatch
// ---------------------------------------------------------------------
function getProvider() {
  return localStorage.getItem(PROVIDER_STORAGE_KEY) || "claude";
}
function setProvider(p) {
  localStorage.setItem(PROVIDER_STORAGE_KEY, p);
}
function getApiKey(provider) {
  provider = provider || getProvider();
  return localStorage.getItem(PROVIDERS[provider].storageKey) || "";
}
function setApiKey(key, provider) {
  provider = provider || getProvider();
  localStorage.setItem(PROVIDERS[provider].storageKey, key);
}
function getModel(provider) {
  provider = provider || getProvider();
  return localStorage.getItem(PROVIDERS[provider].modelStorageKey) || PROVIDERS[provider].defaultModel;
}
function setModel(model, provider) {
  provider = provider || getProvider();
  localStorage.setItem(PROVIDERS[provider].modelStorageKey, model);
}

async function gradeAnswer(q, studentAnswer) {
  const provider = getProvider();
  if (provider === "gemini") return gradeWithGemini(q, studentAnswer);
  return gradeWithClaude(q, studentAnswer);
}

// ---- Claude (Anthropic) ----
const CLAUDE_SCHEMA = {
  type: "object",
  properties: {
    marks_awarded: { type: "integer" },
    verdict: { type: "string" },
    strengths: { type: "array", items: { type: "string" } },
    marks_lost: { type: "array", items: { type: "string" } },
    improvement_tips: { type: "array", items: { type: "string" } },
  },
  required: ["marks_awarded", "verdict", "strengths", "marks_lost", "improvement_tips"],
  additionalProperties: false,
};

async function gradeWithClaude(q, studentAnswer) {
  const apiKey = getApiKey("claude");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: getModel("claude"),
      max_tokens: 1500,
      system: buildSystemPrompt(),
      messages: [{ role: "user", content: buildUserContent(q, studentAnswer) }],
      output_config: { format: { type: "json_schema", schema: CLAUDE_SCHEMA } },
    }),
  });

  if (!res.ok) {
    throw await apiError(res);
  }
  const data = await res.json();
  const textBlock = (data.content || []).find((b) => b.type === "text");
  const parsed = parseGradeJSON(textBlock ? textBlock.text : "");
  parsed.marks_awarded = clampMarks(parsed.marks_awarded, q.marks);
  return parsed;
}

// ---- Gemini (Google) ----
const GEMINI_SCHEMA = {
  type: "OBJECT",
  properties: {
    marks_awarded: { type: "INTEGER" },
    verdict: { type: "STRING" },
    strengths: { type: "ARRAY", items: { type: "STRING" } },
    marks_lost: { type: "ARRAY", items: { type: "STRING" } },
    improvement_tips: { type: "ARRAY", items: { type: "STRING" } },
  },
  required: ["marks_awarded", "verdict", "strengths", "marks_lost", "improvement_tips"],
};

async function gradeWithGemini(q, studentAnswer) {
  const apiKey = getApiKey("gemini");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${getModel("gemini")}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: buildSystemPrompt() }] },
      contents: [{ role: "user", parts: [{ text: buildUserContent(q, studentAnswer) }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: GEMINI_SCHEMA,
        temperature: 0.2,
      },
    }),
  });

  if (!res.ok) {
    throw await apiError(res);
  }
  const data = await res.json();
  const candidate = data.candidates && data.candidates[0];
  if (!candidate) {
    if (data.promptFeedback && data.promptFeedback.blockReason) {
      throw new Error(`Blocked by Gemini safety filters (${data.promptFeedback.blockReason}).`);
    }
    throw new Error("No response returned by Gemini.");
  }
  const text = (candidate.content && candidate.content.parts || []).map((p) => p.text || "").join("");
  const parsed = parseGradeJSON(text);
  parsed.marks_awarded = clampMarks(parsed.marks_awarded, q.marks);
  return parsed;
}

async function apiError(res) {
  let message = `Request failed (HTTP ${res.status})`;
  try {
    const body = await res.json();
    message = (body && body.error && (body.error.message || body.error)) || message;
  } catch (e) { /* ignore parse failure */ }
  const err = new Error(typeof message === "string" ? message : JSON.stringify(message));
  err.status = res.status;
  return err;
}

// ---------------------------------------------------------------------
// Result rendering
// ---------------------------------------------------------------------
function fillList(elId, items) {
  const el = document.getElementById(elId);
  el.innerHTML = "";
  if (!items || items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "—";
    li.style.color = "var(--ink-soft)";
    el.appendChild(li);
    return;
  }
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    el.appendChild(li);
  });
}

function scoreColor(marksAwarded, maxMarks) {
  const pct = maxMarks > 0 ? marksAwarded / maxMarks : 0;
  return pct >= 0.8 ? "var(--good)" : pct >= 0.5 ? "var(--warn)" : "var(--bad)";
}

// "official" = copied/paraphrased from a real per-mark-value table in the
// source paper. "derived" = the source paper didn't give one (a combined
// range like "3-4 marks", a per-component rule, a missing band, or in a
// couple of cases a mismatched/reused guideline in the paper itself), so
// the specific band wording was written or adapted rather than copied.
// Verified paper-by-paper — see the app's data notes for details.
function setCriteriaSourceBadge(elId, criteriaSource) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (criteriaSource === "derived") {
    el.textContent = "Derived criteria";
    el.className = "criteria-source-badge derived";
    el.title = "The source paper didn't give a clean per-mark table here, so this wording was written/adapted rather than copied verbatim.";
  } else {
    el.textContent = "Actual criteria";
    el.className = "criteria-source-badge official";
    el.title = "Copied/paraphrased directly from the source paper's own marking guidelines.";
  }
}

// Renders the official mark-band descriptors (highest first, as stored) so
// students can see exactly what was required at each level — not just the
// AI's summary of their own answer.
function renderCriteriaList(elId, criteria) {
  const el = document.getElementById(elId);
  el.innerHTML = "";
  (criteria || []).forEach((c) => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = `${c.marks} mark${c.marks === 1 ? "" : "s"}: `;
    li.appendChild(strong);
    li.appendChild(document.createTextNode(c.descriptor));
    el.appendChild(li);
  });
}

function renderResult(grade, answer) {
  const q = state.question;
  document.getElementById("score-circle").textContent = `${grade.marks_awarded}/${q.marks}`;
  document.getElementById("score-circle").style.background = scoreColor(grade.marks_awarded, q.marks);
  document.getElementById("verdict-text").textContent = grade.verdict || "";
  document.getElementById("result-source-caption").textContent = q.source ? `Source: ${q.source}` : "";
  renderCriteriaList("criteria-list", q.criteria);
  setCriteriaSourceBadge("result-criteria-source", q.criteriaSource);
  fillList("strengths-list", grade.strengths);
  fillList("gaps-list", grade.marks_lost);
  fillList("tips-list", grade.improvement_tips);
  document.getElementById("sample-answer-text").textContent = q.sampleAnswer;
  document.getElementById("key-points-text").textContent = q.keyPoints ? `Answers could also include: ${q.keyPoints}` : "";
  document.getElementById("your-answer-text").textContent = answer;
}

document.getElementById("redo-btn").addEventListener("click", () => {
  renderQuestion();
  showView("view-question");
});
document.getElementById("next-btn").addEventListener("click", () => loadNewQuestion());

// ---------------------------------------------------------------------
// History view
// ---------------------------------------------------------------------
document.getElementById("nav-history").addEventListener("click", () => {
  renderHistory();
  showView("view-history");
});
document.getElementById("history-detail-back").addEventListener("click", () => showView("view-history"));
document.getElementById("history-detail-redo-btn").addEventListener("click", () => {
  if (state.historyDetail) redoAttemptQuestion(state.historyDetail);
});

// Returns the most recent attempt for each (subject, question) pair where that
// most recent attempt lost at least one mark — i.e. questions worth revisiting.
// If a question was later re-answered for full marks, it drops off this list.
function wrongAttempts() {
  const seen = new Set();
  const result = [];
  Store.attempts.forEach((a) => {
    const key = a.subject + "::" + a.questionId;
    if (seen.has(key)) return;
    seen.add(key);
    if (a.marks && a.marksAwarded < a.marks) result.push(a);
  });
  return result;
}

document.getElementById("retry-wrong-btn").addEventListener("click", () => {
  const wrong = wrongAttempts();
  if (wrong.length === 0) return;
  const pick = wrong[Math.floor(Math.random() * wrong.length)];
  const q = questionsFor(pick.subject, pick.marks).find((qq) => qq.id === pick.questionId);
  if (!q) return;
  state.subject = pick.subject;
  state.topic = null;
  state.marks = pick.marks;
  state.mixed = false;
  state.question = q;
  state.exhausted = false;
  renderQuestion();
  showView("view-question");
});

function renderSkipQueueButton() {
  const queue = getSkipQueue();
  const btn = document.getElementById("skip-queue-btn");
  const hint = document.getElementById("skip-queue-hint");
  btn.disabled = queue.length === 0;
  hint.textContent = queue.length === 0
    ? "Nothing skipped right now."
    : `${queue.length} question${queue.length === 1 ? "" : "s"} you skipped, not marked as answered.`;
}

document.getElementById("skip-queue-btn").addEventListener("click", () => {
  const queue = getSkipQueue();
  if (queue.length === 0) return;
  const pick = queue[Math.floor(Math.random() * queue.length)];
  const q = questionsFor(pick.subject, pick.marks).find((qq) => qq.id === pick.questionId);
  if (!q) {
    removeFromSkipQueue(pick.questionId, pick.subject);
    renderSkipQueueButton();
    return;
  }
  state.subject = pick.subject;
  state.topic = null;
  state.marks = pick.marks;
  state.mixed = false;
  state.question = q;
  state.exhausted = false;
  renderQuestion();
  showView("view-question");
});

function renderHistory() {
  const attempts = Store.attempts;
  const statsEl = document.getElementById("history-stats");
  const listEl = document.getElementById("history-list");
  const subEl = document.getElementById("history-sub");

  subEl.textContent = Store.isSignedIn()
    ? "Every question you've answered, synced across your devices — most recent first."
    : "Every question you've answered on this device, most recent first." +
      (Store.cloudEnabled ? " Sign in via Settings to sync across devices." : "");

  renderSkipQueueButton();

  if (attempts.length === 0) {
    statsEl.innerHTML = "";
    listEl.innerHTML = `<div class="empty-state"><p class="eyebrow">Nothing here yet</p><p>You haven't answered any questions yet.</p></div>`;
    document.getElementById("retry-wrong-btn").disabled = true;
    document.getElementById("retry-wrong-hint").textContent = "";
    return;
  }

  const total = attempts.length;
  const avgPct = Math.round(
    (attempts.reduce((sum, a) => sum + (a.marks ? a.marksAwarded / a.marks : 0), 0) / total) * 100
  );
  const fullMarks = attempts.filter((a) => a.marksAwarded === a.marks).length;

  statsEl.innerHTML = `
    <div class="history-stat"><div class="val">${total}</div><div class="lbl">Questions answered</div></div>
    <div class="history-stat"><div class="val">${avgPct}%</div><div class="lbl">Average score</div></div>
    <div class="history-stat"><div class="val">${fullMarks}</div><div class="lbl">Full-mark answers</div></div>
  `;

  const wrong = wrongAttempts();
  const retryBtn = document.getElementById("retry-wrong-btn");
  const retryHint = document.getElementById("retry-wrong-hint");
  retryBtn.disabled = wrong.length === 0;
  retryHint.textContent = wrong.length === 0
    ? "No wrong answers to revisit right now — nice."
    : `${wrong.length} question${wrong.length === 1 ? "" : "s"} you lost marks on last time.`;

  listEl.innerHTML = "";
  attempts.forEach((a, idx) => {
    const row = document.createElement("div");
    row.className = "history-row";
    const date = new Date(a.timestamp);
    row.innerHTML = `
      <div class="hr-score" style="background:${scoreColor(a.marksAwarded, a.marks)}">${a.marksAwarded}/${a.marks}</div>
      <div class="hr-body">
        <div class="hr-q"></div>
        <div class="hr-meta">${a.topic ? a.topic + " • " : ""}${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
      </div>
      <button class="btn btn-secondary hr-redo-btn" type="button">Redo</button>
    `;
    row.querySelector(".hr-q").textContent = a.questionText;
    row.querySelector(".hr-redo-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      redoAttemptQuestion(a);
    });
    row.addEventListener("click", () => openHistoryDetail(a));
    listEl.appendChild(row);
  });
}

// Jumps straight into a fresh attempt at the exact question a past attempt
// was for (used by both the History row "Redo" button and the detail view).
function redoAttemptQuestion(a) {
  const q = (QUESTIONS[a.subject] || []).find((qq) => qq.id === a.questionId);
  if (!q) return;
  state.subject = a.subject;
  state.topic = null;
  state.marks = a.marks;
  state.mixed = false;
  state.question = q;
  state.exhausted = false;
  renderQuestion();
  showView("view-question");
}

function openHistoryDetail(a) {
  state.historyDetail = a;
  document.getElementById("hd-marks-pill").textContent = `${a.marksAwarded}/${a.marks}`;
  document.getElementById("hd-topic-pill").textContent = a.topic || "Business Studies";
  document.getElementById("hd-source-pill").textContent = a.source || "Original question";
  document.getElementById("hd-date-pill").textContent = new Date(a.timestamp).toLocaleString();
  document.getElementById("hd-question-text").textContent = a.questionText;
  document.getElementById("hd-score-circle").textContent = `${a.marksAwarded}/${a.marks}`;
  document.getElementById("hd-score-circle").style.background = scoreColor(a.marksAwarded, a.marks);
  document.getElementById("hd-verdict-text").textContent = a.verdict || "";
  const srcQuestion = (QUESTIONS[a.subject] || []).find((q) => q.id === a.questionId);
  document.getElementById("hd-criteria-block").style.display = srcQuestion ? "block" : "none";
  if (srcQuestion) {
    renderCriteriaList("hd-criteria-list", srcQuestion.criteria);
    setCriteriaSourceBadge("hd-criteria-source", srcQuestion.criteriaSource);
  }
  fillList("hd-strengths-list", a.strengths);
  fillList("hd-gaps-list", a.marksLost);
  fillList("hd-tips-list", a.improvementTips);
  document.getElementById("hd-your-answer-text").textContent = a.answer;
  showView("view-history-detail");
}

Store.onChange(() => {
  if (document.getElementById("view-history").classList.contains("active")) renderHistory();
  renderAccountSection();
});

// ---------------------------------------------------------------------
// Settings modal: provider + key + account + backup
// ---------------------------------------------------------------------
const settingsModal = document.getElementById("settings-modal");

function populateModelSelect(provider) {
  const sel = document.getElementById("model-select");
  const customInput = document.getElementById("model-custom-input");
  const current = getModel(provider);
  const known = PROVIDERS[provider].models;
  const isKnown = known.some((m) => m.id === current);

  sel.innerHTML = "";
  known.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.textContent = m.label;
    sel.appendChild(opt);
  });
  const customOpt = document.createElement("option");
  customOpt.value = CUSTOM_MODEL_VALUE;
  customOpt.textContent = "Custom (type exact model ID)…";
  sel.appendChild(customOpt);

  sel.value = isKnown ? current : CUSTOM_MODEL_VALUE;
  customInput.style.display = isKnown ? "none" : "block";
  customInput.value = isKnown ? "" : current;
  customInput.placeholder = `Exact ${PROVIDERS[provider].label} model ID`;
}

document.getElementById("model-select").addEventListener("change", (e) => {
  document.getElementById("model-custom-input").style.display =
    e.target.value === CUSTOM_MODEL_VALUE ? "block" : "none";
});

function openSettingsModal() {
  const provider = getProvider();
  document.getElementById("provider-select").value = provider;
  document.getElementById("apikey-input").value = getApiKey(provider);
  document.getElementById("apikey-input").placeholder = PROVIDERS[provider].placeholder;
  document.getElementById("provider-key-hint").innerHTML =
    `— get one at <a href="${PROVIDERS[provider].helpUrl}" target="_blank" rel="noopener">${PROVIDERS[provider].helpLabel}</a>`;
  document.getElementById("apikey-error").textContent = "";
  populateModelSelect(provider);
  renderAccountSection();
  document.getElementById("selfmark-toggle").checked = isSelfMarkMode();
  document.getElementById("ai-settings-block").style.display = isSelfMarkMode() ? "none" : "block";
  settingsModal.classList.add("active");
}
function closeSettingsModal() {
  settingsModal.classList.remove("active");
}

document.getElementById("selfmark-toggle").addEventListener("change", (e) => {
  setSelfMarkMode(e.target.checked);
  document.getElementById("ai-settings-block").style.display = e.target.checked ? "none" : "block";
});

document.getElementById("provider-select").addEventListener("change", (e) => {
  const provider = e.target.value;
  document.getElementById("apikey-input").value = getApiKey(provider);
  document.getElementById("apikey-input").placeholder = PROVIDERS[provider].placeholder;
  document.getElementById("provider-key-hint").innerHTML =
    `— get one at <a href="${PROVIDERS[provider].helpUrl}" target="_blank" rel="noopener">${PROVIDERS[provider].helpLabel}</a>`;
  populateModelSelect(provider);
});

function renderAccountSection() {
  const notConfigured = document.getElementById("cloud-not-configured");
  const signedOut = document.getElementById("cloud-signed-out");
  const signedIn = document.getElementById("cloud-signed-in");
  notConfigured.style.display = "none";
  signedOut.style.display = "none";
  signedIn.style.display = "none";

  if (!Store.cloudEnabled) {
    notConfigured.style.display = "block";
  } else if (Store.isSignedIn()) {
    signedIn.style.display = "block";
    document.getElementById("signed-in-email").textContent = Store.user.email || Store.user.displayName || "your account";
  } else {
    signedOut.style.display = "block";
  }
}

document.getElementById("settings-btn").addEventListener("click", () => {
  state.pendingAfterKeySave = null;
  openSettingsModal();
});
document.getElementById("apikey-cancel-btn").addEventListener("click", () => {
  state.pendingAfterKeySave = null;
  closeSettingsModal();
});
document.getElementById("apikey-save-btn").addEventListener("click", () => {
  if (isSelfMarkMode()) {
    closeSettingsModal();
    if (state.pendingAfterKeySave) {
      const cb = state.pendingAfterKeySave;
      state.pendingAfterKeySave = null;
      cb();
    }
    return;
  }
  const provider = document.getElementById("provider-select").value;
  const val = document.getElementById("apikey-input").value.trim();
  if (!val) {
    document.getElementById("apikey-error").textContent = "Please enter a key.";
    return;
  }
  const modelSelectVal = document.getElementById("model-select").value;
  const model =
    modelSelectVal === CUSTOM_MODEL_VALUE
      ? document.getElementById("model-custom-input").value.trim()
      : modelSelectVal;
  if (!model) {
    document.getElementById("apikey-error").textContent = "Please enter a model ID.";
    return;
  }
  setProvider(provider);
  setApiKey(val, provider);
  setModel(model, provider);
  closeSettingsModal();
  if (state.pendingAfterKeySave) {
    const cb = state.pendingAfterKeySave;
    state.pendingAfterKeySave = null;
    cb();
  }
});

document.getElementById("google-signin-btn").addEventListener("click", async () => {
  try {
    await Store.signInGoogle();
    renderAccountSection();
  } catch (e) {
    document.getElementById("apikey-error").textContent = "Sign-in failed: " + e.message;
  }
});
document.getElementById("google-signout-btn").addEventListener("click", async () => {
  await Store.signOut();
  renderAccountSection();
});

document.getElementById("export-history-btn").addEventListener("click", () => {
  const blob = new Blob([Store.exportJSON()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `hsc-marking-history-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
document.getElementById("import-history-btn").addEventListener("click", () => {
  document.getElementById("import-history-file").click();
});
document.getElementById("import-history-file").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    await Store.importJSON(text);
    document.getElementById("apikey-error").style.color = "var(--good)";
    document.getElementById("apikey-error").textContent = "History imported.";
    renderHistory();
  } catch (err) {
    document.getElementById("apikey-error").style.color = "var(--bad)";
    document.getElementById("apikey-error").textContent = "Import failed: " + err.message;
  }
  e.target.value = "";
});

// ---------------------------------------------------------------------
// Theme (light/dark) — manual override on top of the OS default
// ---------------------------------------------------------------------
const THEME_STORAGE_KEY = "hsc_theme";

function effectiveTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function updateThemeToggleLabel() {
  document.getElementById("theme-toggle-label").textContent =
    effectiveTheme() === "dark" ? "Dark mode" : "Light mode";
}
function applyStoredTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    document.documentElement.setAttribute("data-theme", stored);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  updateThemeToggleLabel();
}
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = effectiveTheme() === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_STORAGE_KEY, next);
  applyStoredTheme();
});
applyStoredTheme();

// ---------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------
Store.init();
renderSubjects();
showView("view-home");
