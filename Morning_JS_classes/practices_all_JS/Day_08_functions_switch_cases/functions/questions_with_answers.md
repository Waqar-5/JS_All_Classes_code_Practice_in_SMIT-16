# Python Functions and Variable Scope – 100 Questions with Detailed Answers

This document contains **100 questions with detailed answers** on Python functions, parameter passing, returning values, and variable scope. It is designed to help you **master these topics for exams and interviews**.

---

## Section 1: Functions (25 Questions)

### Q1. What is a function in Python?

**Answer:** B) A block of reusable code
**Explanation:** Functions are blocks of code that perform a specific task. They help avoid repetition, improve readability, and can be reused multiple times.

### Q2. Which keyword is used to define a function?

**Answer:** C) `def`
**Explanation:** In Python, functions are defined using the `def` keyword followed by the function name and parentheses.

### Q3. How do you call a function `greet`?

**Answer:** B) `greet()`
**Explanation:** To execute a function, you use its name followed by parentheses. Parentheses are required even if there are no parameters.

### Q4. What will this code print?

```python
def greet():
    print("Hello")
greet()
```

**Answer:** B) Hello
**Explanation:** The function prints "Hello" when called.

### Q5. What is the default return value of a function if `return` is not used?

**Answer:** B) None
**Explanation:** If a function doesn’t explicitly return a value, Python returns `None` by default.

### Q6. Which of the following is NOT a valid function name?

**Answer:** C) `123func`
**Explanation:** Function names cannot start with a number. They must start with a letter or underscore.

### Q7. Can functions be nested inside another function?

**Answer:** A) Yes
**Explanation:** Python allows nested functions, meaning functions can be defined inside another function.

### Q8. Can functions return multiple values?

**Answer:** C) Yes, using tuples
**Explanation:** Python functions can return multiple values by returning them as a tuple.

### Q9. What is a parameter in a function?

**Answer:** B) Placeholder for input in function
**Explanation:** Parameters are variables defined in the function signature that accept input values when the function is called.

### Q10. What is an argument in Python?

**Answer:** A) Value passed to function
**Explanation:** Arguments are the actual values you pass to a function’s parameters when calling it.

### Q11. What will this code output?

```python
def add(a, b):
    return a + b
print(add(3, 4))
```

**Answer:** B) 7
**Explanation:** The function returns the sum of 3 and 4.

### Q12. Which of the following is a valid lambda function?

**Answer:** A) `lambda x: x+2`
**Explanation:** Lambda functions are anonymous functions defined using the `lambda` keyword.

### Q13. What will this function return if no `return` is specified?

```python
def test():
    pass
```

**Answer:** None
**Explanation:** If no `return` is provided, the function implicitly returns `None`.

### Q14. Can functions call themselves?

**Answer:** A) Yes, recursion
**Explanation:** Recursive functions call themselves to solve problems iteratively.

### Q15. What is a recursive function?

**Answer:** A) Calls itself
**Explanation:** A recursive function is one that invokes itself within its body.

### Q16. Which statement is TRUE about functions?

**Answer:** A) Functions improve readability
**Explanation:** Functions organize code, reduce repetition, and make programs easier to read.

### Q17. Can a function be assigned to a variable?

**Answer:** A) Yes
**Explanation:** In Python, functions are first-class objects and can be assigned to variables.

### Q18. Can a function have default parameters?

**Answer:** A) Yes
**Explanation:** You can provide default values to parameters, which are used if no arguments are passed.

### Q19. What will this code print?

```python
def f(a, b=2):
    return a * b
print(f(3))
```

**Answer:** B) 6
**Explanation:** Default value for `b` is 2, so the function returns 3*2=6.

### Q20. What does the `return` statement do?

**Answer:** D) All of the above
**Explanation:** `return` exits a function, optionally sends a value back, and stops further execution inside the function.

### Q21. Can functions be defined inside loops?

**Answer:** A) Yes
**Explanation:** Python allows function definitions inside loops, though it is uncommon.

### Q22. How do you document a function?

**Answer:** B) Docstrings
**Explanation:** Docstrings are string literals inside a function used for documentation, accessible via `.__doc__`.

### Q23. Which is TRUE about function names?

**Answer:** D) All of the above
**Explanation:** Names cannot start with a number, are case-sensitive, and can contain underscores.

### Q24. Can a function return another function?

**Answer:** A) Yes
**Explanation:** Functions are objects; a function can return another function as a value.

### Q25. What is the correct way to define a function with no parameters?

**Answer:** B) `def func():`
**Explanation:** Empty parentheses are required even if the function takes no parameters.

---

## Section 2: Functions – Passing Data (25 Questions)

### Q26. How do you pass arguments to a function?

**Answer:** By position or keyword
**Explanation:** Python supports positional and keyword arguments when calling functions.

### Q27. What is a positional argument?

**Answer:** Value passed in correct order
**Explanation:** Positional arguments are mapped to parameters by their order.

### Q28. What is a keyword argument?

**Answer:** Argument passed as `param=value`
**Explanation:** Keyword arguments explicitly specify which parameter they belong to.

### Q29. What is the output?

```python
def f(a, b):
    return a+b
print(f(b=2, a=3))
```

**Answer:** 5
**Explanation:** Keyword arguments allow passing values in any order.

### Q30. Can functions accept arbitrary positional arguments?

**Answer:** Yes, using `*args`
**Explanation:** `*args` collects extra positional arguments as a tuple.

### Q31. Can functions accept arbitrary keyword arguments?

**Answer:** Yes, using `**kwargs`
**Explanation:** `**kwargs` collects extra keyword arguments as a dictionary.

### Q32. What is the output?

```python
def f(*args):
    return sum(args)
print(f(1,2,3))
```

**Answer:** 6
**Explanation:** `*args` collects (1,2,3) and sum returns 6.

### Q33. What is the output?

```python
def f(**kwargs):
    return kwargs['x']
print(f(x=5, y=10))
```

**Answer:** 5
**Explanation:** `**kwargs` allows accessing passed keywords as a dictionary.

### Q34. What is the difference between `*args` and `**kwargs`?

**Answer:** `*args` for positional, `**kwargs` for keyword
**Explanation:** `*args` collects extra positional arguments; `**kwargs` collects extra named arguments.

### Q35. Can arguments be mutable?

**Answer:** Yes
**Explanation:** Mutable arguments (like lists) can be changed inside the function.

### Q36. What will this code print?

```python
def f(lst):
    lst.append(4)
l = [1,2,3]
f(l)
print(l)
```

**Answer:** [1,2,3,4]
**Explanation:** Mutable objects are passed by reference; modifications affect the original.

### Q37. Are numbers mutable?

**Answer:** No
**Explanation:** Numbers are immutable; changes create a new object.

### Q38. Can default arguments be mutable?

**Answer:** Technically yes, but not recommended
**Explanation:** Using mutable defaults can lead to unexpected behavior across calls.

### Q39. What is output?

```python
def f(x, lst=[]):
    lst.append(x)
    return lst
print(f(1))
print(f(2))
```

**Answer:** [1] then [1,2]
**Explanation:** The default list is shared across calls.

### Q40. Can arguments be unpacked?

**Answer:** Yes
**Explanation:** You can unpack tuples/lists using `*` and dicts using `**` when passing to functions.

### Q41. What will this code output?

```python
def f(a,b,c):
    return a+b+c
lst=[1,2,3]
print(f(*lst))
```

**Answer:** 6
**Explanation:** `*lst` unpacks the list into separate arguments.

### Q42. Are strings passed by reference?

**Answer:** No, they are immutable
**Explanation:** Strings are immutable; passing them creates a new reference if modified.

### Q43. What is the output?

```python
def f(a):
    a+=1
    return a
x=5
print(f(x))
print(x)
```

**Answer:** 6 then 5
**Explanation:** Numbers are immutable; original `x` is not changed.

### Q44. Can functions accept both positional and keyword arguments?

**Answer:** Yes
**Explanation:** Python allows mixing positional and keyword arguments in calls.

### Q45. Can `*args` come after regular parameters?

**Answer:** Yes
**Explanation:** Positional arguments must be listed first, then `*args`.

### Q46. Can `**kwargs` come after `*args`?

**Answer:** Yes
**Explanation:** `**kwargs` must come after `*args` in function definitions.

### Q47. Can you have required parameters after default ones?

**Answer:** No
**Explanation:** Non-default parameters must come before default parameters.

### Q48. Can arguments be passed by keyword only?

**Answer:** Yes, using `/` and `*` in Python 3.8+
**Explanation:** You can enforce positional-only or keyword-only parameters.

### Q49. Can functions accept variable-length arguments?

**Answer:** Yes
**Explanation:** Using `*args` and `**kwargs`, functions can accept any number of arguments.

### Q50. What will this code print?

```python
def f(a,b=2):
    return a*b
print(f(3))
```

**Answer:** 6
**Explanation:** Default value `b=2` is used; 3*2=6.

---

## Section 3: Functions – Returning Data (25 Questions)

### Q51. What is the purpose of the `return` statement?

**Answer:** Sends data back to caller
**Explanation:** `return` allows a function to output a value to the code that called it.

### Q52. Can a function return multiple values?

**Answer:** Yes, as tuple
**Explanation:** Using `return a, b` returns a tuple `(a,b)`.

### Q53. What is output?

```python
def f():
    return 1,2,3
x=f()
print(x)
```

**Answer:** (1,2,3)
**Explanation:** Multiple values are returned as a tuple.

### Q54. Can functions return functions?

**Answer:** Yes
**Explanation:** Functions are first-class objects; they can be returned.

### Q55. Can functions return lambda?

**Answer:** Yes
**Explanation:** Lambda functions can be returned from regular functions.

### Q56. What is output?

```python
def f():
    return lambda x:x+1
func=f()
print(func(5))
```

**Answer:** 6
**Explanation:** The function returns a lambda that adds 1 to input.

### Q57. Can a function return a list?

**Answer:** Yes
**Explanation:** Functions can return any object: list, dict, string, etc.

### Q58. What is output?

```python
def f():
    return [1,2,3]
print(f())
```

**Answer:** [1,2,3]
**Explanation:** Returns a list object.

### Q59. Can a function return a dictionary?

**Answer:** Yes
**Explanation:** Functions can return dictionaries for structured data.

### Q60. Can `return` be used without a value?

**Answer:** Yes, returns None
**Explanation:** `return` without value exits the function and returns `None`.

### Q61. Can a function return inside a loop?

**Answer:** Yes
**Explanation:** The function exits immediately when `return` is executed.

### Q62. What is output?

```python
def f():
    for i in range(3):
        return i
print(f())
```

**Answer:** 0
**Explanation:** Function returns on first iteration.

### Q63. Can functions return values conditionally?

**Answer:** Yes
**Explanation:** `return` can be inside `if`/`else` blocks.

### Q64. What is output?

```python
def f(x):
    if x>0:
        return 'Positive'
    else:
        return 'Non-positive'
print(f(3))
```

**Answer:** Positive
**Explanation:** Conditional logic determines returned value.

### Q65. Can functions return boolean values?

**Answer:** Yes
**Explanation:** Functions can return True or False.

### Q66. What is output?

```python
def is_even(n):
    return n%2==0
print(is_even(4))
```

**Answer:** True
**Explanation:** Returns boolean result of expression.

### Q67. Can a function return another function’s result?

**Answer:** Yes
**Explanation:** Functions can call other functions and return their values.

### Q68. What is output?

```python
def f1():
    return 5
def f2():
    return f1()
print(f2())
```

**Answer:** 5
**Explanation:** f2 calls f1 and returns its value.

### Q69. Can functions return tuples and unpack them?

**Answer:** Yes
**Explanation:** Returned tuple can be unpacked into variables.

### Q70. What is output?

```python
def f():
    return 1,2
x,y=f()
print(x,y)
```

**Answer:** 1 2
**Explanation:** Tuple unpacking assigns values to x and y.

### Q71. Can a function return a string?

**Answer:** Yes
**Explanation:** Strings can be returned like any object.

### Q72. Can a function return None explicitly?

**Answer:** Yes
**Explanation:** `return None` is valid and often used to indicate no result.

### Q73. Can recursive functions return values?

**Answer:** Yes
**Explanation:** Recursive calls return values to their caller.

### Q74. What is output?

```python
def fact(n):
    if n==0:
        return 1
    return n*fact(n-1)
print(fact(4))
```

**Answer:** 24
**Explanation:** Recursive factorial calculation.

### Q75. Can return values be ignored?

**Answer:** Yes
**Explanation:** You can call a function without storing or using its returned value.

---

## Section 4: Local vs Global Variables (25 Questions)

### Q76. What is a local variable?

**Answer:** A) Declared inside function
**Explanation:** Local variables exist only within the function scope.

### Q77. What is a global variable?

**Answer:** B) Declared outside all functions
**Explanation:** Global variables exist throughout the program and can be accessed from anywhere.

### Q78. Which keyword modifies global variable inside function?

**Answer:** B) global
**Explanation:** `global` allows a function to modify a variable defined outside its scope.

### Q79. What is output?

```python
a=5
def f():
    a=10
f()
print(a)
```

**Answer:** 5
**Explanation:** Local `a` does not affect global `a`.

### Q80. What is output?

```python
a=5
def f():
    global a
    a=10
f()
print(a)
```

**Answer:** 10
**Explanation:** `global a` allows modification of global variable.

### Q81. Are local variables destroyed after function ends?

**Answer:** Yes
**Explanation:** Memory for local variables is released when function execution ends.

### Q82. Can local and global variables have the same name?

**Answer:** Yes, local inside function
**Explanation:** Local variable shadows global variable within function scope.

### Q83. Can functions access global variables without `global`?

**Answer:** Yes, for reading only
**Explanation:** Global variables can be read inside functions without `global` keyword.

### Q84. Can functions modify mutable global objects without `global`?

**Answer:** Yes
**Explanation:** Lists/dictionaries can be modified without `global` because the object reference is mutable.

### Q85. What is output?

```python
g=[1,2]
def f():
    g.append(3)
f()
print(g)
```

**Answer:** [1,2,3]
**Explanation:** List is mutable;
