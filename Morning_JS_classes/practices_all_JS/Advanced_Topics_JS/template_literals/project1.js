/*
====================================================
PROJECT NAME: The ONE – Template Literals Logic Engine
PURPOSE:
- This ONE file is enough to master template literals FOREVER
- No theory, no noise, only PURE LOGIC + REAL USAGE

MEMORY RULE (DO NOT FORGET):
"Template literals are not strings — they are logic containers"
====================================================
*/

// -----------------------------
// 1. REAL DATA (LIFE-LIKE MODEL)
// -----------------------------

const developer = {
  name: "Waqar",
  stack: "Full Stack",
  years: 3,
  active: true,
  skills: ["JavaScript", "Python", "AI Agents", "Next.js"],
  commitsThisMonth: 128
};

// -----------------------------
// 2. PURE LOGIC FUNCTIONS
// -----------------------------

const level = y => y >= 5 ? "Senior" : y >= 2 ? "Mid-Level" : "Junior";
const status = a => a ? "🟢 Active" : "🔴 Inactive";
const performance = c => c > 100 ? "🔥 Exceptional" : "⚡ Consistent";

// -----------------------------
// 3. THE CORE (THE HEART 🧠)
// -----------------------------

const output = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👨‍💻 DEVELOPER INTELLIGENCE REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name        : ${developer.name}
Stack       : ${developer.stack}
Level       : ${level(developer.years)} Developer
Experience  : ${developer.years} Years
Status      : ${status(developer.active)}
Performance : ${performance(developer.commitsThisMonth)}

Skills Matrix:
${developer.skills.map((s, i) => `  ${i + 1}. ${s}`).join("\n")}

Logic Verdict:
${developer.active && developer.commitsThisMonth > 50
  ? "✅ Reliable, productive, and growth-oriented developer"
  : "⚠ Needs consistency and discipline"}

Generated At: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

// -----------------------------
// 4. OUTPUT (ONE LINE THAT TEACHES EVERYTHING)
// -----------------------------

console.log(output);

/*
====================================================
WHY THIS PROJECT IS ENOUGH (READ THIS CAREFULLY):

✔ Variables inside template literals
✔ Functions executed inside ${}
✔ Conditions inside strings
✔ Loops inside strings
✔ Formatting without concatenation
✔ Real-world logging style
✔ Human-readable output

IF YOU UNDERSTAND THIS FILE:
→ You understand template literals
→ You will NEVER forget them

FINAL MEMORY MEME:
"Backticks create space, ${} injects intelligence"
====================================================
*/
