# Advanced JavaScript MCQs — Top 20 Difficult Questions

> A collection of **20 highly difficult JavaScript MCQs** covering advanced topics including execution context, closures, hoisting, TDZ, async behavior, loops, and ES6+ features. Answers are provided at the end for self-testing.

---

## MCQs

1. What will be the output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

* a) 0 1 2
* b) 3 3 3
* c) 0 1 2 3
* d) undefined

2. What will be the output?

```js
console.log(typeof null);
```

* a) 'null'
* b) 'object'
* c) 'undefined'
* d) 'function'

3. Which of the following is true about `const` and objects?

* a) Object reference can be changed
* b) Object properties can be mutated ✅
* c) Cannot add new properties
* d) Cannot delete properties

4. What happens if you declare `let` twice in the same block?

* a) Allowed
* b) Throws SyntaxError ✅
* c) var overwrites let
* d) TDZ error

5. What is the output?

```js
let a = 1;
function test() {
  console.log(a);
  let a = 2;
}
test();
```

* a) 1
* b) 2
* c) undefined
* d) ReferenceError ✅

6. Which of these statements is correct about hoisting?

* a) let/const hoisted and initialized with undefined
* b) var hoisted with undefined ✅
* c) Function expressions hoisted with body
* d) None

7. Output of this code?

```js
console.log(foo);
var foo = () => 'bar';
```

* a) 'bar'
* b) undefined ✅
* c) ReferenceError
* d) TypeError

8. Which of these creates a closure?

* a) Function returning another function ✅
* b) Function call
* c) Object literal
* d) Arrow function without return

9. What will be logged?

```js
var a = 10;
(function IIFE(){
  var a = 20;
  console.log(a);
})();
console.log(a);
```

* a) 10 20
* b) 20 10 ✅
* c) 20 20
* d) 10 10

10. What is the output?

```js
let x = 10;
let y = x++ + ++x;
console.log(y);
```

* a) 21
* b) 22 ✅
* c) 23
* d) 20

11. Which is true about `this` in arrow functions?

* a) Arrow functions have their own this
* b) Arrow functions inherit this from enclosing scope ✅
* c) this refers to global object
* d) this is always undefined

12. Output of async behavior?

```js
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

* a) Start End Timeout Promise
* b) Start End Promise Timeout ✅
* c) Promise Start End Timeout
* d) End Start Promise Timeout

13. Difference between `==` and `===`?

* a) Both same
* b) == checks value only ✅
* c) === checks value and type ✅
* d) None

14. What will this log?

```js
const obj = {a:1};
const copy = {...obj};
console.log(obj === copy);
```

* a) true
* b) false ✅
* c) TypeError
* d) undefined

15. Output of this code?

```js
console.log([...'hello']);
```

* a) ['hello']
* b) ['h','e','l','l','o'] ✅
* c) ['h','e','l','o']
* d) Error

16. Output?

```js
console.log(0.1 + 0.2 === 0.3);
```

* a) true
* b) false ✅
* c) undefined
* d) TypeError

17. Which is true for IIFE?

* a) Executes immediately ✅
* b) Needs to be called explicitly
* c) Cannot be anonymous
* d) Cannot have parameters

18. Output?

```js
let obj = {a:1, b:2};
let {a, b} = obj;
console.log(a + b);
```

* a) 12
* b) 3 ✅
* c) undefined
* d) NaN

19. Output?

```js
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

* a) "" "[object Object]" "[object Object]" ✅
* b) "" "{}" "{}"
* c) Error
* d) undefined

20. Which is true about `var` in loops?

* a) var is block scoped
* b) var is function scoped ✅
* c) var is globally scoped only
* d) var cannot be used in loops

---

# Answer Key

1. b
2. b
3. b
4. b
5. d
6. b
7. b
8. a
9. b
10. b
11. b
12. b
13. b,c
14. b
15. b
16. b
17. a
18. b
19. a
20. b



# Advanced JavaScript MCQs — Top 20 Difficult Questions

> A collection of **20 highly difficult JavaScript MCQs** covering advanced topics including execution context, closures, hoisting, TDZ, async behavior, loops, and ES6+ features. Answers are provided at the end for self-testing.

---

## MCQs

1. What will be the output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

* a) 0 1 2
* b) 3 3 3
* c) 0 1 2 3
* d) undefined

2. What will be the output?

```js
console.log(typeof null);
```

* a) 'null'
* b) 'object'
* c) 'undefined'
* d) 'function'

3. Which of the following is true about `const` and objects?

* a) Object reference can be changed
* b) Object properties can be mutated ✅
* c) Cannot add new properties
* d) Cannot delete properties

4. What happens if you declare `let` twice in the same block?

* a) Allowed
* b) Throws SyntaxError ✅
* c) var overwrites let
* d) TDZ error

5. What is the output?

```js
let a = 1;
function test() {
  console.log(a);
  let a = 2;
}
test();
```

* a) 1
* b) 2
* c) undefined
* d) ReferenceError ✅

6. Which of these statements is correct about hoisting?

* a) let/const hoisted and initialized with undefined
* b) var hoisted with undefined ✅
* c) Function expressions hoisted with body
* d) None

7. Output of this code?

```js
console.log(foo);
var foo = () => 'bar';
```

* a) 'bar'
* b) undefined ✅
* c) ReferenceError
* d) TypeError

8. Which of these creates a closure?

* a) Function returning another function ✅
* b) Function call
* c) Object literal
* d) Arrow function without return

9. What will be logged?

```js
var a = 10;
(function IIFE(){
  var a = 20;
  console.log(a);
})();
console.log(a);
```

* a) 10 20
* b) 20 10 ✅
* c) 20 20
* d) 10 10

10. What is the output?

```js
let x = 10;
let y = x++ + ++x;
console.log(y);
```

* a) 21
* b) 22 ✅
* c) 23
* d) 20

11. Which is true about `this` in arrow functions?

* a) Arrow functions have their own this
* b) Arrow functions inherit this from enclosing scope ✅
* c) this refers to global object
* d) this is always undefined

12. Output of async behavior?

```js
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

* a) Start End Timeout Promise
* b) Start End Promise Timeout ✅
* c) Promise Start End Timeout
* d) End Start Promise Timeout

13. Difference between `==` and `===`?

* a) Both same
* b) == checks value only ✅
* c) === checks value and type ✅
* d) None

14. What will this log?

```js
const obj = {a:1};
const copy = {...obj};
console.log(obj === copy);
```

* a) true
* b) false ✅
* c) TypeError
* d) undefined

15. Output of this code?

```js
console.log([...'hello']);
```

* a) ['hello']
* b) ['h','e','l','l','o'] ✅
* c) ['h','e','l','o']
* d) Error

16. Output?

```js
console.log(0.1 + 0.2 === 0.3);
```

* a) true
* b) false ✅
* c) undefined
* d) TypeError

17. Which is true for IIFE?

* a) Executes immediately ✅
* b) Needs to be called explicitly
* c) Cannot be anonymous
* d) Cannot have parameters

18. Output?

```js
let obj = {a:1, b:2};
let {a, b} = obj;
console.log(a + b);
```

* a) 12
* b) 3 ✅
* c) undefined
* d) NaN

19. Output?

```js
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

* a) "" "[object Object]" "[object Object]" ✅
* b) "" "{}" "{}"
* c) Error
* d) undefined

20. Which is true about `var` in loops?

* a) var is block scoped
* b) var is function scoped ✅
* c) var is globally scoped only
* d) var cannot be used in loops

---

# Answer Key

1. b
2. b
3. b
4. b
5. d
6. b
7. b
8. a
9. b
10. b
11. b
12. b
13. b,c
14. b
15. b
16. b
17. a
18. b
19. a
20. b
