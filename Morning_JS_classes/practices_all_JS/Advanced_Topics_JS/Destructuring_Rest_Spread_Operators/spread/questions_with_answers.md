# 📦 JavaScript Spread Operator (`...`)
> **30 Exam-Focused Questions & Answers (Beginner → Pro)**  
> Clean • Logical • Interview-Ready • Easy to Revise

This document is designed so that **any beginner**, **student**, or **developer** can understand the **Spread Operator** just by reading questions and answers.  
Perfect for **exams**, **interviews**, and **quick revision**.

---

## 📌 What You Will Learn
✔ Concept clarity  
✔ Practical understanding  
✔ Exam-ready answers  
✔ Common mistakes  
✔ Interview-frequently-asked points  

---

## 1️⃣ What is the spread operator in JavaScript?

**Answer:**  
The spread operator (`...`) is used to **expand iterable elements** (arrays, objects, strings) into **individual values**.

---

## 2️⃣ In which version of JavaScript was the spread operator introduced?

**Answer:**  
It was introduced in **ES6 (ECMAScript 2015)**.  
Object spread was standardized in **ES2018**.

---

## 3️⃣ Why is the spread operator called “spread”?

**Answer:**  
Because it **spreads** a collection (array/object) into **separate elements**.

---

## 4️⃣ What data types support the spread operator?

**Answer:**  
- Arrays  
- Objects  
- Strings  
- Any iterable (like Maps, Sets)

---

## 5️⃣ Can the spread operator be used on non-iterables?

**Answer:**  
❌ No.  
Using it on non-iterables (like numbers or booleans) causes an error.

---

## 6️⃣ How do you copy an array using spread?

**Answer:**
```js
const arr = [1, 2, 3];
const copy = [...arr];
This creates a new array, not a reference.

7️⃣ Why is spread preferred over direct assignment for arrays?
Answer:
Because direct assignment copies the reference, while spread creates a new array.

8️⃣ How do you merge two arrays using spread?
Answer:

js
Copy code
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
9️⃣ How do you add new values while copying an array?
Answer:

js
Copy code
const nums = [2, 3];
const result = [1, ...nums, 4];
🔟 How is spread used with objects?
Answer:
It copies or merges object properties into a new object.

1️⃣1️⃣ How do you copy an object using spread?
Answer:

js
Copy code
const user = { name: "Ali", age: 20 };
const copyUser = { ...user };
1️⃣2️⃣ How do you merge two objects?
Answer:

js
Copy code
const a = { x: 1 };
const b = { y: 2 };
const result = { ...a, ...b };
1️⃣3️⃣ What happens if object keys are the same?
Answer:
The last key overwrites the previous one.

js
Copy code
{ ...{ a: 1 }, ...{ a: 5 } } // { a: 5 }
1️⃣4️⃣ Is the spread operator immutable?
Answer:
Yes.
It does not modify the original array or object.

1️⃣5️⃣ Does spread create a deep copy?
Answer:
❌ No.
It creates a shallow copy.

1️⃣6️⃣ What is a shallow copy?
Answer:
A copy where nested objects or arrays still share the same reference.

1️⃣7️⃣ Give an example of shallow copy issue.
Answer:

js
Copy code
const user = { skills: ["JS"] };
const copy = { ...user };
copy.skills.push("React");
Both objects are affected.

1️⃣8️⃣ How is spread used in function calls?
Answer:
It passes array values as individual arguments.

js
Copy code
sum(...[1, 2, 3]);
1️⃣9️⃣ Why is spread useful in function calls?
Answer:
It avoids manual indexing and makes code cleaner and readable.

2️⃣0️⃣ Can spread be used with strings?
Answer:
Yes, because strings are iterable.

js
Copy code
[..."JS"] // ["J", "S"]
2️⃣1️⃣ What is the difference between spread and rest?
Answer:

Spread → expands values

Rest → collects values

They use the same syntax (...) but work oppositely.

2️⃣2️⃣ Where is spread commonly used in React?
Answer:

Updating state

Copying arrays/objects

Avoiding mutation

2️⃣3️⃣ Why is spread important for state management?
Answer:
Because React requires immutable updates.

2️⃣4️⃣ Can spread be used multiple times?
Answer:
Yes.

js
Copy code
[...a, ...b, ...c]
2️⃣5️⃣ Is order important when using spread?
Answer:
Yes.
In objects, later properties override earlier ones.

2️⃣6️⃣ What happens if you spread null or undefined?
Answer:
❌ It throws an error.

2️⃣7️⃣ Is spread faster than traditional methods?
Answer:
Performance is usually negligible, but spread improves readability and safety.

2️⃣8️⃣ What is a common mistake beginners make with spread?
Answer:
Assuming it creates a deep copy.

2️⃣9️⃣ Is spread operator frequently asked in exams?
Answer:
✅ Yes.
Especially:

Copy vs reference

Spread vs rest

Shallow copy behavior

3️⃣0️⃣ One-line exam definition of spread operator?
Answer:

The spread operator (...) expands iterable elements into individual values, enabling easy copying, merging, and argument passing in JavaScript.