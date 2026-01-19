# 🧠 50 MCQs: First-Class & Higher-Order Functions (Exam-Focused)

> **A mix of First-Class and Higher-Order Function MCQs**
> Designed for **exams and interviews**, covering commonly asked tricky concepts.

---

## 📘 Questions (1–50)

1. What defines a first-class function?
   A. Functions cannot be assigned to variables
   B. Functions are treated as values
   C. Functions cannot be returned
   D. Functions cannot be passed as arguments

2. Which of the following is a higher-order function?
   A. `console.log()`
   B. `Array.map(fn)`
   C. `Number()`
   D. `Math.max()`

3. What is the output of `const f = x => x*2; console.log(f(5));`?
   A. `f`
   B. `10`
   C. `[10]`
   D. `undefined`

4. Can you store functions in arrays?
   A. No
   B. Yes
   C. Only in Python
   D. Only arrow functions

5. Which is true about HOF?
   A. It cannot return a function
   B. It can take and/or return functions
   C. It cannot be anonymous
   D. It only works with arrays

6. `const add = a => b => a + b;` is an example of?
   A. First-class function
   B. Higher-order function
   C. Both
   D. None

7. Which is NOT a property of first-class functions?
   A. Assigned to variables
   B. Passed as arguments
   C. Returned from functions
   D. Cannot be anonymous

8. What does `arr.filter(n => n%2===0)` return?
   A. First odd numbers
   B. New array of even numbers
   C. Undefined
   D. Original array modified

9. Which syntax is correct to pass a function as argument?
   A. `fn()`
   B. `fn`
   C. `function()`
   D. `call(fn)`

10. Can HOFs accept multiple functions as arguments?
    A. Yes
    B. No
    C. Only one
    D. Only in Python

11. Which of these is a valid first-class function in JS?
    A. `function f(){}`
    B. `const f = () => {}`
    C. `function* g(){}`
    D. All of the above

12. Can a first-class function be recursive?
    A. Yes
    B. No
    C. Only in Python
    D. Only arrow functions

13. Which array method is a HOF?
    A. `push()`
    B. `map()`
    C. `pop()`
    D. `length`

14. What is currying?
    A. Converting a function into multiple functions each with single arguments
    B. Combining multiple functions into one
    C. Assigning functions to variables
    D. Passing functions as arguments

15. Why are first-class functions important in React?
    A. They allow event handlers
    B. They enable hooks
    C. They allow passing callbacks
    D. All of the above

16. Which of the following is true about HOF?
    A. HOFs cannot be used with async functions
    B. HOFs enable composition
    C. HOFs cannot return anything
    D. HOFs are always impure

17. What does `setTimeout(()=>console.log('Hi'),1000)` demonstrate?
    A. Callback
    B. HOF
    C. First-class function
    D. All of the above

18. Can functions be stored in object properties?
    A. Yes
    B. No
    C. Only ES6
    D. Only Python

19. Difference between `fn` and `fn()`?
    A. `fn` calls the function
    B. `fn()` passes the function
    C. `fn` is reference, `fn()` is invocation
    D. No difference

20. Can HOFs be chained?
    A. No
    B. Yes, e.g., `map().filter().reduce()`
    C. Only with arrow functions
    D. Only in Python

21. Can first-class functions be stored in Map keys?
    A. Yes
    B. No
    C. Only strings
    D. Only numbers

22. Can HOF return multiple functions?
    A. No
    B. Yes
    C. Only one
    D. Only arrays

23. `const double = n => n*2; const triple = n => n*3; const compose = (f,g) => x => f(g(x)); compose(double,triple)(2)` returns?
    A. 8
    B. 12
    C. 6
    D. 4

24. Which is NOT an HOF?
    A. `forEach`
    B. `reduce`
    C. `Math.max`
    D. `map`

25. Can first-class functions be used for closures?
    A. Yes
    B. No
    C. Only in JS
    D. Only in Python

26. Can HOF be async?
    A. Yes
    B. No
    C. Only arrow functions
    D. Only generators

27. Can functions be passed as default parameters?
    A. Yes
    B. No
    C. Only first-class functions
    D. Only HOFs

28. Why is `fn()` tricky when passed as argument?
    A. Executes immediately
    B. Passes reference
    C. Throws error
    D. None

29. Which HOF allows conditional array transformation?
    A. `filter()`
    B. `map()`
    C. `reduce()`
    D. All of the above

30. Can first-class functions be anonymous?
    A. Yes
    B. No
    C. Only in ES6
    D. Only in Python

31. Can HOFs improve code reusability?
    A. Yes
    B. No
    C. Only partially
    D. Only in React

32. Which example demonstrates HOF in Python?
    A. `def apply(func,x): return func(x)`
    B. `x=5`
    C. `print('Hi')`
    D. None

33. Can first-class functions be passed to `Promise.then()`?
    A. Yes
    B. No
    C. Only async
    D. Only generators

34. Can HOFs implement strategy pattern?
    A. Yes
    B. No
    C. Only OOP
    D. Only JS

35. Can you store first-class functions in arrays?
    A. Yes
    B. No
    C. Only Map
    D. Only Set

36. Can HOFs be used to create fluent APIs?
    A. Yes
    B. No
    C. Only React
    D. Only Python

37. What does `arr.reduce((acc,n)=>acc+n,0)` demonstrate?
    A. HOF
    B. First-class function
    C. Both
    D. None

38. Can first-class functions be curried?
    A. Yes
    B. No
    C. Only HOF
    D. Only async

39. How does first-class function support dynamic behavior?
    A. Functions can be passed or returned at runtime
    B. Variables only
    C. Only arrays
    D. Only objects

40. Can HOFs accept callback functions that return promises?
    A. Yes
    B. No
    C. Only async functions
    D. Only synchronous

41. Can first-class functions be stored in sets?
    A. Yes
    B. No
    C. Only arrays
    D. Only objects

42. Can HOFs improve modularity?
    A. Yes
    B. No
    C. Only OOP
    D. Only functional libraries

43. Which of the following is an example of HOF?
    A. `setTimeout(()=>{},1000)`
    B. `console.log()`
    C. `Math.min()`
    D. `parseInt()`

44. Can you compose multiple HOFs?
    A. Yes
    B. No
    C. Only in Python
    D. Only in JS

45. Can first-class functions be returned from other functions?
    A. Yes
    B. No
    C. Only in JS
    D. Only arrow functions

46. Can HOFs handle async/await?
    A. Yes
    B. No
    C. Only sync
    D. Only generators

47. Can first-class functions be assigned to multiple variables?
    A. Yes
    B. No
    C. Only one variable
    D. Only HOFs

48. Which HOF can combine array values into a single output?
    A. `reduce()`
    B. `map()`
    C. `filter()`
    D. `forEach()`

49. Can HOFs be used for error handling in pipelines?
    A. Yes
    B. No
    C. Only try/catch
    D. Only async functions

50. Why are first-class and higher-order functions essential for modern JS?
    A. Enable callbacks and functional programming
    B. Improve modularity and reuse
    C. Support React and middleware patterns
    D. All of the above

---

## ✅ Answer Key

1.B  2.B  3.B  4.B  5.B  6.C  7.D  8.B  9.B  10.A
11.D  12.A  13.B  14.A  15.D  16.B  17.D  18.A  19.C  20.B
21.A  22.B  23.B  24.C  25.A  26.A  27.A  28.A  29.D  30.A
31.A  32.A  33.A  34.A  35.A  36.A  37.C  38.A  39.A  40.A
41.A  42.A  43.A  44.A  45.A  46.A  47.A  48.A  49.A  50.D
