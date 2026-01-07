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

## ✅ Why Map Exists? (Very Important)

Use `Map` when:

* You need **keys of any type**
* Order of insertion matters
* You require **fast lookups, additions, deletions**
* Cleaner and more readable key-value structure than plain objects

---

## 🔹 Creating and Using a Map

```js
const map = new Map();
map.set('name', 'Waqar');
map.set(1, 'NumberKey');
map.get('name'); // Waqar
map.has(1); // true
map.delete(1);
map.size; // 1
map.clear();
```

---

# 📝 JavaScript Map – 50 Exam-Focused MCQs

> **Carefully designed MCQs that mostly appear in exams, interviews, and tests**

---

## 🔹 Easy Level (1–15)

1. What is a Map in JavaScript?

   * A) Indexed collection
   * B) Key-value pair
   * C) Function container
   * D) Unique values only

2. How do you create a new Map?

   * A) `new Object()`
   * B) `new Map()`
   * C) `new Set()`
   * D) `{}`

3. Can Map keys be objects?

   * A) No
   * B) Yes
   * C) Only strings
   * D) Only numbers

4. Does Map preserve insertion order?

   * A) Yes
   * B) No
   * C) Only for strings
   * D) Only for numbers

5. Which method adds or updates a key-value pair?

   * A) `add()`
   * B) `push()`
   * C) `set()`
   * D) `insert()`

6. Which method retrieves a value?

   * A) `get()`
   * B) `find()`
   * C) `has()`
   * D) `access()`

7. How do you check if a key exists?

   * A) `has()`
   * B) `exists()`
   * C) `contains()`
   * D) `check()`

8. How do you remove a key-value pair?

   * A) `delete(key)`
   * B) `remove(key)`
   * C) `clear()`
   * D) `pop()`

9. How do you remove all entries?

   * A) `clear()`
   * B) `deleteAll()`
   * C) `reset()`
   * D) `removeAll()`

10. How do you find the number of key-value pairs?

    * A) `length`
    * B) `size`
    * C) `count()`
    * D) `total()`

11. Can Map store functions as values?

    * A) No
    * B) Yes
    * C) Only arrow functions
    * D) Only named functions

12. Can Map store arrays as keys?

    * A) No
    * B) Yes
    * C) Only numbers
    * D) Only strings

13. Which method iterates through a Map?

    * A) `for...of`
    * B) `for...in`
    * C) `while`
    * D) `map()`

14. Which method can iterate with a callback?

    * A) `forEach()`
    * B) `map()`
    * C) `filter()`
    * D) `reduce()`

15. What happens if a key is duplicated?

    * A) Throws error
    * B) Old value overwritten
    * C) Both values stored
    * D) Ignored

---

## 🔹 Moderate Level (16–35)

16. Can Map keys be symbols?

    * A) Yes
    * B) No
    * C) Only strings
    * D) Only numbers

17. Can Map values be duplicate?

    * A) No
    * B) Yes
    * C) Only strings
    * D) Only numbers

18. What is returned by `map.get(nonExistingKey)`?

    * A) null
    * B) undefined
    * C) false
    * D) Error

19. What is returned by `map.has(nonExistingKey)`?

    * A) true
    * B) false
    * C) undefined
    * D) Error

20. Which of these is true about Map vs Object?

    * A) Map keys must be strings
    * B) Map preserves insertion order
    * C) Object supports any key type
    * D) Object preserves insertion order

21. What does `map.set(key, value)` return?

    * A) Value
    * B) Boolean
    * C) The Map itself
    * D) Undefined

22. Can you chain `set()` calls?

    * A) No
    * B) Yes
    * C) Only twice
    * D) Only with numbers

23. Which statement is true?

    * A) Map is iterable
    * B) Map does not preserve order
    * C) Map keys are only strings
    * D) Map cannot store objects

24. What will `map.size` return after `map.clear()`?

    * A) undefined
    * B) 0
    * C) 1
    * D) Error

25. How do you convert a Map to an Array?

    * A) `[...map]`
    * B) `Array(map)`
    * C) `map.toArray()`
    * D) `JSON.stringify(map)`

26. Can Map be nested?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

27. Can Map store NaN as a key?

    * A) Yes
    * B) No
    * C) Only as string
    * D) Only numbers

28. What happens if two objects with same structure are keys?

    * A) Treated as same key
    * B) Treated as different keys
    * C) Overwrites value
    * D) Throws error

29. Is Map suitable for frequently changing keys?

    * A) Yes
    * B) No
    * C) Only for strings
    * D) Only for numbers

30. Can you use destructuring with Map?

    * A) Yes, after converting to Array
    * B) No
    * C) Only keys
    * D) Only values

31. Which method checks for key existence efficiently?

    * A) has()
    * B) get()
    * C) includes()
    * D) indexOf()

32. Can Map store another Map as a value?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only numbers

33. Which iteration syntax returns key and value?

    * A) `for (let [k,v] of map)`
    * B) `for (let k in map)`
    * C) `for (let v of map)`
    * D) `forEach((k)=>{})`

34. Can Map be frozen?

    * A) Yes, but keys and values may still mutate
    * B) No
    * C) Only keys frozen
    * D) Only values frozen

35. Can Map be serialized directly with JSON?

    * A) No, convert to Array first
    * B) Yes
    * C) Only if keys are strings
    * D) Only values are numbers

---

## 🔹 Difficult / Tricky Level (36–50)

36. Can Map have boolean keys?

    * A) Yes
    * B) No
    * C) Only strings
    * D) Only numbers

37. Can Map overwrite an object key?

    * A) Yes, if same reference
    * B) No
    * C) Yes, always
    * D) Only for primitives

38. Which is true about Map performance?

    * A) Fast lookups for any key type
    * B) Slow for object keys
    * C) Same as Object
    * D) Always slower

39. Map vs Set: Which stores key-value pairs?

    * A) Map
    * B) Set
    * C) Both
    * D) None

40. What will `new Map([['a',1],['b',2]])` return?

    * A) Object
    * B) Map with two entries
    * C) Array
    * D) Error

41. Can you merge two Maps?

    * A) Yes, using spread syntax
    * B) No
    * C) Only with set()
    * D) Only arrays

42. Which method retrieves all keys?

    * A) map.keys()
    * B) map.values()
    * C) map.entries()
    * D) Object.keys(map)

43. Which method retrieves all values?

    * A) map.keys()
    * B) map.values()
    * C) map.entries()
    * D) Object.values(map)

44. Which method retrieves all entries?

    * A) map.keys()
    * B) map.values()
    * C) map.entries()
    * D) map.all()

45. Can Map store undefined as key?

    * A) Yes
    * B) No
    * C) Only strings
    * D) Only numbers

46. What happens if map.set(key,value) is called twice with same key?

    * A) Value overwritten
    * B) Error
    * C) Adds duplicate
    * D) Ignored

47. Which is true about insertion order?

    * A) Preserved in Map
    * B) Not preserved
    * C) Random
    * D) Only for string keys

48. Can Map be used as a cache?

    * A) Yes
    * B) No
    * C) Only for numbers
    * D) Only for objects

49. Map is more suitable than Object when:

    * A) Key types vary
    * B) Key types are only strings
    * C) Static keys
    * D) Small dataset

50. Main advantage of Map over Object?

    * A) Any key type, preserves order, fast lookups
    * B) Only string keys
    * C) Less memory
    * D) No advantage

---

## ✅ Answer Key

1.B  2.B  3.B  4.A  5.C
6.A  7.A  8.A  9.A  10.B
11.B 12.B 13.A 14.A 15.B
16.A 17.B 18.B 19.B 20.B
21.C 22.B 23.A 24.B 25.A
26.A 27.A 28.B 29.A 30.A
31.A 32.A 33.A 34.A 35.A
36.A 37.A 38.A 39.A 40.B
41.A 42.A 43.B 44.C 45.A
46.A 47.A 48.A 49.A 50.A

---

🎯 **Tip:** If you can solve these MCQs confidently, your **Map concept is exam‑ready & interv
