# JavaScript Iterators – Top 40 Most Asked Questions for Exams & Interviews

This document contains **40 high-quality questions and answers** on JavaScript Iterators, designed for **top-level exams, interviews, and self-learning**. Each question is carefully chosen to cover **most frequently asked topics** and **core concepts**. The answers are provided immediately after each question for **easy understanding and memorization**.

---

## 🔹 Questions & Answers (1-40)

1. **What is an iterator in JavaScript?**
   **Answer:** An iterator is an object that provides a `next()` method which returns objects with `value` and `done` properties.

2. **Which method makes an object iterable?**
   **Answer:** `[Symbol.iterator]()`

3. **What does `next()` return?**
   **Answer:** An object `{ value, done }`.

4. **What does the `done` property indicate?**
   **Answer:** `done: true` indicates the iteration has ended.

5. **Can arrays be iterated using iterators?**
   **Answer:** Yes, arrays are iterable by default.

6. **Can strings be iterated using iterators?**
   **Answer:** Yes, strings are iterable as well.

7. **Which loop automatically uses iterator?**
   **Answer:** `for...of`

8. **Can objects without `[Symbol.iterator]` be used in `for...of`?**
   **Answer:** No, only iterable objects can be used.

9. **How do you create a custom iterator for an object?**
   **Answer:** By defining `[Symbol.iterator]()` that returns an object with a `next()` method.

10. **What does a generator function return?**
    **Answer:** A generator function returns an iterator object.

11. **How do you define a generator function?**
    **Answer:** Using `function* name(){}`

12. **Can iterators be infinite?**
    **Answer:** Yes, iterators can generate values infinitely using lazy evaluation.

13. **Difference between `for...in` and `for...of`?**
    **Answer:** `for...in` iterates over keys, `for...of` iterates over values.

14. **Which example shows lazy evaluation?**
    **Answer:** Infinite iterator generating values on demand.

15. **Can iterators include conditional or filtering logic?**
    **Answer:** Yes, inside the `next()` method.

16. **How does a generator function yield values?**
    **Answer:** Using the `yield` keyword.

17. **Can `.next()` be called manually?**
    **Answer:** Yes, it can be used to step through values one by one.

18. **Which type of object is NOT iterable by default?**
    **Answer:** Plain objects `{}` are not iterable.

19. **Can Map objects be iterated using `for...of`?**
    **Answer:** Yes, Maps are iterable.

20. **How to skip values in a custom iterator?**
    **Answer:** Add conditional logic inside the `next()` method.

21. **What happens when `.next()` is called after iteration is done?**
    **Answer:** Returns `{ value: undefined, done: true }`.

22. **Which operator can be used for conditions inside iterators?**
    **Answer:** Ternary operator `? :` or `if` statements.

23. **Can generators accept input?**
    **Answer:** Yes, via `.next(value)`.

24. **How do iterators improve memory efficiency?**
    **Answer:** Using lazy evaluation, they produce values on demand without storing all values.

25. **Which method returns the default iterator of an array?**
    **Answer:** `arr[Symbol.iterator]()`

26. **Can `for...of` iterate strings with Unicode characters correctly?**
    **Answer:** Yes, it handles full Unicode.

27. **Can iterators implement stop conditions?**
    **Answer:** Yes, by returning `done: true` under a condition.

28. **Difference between generator and custom iterator?**
    **Answer:** Generators are simpler and more elegant; custom iterators require manual `next()` implementation.

29. **Can infinite iterators be safely used in loops?**
    **Answer:** Yes, if manually controlled with limits or conditions.

30. **Which allows filtering during iteration?**
    **Answer:** Custom iterators or conditional logic inside generators.

31. **Can a generator yield multiple values sequentially?**
    **Answer:** Yes, each `yield` produces a new value.

32. **Can generators maintain internal state?**
    **Answer:** Yes, variables inside generator functions persist between yields.

33. **Can `for...of` iterate Sets?**
    **Answer:** Yes, Sets are iterable.

34. **Can generator functions be paused and resumed?**
    **Answer:** Yes, using `yield` and `.next()` calls.

35. **Real-world use-case of iterators?**
    **Answer:** Streaming data, processing large collections, lazy computation.

36. **Can iterators produce values on demand?**
    **Answer:** Yes, this is lazy evaluation.

37. **Can an object implement multiple iterators?**
    **Answer:** Yes, you can define multiple `[Symbol.iterator]()` methods for different purposes.

38. **Can iterators be nested?**
    **Answer:** Yes, you can use one iterator inside another.

39. **Can generator iterators throw exceptions?**
    **Answer:** Yes, exceptions can be thrown and caught during iteration.

40. **Why should every JS developer master iterators?**
    **Answer:** Iterators are used in arrays, strings, maps, sets, generators, and are essential for modern JS programming, lazy computation, and efficient memory usage.

---

## 🔹 Key Points to Remember about Iterators

* ⚡ **[Symbol.iterator]** is the key to making objects iterable.
* 🔄 **`.next()`** returns `{ value, done }` and is the core of iteration.
* 🔁 **for...of** is always used with iterables; **for...in** is for object keys.
* 🎯 **Generators** provide an elegant way to create iterators using `yield`.
* ♻️ **Lazy evaluation** improves memory efficiency by generating values on demand.
* 🔀 **Custom logic** (filtering, skipping, stop conditions) can be implemented inside `next()`.
* 🗂 **Iterables include:** Arrays, Strings, Maps, Sets, and custom objects.
* ⏸ **Generators can pause/resume** and maintain internal state between yields.
* 🏗 **Real-world usage:** Data streaming, processing large collections, dynamic UI generation, and memory optimization.
* 🧠 **Remember:** Iterators = values, Iterables = objects that can be iterated, `for...of` = loop that uses i






# 📝 JavaScript for...of and for...in Loops – Complete Notes

This document covers **for...of** and **for...in** loops in JavaScript, including **syntax, examples, key points, and interview-focused notes**.

---

## 1️⃣ for...in Loop

* **Definition:** Loops over **enumerable property keys** of an object (including arrays, objects).
* **Syntax:**

```javascript
for (let key in object) {
  // code using object[key]
}
```

**Example: Object**

```javascript
const person = { name: 'Alice', age: 25, city: 'NY' };
for (let key in person) {
  console.log(key, person[key]);
}
// Output:
// name Alice
// age 25
// city NY
```

**Example: Array (keys/indexes)**

```javascript
const arr = ['a', 'b', 'c'];
for (let index in arr) {
  console.log(index, arr[index]);
}
// Output:
// 0 a
// 1 b
// 2 c
```

**✅ Tips:**

* Returns **keys/indexes**.
* Use for **objects and arrays if keys are needed**.
* Avoid for arrays when values are needed directly.

---

## 2️⃣ for...of Loop

* **Definition:** Loops over **iterable objects**, returning **values directly**.
* **Syntax:**

```javascript
for (let value of iterable) {
  // code using value
}
```

**Example: Array**

```javascript
const arr = [10, 20, 30];
for (let val of arr) {
  console.log(val);
}
// Output: 10 20 30
```

**Example: String**

```javascript
const word = 'HELLO';
for (let char of word) {
  console.log(char);
}
// Output: H E L L O
```

**Example: Map**

```javascript
const map = new Map([['Alice', 90], ['Bob', 85]]);
for (let [key, value] of map) {
  console.log(`${key} scored ${value}`);
}
// Output:
// Alice scored 90
// Bob scored 85
```

**✅ Tips:**

* Returns **values**.
* Works on **Arrays, Strings, Maps, Sets, generators**.
* Cannot iterate **plain objects** directly.

---

## 3️⃣ Key Differences Between for...in and for...of

| Feature          | for...in                      | for...of                            |
| ---------------- | ----------------------------- | ----------------------------------- |
| Iterates over    | Keys / Indexes                | Values                              |
| Works on         | Objects, Arrays (keys)        | Iterables (Array, String, Map)      |
| Returns          | Property names                | Property values                     |
| Good for         | Enumerating object properties | Traversing iterable values          |
| Skips prototype? | No, iterates inherited props  | No prototype iteration, values only |

**🚀 Memory Aid:**

* **in → index/key**
* **of → output/value**

---

## 4️⃣ Commonly Asked Interview Questions

1. Difference between **for...in** and **for...of**
2. Can **for...of** iterate objects? (No, unless object is iterable)
3. How to loop over object values? (Use `Object.values(obj)` with for...of)
4. Looping over Map and Set using for...of
5. Why **for...in** on arrays is not recommended for values
6. How to skip inherited properties in for...in? (Use `hasOwnProperty`)

---

## 5️⃣ Memory-Friendly Notes & Must-Know Points

* ⚡ **for...in = keys**
* 🔄 **for...of = values**
* 🏷️ **Objects → for...in**, **Arrays/Iterables → for...of**
* ♻️ **Skip prototype properties:** `if(obj.hasOwnProperty(key)) {...}`
* 🧠 **Maps and Sets:** Use for...of for key/value access
* 🧩 **Generators:** Works with for...of
* 🎯 **Interview Tip:** Know use-case scenarios, and when to use each loop.

