# 📦 JavaScript `Map` – Complete Exam & Interview Notes

> **Beginner-friendly • Exam-oriented • Interview-ready • Clean & Professional**

This README explains **JavaScript Map** from **zero to advanced**, so **any beginner** can understand it in **one read** and confidently **crack exams, interviews, and MCQs**.

---

## 📌 What is a Map in JavaScript?

A **Map** is a built-in JavaScript object used to store **key-value pairs**, where:

* Keys can be **any data type** (objects, functions, primitives)
* Values can also be **any data type**
* **Insertion order is preserved**

```js
const myMap = new Map();
```

---

## 📝 50 Professional & Logical Interview Questions on JavaScript Map

> **These questions are commonly asked in top tech company interviews. Each answer is detailed, logical, and easy to understand.**

---

## 🔹 Basic & Conceptual Questions (1–15)

### 1. What is a Map in JavaScript?

**Answer:**
A Map is a collection of **key-value pairs** where keys can be of any type, and values can be any type. Unlike objects, it preserves **insertion order**.

---

### 2. How is Map different from an Object?

**Answer:**

* Objects allow only strings or symbols as keys; Maps allow any data type.
* Maps preserve insertion order; Objects do not guarantee order.
* Maps have `size` property; Objects require `Object.keys(obj).length`.
* Maps are optimized for frequent additions and deletions.

---

### 3. How do you create a Map?

**Answer:**

```js
const map = new Map();
const map2 = new Map([['name', 'Waqar'], ['age', 25]]);
```

---

### 4. How do you add a key-value pair?

**Answer:**
Use `set(key, value)` method.

```js
map.set('city', 'Karachi');
```

---

### 5. How do you retrieve a value?

**Answer:**
Use `get(key)` method.

```js
console.log(map.get('city')); // 'Karachi'
```

---

### 6. How do you check if a key exists?

**Answer:**
Use `has(key)` method which returns `true` or `false`.

```js
map.has('city'); // true
```

---

### 7. How do you remove a key-value pair?

**Answer:**
Use `delete(key)` method.

```js
map.delete('city');
```

---

### 8. How do you remove all entries?

**Answer:**
Use `clear()` method.

```js
map.clear();
```

---

### 9. How do you get the number of entries?

**Answer:**
Use `size` property.

```js
map.size; // returns the number of key-value pairs
```

---

### 10. Can Map store objects as keys?

**Answer:**
Yes, Map stores object references. Two objects with identical structure are **different keys** unless they reference the same object.

---

### 11. Can Map store functions as keys?

**Answer:**
Yes. Functions are objects in JavaScript and can be used as keys by reference.

---

### 12. Can Map store NaN as a key?

**Answer:**
Yes. `NaN` is considered the same key as another `NaN` in Map.

---

### 13. Does Map preserve insertion order?

**Answer:**
Yes. Iterating over Map using `for...of` or `forEach` follows insertion order.

---

### 14. What happens when you set the same key twice?

**Answer:**
The new value overwrites the old value. Map does **not allow duplicate keys**.

---

### 15. Can Map keys be of mixed types?

**Answer:**
Yes, keys can be strings, numbers, objects, functions, or symbols.

---

## 🔹 Intermediate Questions (16–35)

16. How do you iterate over Map entries?
    **Answer:**
    Use `for...of` with destructuring or `forEach`.

```js
for (let [key, value] of map) { console.log(key, value); }
map.forEach((value, key) => console.log(key, value));
```

17. How do you retrieve all keys?
    **Answer:**
    Use `map.keys()`, which returns an iterable.

18. How do you retrieve all values?
    **Answer:**
    Use `map.values()`, which returns an iterable.

19. How do you retrieve all entries?
    **Answer:**
    Use `map.entries()`, which returns an iterable of `[key, value]` pairs.

20. How do you convert a Map to an Array?
    **Answer:**

```js
const arr = [...map];
```

21. How do you convert an Array to a Map?
    **Answer:**

```js
const arr = [['name','Ali'], ['age', 25]];
const map = new Map(arr);
```

22. What is returned by `map.set()`?
    **Answer:**
    The Map object itself, allowing method chaining.

23. Can Map be used as a cache?
    **Answer:**
    Yes, Map is suitable for caching key-value pairs with quick lookups.

24. How is Map different from Set?
    **Answer:**
    Map stores key-value pairs, while Set stores only unique values.

25. How does Map compare to Object in performance?
    **Answer:**
    Map provides faster **lookup, insertion, and deletion** when keys are frequently changing.

26. Can Map be nested?
    **Answer:**
    Yes. Map values can themselves be Maps.

27. How does Map handle undefined keys?
    **Answer:**
    `undefined` can be used as a key just like any other value.

28. Can you use destructuring with Map?
    **Answer:**
    Yes, usually after converting it to an array.

29. Can Map be frozen?
    **Answer:**
    Yes, using `Object.freeze(map)`, but existing object references can still be mutated.

30. How to merge two Maps?
    **Answer:**

```js
const map3 = new Map([...map1, ...map2]);
```

31. How do you find common keys between two Maps?
    **Answer:**
    Iterate one Map and use `has()` on the other.

32. Can Map store duplicate values?
    **Answer:**
    Yes, values can be duplicated; keys must be unique.

33. Can Map keys be boolean?
    **Answer:**
    Yes. `true` and `false` are valid keys.

34. How does Map handle +0 and -0 keys?
    **Answer:**
    They are considered the **same key**.

35. Can Map key be a Symbol?
    **Answer:**
    Yes, Symbols are allowed as keys.

---

## 🔹 Advanced & Tricky Questions (36–50)

36. How does Map store object keys internally?
    **Answer:**
    By **reference**, not by value. Two identical object literals are **different keys**.

37. Can Map be serialized directly using JSON?
    **Answer:**
    No. You need to convert Map to an array first using `[...map]`.

38. How to safely check for a key that may be NaN?
    **Answer:**
    `map.has(NaN)` works because Map considers NaN equal to NaN.

39. Can Map replace Object completely?
    **Answer:**
    No. Map is better for dynamic keys and frequent updates; Object is still preferred for simple static structures.

40. How to clone a Map?
    **Answer:**

```js
const clone = new Map(map);
```

41. Can Map be used in React state?
    **Answer:**
    Yes, but be careful with immutability; use `new Map(oldMap)` to create updated copies.

42. What is the main limitation of Map?
    **Answer:**
    No index-based access; you must iterate or convert to an array for indexing.

43. How does Map improve logical clarity over Object?
    **Answer:**
    Map clearly separates key-value pairs and supports any key type, reducing bugs from key coercion.

44. Why is Map better for large datasets?
    **Answer:**
    Efficient addition, deletion, and lookups, especially for non-string keys.

45. Can Map store functions as values?
    **Answer:**
    Yes, functions can be stored as values and retrieved later.

46. Can you iterate Map backwards?
    **Answer:**
    Not directly; convert to array and reverse.

47. How to filter a Map?
    **Answer:**

```js
const filtered = new Map([...map].filter(([k,v]) => v > 10));
```

48. Can Map be used in WeakMap-like scenarios?
    **Answer:**
    No. WeakMap allows only objects as keys and garbage collects unused keys; Map does not.

49. Can you compare two Maps for equality?
    **Answer:**
    Manually check size and each key-value pair; no built-in equality.

50. One-line professional interview definition?
    **Answer:**
    A Map is an **ordered key-value collection** supporting keys of any type, fast lookups, and frequent dynamic updates.

---

✅ **Master these 50 questions and you are fully prepared for Map interviews in top companies.**
