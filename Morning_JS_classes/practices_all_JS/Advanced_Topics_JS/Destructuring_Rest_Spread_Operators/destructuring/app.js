// 1️⃣ API Response Destructuring (Very Common)
// 📌 Problem

// APIs return large objects, but you need only some fields.
const response = {
    status: 200,
    data: {
        id: 1,
        name: "Waqar",
        email: "waqar@gmail.com",
    },
};

const {data: {id, name}} = response

console.log(response);

// ✔ Clean access
// ✔ No repeated response.data

console.log("****************************************");

// 2️⃣ Function Parameter Destructuring (Professional Pattern)
// 📌 Used in React, Express, Utilities
function createUser({name, email, role ="user"}){
    console.log(name, email, role);
}

createUser({ name: "Ali", email: "Ali@gmail.com" });

// ✔ Self-documenting code
// ✔ Default values built-in

console.log("****************************************************");
// 3️⃣ React Props Destructuring (Industry Standard)
function profile({name, age, isOnline} = {}){
    return `<h2>${name || "Unknown"} ${age || 0}</h2>`;
}

console.log(profile({name: "Ali", age: 20, isOnline: true}));
console.log(profile()); // safely works


// ✔ Cleaner JSX
// ✔ No props.name noise

console.log("************************************************");
// 4️⃣ React State Update with Destructuring
const user = {name1: "Ali", age:20, city: "Larkana"};

const { name1, ...rest} = user;

const updatedUser = {...rest, name1:"Waqar"};

console.log(updatedUser);

// ✔ Immutable update
// ✔ Production-safe

console.log("***************************************");
// 5️⃣ Environment Config Destructuring (Node.js)

// const { PORT = 3000, DB_URL } = process.env;
// ✔ Safe defaults
// ✔ Cleaner configuration


console.log("***************************************");
// 6️⃣ Database Result Destructuring
const users = {
    id: 1, 
    name: "Khan",
    password: "secret",
};

const {password, ...safeUser} = users
console.log(users);

// ✔ Removes sensitive data
// ✔ Used before sending API response


// 7️⃣ Array Destructuring in Hooks (React useState)
// const [count, setCount] = useState(0);


// ✔ This is destructuring
// ✔ Every React dev uses it


console.log("************************************88888");

// 8️⃣ Loop Destructuring (Clean Iteration)
const userRepeat = [
    {name: "Ali", age: 21},
    {name: "Asad", age: 18},
];

for (const {name, age} of userRepeat){
    console.log(name, age);
}

// ✔ No extra variables
// ✔ Very readable

console.log("*******************************************");
// 9️⃣ Nested JSON Destructuring (Real APIs)

const apiData = {
    user: {
        profile: {
            userName: "Waqar",
            followers: 1200,
        },
    },
};

const {
    user: {
        profile: {userName, followers}
    }
} = apiData

console.log(apiData);

// ✔ Handles deep structures
// ✔ Avoids long dot chains

console.log("****************************************");



// 🔟 Swap Values (Utility Logic)
let min = 5;
let max = 10;

// [min, max] = [max, min];
const data = [min, max] = [max, min];
console.log(data);


// ✔ No temp variable
// ✔ Clean & fast



/*

🧠 SUPER EASY MEMORY TRICKS
Concept         	   Memory Image
Destructuring	       🧩 Pick what you need
Object Destructuring	🗂 Pick by key name
Array Destructuring	   📍 Pick by position
Nested Destructuring	🎯 Go deeper
Function Params	      📦 Unpack inputs
🏆 Interview Tip (Say This Confidently)

“Destructuring is heavily used in React hooks, API responses, Node.js configs, and function parameters. It improves readability, avoids repetition, and makes code more maintainable.”

Say this → interviewer nods immediately 😎

 */





/*
1️⃣ Problem with your createUser call

Your function is:

function createUser({name, email, role ="user"}){
    console.log(name, email, role);
}


Here, you are destructuring an object in the parameter: { name, email, role = "user" }.

But you called it like this:

createUser("Ali", "Ali@gmail.com");


❌ Issue: "Ali" is a string, not an object.
Destructuring expects an object, so JS tries to do:

const {name, email, role} = "Ali"; // ❌ ERROR or undefined


That’s why you get undefined.

✅ Correct Way: Pass an Object
createUser({ name: "Ali", email: "Ali@gmail.com" });


Output:

Ali Ali@gmail.com user


role is defaulted to "user" automatically.

Memory Trick: Function Parameter Destructuring = Object Unpacking

Think of it like: “I want only certain keys from the object I pass in.”

Pass an object

JS extracts only the keys you need

Default values fill in missing keys

2️⃣ React Props Destructuring Example

Your code:

function profile({name, age, isOnline}){
    return `<h2>${name} ${age}</h2>`;
}

profile();


❌ Issue: You called profile() without an argument.

JS tries to do: { name, age, isOnline } = undefined → ERROR

✅ Fix: Provide a default empty object
function profile({name, age, isOnline} = {}){
    return `<h2>${name || "Unknown"} ${age || 0}</h2>`;
}

console.log(profile({name: "Ali", age: 20, isOnline: true}));
console.log(profile()); // safely works


Output:

<h2>Ali 20</h2>
<h2>Unknown 0</h2>


Key Points:

Always pass an object when destructuring function parameters.

If the function can be called without arguments, provide a default empty object: ({} = {}).

Use default values for each property if needed:

function profile({name = "Unknown", age = 0, isOnline = false} = {}){}


✅ Now it is safe, readable, and production-ready.
*/



