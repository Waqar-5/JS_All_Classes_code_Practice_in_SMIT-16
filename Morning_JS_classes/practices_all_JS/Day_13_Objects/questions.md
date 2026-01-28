# 📘 JavaScript Objects – 105 Interview Questions with Detailed Answers

> 🎯 **Ultimate Interview Preparation Guide**
> Covers **Beginner → Advanced → Expert** level questions with **tricky explanations**, real-world insight, and exam‑oriented clarity.

**Topics (15 Questions Each = 105 Total):**
1️⃣ Objects (Basics)
2️⃣ Object Properties
3️⃣ Object Methods
4️⃣ Object Constructors
5️⃣ Constructors for Methods
6️⃣ Prototypes
7️⃣ Checking Properties & Methods

---

## 🔹 1️⃣ Objects – Basics (Q1–Q15)

### Q1. What is an object in JavaScript?

**Answer:**
An object is a non‑primitive data type that stores data in the form of **key–value pairs**.

🔑 *Trick:* Values can be **anything** — string, number, function, array, or another object.

---

### Q2. Why are objects called reference types?

**Answer:**
Because variables store a **reference (address)** to the object, not a copy of its value.

```js
const a = { x: 1 };
const b = a;
b.x = 2; // a.x also becomes 2
```

---

### Q3. Difference between object and primitive?

**Answer:**
Primitives store values directly; objects store references and are mutable.

---

### Q4. Are arrays and functions objects?

**Answer:**
Yes. In JavaScript, **arrays and functions are special types of objects**.

---

### Q5. What does `typeof {}` return?

**Answer:**
`"object"`

🔑 *Interview Trap:* `typeof null` also returns `"object"` (bug in JS).

---

### Q6. Can objects be nested?

**Answer:**
Yes. Objects can contain other objects as values.

---

### Q7. Are objects ordered?

**Answer:**
No. Objects are conceptually unordered (though modern engines preserve insertion order).

---

### Q8. Fastest way to create an object?

**Answer:**
Object literal `{}` — minimal overhead.

---

### Q9. Can object keys be numbers?

**Answer:**
They are converted to **strings internally**.

---

### Q10. What is `Object.create(null)`?

**Answer:**
Creates an object **without a prototype** — useful for pure dictionaries.

---

### Q11. Can objects be constant?

**Answer:**
`const` prevents reassignment, not mutation.

---

### Q12. Why objects are used in real applications?

**Answer:**
They model **real‑world entities** with data and behavior.

---

### Q13. What is a plain object?

**Answer:**
An object created using `{}` or `new Object()`.

---

### Q14. Can objects hold functions?

**Answer:**
Yes — those functions are called **methods**.

---

### Q15. What is mutability?

**Answer:**
Ability to change object content after creation.

---

## 🔹 2️⃣ Object Properties (Q16–Q30)

### Q16. What is a property?

**Answer:**
A variable stored inside an object.

---

### Q17. Difference between dot and bracket notation?

**Answer:**
Bracket allows **dynamic keys**; dot does not.

---

### Q18. What happens if property doesn’t exist?

**Answer:**
Returns `undefined`.

---

### Q19. How to add a new property?

**Answer:**
`obj.key = value` or `obj[key] = value`

---

### Q20. How to delete a property?

**Answer:**
Using `delete obj.key`

---

### Q21. Are property names case‑sensitive?

**Answer:**
Yes.

---

### Q22. What are computed properties?

**Answer:**
Dynamic keys created using expressions.

```js
const key = "age";
const user = { [key]: 25 };
```

---

### Q23. What does `Object.keys()` return?

**Answer:**
An array of own enumerable property names.

---

### Q24. Difference between `Object.keys` and `for...in`?

**Answer:**
`for...in` includes prototype properties; `Object.keys` does not.

---

### Q25. What are property descriptors?

**Answer:**
They define **writable, enumerable, configurable** behavior.

---

### Q26. What is enumerable property?

**Answer:**
A property visible during iteration.

---

### Q27. How to make property read‑only?

**Answer:**
Using `Object.defineProperty()`.

---

### Q28. Can property value be undefined but still exist?

**Answer:**
Yes.

---

### Q29. Difference between missing and undefined property?

**Answer:**
Missing → not in object; undefined → exists but value undefined.

---

### Q30. Best practice for config objects?

**Answer:**
Use `Object.freeze()`.

---

## 🔹 3️⃣ Object Methods (Q31–Q45)

### Q31. What is a method?

**Answer:**
A function defined inside an object.

---

### Q32. What does `this` refer to?

**Answer:**
The object that calls the method.

---

### Q33. Why arrow functions are bad as methods?

**Answer:**
They don’t have their own `this`.

---

### Q34. How to fix lost `this`?

**Answer:**
Using `bind`, `call`, or `apply`.

---

### Q35. Difference between call and apply?

**Answer:**
Arguments: call → comma, apply → array.

---

### Q36. What does bind return?

**Answer:**
A new permanently bound function.

---

### Q37. Can methods return objects?

**Answer:**
Yes — anything.

---

### Q38. What is method shorthand?

**Answer:**
ES6 syntax: `greet() {}`

---

### Q39. Where should reusable methods go?

**Answer:**
On the prototype.

---

### Q40. Method vs function?

**Answer:**
Method belongs to object; function is standalone.

---

### Q41. Can methods modify object?

**Answer:**
Yes — using `this`.

---

### Q42. Are methods copied per object?

**Answer:**
Only if defined in constructor.

---

### Q43. Best practice for memory?

**Answer:**
Prototype methods.

---

### Q44. Can methods be async?

**Answer:**
Yes.

---

### Q45. Common bug with methods?

**Answer:**
Losing `this` reference.

---

## 🔹 4️⃣ Object Constructors (Q46–Q60)

### Q46. What is a constructor?

**Answer:**
A function used to create multiple similar objects.

---

### Q47. Why constructor names are capitalized?

**Answer:**
Convention to distinguish from regular functions.

---

### Q48. Role of `new` keyword?

**Answer:**
Creates object, binds `this`, links prototype, returns object.

---

### Q49. What happens if `new` is omitted?

**Answer:**
`this` refers to global object (or undefined in strict mode).

---

### Q50. Can constructor return value?

**Answer:**
Yes, but returning object overrides `this`.

---

### Q51. Difference between constructor and class?

**Answer:**
Class is syntactic sugar over constructor.

---

### Q52. Can constructors have methods?

**Answer:**
Yes, but better on prototype.

---

### Q53. Are constructors reusable?

**Answer:**
Yes.

---

### Q54. What links instance to prototype?

**Answer:**
`__proto__`

---

### Q55. Can constructors support inheritance?

**Answer:**
Yes — via prototype chain.

---

### Q56. Constructor vs factory function?

**Answer:**
Factory returns object explicitly; constructor uses `new`.

---

### Q57. Best use case for constructor?

**Answer:**
Many similar objects.

---

### Q58. Is constructor part of OOP?

**Answer:**
Yes.

---

### Q59. Memory issue with constructor methods?

**Answer:**
Each instance gets a copy.

---

### Q60. Modern alternative to constructors?

**Answer:**
ES6 classes.

---

## 🔹 5️⃣ Constructors for Methods (Q61–Q75)

### Q61. Why not define methods inside constructor?

**Answer:**
Memory waste due to duplication.

---

### Q62. Where should shared methods go?

**Answer:**
Prototype.

---

### Q63. How prototype saves memory?

**Answer:**
One shared copy of method.

---

### Q64. How instance accesses prototype method?

**Answer:**
Through prototype chain lookup.

---

### Q65. Can prototype methods use `this`?

**Answer:**
Yes — refers to instance.

---

### Q66. Can prototype be changed after creation?

**Answer:**
Yes.

---

### Q67. Risk of modifying prototype?

**Answer:**
Affects all instances.

---

### Q68. Prototype vs static methods?

**Answer:**
Static belongs to constructor; prototype to instance.

---

### Q69. Which is faster: own or prototype?

**Answer:**
Own property.

---

### Q70. Prototype chain stops at?

**Answer:**
`null`.

---

### Q71. Shadowing in prototype?

**Answer:**
Instance property overrides prototype.

---

### Q72. Best interview answer for reuse?

**Answer:**
Prototype methods.

---

### Q73. Is prototype inheritance classical?

**Answer:**
No — prototypal.

---

### Q74. Can arrow function be prototype method?

**Answer:**
Avoid — no `this`.

---

### Q75. Senior design preference?

**Answer:**
Composition over inheritance.

---

## 🔹 6️⃣ Prototypes (Q76–Q90)

### Q76. What is prototype?

**Answer:**
An object that provides shared properties and methods.

---

### Q77. How JS searches properties?

**Answer:**
Own → prototype → chain → null.

---

### Q78. Difference between `prototype` and `__proto__`?

**Answer:**
`prototype` is property of constructor; `__proto__` of instance.

---

### Q79. Why prototype is powerful?

**Answer:**
Memory efficiency and inheritance.

---

### Q80. What is prototype chain?

**Answer:**
Linked list of prototypes.

---

### Q81. Can objects share behavior?

**Answer:**
Yes — via prototype.

---

### Q82. Which object has no prototype?

**Answer:**
`Object.create(null)`

---

### Q83. Can prototype be overridden?

**Answer:**
Yes.

---

### Q84. Prototype lookup cost?

**Answer:**
Slightly slower than own property.

---

### Q85. Real use of prototype?

**Answer:**
Frameworks, libraries, OOP patterns.

---

### Q86. Prototype chain bug?

**Answer:**
Property shadowing.

---

### Q87. Prototype inheritance alternative?

**Answer:**
Composition.

---

### Q88. Can array methods be overridden?

**Answer:**
Yes (not recommended).

---

### Q89. Prototype exists on functions?

**Answer:**
Yes.

---

### Q90. Prototype mastery level?

**Answer:**
Advanced JavaScript.

---

## 🔹 7️⃣ Checking Properties & Methods (Q91–Q105)

### Q91. Difference between `in` and `hasOwnProperty`?

**Answer:**
`in` checks prototype; `hasOwnProperty` does not.

---

### Q92. Best way to check method exists?

**Answer:**
`typeof obj.method === "function"`

---

### Q93. What does optional chaining do?

**Answer:**
Prevents runtime errors on undefined/null.

---

### Q94. Difference between `??` and `||`?

**Answer:**
`??` ignores false/0.

---

### Q95. Safe property access?

**Answer:**
`obj?.prop`

---

### Q96. How to check own property only?

**Answer:**
`Object.hasOwn()` or `hasOwnProperty()`

---

### Q97. Can `in` detect undefined values?

**Answer:**
Yes — checks existence, not value.

---

### Q98. Which avoids crashes in deep objects?

**Answer:**
Optional chaining.

---

### Q99. Checking method before call avoids?

**Answer:**
Runtime errors.

---

### Q100. Best interview explanation style?

**Answer:**
Concept + example.

---

### Q101. How to check property safely in ES2022?

**Answer:**
`Object.hasOwn(obj, key)`

---

### Q102. Which ignores prototype?

**Answer:**
`hasOwnProperty`

---

### Q103. Checking existence vs truthy?

**Answer:**
Existence uses `in`, not boolean check.

---

### Q104. What happens if method missing?

**Answer:**
Calling causes TypeError.

---

### Q105. Key to object mastery?

**Answer:**
Understanding references + prototype chain.

---

## 🏆 Final Interview Advice

If you can **explain these 105 questions confidently**:

* You are **interview‑ready**
* You understand **real JavaScript**, not just syntax
* You think like a **senior developer**

🚀 *Revise once → dominate objects forever.*
