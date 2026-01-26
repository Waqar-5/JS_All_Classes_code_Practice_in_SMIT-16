# Detailed Questions and Answers: While Loops & Do...While Loops

This document contains **50 detailed questions with answers** on `while loops` and `do...while loops` in programming. Each topic has 25 questions with thorough explanations and code examples to help **crack exams, interviews, or assignments**.

---

## Section 1: While Loops (25 Questions)

1. **What is a while loop in programming?**

   **Answer:**
   A `while` loop repeatedly executes a block of code **as long as a specified condition is true**.

   ```c
   int i = 0;
   while(i < 5) {
       printf("%d\n", i);
       i++;
   }
   ```

   **Explanation:** The loop runs while `i` is less than 5.

2. **How is the syntax of a while loop structured?**

   **Answer:**

   ```c
   while(condition) {
       // statements
   }
   ```

   The `condition` is checked before each iteration.

3. **What happens if the while loop condition is false initially?**

   **Answer:**
   The loop body will **not execute even once**.

4. **How do you create an infinite while loop?**

   **Answer:**

   ```c
   while(1) {
       // infinite loop
   }
   ```

   Infinite loops run until manually terminated or a break occurs.

5. **What is the purpose of the `break` statement in a while loop?**

   **Answer:** It **immediately exits** the loop, regardless of the condition.

6. **What is the purpose of the `continue` statement in a while loop?**

   **Answer:** It **skips the current iteration** and jumps to the next loop evaluation.

7. **Explain pre-test nature of while loops.**

   **Answer:** The `while` loop evaluates the condition **before executing** the loop body. If false, the body never runs.

8. **How to sum numbers from 1 to 10 using a while loop?**

   **Answer:**

   ```c
   int sum = 0, i = 1;
   while(i <= 10) {
       sum += i;
       i++;
   }
   printf("Sum: %d", sum);
   ```

9. **Can while loops be nested?**

   **Answer:** Yes, one `while` loop can be placed inside another.

10. **What happens if you forget to increment in a while loop?**

    **Answer:** The loop may become **infinite**.

11. **How can you count the number of digits in a number using while loop?**

    **Answer:**

    ```c
    int num = 12345, count = 0;
    while(num != 0) {
        num /= 10;
        count++;
    }
    printf("Digits: %d", count);
    ```

12. **Can a while loop be used with boolean variables?**

    **Answer:** Yes, the condition can be any boolean expression.

13. **What is the difference between `while` and `for` loop?**

    **Answer:** `while` loop is **condition-based**, `for` loop is **counter-based**.

14. **How do you terminate a while loop prematurely?**

    **Answer:** Using `break` or setting the condition to false.

15. **How to print even numbers from 2 to 20 using while loop?**

    **Answer:**

    ```c
    int i = 2;
    while(i <= 20) {
        printf("%d\n", i);
        i += 2;
    }
    ```

16. **Can the condition in a while loop include multiple expressions?**

    **Answer:** Yes, using logical operators `&&`, `||`.

17. **What is loop control variable?**

    **Answer:** A variable that controls the number of iterations (e.g., `i` in `while(i<5)`).

18. **How to read numbers until user enters 0 using while loop?**

    **Answer:**

    ```c
    int num;
    scanf("%d", &num);
    while(num != 0) {
        // process number
        scanf("%d", &num);
    }
    ```

19. **Explain infinite loop dangers.**

    **Answer:** It can **freeze programs** or consume CPU endlessly if no exit condition is included.

20. **Can while loops have empty body?**

    **Answer:** Yes, often used with semicolon.

    ```c
    while(x--) ;
    ```

21. **How to reverse a number using while loop?**

    **Answer:**

    ```c
    int num = 123, rev = 0;
    while(num != 0) {
        rev = rev * 10 + num % 10;
        num /= 10;
    }
    printf("%d", rev);
    ```

22. **How to find factorial using while loop?**

    **Answer:**

    ```c
    int n=5, fact=1;
    while(n>0) {
        fact *= n;
        n--;
    }
    printf("%d", fact);
    ```

23. **Can you modify multiple variables in while loop condition?**

    **Answer:** Yes, using logical operators, but the loop checks **boolean result**.

24. **Explain do-while vs while loop?**

    **Answer:** `while` is **pre-test** (may not execute), `do-while` is **post-test** (executes at least once).

25. **How to read characters until 'q' is entered?**

    ```c
    char ch;
    scanf(" %c", &ch);
    while(ch != 'q') {
        scanf(" %c", &ch);
    }
    ```

---

## Section 2: Do...While Loops (25 Questions)

1. **What is a do...while loop?**

   **Answer:** A `do...while` loop executes **the body first, then checks the condition**.

   ```c
   int i = 0;
   do {
       printf("%d\n", i);
       i++;
   } while(i < 5);
   ```

2. **How is the syntax of do...while structured?**

   **Answer:**

   ```c
   do {
       // statements
   } while(condition);
   ```

3. **Difference between while and do...while?**

   **Answer:** `while` may not run if false; `do...while` **always runs at least once**.

4. **What is the purpose of do...while?**

   **Answer:** Used when you **want to execute loop body at least once**.

5. **Can do...while loop be infinite?**

   **Answer:** Yes, if condition is always true.

6. **How to terminate a do...while loop early?**

   **Answer:** Use `break` statement.

7. **How to skip current iteration in do...while loop?**

   **Answer:** Use `continue` statement.

8. **How to sum numbers from 1 to 10 using do...while?**

   **Answer:**

   ```c
   int sum=0, i=1;
   do {
       sum += i;
       i++;
   } while(i<=10);
   printf("Sum: %d", sum);
   ```

9. **Can do...while loop be nested?**

   **Answer:** Yes, one do...while inside another is allowed.

10. **What happens if condition is false initially?**

    **Answer:** The loop body still executes **once**.

11. **How to read user input until 0 is entered using do...while?**

    ```c
    int num;
    do {
        scanf("%d", &num);
    } while(num != 0);
    ```

12. **Can you use multiple statements in do...while?**

    **Answer:** Yes, any valid block can be inside `{ }`.

13. **How to print even numbers from 2 to 20 using do...while?**

    ```c
    int i=2;
    do {
        printf("%d\n", i);
        i += 2;
    } while(i<=20);
    ```

14. **What is loop control variable?**

    **Answer:** Variable used to control iterations, e.g., `i`.

15. **How to find factorial using do...while?**

    ```c
    int n=5, fact=1;
    do {
        fact *= n;
        n--;
    } while(n>0);
    printf("%d", fact);
    ```

16. **Can condition include logical expressions?**

    **Answer:** Yes, `&&`, `||` can be used.

17. **Explain infinite do...while loop.**

    **Answer:** Condition always true, body executes endlessly until `break`.

18. **Can do...while be used for menu-driven programs?**

    **Answer:** Yes, ensures menu is displayed **at least once**.

19. **Difference between continue in while vs do...while?**

    **Answer:** `continue` jumps to condition check in both.

20. **How to count digits using do...while?**

    ```c
    int num=12345, count=0;
    do {
        num /= 10;
        count++;
    } while(num!=0);
    printf("Digits: %d", count);
    ```

21. **How to reverse number using do...while?**

    ```c
    int num=123, rev=0;
    do {
        rev = rev*10 + num%10;
        num /= 10;
    } while(num != 0);
    printf("%d", rev);
    ```

22. **Can do...while loop have empty body?**

    **Answer:** Yes, but rarely used.

23. **How to read characters until 'x' is entered using do...while?**

    ```c
    char ch;
    do {
        scanf(" %c", &ch);
    } while(ch != 'x');
    ```

24. **Can multiple variables be updated in do...while loop?**

    **Answer:** Yes, inside body before condition evaluation.

25. **Best practice when using do...while loops?**

    **Answer:** Use when **at least one execution** is required, always ensure proper exit condition to avoid infinite loops.

---

This file can be downloaded and **edited** directly. It provides **complete beginner to advanced level coverage** for exams and practical use.
