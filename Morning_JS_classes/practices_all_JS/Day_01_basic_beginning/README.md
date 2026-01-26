# JavaScript Fundamentals: Alerts, Variables, Math Expressions & Prompts

This `README.md` is a **complete guide** for beginners and intermediate learners to understand key JavaScript fundamentals. It includes **concepts, best practices, examples, and tips** for mastering the topics and preparing for exams.

---

## 1. Alerts

`alert()` is a JavaScript function that displays a **popup message** to the user.

### Key Points

* Displays a simple message in a browser popup.
* Blocks user interaction until dismissed.
* Useful for **notifications, warnings, or testing code quickly**.
* Not recommended for complex UI (use DOM manipulation instead).

### Examples

```javascript
// Basic alert
alert("Hello, welcome to JavaScript!");

// Alert with dynamic text
let username = "Ali";
alert("Hello " + username + ", nice to meet you!");

// Warning example
alert("Warning: Unsaved changes!");
```

---

## 2. Variables for Strings

Variables can **store string values** in JavaScript using `let`, `const`, or `var`.

### Key Points

* Strings are text enclosed in quotes (`''` or `""`).
* `let` is block-scoped, `var` is function-scoped, `const` is constant.
* Strings can contain letters, numbers, symbols.

### Examples

```javascript
// Declaring string variables
let name = "Ali";
const country = 'Pakistan';

console.log(name);    // Output: Ali
console.log(country); // Output: Pakistan
```

---

## 3. Variables for Numbers / Text

JavaScript variables can store **numbers, strings, and other types**.

### Key Points

* Numbers: integers or decimals.
* Text (strings) must be in quotes.
* Dynamic typing: JavaScript allows changing variable type.

### Examples

```javascript
let age = 20;            // Number
let greeting = "Hello"; // String

age = 21;                // Update number
greeting = "Hi";        // Update string

console.log(age, greeting); // Output: 21 Hi
```

---

## 4. Variable Names: Legal and Illegal

### Key Points

* Legal: Can start with letters, `_` or `$`. Cannot start with numbers.
* Illegal: Cannot contain spaces, special symbols, or reserved keywords.

### Examples

```javascript
// Legal variable names
let firstName;
let _score;
let $amount;

// Illegal variable names (won't work)
// let 2name;     // Starts with number
// let my-name;   // Hyphen not allowed
// let class;     // Reserved keyword
```

---

## 5. Math Expressions: Familiar Operators

JavaScript supports **basic math operators**:

* `+` addition
* `-` subtraction
* `*` multiplication
* `/` division
* `%` modulo (remainder)
* `**` exponentiation

### Examples

```javascript
let x = 10;
let y = 3;

console.log(x + y);  // 13
console.log(x - y);  // 7
console.log(x * y);  // 30
console.log(x / y);  // 3.333...
console.log(x % y);  // 1
console.log(x ** y); // 1000
```

---

## 6. Math Expressions: Familiar Operators Continued

### Key Points

* Increment: `x++` adds 1.
* Decrement: `x--` subtracts 1.
* Combined assignment: `x += 5` (x = x + 5)

### Examples

```javascript
let score = 5;
score++;      // 6
score--;      // 5
score += 10;  // 15
score *= 2;   // 30
```

---

## 7. Math Expressions: Eliminating Ambiguity

Use **parentheses** to clarify complex expressions and control order of operations (BODMAS).

### Examples

```javascript
let result1 = 10 + 5 * 2;       // 10 + (5*2) = 20
let result2 = (10 + 5) * 2;     // (10+5)*2 = 30
console.log(result1, result2);  // Output: 20 30
```

**Exam Tip:** Always check parentheses and order of operations in expressions.

---

## 8. Concatenating Text Strings

Combine strings using `+` operator.

### Key Points

* `+` merges strings.
* Template literals (backticks ``) allow embedding variables easily.

### Examples

```javascript
let firstName = "Ali";
let lastName = "Khan";

// Using + operator
let fullName = firstName + " " + lastName;
console.log(fullName); // Ali Khan

// Using template literals
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2); // Ali Khan
```

---

## 9. Prompts

`prompt()` asks the user to **enter input** and stores it in a variable.

### Key Points

* Returns a string value.
* Can provide a default value.
* Useful for interactive programs.

### Examples

```javascript
let userName = prompt("Enter your name:", "Guest");
alert(`Hello, ${userName}!`);

// Converting prompt input to number
let age = Number(prompt("Enter your age:"));
alert(`Next year you will be ${age + 1}`);
```

**Exam Tip:** Always remember `prompt` returns **string** by default, use `Number()` for calculations.

---

## ✅ Summary Tips for Exams and Practice

1. **Always declare variables correctly**: `let`, `const`, `var`.
2. **Understand data types**: string vs number.
3. **Master math operators** and order of operations.
4. **Use alerts and prompts** to interact with users.
5. **Practice concatenation** using `+` and template literals.
6. **Know legal/illegal variable names** and avoid reserved keywords.
7. **Solve sample expressions** manually before coding.

**Pro Tip:** Write small practice programs combining all topics to gain confidence.

---

*End of JavaScript Fundamentals README*
