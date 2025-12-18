# Template Literals – Top 50 MCQs for Exams & Interviews

This document contains **50 high-quality multiple-choice questions (MCQs)** on JavaScript Template Literals, designed for **top-level exams and interviews**. The **answer key** is provided at the **end of the MCQs** to allow self-assessment.

---

## 🔹 Multiple Choice Questions (1-50)

1. What is the syntax to create a template literal?

   * A) 'string'
   * B) "string"
   * C) `string`
   * D) <string>

2. How do you embed a variable `name` in a template literal?

   * A) `${name}`
   * B) `#name#`
   * C) `{name}`
   * D) `$name`

3. Which feature allows multi-line strings without `\n`?

   * A) Normal strings
   * B) Template literals
   * C) String concatenation
   * D) Single quotes

4. What does `${}` do in template literals?

   * A) Starts a string
   * B) Embeds expressions
   * C) Comments
   * D) Terminates a string

5. Can functions be called inside template literals?

   * A) Yes
   * B) No
   * C) Only for arrow functions
   * D) Only for async functions

6. What is the output of `console.log(`Sum: ${2 + 3}`)`?

   * A) Sum: 2+3
   * B) Sum: 5
   * C) Sum: ${2+3}
   * D) Sum: undefined

7. Can template literals include objects directly?

   * A) Yes
   * B) No
   * C) Only arrays
   * D) Only strings

8. Which is true about template literals?

   * A) Cannot span multiple lines
   * B) Only for HTML generation
   * C) Allows dynamic content
   * D) Cannot use expressions

9. How do you escape backticks inside template literals?

   * A) `
   * B) `
   * C) \
   * D) ''

10. Which operator is often used inside `${}` for conditional logic?

    * A) `if`
    * B) `ternary (? :)`
    * C) `&&`
    * D) `||`

11. What is a tagged template literal?

    * A) Template inside HTML
    * B) A function that processes template literals
    * C) A normal string
    * D) Template literal with comments

12. Which of these is correct usage of tagged templates?

    * A) tag`Hello ${name}`
    * B) `tag(Hello ${name})`
    * C) 'tag ${name}'
    * D) tag('Hello ${name}')

13. Can arrays be mapped inside template literals?

    * A) Yes
    * B) No
    * C) Only objects
    * D) Only functions

14. Which method is commonly used to join array elements in template literals?

    * A) concat()
    * B) join()
    * C) push()
    * D) slice()

15. Can template literals improve code readability over concatenation?

    * A) Yes
    * B) No
    * C) Sometimes
    * D) Rarely

16. Which expression evaluates first inside `${}`?

    * A) Functions
    * B) Variables
    * C) Entire JS expression
    * D) Only strings

17. Can template literals be nested?

    * A) Yes
    * B) No
    * C) Only with variables
    * D) Only with functions

18. Which ES version introduced template literals?

    * A) ES5
    * B) ES6
    * C) ES7
    * D) ES8

19. What is the advantage of using template literals for HTML?

    * A) Dynamic generation and readability
    * B) Static strings only
    * C) Concatenation speed
    * D) None

20. Can expressions in template literals throw runtime errors?

    * A) Yes
    * B) No
    * C) Only in strict mode
    * D) Only in Node.js

21. How can template literals help in i18n (internationalization)?

    * A) Using tagged template literals for localization
    * B) By using quotes
    * C) By concatenation
    * D) By JSON only

22. Can you use template literals in JSX/React?

    * A) Yes
    * B) No
    * C) Only in React Native
    * D) Only in Angular

23. Which is the correct syntax to include a function result in template literals?

    * A) `${myFunction()}`
    * B) `myFunction()`
    * C) `#{myFunction()}`
    * D) `$(myFunction())`

24. Can template literals handle math operations inside `${}`?

    * A) Yes
    * B) No
    * C) Only addition
    * D) Only subtraction

25. What is the correct way to escape `${}` itself?

    * A) `\${}`
    * B) `\${}`
    * C) `${{}}`
    * D) Not possible

26. Can template literals include comments inside the backticks?

    * A) No
    * B) Yes
    * C) Only multi-line comments
    * D) Only single-line comments

27. Which type of quotes are used in template literals?

    * A) Single quotes
    * B) Double quotes
    * C) Backticks
    * D) None

28. Can template literals reduce syntax errors in dynamic strings?

    * A) Yes
    * B) No
    * C) Rarely
    * D) Only in Node.js

29. Can template literals store long text blocks?

    * A) Yes
    * B) No
    * C) Only small text
    * D) Only numbers

30. Can template literals be minified safely?

    * A) Yes
    * B) No
    * C) Only ES6+ browsers
    * D) Only Node.js

31. Which of the following is NOT a use-case of template literals?

    * A) Logging
    * B) Dynamic HTML
    * C) Object destructuring
    * D) Emails

32. Can template literals contain ternary, logical AND/OR operators?

    * A) Yes
    * B) No
    * C) Only ternary
    * D) Only logical operators

33. Which statement is true about String.raw and template literals?

    * A) Prevents escape sequence evaluation
    * B) Evaluates expressions
    * C) Same as template literal
    * D) Deprecated

34. Can template literals include dynamic CSS in JS?

    * A) Yes
    * B) No
    * C) Only React Native
    * D) Only Angular

35. Can template literals work with destructured objects?

    * A) Yes
    * B) No
    * C) Only arrays
    * D) Only variables

36. Are template literals evaluated at runtime or compile-time?

    * A) Runtime
    * B) Compile-time
    * C) Both
    * D) Neither

37. Can template literals be used in Node.js console logs?

    * A) Yes
    * B) No
    * C) Only with console.table
    * D) Only with string concatenation

38. How do template literals affect code readability?

    * A) Improve readability
    * B) Reduce readability
    * C) No effect
    * D) Only in React

39. Can template literals replace string concatenation in loops?

    * A) Yes
    * B) No
    * C) Sometimes
    * D) Rarely

40. Can you use template literals with async function results?

    * A) Yes (await inside `${}` in async function)
    * B) No
    * C) Only sync functions
    * D) Only promises

41. What is the common real-world usage of template literals in frameworks?

    * A) Dynamic UI rendering
    * B) Static content only
    * C) Only logs
    * D) None

42. Can template literals help in professional logging systems?

    * A) Yes, clean and formatted logs
    * B) No
    * C) Rarely
    * D) Only debug logs

43. Can template literals include nested template literals?

    * A) Yes
    * B) No
    * C) Only variables
    * D) Only functions

44. Which of these allows template literal formatting customization?

    * A) Tagged template literals
    * B) String.concat()
    * C) String.raw
    * D) eval()

45. Can template literals improve memory efficiency in large strings?

    * A) Yes, avoids concatenation overhead
    * B) No
    * C) Rarely
    * D) Only in Node.js

46. How are expressions evaluated inside template literals?

    * A) JavaScript evaluates expressions at runtime
    * B) Evaluated at compile-time
    * C) Not evaluated
    * D) Only strings evaluated

47. Which one is correct for dynamic array content in template literals?

    * A) `${array.map(x=>x).join(',')}`
    * B) `${array}`
    * C) `${array.toString}`
    * D) `${array+''}`

48. Can template literals be used to format dynamic JSON strings?

    * A) Yes
    * B) No
    * C) Only string
    * D) Only numbers

49. Can template literals improve template-based email generation?

    * A) Yes, dynamic content
    * B) No
    * C) Only for text emails
    * D) Only HTML emails

50. Why should every JS developer master template literals?

    * A) Used in almost every modern JS framework and project for dynamic strings, logging, HTML, emails, reports
    * B) Only for academic purposes
    * C) Only for logging
    * D) Optional

---

## ✅ Answer Key (1-50)

1. C
2. A
3. B
4. B
5. A
6. B
7. A
8. C
9. A
10. B
11. B
12. A
13. A
14. B
15. A
16. C
17. A
18. B
19. A
20. A
21. A
22. A
23. A
24. A
25. A
26. A
27. C
28. A
29. A
30. A
31. C
32. A
33. A
34. A
35. A
36. A
37. A
38. A
39. A
40. A
41. A
42. A
43. A
44. A
45. A
46. A
47. A
48. A
49. A
50. A
