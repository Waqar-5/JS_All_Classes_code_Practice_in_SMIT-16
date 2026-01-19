# JavaScript OOP - Objects & Properties

This README contains **50 detailed questions and answers** on **Objects & Properties in JavaScript OOP**. These are **interview-focused, tricky, and exam-relevant** questions with professional explanations.

---

## Questions & Answers

1. **What is an object in JavaScript?**

   * **Answer:** An object is a collection of key-value pairs where keys are properties and values can be data or functions. Objects are used to represent real-world entities.

2. **How do you create an object using an object literal?**

   * **Answer:** Using curly braces `{}` to define properties and methods.

   ```javascript
   const person = { name: 'Ali', age: 25, greet() { console.log(`Hello, ${this.name}`); } };
   ```

3. **What is the difference between object literals and constructor functions?**

   * **Answer:** Object literals are simple and used for single objects; constructor functions can create multiple instances with shared structure.

4. **How do you access object properties?**

   * **Answer:** Dot notation (`obj.prop`) or bracket notation (`obj['prop']`). Bracket notation allows dynamic property names.

5. **How do you add a new property to an existing object?**

   * **Answer:** `obj.newProp = value;` or `obj['newProp'] = value;`

6. **How do you modify an existing property?**

   * **Answer:** Assign a new value using dot or bracket notation: `obj.prop = newValue;`

7. **How do you delete a property from an object?**

   * **Answer:** Using the `delete` operator: `delete obj.prop;`

8. **What are methods in objects?**

   * **Answer:** Functions defined as properties of objects. Example:

   ```javascript
   const car = { start() { console.log('Car started'); } };
   ```

9. **What are computed property names?**

   * **Answer:** Using expressions to define dynamic keys.

   ```javascript
   const key = 'age';
   const person = { [key]: 25 };
   ```

10. **What are nested objects?**

    * **Answer:** Objects inside objects, useful for hierarchical data.

    ```javascript
    const person = { name: 'Ali', address: { city: 'Karachi', country: 'Pakistan' } };
    ```

11. **What is the difference between primitive and object properties?**

    * **Answer:** Primitive properties store immutable values; object properties can store references to other objects or functions.

12. **What is the difference between `Object.keys()`, `Object.values()`, and `Object.entries()`?**

    * **Answer:** `Object.keys(obj)` returns an array of property names, `Object.values(obj)` returns property values, and `Object.entries(obj)` returns `[key, value]` pairs.

13. **How can you prevent new properties from being added?**

    * **Answer:** Using `Object.preventExtensions(obj)`.

14. **How do you make an object immutable?**

    * **Answer:** Using `Object.freeze(obj)` to prevent modification or deletion of properties.

15. **What is `Object.seal()`?**

    * **Answer:** Prevents adding/removing properties but allows modification of existing properties.

16. **How do you define a property descriptor?**

    * **Answer:** Control writability, enumerability, and configurability using `Object.defineProperty()`.

    ```javascript
    Object.defineProperty(obj, 'name', { writable: false, enumerable: true, configurable: false });
    ```

17. **What is the difference between dot notation and bracket notation?**

    * **Answer:** Dot notation is static; bracket notation allows dynamic or special-character property names.

18. **How do getters and setters work?**

    * **Answer:** Control property access and assignment.

    ```javascript
    const person = {
      _name: 'Ali',
      get name() { return this._name; },
      set name(value) { this._name = value; }
    };
    ```

19. **What is the difference between own properties and inherited properties?**

    * **Answer:** Own properties exist directly on the object; inherited properties come from its prototype.

20. **What is the prototype chain?**

    * **Answer:** A series of links between objects used to resolve property and method lookups.

21. **How can object methods access properties inside the object?**

    * **Answer:** Using `this` keyword to refer to the current object instance.

22. **What happens if you access a non-existent property?**

    * **Answer:** Returns `undefined`.

23. **Can object properties hold functions?**

    * **Answer:** Yes, they are called methods.

24. **How do you check if a property exists in an object?**

    * **Answer:** Using `'prop' in obj` or `obj.hasOwnProperty('prop')`.

25. **How can you clone an object shallowly?**

    * **Answer:** Using `Object.assign({}, obj)` or spread operator `{...obj}`.

26. **What is the difference between shallow and deep copy?**

    * **Answer:** Shallow copy copies only the first level of properties; nested objects are still references. Deep copy duplicates nested structures.

27. **What are enumerable properties?**

    * **Answer:** Properties that can be iterated over using loops or `Object.keys()`.

28. **What are non-enumerable properties?**

    * **Answer:** Properties that exist on objects but are not listed in loops or `Object.keys()`.

29. **Can object properties have symbols as keys?**

    * **Answer:** Yes, `const sym = Symbol('id'); const obj = { [sym]: 123 };`

30. **What is the difference between `Object.create()` and object literal?**

    * **Answer:** `Object.create()` creates a new object with a specified prototype, while literal syntax creates a normal object.

31. **How do you iterate over object properties?**

    * **Answer:** Using `for...in` loops, `Object.keys().forEach()`, or `Object.entries().forEach()`.

32. **Can object methods be arrow functions?**

    * **Answer:** Yes, but arrow functions do not have their own `this`, they use lexical scope.

33. **How do you make a property read-only?**

    * **Answer:** Using `Object.defineProperty(obj, 'prop', { writable: false })`.

34. **Can you have dynamic property names in object literals?**

    * **Answer:** Yes, using computed property syntax `[expression]`.

35. **What happens if you assign a value to a frozen property?**

    * **Answer:** Throws error in strict mode; fails silently in non-strict mode.

36. **What is the difference between own and inherited methods?**

    * **Answer:** Own methods are defined directly on the object; inherited methods come from the prototype.

37. **How can you merge two objects?**

    * **Answer:** Using `Object.assign(target, source)` or spread operator `{...obj1, ...obj2}`.

38. **How do you prevent an object from being extended?**

    * **Answer:** Using `Object.preventExtensions(obj)`.

39. **What is a nested method call example?**

    * **Answer:**

    ```javascript
    const obj = { 
      a: 1, 
      b: { greet() { console.log('Hello'); } } 
    };
    obj.b.greet(); // Hello
    ```

40. **How do property descriptors improve object control?**

    * **Answer:** They allow you to define writability, enumerability, and configurability of properties.

41. **Can object methods return `this` for chaining?**

    * **Answer:** Yes, enabling method chaining.

    ```javascript
    obj.setName('Ali').setAge(25);
    ```

42. **What is a shallow clone using spread operator?**

    * **Answer:** Copies top-level properties, nested objects remain references.

43. **How do you define multiple properties at once?**

    * **Answer:** Using `Object.defineProperties()`.

44. **How can object properties be deleted safely?**

    * **Answer:** Using `delete obj.prop;` with error handling if needed.

45. **Can you have functions as property values dynamically?**

    * **Answer:** Yes, functions can be assigned dynamically as values.

46. **Difference between mutable and immutable properties?**

    * **Answer:** Mutable properties can change value; immutable properties cannot (e.g., frozen).

47. **How do symbols prevent property name collisions?**

    * **Answer:** Symbols are unique and not enumerable, preventing accidental overwrites.

48. **What is the advantage of using getters/setters?**

    * **Answer:** Encapsulation, controlled access, and validation for properties.

49. **Can arrays be treated as objects in JS OOP?**

    * **Answer:** Yes, arrays are objects with numeric keys and methods like `.push()`.

50. **Why are objects essential in JavaScript OOP?**

    * **Answer:** Objects allow modular, reusable, and maintainable code by encapsulating data and behavior, forming the basis of OOP.

---

> ✅ These 50 questions cover **Objects & Properties** in depth, with detailed explanations suitable for **interviews, exams, and practical coding understanding**.
