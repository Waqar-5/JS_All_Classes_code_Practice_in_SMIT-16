# 🌀 JavaScript OOP — Polymorphism (Method Overriding) MCQs

This README contains **50 high-quality Multiple Choice Questions (MCQs)** focused **only on Polymorphism (Method Overriding) in JavaScript OOP**, including **tricky and interview-focused questions**.

---

## Multiple Choice Questions

1. What is polymorphism in JavaScript?

   * A. Objects having multiple forms
   * B. Declaring multiple variables
   * C. Using multiple loops
   * D. Assigning multiple values

2. What is method overriding?

   * A. Defining multiple methods with same name in class
   * B. Redefining parent method in subclass
   * C. Using multiple constructors
   * D. Reassigning object properties

3. Which keyword is used to call the parent class method?

   * A. this
   * B. super
   * C. parent
   * D. prototype

4. Can private methods be overridden?

   * A. Yes
   * B. No

5. What is runtime polymorphism?

   * A. Method determined at compile-time
   * B. Method determined at runtime
   * C. Variable determined at compile-time
   * D. Variable determined at runtime

6. Can static methods be overridden?

   * A. Yes
   * B. No

7. What happens if `super()` is not called in a subclass constructor?

   * A. Code works fine
   * B. ReferenceError
   * C. TypeError
   * D. Warning only

8. Can you override multiple methods at once?

   * A. Yes
   * B. No

9. Is method overloading supported in JS?

   * A. Yes
   * B. No

10. How can overloading be simulated?

    * A. Using default parameters
    * B. Using closures
    * C. Using multiple classes
    * D. Using eval

11. Can polymorphism exist without inheritance?

    * A. Yes, via duck typing
    * B. No

12. What is dynamic dispatch?

    * A. Compiler choosing method
    * B. Runtime choosing method
    * C. Developer choosing method
    * D. Browser choosing method

13. Can constructors be overridden?

    * A. Yes, directly
    * B. Subclass defines its own constructor
    * C. Only in abstract classes
    * D. No

14. Can getters and setters be overridden?

    * A. Yes
    * B. No

15. Can private static methods be overridden?

    * A. Yes
    * B. No

16. What is the output?

```js
class A { greet() { return 'Hi'; } }
class B extends A { greet() { return 'Hello'; } }
console.log(new B().greet());
```

* A. Hi
* B. Hello
* C. undefined
* D. Error

17. Can a subclass call multiple parent methods?

* A. Yes
* B. No

18. What is the difference between overriding and shadowing?

* A. Overriding replaces method
* B. Shadowing hides property
* C. Both A & B
* D. None

19. Can polymorphism simplify event handling?

* A. Yes
* B. No

20. Can overridden methods have different return types?

* A. Yes, JS is loosely typed
* B. No

21. Does JS support multiple inheritance directly?

* A. Yes
* B. No

22. How is prototype chain used in polymorphism?

* A. Determines method execution order
* B. Determines variable value
* C. Determines object type
* D. Not used

23. Can polymorphism improve maintainability?

* A. Yes
* B. No

24. Can overridden methods call the parent method?

* A. Yes, using `super`
* B. No

25. What is the main benefit of polymorphism?

* A. Code reusability
* B. Less typing
* C. Smaller files
* D. Browser optimization

26. Can async methods be overridden?

* A. Yes
* B. No

27. What happens if parent method is not found?

* A. JS looks up prototype chain
* B. Throws error
* C. Returns undefined
* D. Nothing

28. Can overridden method access private fields?

* A. Yes
* B. No

29. Can you override methods in multi-level inheritance?

* A. Yes
* B. No

30. Can polymorphism be applied to arrays of objects?

* A. Yes
* B. No

31. Can polymorphism break encapsulation?

* A. Yes, if misused
* B. No

32. Can interfaces in TypeScript enforce polymorphism?

* A. Yes
* B. No

33. Can parent method be called before subclass code?

* A. Yes
* B. No

34. Can overridden method throw a different exception?

* A. Yes
* B. No

35. Can you override methods created in constructor?

* A. No
* B. Yes

36. Are overridden methods visible on prototype?

* A. Yes
* B. No

37. Can overridden methods have different parameter names?

* A. Yes
* B. No

38. Can polymorphism improve scalability?

* A. Yes
* B. No

39. Can overridden methods call multiple parent methods?

* A. Yes
* B. No

40. Does JS support operator overloading?

* A. No
* B. Yes

41. Can polymorphism exist with object literals?

* A. Partially, via duck typing
* B. Fully

42. Can private methods be accessed in overriding?

* A. No
* B. Yes

43. Can polymorphism improve code readability?

* A. Yes
* B. No

44. Can overridden methods access `this`?

* A. Yes
* B. No

45. Can overridden methods be static?

* A. Yes
* B. No

46. Can polymorphism be combined with abstraction?

* A. Yes
* B. No

47. Can overridden methods return different types?

* A. Yes
* B. No

48. Can polymorphism be applied in mixins?

* A. Yes
* B. No

49. Can multiple subclasses override the same parent method?

* A. Yes
* B. No

50. Why is mastering polymorphism essential?

* A. Flexible, reusable, maintainable code
* B. Frequent interview topic
* C. Both A & B
* D. None

---

## ✅ Answer Key

1.A 2.B 3.B 4.B 5.B 6.A 7.B 8.B 9.B 10.A
11.A 12.B 13.B 14.A 15.B 16.B 17.A 18.C 19.A 20.A
21.B 22.A 23.A 24.A 25.A 26.A 27.A 28.B 29.A 30.A
31.A 32.A 33.A 34.A 35.A 36.A 37.A 38.A 39.A 40.A
41.A 42.A 43.A 44.A 45.A 46.A 47.A 48.A 49.A 50.C

---

✅ **This README is fully editable, downloadable, and perfect for interviews and exam preparation.**
