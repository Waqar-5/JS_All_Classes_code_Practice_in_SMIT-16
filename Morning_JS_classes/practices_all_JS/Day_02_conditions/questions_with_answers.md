# JavaScript Conditional Statements: Detailed 100 Q&A

This README contains **100 detailed questions and answers** covering JavaScript conditional statements and comparison operators. Each topic has **20 questions with explanations** to help you understand deeply and prepare for exams.

---

## Topics Covered

10. If Statements (20 Q&A)
11. Comparison Operators (20 Q&A)
12. if...else and else if Statements (20 Q&A)
13. Testing Sets of Conditions (20 Q&A)
14. Nested if Statements (20 Q&A)

---

## 10. If Statements (20 Questions & Answers)

1. **What is an if statement?**

   * A control statement that executes code only if a condition is true.

2. **Syntax of if statement?**

   * `if (condition) { // code }`

3. **Does the condition in if need to be boolean?**

   * Yes, JavaScript evaluates truthy/falsy values.

4. **Can an if statement exist without else?**

   * Yes.

5. **Example of simple if?**

   * `if(age >= 18){ console.log('Adult'); }`

6. **Does if execute when condition is false?**

   * No.

7. **Can if contain multiple statements?**

   * Yes, inside `{}` block.

8. **What is a common mistake?**

   * Forgetting `{}` for multiple statements.

9. **Can if statement have nested if?**

   * Yes, for hierarchical conditions.

10. **What happens with a falsy value?**

* Code inside if is skipped.

11. **Truthy example?**

* `if(1){ console.log('Yes'); }` runs.

12. **Falsy example?**

* `if(0){ console.log('No'); }` does not run.

13. **If with string?**

* Non-empty strings are truthy.

14. **If with empty string?**

* Empty string is falsy.

15. **Boolean conversion using if?**

* `if(Boolean(value)){}` converts value to boolean.

16. **Can if return a value?**

* No, but can execute code returning value.

17. **Multiple if statements in sequence?**

* Yes, all are evaluated independently.

18. **If statement without parentheses?**

* Syntax error.

19. **If condition with comparison?**

* `if(x > y){}`

20. **Best practice?**

* Always use `{}` even for single statements.

---

## 11. Comparison Operators (20 Questions & Answers)

1. **== vs === ?**

   * `==` checks value, `===` checks value and type.

2. **!= vs !== ?**

   * `!=` checks value, `!==` checks value and type.

3. **Greater than?**

   * `>`

4. **Less than?**

   * `<`

5. **Greater than or equal?**

   * `>=`

6. **Less than or equal?**

   * `<=`

7. **Example 5 == '5'?**

   * true (value equal, type ignored)

8. **Example 5 === '5'?**

   * false (type differs)

9. **10 != 5?**

   * true

10. **10 !== '10'?**

* true

11. **Comparison returns?**

* Boolean

12. **Can comparison use variables?**

* Yes, `if(x > y){}`

13. **String comparison?**

* Lexicographical order, e.g., `'a' < 'b'` true

14. **Boolean comparison?**

* `true > false` => true

15. **NaN comparison?**

* NaN is not equal to anything, even itself

16. **Infinity comparison?**

* Infinity > any finite number => true

17. **Null comparison?**

* null == undefined => true, null === undefined => false

18. **Use strict comparison?**

* Yes, prevents type coercion errors

19. **Chained comparison?**

* `x > y && x < z`

20. **Best practice?**

* Always use `===` and `!==` unless value coercion is intended

---

## 12. if...else and else if Statements (20 Questions & Answers)

1. **Purpose of if...else?**

   * Handle alternative execution

2. **Syntax of if...else?**

   * `if(condition){ } else { }`

3. **else if usage?**

   * Multiple conditions in sequence

4. **Example?**

   * `if(score >=90){ } else if(score >=75){ } else { }`

5. **Does else need condition?**

   * No, it is default

6. **Can multiple else if exist?**

   * Yes

7. **Order of conditions important?**

   * Yes, top to bottom

8. **What if no else matches?**

   * Code skipped

9. **Can else if have nested if?**

   * Yes

10. **Is else optional?**

* Yes

11. **Can we use only if and else if?**

* Yes

12. **Can multiple if...else blocks exist?**

* Yes

13. **Best practice?**

* Most specific condition first

14. **Else if with complex condition?**

* Use parentheses

15. **Else if with logical operators?**

* Yes, `else if(x>10 && y<5){}`

16. **Else if without else?**

* Allowed

17. **Nested if in else if?**

* Can be used for multi-level decisions

18. **Can else if condition repeat?**

* No, previous block executes if true

19. **Return value from if...else?**

* Use functions to return

20. **Exam tip?**

* Carefully plan order to avoid logic errors

---

## 13. Testing Sets of Conditions (20 Questions & Answers)

1. **What are logical operators?**

   * `&&`, `||`, `!`

2. **AND operator?**

   * `&&` both true

3. **OR operator?**

   * `||` at least one true

4. **NOT operator?**

   * `!` negates

5. **Example AND?**

   * `if(a>0 && b>0){}`

6. **Example OR?**

   * `if(a>0 || b>0){}`

7. **Example NOT?**

   * `if(!isValid){}`

8. **Multiple conditions?**

   * `if(a>0 && (b<10 || c==5)){}
     `

9. **Parentheses needed?**

   * Yes, for grouping

10. **Mix AND and OR?**

    * Use parentheses

11. **Short-circuit evaluation?**

    * If AND first false, second skipped

12. **OR short-circuit?**

    * If first true, second skipped

13. **Boolean conversion?**

    * All values converted to true/false

14. **Truthy value?**

    * Non-zero, non-empty

15. **Falsy value?**

    * 0, '', null, undefined, NaN

16. **Using variables in logical condition?**

    * `if(isAdult && hasID){}`

17. **Combine multiple logical operators?**

    * `if(a>0 && b<10 || c==5){}`

18. **Nested logical expressions?**

    * `if((a>0 && b<5) || (c==5 && d!=0)){}
      `

19. **Best practice?**

    * Use parentheses to clarify

20. **Exam tip?**

    * Draw truth table for complex expressions

---

## 14. Nested if Statements (20 Questions & Answers)

1. **What is nested if?**

   * An if inside another if

2. **Why use nested if?**

   * Multi-level decision making

3. **Example?**

   * `if(a>0){ if(b>0){ console.log('Both positive'); }}`

4. **Inner if executes?**

   * Only if outer if is true

5. **Outer if false?**

   * Inner if skipped

6. **Multiple nesting levels?**

   * Allowed, but keep readable

7. **Can inner if have else?**

   * Yes

8. **Can outer if have else?**

   * Yes

9. **Use braces?**

   * Always, for clarity

10. **Example with else?**

* `if(a>0){ if(b>0){ } else{ } } else{ }`

11. **Indentation important?**

* Yes, for readability

12. **Return values in nested if?**

* Use functions

13. **Logical operators inside nested if?**

* Yes

14. **Example combining logical and nested if?**

* `if(a>0){ if(b>0 && c<10){ } }`

15. **Multiple inner ifs?**

* Allowed

16. **Avoid deep nesting?**

* Refactor using functions or switch

17. **Else if inside nested if?**

* Yes

18. **Can outer condition depend on inner?**

* Outer always evaluated first

19. **Exam tip?**

* Trace values step by step

20. **Best practice?**

* Keep nesting shallow and clear

---

*End of JavaScript Conditional Statements Detailed 100 Q&A README*
