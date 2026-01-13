# JavaScript `splice()` Method – Complete Exam & Interview Notes

---

## 📌 Introduction

The **`splice()`** method in JavaScript is used to **add, remove, or replace elements in an array**. Unlike `slice()`, it **modifies the original array**.

It is an **essential method for exams and interviews**, especially when testing knowledge of **array manipulation and mutability**.

---

## 🧠 Why `splice()` Is Important

* Can **add, remove, or replace elements** in-place
* Frequently asked in **interviews & exams**
* Useful for **dynamic array modifications**
* Works with **positive and negative indices**

---

## 🧩 Syntax

```js
array.splice(start, deleteCount?, ...items)
```

### Parameters Explained

| Parameter     | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| `start`       | Index at which to start changing the array. Negative values count from the end. |
| `deleteCount` | Number of elements to remove. If 0, no elements are removed.                    |
| `...items`    | Elements to add at `start` position.                                            |

---

## ⚠️ Important Rules (EXAM FAVORITE)

* **Mutates the original array**
* Can **insert elements** without removing any by setting `deleteCount` to 0
* Can **remove elements** by specifying `deleteCount`
* Can **replace elements** by deleting and adding simultaneously
* Returns an **array of deleted elements**

---

## ✅ Basic Examples

```js
const arr = [1,2,3,4,5];
arr.splice(2,1); // removes 1 element at index 2 -> [1,2,4,5]
arr.splice(1,0,10,11); // inserts 10,11 at index 1 -> [1,10,11,2,4,5]
arr.splice(0,2,100); // replaces first 2 elements with 100 -> [100,11,2,4,5]
```

---

## 🔄 How `splice()` Works

1. Determine the **start index** (convert negative to length + start if needed)
2. Determine **deleteCount** (if not provided, deletes till the end)
3. Remove the specified elements
4. Insert new elements if provided
5. Return an **array of removed elements**

---

## 📦 Common & Important Use Cases

### 1️⃣ Remove Elements

```js
arr.splice(2,2); // removes 2 elements starting from index 2
```

### 2️⃣ Add Elements

```js
arr.splice(1,0,'a','b'); // inserts 'a','b' at index 1
```

### 3️⃣ Replace Elements

```js
arr.splice(0,2,'x','y'); // replaces first 2 elements with 'x','y'
```

### 4️⃣ Remove Last Element

```js
arr.splice(-1,1); // removes last element
```

### 5️⃣ Remove All Elements From Index

```js
arr.splice(3); // removes all elements from index 3 to end
```

---

## 🔄 `splice()` vs `slice()`

| Feature       | splice()                  | slice()                    |
| ------------- | ------------------------- | -------------------------- |
| Mutates array | ✅ Yes                     | ❌ No                       |
| Returns       | Removed elements          | New array portion          |
| Parameters    | start, deleteCount, items | begin, end                 |
| Use           | In-place modification     | Non-destructive extraction |

---

## ❌ Common Mistakes

* Confusing `splice` with `slice`
* Forgetting that `splice` mutates the original array
* Using negative indices incorrectly
* Not providing `deleteCount` when removing specific elements

---

## 🧪 Advanced Example – Replace & Insert

```js
const arr = [1,2,3,4,5];
const removed = arr.splice(2,2,100,101); // replaces 3,4 with 100,101
console.log(arr); // [1,2,100,101,5]
console.log(removed); // [3,4]
```

---

## 🧠 Interview One-Line Definition

> **`splice()` changes the content of an array by removing, replacing, or adding elements and returns an array of removed elements.**

---

## 🏁 Final Notes

* Extremely **important for interviews and exams**
* Preferred for **in-place array modifications**
* Works with **positive and negative indices**
* Often paired with **map, filter, or reduce** for dynamic operations

---

✅ This README is written like a **PDF-style professional guide** — clean, structured, and perfect for **one-click download**, **exam revision**, and **interview preparation**.
