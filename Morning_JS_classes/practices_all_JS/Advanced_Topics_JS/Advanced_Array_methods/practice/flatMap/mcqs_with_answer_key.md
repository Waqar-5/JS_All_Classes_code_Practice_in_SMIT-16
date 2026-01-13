# JavaScript `flatMap()` Method - 50 MCQs with Answer Key

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [50 MCQs](#50-mcqs)
4. [Answer Key](#answer-key)

---

## Introduction

The `flatMap()` method in JavaScript combines **map() and flat() (depth 1)**. It first maps each element and then flattens the result by **one level**. Understanding this method is crucial for **exams and interviews**.

---

## Syntax

```javascript
arr.flatMap(callback(currentValue, index, array))
```

---

## 50 MCQs

### Easy (1-10)

1. What does `flatMap()` do?

   * a) Maps each element only
   * b) Flattens nested arrays only
   * c) Maps and flattens one level
   * d) Filters an array
2. Does `flatMap()` modify the original array?

   * a) Yes  b) No
3. Output:

```javascript
[1,2,3].flatMap(x => [x*2]);
```

4. Difference between `flat()` and `flatMap()`?
5. Output:

```javascript
[1,2].map(x=>[x*2]).flat();
```

6. Output:

```javascript
[1,2].flatMap(x=>[x*2]);
```

7. Default flatten depth of `flatMap()`?
8. Can `flatMap()` handle empty arrays?
9. Output:

```javascript
[1,'',3].flatMap(x=>x.toString());
```

10. Can `flatMap()` combine with `filter()`?

### Moderate (11-30)

11. Output:

```javascript
[1,[2,3]].flatMap(x => x);
```

12. Output:

```javascript
['hello','world'].flatMap(x=>x.split(''));
```

13. Difference between `map().flat()` and `flatMap()`?
14. Output:

```javascript
[1,2,3].map(x=>[x+1]).flat();
```

15. Output:

```javascript
[1,2,3].flatMap(x=>[x+1]);
```

16. Can `flatMap()` flatten more than one level?
17. Output:

```javascript
[1,[2],[3,4]].flatMap(x => x);
```

18. Using `flatMap()` on nested objects:

```javascript
[[{id:1}],[{id:2}]].flatMap(x=>x);
```

19. Output with empty strings:

```javascript
['a','','b'].flatMap(x=>x.split(''));
```

20. Difference between `flatMap()` and `reduce()`?
21. Flatten array of numbers and strings:

```javascript
[1,['2'],[3]].flatMap(x=>x);
```

22. Using `flatMap()` in API data processing?
23. Output:

```javascript
[1,2,3].flatMap(x => [[x*2]]);
```

24. Output:

```javascript
[1,[2,[3]]].flatMap(x=>x);
```

25. Using `flatMap()` with `map()` for concise code?
26. Output sparse array:

```javascript
[1,,3].flatMap(x=>[x]);
```

27. Can `flatMap()` be used on arrays of objects?
28. Output:

```javascript
[[{a:1}],[{b:2}]].flatMap(x=>x);
```

29. Using `flatMap()` with strings:

```javascript
['hi','ok'].flatMap(x=>x.split(''));
```

30. Difference between `flat()` and `flatMap()` in flattening depth?

### Difficult (31-50)

31. Output:

```javascript
[1,2,[3,4]].flatMap(x=>x);
```

32. Using `flatMap()` for nested arrays:

```javascript
[[1,2],[3,4]].flatMap(x=>x);
```

33. Output:

```javascript
[[1,[2]],[3]].flatMap(x=>x);
```

34. Flatten multi-level nested array with `flatMap()`?
35. Output:

```javascript
[1,2,3].flatMap(x=>[x*2, x*3]);
```

36. Can `flatMap()` replace `map().flat()` always?
37. Output with objects array:

```javascript
[[{a:1}], [{b:2}]].flatMap(x=>x);
```

38. Using `flatMap()` with `filter()`:

```javascript
[1,2,3].flatMap(x=>x>1?[x]:[]);
```

39. Output:

```javascript
[1,[2,3],[4]].flatMap(x=>x);
```

40. Difference between `flatMap()` and `concatMap()` in RxJS?
41. Flatten array before `reduce()`?
42. Output:

```javascript
[1,[2,[3]]].flatMap(x=>x);
```

43. Using `flatMap()` to remove empty strings:

```javascript
['a','','b'].flatMap(x=>x?x:[]);
```

44. Output:

```javascript
[1,[2,3,[4]]].flatMap(x=>x);
```

45. Output:

```javascript
[1,2,3].flatMap(x=>[[x*2]]);
```

46. Flatten numeric and string mix:

```javascript
[1,['2'],3].flatMap(x=>x);
```

47. Output:

```javascript
[['a','b'],['c']].flatMap(x=>x);
```

48. Can `flatMap()` handle sparse arrays automatically?
49. Difference between `flatMap()` and recursive flattening?
50. Output:

```javascript
[1,[2,[3]]].flatMap(x=>x);
```

---

## Answer Key

1.c 2.b 3.[2,4,6] 4.flatMap() = map + flat(1) 5.[2,4,6] 6.[2,4,6] 7.1 8.Yes 9.['1','3'] 10.Yes 11.[1,2,3] 12.['h','e','l','l','o','w','o','r','l','d'] 13.map().flat() = flatMap() 14.[2,3,4] 15.[2,3,4] 16.No 17.[1,2,3,4] 18.[{id:1},{id:2}] 19.['a','b'] 20.flatMap() is not reduce 21.[1,'2',3] 22.Yes 23.[[2],[4],[6]] 24.[1,[2,[3]]] 25.Yes 26.[1,3] 27.Yes 28.[{a:1},{b:2}] 29.['h','i','o','k'] 30.flatMap() flattens 1 level only 31.[1,2,3,4] 32.[1,2,3,4] 33.[1,[2],3] 34.Use flatMap only flattens 1 level 35.[2,3,4,3,6,9] 36.No if multiple nested levels 37.[{a:1},{b:2}] 38.[2,3] 39.[1,2,3,4] 40.flatMap() in RxJS = concatMap() but JS native differs 41.Yes, after flatMap() 42.[1,2,[3]] 43.['a','b'] 44.[1,2,3,[4]] 45.[[2],[4],[6]] 46.[1,'2',3] 47.['a','b','c'] 48.Yes 49.flatMap() = 1 level only; recursive = all levels 50.[1,2,[3]]
