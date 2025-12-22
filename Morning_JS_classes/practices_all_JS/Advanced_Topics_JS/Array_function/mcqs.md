# JavaScript Arrow Functions – 30 MCQs Practice ⚡

**Sharpen your JavaScript skills with these 30 high-quality Arrow Function MCQs.**  
Designed for **interview preparation, exam practice, and deep understanding** of arrow functions.

> All questions first, answer key at the end.

---

## Table of Contents
1. [MCQs – Arrow Functions](#mcqs-arrow-functions)  
2. [Answer Key](#answer-key)  

---

## MCQs – Arrow Functions

### 1️⃣ Basic Syntax & Definitions

**Q1.** What is the correct way to write an arrow function that adds two numbers?  
A) `function add(a,b) => a+b`  
B) `const add = (a,b) => a+b`  
C) `const add = a,b => a+b`  
D) `add(a,b) => {return a+b}`

**Q2.** Which statement about arrow functions is true?  
A) Arrow functions can be used as constructors.  
B) Arrow functions have their own `this`.  
C) Arrow functions are always anonymous.  
D) Arrow functions inherit `this` from the surrounding scope.

**Q3.** What is the output of the following code?  
```javascript
const greet = () => "Hello";
console.log(greet());

A) undefined
B) "Hello"
C) greet
D) Error

Q4. Arrow functions were introduced in which version of JavaScript?
A) ES5
B) ES6
C) ES7
D) ES4

Q5. Can an arrow function be used as a constructor with new?
A) Yes
B) No

2️⃣ Parameters & Returns

Q6. Arrow function with a single parameter can omit parentheses.
A) True
B) False

Q7. Identify the correct arrow function for squaring a number:
A) const square = x => x*x;
B) const square = (x) => {x*x;}
C) const square = x => {return x*x}
D) Both A and C

Q8. What is implicit return in arrow functions?
A) Returning a value without using the return keyword.
B) Returning undefined.
C) Returning a string automatically.
D) Returning only numbers.

Q9. Which arrow function is invalid?
A) const f = () => 5;
B) const f = x => x+1;
C) const f = (a,b) => {a+b};
D) const f = () => {return 10;}

Q10. Output:

const sum = (a,b) => a+b;
console.log(sum(2,3));


A) undefined
B) 5
C) [2,3]
D) Error

3️⃣ Lexical this & Object Methods

Q11. What is true about this in arrow functions?
A) Dynamic, depends on how function is called
B) Lexically bound to surrounding scope
C) Cannot be used inside objects
D) Changes inside setTimeout

Q12. Output:

const person = {
  name: "Ali",
  greet: function() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};
person.greet();


A) undefined
B) "Ali"
C) Error
D) null

Q13. Arrow functions can be used directly as object methods to access this correctly.
A) True
B) False

Q14. Which of the following preserves this in callbacks?
A) Regular function
B) Arrow function
C) Both
D) None

Q15. Output:

function Timer(){
  this.seconds = 0;
  setInterval(() => this.seconds++, 1000);
}
const t = new Timer();


A) this.seconds increments correctly
B) this.seconds undefined
C) Error
D) Does not run

4️⃣ Arrays & Callbacks

Q16. Which doubles every element in an array?
A) arr.map(n => n*2)
B) arr.filter(n => n*2)
C) arr.reduce((acc,n) => n*2)
D) arr.forEach(n => n*2)

Q17. Arrow functions are best suited for:
A) Callbacks in array methods
B) Timers like setTimeout
C) Event listeners
D) All of the above

Q18. Output:

const nums = [1,2,3];
const sum = nums.reduce((acc,n) => acc+n, 0);
console.log(sum);


A) [1,2,3]
B) 6
C) undefined
D) Error

Q19. Which array method is commonly used with arrow functions for filtering?
A) map
B) filter
C) reduce
D) forEach

Q20. Map vs forEach – which returns a new array?
A) map
B) forEach
C) Both
D) None

5️⃣ Nested & Curried Functions

Q21. What is currying in arrow functions?
A) Using nested functions to return another function
B) Using this inside arrow functions
C) Only returning numbers
D) Using rest parameters

Q22. Output:

const multiply = a => b => a*b;
console.log(multiply(5)(2));


A) 52
B) 10
C) NaN
D) Error

Q23. Nested arrow functions are commonly used for:
A) Functional programming
B) Higher-order functions
C) Currying
D) All of the above

Q24. Example of nested arrow function:

const add = a => b => a + b;
console.log(add(2)(3));


A) 23
B) 5
C) undefined
D) Error

Q25. Arrow functions can be returned from other functions.
A) True
B) False

6️⃣ Rest Parameters

Q26. Arrow functions do not have arguments object.
A) True
B) False

Q27. Correct way to sum multiple numbers using arrow function:
A) const sumAll = (...nums) => nums.reduce((acc,n)=>acc+n,0)
B) const sumAll = (nums) => nums.reduce((acc,n)=>acc+n,0)
C) const sumAll = args => args+sum
D) const sumAll = (...args) => args*2

Q28. Rest parameters in arrow functions replace:
A) arguments object
B) this keyword
C) return keyword
D) function keyword

Q29. Output:

const f = (...args) => args.map(a => a*2);
console.log(f(1,2,3));


A) [2,4,6]
B) [1,2,3]
C) [3,4,5]
D) undefined

Q30. Arrow functions cannot be used as constructors.
A) True
B) False

Answer Key ✅
Q#	Answer
1	B
2	D
3	B
4	B
5	B
6	A
7	D
8	A
9	C
10	B
11	B
12	B
13	B
14	B
15	A
16	A
17	D
18	B
19	B
20	A
21	A
22	B
23	D
24	B
25	A
26	A
27	A
28	A
29	A
30	A

These 30 MCQs cover basic, advanced, and interview-level arrow function concepts, including:

Syntax & returns

Lexical this

Arrays & callbacks

Nested & curried functions

Rest parameters & functional programming