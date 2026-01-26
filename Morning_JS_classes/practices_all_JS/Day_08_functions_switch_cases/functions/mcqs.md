# MCQs on Python Functions and Variable Scope

This document contains **100 multiple choice questions** (MCQs) on Python functions, parameter passing, returning data, and variable scope. It is designed to help you **crack exams and interviews**.

---

## Section 1: Functions & Basics (50 MCQs)

1. What is a function in Python?
   A) A variable
   B) A block of reusable code
   C) A type of loop
   D) A module

2. Which keyword is used to define a function?
   A) func
   B) define
   C) def
   D) function

3. How do you call a function `greet`?
   A) call greet()
   B) greet()
   C) run greet
   D) execute greet

4. What will the following code print?

```python
def greet():
    print("Hello")
greet()
```

A) Nothing
B) Hello
C) greet
D) Error

5. Which of the following is correct syntax for a function with parameters?
   A) `def func(param1, param2):`
   B) `func def(param1, param2)`
   C) `def func: param1, param2`
   D) `function func(param1, param2)`

6. What is the default return value of a function if `return` is not used?
   A) 0
   B) None
   C) False
   D) Empty string

7. Which of the following is NOT a valid function name?
   A) `_myfunc`
   B) `myFunc123`
   C) `123func`
   D) `func_`

8. Can functions be nested inside another function?
   A) Yes
   B) No
   C) Only with decorators
   D) Only in Python 2

9. Which statement is true about a function?
   A) Functions cannot call other functions
   B) Functions can return values
   C) Functions must return a value
   D) Functions cannot have parameters

10. What will the following code print?

```python
def add(a, b):
    return a + b
print(add(3, 4))
```

A) 34
B) 7
C) a+b
D) Error

11. A function can return how many values in Python?
    A) Only 1
    B) Only 2
    C) Multiple (using tuple)
    D) None

12. Which of the following is true about functions?
    A) Functions improve readability
    B) Functions increase repetition
    C) Functions cannot accept parameters
    D) Functions cannot return values

13. What is a parameter?
    A) Value returned by function
    B) Placeholder for input in function
    C) Loop variable
    D) Function name

14. What is an argument?
    A) Value passed to function
    B) Function name
    C) Loop variable
    D) Return value

15. Which of the following is correct to call a function with multiple arguments?
    A) `func(1, 2, 3)`
    B) `func{1,2,3}`
    C) `func[1,2,3]`
    D) `func<1,2,3>`

16. What is the output of this code?

```python
def test(a, b=2):
    return a * b
print(test(3))
```

A) 3
B) 6
C) 2
D) Error

17. What is the output?

```python
def f(x):
    return x**2
print(f(5))
```

A) 25
B) 10
C) 5
D) 125

18. Which of the following is a valid lambda function?
    A) `lambda x: x+2`
    B) `def lambda(x): x+2`
    C) `lambda(x) = x+2`
    D) `x -> x+2`

19. Which of the following statements is FALSE?
    A) Functions can have default parameters
    B) Functions can be called without parameters if defaults exist
    C) Functions cannot be assigned to variables
    D) Functions can return multiple values

20. What is the output?

```python
def func():
    return "Python"
print(func())
```

A) Python
B) func
C) None
D) Error

21. Which is the correct way to define a function with no parameters?
    A) `def func:`
    B) `def func():`
    C) `function func()`
    D) `def func{}`

22. A function is called without parentheses, e.g., `f`. What is returned?
    A) Function is executed
    B) Function object reference
    C) Error
    D) None

23. Which of these can be used to document a function?
    A) Comments
    B) Docstrings
    C) print()
    D) return

24. Which statement is TRUE?
    A) `return` statement is mandatory in a function
    B) Function can execute without `return`
    C) Functions cannot print anything
    D) Functions cannot call other functions

25. The keyword used to pass arbitrary arguments is:
    A) **args
    B) *args
    C) &args
    D) args*

26. The keyword used to pass arbitrary keyword arguments is:
    A) *kwargs
    B) **kwargs
    C) &kwargs
    D) kwargs*

27. Which of the following is valid?
    A) `def f(*args):`
    B) `def f(**args):`
    C) `def f(&args):`
    D) `def f(args*):`

28. Can a function be assigned to a variable?
    A) Yes
    B) No
    C) Only for lambda
    D) Only for Python 3

29. What is the output?

```python
def f(a, b=5):
    return a+b
print(f(3, 2))
```

A) 5
B) 3
C) 6
D) 7

30. What is the output?

```python
def f(a, b=5):
    return a+b
print(f(3))
```

A) 5
B) 3
C) 8
D) Error

31. Which is TRUE?
    A) Functions can return values
    B) Functions cannot have parameters
    C) Functions cannot be nested
    D) Functions cannot be passed as arguments

32. What is the correct syntax to return multiple values?
    A) `return a,b`
    B) `return (a,b)`
    C) Both A and B
    D) Only using list

33. Can functions call themselves?
    A) Yes, recursion
    B) No
    C) Only with loops
    D) Only in Python 2

34. Which function type is anonymous?
    A) Lambda
    B) Named function
    C) Recursive function
    D) Built-in function

35. What will the following code output?

```python
def test():
    return
print(test())
```

A) None
B) 0
C) ''
D) Error

36. Can a function have both *args and **kwargs?
    A) Yes
    B) No
    C) Only one
    D) Only in Python 3.8+

37. What is the output?

```python
def f(x):
    return x+5
print(f(2))
```

A) 7
B) 2
C) 5
D) Error

38. What is TRUE about docstrings?
    A) Used to document functions
    B) Optional
    C) Can be accessed via `.__doc__`
    D) All of the above

39. Which is TRUE?
    A) Function names cannot start with number
    B) Function names are case-sensitive
    C) Function names can contain underscores
    D) All above

40. What is the output?

```python
def f(a, b=2, c=3):
    return a+b+c
print(f(1))
```

A) 6
B) 5
C) 3
D) 1

41. Can functions be defined inside loops?
    A) Yes
    B) No
    C) Only in Python 3
    D) Only in scripts

42. Can you define a function without a body?
    A) Yes, using `pass`
    B) No
    C) Only with return
    D) Only lambda

43. Can a function return another function?
    A) Yes
    B) No
    C) Only lambda
    D) Only in Python 2

44. What will this code output?

```python
def f(x):
    return x*2
print(f('Hi'))
```

A) HiHi
B) Hi2
C) Error
D) Hihi

45. Is it possible to have a function without parameters?
    A) Yes
    B) No
    C) Only lambda
    D) Only nested functions

46. What does `return` do?
    A) Exits function
    B) Sends value back
    C) Stops execution
    D) All above

47. Can you have multiple return statements?
    A) Yes
    B) No
    C) Only 1
    D) Only for lambda

48. Which is TRUE?
    A) Function execution starts only when called
    B) Function executes automatically
    C) Function cannot be passed as argument
    D) Function cannot be nested

49. Can a function modify global variables?
    A) Yes, with `global` keyword
    B) No
    C) Only return a value
    D) Only in Python 2

50. What is a recursive function?
    A) Calls itself
    B) Calls another function
    C) Cannot return value
    D) Anonymous function

---

## Section 2: Local vs Global Variables (50 MCQs)

51. What is a local variable?
    A) Declared inside function
    B) Declared outside function
    C) Accessible globally
    D) Constant

52. What is a global variable?
    A) Declared inside function
    B) Declared outside all functions
    C) Accessible only in loops
    D) Immutable

53. Which keyword is used to modify a global variable inside a function?
    A) local
    B) global
    C) modify
    D) var

54. What is the output?

```python
a = 5
def f():
    a = 10
f()
print(a)
```

A) 5
B) 10
C) Error
D) None

55. What is the output?

```python
a = 5
def f():
    global a
    a = 10
f()
print(a)
```

A) 5
B) 10
C) Error
D) None

56. Local variables are destroyed when?
    A) Function ends
    B) Program ends
    C) Loop ends
    D) Never

57. Can local and global variables have the same name?
    A) Yes
    B) No
    C) Only for constants
    D) Only in Python 2

58. Which is TRUE about global variables?
    A) Accessible anywhere in code
    B) Cannot be modified
    C) Only inside functions
    D) Only inside loops

59. Which statement is TRUE about variable scope?
    A) Local variables override global inside function
    B) Global variables override local inside function
    C) Local variables accessible globally
    D) Global variables destroyed after function

60. What is the output?

```python
g = 2
def f():
    g = 5
    print(g)
f()
print(g)
```

A) 5 2
B) 5 5
C) 2 5
D) Error

61. What is the output?

```python
g = 2
def f():
    global g
    g = 5
    print(g)
f()
print(g)
```

A) 5 5
B) 2 5
C) 5 2
D) Error

62. Can a function create a new local variable with same name as global?
    A) Yes
    B) No
    C) Only constants
    D) Only in loops

63. Which is TRUE?
    A) Using `global` inside a function modifies global variable
    B) Local variable can be accessed outside function
    C) Python does not have global variables
    D) Variables inside function are always global

64. What is the output?

```python
def f():
    x = 10
f()
print(x)
```

A) Error
B) 10
C) None
D) 0

65. What is the output?

```python
g = 10
def f():
    g = g + 1
    print(g)
f()
```

A) Error
B) 11
C) 10
D) None

66. Which of the following is best practice?
    A) Minimize global variables
    B) Use many globals
    C) Always use globals
    D) Avoid local variables

67. What is the output?

```python
g = 1
def f():
    g = 2
    h = 3
    print(g, h)
f()
print(g)
```

A) 2 3 1
B) 2 3 2
C) 1 3
D) Error

68. Can functions access global variables?
    A) Yes
    B) No
    C) Only with return
    D) Only if passed as argument

69. What is the output?

```python
g = 5
def f():
    global g
    g += 1
f()
print(g)
```

A) 5
B) 6
C) Error
D) None

70. Which is TRUE?
    A) Local variable disappears after function ends
    B) Global variable disappears after function ends
    C) Local variable is permanent
    D) Global variable is destroyed after function

71. Can a local variable in one function affect another function?
    A) No
    B) Yes
    C) Only with global
    D) Only constants

72. Can global variables be read without `global` keyword?
    A) Yes
    B) No
    C) Only constants
    D) Only in loops

73. Can global and local variable have same name?
    A) Yes, local inside function
    B) No
    C) Only in classes
    D) Only in loops

74. Which keyword is used to declare constants?
    A) const
    B) final
    C) Python has no constants
    D) global

75. What is the output?

```python
def f():
    a = 1
    return a
print(f())
```

A) 1
B) a
C) None
D) Error

76. What is the output?

```python
g = 10
def f():
    a = g + 5
    print(a)
f()
```

A) 15
B) 10
C) Error
D) None

77. What is TRUE?
    A) Avoid unnecessary globals
    B) Prefer passing variables as arguments
    C) Both A & B
    D) None

78. Which statement is FALSE?
    A) Local variables exist only during function execution
    B) Global variables exist for program lifetime
    C) Local variable can be accessed outside function
    D) Global variable can be modified inside function with `global`

79. What is the output?

```python
g = 3
h = 5
def f():
    g = 10
    h = 20
    print(g+h)
f()
print(g+h)
```

A) 30 8
B) 30 8
C) 30 30
D) 8 30

80. Can local variable be modified outside function?
    A) No
    B) Yes
    C) Only with return
    D) Only with global

81. What is the output?

```python
def f():
    x = 5
    x += 2
    return x
print(f())
```

A) 7
B) 5
C) 2
D) None

82. Which variable has wider scope?
    A) Global
    B) Local
    C) Both same
    D) Neither

83. Can global variables be mutable?
    A) Yes
    B) No
    C) Only numbers
    D) Only strings

84. What will this code output?

```python
g = [1,2]
def f():
    g.append(3)
f()
print(g)
```

A) [1,2,3]
B) [1,2]
C) Error
D) None

85. What is TRUE?
    A) Lists and dictionaries as globals can be modified inside functions
    B) Integers as globals can be modified without `global`
    C) Strings as globals can be modified without `global`
    D) All above

86. What is output?

```python
g = 5
def f():
    g = 3
    print(g)
    return g
x = f()
print(x)
```

A) 3 3
B) 5 5
C) 3 5
D) Error

87. Which is better practice?
    A) Prefer local variables
    B) Prefer global variables
    C) Always use global
    D) Never use variables

88. What is output?

```python
g = 0
def f():
    global g
    g += 1
for i in range(3):
    f()
print(g)
```

A) 3
B) 0
C) 1
D) 2

89. Can function return a global variable?
    A) Yes
    B) No
    C) Only local variable



Section 1: Functions & Basics (1–50)

1. B

2. C

3. B

4. B

5. A

6. B

7. C

8. A

9. B

10. B

11. C

12. A

13. B

14. A

15. A

16. B

17. A

18. A

19. C

20. A

21. B

22. B

23. B

24. B

25. B

26. B

27. A

28. A

29. D

30. C

A

C

A

A

A

A

A

D

D

A

A

A

A

A

A

D

A

A

A

A

Section 2: Local vs Global Variables (51–100)

A

B

B

A

B

A

A

A

A

A

A

A

A

A

A

A

A

A

B

A

A

A

A

C

A

A

C

C

A

A

A

A

A

A

A

A

A

A

A

B

A

A

A

B

B

A

A

97. B

99. B

100. B