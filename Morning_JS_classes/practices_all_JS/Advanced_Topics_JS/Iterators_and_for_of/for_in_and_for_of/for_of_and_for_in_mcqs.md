# JavaScript for...in and for...of Loops – Top 50 MCQs for Exams & Interviews

This document contains **50 high-quality multiple-choice questions (MCQs)** on JavaScript **for...in** and **for...of** loops, designed for **top-level exams and interviews**. The **answer key** is provided at the **end of the MCQs** for self-assessment.

---

## 🔹 Multiple Choice Questions (1-50)

1. What does `for...in` loop iterate over?

   * A) Values
   * B) Keys
   * C) Both keys and values
   * D) Arrays only

2. What does `for...of` loop iterate over?

   * A) Values
   * B) Keys
   * C) Objects only
   * D) None

3. Which loop can iterate over a Map?

   * A) for...in
   * B) for...of
   * C) Neither
   * D) Both

4. Can `for...in` loop iterate over arrays?

   * A) Yes, keys/indexes
   * B) No
   * C) Only values
   * D) Only strings

5. Can `for...of` loop iterate over plain objects?

   * A) Yes
   * B) No
   * C) Only arrays
   * D) Only strings

6. What is the return type of `for...in` iteration?

   * A) Values
   * B) Keys/Indexes
   * C) Objects
   * D) Strings

7. What is the return type of `for...of` iteration?

   * A) Values
   * B) Keys
   * C) Objects
   * D) Strings

8. How to iterate object values with for...of?

   * A) for(const val of obj)
   * B) for(const val of Object.values(obj))
   * C) for(const val in obj)
   * D) Not possible

9. Which loop is better for enumerating object properties?

   * A) for...in
   * B) for...of
   * C) while loop
   * D) for loop

10. Which loop is better for arrays when you need values?

    * A) for...in
    * B) for...of
    * C) for loop
    * D) while loop

11. Does for...in loop include inherited properties?

    * A) Yes
    * B) No
    * C) Sometimes
    * D) Only arrays

12. How to skip inherited properties in for...in?

    * A) Using hasOwnProperty()
    * B) Using filter()
    * C) Using map()
    * D) Not possible

13. Can for...of loop iterate strings?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

14. Which loop is used internally in iterators?

    * A) for...in
    * B) for...of
    * C) while
    * D) do...while

15. Which loop can iterate Sets?

    * A) for...in
    * B) for...of
    * C) Neither
    * D) Both

16. Which loop returns the **index** when used on an array?

    * A) for...in
    * B) for...of
    * C) Both
    * D) None

17. Which loop returns the **value** when used on an array?

    * A) for...in
    * B) for...of
    * C) Both
    * D) None

18. Can you use destructuring in for...of loops?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

19. Can for...in loop be used to loop over strings?

    * A) Yes, indexes
    * B) No
    * C) Only values
    * D) Only numbers

20. Which loop is safer for iterating arrays?

    * A) for...of
    * B) for...in
    * C) for loop
    * D) while loop

21. Can for...of iterate generator functions?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only objects

22. Can for...in iterate over Symbols?

    * A) No
    * B) Yes
    * C) Only values
    * D) Only keys

23. How do you iterate over object keys using for...of?

    * A) Object.keys(obj)
    * B) Object.values(obj)
    * C) Object.entries(obj)
    * D) Direct for...of obj

24. How do you iterate over object values using for...of?

    * A) Object.keys(obj)
    * B) Object.values(obj)
    * C) Object.entries(obj)
    * D) Direct for...of obj

25. How do you iterate over object entries (key-value pairs) using for...of?

    * A) Object.keys(obj)
    * B) Object.values(obj)
    * C) Object.entries(obj)
    * D) Direct for...of obj

26. Does for...in guarantee iteration order for arrays?

    * A) No
    * B) Yes
    * C) Sometimes
    * D) Only for strings

27. Does for...of guarantee iteration order for arrays?

    * A) Yes
    * B) No
    * C) Only keys
    * D) Only values

28. Can you use break/continue in for...in?

    * A) Yes
    * B) No
    * C) Only break
    * D) Only continue

29. Can you use break/continue in for...of?

    * A) Yes
    * B) No
    * C) Only break
    * D) Only continue

30. Which loop can be used on NodeList?

    * A) for...in
    * B) for...of
    * C) Neither
    * D) Only while

31. Can for...of loop work with strings in multi-byte characters correctly?

    * A) Yes
    * B) No
    * C) Only for ASCII
    * D) Only arrays

32. Which loop is preferred for traversing iterables like Map/Set?

    * A) for...of
    * B) for...in
    * C) for loop
    * D) while loop

33. Can for...in iterate over array elements that are undefined?

    * A) Yes, it iterates indexes
    * B) No
    * C) Only values
    * D) Only numbers

34. Can for...of iterate over array elements that are undefined?

    * A) Yes, iterates values
    * B) No
    * C) Only keys
    * D) Only objects

35. Can for...in iterate over array methods?

    * A) Yes, inherited methods
    * B) No
    * C) Only values
    * D) Only keys

36. Can for...of iterate over array methods?

    * A) No
    * B) Yes
    * C) Only values
    * D) Only keys

37. What does `for (const index in arr)` return?

    * A) Index
    * B) Value
    * C) Object
    * D) Array

38. What does `for (const val of arr)` return?

    * A) Value
    * B) Index
    * C) Object
    * D) Array

39. Which method converts object into iterable for for...of?

    * A) Object.keys()
    * B) Object.values()
    * C) Object.entries()
    * D) All of the above

40. Which of the following is correct for looping over object entries?

    * A) for(const [key,value] of Object.entries(obj))
    * B) for(const val of obj)
    * C) for(const key in obj)
    * D) None

41. Which loop is better for performance with arrays?

    * A) for loop or for...of
    * B) for...in
    * C) while loop
    * D) map function

42. Can you use destructuring for arrays in for...of?

    * A) Yes
    * B) No
    * C) Only for objects
    * D) Only for strings

43. Can for...in iterate Symbols as object keys?

    * A) No
    * B) Yes
    * C) Only if enumerable
    * D) Only for arrays

44. Can you modify object properties while using for...in?

    * A) Yes
    * B) No
    * C) Only add new keys
    * D) Only delete keys

45. Can you modify iterable values while using for...of?

    * A) Yes, if mutable
    * B) No
    * C) Only strings
    * D) Only numbers

46. Which loop is preferred for iterating over generators?

    * A) for...of
    * B) for...in
    * C) for loop
    * D) while loop

47. Can for...of be used on arguments object?

    * A) Yes, if converted to array or in ES6+ environment
    * B) No
    * C) Only strings
    * D) Only arrays

48. Does for...in iterate over array holes?

    * A) Yes, indexes exist
    * B) No
    * C) Only values
    * D) Only objects

49. Does for...of iterate over array holes?

    * A) No, skips undefined holes
    * B) Yes, iterates values including undefined
    * C) Only keys
    * D) Only strings

50. Which loop should you memorize first for modern JS development?

    * A) for...of
    * B) for...in
    * C) while
    * D) do...while

---

## ✅ Answer Key (1-50)

1. B
2. A
3. B
4. A
5. B
6. B
7. A
8. B
9. A
10. B
11. A
12. A
13. A
14. B
15. B
16. A
17. B
18. A
19. A
20. A
21. A
22. A
23. A
24. B
25. C
26. A
27. A
28. A
29. A
30. B
31. A
32. A
33. A
34. A
35. A
36. A
37. A
38. A
39. D
40. A
41. A
42. A
43. C
44. A
45. A
46. A
47. A
48. A
49. B
50. A
