# JavaScript `sort()` Method - 50 MCQs with Answer Key

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [50 MCQs](#50-mcqs)
4. [Answer Key](#answer-key)

---

## Introduction

The `sort()` method is used to **sort elements** of an array in place and returns the sorted array. By default, it sorts elements as strings. For numbers or custom objects, a **compare function** is required.

---

## Syntax

```javascript
array.sort([compareFunction])
```

---

## 50 MCQs

### Easy (1-10)

1. What does `sort()` return?

   * a) new sorted array  b) boolean  c) undefined  d) the same array
2. Default sort order is based on?

   * a) numbers  b) strings  c) objects  d) dates
3. Output:

```javascript
['banana','apple','cherry'].sort();
```

4. Does `sort()` modify the original array?

   * a) Yes  b) No
5. Output:

```javascript
[10,2,30,4].sort();
```

6. Correct syntax to sort numbers ascending?
7. Correct syntax to sort numbers descending?
8. Can `sort()` be used on arrays of objects?
9. Output:

```javascript
[1,3,2,4].sort();
```

10. Compare function returns a negative value when?

### Moderate (11-30)

11. Output:

```javascript
[20,5,100].sort((a,b)=>a-b);
```

12. Output:

```javascript
[20,5,100].sort((a,b)=>b-a);
```

13. What happens if compare function returns 0?
14. How to sort array of strings ignoring case?
15. Output:

```javascript
['Bob','alice','Charlie'].sort((a,b)=>a.localeCompare(b));
```

16. Using `sort()` on dates?
17. Output:

```javascript
[3,12,2,10].sort();
```

18. Difference between `sort()` and `reverse()`?
19. Can `sort()` be chained with `filter()`?
20. Output of empty array sorted?
21. Sorting `[1,2,10,21]` ascending without compare?
22. Sorting `[1,2,10,21]` ascending with compare?
23. Using `sort()` with objects by property?
24. Ascending vs descending compare function?
25. Output:

```javascript
['b','a','c'].sort();
```

26. Output:

```javascript
[5,20,1].sort((a,b)=>a-b);
```

27. Using `localeCompare` for string comparison?
28. Output of `[10,1,5].sort()`?
29. When to use compare function?
30. Output:

```javascript
[1,2,3,4].sort((a,b)=>b-a);
```

### Difficult (31-50)

31. Sort numbers `[5,2,9,1]` descending?
32. Sorting objects by string property?
33. Output:

```javascript
[{age:30},{age:20}].sort((a,b)=>a.age-b.age);
```

34. Using `sort()` with negative numbers?
35. Sorting with multiple criteria?
36. Output:

```javascript
['a','A','b'].sort();
```

37. How does `sort()` handle unicode characters?
38. Output:

```javascript
[1,2,2,3].sort((a,b)=>a-b);
```

39. Can `sort()` be stable?
40. Sorting large arrays efficiently?
41. Output:

```javascript
['banana','apple','banana'].sort();
```

42. Sorting with string length?
43. Output:

```javascript
['aa','a','aaa'].sort((a,b)=>a.length-b.length);
```

44. Using `sort()` in real-world projects?
45. Output:

```javascript
[10,2,1,21].sort((a,b)=>a-b);
```

46. Sorting dates ascending?
47. Output:

```javascript
['b','c','a'].sort();
```

48. Output:

```javascript
[100,2,20,1].sort();
```

49. Output:

```javascript
[100,2,20,1].sort((a,b)=>a-b);
```

50. Compare function for descending numeric sort?

---

## Answer Key

1. d 2. b 3. ['apple','banana','cherry'] 4. a 5. [10,2,30,4] 6. arr.sort((a,b)=>a-b) 7. arr.sort((a,b)=>b-a) 8. Yes 9. [1,2,3,4] 10. when a<b
2. [5,20,100] 12. [100,20,5] 13. positions remain unchanged 14. use localeCompare 15. ['alice','Bob','Charlie'] 16. use compare function 17. [1,10,2,3] 18. sort changes order, reverse reverses array 19. Yes 20. [] 21. [1,10,2,21] 22. [1,2,10,21] 23. arr.sort((a,b)=>a.prop-b.prop) 24. ascending a-b, descending b-a 25. ['a','b','c'] 26. [5,20,1] 27. a.localeCompare(b) 28. [1,10,5] 29. for numeric or custom sort 30. [4,3,2,1] 31. arr.sort((a,b)=>b-a) 32. arr.sort((a,b)=>a.prop.localeCompare(b.prop)) 33. [{age:20},{age:30}] 34. works with compare function 35. sort((a,b)=>a.prop1-b.prop1 || a.prop2-b.prop2) 36. ['A','a','b'] 37. uses UTF-16 code units 38. [1,2,2,3] 39. Yes modern engines 40. use optimized compare and algorithms 41. ['apple','banana','banana'] 42. sort((a,b)=>a.length-b.length) 43. ['a','aa','aaa'] 44. sorting UI elements, scores, tables 45. [1,2,10,21] 46. arr.sort((a,b)=>a-b) 47. ['a','b','c'] 48. [1,100,2,20] 49. [1,2,20,100] 50. (a,b)=>b-a
