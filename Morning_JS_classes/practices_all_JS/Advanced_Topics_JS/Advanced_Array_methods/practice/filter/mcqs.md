# 📘 JavaScript Array `filter()` — Top 50 MCQs (Complete & Professional)

This README contains **50 carefully designed MCQs** focused entirely on **`Array.prototype.filter()`**, written in a **clean, professional, and exam-ready style**.

🎯 Best for:
- JavaScript Interviews  
- University & Competitive Exams  
- Frontend / Full-Stack Developers  
- Strong conceptual + practical understanding  

📌 **Rules**
- Questions only (no answers mixed)
- **Answer Key at the END**
- Difficulty: Basic → Intermediate → Advanced → Real-World

---

## 🔹 Section A: Basics (1–15)

### 1. What does `Array.prototype.filter()` return?
A. Boolean  
B. Single value  
C. New array  
D. Original array  

---

### 2. Does `filter()` modify the original array?
A. Yes  
B. No  
C. Sometimes  
D. Only for objects  

---

### 3. Which callback return value keeps an element?
A. false  
B. null  
C. true  
D. undefined  

---

### 4. If no elements match the condition, `filter()` returns:
A. null  
B. undefined  
C. Empty array  
D. Error  

---

### 5. Which method is best for selecting elements based on a condition?
A. map()  
B. forEach()  
C. filter()  
D. reduce()  

---

### 6. `filter()` is an example of which programming style?
A. Procedural  
B. Imperative  
C. Functional  
D. Object-Oriented  

---

### 7. Which of the following is TRUE about `filter()`?
A. It mutates the array  
B. It stops after first match  
C. It returns a new array  
D. It returns an index  

---

### 8. On which data structure does `filter()` work?
A. Object  
B. Array  
C. Number  
D. String  

---

### 9. What is the main purpose of `filter()`?
A. Transform elements  
B. Select elements  
C. Aggregate values  
D. Loop elements  

---

### 10. What happens when the callback returns a truthy value?
A. Element is removed  
B. Element is kept  
C. Loop stops  
D. Error occurs  

---

### 11. Which value is treated as falsy in `filter()`?
A. "false"  
B. {}  
C. []  
D. 0  

---

### 12. `filter()` always returns:
A. Same length array  
B. Shorter array  
C. New array  
D. Boolean  

---

### 13. Which keyword is used to include elements in `filter()`?
A. break  
B. continue  
C. return  
D. yield  

---

### 14. `filter()` callback must return:
A. Number  
B. Boolean or truthy/falsy  
C. Array  
D. Object  

---

### 15. Which method is safest for immutable data handling?
A. splice()  
B. sort()  
C. filter()  
D. reverse()  

---

## 🔹 Section B: Intermediate (16–35)

### 16. Time complexity of `filter()` is:
A. O(1)  
B. O(log n)  
C. O(n)  
D. O(n²)  

---

### 17. Which parameters does `filter()` callback receive?
A. value  
B. value, index  
C. value, index, array  
D. index only  

---

### 18. What is the output?
```js
[0, 1, false, 2].filter(Boolean);
A. [0,1,false,2]
B. [1,2]
C. [true,true]
D. []

19. filter() evaluates:

A. Only first element
B. Random elements
C. Every element
D. Only last element

20. Which operator is commonly used to combine conditions?

A. +
B. =
C. &&
D. ++

21. Which is a valid filter condition?

A. return console.log(x)
B. return x > 10
C. return map(x)
D. return forEach(x)

22. Which real-world feature heavily uses filter()?

A. Animations
B. Searching
C. File uploads
D. Styling

23. If callback returns undefined, the element is:

A. Included
B. Removed
C. Converted to null
D. Throws error

24. filter() can be chained with:

A. map()
B. reduce()
C. sort()
D. All of the above

25. Which removes inactive users?

A. users.map(u => u.active)
B. users.filter(u => u.active)
C. users.reduce(u => u.active)
D. users.forEach(u => u.active)

26. filter() preserves:

A. Order of elements
B. Sorted order
C. Random order
D. Reverse order

27. What does filter() return if all conditions fail?

A. null
B. undefined
C. Empty array
D. false

28. Which method is best before map() in real projects?

A. reduce()
B. filter()
C. sort()
D. splice()

29. filter() is commonly used in dashboards for:

A. UI styling
B. Business rules
C. API creation
D. Authentication tokens

30. Which data is ideal for filter()?

A. Single value
B. Collection of items
C. Boolean flag
D. Function

31. What does filter() return type depend on?

A. Callback logic
B. Original array length
C. Browser
D. JavaScript engine

32. Which is NOT a use case of filter()?

A. Searching data
B. Validating data
C. Aggregating totals
D. Cleaning arrays

33. filter() supports short-circuiting?

A. Yes
B. No
C. Only sometimes
D. Only for objects

34. Which statement is correct?

A. filter() mutates original array
B. filter() is chainable
C. filter() returns index
D. filter() stops early

35. filter() is best described as:

A. Loop utility
B. Selection utility
C. Transformation utility
D. Aggregation utility

🔹 Section C: Advanced & Real-World (36–50)
36. Which pattern is most professional for reusable filters?

A. Hardcoded conditions
B. Nested loops
C. Dynamic filter function
D. Switch statements

37. In admin dashboards, filter() is used for:

A. Sorting
B. Searching & permissions
C. Styling
D. File handling

38. What is the output?
["Ali","Sara","Ahmed"].filter(n => n.includes("a"));


A. ["Ali"]
B. ["Sara"]
C. ["Ali","Sara","Ahmed"]
D. []

39. Which combination is most common in real projects?

A. filter + reduce
B. filter + map
C. filter + forEach
D. filter + reverse

40. filter() is ideal for:

A. Calculations
B. Data selection
C. Data mutation
D. Performance optimization

41. filter() helps maintain:

A. Mutability
B. Side effects
C. Immutability
D. Global state

42. Which use case matches filter() best?

A. Rendering UI
B. Applying business rules
C. Styling components
D. Creating variables

43. filter() is often used in:

A. Authentication logic
B. CSS rendering
C. HTML parsing
D. Browser painting

44. Which is true in React apps?

A. filter() mutates state
B. filter() is unsafe
C. filter() helps create derived state
D. filter() cannot be used

45. filter() supports which logic?

A. Single condition only
B. Multiple conditions
C. No conditions
D. Asynchronous logic only

46. filter() is preferred over loops because:

A. Faster execution
B. Cleaner & declarative code
C. Uses less memory
D. Runs asynchronously

47. Which is NOT returned by filter()?

A. Array
B. Empty array
C. Original array
D. New array

48. filter() is mainly used before:

A. forEach()
B. map()
C. splice()
D. reverse()

49. filter() is essential for:

A. Styling
B. Searching & filtering data
C. Animations
D. DOM creation

50. Best one-line definition of filter():

A. Loops through array
B. Modifies array
C. Selects elements without mutation
D. Aggregates values

✅ Answer Key
Q	Ans	Q	Ans	Q	Ans	Q	Ans
1	C	14	B	27	C	40	B
2	B	15	C	28	B	41	C
3	C	16	C	29	B	42	B
4	C	17	C	30	B	43	A
5	C	18	B	31	A	44	C
6	C	19	C	32	C	45	B
7	C	20	C	33	B	46	B
8	B	21	B	34	B	47	C
9	B	22	B	35	B	48	B
10	B	23	B	36	C	49	B
11	D	24	D	37	B	50	C
12	C	25	B	38	C		
13	C	26	A	39	B		

🎯 Remember:

filter() = Business rules + clean data + immutability