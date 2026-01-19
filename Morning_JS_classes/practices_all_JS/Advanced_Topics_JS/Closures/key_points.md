# JavaScript Closures - 50 Professional Questions & Answers

This file contains **50 professional and tricky questions on JavaScript closures** along with detailed answers. These are commonly asked in **interviews and exams**.

---

## Questions & Answers

1. **What is a closure in JavaScript?**

   * **Answer:** A closure is a function that remembers its **outer scope variables** even after the outer function has finished execution.

2. **Why are closures useful?**

   * **Answer:** Closures allow **data encapsulation, private variables, state persistence**, and functional programming patterns.

3. **Can closures access variables of outer functions after execution?**

   * **Answer:** Yes, closures **retain access** to the variables of their outer function.

4. **What is the output?**

```javascript
function outer(){
  let x=10;
  return function(){ console.log(x); };
}
let fn = outer();
fn();
```

* **Answer:** 10, because the inner function remembers the variable `x` in the outer scope.

5. **How can closures simulate private variables?**

   * **Answer:** By returning an inner function that accesses variables in its outer function, which are inaccessible from outside.

6. **What is the output?**

```javascript
for(var i=1;i<=3;i++){
  setTimeout(()=>console.log(i),100);
}
```

* **Answer:** 4 4 4, because `var` is function-scoped; all timeouts share the same `i` after the loop ends.

7. **How to fix the above output to print 1,2,3?**

   * **Answer:** Use an IIFE or `let` keyword.

```javascript
for(let i=1;i<=3;i++){
  setTimeout(()=>console.log(i),100);
}
```

8. **What is a practical use of closures in callbacks?**

   * **Answer:** Closures help **preserve state** and context for asynchronous operations or event handlers.

9. **What is the output?**

```javascript
function makeCounter(){
  let count=0;
  return function(){ return ++count; };
}
let c=makeCounter();
c();
c();
```

* **Answer:** 1, 2 – The closure retains `count` across calls.

10. **Are closures memory efficient?**

* **Answer:** Yes, but overuse can lead to memory retention if not properly handled.

11. **Can closures access global variables?**

* **Answer:** Yes, closures follow the **scope chain** and can access global variables.

12. **What is the output?**

```javascript
var a = 10;
(function(){
  var a=20;
  console.log(a);
})();
console.log(a);
```

* **Answer:** 20, 10 – Outer global variable is unaffected; IIFE has its own closure.

13. **How can closures help in functional programming?**

* **Answer:** By **creating functions with private state**, allowing higher-order functions and callbacks to retain context.

14. **Explain closure in loop with `var`.**

* **Answer:** Using `var` in a loop shares the same variable across iterations. Use `let` or IIFE to create separate closures.

15. **What is an IIFE and how it relates to closures?**

* **Answer:** Immediately Invoked Function Expression executes once and **creates a private scope**, forming a closure.

16. **Explain closure with function factory example.**

```javascript
function multiplyBy(x){
  return function(y){ return x*y; };
}
let double=multiplyBy(2);
double(5);
```

* **Answer:** `double` is a closure remembering `x=2`; allows creating specialized functions.

17. **Can closures modify outer function variables?**

* **Answer:** Yes, inner functions can modify outer function variables if they are not constants.

18. **What is the output?**

```javascript
function outer(){
  var x=5;
  return function(){ x++; console.log(x); };
}
let fn=outer();
fn();
fn();
```

* **Answer:** 6, 7 – Closure preserves `x` and updates it across calls.

19. **What is the difference between closure and scope?**

* **Answer:** Scope defines **where variables are accessible**; closures **preserve outer scope variables** for later use.

20. **Can closures be anonymous?**

* **Answer:** Yes, any function (named or anonymous) can form a closure if it accesses outer variables.

21. **Why are closures important in module pattern?**

* **Answer:** They allow **private data and methods**, exposing only selected functions.

22. **What is the output?**

```javascript
function outer(){
  let x=1;
  function inner(){
    let x=2;
    console.log(x);
  }
  inner();
  console.log(x);
}
outer();
```

* **Answer:** 2, 1 – Inner variable shadows outer variable but closure preserves outer scope.

23. **Explain closures with setTimeout example.**

```javascript
for(var i=0;i<3;i++){
  setTimeout(function(){ console.log(i); },100);
}
```

* **Answer:** Prints 3,3,3 – `var` shares scope; use IIFE or `let` to fix.

24. **How to preserve loop variable in closure using IIFE?**

```javascript
for(var i=0;i<3;i++){
  (function(j){ setTimeout(()=>console.log(j),100); })(i);
}
```

* **Answer:** Prints 0,1,2 – Each IIFE creates a new closure with separate variable `j`.

25. **Can closures be used for memoization?**

* **Answer:** Yes, closures can **store previous results** in a private variable.

26. **Explain closure with private counter.**

```javascript
function counter(){
  let count=0;
  return { increment:()=>++count, decrement:()=>--count };
}
```

* **Answer:** `count` is private; only accessible through increment/decrement methods.

27. **What happens if closure accesses undefined outer variable?**

* **Answer:** JavaScript throws **ReferenceError** if the variable is not declared in scope chain.

28. **Can closures be used in asynchronous callbacks?**

* **Answer:** Yes, they preserve **state across async execution**.

29. **What is the output?**

```javascript
var funcs=[];
for(var i=0;i<3;i++){
  funcs.push(function(){ console.log(i); });
}
funcs[0]();
```

* **Answer:** 3 – `var` is shared; all functions reference same `i`.

30. **How to fix above with closures?**

* **Answer:** Use `let` or IIFE:

```javascript
for(let i=0;i<3;i++){ funcs.push(()=>console.log(i)); }
```

31. **Can closures access outer function parameters?**

* **Answer:** Yes, parameters are part of outer function scope.

32. **Difference between closure and callback?**

* **Answer:** Callback is **function passed as argument**, closure is **function remembering outer scope**. A callback can form a closure.

33. **Explain closure with dynamic function creation.**

```javascript
function makeAdder(x){
  return function(y){ return x+y; };
}
```

* **Answer:** `makeAdder` returns a closure that remembers `x` allowing creation of adder functions dynamically.

34. **Can closures capture variables after outer scope is destroyed?**

* **Answer:** Yes, closures **retain references** until inner function is garbage collected.

35. **What is the output?**

```javascript
function outer(){
  let a=1;
  return ()=>console.log(a);
}
const f=outer();
f();
```

* **Answer:** 1 – Closure preserves `a`.

36. **Closures and garbage collection relation?**

* **Answer:** Variables in closures are garbage collected only if there are **no references to the closure**.

37. **Can closure access variables from multiple outer functions?**

* **Answer:** Yes, via nested closures, inner functions can access all outer scopes.

38. **Explain closure in event handler.**

```javascript
button.addEventListener('click',function(){
  console.log(counter);
});
```

* **Answer:** Handler function forms a closure over `counter`, retaining its value when event fires.

39. **Why are closures considered tricky in interviews?**

* **Answer:** They involve **scope chains, async behavior, loops, and variable shadowing**, which are often misunderstood.

40. **What is the output?**

```javascript
let x=5;
function outer(){
  let x=10;
  return function(){ console.log(x); };
}
let fn=outer();
x=20;
fn();
```

* **Answer:** 10 – Closure captures outer function `x`, not global `x`.

41. **Closures in recursion example.**

```javascript
function factorial(n){
  let cache={};
  return function f(n){
    if(n in cache) return cache[n];
    if(n<=1) return 1;
    cache[n]=n*f(n-1);
    return cache[n];
  };
}
```

* **Answer:** Closure stores cached factorial values for memoization.

42. **Can closures be used to create chainable functions?**

* **Answer:** Yes, by returning inner functions that maintain state, enabling chaining.

43. **What is output?**

```javascript
function outer(){
  let arr=[];
  for(let i=0;i<3;i++){
    arr.push(()=>console.log(i));
  }
  return arr;
}
outer()[1]();
```

* **Answer:** 1 – Each arrow function closes over separate `i` due to `let`.

44. **Can closures be nested?**

* **Answer:** Yes, nested functions form **nested closures** and can access all outer variables.

45. **Difference between closure and object private members?**

* **Answer:** Closure **creates private variables in functions**; objects can hide variables using symbols or closures.

46. **What is the output?**

```javascript
function outer(){
  var a=1;
  return function(){
    console.log(a++);
  };
}
var c=outer();
c();
c();
```

* **Answer:** 1,2 – Closure maintains `a` state.

47. **Closure with default parameters.**

```javascript
function outer(x=5){
  return function(y){ return x+y; };
}
outer()(2);
```

* **Answer:** 7 – Closure remembers default `x`.

48. **Why closures can be tricky with `var`?**

* **Answer:** `var` is function-scoped; multiple iterations share same variable, often causing unexpected outputs.

49. **Explain closure in module pattern.**

```javascript
const module=(function(){
  let privateVar=0;
  return { increment:()=>++privateVar };
})();
```

* **Answer:** `privateVar` is not accessible outside; only exposed methods interact with it via closure.

50. **Best practice to avoid closure pitfalls?**

* **Answer:** Use `let/const` for block scoping, understand scope chains, and avoid retaining unnecessary references to prevent memory leaks.

---

**These 50 questions and answers cover most tricky, interview-relevant, and exam-focused closure concepts every developer must know.**
