# JavaScript Fundamentals: Alerts, Variables, Math Expressions & Prompts

This `README.md` is a **complete guide** for beginners and intermediate learners to understand key JavaScript fundamentals. It includes **concepts, best practices, examples, MCQs, and tips** for mastering the topics and preparing for exams.

---

## Topics Covered

1. Alerts
2. Variables for Strings
3. Variables for Numbers/Text
4. Variable Names: Legal and Illegal
5. Math Expressions: Familiar Operators
6. Math Expressions Continued
7. Math Expressions: Eliminating Ambiguity
8. Concatenating Text Strings
9. Prompts

---

## 1. Alerts

`alert()` displays a **popup message** to the user.

### Examples

```javascript
alert("Hello, welcome to JavaScript!");
let username = "Ali";
alert("Hello " + username);
```

### MCQs (10 Questions)

1. Which function displays a popup message in JavaScript?

   * a) console.log()
   * b) alert()
   * c) prompt()
   * d) confirm()

2. What type of value does `alert()` return?

   * a) String
   * b) Number
   * c) Undefined
   * d) Boolean

3. Can `alert()` take variables as input?

   * a) Yes
   * b) No

4. Which is **not** a good use of `alert()`?

   * a) Warning user
   * b) Quick testing
   * c) Complex UI rendering
   * d) Notification

5. Does `alert()` block user interaction?

   * a) Yes
   * b) No

6. `alert('5' + 5)` will display?

   * a) 10
   * b) '55'
   * c) Error
   * d) Undefined

7. Can `alert()` show numbers without quotes?

   * a) Yes
   * b) No

8. `alert(3 * 2)` outputs?

   * a) '3*2'
   * b) 6
   * c) 32
   * d) NaN

9. Is `alert()` suitable for getting user input?

   * a) Yes
   * b) No

10. Which of these is correct syntax?

    * a) alert("Hello")
    * b) alert["Hello"]
    * c) alert={"Hello"}
    * d) alert"Hello"

---

## 2. Variables for Strings

### Examples

```javascript
let name = "Ali";
const country = 'Pakistan';
console.log(name, country);
```

### MCQs (10 Questions)

1. Strings must be enclosed in?

   * a) Backticks
   * b) Quotes
   * c) Braces
   * d) Parentheses

2. Which keyword declares a block-scoped variable?

   * a) var
   * b) let
   * c) const
   * d) all

3. `const` variables can be?

   * a) Reassigned
   * b) Not reassigned

4. Which is correct string declaration?

   * a) let s = "Hello";
   * b) let s = Hello;
   * c) let s = Hello";
   * d) let s = 'Hello

5. Template literals use?

   * a) Single quotes
   * b) Double quotes
   * c) Backticks

6. Can strings contain numbers?

   * a) Yes
   * b) No

7. `let str = '123';` type of str?

   * a) Number
   * b) String

8. Are variable names case-sensitive?

   * a) Yes
   * b) No

9. Can we declare multiple variables in one line?

   * a) Yes
   * b) No

10. `let name = 'Ali'; name = 'Ahmed';` is valid if declared with?

    * a) let
    * b) const

---

## 3. Variables for Numbers/Text

### Examples

```javascript
let age = 20;
let greeting = "Hello";
age = 21;
greeting = "Hi";
console.log(age, greeting);
```

### MCQs (10 Questions)

1. What type of value is 42?

   * a) String
   * b) Number

2. Can we store text in variables?

   * a) Yes
   * b) No

3. Which of these is a number?

   * a) '42'
   * b) 42

4. Dynamic typing means?

   * a) Variables can change type
   * b) Variables cannot change type

5. `let score = 10; score = 'ten';` is valid?

   * a) Yes
   * b) No

6. `const age = 25; age = 26;` is valid?

   * a) Yes
   * b) No

7. What is the type of `"123"`?

   * a) Number
   * b) String

8. Can numbers be negative?

   * a) Yes
   * b) No

9. Can a variable hold both number and text sequentially?

   * a) Yes
   * b) No

10. `let a; a = 10;` type of a initially?

    * a) Undefined
    * b) Number

---

## 4. Variable Names: Legal and Illegal

### Examples

```javascript
let firstName;
let _score;
let $amount;
// Illegal: let 2name; let my-name; let class;
```

### MCQs (10 Questions)

1. Legal variable name starts with?

   * a) Letter, _ or $
   * b) Number

2. Can a variable contain spaces?

   * a) Yes
   * b) No

3. Is `let class;` valid?

   * a) Yes
   * b) No

4. `_score` is legal?

   * a) Yes
   * b) No

5. `$amount` is legal?

   * a) Yes
   * b) No

6. Can variable name start with number?

   * a) Yes
   * b) No

7. `my-name` is legal?

   * a) Yes
   * b) No

8. Reserved keywords can be used?

   * a) Yes
   * b) No

9. `let _123` is legal?

   * a) Yes
   * b) No

10. JavaScript variable names are?

    * a) Case-sensitive
    * b) Not case-sensitive

---

## 5. Math Expressions: Familiar Operators

### Examples

```javascript
let x = 10, y = 3;
console.log(x + y, x - y, x * y, x / y, x % y, x ** y);
```

### MCQs (10 Questions)

1. `+` operator does?

   * a) Addition
   * b) Subtraction

2. `%` operator returns?

   * a) Remainder
   * b) Quotient

3. `**` is?

   * a) Division
   * b) Exponentiation

4. `10 / 3` equals?

   * a) 3
   * b) 3.333...

5. `5 % 2` equals?

   * a) 1
   * b) 2

6. Multiplication operator is?

   * a) *
   * b) x

7. `10 - 3` equals?

   * a) 7
   * b) 13

8. `2 ** 3` equals?

   * a) 6
   * b) 8

9. Operator precedence matters?

   * a) Yes
   * b) No

10. Combined assignment: `x += 5` means?

    * a) x = x + 5
    * b) x = 5

---

## 6. Math Expressions Continued

### Examples

```javascript
let score = 5; score++; score--; score += 10; score *= 2;
```

### MCQs (10 Questions)

1. `++` operator does?

   * a) Increment by 1
   * b) Decrement by 1

2. `--` operator does?

   * a) Decrement by 1
   * b) Increment by 1

3. `x += 5` is?

   * a) x = x + 5
   * b) x = 5

4. `x *= 2` means?

   * a) x = x * 2
   * b) x = 2

5. Can `score++` be used in expression?

   * a) Yes
   * b) No

6. `--score` reduces by?

   * a) 1
   * b) 2

7. `x -= 3` means?

   * a) x = x - 3
   * b) x = 3

8. Increment/decrement operators return new value?

   * a) Prefix yes, Postfix varies
   * b) No

9. `score += 0` changes value?

   * a) Yes
   * b) No

10. Can combined assignment work with strings?

    * a) Yes
    * b) No

---

## 7. Math Expressions: Eliminating Ambiguity

### Examples

```javascript
let result1 = 10 + 5 * 2; // 20
let result2 = (10 + 5) * 2; // 30
```

### MCQs (10 Questions)

1. Parentheses affect?

   * a) Order of operations
   * b) Variable type

2. BODMAS stands for?

   * a) Brackets, Order, Division, Multiplication, Addition, Subtraction
   * b) None

3. `10 + 5 * 2` equals?

   * a) 30
   * b) 20

4. `(10 + 5) * 2` equals?

   * a) 20
   * b) 30

5. Which is evaluated first?

   * a) Parentheses
   * b) Addition

6. `10 + 5 / 5` equals?

   * a) 3
   * b) 11

7. Correct use of parentheses?

   * a) (a + b) * c
   * b) a + b) * c(

8. Can multiple parentheses be nested?

   * a) Yes
   * b) No

9. `2 + 3 * 4` equals?

   * a) 20
   * b) 14

10. `2 * (3 + 4)` equals?

    * a) 14
    * b) 10

---

## 8. Concatenating Text Strings

### Examples

```javascript
let firstName = "Ali", lastName = "Khan";
let fullName = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;
```

### MCQs (10 Questions)

1. `+` operator with strings does?

   * a) Addition
   * b) Concatenation

2. Template literals use?

   * a) Backticks
   * b) Single quotes

3. `${var}` inside backticks?

   * a) Inserts variable value
   * b) Inserts string 'var'

4. `"Hello" + " World"` equals?

   * a) Hello World
   * b) HelloWorld

5. Can numbers be concatenated to strings?

   * a) Yes
   * b) No

6. `"Age: " + 20` equals?

   * a) Age:20
   * b) 20Age

7. Backticks allow multi-line strings?

   * a) Yes
   * b) No

8. `"a" + "b" + "c"` equals?

   * a) abc
   * b) a b c

9. Is concatenation left to right?

   * a) Yes
   * b) No

10. `"1" + 2 + 3` evaluates to?

    * a) 123
    * b) 6

---

## 9. Prompts

### Examples

```javascript
let userName = prompt("Enter your name:", "Guest");
alert(`Hello, ${userName}!`);
let age = Number(prompt("Enter your age:"));
alert(`Next year you will be ${age + 1}`);
```

### MCQs (10 Questions)

1. `prompt()` returns?

   * a) String
   * b) Number

2. Can `prompt()` have default value?

   * a) Yes
   * b) No

3. User input from `prompt()` can be converted to number?

   * a) Yes
   * b) No

4. `prompt("Age?")` without default returns empty string if canceled?

   * a) Yes
   * b) No

5. Can `prompt()` input be empty?

   * a) Yes
   * b) No

6. `let x = prompt("Enter")` stores value as?

   * a) String
   * b) Number

7. Can `prompt()` display variable values?

   * a) Yes
   * b) No

8. Is `prompt()` synchronous?

   * a) Yes
   * b) No

9. `Number(prompt(...))` needed for?

   * a) Math operations
   * b) String operations

10. Can template literals use `prompt()` result?

    * a) Yes
    * b) No

---

## ✅ Answer Key

1. Alerts: 1-b, 2-c, 3-a, 4-c, 5-a, 6-b, 7-a, 8-b, 9-b, 10-a
2. Strings: 1-b, 2-b, 3-b, 4-a, 5-c, 6-a, 7-b, 8-a, 9-a, 10-a
3. Numbers/Text: 1-b, 2-a, 3-b, 4-a, 5-a, 6-b, 7-b, 8-a, 9-a, 10-a
4. Variable Names: 1-a, 2-b, 3-b, 4-a, 5-a, 6-b, 7-b, 8-b, 9-a, 10-a
5. Math Operators: 1-a, 2-a, 3-b, 4-b, 5-a, 6-a, 7-a, 8-b, 9-a, 10-a
6. Math Continued: 1-a, 2-a, 3-a, 4-a, 5-a, 6-a, 7-a, 8-a, 9-b, 10-a
7. Eliminating Ambiguity: 1-a, 2-a, 3-b, 4-b, 5-a, 6-b, 7-a, 8-a, 9-b, 10-a
8. Concatenation: 1-b, 2-a, 3-a, 4-a, 5-a, 6-a, 7-a, 8-a, 9-a, 10-a
9. Prompts: 1-a, 2-a, 3-a, 4-a, 5-a, 6-a, 7-a, 8-a, 9-a, 10-a

---

*End of JavaScript Fundamentals README with 100 MCQs*
