# JavaScript Closures - 50 MCQs

## Multiple Choice Questions

1. What is a closure in JavaScript?

   * a) A global variable
   * b) A function that remembers its outer scope
   * c) An event listener
   * d) None of the above

2. Which of the following is the main purpose of closures?

   * a) DOM manipulation
   * b) Keeping state and data encapsulation
   * c) Loop iteration
   * d) CSS styling

3. Can a closure access variables of its outer function after the outer function has executed?

   * a) Yes
   * b) No

4. What is the output?

```javascript
function outer() {
  let x = 10;
  return function() { console.log(x); };
}
const fn = outer();
fn();
```

* a) 0
* b) undefined
* c) 10
* d) Error

5. Which of these is a practical use of closures?

   * a) Event handlers
   * b) Data privacy
   * c) Function factories
   * d) All of the above

6. Closures are created when:

   * a) A function is invoked
   * b) A function is defined
   * c) A global variable is created
   * d) An object is initialized

7. Can closures lead to memory leaks if misused?

   * a) Yes
   * b) No

8. How can closures simulate private variables?

   * a) By returning inner functions that access outer variables
   * b) By using global variables
   * c) By using the `this` keyword
   * d) By using `var`

9. Which of the following is an example of a closure?

```javascript
function greet(msg) {
  return function(name) {
    console.log(msg + ', ' + name);
  };
}
```

* a) `greet` function
* b) Returned inner function
* c) Both a and b
* d) None

10. What is the output?

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

* a) 1 2 3
* b) 3 3 3
* c) 4 4 4
* d) Error

11. Which feature of closures allows data to persist?

* a) Outer function scope
* b) Global variables
* c) Inner function returning a value
* d) Loop iteration

12. What will be logged?

```javascript
function makeCounter() {
  let count = 0;
  return function() { return ++count; };
}
const counter = makeCounter();
counter();
counter();
```

* a) 0,1
* b) 1,2
* c) undefined, undefined
* d) Error

13. Which of these is NOT a use case of closures?

* a) Data privacy
* b) Function factories
* c) Modifying global objects directly
* d) Memoization

14. What will be the output?

```javascript
var a = 10;
(function(){
  var a = 20;
  console.log(a);
})();
console.log(a);
```

* a) 20, 20
* b) 20, 10
* c) 10, 20
* d) 10, 10

15. Which of these statements is true about closures?

* a) Closures cannot access outer function variables
* b) Closures preserve outer scope variables after execution
* c) Closures modify the global scope only
* d) Closures are only used in loops

16. What is the output?

```javascript
function outer() {
  var x = 5;
  function inner() {
    console.log(x);
  }
  return inner;
}
var fn = outer();
fn();
```

* a) undefined
* b) 5
* c) Error
* d) null

17. What is an IIFE?

* a) Immediately Invoked Function Expression
* b) Internal Indexed Function Expression
* c) Independent Inner Function Example
* d) None of the above

18. Which of the following creates a closure?

```javascript
function test(){
  let x=10;
  return function(){ console.log(x); };
}
```

* a) test()
* b) inner function returned
* c) Both a and b
* d) None

19. Can closures access global variables?

* a) Yes
* b) No

20. Why are closures considered useful in functional programming?

* a) They allow private state
* b) They allow higher-order functions
* c) They enable callbacks to retain context
* d) All of the above

21. What will be the output?

```javascript
for (var i = 1; i <= 3; i++) {
  (function(j){
    setTimeout(() => console.log(j), 100);
  })(i);
}
```

* a) 1 2 3
* b) 3 3 3
* c) 4 4 4
* d) Error

22. Which keyword ensures block-level scope useful with closures?

* a) var
* b) let
* c) function
* d) const

23. What is returned by a closure?

* a) Outer function
* b) Inner function
* c) Global variable
* d) Undefined

24. Closures help to avoid ________ variables.

* a) Local
* b) Outer
* c) Global
* d) Temporary

25. Which of these is true?

* a) Closure can access its own scope
* b) Closure can access outer function scope
* c) Closure can access global scope
* d) All of the above

26. What will the output?

```javascript
let a = 1;
function outer(){
  let a = 2;
  function inner(){
    console.log(a);
  }
  inner();
}
outer();
```

* a) 1
* b) 2
* c) undefined
* d) Error

27. Which concept is demonstrated by returning a function from a function?

* a) Inheritance
* b) Closure
* c) Event
* d) Callback

28. How can closures be used in asynchronous code?

* a) By preserving state across callback executions
* b) By accessing global scope only
* c) They cannot be used
* d) By returning a promise only

29. What is the output?

```javascript
function foo(){
  var x=1;
  setTimeout(function(){console.log(x);}, 0);
  x=2;
}
foo();
```

* a) 1
* b) 2
* c) undefined
* d) Error

30. Closures can be used to create ________ functions.

* a) Private
* b) Public
* c) Anonymous
* d) Global

31. Which function creates a closure?

```javascript
function outer(){
  let a=10;
  return function inner(){ console.log(a); };
}
```

* a) outer
* b) inner returned
* c) Both a and b
* d) None

32. How do closures help in module pattern?

* a) By providing private data
* b) By modifying global data
* c) By looping variables
* d) None

33. What is a common mistake when using closures in loops?

* a) Using var without IIFE
* b) Using let inside loop
* c) Not returning function
* d) Using arrow functions

34. Which method allows closures to preserve the state?

* a) Returning inner function
* b) Global variable
* c) setTimeout only
* d) console.log

35. Which keyword inside closure can refer to outer function variables?

* a) this
* b) var
* c) let/const
* d) All

36. Which of the following is an advantage of closures?

* a) Encapsulation
* b) State persistence
* c) Memory efficiency
* d) All of the above

37. Closures are frequently used in ________ programming.

* a) Functional
* b) Procedural
* c) Object-oriented
* d) Low-level

38. Which pattern uses closures to keep private variables?

* a) Factory pattern
* b) Module pattern
* c) Observer pattern
* d) Singleton pattern

39. What is output?

```javascript
function outer(){
  var x=5;
  return function(){ x++; console.log(x); };
}
var fn = outer();
fn();
fn();
```

* a) 5 6
* b) 6 7
* c) 5 5
* d) Error

40. Can closures access parameters of outer function?

* a) Yes
* b) No

41. Which statement is correct about closures and garbage collection?

* a) Closures never allow garbage collection
* b) Variables in closures are garbage collected if not referenced
* c) Closures always leak memory
* d) None

42. Which is an example of closure use in callbacks?

```javascript
setTimeout(function(){ console.log('Hi'); },1000);
```

* a) setTimeout function remembers context
* b) Global variable
* c) DOM manipulation
* d) CSS change

43. Closures can help in creating ________ variables.

* a) Public
* b) Private
* c) Temporary
* d) All

44. Which of these is true?

* a) Closure cannot modify outer variable
* b) Closure can modify outer variable
* c) Closure only reads outer variable
* d) None

45. What is output?

```javascript
var funcs=[];
for(let i=0;i<3;i++){
 funcs.push(function(){console.log(i);});
}
funcs[0]();
funcs[1]();
funcs[2]();
```

* a) 0 1 2
* b) 3 3 3
* c) undefined
* d) Error

46. What will the output?

```javascript
function makeAdder(x){
  return function(y){ return x+y; };
}
var add5 = makeAdder(5);
console.log(add5(2));
```

* a) 7
* b) 5
* c) 2
* d) NaN

47. Closures are created ________ in JS.

* a) At runtime
* b) At compile time
* c) Never
* d) Only with var

48. What is output?

```javascript
function counter(){
  let count=0;
  return function(){
    console.log(count++);
  };
}
let c = counter();
c();
c();
```

* a) 0 1
* b) 1 2
* c) 0 0
* d) 1 1

49. Which is true?

* a) Closures can be anonymous functions
* b) Closures can be named functions
* c) Both a and b
* d) None

50. Which feature of JS closures allows functional patterns?

* a) Access to outer scope
* b) Anonymous functions
* c) Returning functions
* d) All of the above

---

## Answer Key

1.b  2.b  3.a  4.c  5.d  6.b  7.a  8.a  9.b  10.c
11.a  12.b  13.c  14.b  15.b  16.b  17.a  18.c  19.a  20.d
21.a  22.b  23.b  24.c  25.d  26.b  27.b  28.a  29.b  30.a
31.c  32.a  33.a  34.a  35.d  36.d  37.a  38.b  39.b  40.a
41.b  42.a  43.b  44.b  45.a  46.a  47.a  48.a  49.c  50.d
