# JavaScript `sort()` Method - 50 Interview Questions & Detailed Answers

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [50 Interview Questions & Answers](#50-interview-questions--answers)

---

## Introduction

The `sort()` method in JavaScript is a built-in array method that sorts the elements of an array **in place** and returns the sorted array. By default, it converts elements to **strings** and sorts them in **ascending order** based on UTF-16 code units. A **compare function** can be provided to sort numbers or objects properly.

It is commonly asked in **interviews, coding tests, and exams** because understanding `sort()` is essential for array manipulation and data handling.

---

## Syntax

```javascript
array.sort([compareFunction])
```

* `compareFunction` (optional): A function that defines the sort order.

  * `function(a, b)`
  * Returns a negative number if `a` comes before `b`
  * Returns 0 if `a` and `b` are equal
  * Returns a positive number if `a` comes after `b`

---

## 50 Interview Questions & Detailed Answers

1. **What is the `sort()` method?**

   * A method that sorts the elements of an array in place and returns the sorted array.

2. **Does `sort()` modify the original array?**

   * Yes, `sort()` sorts the array in place.

3. **Default sorting behavior?**

   * Converts elements to strings and sorts based on UTF-16 code units.

4. **How to sort numbers correctly?**

   * Use a compare function: `arr.sort((a,b)=>a-b)`.

5. **How to sort numbers in descending order?**

   * `arr.sort((a,b)=>b-a)`.

6. **Sorting strings ignoring case?**

   * Use `localeCompare`: `arr.sort((a,b)=>a.localeCompare(b))`.

7. **Sort objects by numeric property?**

   * `arr.sort((a,b)=>a.prop - b.prop)`.

8. **Sort objects by string property?**

   * `arr.sort((a,b)=>a.name.localeCompare(b.name))`.

9. **What happens if compare function returns 0?**

   * The order of `a` and `b` remains unchanged.

10. **Can `sort()` be chained with other methods?**

    * Yes, e.g., `arr.filter(...).sort(...)`.

11. **Output:**

```javascript
['banana','apple','cherry'].sort();
```

* `['apple','banana','cherry']`

12. **Output:**

```javascript
[10,1,21,2].sort();
```

* `[1,10,2,21]` (string sort!)

13. **Output with compare:**

```javascript
[10,1,21,2].sort((a,b)=>a-b);
```

* `[1,2,10,21]`

14. **Sort descending numbers:**

```javascript
[10,1,21,2].sort((a,b)=>b-a);
```

* `[21,10,2,1]`

15. **Sort strings ascending:**

```javascript
['Bob','alice','Charlie'].sort((a,b)=>a.localeCompare(b));
```

* `['alice','Bob','Charlie']`

16. **Sort strings descending:**

```javascript
['Bob','alice','Charlie'].sort((a,b)=>b.localeCompare(a));
```

* `['Charlie','Bob','alice']`

17. **Sort empty array:**

* Returns empty array `[]`.

18. **Sorting a sparse array:**

```javascript
[,,2,3].sort();
```

* `[2,3,,]` (skips empty slots)

19. **Sort mixed numbers and strings:**

* Convert numbers to string for uniform comparison, or use compare function.

20. **Stable sorting in modern engines?**

* Yes, modern JavaScript engines provide stable sorting.

21. **Can `sort()` sort dates?**

* Yes, using compare function: `(a,b)=>a.getTime()-b.getTime()`.

22. **Sort by multiple criteria:**

* `arr.sort((a,b)=>a.prop1-b.prop1 || a.prop2-b.prop2)`

23. **Difference between `sort()` and `reverse()`?**

* `sort()` orders elements; `reverse()` just reverses array order.

24. **Sorting boolean values?**

* Convert to numbers: `true=1, false=0`, then sort.

25. **Sort numeric strings numerically:**

* `arr.map(Number).sort((a,b)=>a-b)`

26. **Sort by string length:**

```javascript
['a','aaa','aa'].sort((a,b)=>a.length-b.length);
```

* `['a','aa','aaa']`

27. **Sort negative numbers:**

* Works with compare function `(a,b)=>a-b`.

28. **Compare function parameters order:**

* `a` is first element, `b` is second element.

29. **Sorting floats:**

* Use compare function `(a,b)=>a-b`.

30. **Sort array of objects by date property:**

* `arr.sort((a,b)=>a.date-b.date)`

31. **What happens if compare is omitted?**

* Elements converted to strings and sorted lexicographically.

32. **Sort Unicode strings correctly:**

* Use `localeCompare()` for proper alphabetical sorting.

33. **Sort with dynamic property:**

* `arr.sort((a,b)=>a[prop]-b[prop])` for numeric, or `localeCompare` for strings.

34. **Sort by absolute value:**

* `arr.sort((a,b)=>Math.abs(a)-Math.abs(b))`

35. **Sort large arrays efficiently?**

* Provide optimized compare function; modern engines handle efficiently.

36. **Output:**

```javascript
[1,2,10,21].sort();
```

* `[1,10,2,21]`

37. **Output:**

```javascript
[1,2,10,21].sort((a,b)=>a-b);
```

* `[1,2,10,21]`

38. **Output descending:**

```javascript
[1,2,10,21].sort((a,b)=>b-a);
```

* `[21,10,2,1]`

39. **Sort object arrays with multiple properties:**

* `arr.sort((a,b)=>a.age-b.age || a.name.localeCompare(b.name))`

40. **Sort negative and positive numbers:**

* `arr.sort((a,b)=>a-b)`

41. **Sort array with duplicate values:**

* Duplicate values retain relative positions if compare function is stable.

42. **Sort by last name in object array:**

* `arr.sort((a,b)=>a.lastName.localeCompare(b.lastName))`

43. **Sort case-insensitive string array:**

* `arr.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))`

44. **Sort and filter combined:**

* `arr.filter(x=>x>0).sort((a,b)=>a-b)`

45. **Sorting in reverse order:**

* `arr.sort((a,b)=>b-a)` for numbers, `arr.sort().reverse()` for strings

46. **Sort floating numbers:**

* `arr.sort((a,b)=>a-b)`

47. **Sort and remove duplicates:**

* `arr.sort((a,b)=>a-b).filter((v,i,a)=>v!==a[i-1])`

48. **Sort and map:**

* `arr.sort((a,b)=>a-b).map(x=>x*2)`

49. **Sort using function reference:**

* `function compare(a,b){ return a-b; } arr.sort(compare)`

50. **Real-world example:**

* Sorting leaderboard scores, names alphabetically, or date events.

---

This README is formatted professionally for **one-click download**, providing **50 detailed interview questions with answers** on the `sort()` method, making it easy for beginners and interviewees to **crack exams and interviews**.
