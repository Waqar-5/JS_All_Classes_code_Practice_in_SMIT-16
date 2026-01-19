# Callback Functions in JavaScript - 50 MCQs

This document contains **50 Multiple Choice Questions (MCQs)** on JavaScript Callback Functions with a **complete answer key** at the bottom, formatted for interviews and tests.

---

## MCQs

1. What is a callback function?

   * a) Executes immediately
   * b) Passed to another function and executed later
   * c) Returns a number
   * d) Global function

2. Which array method always uses a callback?

   * a) push()
   * b) forEach()
   * c) pop()
   * d) slice()

3. What type of callback runs after a timer or API call?

   * a) Synchronous
   * b) Asynchronous
   * c) Anonymous
   * d) Named

4. Arrow functions are commonly used as callbacks. True/False?

5. What problem arises when callbacks are deeply nested?

   * a) Callback chaining
   * b) Callback hell
   * c) Async problem
   * d) Stack overflow

6. Which is NOT an advantage of callbacks?

   * a) Asynchronous handling
   * b) Reusability
   * c) Immediate execution
   * d) Custom behavior

7. Which is a valid callback function example?

   * a) setTimeout(() => console.log("Hi"), 1000)
   * b) console.log("Hi")
   * c) function test() {}
   * d) let a = 5

8. In `array.map(callback)`, how many parameters can the callback receive?

   * a) 1
   * b) 2
   * c) 3
   * d) All of the above

9. Callbacks are foundational for which modern JS features?

   * a) Promises
   * b) async/await
   * c) Both a and b
   * d) None

10. Which keyword defines an anonymous callback?

    * a) function
    * b) var
    * c) let
    * d) return

11. Which of these is asynchronous?

    * a) Array.forEach()
    * b) setTimeout()
    * c) Array.map()
    * d) console.log()

12. What is the term for a callback function that is unnamed?

    * a) Named
    * b) Anonymous
    * c) Global
    * d) Default

13. Which method executes a function repeatedly at intervals?

    * a) setTimeout()
    * b) setInterval()
    * c) clearTimeout()
    * d) executeAfter()

14. Callbacks can be passed as arguments to:

    * a) Only global functions
    * b) Any function
    * c) Only arrow functions
    * d) Only async functions

15. Which of these is a correct callback in an event listener?

    * a) button.addEventListener('click', handleClick)
    * b) button.addEventListener('click', handleClick())
    * c) button.addEventListener('click', handleClick())
    * d) button.addEventListener('click')

16. Which array method transforms each element using a callback?

    * a) map()
    * b) filter()
    * c) reduce()
    * d) some()

17. Can a callback function be named?

    * a) Yes
    * b) No

18. Which callback is executed immediately?

    * a) Synchronous
    * b) Asynchronous

19. Can callbacks return values to the main function?

    * a) Yes
    * b) No

20. Which of these is NOT a use of callbacks?

    * a) Event handling
    * b) API response handling
    * c) Synchronous blocking operations
    * d) Timers

21. Which array method filters elements based on a callback?

    * a) map()
    * b) filter()
    * c) reduce()
    * d) some()

22. Which method cancels a scheduled callback?

    * a) clearTimeout()
    * b) clearInterval()
    * c) both a and b
    * d) deleteTimeout()

23. What is the default value of `this` in a regular callback function in non-strict mode?

    * a) undefined
    * b) global object (window)
    * c) null
    * d) the function itself

24. Can a callback be used to handle API responses?

    * a) Yes
    * b) No

25. Which of these is true about asynchronous callbacks?

    * a) They block the main thread
    * b) They run after the current execution finishes
    * c) They cannot access variables
    * d) They are always anonymous

26. Which method executes a callback for all array elements?

    * a) map()
    * b) forEach()
    * c) filter()
    * d) reduce()

27. What is a common alternative to nested callbacks?

    * a) Promises
    * b) setTimeout()
    * c) Event listeners
    * d) Synchronous functions

28. Can callbacks throw errors that must be handled?

    * a) Yes
    * b) No

29. In which scenario is a callback NOT necessary?

    * a) Event handling
    * b) Synchronous calculation
    * c) API request
    * d) Timer delay

30. Which JS feature helps avoid callback hell?

    * a) Promises
    * b) Loops
    * c) Arrays
    * d) Variables

31. Which parameter order is correct for setTimeout?

    * a) callback, delay
    * b) delay, callback
    * c) function, array
    * d) callback, argument

32. Can callbacks be passed as properties of objects?

    * a) Yes
    * b) No

33. Which is true about anonymous callbacks?

    * a) They cannot be reused
    * b) They are automatically named
    * c) They cannot be arrow functions
    * d) They cannot accept arguments

34. Which JS method executes only when a condition is met in an array?

    * a) some()
    * b) map()
    * c) reduce()
    * d) forEach()

35. Can an async function accept a callback?

    * a) Yes
    * b) No

36. Which of the following is NOT a callback use case?

    * a) Event handling
    * b) DOM manipulation
    * c) Synchronous calculation
    * d) Timer handling

37. Which array method reduces elements to a single value using a callback?

    * a) map()
    * b) filter()
    * c) reduce()
    * d) some()

38. Can callbacks be recursive?

    * a) Yes
    * b) No

39. Which of these avoids callback hell effectively?

    * a) Async/await
    * b) Nested functions
    * c) Synchronous code
    * d) Loops

40. Which method allows a callback to run at intervals?

    * a) setTimeout()
    * b) setInterval()
    * c) clearInterval()
    * d) clearTimeout()

41. What is executed first in JavaScript?

    * a) Synchronous callback
    * b) Asynchronous callback
    * c) setTimeout callback
    * d) Promise.then callback

42. Can a callback be passed to another callback?

    * a) Yes
    * b) No

43. What type of function is `function() {}` if passed as an argument?

    * a) Callback
    * b) Anonymous
    * c) Both a and b
    * d) None

44. Which of these is a potential disadvantage of callbacks?

    * a) Increased readability
    * b) Callback hell
    * c) Modular code
    * d) Reusability

45. Which method removes a scheduled callback?

    * a) clearTimeout()
    * b) setTimeout()
    * c) runTimeout()
    * d) deleteCallback()

46. In which scenario would a synchronous callback be sufficient?

    * a) Array.map()
    * b) setTimeout()
    * c) API request
    * d) Event handling

47. What is the main difference between synchronous and asynchronous callbacks?

    * a) Execution timing
    * b) Return type
    * c) Function name
    * d) Argument type

48. Which of these executes a callback after a specific delay?

    * a) setInterval()
    * b) setTimeout()
    * c) clearTimeout()
    * d) runAfter()

49. Are arrow functions always asynchronous when used as callbacks?

    * a) Yes
    * b) No

50. Which of these can help structure multiple asynchronous callbacks?

    * a) Promises
    * b) Async/await
    * c) Both a and b
    * d) Loops

---

## Answer Key

1. b
2. b
3. b
4. True
5. b
6. c
7. a
8. d
9. c
10. a
11. b
12. b
13. b
14. b
15. a
16. a
17. a
18. a
19. a
20. c
21. b
22. c
23. b
24. a
25. b
26. b
27. a
28. a
29. b
30. a
31. a
32. a
33. a
34. a
35. a
36. c
37. c
38. a
39. a
40. b
41. a
42. a
43. c
44. b
45. a
46. a
47. a
48. b
49. b
50. c
