# Functions in Python

## 1. Introduction to Functions

A **function** is a block of reusable code that performs a specific task. Functions help make code modular, readable, and maintainable.

### Key Points:

* Functions allow code reuse.
* They reduce repetition.
* Improve readability and maintainability.
* Can take input (parameters) and return output (values).

### Syntax:

```python
def function_name(parameters):
    # code block
    return value  # optional
```

### Example:

```python
def greet():
    print("Hello, welcome to Python!")

greet()  # Calling the function
```

**Output:**

```
Hello, welcome to Python!
```

---

## 2. Passing Data to Functions (Parameters)

Functions can accept input data using **parameters**.

### Key Points:

* Parameters are placeholders for the values you pass.
* You can pass multiple parameters separated by commas.
* Parameters can have default values.

### Syntax:

```python
def function_name(param1, param2=default_value):
    # code using param1 and param2
```

### Example:

```python
def greet_user(name):
    print(f"Hello, {name}!")

greet_user("Alice")
```

**Output:**

```
Hello, Alice!
```

### Example with Multiple Parameters:

```python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)
```

**Output:**

```
8
```

### Example with Default Parameters:

```python
def greet(name="User"):
    print(f"Hello, {name}!")

greet()          # Output: Hello, User!
greet("Alice")   # Output: Hello, Alice!
```

---

## 3. Returning Data from Functions

Functions can return data back to the caller using the `return` statement.

### Key Points:

* `return` sends data back to the part of the code that called the function.
* After `return`, the function execution stops.
* Can return multiple values using tuples.

### Syntax:

```python
def function_name():
    # code
    return value
```

### Example:

```python
def square(number):
    return number ** 2

result = square(4)
print(result)
```

**Output:**

```
16
```

### Returning Multiple Values:

```python
def arithmetic_operations(a, b):
    sum_ = a + b
    diff = a - b
    return sum_, diff

s, d = arithmetic_operations(10, 5)
print("Sum:", s, "Difference:", d)
```

**Output:**

```
Sum: 15 Difference: 5
```

---

## 4. Local vs Global Variables

Variables have **scope**, which determines where they can be accessed.

### 4.1 Local Variables

* Declared inside a function.
* Can only be used inside that function.
* Created when function is called, destroyed when function ends.

### Example:

```python
def my_function():
    local_var = 10  # Local variable
    print(local_var)

my_function()
# print(local_var)  # Error: local_var is not defined outside the function
```

### 4.2 Global Variables

* Declared outside all functions.
* Can be accessed anywhere in the code.
* Use `global` keyword inside a function to modify them.

### Example:

```python
global_var = 5  # Global variable

def modify_global():
    global global_var
    global_var += 10

print(global_var)  # Output: 5
modify_global()
print(global_var)  # Output: 15
```

### Key Points:

* Avoid overusing global variables; prefer passing data through parameters.
* Local variables are safer and avoid conflicts.

---

## 5. Advanced Function Concepts

### 5.1 Arbitrary Arguments `*args`

```python
def add_numbers(*args):
    return sum(args)

print(add_numbers(1, 2, 3, 4))  # Output: 10
```

### 5.2 Keyword Arguments `**kwargs`

```python
def greet(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

greet(name="Alice", age=25)
```

**Output:**

```
name: Alice
age: 25
```

### 5.3 Lambda Functions (Anonymous Functions)

```python
square = lambda x: x ** 2
print(square(6))  # Output: 36
```

### 5.4 Functions as First-Class Objects

* Functions can be passed as arguments to other functions.

```python
def greet(name):
    return f"Hello, {name}!"

def welcome(func, name):
    print(func(name))

welcome(greet, "Alice")  # Output: Hello, Alice!
```

---

## 6. Exam Tips & Key Takeaways

* Always remember syntax: `def name(parameters):`.
* Know the difference between parameters and arguments.
* Understand `return` vs `print`.
* Recognize local vs global variable scope.
* Practice default parameters, `*args`, `**kwargs`, and lambda functions.
* Be able to trace code execution for functions modifying global variables.
* Be ready to write functions that pass data in and out.

---

## 7. Summary Table

| Topic           | Key Concept      | Example                      |
| --------------- | ---------------- | ---------------------------- |
| Function        | Reusable block   | `def greet(): print("Hi")`   |
| Parameters      | Input values     | `def add(a, b): return a+b`  |
| Return          | Output value     | `def square(x): return x**2` |
| Local Variable  | Inside function  | `x=5` inside function        |
| Global Variable | Outside function | `global x` to modify         |
| *args           | Arbitrary args   | `def f(*args)`               |
| **kwargs        | Keyword args     | `def f(**kwargs)`            |
| Lambda          | Anonymous        | `lambda x: x**2`             |

---

## 8. Full Example Combining All Concepts

```python
# Global variable
global_counter = 0

def increment_counter(step=1):
    global global_counter
    global_counter += step
    return global_counter

def greet_users(*users):
    for user in users:
        print(f"Hello, {user}!")

# Using functions
print(increment_counter())          # Output: 1
print(increment_counter(5))         # Output: 6
greet_users("Alice", "Bob")

# Lambda usage
square = lambda x: x**2
print(square(7))                    # Output: 49
```

This `README.md` now covers all key points, examples, and explanations for **functions, parameters, return values, local vs global variables**, and advanced function concepts. It’s fully **editable** and exam-ready.
