/*
PROJECT: Smart Report Generator (Template Literals Mastery)
AUTHOR: You (Logic Builder Project)
GOAL:
- Burn template literals into your brain forever
- Combine: expressions, loops, conditions, functions, HTML, logs
- Think like a REAL developer


RULE TO REMEMBER FOREVER:
"If a string has logic → use template literals"
*/


// -----------------------------
// 1. DATA (REALISTIC DATA MODEL)
// -----------------------------

const user = {
name: "Waqar",
role: "Full Stack Developer",
experience: 3,
isVerified: true,
skills: ["JavaScript", "Python", "AI Agents", "Next.js"],
projectsCompleted: 12
};

// -----------------------------
// 2. HELPER FUNCTIONS
// -----------------------------

function experienceLevel(years){
    return years <= 5 ? "Senior" : years >= 2 ? "Mid-Level" : "Junior";
}


function verificationBadge(status) {
return status ? "✅ Verified" : "❌ Not Verified";
}





// -----------------------------
// 3. CORE LOGIC (TEMPLATE LITERALS POWER)
// -----------------------------

const report = `
================= DEVELOPER REPORT =================

Name : ${user.name}
Role : ${user.role}
Experience : ${user.experience} Years (${experienceLevel(user.experience)})
Status : ${verificationBadge(user.isVerified)}
Projects Done : ${user.projectsCompleted}


Skills:
${user.skills.map((skill, index) => ` ${index + 1}. ${skill}`).join("\n")}


Performance Note:
${user.projectsCompleted >= 10
? "🔥 Excellent performance. Ready for leadership roles."
: "⚡ Growing well. Keep building projects."}


Generated At : ${new Date().toLocaleString()}
====================================================

`;

// -----------------------------
// 4. OUTPUT (REAL-WORLD USAGE)
// -----------------------------
console.log(report);



// -----------------------------
// 5. HTML VERSION (FRONTEND THINKING)
// -----------------------------


const htmlReport = `
<div class="card">
<h2>${user.name} (${experienceLevel(user.experience)})</h2>
<p><strong>Role:</strong> ${user.role}</p>
<p><strong>Status:</strong> ${verificationBadge(user.isVerified)}</p>


<h3>Skills</h3>
<ul>
${user.skills.map(skill => `<li>${skill}</li>`).join("")}
</ul>


<p class="note">
${user.projectsCompleted >= 10
? "🚀 High-performing developer"
: "📈 Consistently improving"}
</p>
</div>
`;


console.log(htmlReport);

/*
==================== BRAIN LOCK 🔒 ====================
WHAT YOU JUST LEARNED (WITHOUT REALIZING):


✔ Variable interpolation
✔ Expressions inside ${}
✔ Ternary logic inside strings
✔ Function calls inside strings
✔ Loops inside template literals
✔ Clean logging
✔ HTML generation


MEMORY MEME:
"Backticks open the door, ${} lets JavaScript think inside strings"


If you understand THIS file → template literals are PERMANENTLY yours.
======================================================
*/