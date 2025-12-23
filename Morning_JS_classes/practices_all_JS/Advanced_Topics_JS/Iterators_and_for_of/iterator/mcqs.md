# JavaScript Iterators – Top 50 MCQs for Exams & Interviews

This document contains **50 high-quality multiple-choice questions (MCQs)** on JavaScript Iterators, designed for **top-level exams and interviews**. The **answer key** is provided at the **end of the MCQs** to allow self-assessment.

---

## 🔹 Multiple Choice Questions (1-50)

1. What is an iterator in JavaScript?

   * A) A function that returns an array
   * B) An object that provides `next()` method
   * C) A keyword in JS
   * D) None of the above

2. Which method is required to make an object iterable?

   * A) `Symbol.iterator`
   * B) `Symbol.iterable`
   * C) `forEach`
   * D) `next`

3. What does `next()` return?

   * A) The next array element
   * B) An object `{value, done}`
   * C) Boolean `true/false`
   * D) Only value

4. What is the `done` property in iterator?

   * A) Indicates iteration ended
   * B) Holds the value
   * C) Throws error
   * D) Starts iteration

5. Can arrays be iterated using iterators?

   * A) Yes
   * B) No
   * C) Only with for loop
   * D) Only strings

6. Can strings be iterated using iterators?

   * A) Yes
   * B) No
   * C) Only ES6 arrays
   * D) Only objects

7. Which loop automatically uses iterator?

   * A) for...of
   * B) for...in
   * C) while
   * D) do...while

8. Can objects without `[Symbol.iterator]` be iterated with `for...of`?

   * A) Yes
   * B) No
   * C) Only arrays inside
   * D) Only strings

9. How to create a custom iterator for an object?

   * A) Add `[Symbol.iterator]()` returning `{next(){}}`
   * B) Add `next()` directly
   * C) Use `for...in`
   * D) Assign `Symbol.iterator = object`

10. What does a generator function return?

    * A) Array
    * B) Iterator object
    * C) String
    * D) Number

11. How to define a generator function?

    * A) `function* name(){}`
    * B) `function name(){*}`
    * C) `function name*(){}`
    * D) `*function name(){}`

12. Can iterators be infinite?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only strings

13. What is the key difference between `for...in` and `for...of`?

    * A) for...in = keys, for...of = values
    * B) for...in = values, for...of = keys
    * C) Both same
    * D) for...in = objects only

14. Which of the following is a lazy evaluation example?

    * A) Infinite iterator
    * B) Array.map()
    * C) String concatenation
    * D) JSON parse

15. Can iterators include filtering logic?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

16. How does a generator function yield values?

    * A) Using `yield`
    * B) Using `return`
    * C) Using `console.log`
    * D) Using `next()`

17. Can `.next()` be called manually?

    * A) Yes
    * B) No
    * C) Only inside generator
    * D) Only in arrays

18. Which of these is NOT iterable by default?

    * A) Array
    * B) Map
    * C) Object
    * D) Set

19. Can a Map object be iterated with `for...of`?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only strings

20. How to skip elements in custom iterator?

    * A) Add condition inside `next()`
    * B) Use `continue` in for loop
    * C) Use `filter()` outside
    * D) Not possible

21. What happens when `.next()` is called after `done: true`?

    * A) Returns `{value: undefined, done: true}`
    * B) Throws error
    * C) Resets iterator
    * D) Returns last value

22. Which operator can be used for conditional logic inside iterators?

    * A) Ternary `? :`
    * B) `if` outside only
    * C) Only functions
    * D) None

23. Can generators accept input using `.next(value)`?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

24. How can iterators help memory efficiency?

    * A) Lazy evaluation, no pre-storing
    * B) Stores all values
    * C) Only reduces CPU
    * D) Only improves speed

25. Which method returns default iterator of an array?

    * A) `arr[Symbol.iterator]()`
    * B) `arr.iterator()`
    * C) `arr.next()`
    * D) `arr.forEach()`

26. Can `for...of` iterate strings with unicode characters correctly?

    * A) Yes
    * B) No
    * C) Only ASCII
    * D) Only arrays

27. Can iterators implement stop conditions?

    * A) Yes, inside `next()`
    * B) No, always infinite
    * C) Only generators
    * D) Only arrays

28. Which of these is true about generator vs custom iterator?

    * A) Generators are simpler
    * B) Generators slower
    * C) Generators always finite
    * D) Generators cannot yield objects

29. Can infinite iterators be safely used in loops?

    * A) Yes, with manual limit
    * B) No
    * C) Only arrays
    * D) Only generators

30. Which of these allows filtering during iteration?

    * A) Custom iterator
    * B) Array.map()
    * C) Array.push()
    * D) Object.keys()

31. What happens if a generator function has multiple `yield` statements?

    * A) Yields values one by one
    * B) Returns last value only
    * C) Throws error
    * D) Yields all at once

32. Can generators maintain internal state?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

33. Can `for...of` be used on Sets?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

34. Can generator functions be paused and resumed?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only loops

35. Which is a real-world use-case of iterators?

    * A) Streaming data
    * B) HTML only
    * C) Logging only
    * D) CSS

36. Can iterators produce values on demand?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

37. Can an object implement multiple iterators?

    * A) Yes, custom iterators for different purposes
    * B) No
    * C) Only arrays
    * D) Only strings

38. Can iterators be nested inside another iterator?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only generators

39. Can generator iterators throw exceptions?

    * A) Yes, inside `next()`
    * B) No
    * C) Only arrays
    * D) Only objects

40. Which method is used to get iterator of a Map?

    * A) `[Symbol.iterator]()`
    * B) `map()`
    * C) `next()`
    * D) `forEach()`

41. Can iterators simplify async data processing?

    * A) Yes, with async generators
    * B) No
    * C) Only arrays
    * D) Only loops

42. Can `for...in` replace `for...of` for arrays?

    * A) No, it iterates keys
    * B) Yes
    * C) Only for generators
    * D) Only objects

43. Which is true about iterators and ES6?

    * A) Iterators introduced in ES6
    * B) Iterators are ES5 feature
    * C) Iterators are ES7
    * D) Iterators are deprecated

44. Can generator iterators yield objects instead of primitive values?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only strings

45. Can iterators help reduce time complexity?

    * A) Sometimes, via lazy evaluation
    * B) No
    * C) Only arrays
    * D) Only strings

46. Can generator functions be recursive?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

47. How to skip values in generator dynamically?

    * A) Use conditional `if` with `yield`
    * B) Use `break`
    * C) Use `return`
    * D) Not possible

48. Can iterators be used in functional programming?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only strings

49. Can iterators simplify memory-heavy applications?

    * A) Yes, via lazy evaluation
    * B) No
    * C) Only generators
    * D) Only objects

50. Why should every JS developer master iterators?

    * A) Used in almost every modern JS application for arrays, strings, maps, streams, generators
    * B) Only for academic purpose
    * C) Optional
    * D) Only for logging

---

## ✅ Answer Key (1-50)

1. B
2. A
3. B
4. A
5. A
6. A
7. A
8. B
9. A
10. B
11. A
12. A
13. A
14. A
15. A
16. A
17. A
18. C
19. A
20. A
21. A
22. A
23. A
24. A
25. A
26. A
27. A
28. A
29. A
30. A
31. A
32. A
33. A
34. A
35. A
36. A
37. A
38. A
39. A
40. A
41. A
42. A
43. A
44. A
45. A
46. A
47. A
48. A
49. A
50. A
