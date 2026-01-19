# JavaScript OOP - Classes & Constructor Questions & Answers

This README contains **50 detailed questions with answers** on **Classes & Constructor in JavaScript OOP**. Each question is designed to be **interview-focused, exam-relevant, and tricky**, with professional explanations.

---

## Questions & Answers

1. **What is a class in JavaScript?**

   * **Answer:** A blueprint for creating objects with shared properties and methods, introduced in ES6.

2. **What is the purpose of a constructor in a class?**

   * **Answer:** Initializes instance properties when a new object is created using `new`.

3. **Can a class have more than one constructor?**

   * **Answer:** No, JavaScript allows only one constructor per class.

4. **What happens if a constructor is omitted?**

   * **Answer:** JavaScript provides a default constructor.

5. **How do you create an instance of a class?**

   * **Answer:** Using the `new` keyword, e.g., `const obj = new ClassName();`

6. **What are class methods?**

   * **Answer:** Functions defined inside a class, shared among all instances via the prototype.

7. **What is the difference between instance and static methods?**

   * **Answer:** Instance methods work on objects; static methods belong to the class itself and cannot access instance properties.

8. **How do you define a static method?**

   * **Answer:** Use the `static` keyword inside a class.

9. **Can you access a static method using an instance?**

   * **Answer:** No, static methods are accessed via the class itself.

10. **What is the role of `super()` in classes?**

    * **Answer:** Calls the parent class constructor, required in child class constructors before using `this`.

11. **How does inheritance work with classes?**

    * **Answer:** A child class uses `extends` to inherit properties and methods from the parent class.

12. **Can class methods be arrow functions?**

    * **Answer:** Yes, but arrow functions inherit `this` lexically and are not on the prototype.

13. **What is the difference between ES5 constructor function and ES6 class?**

    * **Answer:** Classes are syntactic sugar; ES5 uses function constructors and prototype for methods.

14. **Can classes be hoisted?**

    * **Answer:** No, unlike functions, class declarations are not hoisted.

15. **How do private fields work in classes?**

    * **Answer:** Using `#`, they are only accessible within the class, not from outside.

16. **How do getters and setters use constructors?**

    * **Answer:** They allow controlled access to instance properties initialized in the constructor.

17. **What happens if `super()` is omitted in a child class constructor?**

    * **Answer:** ReferenceError occurs if you try to access `this` before calling `super()`.

18. **Can a class extend multiple classes?**

    * **Answer:** No, JavaScript supports single inheritance; mixins can simulate multiple inheritance.

19. **How do you add methods to a class prototype after definition?**

    * **Answer:** `ClassName.prototype.methodName = function() {}`; all instances gain the method.

20. **What is the difference between `this` in constructor and in class method?**

    * **Answer:** In constructor, `this` refers to the instance being created; in methods, `this` refers to the instance calling the method.

21. **Can constructors return a value?**

    * **Answer:** Yes, but if an object is returned, that becomes the instance; primitives are ignored.

22. **How are class instances different from object literals?**

    * **Answer:** Instances created with classes have shared prototype methods, object literals do not by default.

23. **How do you prevent a class from being extended?**

    * **Answer:** Use `Object.freeze()` on the class or simulate sealing.

24. **Can class fields be initialized outside constructor?**

    * **Answer:** Yes, using class field declarations, e.g., `name = 'Ali';`

25. **How do you check if an object is instance of a class?**

    * **Answer:** Using `instanceof` operator, e.g., `obj instanceof ClassName`.

26. **What is the output of `typeof` a class?**

    * **Answer:** `function`, since classes are syntactic sugar over functions.

27. **Can you create a class inside another class?**

    * **Answer:** Yes, nested classes are allowed in JavaScript.

28. **How do private fields interact with inheritance?**

    * **Answer:** Private fields are not inherited; only accessible within the declaring class.

29. **What is a class expression?**

    * **Answer:** Classes can be defined anonymously and assigned to variables, e.g., `const MyClass = class {}`.

30. **Can constructors be async?**

    * **Answer:** No, constructors cannot be async; async operations should be done in separate methods.

31. **What is method overriding in classes?**

    * **Answer:** A child class defines a method with the same name as a parent class, replacing it.

32. **Can you access parent methods without `super()`?**

    * **Answer:** No, `super.methodName()` must be used to access parent class methods.

33. **What is the difference between class declaration and class expression?**

    * **Answer:** Declaration has a name and is not hoisted; expression can be anonymous and assigned to variables.

34. **How do class fields differ from prototype properties?**

    * **Answer:** Class fields exist on each instance; prototype properties are shared across instances.

35. **What is a singleton pattern with classes?**

    * **Answer:** Ensures only one instance exists; often implemented with static properties/methods.

36. **How do you simulate private methods in a class?**

    * **Answer:** Using `#methodName` or closures inside the constructor.

37. **What happens when a class instance is modified?**

    * **Answer:** Changes affect only that instance unless prototype methods/properties are modified.

38. **Can static methods call other static methods?**

    * **Answer:** Yes, using `this.methodName()` inside static methods.

39. **What is the effect of using `new` without a constructor?**

    * **Answer:** JavaScript creates an empty object; if class exists, default constructor is called.

40. **How does `super()` behave in multi-level inheritance?**

    * **Answer:** Calls the immediate parent class constructor in the chain.

41. **Can private fields be accessed using bracket notation?**

    * **Answer:** No, only accessible via `#fieldName` inside the class.

42. **Can a class be assigned to a variable?**

    * **Answer:** Yes, class expressions allow assignment.

43. **How do you prevent properties from being modified?**

    * **Answer:** Use `Object.freeze()` on the instance.

44. **What is the use of `instanceof` with classes?**

    * **Answer:** Checks if an object is an instance of a specific class.

45. **How do classes improve code maintainability?**

    * **Answer:** Provides structured, reusable blueprints and promotes encapsulation.

46. **Can constructor throw errors?**

    * **Answer:** Yes, constructors can throw errors to prevent invalid initialization.

47. **How do you call a method from a parent class without overriding?**

    * **Answer:** Using `super.methodName()` inside child class.

48. **Can you dynamically add methods to class after declaration?**

    * **Answer:** Yes, using `ClassName.prototype.methodName = function() {}`.

49. **What is the difference between `this` in constructor and static method?**

    * **Answer:** Constructor `this` is the instance; static method `this` refers to the class.

50. **Why is understanding classes and constructors essential in JavaScript OOP?**

    * **Answer:** They enable **structured, reusable, and maintainable code**, proper inheritance, encapsulation, and are fundamental for **interviews and professional development**.

---

> ✅ These 50 questions cover **Classes & Constructor** thoroughly, with detailed answers, tricky scenarios, and professional explanations suitable for **interviews, exams, and advanced JavaScript understanding**.
