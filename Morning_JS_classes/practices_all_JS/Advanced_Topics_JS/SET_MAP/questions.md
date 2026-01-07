# 📦 JavaScript `Set` & `Map` – Complete Exam & Interview Notes with Questions & Answers

> **Beginner-friendly • Exam-oriented • Interview-ready • Professional Format**

This README covers **JavaScript Set and Map** with **50 detailed interview questions and answers**, designed to help anyone **understand concepts easily and excel in interviews**.

---

## 🔹 50 Professional & Logical Interview Questions on Set & Map (Mixed)

### Basic & Conceptual Questions (1–15)

1. **What is a Set in JavaScript?**
   **Answer:** A Set is a collection of **unique values**. It cannot have duplicates and preserves **insertion order**.

2. **What is a Map in JavaScript?**
   **Answer:** A Map is a **key-value pair collection**. Keys can be of any type (primitives, objects, functions) and values can be any type.

3. **How do Set and Map differ from an Object?**
   **Answer:** Objects have string/symbol keys only, do not guarantee insertion order, and require `Object.keys()` to determine size. Sets/Maps allow any key type (Map), preserve order, and have `size` property.

4. **Can Set store duplicate values?**
   **Answer:** No, all values in a Set are unique.

5. **Can Map have duplicate keys?**
   **Answer:** No, keys must be unique. If a key is repeated, its value is overwritten.

6. **How do you add a value to a Set?**
   **Answer:** Use `add(value)` method. Example: `mySet.add(1);`.

7. **How do you add a key-value pair to a Map?**
   **Answer:** Use `set(key, value)` method. Example: `myMap.set('name', 'Ali');`.

8. **How do you check if a value exists in a Set?**
   **Answer:** Use `has(value)` method. Example: `mySet.has(1); // true`

9. **How do you check if a key exists in a Map?**
   **Answer:** Use `has(key)` method. Example: `myMap.has('name'); // true`

10. **How do you remove a value from a Set?**
    **Answer:** Use `delete(value)` method. Example: `mySet.delete(1);`.

11. **How do you remove a key from a Map?**
    **Answer:** Use `delete(key)` method. Example: `myMap.delete('name');`.

12. **How do you clear all elements from a Set or Map?**
    **Answer:** Use `clear()` method. Example: `mySet.clear();` or `myMap.clear();`.

13. **How do you get the number of elements in a Set or Map?**
    **Answer:** Use `size` property. Example: `mySet.size;` or `myMap.size;`.

14. **Does Set preserve insertion order?**
    **Answer:** Yes, values in a Set are iterated in the order they were inserted.

15. **Does Map preserve insertion order?**
    **Answer:** Yes, key-value pairs in a Map are iterated in the order they were added.

---

### Intermediate Questions (16–35)

16. **Can Map keys be objects?**
    **Answer:** Yes, Map keys can be any object reference. Two objects with identical structure are treated as different keys unless they reference the same object.

17. **Can Set store objects?**
    **Answer:** Yes, objects are stored by reference. Duplicate object references are ignored.

18. **What happens if the same value is added twice to a Set?**
    **Answer:** The second addition is ignored, as Sets allow only unique values.

19. **What happens if the same key is set twice in a Map?**
    **Answer:** The new value overwrites the existing value for that key.

20. **Can Map keys be functions?**
    **Answer:** Yes, functions are valid key types in a Map.

21. **Can Set store functions?**
    **Answer:** Yes, functions can be stored in a Set as values.

22. **Can Map store NaN as a key?**
    **Answer:** Yes, Map considers all NaN keys equal and treats them as the same key.

23. **Can Set store NaN as a value?**
    **Answer:** Yes, a Set can store NaN. Duplicate NaNs are ignored.

24. **How do you iterate through a Set?**
    **Answer:** Using `forEach()` or `for...of` loop. Example: `for (let val of mySet) { console.log(val); }`

25. **How do you iterate through a Map?**
    **Answer:** Using `forEach()` or `for...of` with destructuring. Example: `for (let [key,value] of myMap) { console.log(key,value); }`

26. **Can Map values be duplicated?**
    **Answer:** Yes, multiple keys can have the same value.

27. **Can Set values be duplicated?**
    **Answer:** No, values must be unique.

28. **How to convert a Set to an Array?**
    **Answer:** Using spread operator: `[...mySet]`.

29. **How to convert a Map to an Array?**
    **Answer:** Using spread operator: `[...myMap]`.

30. **Can Map keys be Symbols?**
    **Answer:** Yes, Symbols are valid keys.

31. **Can Set store Symbols?**
    **Answer:** Yes, symbols can be stored as unique values.

32. **Can Map be used as a cache?**
    **Answer:** Yes, Maps are ideal for caching key-value pairs with dynamic keys.

33. **Can Set be used to remove duplicates from an array?**
    **Answer:** Yes, `new Set(array)` removes duplicates.

34. **Can Map store another Map as a value?**
    **Answer:** Yes, Maps can be nested.

35. **Can Set store another Set as a value?**
    **Answer:** Yes, Sets can store other Sets as values by reference.

---

### Advanced / Tricky Questions (36–50)

36. **Are +0 and -0 considered the same in Set?**
    **Answer:** Yes, +0 and -0 are treated as the same value in a Set.

37. **Are +0 and -0 considered the same in Map?**
    **Answer:** Yes, +0 and -0 are considered the same key.

38. **How to merge two Sets?**
    **Answer:** Using spread operator: `const merged = new Set([...set1, ...set2]);`

39. **How to merge two Maps?**
    **Answer:** Using spread operator: `const merged = new Map([...map1, ...map2]);`

40. **How to filter a Set?**
    **Answer:** Convert to array, filter, then convert back: `const filtered = new Set([...mySet].filter(x => x>10));`

41. **How to filter a Map?**
    **Answer:** Convert to array, filter, then back to Map: `const filtered = new Map([...myMap].filter(([k,v])=>v>10));`

42. **Can Map key be undefined?**
    **Answer:** Yes, undefined is a valid key.

43. **Can Set store undefined?**
    **Answer:** Yes, undefined is a valid value.

44. **How do you clone a Set?**
    **Answer:** `const clone = new Set(mySet);`

45. **How do you clone a Map?**
    **Answer:** `const clone = new Map(myMap);`

46. **Why is Map preferred over Object in some cases?**
    **Answer:** Map allows **any type of key**, preserves order, and is optimized for frequent additions/deletions.

47. **Why is Set preferred over Array to remove duplicates?**
    **Answer:** Set automatically enforces uniqueness, no need for additional logic.

48. **Does Map guarantee order when iterating keys/values?**
    **Answer:** Yes, Maps preserve insertion order.

49. **Does Set guarantee order when iterating values?**
    **Answer:** Yes, Sets preserve insertion order.

50. **One-line professional difference summary:**
    **Answer:** Set is a **unique value collection**, Map is a **key-value collection**, both preserve insertion order, Set for uniqueness, Map for key-value associations.

---

✅ **Mastering these 50 mixed questions and answers will make your Set & Map concepts strong for interviews and exams.**
