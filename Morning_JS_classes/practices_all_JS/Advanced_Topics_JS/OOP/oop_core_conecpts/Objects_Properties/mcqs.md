# JavaScript OOP - Objects & Properties MCQs

This README contains **40 professional multiple-choice questions (MCQs)** on **Objects & Properties** in JavaScript OOP. These questions are **interview-focused, exam-relevant, and tricky**.

---

## Questions

1. Which of the following is a valid way to create an object?

   * A) `const obj = {}`
   * B) `const obj = new Object()`
   * C) `function Obj() {}`
   * D) All of the above

2. How do you access the `name` property of an object `person`?

   * A) `person[name]`
   * B) `person.name`
   * C) `person->name`
   * D) `person::name`

3. What is a method in an object?

   * A) A variable
   * B) A function inside an object
   * C) A key without value
   * D) None of the above

4. How can you add a new property to an object?

   * A) `obj.newProp = value`
   * B) `obj['newProp'] = value`
   * C) `Object.defineProperty(obj, 'newProp', { value: value })`
   * D) All of the above

5. What does `delete obj.prop` do?

   * A) Sets property to null
   * B) Deletes the property from the object
   * C) Throws an error
   * D) None

6. Which notation allows using dynamic property names?

   * A) Dot notation
   * B) Bracket notation
   * C) Arrow notation
   * D) Semi-colon notation

7. How do you list all property names of an object `obj`?

   * A) `Object.values(obj)`
   * B) `Object.entries(obj)`
   * C) `Object.keys(obj)`
   * D) `Object.getOwnPropertyNames(obj)`

8. Which of the following is true about `Object.freeze()`?

   * A) Makes object immutable
   * B) Makes object properties writable
   * C) Deletes all properties
   * D) None

9. What is the output of `console.log(typeof {})`?

   * A) `object`
   * B) `array`
   * C) `function`
   * D) `undefined`

10. How do you create a nested object?

* A) By defining objects as property values
* B) Using `Object.create()`
* C) Using classes
* D) Both A and B

11. What does `Object.entries(obj)` return?

* A) Array of keys
* B) Array of values
* C) Array of [key, value] pairs
* D) Object reference

12. How do you prevent addition of new properties to an object?

* A) `Object.preventExtensions(obj)`
* B) `Object.freeze(obj)`
* C) `Object.seal(obj)`
* D) All

13. Which is a computed property?

* A) `const obj = { [propName]: value }`
* B) `const obj = { propName: value }`
* C) `obj.propName = value`
* D) `obj['propName'] = value`

14. What is the correct syntax for a getter?

* A) `get propName() {}`
* B) `getter propName() {}`
* C) `function get propName() {}`
* D) None

15. What is the correct syntax for a setter?

* A) `set propName(value) {}`
* B) `setter propName(value) {}`
* C) `function set propName(value) {}`
* D) None

16. What is true about object properties?

* A) They can be primitive or objects
* B) They can hold functions (methods)
* C) They can be read-only using descriptors
* D) All of the above

17. What is the difference between dot notation and bracket notation?

* A) Dot notation is static, bracket notation can be dynamic
* B) Bracket notation cannot access properties
* C) Dot notation allows special characters in keys
* D) No difference

18. Which object method copies properties from one object to another?

* A) `Object.copy()`
* B) `Object.assign()`
* C) `Object.create()`
* D) `Object.clone()`

19. How do you check if a property exists in an object?

* A) `'prop' in obj`
* B) `obj.hasOwnProperty('prop')`
* C) `obj.prop !== undefined`
* D) All of the above

20. What happens if you access a non-existent property?

* A) Returns `undefined`
* B) Throws an error
* C) Returns null
* D) Returns 0

21. Can object methods access object properties using `this`?

* A) Yes
* B) No
* C) Only in arrow functions
* D) Only in classes

22. What is the prototype of an object?

* A) The parent object it inherits from
* B) The constructor function
* C) The method inside object
* D) None

23. How do you copy an object shallowly?

* A) `Object.assign({}, obj)`
* B) `{...obj}` (spread operator)
* C) Both A and B
* D) `Object.copy(obj)`

24. What is true about `Object.seal()`?

* A) Prevents adding or removing properties
* B) Allows modification of existing properties
* C) Makes object fully immutable
* D) Both A and B

25. How do you define a method shorthand in an object literal?

* A) `greet: function() {}`
* B) `greet() {}`
* C) Both A and B
* D) `function greet() {}`

26. Which statement is correct about dynamic properties?

* A) Property names can be computed using expressions
* B) Property names must be hard-coded
* C) Dynamic properties are not allowed in ES6
* D) None

27. How do you iterate over object properties?

* A) `for...in` loop
* B) `Object.keys()` with `forEach`
* C) `Object.entries()` with `forEach`
* D) All of the above

28. What is the result of `Object.keys([])`?

* A) `[]`
* B) Array of indices as strings
* C) Throws error
* D) None

29. How do you make a property non-writable?

* A) `Object.defineProperty(obj, 'prop', { writable: false })`
* B) `Object.freeze(obj)`
* C) `Object.seal(obj)`
* D) All

30. Can functions be properties of objects?

* A) Yes, called methods
* B) No
* C) Only in classes
* D) Only in ES5

31. What is the difference between `Object.create()` and object literal?

* A) `Object.create()` allows setting prototype
* B) Object literal is simpler
* C) `Object.create()` can clone prototype chain
* D) All of the above

32. How do you prevent property modification?

* A) `Object.freeze(obj)`
* B) `Object.seal(obj)`
* C) `const obj`
* D) None

33. Which operator checks for property existence?

* A) `in`
* B) `hasOwnProperty`
* C) Both A and B
* D) `exists`

34. What happens if you assign a new value to a frozen property?

* A) Throws error in strict mode
* B) Silently fails in non-strict mode
* C) Changes the value
* D) Both A and B

35. Can object properties be functions?

* A) Yes, methods
* B) No
* C) Only ES6 classes
* D) Only constructor functions

36. Which is the correct way to clone an object shallowly?

* A) `Object.assign({}, obj)`
* B) `{...obj}`
* C) Both A and B
* D) `obj.clone()`

37. Can objects have properties with symbols as keys?

* A) Yes
* B) No
* C) Only strings allowed
* D) Only numbers allowed

38. How do you access a property using a variable key?

* A) `obj.varKey`
* B) `obj[varKey]`
* C) `obj::varKey`
* D) `obj->varKey`

39. What is the result of `Object.getOwnPropertyNames(obj)`?

* A) Array of all own properties including non-enumerable
* B) Only enumerable properties
* C) Only methods
* D) Undefined

40. What is the purpose of object property descriptors?

* A) Control writability, enumerability, and configurability
* B) Assign values only
* C) Create methods
* D) Delete properties

---

## Answer Key

1. D  2. B  3. B  4. D  5. B  6. B  7. C  8. A  9. A  10. D
2. C  12. A  13. A  14. A  15. A  16. D  17. A  18. B  19. D  20. A
3. A  22. A  23. C  24. D  25. C  26. A  27. D  28. B  29. A  30. A
4. D  32. A  33. C  34. D  35. A  36. C  37. A  38. B  39. A  40. A
