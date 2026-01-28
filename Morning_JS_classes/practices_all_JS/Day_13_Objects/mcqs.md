# 📘 JavaScript Objects – 105 MCQs (Beginner → Expert)

> **Topics Covered (15 MCQs each = 105 Total)**
>
> 1. Objects (Basics)
> 2. Object Properties
> 3. Object Methods
> 4. Object Constructors
> 5. Constructors for Methods
> 6. Prototypes
> 7. Checking Properties & Methods

💡 Designed to **crack exams, interviews, MCQs, and certifications**.

---

## 🔹 1️⃣ Objects – Basics (MCQs 1–15)

1. What is an object in JavaScript?
   A) A primitive datatype
   B) A collection of key–value pairs
   C) Only a function
   D) Only an array

2. Which syntax creates an object literal?
   A) `new Object[]`
   B) `{}`
   C) `Object()`
   D) `[]`

3. JavaScript objects are:
   A) Immutable
   B) Primitive
   C) Mutable
   D) Constant

4. Which data type can an object value hold?
   A) String only
   B) Number only
   C) Function only
   D) Any type

5. Objects in JavaScript are stored by:
   A) Value
   B) Reference
   C) Copy
   D) Index

6. Which of the following is NOT an object?
   A) Array
   B) Function
   C) null
   D) Date

7. What will `typeof {}` return?
   A) object
   B) function
   C) array
   D) null

8. Objects can contain:
   A) Properties only
   B) Methods only
   C) Both properties and methods
   D) Neither

9. Which is true about objects?
   A) Fixed size
   B) Dynamic structure
   C) Ordered values
   D) Indexed only

10. What is the default prototype of objects?
    A) null
    B) Array.prototype
    C) Object.prototype
    D) Function.prototype

11. Which creates an empty object?
    A) `{}`
    B) `new Object()`
    C) `Object.create(null)`
    D) All of these

12. Objects represent which concept?
    A) Procedural
    B) Functional
    C) Real‑world entities
    D) Mathematical

13. Can objects be nested?
    A) No
    B) Yes
    C) Only arrays can
    D) Only functions can

14. Which one is fastest to create?
    A) Constructor
    B) Object literal
    C) Class
    D) Prototype

15. Which is NOT true?
    A) Objects are mutable
    B) Objects are reference types
    C) Objects are primitives
    D) Objects can hold functions

---

## 🔹 2️⃣ Object Properties (MCQs 16–30)

16. Properties are:
    A) Variables inside objects
    B) Functions only
    C) Methods only
    D) Classes

17. How do you access a property?
    A) Dot notation
    B) Bracket notation
    C) Both A and B
    D) Neither

18. Which allows dynamic property access?
    A) Dot
    B) Bracket
    C) Colon
    D) Comma

19. What happens if a property does not exist?
    A) Error
    B) null
    C) undefined
    D) false

20. How do you add a property?
    A) `obj.key = value`
    B) `obj[key] = value`
    C) Both
    D) None

21. Which keyword removes a property?
    A) remove
    B) clear
    C) delete
    D) unset

22. Property names are internally:
    A) Numbers
    B) Booleans
    C) Symbols only
    D) Strings

23. Which is valid property name?
    A) `first-name` (dot)
    B) `firstName`
    C) `1name`
    D) `@name`

24. Which method lists own keys?
    A) Object.keys()
    B) Object.values()
    C) Object.entries()
    D) All

25. Which does NOT change object?
    A) Add property
    B) Update property
    C) Delete property
    D) Reading property

26. What does `Object.values()` return?
    A) Keys
    B) Values
    C) Pairs
    D) Objects

27. Property names are case‑sensitive?
    A) Yes
    B) No
    C) Sometimes
    D) Only in strict mode

28. Which avoids runtime errors?
    A) if‑else
    B) try‑catch
    C) Optional chaining
    D) Loop

29. Which operator checks property existence?
    A) exists
    B) in
    C) has
    D) typeof

30. Best practice for constants?
    A) Mutable object
    B) Object.freeze()
    C) Object.assign()
    D) delete

---

## 🔹 3️⃣ Object Methods (MCQs 31–45)

31. Methods are:
    A) Object variables
    B) Object functions
    C) Classes
    D) Prototypes

32. Which keyword refers to current object?
    A) self
    B) this
    C) that
    D) object

33. Why avoid arrow functions as methods?
    A) Syntax error
    B) No parameters
    C) No own this
    D) Slow

34. Which is modern method syntax?
    A) `greet: function(){}`
    B) `greet(){}`
    C) `function greet()`
    D) `=>`

35. Methods can access properties using:
    A) this
    B) object name only
    C) global scope
    D) prototype only

36. What happens if `this` is lost?
    A) Syntax error
    B) Undefined behavior
    C) Refers to wrong object
    D) Always null

37. Which fixes this binding?
    A) call
    B) apply
    C) bind
    D) All

38. Methods are shared when defined in:
    A) Constructor
    B) Prototype
    C) Object literal
    D) Arrow

39. Which returns function permanently bound?
    A) call
    B) apply
    C) bind
    D) set

40. Which is NOT a method?
    A) push()
    B) pop()
    C) length
    D) map()

41. Method invocation uses:
    A) obj.method()
    B) method(obj)
    C) obj[method]
    D) method()

42. Which method loops object entries?
    A) forEach
    B) Object.entries
    C) map
    D) filter

43. Methods can return:
    A) Only values
    B) Only objects
    C) Anything
    D) Nothing

44. Method shorthand introduced in:
    A) ES5
    B) ES6
    C) ES3
    D) ES7

45. Best practice for reusable methods?
    A) Inline
    B) Prototype
    C) Global
    D) Arrow

---

## 🔹 4️⃣ Object Constructors (MCQs 46–60)

46. Constructor functions start with:
    A) lowercase
    B) Capital letter
    C) underscore
    D) number

47. Constructors are called using:
    A) call
    B) apply
    C) new
    D) bind

48. What does `new` return?
    A) Function
    B) Object
    C) Prototype
    D) Undefined

49. Inside constructor, `this` refers to:
    A) Global object
    B) Prototype
    C) New object
    D) Function

50. Which is constructor example?
    A) `{}`
    B) `function User(){}`
    C) `[]`
    D) `=>`

51. Constructors help in:
    A) Single object
    B) Multiple similar objects
    C) Arrays only
    D) Functions only

52. Missing `new` causes:
    A) Error always
    B) Global pollution
    C) Ignored function
    D) Compilation error

53. Constructors support:
    A) Properties
    B) Methods
    C) Prototypes
    D) All

54. Constructor functions are part of:
    A) OOP
    B) FP
    C) DOM
    D) BOM

55. What links object to prototype?
    A) this
    B) new
    C) **proto**
    D) bind

56. Which creates instance?
    A) Function call
    B) new keyword
    C) apply
    D) bind

57. Constructor without return returns:
    A) null
    B) this
    C) prototype
    D) undefined

58. Which is better for many objects?
    A) Object literal
    B) Constructor
    C) JSON
    D) Array

59. Constructors are reusable?
    A) No
    B) Yes
    C) Sometimes
    D) Rarely

60. Constructors enable:
    A) Inheritance
    B) Encapsulation
    C) Abstraction
    D) All

---

## 🔹 5️⃣ Constructors for Methods (MCQs 61–75)

61. Defining methods inside constructor causes:
    A) Sharing
    B) Memory waste
    C) Error
    D) Optimization

62. Best place for shared methods?
    A) Constructor
    B) Global
    C) Prototype
    D) Block

63. Prototype methods are:
    A) Copied per object
    B) Shared
    C) Private
    D) Temporary

64. Why prototype saves memory?
    A) One copy only
    B) Faster CPU
    C) Less syntax
    D) Garbage collection

65. Which syntax adds prototype method?
    A) `obj.method`
    B) `Func.method`
    C) `Func.prototype.method`
    D) `this.method`

66. Methods on prototype are accessed via:
    A) Copy
    B) Closure
    C) Prototype chain
    D) Scope

67. Prototype methods can use:
    A) this
    B) global
    C) window
    D) null

68. Constructor methods are best for:
    A) Unique logic
    B) Shared logic
    C) Utilities
    D) Libraries

69. Prototype is checked when:
    A) Property not found
    B) Always
    C) Never
    D) Only methods

70. Prototype methods increase:
    A) Memory usage
    B) Speed
    C) Code duplication
    D) Bugs

71. Which is wrong?
    A) Prototype shared
    B) Constructor duplicated
    C) Prototype memory heavy
    D) Prototype efficient

72. Prototype methods belong to:
    A) Instance
    B) Function
    C) Class keyword
    D) Global

73. Prototype chaining ends at:
    A) Array
    B) Function
    C) Object.prototype
    D) null

74. Which is interview favorite?
    A) Arrow methods
    B) Inline methods
    C) Prototype methods
    D) Global methods

75. Best practice says:
    A) Prefer inheritance
    B) Prefer composition
    C) Ignore prototype
    D) Avoid objects

---

## 🔹 6️⃣ Prototypes (MCQs 76–90)

76. JavaScript uses which inheritance?
    A) Classical
    B) Prototypal
    C) Functional
    D) Modular

77. Prototype is a:
    A) Function
    B) Object
    C) Array
    D) String

78. Access hidden prototype via:
    A) prototype
    B) **proto**
    C) this
    D) new

79. Array methods come from:
    A) Object
    B) Array.prototype
    C) Function.prototype
    D) null

80. Prototype chain lookup order?
    A) Parent → Child
    B) Child → Parent
    C) Random
    D) Global

81. Which ends prototype chain?
    A) Object
    B) Function
    C) null
    D) Array

82. Which is slower?
    A) Own property
    B) Prototype lookup
    C) Direct access
    D) Constant

83. Can prototype be modified?
    A) No
    B) Yes
    C) Only once
    D) Only ES6

84. Frameworks use prototype for:
    A) UI only
    B) Memory optimization
    C) Styling
    D) APIs

85. Prototype inheritance allows:
    A) Method sharing
    B) Property duplication
    C) Memory waste
    D) Errors

86. Which object has no prototype?
    A) {}
    B) []
    C) Object.create(null)
    D) Function

87. Prototype chain bug causes:
    A) Crash
    B) Shadowing
    C) Memory leak
    D) Syntax error

88. Overriding prototype method means:
    A) Delete original
    B) Shadow it
    C) Error
    D) Ignore

89. Best prototype use case?
    A) UI data
    B) Shared behavior
    C) Constants
    D) Events

90. Prototype knowledge level?
    A) Beginner
    B) Intermediate
    C) Advanced
    D) Optional

---

## 🔹 7️⃣ Checking Properties & Methods (MCQs 91–105)

91. Which checks own + prototype?
    A) hasOwnProperty
    B) in
    C) typeof
    D) exists

92. Which checks own only?
    A) in
    B) typeof
    C) hasOwnProperty
    D) delete

93. Which checks method type?
    A) in
    B) typeof
    C) instanceof
    D) new

94. Optional chaining prevents:
    A) Bugs
    B) Errors
    C) Crashes
    D) All

95. Which returns boolean?
    A) Object.keys
    B) in operator
    C) Object.values
    D) entries

96. Safe access operator?
    A) ??
    B) ?.
    C) &&
    D) ||

97. Best for checking function?
    A) typeof === "function"
    B) in
    C) exists
    D) new

98. Which ignores prototype?
    A) in
    B) hasOwnProperty
    C) typeof
    D) instanceof

99. Property exists but value undefined:
    A) in → true
    B) in → false
    C) Error
    D) null

100. Checking before calling method avoids:
     A) Syntax error
     B) Runtime error
     C) Compile error
     D) Logical error

101. Which is safest?
     A) obj.prop
     B) obj?.prop
     C) obj[prop]
     D) obj::prop

102. Which is modern?
     A) try‑catch
     B) if‑else
     C) Optional chaining
     D) switch

103. Which works on prototype?
     A) hasOwnProperty
     B) in
     C) typeof
     D) ===

104. Which returns false for prototype?
     A) in
     B) hasOwnProperty
     C) typeof
     D) instanceof

105. Best interview answer approach?
     A) Guess
     B) Memorize
     C) Understand concepts
     D) Skip

---

# ✅ Answer Key

1-B, 2-B, 3-C, 4-D, 5-B, 6-C, 7-A, 8-C, 9-B, 10-C, 11-D, 12-C, 13-B, 14-B, 15-C

16-A, 17-C, 18-B, 19-C, 20-C, 21-C, 22-D, 23-B, 24-D, 25-D, 26-B, 27-A, 28-C, 29-B, 30-B

31-B, 32-B, 33-C, 34-B, 35-A, 36-C, 37-D, 38-B, 39-C, 40-C, 41-A, 42-B, 43-C, 44-B, 45-B

46-B, 47-C, 48-B, 49-C, 50-B, 51-B, 52-B, 53-D, 54-A, 55-C, 56-B, 57-B, 58-B, 59-B, 60-D

61-B, 62-C, 63-B, 64-A, 65-C, 66-C, 67-A, 68-A, 69-A, 70-B, 71-C, 72-B, 73-D, 74-C, 75-B

76-B, 77-B, 78-B, 79-B, 80-B, 81-C, 82-B, 83-B, 84-B, 85-A, 86-C, 87-B, 88-B, 89-B, 90-C

91-B, 92-C, 93-B, 94-D, 95-B, 96-B, 97-A, 98-B, 99-A, 100-B, 101-B, 102-C, 103-B, 104-B, 105-C

---

🎯 **If you can score 85+ here, you are interview‑ready for JavaScript Objects.**
