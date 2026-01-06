JavaScript find() Method – 30 MCQs
1. What does the find() method return if no element matches the condition?

a) null
b) undefined
c) 0
d) false

2. Which of the following best describes find()?

a) Returns all elements matching a condition
b) Returns the first element that satisfies the condition
c) Modifies the original array
d) Deletes the first element

3. What is the type of value returned by find()?

a) Boolean
b) Element from the array
c) Array of elements
d) String

4. Which method should be used to get all matching elements?

a) find()
b) filter()
c) map()
d) forEach()

5. Does find() modify the original array?

a) Yes
b) No
c) Only sometimes
d) Depends on the callback

6. What parameters does the callback of find() receive?

a) element, index, array
b) element only
c) element, array only
d) index only

7. What will the following return?
const arr = [10, 20, 30, 40];
arr.find(x => x > 25);


a) 25
b) 30
c) 40
d) undefined

8. What happens if multiple elements match the condition in find()?

a) Returns an array of all matches
b) Returns the first matching element
c) Returns the last matching element
d) Throws an error

9. Which of the following is correct syntax for find()?

a) arr.find(element => element > 5)
b) arr.find(element > 5)
c) arr.find(element => element = 5)
d) arr.find(element)

10. Can find() be used on arrays of objects?

a) Yes
b) No
c) Only on arrays of strings
d) Only on numbers

11. What will the following code return?
const arr = [1, 2, 3, 4];
const result = arr.find(x => x % 2 === 0);
console.log(result);


a) 1
b) 2
c) [2,4]
d) undefined

12. Which array method is similar to find() but returns all matching elements?

a) map()
b) filter()
c) forEach()
d) reduce()

13. Can the find() method take a second parameter for this?

a) Yes
b) No
c) Only in strict mode
d) Only with arrow functions

14. What will the following return?
const arr = ["apple","banana","cherry"];
arr.find(fruit => fruit.length > 6);


a) "banana"
b) ["banana","cherry"]
c) "cherry"
d) undefined

15. What is the return value of find() when the array is empty?

a) null
b) undefined
c) []
d) Error

16. Can you use find() with arrow functions?

a) Yes, highly recommended
b) No
c) Only with ES5 function syntax
d) Only with strings

17. Which of the following is a common use case of find()?

a) Search user by ID
b) Filter multiple items by condition
c) Loop through an array without returning anything
d) Transform array elements

18. What will the following code return?
const arr = [5, 10, 15, 20];
arr.find((el, i) => i === 2);


a) 5
b) 10
c) 15
d) 20

19. How does find() differ from forEach()?

a) find() can stop at first match, forEach() cannot
b) forEach() can stop at first match, find() cannot
c) Both stop at first match
d) Neither stops iteration

20. What is the result of this code?
const arr = [1, 3, 5];
arr.find(x => x % 2 === 0);


a) 2
b) 0
c) undefined
d) Error

21. Can find() be used in nested arrays?

a) Yes, with proper callback
b) No
c) Only with strings
d) Only with numbers

22. Which of the following is true?

a) find() always returns a Boolean
b) find() always modifies the array
c) find() returns the first element that satisfies the condition
d) find() returns all elements

23. What will the following return?
const arr = [{id:1},{id:2},{id:3}];
arr.find(o => o.id === 2);


a) {id:1}
b) {id:2}
c) {id:3}
d) undefined

24. Which is a limitation of find()?

a) Can’t work with objects
b) Returns only the first match
c) Modifies the array
d) Can’t be used in ES6

25. What is the difference between find() and filter()?

a) find() returns the first match, filter() returns all matches
b) find() returns all matches, filter() returns first match
c) Both return first match
d) Both return all matches

26. Which callback return value will select an element?

a) true
b) false
c) undefined
d) null

27. Can find() return an object from an array of objects?

a) Yes
b) No
c) Only if the object has a string property
d) Only with numbers

28. What will this return?
const arr = [1, 2, 3, 4];
arr.find(x => x > 2);


a) 2
b) 3
c) 4
d) [3,4]

29. Can find() be chained with map() or filter()?

a) Yes
b) No
c) Only with numbers
d) Only with strings

30. When is find() most useful?

a) To search a single element in an array
b) To modify the array
c) To loop through array only
d) To sort an array

✅ Answer Key
Q#	Answer
1	b
2	b
3	b
4	b
5	b
6	a
7	b
8	b
9	a
10	a
11	b
12	b
13	a
14	a
15	b
16	a
17	a
18	c
19	a
20	c
21	a
22	c
23	b
24	b
25	a
26	a
27	a
28	b
29	a
30	a