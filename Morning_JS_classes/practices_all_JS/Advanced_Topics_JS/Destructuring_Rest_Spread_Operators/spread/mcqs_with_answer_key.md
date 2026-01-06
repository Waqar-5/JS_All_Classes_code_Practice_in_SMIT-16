# 📦 JavaScript Spread Operator - 50 MCQs
> **Exam-Oriented, Interview-Ready, Beginner → Advanced**  
> Answers are provided at the bottom for self-check

This file contains **50 Multiple Choice Questions (MCQs)** on **JavaScript Spread Operator**.  
Perfect for **exam preparation**, **interviews**, or **self-practice**.

---

## 📌 Table of Contents
1. 10 Easy Questions  
2. 20 Moderate Questions  
3. 20 Difficult Questions  
4. Answer Key

---

## 1️⃣ Easy Questions (1–10)

1. What is the symbol for the spread operator?  
a) `..`  
b) `...`  
c) `+++`  
d) `**`  

2. Which data type can use spread operator?  
a) Numbers  
b) Strings  
c) Booleans  
d) None  

3. Spread operator was introduced in which version?  
a) ES5  
b) ES6  
c) ES7  
d) ES8  

4. What does spread operator do?  
a) Collects values  
b) Expands iterable elements  
c) Deletes elements  
d) Converts array to string  

5. Can spread operator be used on objects?  
a) Yes  
b) No  
c) Only arrays  
d) Only strings  

6. Which of the following creates a copy of array `arr`?  
a) `let copy = arr;`  
b) `let copy = [...arr];`  
c) `let copy = arr.push();`  
d) `let copy = arr.join();`  

7. Spread operator can be used in function calls to:  
a) Collect values  
b) Expand array as arguments  
c) Delete arguments  
d) Modify arguments  

8. Spread operator works with strings because strings are:  
a) Arrays  
b) Iterables  
c) Objects  
d) Functions  

9. Spread operator in objects was standardized in:  
a) ES6  
b) ES2017  
c) ES2018  
d) ES5  

10. Which of the following is invalid usage of spread?  
a) `...[1,2,3]`  
b) `{...obj}`  
c) `...123`  
d) `console.log(...arr)`  

---

## 2️⃣ Moderate Questions (11–30)

11. What happens when merging objects with same keys?  
a) First key wins  
b) Last key wins  
c) Error occurs  
d) Values are combined  

12. Spread operator creates:  
a) Deep copy  
b) Shallow copy  
c) Reference copy  
d) Immutable copy  

13. Which of these is a valid array merge?  
a) `[...arr1 + ...arr2]`  
b) `[...arr1, ...arr2]`  
c) `[arr1..., arr2...]`  
d) `arr1 + arr2`  

14. How do you add elements while copying an array?  
a) `[new, ...old]`  
b) `[...old, new]`  
c) Both a and b  
d) None  

15. Spread operator can be used with:  
a) Arrays  
b) Objects  
c) Strings  
d) All of the above  

16. Which statement is true about spread in functions?  
a) Converts array to arguments  
b) Collects arguments  
c) Deletes extra arguments  
d) Changes original array  

17. Spread operator modifies the original array/object:  
a) Always  
b) Sometimes  
c) Never  
d) Only with objects  

18. Which code correctly copies an object?  
a) `const copy = obj;`  
b) `const copy = {...obj};`  
c) `const copy = obj.copy();`  
d) `const copy = Object.assign(obj);`  

19. What will `[..."JS"]` return?  
a) `["JS"]`  
b) `["J", "S"]`  
c) `["J S"]`  
d) `"JS"`  

20. Spread in arrays is equivalent to:  
a) `arr.concat()`  
b) `Array.from(arr)`  
c) Both  
d) None  

21. Using spread on `null` or `undefined` will:  
a) Work fine  
b) Throw error  
c) Return empty array  
d) Return null  

22. In React, spread operator is commonly used to:  
a) Update state immutably  
b) Collect props  
c) Delete keys  
d) Merge CSS  

23. Shallow copy means:  
a) Nested arrays share references  
b) Deep clone is created  
c) Primitive values are copied by reference  
d) Original object is deleted  

24. Can spread be used multiple times?  
a) Yes  
b) No  
c) Only in arrays  
d) Only in objects  

25. What is output?  
```js
const a = [1,2];  
const b = [3,4];  
console.log([...a,...b]);

a) [1,2,[3,4]]
b) [1,2,3,4]
c) [1,2]
d) [3,4]

26: Which is NOT a valid use case of spread?
a) Copy array
b) Merge objects
c) Collect function arguments
d) Pass array as function arguments

27: Spread operator is left-side usage when:
a) Expanding array
b) Collecting values in function params
c) Merging objects
d) Copying array

28: Spread operator is right-side usage when:
a) Collecting values
b) Expanding values
c) Both a and b
d) None

29: What is a key difference between spread and rest?
a) Spread collects values
b) Rest expands values
c) Spread expands, rest collects
d) No difference

30: Which statement is true about order in object spread?
a) Order doesn’t matter
b) Later properties overwrite earlier ones
c) Earlier properties overwrite later
d) Throws error if duplicate

3️⃣ Difficult Questions (31–50)

31: Spread operator can throw an error if used on:
a) Arrays
b) Strings
c) Objects
d) Numbers

32: What will this output?
const obj1 = {x:1};  
const obj2 = {x:2};  
console.log({...obj1, ...obj2});

a) {x:1}
b) {x:2}
c) {x:1,x:2}
d) Error

33: Shallow copy with spread affects nested objects:
a) True
b) False

34: Which code merges arrays a and b correctly?
a) [a, b]
b) [...a, ...b]
c) a.concat(...b)
d) [a...b]

35: Spread can be used to:
a) Convert string to array
b) Merge arrays
c) Pass function arguments
d) All of the above

36: What is output?
const arr = [1,2,3];  
console.log(...arr);

a) [1,2,3]
b) 1 2 3
c) [1 2 3]
d) 123

37: Which statement about spread is correct?
a) Creates deep copy
b) Creates shallow copy
c) Mutates original array
d) Only works on arrays

38: Using spread in React state ensures:
a) Immutability
b) Mutation
c) Direct assignment
d) Undefined behavior

39: Which is true about nested objects with spread?
a) Nested objects are cloned
b) Nested objects reference original
c) Nested arrays are deleted
d) Throws error

40: Spread operator cannot be used in:
a) Arrays
b) Objects
c) Numbers
d) Strings

41: Spread syntax in ES6 is equivalent to:
a) Copying by reference
b) Manual iteration & insertion
c) Deep cloning
d) None

42: Which is valid to merge objects?
a) {...obj1 + ...obj2}
b) {...obj1, ...obj2}
c) {obj1..., obj2...}
d) obj1.concat(obj2)

43: Which is valid to copy array?
a) arr.slice()
b) [...arr]
c) Array.from(arr)
d) All of the above

44: Spread operator with rest operator syntax is:
a) Same usage
b) Opposite purpose
c) Not allowed together
d) None

Output of:

45: const str = "JS";  
console.log([...str]);
a) ["JS"]
b) ["J","S"]
c) "JS"
d) ["J S"]

46: Can spread merge arrays and add elements simultaneously?
a) Yes
b) No

47: Spread operator in arrays preserves:
a) Reference
b) Original data unmodified
c) Nested object clone
d) Deletes original

48: Which of these is a shallow copy pitfall?
a) Nested arrays remain shared
b) Primitives copied by reference
c) Nested objects deleted
d) None

49: Spread operator is frequently asked in interviews for:
a) Copying arrays/objects
b) Merge arrays/objects
c) Shallow vs deep copy
d) All of the above

50: One-line definition of spread operator:
a) Collects values
b) Expands iterable elements into individual values
c) Deletes values
d) Converts arrays to objects

✅ Answer Key

1. b

2. b

3. b

4. b

5. a

6. b

7. b

8. b

9. c

10. c

11. b

12. b

13. b

14. c

15. d

16. a

17. c

18. b

19. b

20. c

21. b

22. a

23. a

24. a

25. b

26. c

27. b

28. b

29. c

30. b

31. d

32. b

33. a

34. b

35. d

36. b

37. b

38. a

39. b

40. c

41. b

42. b

43. d

44. b

45. b

46. a

47. b

48. a

49. d

50. b