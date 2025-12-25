# JavaScript Array reduce() MCQs — 30 Questions

> A comprehensive set of **30 MCQs** on `Array.prototype.reduce()`, covering easy, moderate, and difficult scenarios. Answers are provided at the end for self-testing.

---

## Easy Level (10 Questions)

1. What is the primary purpose of `reduce()`?

* a) To filter elements  
* b) To transform each element  
* c) To reduce an array to a single value  
* d) To sort an array  

2. What does `reduce()` always return?

* a) An array  
* b) A boolean  
* c) A single accumulated value  
* d) An object only  

3. How many arguments does the `reduce()` callback receive?

* a) 1  
* b) 2  
* c) 3  
* d) 4  

4. What is the correct order of callback parameters in `reduce()`?

* a) (value, accumulator, index, array)  
* b) (accumulator, currentValue, index, array)  
* c) (currentValue, accumulator, array, index)  
* d) (index, value, accumulator, array)  

5. What happens if no initial value is provided?

* a) It throws an error  
* b) Accumulator starts at 0  
* c) First element becomes the accumulator  
* d) reduce() does not execute  

6. What is the result of `[1,2,3].reduce((a,b)=>a+b)`?

* a) 3  
* b) 5  
* c) 6  
* d) Error  

7. Why is providing an initial value recommended?

* a) Improves speed  
* b) Prevents unexpected bugs  
* c) Makes code shorter  
* d) It is mandatory  

8. What is the accumulator value in the first iteration of `[1,2,3].reduce((acc,cur)=>acc+cur,10)`?

* a) 1  
* b) 10  
* c) 11  
* d) 13  

9. Can `reduce()` return an object?

* a) Yes  
* b) No  
* c) Only arrays  
* d) Only numbers  

10. Which method can replace many loop-based calculations?

* a) map()  
* b) filter()  
* c) reduce()  
* d) forEach()  

---

## Moderate Level (10 Questions)

11. Which real-world task suits `reduce()` best?

* a) DOM selection  
* b) UI animation  
* c) Calculating totals & analytics  
* d) API calls  

12. What is the time complexity of `reduce()`?

* a) O(1)  
* b) O(log n)  
* c) O(n)  
* d) O(n²)  

13. Can `reduce()` be used to group data?

* a) No  
* b) Yes  
* c) Only with map()  
* d) Only with filter()  

14. What is the output of `['a','b','c'].reduce((acc,val)=>acc+val)`?

* a) abc  
* b) a,b,c  
* c) Error  
* d) undefined  

15. Can `reduce()` handle nested arrays?

* a) No  
* b) Yes  
* c) Only shallow arrays  
* d) Only numbers  

16. Which of these can `reduce()` replace?

* a) map()  
* b) for loops for accumulation  
* c) filter()  
* d) sort()  

17. Can `reduce()` be chained with other array methods?

* a) Yes  
* b) No  
* c) Only map()  
* d) Only filter()  

18. Output: `[1,2,3,4].reduce((acc,val)=>acc*val,1)`

* a) 10  
* b) 24  
* c) 12  
* d) 0  

19. Can `reduce()` be used to flatten arrays?

* a) Yes  
* b) No  
* c) Only shallow arrays  
* d) Only numbers  

20. Difference between `map()` and `reduce()`?

* a) map transforms each element, reduce accumulates  
* b) map accumulates, reduce transforms  
* c) map filters, reduce sorts  
* d) map mutates original array, reduce does not  

---

## Difficult Level (10 Questions)

21. Output: `[1,2,3,4].reduce((acc,val)=>acc-val,10)`

* a) 0  
* b) 10  
* c) -10  
* d) Error  

22. Can `reduce()` generate HTML strings dynamically?

* a) Yes  
* b) No  
* c) Only React JSX  
* d) Only Node.js  

23. Which data type can `reduce()` NOT return?

* a) Number  
* b) String  
* c) Object  
* d) None, it can return any type  

24. Output: `['apple','banana','orange'].reduce((acc,val)=>acc+', '+val)`

* a) "apple, banana, orange"  
* b) ["apple","banana","orange"]  
* c) "applebananaorange"  
* d) Error  

25. Can `reduce()` replace nested loops for summing multi-dimensional arrays?

* a) Yes  
* b) No  
* c) Only with recursion  
* d) Only with forEach  

26. Which method is most similar to `reduce()` in concept?

* a) forEach  
* b) map  
* c) fold in functional programming  
* d) filter  

27. What happens if the array is empty and no initial value is provided?

* a) Returns 0  
* b) Returns undefined  
* c) Throws a TypeError  
* d) Returns null  

28. Can `reduce()` be used for asynchronous operations?

* a) Yes, with async/await  
* b) No  
* c) Only in Node.js  
* d) Only with Promises  

29. Can `reduce()` mutate the original array?

* a) Yes, always  
* b) No, never  
* c) Only if accumulator is object  
* d) Only with map  

30. Output: `[2,3,4].reduce((acc,val)=>acc+val,5)`

* a) 9  
* b) 14  
* c) 5  
* d) 12  

---

# ✅ Answer Key

1. c  
2. c  
3. d  
4. b  
5. c  
6. c  
7. b  
8. b  
9. a  
10. c  
11. c  
12. c  
13. b  
14. a  
15. b  
16. b  
17. a  
18. b  
19. a  
20. a  
21. c  
22. a  
23. d  
24. a  
25. a  
26. c  
27. c  
28. a  
29. c  
30. b
