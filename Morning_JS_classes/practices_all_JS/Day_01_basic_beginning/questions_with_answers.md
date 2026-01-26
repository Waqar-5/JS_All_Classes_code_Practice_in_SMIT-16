# JavaScript Fundamentals: Alerts, Variables, Math Expressions & Prompts

This `README.md` is a **complete guide** for beginners and intermediate learners to understand key JavaScript fundamentals. It includes **concepts, best practices, detailed MCQs with explanations**, and tips for mastering the topics and preparing for exams.

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

### MCQs with Detailed Answers (10 Questions)

1. **Which function displays a popup message in JavaScript?**

   * a) console.log()
   * b) alert()
   * c) prompt()
   * d) confirm()

**Answer:** b) `alert()` displays a popup message.

2. **What type of value does `alert()` return?**

**Answer:** `undefined` because it only displays a message.

3. **Can `alert()` take variables as input?**

**Answer:** Yes, variables can be passed.

4. **Which is not a good use of `alert()`?**

**Answer:** Complex UI rendering.

5. **Does `alert()` block user interaction?**

**Answer:** Yes, it is modal.

6. **`alert('5' + 5)` will display?**

**Answer:** '55', number coerced to string.

7. **Can `alert()` show numbers without quotes?**

**Answer:** Yes.

8. **`alert(3 * 2)` outputs?**

**Answer:** 6.

9. **Is `alert()` suitable for getting user input?**

**Answer:** No.

10. **Correct syntax?**

**Answer:** `alert("Hello")`.

---

## 2. Variables for Strings

### Examples

```javascript
let name = "Ali";
const country = 'Pakistan';
console.log(name, country);
```

### MCQs with Detailed Answers (10 Questions)

1. Strings must be enclosed in quotes.
2. `let` declares block-scoped variable.
3. `const` cannot be reassigned.
4. Correct string declaration: `let s = "Hello";`
5. Template literals use backticks.
6. Strings can contain numbers.
7. `'123'` is a string.
8. Variable names are case-sensitive.
9. Multiple variables can be declared in one line.
10. Reassignment possible with `let`, not `const`.

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

### MCQs with Detailed Answers (10 Questions)

1. 42 is a Number.
2. Yes, text can be stored.
3. 42 (without quotes) is a Number.
4. Dynamic typing allows changing types.
5. `let score = 10; score = 'ten';` valid: Yes.
6. `const age = 25; age = 26;` valid: No.
7. `'123'` is String.
8. Numbers can be negative.
9. Variables can hold both number and text sequentially.
10. `let a; a = 10;` initially `undefined`.

---

## 4. Variable Names: Legal and Illegal

### Examples

```javascript
let firstName;
let _score;
let $amount;
// Illegal: let 2name; let my-name; let class;
```

### MCQs with Detailed Answers (10 Questions)

1. Legal variable names start with letter, _ or $.
2. Cannot contain spaces.
3. Reserved keywords are illegal.
4. `_score` legal.
5. `$amount` legal.
6. Cannot start with number.
7. `my-name` illegal.
8. Reserved keywords cannot be used.
9. `_123` legal.
10. Variable names are case-sensitive.

---

## 5. Math Expressions: Familiar Operators

### Examples

```javascript
let x = 10, y = 3;
console.log(x + y, x - y, x * y, x / y, x % y, x ** y);
```

### MCQs with Detailed Answers (10 Questions)

1. `+` addition.
2. `%` remainder.
3. `**` exponentiation.
4. `10 / 3` = 3.333...
5. `5 % 2` = 1.
6. Multiplication: *
7. `10 - 3` = 7.
8. `2 ** 3` = 8.
9. Operator precedence matters.
10. `x += 5` means `x = x + 5`.

---

## 6. Math Expressions Continued

### Examples

```javascript
let score = 5; score++; score--; score += 10; score *= 2;
```

### MCQs with Detailed Answers (10 Questions)

1. `++` increment.
2. `--` decrement.
3. `x += 5` means x = x + 5.
4. `x *= 2` means x = x * 2.
5. `score++` can be used in expressions.
6. `--score` reduces by 1.
7. `x -= 3` means x = x - 3.
8. Prefix vs Postfix affects return value.
9. `score += 0` changes value? No.
10. Combined assignment can work with strings.

---

## 7. Math Expressions: Eliminating Ambiguity

### Examples

```javascript
let result1 = 10 + 5 * 2;
let result2 = (10 + 5) * 2;
```

### MCQs with Detailed Answers (10 Questions)

1. Parentheses affect order of operations.
2. BODMAS = Brackets, Order, Division, Multiplication, Addition, Subtraction.
3. `10 + 5 * 2` = 20.
4. `(10 + 5) * 2` = 30.
5. Parentheses evaluated first.
6. `10 + 5 / 5` = 11.
7. Correct parentheses: `(a + b) * c`.
8. Nested parentheses allowed.
9. `2 + 3 * 4` = 14.
10. `2 * (3 + 4)` = 14.

---

## 8. Concatenating Text Strings

### Examples

```javascript
let firstName = "Ali", lastName = "Khan";
let fullName = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;
```

### MCQs with Detailed Answers (10 Questions)

1. `+` operator concatenates strings.
2. Template literals use backticks.
3. `${var}` inserts variable value.
4. `'Hello' + ' World'` = 'Hello World'.
5. Numbers can concatenate with strings.
6. `'Age: ' + 20` = 'Age: 20'.
7. Backticks allow multi-line strings.
8. `'a' + 'b' + 'c'` = 'abc'.
9. Concatenation is left to right.
10. `'1' + 2 + 3` = '123'.

---

## 9. Prompts

### Examples

```javascript
let userName = prompt("Enter your name:", "Guest");
alert(`Hello, ${userName}!`);
let age = Number(prompt("Enter your age:"));
alert(`Next year you will be ${age + 1}`);
```

### MCQs with Detailed Answers (10 Questions)

1. `prompt()` returns string.
2. Can have default value: Yes.
3. Can convert to number: Yes.
4. Empty string if canceled.
5. Can input be empty: Yes.
6. `let x = prompt(...)` stores string.
7. Template literals can use prompt result.
8. `prompt()` is synchronous.
9. Use `Number()` for math operations.
10. Prompt allows interaction with user.

---

*End of JavaScript Fundamentals README with 100 detailed Q&A*
