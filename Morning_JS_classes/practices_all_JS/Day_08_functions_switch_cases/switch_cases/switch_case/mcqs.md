# MCQs on Switch Statements (Start & Complete)

This document contains **50 multiple choice questions (MCQs)** on switch statements, covering how to start and complete them. It is designed to help you **crack exams and interviews**.

---

## Section 1: Switch Statements - Starting (1–25)

1. What keyword starts a switch statement in most languages?
   A) if
   B) switch
   C) case
   D) loop

2. Which language does **not** have a built-in switch statement?
   A) Java
   B) C++
   C) Python
   D) JavaScript

3. What type of values can a switch condition evaluate?
   A) Only integers
   B) Integers and strings (depends on language)
   C) Only strings
   D) None

4. Which symbol follows the switch keyword?
   A) {}
   B) ()
   C) []
   D) <>

5. Can a switch statement be nested inside another switch?
   A) Yes
   B) No
   C) Only in Python
   D) Only in JavaScript

6. What is the purpose of a switch statement?
   A) Loop repeatedly
   B) Conditionally execute code based on a value
   C) Store multiple variables
   D) None

7. What is the first step when writing a switch statement?
   A) Define cases
   B) Write break statements
   C) Evaluate the switch expression
   D) Write the default case

8. Which of the following is valid syntax for starting a switch in C++?
   A) `switch {expression}`
   B) `switch(expression)`
   C) `switch[expression]`
   D) `switch<expression>`

9. Can switch statements evaluate boolean values in Java?
   A) Yes
   B) No
   C) Only with integers
   D) Only with strings

10. What is mandatory inside a switch block?
    A) break
    B) case
    C) default
    D) All of the above

11. What happens if the switch expression doesn't match any case?
    A) Error
    B) Execute default case if present
    C) Continue execution outside
    D) A and B

12. In JavaScript, can the switch expression be a string?
    A) Yes
    B) No
    C) Only numbers
    D) Only boolean

13. Which of the following is **not** allowed as a case value in C++?
    A) 1
    B) 2
    C) 3.5
    D) 'a'

14. Can you declare variables inside a switch block?
    A) Yes
    B) No
    C) Only in default
    D) Only constants

15. How do you terminate a case to avoid fall-through?
    A) end
    B) break
    C) continue
    D) return

16. Is it possible to have multiple case labels for a single block?
    A) Yes
    B) No
    C) Only in Python
    D) Only in JavaScript

17. Which keyword handles unmatched cases?
    A) unmatched
    B) default
    C) else
    D) final

18. Can switch expressions have complex calculations?
    A) Yes, depends on language
    B) No
    C) Only integers
    D) Only booleans

19. Can switch statements be used with enums in Java?
    A) Yes
    B) No
    C) Only integers
    D) Only strings

20. Which of the following is TRUE about switch?
    A) It can replace multiple if-else statements
    B) Cannot replace if-else
    C) Always faster than if-else
    D) None

21. Which statement correctly starts a switch in JavaScript?
    A) `switch {x}`
    B) `switch(x)`
    C) `switch[x]`
    D) `switch<x>`

22. Can switch statements use floating point values as case labels in Java?
    A) Yes
    B) No
    C) Only if cast to int
    D) Only in Python

23. What happens if you omit the default case?
    A) Compile error
    B) Runtime error
    C) Switch executes nothing if no match
    D) Automatically creates default

24. Can switch statements be empty?
    A) Yes, syntactically
    B) No
    C) Only with default
    D) Only with one case

25. Which languages support switch statements? (choose all that apply)
    A) Java, C++, JavaScript
    B) Python
    C) HTML
    D) SQL

---

## Section 2: Switch Statements - Completing (26–50)

26. How do you complete a case block?
    A) Write break or return
    B) Leave it empty
    C) Only default ends it
    D) Use end

27. What happens if you forget break in C++?
    A) Error
    B) Fall-through to next case
    C) Automatic break
    D) Switch exits

28. Can default appear anywhere in the switch?
    A) Yes
    B) No, only last
    C) Only first
    D) Only middle

29. Can a single break exit the entire switch?
    A) Yes
    B) No
    C) Only in Python
    D) Only in JavaScript

30. Is it necessary to have break after default?
    A) Yes
    B) No, as it is last
    C) Only in C++
    D) Only in Java

31. What happens in JavaScript if break is omitted?
    A) Error
    B) Execute next case(s) until break
    C) Switch ends
    D) Runtime exception

32. Can a case block contain multiple statements?
    A) Yes
    B) No
    C) Only one statement
    D) Only default

33. How do you handle multiple cases executing same block?
    A) Write block after each case
    B) Use comma-separated cases (not allowed in most languages)
    C) Use fall-through intentionally
    D) All above

34. What is the output?

```c++
switch(2){
  case 1: cout << "One";
  case 2: cout << "Two";
  case 3: cout << "Three";
}
```

A) One
B) Two
C) TwoThree
D) TwoThree

35. How do you exit a switch after executing a case?
    A) break
    B) continue
    C) exit
    D) return

36. Can you have multiple default labels?
    A) No
    B) Yes
    C) Only in Python
    D) Only in JavaScript

37. Can a switch contain nested switch?
    A) Yes
    B) No
    C) Only in Java
    D) Only in C++

38. Is it valid to have empty case statements?
    A) Yes
    B) No
    C) Only default
    D) Only last case

39. What happens if all cases are skipped?
    A) Nothing executes unless default present
    B) Error
    C) Runtime exception
    D) Automatic break

40. Can switch statements return values?
    A) Yes, through break or return in block
    B) No
    C) Only in Python
    D) Only with functions

41. What is the purpose of break in switch?
    A) Exit the switch
    B) Skip next case
    C) End program
    D) Loop again

42. Can switch statements be used with strings in Java?
    A) Yes, Java 7+
    B) No
    C) Only numbers
    D) Only booleans

43. What is the correct way to close a switch block?
    A) `}`
    B) `)`
    C) `]`
    D) `end`

44. How do you combine multiple case labels for one block in C++?
    A) Write one after another without break
    B) Use comma
    C) Use colon
    D) Not allowed

45. Can switch statement code block contain loops?
    A) Yes
    B) No
    C) Only one loop
    D) Only in default

46. Which statement is TRUE?
    A) Fall-through occurs if break is missing
    B) Break is optional but recommended
    C) Default can be anywhere but usually last
    D) All above

47. What happens if break is placed inside an inner loop of a case?
    A) Breaks only the loop
    B) Breaks switch
    C) Breaks program
    D) Error

48. How do you write a default case?
    A) default:
    B) else:
    C) default()
    D) fallback:

49. Can switch statements throw exceptions inside a case?
    A) Yes
    B) No
    C) Only default
    D) Only in Java

50. What is best practice when completing a switch?
    A) Always use break unless intentional fall-through
    B) Skip break for simplicity
    C) Never use default
    D) Only use one case

---

## Answer Key

**Section 1: Switch Statements - Starting (1–25)**

1. B
2. C
3. B
4. B
5. A
6. B
7. C
8. B
9. B
10. B
11. B
12. A
13. C
14. A
15. B
16. A
17. B
18. A
19. A
20. A
21. B
22. B
23. C
24. A
25. A

**Section 2: Switch Statements - Completing (26–50)**

26. A
27. B
28. A
29. A
30. B
31. B
32. A
33. C
34. D
35. A
36. A
37. A
38. A
39. A
40. A
41. A
42. A
43. A
44. A
45. A
46. D
47. A
48. A
49. A
50. A
