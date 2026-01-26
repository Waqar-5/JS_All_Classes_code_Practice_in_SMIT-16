# MCQs on While Loops and Do...While Loops

This document contains **50 multiple choice questions (MCQs)** on **while loops** and **do...while loops** in programming, designed to help you understand, revise, and crack exams and interviews.

---

## Section 1: While Loops (25 MCQs)

1. What is a `while` loop used for?
   A) To execute code only once
   B) To execute a block repeatedly as long as a condition is true
   C) To define a function
   D) To declare variables

2. What is the syntax to start a `while` loop?
   A) `while(condition) { }`
   B) `loop while(condition)`
   C) `do while(condition)`
   D) `if(condition) while { }`

3. What happens if the condition in a `while` loop is initially false?
   A) The loop executes once
   B) The loop executes infinitely
   C) The loop does not execute at all
   D) Error occurs

4. How can you exit a `while` loop prematurely?
   A) Using `break`
   B) Using `continue`
   C) Using `stop`
   D) Using `exit()`

5. What does the `continue` statement do inside a `while` loop?
   A) Exits the loop
   B) Skips current iteration and continues with next
   C) Ends the program
   D) Reverses the loop

6. What will the following code print?

```python
x = 1
while x < 4:
    print(x)
    x += 1
```

A) 1 2 3 4
B) 1 2 3
C) 1 2
D) 0 1 2 3

7. Can a `while` loop be nested inside another `while` loop?
   A) Yes
   B) No
   C) Only once
   D) Only in Python 3

8. Which of the following is an infinite `while` loop?
   A) `while(True): pass`
   B) `while(False): pass`
   C) `while(x==0): break`
   D) `while(x<5): x+=1`

9. What is the default behavior if `break` is not used in a `while` loop?
   A) Loop never stops
   B) Loop stops only when condition becomes false
   C) Program crashes
   D) Loop executes once

10. What is the output of this code?

```python
count = 5
while count > 0:
    print(count)
    count -= 2
```

A) 5 3 1
B) 5 4 3 2 1
C) 5 3
D) 0 2 4

11. Which is correct to create a `while` loop that executes at least once?
    A) Use `do...while`
    B) Use `while(True)`
    C) Use `while(condition)`
    D) Use `for` loop

12. What is the importance of the increment/decrement statement inside a `while` loop?
    A) To control the loop termination
    B) To print values
    C) To define the loop variable
    D) To pause the loop

13. Can a `while` loop exist without a body?
    A) Yes, using `pass`
    B) No
    C) Only in C++
    D) Only if condition is true

14. What will this loop do?

```python
x = 0
while x < 5:
    x += 1
```

A) Infinite loop
B) Executes 5 times and stops
C) Executes once
D) Error

15. Can `while` loops be used for input validation?
    A) Yes
    B) No
    C) Only for numbers
    D) Only in C++

16. How to skip even numbers in a `while` loop?

```python
num = 0
while num < 5:
    num += 1
    if num % 2 == 0:
        continue
    print(num)
```

A) Prints 1 3 5
B) Prints 2 4
C) Prints 0 2 4
D) Prints 1 2 3 4 5

17. What is a common mistake that can cause an infinite `while` loop?
    A) Forgetting increment/decrement
    B) Using `break`
    C) Using `continue`
    D) Printing values

18. Can `while` loops be used to iterate over a list?
    A) Yes, using index
    B) No, only `for` loop
    C) Only with `enumerate`
    D) Only in Python 2

19. What is the difference between `while` and `for` loops?
    A) `while` loops run until a condition is false, `for` loops iterate over a sequence
    B) `for` loops are faster
    C) `while` loops cannot be nested
    D) `for` loops require break

20. What happens if you remove the condition in a `while` loop?
    A) Syntax error
    B) Infinite loop
    C) Executes once
    D) Skips loop

21. Is it necessary to initialize the loop control variable before a `while` loop?
    A) Yes
    B) No
    C) Only in C++
    D) Only if using break

22. Can `while` loops be used for menu-driven programs?
    A) Yes
    B) No
    C) Only with `for` loop
    D) Only for numbers

23. Which keyword ends the loop immediately?
    A) `break`
    B) `stop`
    C) `exit`
    D) `return`

24. Can a `while` loop have an else block?
    A) Yes, executes if loop condition becomes false
    B) No
    C) Only in Python 2
    D) Only if break is used

25. What is the output?

```python
x = 3
while x:
    print(x)
    x -= 1
```

A) 3 2 1
B) 3 2 1 0
C) 1 2 3
D) 0 1 2 3

---

## Section 2: Do...While Loops (25 MCQs)

1. What is a `do...while` loop?
   A) Executes block once and then checks condition
   B) Executes block only if condition is true initially
   C) Declares variables
   D) None of the above

2. Which language supports native `do...while` loops?
   A) Python
   B) C/C++/Java
   C) HTML
   D) SQL

3. What is the key difference between `while` and `do...while`?
   A) `do...while` executes at least once
   B) `while` executes at least once
   C) Both are same
   D) `do...while` cannot have break

4. How do you write a `do...while` loop in C?

````c
// syntax question```
   A) do { /* code */ } while(condition);
   B) while(condition) { /* code */ }
   C) loop do { /* code */ }
   D) do { /* code */ }

5. When is the condition evaluated in `do...while`?
   A) After executing loop body
   B) Before executing loop body
   C) Both before and after
   D) Never

6. Can `do...while` loop become infinite?
   A) Yes, if condition always true
   B) No
   C) Only if break used
   D) Only in Python

7. Can `break` and `continue` be used in `do...while` loops?
   A) Yes
   B) No
   C) Only break
   D) Only continue

8. What is the output?
```c
int x = 0;
do {
    printf("%d", x);
    x++;
} while(x < 3);
````

A) 0 1 2
B) 1 2 3
C) 0 1 2 3
D) 1 2 3 4

9. Can `do...while` loops be nested?
   A) Yes
   B) No
   C) Only one level
   D) Only in C++

10. What is a common use of `do...while` loops?
    A) Input validation
    B) Variable declaration
    C) Function definition
    D) Conditional statements

11. How many times does a `do...while` loop execute if condition is false initially?
    A) Once
    B) Zero
    C) Twice
    D) Infinite

12. Can `do...while` loops be used to create menus?
    A) Yes
    B) No
    C) Only with break
    D) Only with if

13. Which keyword exits a `do...while` loop immediately?
    A) break
    B) continue
    C) stop
    D) exit

14. Can `do...while` loops exist without a body?
    A) Yes, using semicolon
    B) No
    C) Only in Python
    D) Only in Java

15. What is the output?

```c
int x = 5;
do {
    printf("%d", x);
    x--;
} while(x > 2);
```

A) 5 4 3
B) 5 4 3 2
C) 5 4
D) 2 3 4 5

16. Can you skip iterations in `do...while` loops?
    A) Yes, using continue
    B) No
    C) Only with break
    D) Only in Python

17. What is the correct structure?

```c
do {
    // statements
} while(condition);
```

A) Correct
B) Incorrect
C) Only in Java
D) Only in C++

18. Can a `do...while` loop execute zero times?
    A) No
    B) Yes
    C) Only with break
    D) Only in Python

19. Which loop guarantees at least one execution?
    A) do...while
    B) while
    C) for
    D) foreach

20. What happens if `while` condition is true at end?
    A) Loop repeats
    B) Loop stops
    C) Error
    D) Loop breaks automatically

21. Can variables inside `do...while` be accessed outside?
    A) No, unless declared globally
    B) Yes
    C) Only in Python
    D) Only if static

22. Can `do...while` loops be used with user input?
    A) Yes, for repeated prompts
    B) No
    C) Only numbers
    D) Only strings

23. Which is true about `do...while`?
    A) Executes at least once, then checks condition
    B) May execute zero times
    C) Cannot use break
    D) Same as while loop

24. What is the output?

```c
int x = 1;
do {
    printf("%d", x);
    x++;
} while(x < 2);
```

A) 1
B) 1 2
C) 2
D) 0 1

25. Can `do...while` loops be used for calculations?
    A) Yes, repeated until condition met
    B) No
    C) Only in Java
    D) Only in Python

---

## Answer Key

### Section 1: While Loops (1–25)

B
A
C
A
B
B
A
A
B
A
A
A
A
B
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
A

### Section 2: Do...While Loops (26–50)

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
