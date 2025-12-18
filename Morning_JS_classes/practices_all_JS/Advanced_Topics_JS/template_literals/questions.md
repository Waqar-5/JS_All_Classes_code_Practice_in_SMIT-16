# Template Literals – 50 Most Asked Interview Questions & Answers

This document contains **50 essential questions** about JavaScript **Template Literals** that are frequently asked in top tech companies. Each question is answered concisely with examples and tips to help you **remember concepts forever**.

---

## 🔹 Basic Questions (1-10)

1. **What are template literals in JavaScript?**

> Template literals are strings enclosed by backticks `` ` `` that allow variable interpolation and multi-line strings.

2. **Difference between normal strings and template literals?**

> Normal strings use `''` or `""`, template literals use `` ` `` and support `${}` expressions.

3. **How to embed variables in template literals?**

```js
const name = 'Alice';
console.log(`Hello ${name}`);
```

4. **Can expressions be used inside `${}`?**

> Yes. `${}` can hold any valid JS expression, e.g., `Sum: ${a + b}`.

5. **How to create multi-line strings?**

```js
const text = `Line1
Line2`;
```

6. **Can functions be called inside template literals?**

```js
function greet(name) { return `Hello ${name}`; }
console.log(`${greet('Alice')}`);
```

7. **Difference between concatenation and template literals?**

> Template literals reduce `+` usage and improve readability.

8. **Can you use template literals for HTML?**

```js
const html = `<div>${name}</div>`;
```

9. **Are template literals evaluated at runtime?**

> Yes, expressions inside `${}` are evaluated at runtime.

10. **What is the syntax of template literals?**

> `` `string text ${expression} string text` ``

---

## 🔹 Intermediate Questions (11-30)

11. **Can template literals span multiple lines?**

> Yes, without using `\n`.

12. **What is expression interpolation?**

> Embedding variables or expressions inside `${}`.

13. **Can we do conditional logic inside `${}`?**

```js
const age = 20;
console.log(`Status: ${age >= 18 ? 'Adult' : 'Minor'}`);
```

14. **Can arrays be used inside template literals?**

> Yes, e.g., `${array.join(', ')}`.

15. **Can loops be used inside template literals?**

```js
const skills = ['JS', 'Python'];
console.log(`Skills: ${skills.map(s => s.toUpperCase()).join(', ')}`);
```

16. **What are tagged template literals?**

> Functions that process template literals before output.

17. **Example of tagged template literal:**

```js
function tag(strings, ...values){ return strings[0] + values[0].toUpperCase(); }
console.log(tag`Hello ${'world'}`);
```

18. **When are tagged template literals used?**

> Formatting, localization, sanitization.

19. **Can template literals be nested?**

```js
console.log(`Hello ${`Mr. ${'Alice'}`}`);
```

20. **Can template literals include objects?**

```js
const obj = {name:'Alice'};
console.log(`User: ${JSON.stringify(obj)}`);
```

21. **Performance vs normal strings?**

> Slight overhead due to evaluation, negligible in most cases.

22. **Why template literals are preferred in modern JS?**

> Cleaner, readable, maintainable, dynamic content.

23. **Can template literals be used for logging?**

```js
console.log(`[INFO] ${new Date()} - User logged in`);
```

24. **Can template literals handle math operations?**

```js
const a=5,b=10;
console.log(`Sum: ${a+b}`);
```

25. **Difference between template literals and string templates in other languages?**

> Syntax varies, but concept is the same: interpolation.

26. **Can template literals break code if `${}` contains errors?**

> Yes, errors in expressions will throw exceptions at runtime.

27. **Can template literals have escape sequences?**

> Yes, `
> `, `	` etc., still work.

28. **Can template literals be used in JSX/React?**

> Yes, often used to insert variables dynamically.

29. **Example of dynamic class in React:**

```jsx
const active=true;
<div className={`item ${active?'active':''}`}></div>
```

30. **Can template literals call multiple functions inside `${}`?**

```js
console.log(`Status: ${greet(name)} - Level: ${level(years)}`);
```

---

## 🔹 Advanced Questions (31-50)

31. **Difference between tagged template and normal template?**

> Tagged allows pre-processing of strings and values.

32. **Can template literals replace all string concatenations?**

> Practically yes, especially for dynamic content.

33. **Use template literals for API endpoint construction:**

```js
const id=10;
const url = `/api/users/${id}`;
```

34. **Use template literals for SQL queries (with caution):**

```js
const table='users';
const query=`SELECT * FROM ${table}`;
```

35. **Can template literals help in i18n?**

> Yes, using tagged templates for localization.

36. **How to escape backticks inside template literals?**

> Use ```

37. **Example:**

```js
console.log(`This is \`escaped\``);
```

38. **Template literals vs String.raw**

> `String.raw` prevents escape sequence evaluation.

```js
console.log(String.raw`Line1\nLine2`);
```

39. **Difference between single/double quotes vs template literals**

> Quotes are static, template literals are dynamic.

40. **Can template literals be used in Node.js for logging HTML emails?**

> Yes, very common.

41. **Can we compute dynamic CSS in template literals?**

```js
const color='red';
const style=`color:${color}; font-size:14px;`;
```

42. **Can template literals improve readability in JSON strings?**

```js
const json=`{
  "name":"Alice",
  "age":25
}`;
```

43. **Can template literals store large text blocks?**

> Yes, perfect for emails, messages, or reports.

44. **Can template literals be minified?**

> Yes, minifiers handle them correctly.

45. **Can expressions inside template literals throw errors?**

> Yes, always validate expressions.

46. **Can template literals include comments inside?**

> No, comments are outside or use `/* */` in JS.

47. **Example combining array + function + conditional:**

```js
const items=['a','b'];
console.log(`Items: ${items.map(i=>i.toUpperCase()).join(', ')} - Count: ${items.length>1?'Multiple':'Single'}`);
```

48. **Can template literals work with destructuring?**

```js
const user={name:'Alice',age:25};
const {name,age}=user;
console.log(`User: ${name}, Age: ${age}`);
```

49. **How do template literals improve debugging?**

> Clear string with evaluated values; easier to read than concatenation.

50. **Why every modern JS developer must master template literals?**

> Because all frameworks, libraries, and real-world projects heavily rely on **dynamic strings, logging, UI, HTML, emails, reports**, and template literals simplify all of this.

---

## ✅ Tips to Remember Forever

* **Backticks (`)** = string container + logic space
* **${}** = place where JS THINKS inside strings
* **Use functions & loops inside** = real-world projects
* **Tagged templates** = advanced formatting & security
* **Practice by generating logs, reports, HTML** = memory locked
* **Remember mantra:**

> "If a string needs thinking → Template Literals"
