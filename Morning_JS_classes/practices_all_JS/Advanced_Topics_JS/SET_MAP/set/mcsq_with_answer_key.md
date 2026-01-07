# 📦 JavaScript `Set` – Complete Exam & Interview Notes

> **Beginner-friendly • Exam-oriented • Interview-ready • Clean & Professional**

This README explains **JavaScript Set** from **zero to advanced**, so **any beginner** can understand it in **one read** and confidently **crack exams, interviews, and MCQs**.

---

## 📌 What is a Set in JavaScript?

A **Set** is a **built-in JavaScript object** used to store **unique values only**.

> **Unique means:** no duplicate values are allowed.

```js
const mySet = new Set();
```

---

## ✅ Why Set Exists? (Very Important)

JavaScript introduced `Set` to solve problems like:

* ❌ Removing duplicate values from arrays
* 🔍 Faster searching than arrays
* 📦 Storing unique data (IDs, emails, tokens)
* 🧼 Cleaner & readable code

---

## 🧠 Key Characteristics of Set

| Feature       | Explanation                        |
| ------------- | ---------------------------------- |
| Unique values | Duplicate values are ignored       |
| Any data type | Numbers, Strings, Objects, Arrays  |
| Iterable      | Works with `for...of`              |
| Ordered       | Maintains insertion order          |
| No index      | Cannot access via index like array |

---

## 🔹 Creating a Set

### Empty Set

```js
const set = new Set();
```

### Set with Values

```js
const numbers = new Set([1, 2, 2, 3, 4]);
console.log(numbers); // Set {1, 2, 3, 4}
```

📌 **Duplicates are removed automatically**

---

## 🔹 Common Set Methods (Must Remember)

### ➕ `add(value)`

Adds a value to the Set

```js
set.add(10);
```

---

### 🔍 `has(value)`

Checks if value exists

```js
set.has(10); // true
```

---

### ❌ `delete(value)`

Removes a value

```js
set.delete(10);
```

---

### 🧹 `clear()`

Removes all values

```js
set.clear();
```

---

### 📏 `size`

Returns total elements

```js
set.size; // number
```

---

## 🔄 Iterating Over a Set

### Using `for...of`

```js
const fruits = new Set(["apple", "banana", "mango"]);

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## 🔥 Real-Life Use Case (Very Important for Exams)

### Remove Duplicates from Array

```js
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // [1, 2, 3, 4]
```

✔ Asked in **almost every JS interview**

---

## ⚖️ Set vs Array (Exam Favorite)

| Feature           | Set           | Array          |
| ----------------- | ------------- | -------------- |
| Duplicate allowed | ❌ No          | ✅ Yes          |
| Index access      | ❌ No          | ✅ Yes          |
| Search speed      | 🚀 Fast       | 🐢 Slower      |
| Use case          | Unique values | Ordered values |

---

## ⚖️ Set vs Object

| Feature       | Set   | Object              |
| ------------- | ----- | ------------------- |
| Key-Value     | ❌ No  | ✅ Yes               |
| Unique values | ✅ Yes | ❌ Values may repeat |
| Iteration     | Easy  | Needs methods       |

---

## 🧪 Special Rules (Very Important)

### ✔ NaN Handling

```js
const s = new Set();
s.add(NaN);
s.add(NaN);

console.log(s.size); // 1
```

---

### ✔ Object Reference Rule

```js
const s = new Set();
s.add({a:1});
s.add({a:1});

console.log(s.size); // 2
```

📌 Objects are compared by **reference**, not value

---

## 🧠 Internal Comparison Rule

Set uses **SameValueZero** algorithm:

* `NaN === NaN` → true
* `+0 === -0` → true

---

## ❌ What Set Cannot Do

* ❌ No index-based access
* ❌ No duplicate values
* ❌ No key-value pairs

---

## ⭐ Interview One-Liners (Must Memorize)

* `Set` stores **unique values only`
* Faster lookup than arrays
* Uses **SameValueZero** comparison
* Objects stored by reference
* Best for removing duplicates

---

## 🧠 When to Use Set?

Use `Set` when:

* You need **unique data**
* You want to **remove duplicates**
* You want **fast searching**
* Clean & readable code matters

---

## 📝 One-Line Summary

> **JavaScript Set is a powerful collection for handling unique values efficiently.**

---

✅ **This README is enough to crack:**

* 🎯 MCQs
* 💼 Interviews
* 📘 Exams
* 🧠 Conceptual questions

---

⭐ If you want next:

* 50–100 **MCQs** (Easy → Hard)
* **Code-level questions**
* `Set` vs `Map` combined notes

Just tell me 👍

---

# 📝 JavaScript Set – 50 Exam-Focused MCQs

> **Carefully designed MCQs that mostly appear in exams, interviews, and tests**

---

## 🔹 Easy Level (1–15)

1. What is a `Set` in JavaScript?

   * A) Indexed collection
   * B) Key-value pair
   * C) Collection of unique values
   * D) Function container

2. Which keyword is used to create a Set?

   * A) `Array`
   * B) `Object`
   * C) `Set`
   * D) `Map`

3. Does Set allow duplicate values?

   * A) Yes
   * B) No
   * C) Sometimes
   * D) Only strings

4. Which method adds a value to a Set?

   * A) `push()`
   * B) `insert()`
   * C) `add()`
   * D) `append()`

5. How do you check the size of a Set?

   * A) `length`
   * B) `count()`
   * C) `size`
   * D) `total()`

6. Which method checks if a value exists in a Set?

   * A) `includes()`
   * B) `has()`
   * C) `exists()`
   * D) `find()`

7. What is returned when adding a duplicate value to a Set?

   * A) Error
   * B) New value added
   * C) Ignored silently
   * D) Null

8. Is Set iterable?

   * A) No
   * B) Yes
   * C) Only with map()
   * D) Only numbers

9. Which loop works with Set?

   * A) for
   * B) forEach
   * C) for...of
   * D) while

10. Which data type can Set store?

    * A) Numbers only
    * B) Strings only
    * C) Objects only
    * D) Any data type

11. What does `set.clear()` do?

    * A) Removes one element
    * B) Removes duplicates
    * C) Removes all elements
    * D) Deletes Set

12. Can Set store objects?

    * A) No
    * B) Yes
    * C) Only arrays
    * D) Only strings

13. What will `new Set([1,1,2])` return?

    * A) `{1,1,2}`
    * B) `{1,2}`
    * C) `[1,2]`
    * D) Error

14. Which property returns total elements?

    * A) `length`
    * B) `count`
    * C) `size`
    * D) `total`

15. Does Set maintain insertion order?

    * A) No
    * B) Yes
    * C) Random
    * D) Only numbers

---

## 🔹 Moderate Level (16–35)

16. Which comparison algorithm does Set use internally?

    * A) Strict equality
    * B) Abstract equality
    * C) SameValueZero
    * D) Deep equality

17. How many times can `NaN` exist in a Set?

    * A) Zero
    * B) One
    * C) Two
    * D) Unlimited

18. What happens if two identical object literals are added?

    * A) One stored
    * B) Both stored
    * C) Error
    * D) Ignored

19. Which is faster for lookup?

    * A) Array
    * B) Object
    * C) Set
    * D) String

20. Which method removes a specific value?

    * A) remove()
    * B) delete()
    * C) clear()
    * D) pop()

21. What does `set.has(5)` return?

    * A) Value
    * B) Index
    * C) Boolean
    * D) Error

22. Can Set be converted to an array?

    * A) No
    * B) Yes using spread
    * C) Only JSON
    * D) Only map

23. Which syntax removes duplicates from an array?

    * A) `new Array()`
    * B) `filter()`
    * C) `[...new Set(arr)]`
    * D) `reduce()`

24. What is the return type of `set.add()`?

    * A) Value
    * B) Boolean
    * C) Set itself
    * D) Undefined

25. Does Set support indexing?

    * A) Yes
    * B) No
    * C) Only numbers
    * D) Only strings

26. Which method removes all elements?

    * A) delete()
    * B) removeAll()
    * C) clear()
    * D) reset()

27. Which statement is TRUE?

    * A) Set allows duplicates
    * B) Set is not iterable
    * C) Set stores unique values
    * D) Set uses keys

28. What does `set.size` return?

    * A) Function
    * B) Number
    * C) Boolean
    * D) Array

29. Can functions be stored in Set?

    * A) No
    * B) Yes
    * C) Only arrow functions
    * D) Only named functions

30. Which is NOT a Set method?

    * A) add
    * B) has
    * C) push
    * D) delete

31. How does Set compare objects?

    * A) By value
    * B) By reference
    * C) Deep comparison
    * D) JSON compare

32. What happens when `+0` and `-0` are added?

    * A) Two values
    * B) One value
    * C) Error
    * D) Ignored

33. Can Set be used with forEach?

    * A) No
    * B) Yes
    * C) Only arrays
    * D) Only objects

34. Which method checks existence efficiently?

    * A) includes
    * B) find
    * C) has
    * D) indexOf

35. What is returned by `set.delete(value)`?

    * A) Deleted value
    * B) Set
    * C) Boolean
    * D) Undefined

---

## 🔹 Difficult / Tricky Level (36–50)

36. What is the output?

```js
const s = new Set();
s.add(1);
s.add(1);
console.log(s.size);
```

* A) 0
* B) 1
* C) 2
* D) Error

37. Output?

```js
const s = new Set();
s.add({});
s.add({});
console.log(s.size);
```

* A) 1
* B) 2
* C) 0
* D) Error

38. Which Set operation is O(1) average time?

    * A) add
    * B) has
    * C) delete
    * D) All of the above

39. Which is best use of Set?

    * A) Indexed data
    * B) Ordered duplicates
    * C) Unique values
    * D) Key-value mapping

40. What does `new Set('hello')` create?

    * A) {'hello'}
    * B) {'h','e','l','o'}
    * C) Error
    * D) Empty Set

41. Can Set be nested?

    * A) No
    * B) Yes
    * C) Only arrays
    * D) Only objects

42. Which converts Set to Array?

    * A) Array(set)
    * B) [...set]
    * C) set.toArray()
    * D) JSON.stringify()

43. What does `set.forEach()` receive?

    * A) value only
    * B) value & value
    * C) key & value
    * D) index & value

44. What happens if same function reference is added twice?

    * A) Stored twice
    * B) Stored once
    * C) Error
    * D) Ignored fully

45. Which cannot be done with Set?

    * A) Iterate
    * B) Store objects
    * C) Access by index
    * D) Remove values

46. Which is true about memory?

    * A) Set uses more memory than array
    * B) Set uses less memory
    * C) Same always
    * D) Depends on engine

47. Set is most similar to which structure?

    * A) Array
    * B) Hash table
    * C) Stack
    * D) Queue

48. Which is best for email uniqueness?

    * A) Array
    * B) Object
    * C) Set
    * D) String

49. Which will NOT be considered duplicate?

    * A) 1 and 1
    * B) NaN and NaN
    * C) {} and {}
    * D) 'a' and 'a'

50. What is main advantage of Set?

    * A) Indexing
    * B) Sorting
    * C) Uniqueness + fast lookup
    * D) Key-value storage

---

## ✅ Answer Key

1.C  2.C  3.B  4.C  5.C
6.B  7.C  8.B  9.C  10.D
11.C 12.B 13.B 14.C 15.B
16.C 17.B 18.B 19.C 20.B
21.C 22.B 23.C 24.C 25.B
26.C 27.C 28.B 29.B 30.C
31.B 32.B 33.B 34.C 35.C
36.B 37.B 38.D 39.C 40.B
41.B 42.B 43.B 44.B 45.C
46.D 47.B 48.C 49.C 50.C

---

🎯 **Tip:** If you can solve these MCQs confidently, your **Set concept is exam‑ready & interview‑strong.**
