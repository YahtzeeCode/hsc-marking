# HSC Marking Practice

A local, no-install practice tool for HSC exam-style questions. Pick a subject, pick a
marker value (1–6), answer the question, and get it marked instantly against the real
HSC marking criteria — with feedback on what you did well, why you lost marks, how to
improve, and a full-mark sample answer.

Currently live: **Business Studies** (333 questions across all 6 marker values, sourced
from real CSSA / Penrith / Barker / Cherrybrook Tech / Knox / Hills Grammar / Pymble /
Riverview / Shore / Sydney Boys / Sydney Tech Trial HSC papers, plus a handful written
in the same NESA marking style to round out thin marker values). Financial-statement
and data-table stimulus (balance sheets, income statements, ratio tables, etc.) render
as real formatted tables, not flattened text. Economics and English Standard are
stubbed in and ready to fill in later.

## Running it

No install, no Node/Python needed — it's a plain static web page. There's a tiny
built-in server (just PowerShell) so the browser loads it over `http://` rather than
`file://`, which is the most reliable way to run it.

1. Double-click **`start.bat`**. It starts a local server (`serve.ps1`, using nothing
   but built-in PowerShell) on `http://localhost:8091` and opens it in your browser.
   Leave the PowerShell window it opens running in the background while you use the app;
   closing it stops the server.
   - Alternatively, double-click `index.html` directly — most browsers will run it fine
     from disk too, but if the page looks blank, use `start.bat` instead.
2. The first time you submit an answer, you'll be asked for an **Anthropic API key**.
   Get one free at [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys).
   The key is stored only in your browser's local storage and is sent only to
   `api.anthropic.com` when marking an answer — nowhere else. Click the ⚙️ icon
   any time to change or clear it.
3. Pick **Business Studies** → a marker value → answer → **Submit for marking**.

Marking is done by Claude (`claude-opus-5`), called directly from the browser.

## Adding more questions

All questions live in `data/questions.js` as a plain JS array, one object per question:

```js
{
  id: "bs-4-9",
  marks: 4,
  topic: "Marketing",
  source: "Where this came from",
  stimulus: "Optional stimulus text, or null",
  question: "The question text.",
  criteria: [
    { marks: 4, descriptor: "..." },
    { marks: 3, descriptor: "..." },
    // ...down to 1
  ],
  keyPoints: "Short list of content the answer could include.",
  sampleAnswer: "A full-mark sample answer."
}
```

`stimulus` can also be a structured object instead of plain text, for questions with a
data table (balance sheet, income statement, ratio table, budget, etc.) — it renders as
a real HTML table rather than flattened text:

```js
stimulus: {
  blocks: [
    { type: "text", text: "Some Business Pty Ltd Income Statement" },
    { type: "table", title: "Table", columns: ["", "$", "$"], rows: [
      ["Sales", "", "350 000"],
      ["Net profit", "", "24 000"]
    ] }
  ]
}
```

`blocks` can mix any number of `text` and `table` entries in order (e.g. narrative
before/after a table, or two tables for a two-year comparison).

Add new objects to the `"business-studies"` array (or create `"economics"` /
`"english-standard"` arrays and flip `enabled: true` for that subject in `app.js`).

## Notes

- The "papers" folder you shared (CSSA 2022/2024/2025, Penrith 2021, Barker 2022,
  Cherrybrook Tech 2014/2015, Knox 2021/2022) was used as the source for the real
  questions in the bank — each carries its `source` field so you can trace it back.
  A handful of questions (marked `source: "Original — NESA-style"`) were written to
  fill remaining gaps, following the same marking-criteria style as the real ones.
- "Redo" re-marks the same question from scratch; "Next question" picks a new random
  question at the same marker value (it won't repeat a question until you've seen every
  question at that marker value once).
