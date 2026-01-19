# 🌐 JavaScript OOP — Prototype & Prototype Chain MCQs

This README contains **50 high-quality Multiple Choice Questions (MCQs)** focused on **Prototype & Prototype Chain in JavaScript OOP**, including **tricky and interview-focused questions**, with answers at the end.

---

## Multiple Choice Questions

1. What is a prototype in JavaScript?

   * A. A constructor function
   * B. An object from which others inherit
   * C. A variable
   * D. A function parameter

2. Every JS object has a prototype?

   * A. Yes
   * B. No

3. Which method returns an object's prototype?

   * A. `Object.getPrototypeOf(obj)`
   * B. `obj.getPrototype()`
   * C. `obj.prototype`
   * D. `Object.prototype()`

4. Which property points to the object's prototype?

   * A. `__proto__`
   * B. `prototype`
   * C. `constructor`
   * D. `__protoConstructor__`

5. Can you override a prototype method?

   * A. Yes
   * B. No

6. What is the prototype chain?

   * A. Sequence of constructors
   * B. Property lookup mechanism
   * C. Loop in objects
   * D. Array of prototypes

7. How to create an object with a specific prototype?

   * A. `Object.create(proto)`
   * B. `new Object(proto)`
   * C. `Object.prototype(proto)`
   * D. `createObject(proto)`

8. Does `instanceof` check prototype chain?

   * A. Yes
   * B. No

9. Can ES6 classes use prototypes?

   * A. Yes
   * B. No

10. What is the prototype of `Object.prototype`?

    * A. `Object`
    * B. `null`
    * C. `undefined`
    * D. `Object.prototype`

11. Can prototype methods access instance properties?

    * A. Yes
    * B. No

12. Which of these is shared across instances?

    * A. Prototype methods
    * B. Instance properties

13. Can prototypes be null?

    * A. Yes
    * B. No

14. How to override a method from prototype?

    * A. Redefine on instance
    * B. Delete prototype method
    * C. Can't override
    * D. Use `Object.freeze`

15. Which method copies a prototype?

    * A. `Object.create(proto)`
    * B. `Object.assign(proto)`
    * C. `Object.clone(proto)`
    * D. `proto.copy()`

16. Can prototype properties be enumerated?

    * A. Yes, all
    * B. No, not by default

17. Can prototype chain cause memory issues?

    * A. Yes, if long
    * B. No

18. Can functions created by arrow functions have prototypes?

    * A. No
    * B. Yes

19. Can prototype chain support multi-level inheritance?

    * A. Yes
    * B. No

20. How to call parent prototype method in child?

    * A. `Parent.prototype.method.call(this)`
    * B. `this.method()`
    * C. `super.method()` only in functions
    * D. Not possible

21. Can prototype methods be asynchronous?

    * A. Yes
    * B. No

22. Can native prototypes like `Array.prototype` be extended?

    * A. Yes
    * B. No

23. Can multiple objects share same prototype?

    * A. Yes
    * B. No

24. Can prototype chain be broken?

    * A. Yes, `Object.setPrototypeOf(obj, null)`
    * B. No

25. Can prototype properties be overridden?

    * A. Yes
    * B. No

26. Can prototype methods be chained?

    * A. Yes, return `this`
    * B. No

27. Can prototype chain affect `hasOwnProperty()`?

    * A. No
    * B. Yes

28. Can objects created with literals have prototypes?

    * A. Yes, `Object.prototype`
    * B. No

29. Can you reset an object's prototype?

    * A. Yes, `Object.setPrototypeOf`
    * B. No

30. Can prototype chain be used with closures?

    * A. Yes
    * B. No

31. Does ES6 `class` syntax hide prototypes?

    * A. No, still uses prototypes
    * B. Yes

32. Can prototype store data fields?

    * A. Yes, not recommended for primitives
    * B. No

33. Can prototype methods call other prototype methods?

    * A. Yes
    * B. No

34. Difference between `prototype` and `constructor`?

    * A. `prototype` is object for inheritance, `constructor` points to function
    * B. Same

35. Can prototype chain have cycles?

    * A. No
    * B. Yes

36. How to inspect prototype chain?

    * A. Repeated `Object.getPrototypeOf()` calls
    * B. `obj.prototype`

37. Can prototypes contain getters/setters?

    * A. Yes
    * B. No

38. Can static methods be in prototype?

    * A. No, static are on constructor
    * B. Yes

39. Can prototype methods access private fields?

    * A. No
    * B. Yes

40. What is shadowing in prototype chain?

    * A. Child defines property with same name, overrides parent
    * B. Error in JS

41. Can prototype chain support mixins?

    * A. Yes
    * B. No

42. Can prototype inheritance improve performance?

    * A. Yes, shared methods
    * B. No

43. Can you freeze prototype?

    * A. Yes, `Object.freeze()`
    * B. No

44. Can prototypes be used with ES6 modules?

    * A. Yes
    * B. No

45. Can prototype methods return values?

    * A. Yes
    * B. No

46. Can prototype chain exist in object literals?

    * A. Yes, default prototype
    * B. No

47. Can prototype chain affect `for...in` loops?

    * A. Yes, inherited enumerable properties included
    * B. No

48. Can prototypes be used for method reuse?

    * A. Yes
    * B. No

49. Can prototype chain break encapsulation?

    * A. Partially
    * B. No

50. Why is understanding prototype chain essential?

    * A. Core to JS inheritance, interview questions, memory optimization
    * B. Not essential

---

## ✅ Answer Key

1.B 2.A 3.A 4.A 5.A 6.B 7.A 8.A 9.A 10.B
11.A 12.A 13.A 14.A 15.A 16.B 17.A 18.A 19.A 20.A
21.A 22.A 23.A 24.A 25.A 26.A 27.A 28.A 29.A 30.A
31.A 32.A 33.A 34.A 35.A 36.A 37.A 38.A 39.A 40.A
41.A 42.A 43.A 44.A 45.A 46.A 47.A 48.A 49.A 50.A

---

✅ **This README is fully editable, downloadable, and perfect for interviews and exam preparation.**