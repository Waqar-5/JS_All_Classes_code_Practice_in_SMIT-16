# JavaScript Conditional Statements: If, Comparison Operators & Nested Conditions

This `README.md` is a **complete guide** for beginners and intermediate learners to understand JavaScript **conditional statements and comparison operators**. It includes **key points, examples, and exam-focused tips** to master these topics.

---

## Topics Covered

10. If Statements
11. Comparison Operators
12. if...else and else if Statements
13. Testing Sets of Conditions
14. Nested if Statements

---

## 10. If Statements

`if` statements allow executing code **only if a certain condition is true**.

### Key Points

* Basic conditional execution.
* Condition must evaluate to true/false.
* Single statement or block can follow.
* Good for decision making in code.

### Syntax

```javascript
if (condition) {
    // code to execute if condition is true
}
```

### Examples

```javascript
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
```

**Exam Tip:** Remember parentheses `()` for condition and curly braces `{}` for code block.

---

## 11. Comparison Operators

Used to **compare values** and return a boolean (`true`/`false`).

### Key Points

* `==` : equal to (checks value only)
* `===` : strict equal to (checks value and type)
* `!=` : not equal
* `!==` : strict not equal
* `>` : greater than
* `<` : less than
* `>=` : greater than or equal
* `<=` : less than or equal

### Examples

```javascript
console.log(5 == '5');   // true
console.log(5 === '5');  // false
console.log(10 > 7);     // true
console.log(10 <= 10);   // true
```

**Exam Tip:** Prefer `===` and `!==` to avoid type coercion errors.

---

## 12. if...else and else if Statements

`if...else` allows **alternative execution** if condition is false.

### Syntax

```javascript
if (condition) {
    // code if true
} else {
    // code if false
}
```

`else if` allows **multiple conditions** to be tested in sequence.

### Examples

```javascript
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

**Exam Tip:** Always check order of `else if` conditions from most specific to least specific.

---

## 13. Testing Sets of Conditions

Use **logical operators** to combine multiple conditions.

### Key Points

* `&&` : AND (both conditions must be true)
* `||` : OR (at least one condition is true)
* `!` : NOT (negates condition)

### Examples

```javascript
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
    console.log("Entry allowed");
}

if (age < 18 || !hasID) {
    console.log("Entry denied");
}
```

**Exam Tip:** Use parentheses to group conditions and avoid ambiguity.

---

## 14. Nested if Statements

`if` statements can be **inside another if** to check multiple levels of conditions.

### Key Points

* Inner if executes only if outer if is true.
* Useful for hierarchical decision making.
* Avoid excessive nesting for readability.

### Examples

```javascript
let age = 20;
let hasID = true;
if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Too young to enter");
}
```

**Exam Tip:** Always properly indent nested blocks and use comments for clarity.

---

## ✅ Summary Tips for Exams

1. **If statements:** Use for simple conditions.
2. **Comparison operators:** Prefer strict (`===`) checks.
3. **if...else / else if:** Handles alternative paths and multiple conditions.
4. **Logical operators:** Combine multiple conditions clearly.
5. **Nested if:** Use carefully to avoid complexity.
6. **Practice coding small programs** combining all types for mastery.

*End of JavaScript Conditional Statements README*
