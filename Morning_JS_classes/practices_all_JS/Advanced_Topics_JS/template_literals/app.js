// 🌟 TEMPLATE LITERALS — BEST CODE EXAMPLES (LOGIC-BUILDING)

// ❌ Old way (confusing brain)

const name = "Waqar";
const role = "Developer";
const experience = 3;

// const intro = "My name is " + name + ". I am a " + role + " with " + experience + " years of experience.";

// console.log(intro);


// ✅ New way (Template Literal = thinking in sentences)


const intro = `My name is ${name}. I am a ${role} with ${experience} years of experience.`;

console.log(intro);

// 2️⃣ The “Math + Logic Inside String” Example

const price = 1200;
const taxRate = 0.15;

console.log(`Total price after tex: ${price + price * WebTransportDatagramDuplexStream}`);



// 🧠 Logic learned:

// ${} is not variable only

// It is a mini JavaScript engine

// 👉 You can run any JS logic inside it


// 3️⃣ Decision-Making Inside a String (🔥 Interview Favorite)

// const age = 18;
const age = 17;
console.log(`user is ${age >= 18 ? "Allowed" : "Not Allowed"} to access the system`);


// 🧠 Key takeaway:

// if/else thinking inside a string

// Perfect for UI messages, logs, alerts

// 4️⃣ Multi-Line Message (Real Project Usage)

const email = `
Hello Waqar,

Your application has been successfully submitted.

Status: Pending Review
Team: HiringMine

Regards,
HR Team
`;

console.log(email);


// 💡 Memory anchor:

// Template literals respect formatting + emotion


// 5️⃣ Function + Template Literal (Thinking Level Up)
function formatUser(user) {
    return `User: ${user.name} | Role: ${user.role}`;
}

const user = {name: "Waqar", role: "Full Stack Developer"};

console.log(formatUser(user));


// 🧠 Logic learned:

// Templates make functions readable

// Clean return values

// Great for APIs & services



// 6️⃣ HTML Generation (🔥 Real Frontend Power)
const user1 = {
    name: "Waqar",
    skills: ["JavaScript", "Python", "Ai Agents"]
};

const html = `
<div class="card">
<h2>${user1.name}</h2>
  <p>Skills: ${user1.skills.join(", ")}</p>

</div>
`

console.log(html)


// 🧠 This is how frameworks think internally
// React, Vue, Next — all rely on this concept.


// 7️⃣ Loop + Template Literals (Logic Builder)

const products = ["Laptop", "Phone", "Tablet"];

let list = `
<ul>
  ${products.map(p => `<li>${p}</li>`).join("")}
</ul>
`
console.log(list);
// Template literals + array methods = UI power


// 8️⃣ Nested Template Literals (Advanced but Elegant)
const user2 = "Waqar";
const role1 = "Developer";

console.log(`Welcome ${`${user2} (${role1})`} to the platform`);

// 🧠 Lesson:

// Templates can live inside templates

// Think composition, not complexity




// 9️⃣ Tagged Template (🔥 Brain-Expanding Example)
function secure (strings, ...values){
    return strings.reduce(
        (result, str, i) => result + str + (values[i] ? String(values[i]).toUpperCase() : ""),
        ""
    );
}

const name1 = "waqar"
console.log(secure`Hello ${name1}, welcome back`);


// 🧠 Deep logic:

// JavaScript splits string & values

// You control formatting, security, validation

// Used in:

// Security

// Localization

// Framework internals

// 🔟 Logging Like a Professional Developer
const method = "POST";
const status = 201;
const endpoint = "/api/users";

console.log(`[${new Date().toISOString()}] ${method} ${endpoint} -> Status: ${status} `);

// 💡 Why important:

// Clean logs = debugging superpower

// Widely used in backend & DevOps


/*

🧠 FINAL MEMORY LOCK 🔒 (Never Forget This)
Think of Template Literals as:

🧩 A sentence + JavaScript brain inside it

Remember this rule:
Backticks = Freedom
${} = JavaScript Brain

One-line mantra:

“If a string needs logic, it needs template literals.”


Interview Killer Summary (Say This Confidently)

“Template literals allow us to create dynamic, readable, and multi-line strings using backticks and expression interpolation. They improve code readability, reduce concatenation errors, support embedded logic, and are heavily used in real-world frontend and backend applications.”
*/