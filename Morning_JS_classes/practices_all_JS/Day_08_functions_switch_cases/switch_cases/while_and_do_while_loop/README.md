# Switch Statements: Detailed Questions and Answers

This README contains **50 detailed questions and answers** on switch statements in programming, divided into two topics:

* **Topic 1: How to Start Switch Statements (25 Q&A)**
* **Topic 2: How to Complete Switch Statements (25 Q&A)**

It is designed to help beginners and advanced learners understand switch statements, their syntax, use-cases, and nuances for exams, interviews, and practical coding.

---

## Topic 1: How to Start Switch Statements (25 Q&A)

**1. What is a switch statement?**

**Answer:** A switch statement is a control structure that allows multi-way branching. It evaluates an expression and executes code corresponding to the matching case.

**Example:**

```c
int day = 3;
switch(day) {
    case 1:
        printf("Monday");
        break;
    case 2:
        printf("Tuesday");
        break;
    case 3:
        printf("Wednesday");
        break;
    default:
        printf("Invalid day");
}
```

**2. Which keyword is used to start a switch statement?**

**Answer:** `switch` is used followed by an expression in parentheses.

**3. Can switch statements be used with strings in C?**

**Answer:** No, standard C only supports integral types (int, char). Some languages like JavaScript allow strings.

**4. How do you specify the value to compare in a switch?**

**Answer:** Inside parentheses after `switch`, e.g., `switch(variable)`.

**5. What types are valid for a switch expression in C?**

**Answer:** Integer types, char, and enums.

**6. Is it mandatory to have a default case when starting a switch?**

**Answer:** No, but it's recommended to handle unexpected values.

**7. Can the switch expression be a variable?**

**Answer:** Yes, it can be any expression that evaluates to a compatible type.

**8. What happens if the switch expression does not match any case?**

**Answer:** If there is a default case, it executes. Otherwise, control moves past the switch.

**9. How do you start a case inside a switch?**

**Answer:** Use `case value:` inside the switch block.

**10. Can a case label be a variable?**

**Answer:** No, it must be a constant value.

**11. What is the syntax of a basic switch statement?**

**Answer:**

```c
switch(expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}
```

**12. Can you start a switch without using break?**

**Answer:** Yes, but it will fall through to the next case.

**13. How many cases can a switch statement have?**

**Answer:** There is no strict limit; it depends on program design.

**14. Can you have an empty switch?**

**Answer:** Yes, though it does nothing and is generally useless.

**15. Can you nest a switch inside another switch?**

**Answer:** Yes, nested switches are allowed.

**16. How do you start a switch in JavaScript?**

**Answer:** Same syntax as C/C++:

```javascript
switch(expression) {
    case value1:
        // code
        break;
    default:
        // code
}
```

**17. Can the switch expression result from a function call?**

**Answer:** Yes, e.g., `switch(getDay()) { ... }`.

**18. Is whitespace important in starting a switch statement?**

**Answer:** No, whitespace does not affect execution.

**19. Can you start a switch with multiple expressions?**

**Answer:** No, only one expression is allowed.

**20. What is the difference between if-else and switch at start?**

**Answer:** Switch starts with a single expression evaluation and jumps to matching case; if-else evaluates multiple conditions sequentially.

**21. Can you use logical operators in switch expression?**

**Answer:** No, only expressions that evaluate to a single integral value.

**22. How to start a switch to handle enum types?**

**Answer:**

```c
enum Color { RED, GREEN, BLUE };
Color c = RED;
switch(c) {
    case RED: ...
    case GREEN: ...
    case BLUE: ...
}
```

**23. Can you start a switch with float expression?**

**Answer:** No, standard C/C++ does not allow float/double.

**24. How do you comment while starting a switch?**

**Answer:** Use `//` or `/* */` above or inside the switch block.

**25. Why is understanding switch start important?**

**Answer:** Because it defines the entry point of multi-branch logic, making code readable and efficient.

---

## Topic 2: How to Complete Switch Statements (25 Q&A)

**26. How do you end a case in a switch statement?**

**Answer:** Typically using the `break` statement to prevent fall-through.

**27. What happens if you omit break?**

**Answer:** Execution continues to the next case (fall-through).

**28. How to handle default scenario at the end?**

**Answer:** Use `default:` label at the end of switch to catch unmatched values.

**29. Can default appear in the middle?**

**Answer:** Yes, but it’s a bad practice. Usually placed last.

**30. How to exit a switch early?**

**Answer:** Use `break;`, `return;`, or `goto` (language dependent).

**31. What is fall-through?**

**Answer:** When a case executes into the next case due to missing break.

**32. Can multiple cases share the same code?**

**Answer:** Yes, by stacking case labels:

```c
case 1:
case 2:
    printf("Same code");
    break;
```

**33. How do you return a value from a switch?**

**Answer:** Inside a function, use `return` instead of break:

```c
switch(x) {
    case 1: return 10;
    case 2: return 20;
}
```

**34. Is break mandatory in all languages?**

**Answer:** No, e.g., Python’s `match` statement does not require break.

**35. How to complete a switch with multiple statements per case?**

**Answer:** Enclose statements inside the case, ending with break.

**36. Can you nest switch inside a case?**

**Answer:** Yes, you can place another switch inside a case block.

**37. What is the role of semicolons in completing cases?**

**Answer:** Regular statement syntax; break statement ends the case.

**38. Can break appear outside switch?**

**Answer:** No, break is specific to switch and loops.

**39. How to handle default at completion?**

**Answer:** Place default case at the end to handle all unmatched values.

**40. Can you use return in default case?**

**Answer:** Yes, it’s often used in functions.

**41. How to complete a switch in JavaScript?**

**Answer:** Use break or return; default is optional.

**42. Can you have empty cases at the end?**

**Answer:** Yes, it just falls through or does nothing.

**43. How to combine multiple cases to complete logic?**

**Answer:** Stack case labels before a single code block.

**44. What is the importance of completing a switch correctly?**

**Answer:** Prevents fall-through errors and ensures correct logic.

**45. Can you omit default?**

**Answer:** Yes, but it’s safer to include.

**46. How do break and return differ in completion?**

**Answer:** Break exits switch; return exits function immediately.

**47. Can a case contain a nested loop?**

**Answer:** Yes, loops are allowed inside cases.

**48. Can you complete a switch using goto?**

**Answer:** Rarely, but allowed in some languages; generally discouraged.

**49. How to document completed switch statements?**

**Answer:** Use comments above or inside each case to explain logic.

**50. Why understanding switch completion is crucial?**

**Answer:** To prevent logical errors, unexpected fall-through, and improve readability.

---

This README is **editable**, fully detailed, and covers both starting and completing switch statements for exams, interviews, and real-world coding scenarios.
