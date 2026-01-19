# JavaScript OOP — Encapsulation (Private Fields, Getters & Setters) MCQs

This README contains **50 high-quality Multiple Choice Questions (MCQs)** focused **only on Encapsulation in JavaScript OOP**, including **private fields, getters, and setters**. These questions are **exam-oriented, interview-focused, and tricky**.

---

## Multiple Choice Questions

1. What is encapsulation in JavaScript?

   * A. Hiding implementation details and exposing only necessary parts
   * B. Overloading methods
   * C. Copying object properties
   * D. Creating global variables

2. How do you declare a private field?

   * A. _field
   * B. field
   * C. #field
   * D. $field

3. Can private fields be accessed outside the class?

   * A. Yes
   * B. No
   * C. Only in subclasses
   * D. Only in strict mode

4. Which keyword is used to define a getter?

   * A. get
   * B. set
   * C. readonly
   * D. private

5. Which keyword is used to define a setter?

   * A. get
   * B. set
   * C. write
   * D. private

6. Can getters accept parameters?

   * A. Yes
   * B. No

7. What happens if you assign a value to a getter-only property?

   * A. Value assigned
   * B. Error thrown in strict mode
   * C. Logs undefined
   * D. Automatically calls setter

8. Which of the following allows encapsulation without classes?

   * A. Closures
   * B. Promises
   * C. Arrow functions
   * D. Loops

9. Can private fields be inherited by subclasses?

   * A. Yes
   * B. No

10. What is the benefit of using setters?

    * A. Compute values
    * B. Validate data before assignment
    * C. Copy properties
    * D. Increase performance

11. Which of these is a true private field?

    * A. #password
    * B. _password
    * C. password
    * D. $password

12. What happens if a setter throws an error?

    * A. Property value assigned
    * B. Assignment fails
    * C. Logs error but assigns value
    * D. Deletes object

13. Can getters compute dynamic values?

    * A. Yes
    * B. No

14. Are private fields enumerable in `for...in` loops?

    * A. Yes
    * B. No

15. Can encapsulation prevent invalid object states?

    * A. Yes
    * B. No

16. Which syntax is correct for accessing a getter?

    * A. obj.prop()
    * B. obj.prop
    * C. obj.getProp()
    * D. obj['getProp']()

17. Which syntax is correct for setting a setter?

    * A. obj.prop(value)
    * B. obj.prop = value
    * C. obj.setProp(value)
    * D. obj['prop'](value)

18. Can private fields be serialized to JSON?

    * A. Yes
    * B. No

19. How do you enforce read-only access?

    * A. Getter only
    * B. Setter only
    * C. Private field only
    * D. No enforcement

20. Can closures be used for encapsulation?

    * A. Yes
    * B. No

21. Are getters and setters visible on the instance?

    * A. Yes
    * B. No

22. Which statement is true?

    * A. `_field` is private
    * B. `#field` is private
    * C. Both are private
    * D. None are private

23. Can a setter accept multiple parameters?

    * A. Yes
    * B. No

24. What happens if a getter returns a computed value?

    * A. Cached automatically
    * B. Returns value dynamically each call
    * C. Throws error
    * D. Assignment blocked

25. What is the default visibility of class fields?

    * A. Public
    * B. Private
    * C. Protected
    * D. Static

26. Which is the main benefit of encapsulation?

    * A. Faster loops
    * B. Data hiding and controlled access
    * C. Easier array manipulation
    * D. Global scope access

27. Are private static fields supported?

    * A. Yes
    * B. No

28. Can a getter have side effects?

    * A. Should be avoided
    * B. Required

29. What happens if you define a getter and setter for the same property?

    * A. Setter overrides getter
    * B. Getter overrides setter
    * C. Both coexist and control access
    * D. Syntax error

30. What is a common convention for pseudo-private fields?

    * A. `_field`
    * B. `#field`
    * C. `$field`
    * D. `private field`

31. Can getters call private methods?

    * A. Yes
    * B. No

32. Can setters call private methods?

    * A. Yes
    * B. No

33. Which statement is true about closures vs private fields?

    * A. Closures are older technique
    * B. Private fields are modern ES syntax
    * C. Both hide data
    * D. All of the above

34. Are private fields accessible via `this` inside class?

    * A. Yes
    * B. No

35. Can private fields be assigned in constructor?

    * A. Yes
    * B. No

36. Can you declare private fields outside class body?

    * A. Yes
    * B. No

37. Which method helps protect sensitive data?

    * A. Getter
    * B. Setter
    * C. Private field
    * D. All of the above

38. Can getters/setters be static?

    * A. Yes
    * B. No

39. Can encapsulation simplify debugging?

    * A. Yes
    * B. No

40. Can private fields be accessed via bracket notation?

    * A. Yes
    * B. No

41. What is the output if private field is accessed outside class?

    * A. Value
    * B. undefined
    * C. SyntaxError
    * D. ReferenceError

42. Are getters executed on access or assignment?

    * A. Access
    * B. Assignment

43. Are setters executed on access or assignment?

    * A. Access
    * B. Assignment

44. Can you have multiple private fields?

    * A. Yes
    * B. No

45. Can private fields be optional?

    * A. Yes
    * B. No

46. Which is preferred for modern JS encapsulation?

    * A. `_field`
    * B. Closures
    * C. `#field` with getters/setters
    * D. Object literals

47. Can encapsulation improve code maintainability?

    * A. Yes
    * B. No

48. Can you override private fields in subclass?

    * A. Yes
    * B. No

49. Can encapsulation prevent direct external mutation?

    * A. Yes
    * B. No

50. Why is mastering encapsulation important?

    * A. For secure code
    * B. For maintainable code
    * C. For interview readiness
    * D. All of the above

---

## ✅ Answer Key

1.A 2.C 3.B 4.A 5.B 6.B 7.B 8.A 9.B 10.B
11.A 12.B 13.A 14.B 15.A 16.B 17.B 18.B 19.A 20.A
21.A 22.B 23.B 24.B 25.A 26.B 27.A 28.A 29.C 30.A
31.A 32.A 33.D 34.A 35.A 36.B 37.D 38.A 39.A 40.B
41.C 42.A 43.B 44.A 45.A 46.C 47.A 48.B 49.A 50.D

---

✅ **This README is fully editable, downloadable, and perfect for interview & exam practice.**
