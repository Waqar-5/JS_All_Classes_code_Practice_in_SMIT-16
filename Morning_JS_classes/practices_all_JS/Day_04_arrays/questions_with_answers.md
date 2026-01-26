# JavaScript Arrays: 90 Questions with Detailed Answers

This README.md contains **90 detailed questions and answers** on JavaScript arrays, adding/removing elements, and extracting elements. Each topic has **30 questions with full answers** for exam preparation and deep understanding.

---

## Topics Covered

15. Arrays (30 Questions & Answers)
16. Arrays: Adding and Removing Elements (30 Questions & Answers)
17. Arrays: Removing, Inserting, and Extracting Elements (30 Questions & Answers)

---

## 15. Arrays (30 Questions & Answers)

1. **What is an array in JavaScript?**

   * **Answer:** An array is an ordered collection of values that can hold multiple data types, including numbers, strings, objects, and other arrays.

2. **How are array indices numbered?**

   * **Answer:** Array indices start at 0. The first element is at index 0, the second at index 1, and so on.

3. **Can arrays store multiple data types?**

   * **Answer:** Yes, arrays can hold numbers, strings, booleans, objects, and even other arrays.

4. **How to declare an empty array?**

   * **Answer:** `let arr = [];`

5. **How to access the first element of an array?**

   * **Answer:** Use `arr[0]`.

6. **How to find the length of an array?**

   * **Answer:** Use `arr.length`, which returns the total number of elements.

7. **Can arrays contain other arrays?**

   * **Answer:** Yes, arrays can be nested inside other arrays.

8. **How to access the last element of an array?**

   * **Answer:** Use `arr[arr.length - 1]`.

9. **Example: Find index of 'Cherry' in ['Apple','Banana','Cherry']**

   * **Answer:** `['Apple','Banana','Cherry'].indexOf('Cherry')` returns `2`.

10. **Are arrays mutable?**

    * **Answer:** Yes, arrays can be modified after creation.

11. **Can arrays hold functions?**

    * **Answer:** Yes, arrays can store functions as elements.

12. **How to declare an array using a constructor?**

    * **Answer:** `let arr = new Array();`

13. **What happens if a non-integer index is used?**

    * **Answer:** It creates a property on the array object, not a true element.

14. **Example of array with mixed types?**

    * **Answer:** `[1, 'a', true]`

15. **What if you access an out-of-bounds index?**

    * **Answer:** Returns `undefined`.

16. **Are arrays zero-indexed?**

    * **Answer:** Yes, the first element is at index 0.

17. **How to copy an array without modifying the original?**

    * **Answer:** Use `slice()`, e.g., `arr.slice()`.

18. **What is the type of an array?**

    * **Answer:** `typeof []` returns `'object'`, arrays are objects.

19. **How to access a multidimensional array element?**

    * **Answer:** Use multiple indices, e.g., `arr[0][1]`.

20. **Can array length be modified manually?**

    * **Answer:** Yes, setting `arr.length` can truncate or expand the array.

21. **What does `pop()` do?**

    * **Answer:** Removes the last element and returns it.

22. **What does `push()` do?**

    * **Answer:** Adds element(s) at the end and returns the new length.

23. **What does `shift()` do?**

    * **Answer:** Removes the first element and returns it.

24. **What does `unshift()` do?**

    * **Answer:** Adds element(s) at the start and returns the new length.

25. **How to access array inside an object?**

    * **Answer:** Use `obj.arr` or `obj['arr']`.

26. **What does `indexOf(value)` return?**

    * **Answer:** Returns the index of the value or -1 if not found.

27. **What does `includes(value)` return?**

    * **Answer:** Returns `true` if the value exists, otherwise `false`.

28. **Length of an empty array?**

    * **Answer:** `0`

29. **Can array length shrink?**

    * **Answer:** Yes, by setting `arr.length` to a smaller number.

30. **Best practice for arrays?**

    * **Answer:** Use array methods like `push`, `pop`, `splice` instead of manual loops for cleaner code.

---

## 16. Arrays: Adding and Removing Elements (30 Questions & Answers)

1. **Which method adds an element at the end?**

   * **Answer:** `push()`

2. **Which method adds an element at the start?**

   * **Answer:** `unshift()`

3. **Which method removes an element from the end?**

   * **Answer:** `pop()`

4. **Which method removes an element from the start?**

   * **Answer:** `shift()`

5. **What does `push()` return?**

   * **Answer:** The new length of the array.

6. **What does `pop()` return?**

   * **Answer:** The removed element.

7. **What does `unshift()` return?**

   * **Answer:** The new length of the array.

8. **What does `shift()` return?**

   * **Answer:** The removed element.

9. **Does `push()` modify the original array?**

   * **Answer:** Yes

10. **Does `pop()` modify the original array?**

    * **Answer:** Yes

11. **Can `push()` add multiple elements at once?**

    * **Answer:** Yes, e.g., `arr.push(1,2,3)`

12. **Can `unshift()` add multiple elements at once?**

    * **Answer:** Yes

13. **Can `pop()` remove multiple elements at once?**

    * **Answer:** No, only the last element

14. **Can `shift()` remove multiple elements at once?**

    * **Answer:** No, only the first element

15. **Can elements be added dynamically?**

    * **Answer:** Yes, using `push()` or `unshift()`

16. **Can elements be removed dynamically?**

    * **Answer:** Yes, using `pop()` or `shift()`

17. **What does `pop()` on an empty array return?**

    * **Answer:** `undefined`

18. **What does `shift()` on an empty array return?**

    * **Answer:** `undefined`

19. **Is `push()` fast for large arrays?**

    * **Answer:** Yes

20. **Is `unshift()` slower for large arrays?**

    * **Answer:** Yes, it re-indexes elements

21. **Best method to add at end of array?**

    * **Answer:** `push()`

22. **Best method to remove at end of array?**

    * **Answer:** `pop()`

23. **Can `push()` accept multiple arguments?**

    * **Answer:** Yes

24. **Can `unshift()` accept multiple arguments?**

    * **Answer:** Yes

25. **Array remains same after pushing zero elements?**

    * **Answer:** Yes

26. **Array remains same after popping from empty array?**

    * **Answer:** Yes

27. **Common mistake with `shift()`?**

    * **Answer:** Forgetting that it re-indexes elements

28. **Array after push and pop?**

    * **Answer:** Modified correctly, last element removed after push and pop

29. **Performance tip for `unshift()`?**

    * **Answer:** Avoid on very large arrays due to re-indexing

30. **Best practice for adding/removing elements?**

    * **Answer:** Use `push`/`pop` for end, `shift`/`unshift` sparingly at start

---

## 17. Arrays: Removing, Inserting, and Extracting Elements (30 Questions & Answers)

1. **How to remove an element at a specific index?**

   * **Answer:** Use `splice(index,1)`

2. **How to insert an element at a specific index without removing?**

   * **Answer:** `splice(index,0,value)`

3. **How to replace an element at a specific index?**

   * **Answer:** `splice(index,1,newValue)`

4. **How to extract a portion of array without modifying it?**

   * **Answer:** Use `slice(start,end)`

5. **Does `splice()` modify the original array?**

   * **Answer:** Yes

6. **Does `slice()` modify the original array?**

   * **Answer:** No

7. **What does `indexOf(value)` return if value exists?**

   * **Answer:** Index of value

8. **What does `indexOf(value)` return if value does not exist?**

   * **Answer:** `-1`

9. **What does `includes(value)` return?**

   * **Answer:** `true` if exists, `false` otherwise

10. **Can `splice()` insert multiple elements?**

    * **Answer:** Yes, `splice(index,0,val1,val2)`

11. **Can `slice()` accept negative indices?**

    * **Answer:** Yes, counts from end

12. **Can `splice()` accept negative indices?**

    * **Answer:** Yes

13. **What does `slice(start,end)` return if start=end?**

    * **Answer:** Empty array

14. **What does `splice()` return?**

    * **Answer:** Array of removed elements

15. **How to remove last two elements?**

    * **Answer:** `splice(-2,2)`

16. **Extract entire array copy?**

    * **Answer:** `slice()` with no arguments

17. **Can `slice()` accept one argument?**

    * **Answer:** Yes, extracts from start index to end

18. **Replace multiple elements using splice?**

    * **Answer:** `splice(index,count,newValues...)`

19. **Negative index in slice counts from?**

    * **Answer:** End of array

20. **Negative index in splice counts from?**

    * **Answer:** End of array

21. **Remove zero elements with splice?**

    * **Answer:** Nothing removed, can be used for insertion only

22. **Can slice extract nested array elements?**

    * **Answer:** Yes, but returns shallow copy

23. **Can splice delete from end using negative index?**

    * **Answer:** Yes

24. **slice vs splice difference?**

    * **Answer:** `slice` does not modify original, `splice` modifies original

25. **Best method to insert elements anywhere?**

    * **Answer:** `splice()`

26. **Best method to extract elements without changing array?**

    * **Answer:** `slice()`

27. **indexOf vs includes?**

    * **Answer:** `indexOf` returns index, `includes` returns boolean

28. **Can splice be used to replace and insert simultaneously?**

    * **Answer:** Yes

29. **slice performs shallow copy?**

    * **Answer:** Yes

30. **Exam tip for arrays?**

    * **Answer:** Understand when to use `slice` vs `splice` and remember indices start at 0

---

*End of JavaScript Arrays: 90 Questions with Detailed Answers*
