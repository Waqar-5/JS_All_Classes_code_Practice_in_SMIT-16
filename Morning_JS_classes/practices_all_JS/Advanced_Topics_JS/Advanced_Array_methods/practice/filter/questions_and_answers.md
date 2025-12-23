# JavaScript Array `filter()` — 40 Professional Questions & Answers

This document contains **40 best-in-class, professional, and interview-ready questions with answers** focused entirely on **`Array.prototype.filter()`**.

🎯 Ideal for:
- JavaScript Interviews (Beginner → Advanced)
- Exams & MCQs preparation
- Real-world project usage
- Strong conceptual understanding

---

## 1. What is `Array.prototype.filter()`?

**Answer:**  
`filter()` is a JavaScript array method that creates a **new array** containing only the elements that satisfy a **condition** provided by a callback function. It does **not modify** the original array.

---

## 2. What does `filter()` return?

**Answer:**  
`filter()` always returns a **new array**:  
- Matching elements → included  
- No match → empty array `[]`

---

## 3. Does `filter()` mutate the original array?

**Answer:**  
❌ No. It is **non-mutating**, meaning the original array remains unchanged.

---

## 4. What arguments does the `filter()` callback receive?

**Answer:**  
The callback receives **three arguments**:  
1. `element` → current item  
2. `index` → index of current item  
3. `array` → original array

---

## 5. What should the callback function return?

**Answer:**  
The callback must return a **boolean or truthy/falsy value**:  
- `true` → element is included  
- `false` → element is excluded

---

## 6. How does `filter()` decide which elements to include?

**Answer:**  
Elements are included if the callback returns a **truthy value**.  
Falsy values (`false`, `0`, `null`, `undefined`, `NaN`) exclude the element.

---

## 7. What happens if no elements satisfy the condition?

**Answer:**  
`filter()` returns an **empty array (`[]`)**, never `null` or `undefined`.

---

## 8. Is `filter()` part of functional programming?

**Answer:**  
✅ Yes. It follows functional principles:  
- No mutation  
- Pure function behavior  
- Declarative data processing

---

## 9. What is the time complexity of `filter()`?

**Answer:**  
⏱ **O(n)**, because it evaluates each element exactly once.

---

## 10. Can `filter()` stop early like `find()`?

**Answer:**  
❌ No. `filter()` always iterates through **all elements**.

---

## 11. How is `filter()` different from `map()`?

**Answer:**  
- `filter()` → selects elements  
- `map()` → transforms elements  
Both return new arrays but serve different purposes.

---

## 12. How is `filter()` different from `forEach()`?

**Answer:**  
- `filter()` returns a **new array**  
- `forEach()` returns **undefined**  
`filter()` is preferred when you need to **select data**.

---

## 13. Can `filter()` be chained with other array methods?

**Answer:**  
✅ Yes. Examples:  
- `filter().map()` → transform selected elements  
- `filter().reduce()` → aggregate after selection  
- `filter().sort()` → sort selected elements

---

## 14. What are common real-world uses of `filter()`?

**Answer:**  
- Filtering active users  
- Product/category filters  
- Search results  
- Permission-based UI rendering  
- Data cleanup and validation

---

## 15. What does this code return?

```javascript
[0, 1, false, 2].filter(Boolean);
Answer:

javascript
Copy code
[1, 2]
16. Can filter() be used directly on objects?
Answer:
❌ No. Objects must be converted first using:

Object.keys()

Object.values()

Object.entries()

17. What happens if the callback returns undefined?
Answer:
undefined is falsy, so the element is excluded.

18. Does filter() preserve the order of elements?
Answer:
✅ Yes. Original order is maintained in the new array.

19. Can filter() remove duplicate values?
Answer:
✅ Yes, using indexOf logic:

javascript
Copy code
arr.filter((value, index, array) => array.indexOf(value) === index);
20. Can filter() handle asynchronous callbacks?
Answer:
❌ No. Async filtering requires Promise.all() or async/await with loops.

21. Why is filter() preferred over loops?
Answer:

Cleaner syntax

Declarative style

Less error-prone

Readable and maintainable

22. Can filter() use multiple conditions?
Answer:
✅ Yes, using logical operators:

javascript
Copy code
arr.filter(x => x > 10 && x % 2 === 0);
23. How can filter() be used in React?
Answer:

Filtering state arrays

Creating derived state for UI

Rendering lists conditionally

24. What happens if the array contains holes ([1,,3])?
Answer:
filter() skips empty slots and only calls the callback on existing elements.

25. Can filter() be used with strings?
Answer:
✅ Not directly, but strings can be converted to arrays:

javascript
Copy code
[..."hello"].filter(c => c !== 'l'); // ['h','e','o']
26. How is filter() combined with map() in projects?
Answer:

filter() → select items

map() → transform them

javascript
Copy code
users.filter(u => u.active).map(u => u.name);
27. Can filter() be used for search functionality?
Answer:
✅ Yes:

javascript
Copy code
const results = products.filter(p => p.name.includes(searchTerm));
28. Does filter() work with nested arrays?
Answer:
✅ Yes, combined with flat() if needed:

javascript
Copy code
arr.flat().filter(x => x > 5);
29. How to filter objects by property?
Answer:

javascript
Copy code
const users = [{name:'A',active:true},{name:'B',active:false}];
const activeUsers = users.filter(u => u.active);
30. Can filter() remove null or undefined values?
Answer:
✅ Yes:

javascript
Copy code
arr.filter(x => x != null);
31. How does filter() behave with booleans?
Answer:

javascript
Copy code
[true,false,true].filter(Boolean); // [true,true]
32. Can filter() work on numbers?
Answer:
✅ Yes, numeric filtering example:

javascript
Copy code
[1,2,3,4].filter(n => n > 2); // [3,4]
33. How can filter() help in performance optimization?
Answer:

Select only relevant data

Reduce iterations

Process smaller arrays

34. Is filter() chainable with sort()?
Answer:
✅ Yes:

javascript
Copy code
arr.filter(x => x>10).sort((a,b)=>a-b);
35. How to filter unique even numbers?
Answer:

javascript
Copy code
arr.filter((v,i,a) => v%2===0 && a.indexOf(v)===i);
36. Can filter() be used with sets or maps?
Answer:
✅ Yes, convert to arrays first:

javascript
Copy code
Array.from(mySet).filter(x => x>5);
37. How to filter by string length?
Answer:

javascript
Copy code
['one','three','seven'].filter(s => s.length>3); // ['three','seven']
38. Can filter() be used with reduce?
Answer:
✅ Yes:

javascript
Copy code
arr.filter(x=>x>0).reduce((sum,x)=>sum+x,0);
39. How to filter items based on multiple properties?
Answer:

javascript
Copy code
users.filter(u => u.active && u.age>18);
40. Best practice tips for filter():
Answer:

Always return boolean or truthy/falsy

Avoid side effects in callback

Keep callback concise and readable

Combine with map or reduce for pipelines

Use in React/functional programming for immutability
