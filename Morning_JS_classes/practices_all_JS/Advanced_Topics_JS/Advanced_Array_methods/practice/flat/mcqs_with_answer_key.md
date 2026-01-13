# JavaScript `flat()` Method - 50 MCQs with Answer Key

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [50 MCQs](#50-mcqs)
4. [Answer Key](#answer-key)

---

## Introduction

The `flat()` method in JavaScript creates a **new array** with all sub-array elements concatenated into it **up to the specified depth**. It is commonly asked in **exams and interviews** to test array manipulation skills.

---

## Syntax

```javascript
arr.flat([depth])
```

* `depth` (optional): Number of levels to flatten. Default is 1.

---

## 50 MCQs

### Easy (1-10)

1. What does `flat()` do?

   * a) Sorts an array
   * b) Flattens nested arrays
   * c) Maps array elements
   * d) Filters an array
2. Default depth of `flat()`?

   * a) 0  b) 1  c) 2  d) Infinity
3. Output:

```javascript
[1, [2, 3]].flat();
```

4. Does `flat()` modify original array?

   * a) Yes  b) No
5. Output:

```javascript
[1, [2, [3, 4]]].flat(2);
```

6. Output:

```javascript
[1, , 3].flat();
```

7. Can `flat()` handle empty arrays?
8. Output:

```javascript
[].flat();
```

9. Is `flat()` available on all arrays in modern JS?
10. Output:

```javascript
[1,[2,[3,[4]]]].flat(Infinity);
```

### Moderate (11-30)

11. Output:

```javascript
[1, [2, [3]]].flat(1);
```

12. Difference between `flat()` and `flatMap()`?
13. Output:

```javascript
[1, [2, 3]].flatMap(x=>[x*2]);
```

14. Can `flat()` be chained with `map()`?
15. Output:

```javascript
[1,[2],[3,4]].flat();
```

16. How to flatten array two levels deep?
17. Output:

```javascript
[1,[2,[3,[4]]]].flat(2);
```

18. What happens to holes in array?
19. Output:

```javascript
[1,,3].flat();
```

20. Can `flat()` be used on arrays of objects?
21. Output:

```javascript
[[{id:1}], [{id:2}]].flat();
```

22. How to fully flatten any depth?
23. Output:

```javascript
[1,[2,[3,[4,[5]]]]].flat(Infinity);
```

24. Output:

```javascript
[1,[2,[3]]].flat(0);
```

25. Using `flat()` with strings?
26. Output:

```javascript
[['a','b'],['c']].flat();
```

27. Can flat remove `undefined` values?
28. Using `flat()` to clean sparse array?
29. Output:

```javascript
[1,,3,[4]].flat();
```

30. Is `flat()` supported in ES2019?

### Difficult (31-50)

31. Output:

```javascript
[1,[2,[3,[4]]],[5]].flat(2);
```

32. Using `flat()` for API nested data?
33. Output:

```javascript
[[[1,2]],[[3,4]]].flat(2);
```

34. Difference between `depth=1` and `depth=Infinity`?
35. Output:

```javascript
[[1,[2,[3]]]].flat(Infinity);
```

36. Output:

```javascript
[1,[2,[3,[4]]]].flat();
```

37. Can `flat()` be used in combination with `filter()`?
38. Output:

```javascript
[1,[2,[3]]].flat(2);
```

39. Output:

```javascript
[[1,,2],[3]].flat();
```

40. Output:

```javascript
[[['a']],[['b']]].flat(2);
```

41. Flattening objects array one level?
42. Output:

```javascript
[{a:1},{b:2}].flat();
```

43. Using `flat()` with numbers and strings?
44. Output:

```javascript
[1,['2'],[3]].flat();
```

45. Output:

```javascript
[1,[2,[3,[4,[5]]]]].flat(3);
```

46. Output:

```javascript
[[1],[2],[3]].flat();
```

47. Using `flat()` for nested event handlers array?
48. Output:

```javascript
[1,[2,[3]]].flat(Infinity);
```

49. Difference between `concat` and `flat()`?
50. Output:

```javascript
[[1,2],[3,4]].flat();
```

---

## Answer Key

1.b 2.b 3.[1,2,3] 4.b 5.[1,2,3,4] 6.[1,3] 7.Yes 8.[] 9.Yes 10.[1,2,3,4] 11.[1,2,[3]] 12.flatMap() combines map and flat 13.[2,4,6] 14.Yes 15.[1,2,3,4] 16.flat(2) 17.[1,2,3,[4]] 18.Holes removed 19.[1,3] 20.Yes 21.[{id:1},{id:2}] 22.flat(Infinity) 23.[1,2,3,4,5] 24.[1,[2,[3]]] 25.No 26.['a','b','c'] 27.No 28.Yes 29.[1,3,4] 30.Yes 31.[1,2,3,[4],5] 32.Yes 33.[1,2,3,4] 34.Depth=1 flattens 1 level, Infinity flattens all levels 35.[1,2,3] 36.[1,2,[3,[4]]] 37.Yes 38.[1,2,3] 39.[1,2,3] 40.['a','b'] 41.Yes 42.[{a:1},{b:2}] 43.Yes 44.[1,'2',3] 45.[1,2,3,[4,[5]]] 46.[1,2,3] 47.Yes 48.[1,2,3] 49.concat merges arrays without flattening 50.[1,2,3,4]
