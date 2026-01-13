# JavaScript `reverse()` Method – Complete Exam & Interview Notes

---

## 📌 Introduction

The **`reverse()`** method in JavaScript is used to **reverse the order of elements in an array**. It works **in-place**, meaning it **modifies the original array**.

This method is **frequently asked in exams and interviews**, especially to test knowledge of **array mutation**.

---

## 🧠 Why `reverse()` Is Important

* Very **simple but tricky** interview topic
* Tests understanding of **mutating methods**
* Used in **algorithms, strings, and data processing**
* Often combined with `sort()`, `split()`, `join()`

---

## 🧩 Syntax

```js
array.reverse();
```

### Key Facts

* Takes **no arguments**
* Returns the **same array**
* **Mutates the original array**

---

## ⚠️ Mutation Rule (VERY IMPORTANT)

> `reverse()` **changes the original array**.

```js
const arr = [1, 2, 3];
const result = arr.reverse();

console.log(arr);    // [3, 2, 1]
console.log(result); // [3, 2, 1]
```

Both variables reference the **same reversed array**.

---

## ✅ Basic Example

```js
const numbers = [10, 20, 30];
numbers.reverse();

console.log(numbers); // [30, 20, 10]
```

---

## 🔁 How `reverse()` Works

* First element swaps with last
* Second swaps with second-last
* Continues until middle

Example:

```text
[1, 2, 3, 4] → [4, 3, 2, 1]
```

---

## 📦 Common Exam Use Cases

### 1️⃣ Reverse Without Changing Original Array

```js
const arr = [1, 2, 3];
const reversed = [...arr].reverse();
```

---

### 2️⃣ Reverse a String (VERY COMMON)

```js
const str = "javascript";
const reversed = str.split('').reverse().join('');
```

---

### 3️⃣ Reverse After Sorting

```js
const nums = [3, 1, 4, 2];
nums.sort().reverse();
```

---

### 4️⃣ Reverse Nested Arrays (Top Level Only)

```js
[[1,2],[3,4]].reverse();
// [[3,4],[1,2]]
```

---

## 🔄 `reverse()` vs `toReversed()` (Modern JS)

| Feature           | reverse() | toReversed() |
| ----------------- | --------- | ------------ |
| Mutates array     | ✅ Yes     | ❌ No         |
| Returns new array | ❌ No      | ✅ Yes        |
| ES Version        | Old       | ES2023       |

```js
const arr = [1,2,3];
const newArr = arr.toReversed();
```

---

## ❌ Common Mistakes

* Assuming `reverse()` does not mutate
* Reversing shared arrays accidentally
* Using it directly on React state

---

## 💡 Best Practices

* Copy array before reversing
* Avoid mutation in functional code
* Prefer `toReversed()` when available

---

## 🧪 Advanced Example – Palindrome Check

```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

---

## 🧠 Interview One-Line Answer

> **`reverse()` reverses an array in place and returns the same mutated array.**

---

## 🏁 Final Notes

* **High‑frequency exam topic**
* Mutation behavior is the **key concept**
* Must-know for interviews & coding tests

---

✅ This README is designed like a **PDF-style reference** — clean, structured, and perfect for **one‑click download**, **exam revision**, and **interview preparation**.
