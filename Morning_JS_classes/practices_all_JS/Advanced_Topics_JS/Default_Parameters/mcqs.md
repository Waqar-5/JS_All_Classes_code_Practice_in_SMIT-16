# JavaScript Default Parameters - MCQs

This file contains **50 Multiple Choice Questions (MCQs)** on JavaScript Default Parameters.  
It covers **basics, expressions, functions as defaults, interview questions**, and common exam questions.

---

## 📌 Table of Contents

1. [MCQs](#mcqs)  
2. [Answer Key](#answer-key)  

---

## 📌 MCQs

### 1️⃣ What is the output of the following code?  

```javascript
function greet(name = "Guest") {
  console.log(name);
}
greet();
A) undefined
B) null
C) Guest
D) Error

2️⃣ Which value triggers a default parameter?
A) null
B) undefined
C) 0
D) ""

3️⃣ Can a default parameter depend on a previous parameter?
A) Yes
B) No
C) Only if it's a function
D) Only in ES5

4️⃣ What is the output?
javascript
Copy code
function add(a, b = a + 2) { return a + b; }
console.log(add(3));
A) 5
B) 8
C) 6
D) 3

5️⃣ Does passing null trigger the default value?
A) Yes
B) No
C) Sometimes
D) Only in strict mode

6️⃣ Which ES version introduced default parameters?
A) ES5
B) ES6
C) ES2017
D) ES3

7️⃣ Can a default parameter be a function?
A) Yes
B) No
C) Only arrow functions
D) Only expressions

8️⃣ What is the output?
javascript
Copy code
function multiply(a, b = 2) { return a * b; }
console.log(multiply(5));
A) 5
B) 10
C) 25
D) undefined

9️⃣ Default parameters are applied only if the argument is …
A) null
B) undefined
C) 0
D) NaN

10️⃣ Which of the following is valid?
javascript
Copy code
function test(a = 5, b) { return a + b; }
A) Invalid syntax
B) Valid
C) Only in ES5
D) Only in strict mode

11️⃣ Can you combine default parameters with rest parameters?
A) Yes
B) No
C) Only if last parameter is default
D) Only in arrow functions

12️⃣ Output:
javascript
Copy code
function show(a = 10) { console.log(a); }
show(null);
A) 10
B) null
C) undefined
D) Error

13️⃣ Which is true about default parameters?
A) They replace undefined arguments
B) They replace null arguments
C) They replace 0 arguments
D) They replace empty strings

14️⃣ Output:
javascript
Copy code
function sum(a = 2, b = a) { return a + b; }
console.log(sum());
A) 2
B) 4
C) NaN
D) undefined

15️⃣ Can default parameter values be expressions?
A) Yes
B) No
C) Only constants
D) Only numbers

16️⃣ Output:
javascript
Copy code
function greet(name = "Guest") {
  return `Hello ${name}`;
}
console.log(greet("Alice"));
A) Hello Guest
B) Hello Alice
C) Hello undefined
D) Error

17️⃣ Can a default parameter be another parameter?
A) Yes
B) No
C) Only functions
D) Only objects

18️⃣ Output:
javascript
Copy code
function test(a = 5, b = a + 2) { return b; }
console.log(test(3));
A) 5
B) 2
C) 5
D) 5

(Explanation: b = a+2 → 3+2 = 5)

19️⃣ Default parameters cannot be applied in …
A) Functions
B) Arrow functions
C) Object methods
D) ES5

20️⃣ Output:
javascript
Copy code
function multiply(a = 2, b) { return a * b; }
console.log(multiply(undefined, 5));
A) 10
B) NaN
C) undefined
D) Error

21️⃣ Using a function as default value:
javascript
Copy code
function getRandom() { return 10; }
function show(num = getRandom()) { console.log(num); }
show();
Output?

A) undefined
B) 10
C) Error
D) NaN

22️⃣ Can default parameters be objects?
A) Yes
B) No
C) Only arrays
D) Only functions

23️⃣ Output:
javascript
Copy code
function print(arr = []) { console.log(arr.length); }
print([1,2,3]);
A) 0
B) 3
C) undefined
D) Error

24️⃣ Can default parameters be strings?
A) Yes
B) No
C) Only empty strings
D) Only constants

25️⃣ Output:
javascript
Copy code
function concat(a = "Hello", b = "World") { return a + " " + b; }
console.log(concat("Hi"));
A) Hi World
B) Hello Hi
C) Hi undefined
D) Hello World

26️⃣ Output:
javascript
Copy code
function test(a = 1, b = a * 2) { return b; }
console.log(test());
A) 1
B) 2
C) 0
D) undefined

27️⃣ Default parameter expressions are evaluated when …
A) Function is defined
B) Function is called
C) Always at page load
D) Never

28️⃣ Output:
javascript
Copy code
let x = 5;
function add(a = x) { return a; }
console.log(add());
A) undefined
B) 5
C) NaN
D) Error

29️⃣ Can default parameters be arrays?
A) Yes
B) No
C) Only objects
D) Only strings

30️⃣ Output:
javascript
Copy code
function test(a = [], b = a) { console.log(b); }
test();
A) undefined
B) []
C) null
D) Error

31️⃣ Default parameters are mostly used for …
A) Required arguments
B) Optional arguments
C) Constants only
D) Functions only

32️⃣ Output:
javascript
Copy code
function test(a = 10, b = 20) { return a + b; }
console.log(test(5));
A) 25
B) 30
C) 15
D) 5

33️⃣ Can you skip a parameter to use the default?
A) Yes, by passing undefined
B) No
C) Only in arrow functions
D) Only in ES5

34️⃣ Output:
javascript
Copy code
function test(a = 1, b = 2) { console.log(a, b); }
test(undefined, undefined);
A) 1 2
B) undefined undefined
C) 0 0
D) Error

35️⃣ Can default parameters be dynamic values?
A) Yes
B) No
C) Only constants
D) Only functions

36️⃣ Output:
javascript
Copy code
function add(a = 2, b = a*2) { return a+b; }
console.log(add(3, undefined));
A) 5
B) 6
C) 8
D) Error

37️⃣ Output:
javascript
Copy code
function greet(name = "Guest") { return `Hi ${name}`; }
console.log(greet(null));
A) Hi Guest
B) Hi null
C) Hi undefined
D) Error

38️⃣ Using default with rest parameters:
javascript
Copy code
function test(a = 1, ...rest) { console.log(a, rest); }
test(undefined, 2, 3);
Output?

A) 1 [2,3]
B) undefined [2,3]
C) 0 [2,3]
D) Error

39️⃣ Output:
javascript
Copy code
function test(a = 5) { console.log(a); }
test(0);
A) 5
B) 0
C) undefined
D) Error

40️⃣ Output:
javascript
Copy code
function multiply(a = 2, b = a*3) { return a*b; }
console.log(multiply(4));
A) 12
B) 16
C) 24
D) 20

41️⃣ Default parameter with expression using another parameter:
javascript
Copy code
function add(a, b = a+5) { return b; }
console.log(add(10));
A) 10
B) 15
C) 5
D) undefined

42️⃣ Output:
javascript
Copy code
function greet(name = "User") { console.log(`Hello ${name}`); }
greet();
A) Hello undefined
B) Hello User
C) Hello null
D) Error

43️⃣ Output:
javascript
Copy code
function sum(a = 0, b = 0) { return a+b; }
console.log(sum());
A) 0
B) undefined
C) NaN
D) Error

44️⃣ Output:
javascript
Copy code
function test(a = 10, b = a) { return b; }
console.log(test(5));
A) 10
B) 5
C) undefined
D) NaN

45️⃣ Output:
javascript
Copy code
function test(a = 5) { console.log(a); }
test(undefined);
A) 5
B) undefined
C) null
D) Error

46️⃣ Can default parameters use function calls?
A) Yes
B) No
C) Only arrow functions
D) Only constants

47️⃣ Output:
javascript
Copy code
function getRandom() { return 7; }
function test(num = getRandom()) { console.log(num); }
test();
A) undefined
B) 7
C) NaN
D) Error

48️⃣ Output:
javascript
Copy code
function multiply(a = 2, b = 3) { return a*b; }
console.log(multiply());
A) 5
B) 6
C) 0
D) Error

49️⃣ Default parameters are mainly used to …
A) Reduce code and handle optional arguments
B) Replace required arguments
C) Avoid numbers
D) Only for functions

50️⃣ Output:
javascript
Copy code
function concat(a = "Hi", b = "There") { return a + " " + b; }
console.log(concat("Hello"));
A) Hello There
B) Hi There
C) Hello undefined
D) Hi Hello

📌 Answer Key
1. C

2. B

3. A

4. B

5. B

6. B

7. A

8. B

9. B

10. B

11. A

12. B

13. A

14. B

15. A

16. B

17. A

18. D

19. D

20. B

21. B

22. A

23. B

24. A

25. A

26. B

27. B

28. B

29. A

30. B

31. B

32. A

33. A

34. A

35. A

36. B

37. B

38. A

39. B

40. C

41. B

42. B

43. A

44. B

45. A

46. A

47. B

48. B

49. A

50. A