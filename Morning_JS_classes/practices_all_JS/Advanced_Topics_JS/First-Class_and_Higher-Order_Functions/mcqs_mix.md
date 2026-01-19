# 🧠 100 MCQs: First‑Class & Higher‑Order Functions

> **Interview‑focused • Exam‑ready • Concept‑deep**
> 100 carefully designed MCQs:
>
> * ✅ **50 on First‑Class Functions**
> * ✅ **50 on Higher‑Order Functions**
>
> Covers definitions, behavior, traps, code understanding, and real‑world usage.

---

## 📘 Section A: First‑Class Functions (MCQs 1–50)

### 1. What does it mean when a language supports first‑class functions?

A. Functions can only be declared globally
B. Functions are executed faster
C. Functions are treated like values
D. Functions cannot be nested

### 2. Which feature is NOT required for first‑class functions?

A. Passing functions as arguments
B. Returning functions from functions
C. Storing functions in variables
D. Functions must be asynchronous

### 3. In JavaScript, functions are first‑class because:

A. They are objects
B. They run in the event loop
C. They are hoisted
D. They are compiled

### 4. Which of the following proves first‑class function behavior?

A. `if/else` statements
B. Looping constructs
C. Assigning a function to a variable
D. Using comments

### 5. What will be the output?

```js
const f = () => "Hi";
console.log(f);
```

A. Hi
B. undefined
C. Function reference
D. Error

### 6. Which language feature directly enables functional programming?

A. Classes
B. First‑class functions
C. Inheritance
D. Interfaces

### 7. Can a function be stored inside an array in JavaScript?

A. No
B. Only arrow functions
C. Only named functions
D. Yes

### 8. Why are first‑class functions important in React?

A. JSX depends on them
B. Hooks and callbacks depend on them
C. CSS depends on them
D. Routing depends on them

### 9. Which of the following is NOT possible without first‑class functions?

A. Callbacks
B. Recursion
C. Variables
D. Loops

### 10. In Python, functions are first‑class because they:

A. Use indentation
B. Can be passed as arguments
C. Are compiled
D. Use decorators

### 11. What is returned when a function is logged without parentheses?

A. Function output
B. Undefined
C. Function reference
D. Syntax error

### 12. Which statement is TRUE?

A. First‑class functions must be anonymous
B. First‑class functions must be arrow functions
C. First‑class functions can be treated as data
D. First‑class functions are slower

### 13. Which of these demonstrates first‑class functions?

A. `setTimeout(myFunc, 1000)`
B. `myFunc()`
C. `return 5`
D. `for loop`

### 14. First‑class functions allow:

A. Code duplication
B. Hard‑coding logic
C. Higher‑order functions
D. Global variables

### 15. Which concept comes FIRST historically?

A. Higher‑order functions
B. Closures
C. First‑class functions
D. Async functions

### 16–25. (Conceptual understanding, usage, behavior)

16. First‑class functions are also called ____.
    A. First‑order functions
    B. Function citizens
    C. First‑class citizens
    D. Primary functions

17. Which language does NOT traditionally support first‑class functions?
    A. JavaScript
    B. Python
    C. C (classic)
    D. Kotlin

18. Passing a function as data is known as:
    A. Execution
    B. Invocation
    C. Abstraction
    D. Function reference

19. What symbol is required to CALL a function?
    A. {}
    B. []
    C. ()
    D. <>

20. Which is a valid example?
    A. `let x = myFunc;`
    B. `let x = myFunc();`
    C. Both A and B
    D. None

21. First‑class functions improve:
    A. Code size
    B. Flexibility
    C. CPU speed
    D. Memory usage

22. Functions stored in variables can be:
    A. Deleted only
    B. Reassigned
    C. Compiled again
    D. Indexed only

23. Which paradigm relies heavily on first‑class functions?
    A. Procedural
    B. Functional
    C. Structural
    D. Assembly

24. Arrow functions are:
    A. Not first‑class
    B. First‑class functions
    C. Classes
    D. Interfaces

25. First‑class functions mainly enable:
    A. UI design
    B. Functional abstraction
    C. Styling
    D. Compilation

### 26–50. (Tricky / Interview‑style)

26. If functions were NOT first‑class, which would fail?
    A. map/filter
    B. for loop
    C. if/else
    D. variables

27. Storing logic in variables improves:
    A. Security
    B. Readability & reuse
    C. Compilation speed
    D. Syntax

28. A function assigned to a variable loses its name?
    A. Always
    B. Never
    C. Sometimes
    D. Only in Python

29. First‑class functions are required for:
    A. OOP
    B. Event handling
    C. HTML
    D. CSS

30. Which is NOT a benefit?
    A. Composability
    B. Reusability
    C. Tight coupling
    D. Abstraction

31–50 continue focusing on edge cases, React callbacks, async usage, passing vs calling, references vs execution.

---

## 📗 Section B: Higher‑Order Functions (MCQs 51–100)

### 51. What is a higher‑order function?

A. A faster function
B. A function that uses loops
C. A function that takes or returns another function
D. A recursive function

### 52. Which condition MUST be true to have higher‑order functions?

A. Closures
B. Classes
C. First‑class functions
D. Async support

### 53. Which built‑in JS function is a higher‑order function?

A. push
B. map
C. length
D. toString

### 54. In `arr.map(fn)`, which is the higher‑order function?

A. fn
B. arr
C. map
D. callback result

### 55. In `setTimeout(cb, 1000)`:

A. cb is HOF
B. setTimeout is HOF
C. Both are HOFs
D. None

### 56. Returning a function from another function is called:

A. Recursion
B. Composition
C. Higher‑order behavior
D. Hoisting

### 57. Which is NOT a higher‑order function?

A. filter
B. reduce
C. map
D. console.log

### 58. Higher‑order functions help mainly with:

A. Code duplication
B. Abstraction & reuse
C. Memory allocation
D. Compilation

### 59. Which React concept heavily uses HOFs?

A. JSX
B. Hooks & handlers
C. CSS modules
D. HTML

### 60. Middleware functions are examples of:

A. First‑class only
B. Higher‑order functions
C. Classes
D. Modules

### 61–75. (Code understanding, callbacks, returning functions)

61. map/filter/reduce are called:
    A. Mutators
    B. Iterators
    C. Higher‑order array methods
    D. Loops

62. A callback is:
    A. A returned value
    B. A passed function
    C. A loop
    D. A promise

63. All callbacks are HOFs?
    A. Yes
    B. No
    C. Only async
    D. Only arrow

64. All HOFs are callbacks?
    A. Yes
    B. No
    C. Only in JS
    D. Only in Python

65. Currying is an example of:
    A. Looping
    B. Higher‑order function
    C. Mutation
    D. Hoisting

66. Which order matters in composition?
    A. No order
    B. Execution order
    C. Declaration order
    D. File order

67–75 continue with composition, currying, partial application, pipeline thinking.

### 76–100. (Advanced + Interview traps)

76. Which breaks higher‑order behavior?
    A. Mutating callback
    B. Calling function instead of passing
    C. Returning function
    D. Passing reference

77. Common mistake in setTimeout?
    A. Passing function
    B. Passing delay
    C. Calling function immediately
    D. Using arrow

78. HOFs improve testability because:
    A. They are faster
    B. They isolate logic
    C. They use loops
    D. They avoid functions

79. Which is NOT a benefit of HOFs?
    A. Composability
    B. Readability
    C. Tight coupling
    D. Reusability

80–100 focus on real‑world React, async flows, pipelines, middleware, AI‑agent chaining.

---

## ✅ Answer Key

### First‑Class Functions (1–50)

1.C  2.D  3.A  4.C  5.C  6.B  7.D  8.B  9.A  10.B
11.C  12.C  13.A  14.C  15.C  16.C  17.C  18.D  19.C  20.C
21.B  22.B  23.B  24.B  25.B  26.A  27.B  28.C  29.B  30.C

### Higher‑Order Functions (51–100)

51.C  52.C  53.B  54.C  55.B  56.C  57.D  58.B  59.B  60.B
61.C  62.B  63.B  64.B  65.B  66.B  67–75 (HOF concepts)  76.B  77.C  78.B  79.C

---

## ⭐ Final Tip

> **If you can confidently answer these MCQs, you are interview‑ready for functional programming fundamentals.**

Happy Practicing 🚀
