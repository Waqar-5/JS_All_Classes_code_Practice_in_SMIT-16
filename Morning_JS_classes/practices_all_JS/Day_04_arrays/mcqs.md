# JavaScript Arrays: 90 MCQs with Answer Key

This README.md contains **90 multiple-choice questions** on JavaScript arrays, including adding, removing, and extracting elements. Each topic has **30 MCQs**, and the answer key is provided at the bottom for exam preparation.

---

## Topics Covered

15. Arrays (30 MCQs)
16. Arrays: Adding and Removing Elements (30 MCQs)
17. Arrays: Removing, Inserting, and Extracting Elements (30 MCQs)

---

## 15. Arrays (30 MCQs)

1. What is an array in JavaScript?

   * a) Single value variable
   * b) Ordered collection of values
   * c) Function
   * d) Object method

2. Array indices start at?

   * a) 1
   * b) 0
   * c) -1
   * d) 100

3. Can arrays store multiple data types?

   * a) Yes
   * b) No

4. How to declare an empty array?

   * a) []
   * b) ()
   * c) {}
   * d) ''

5. How to access the first element?

   * a) arr[0]
   * b) arr[1]
   * c) arr.first
   * d) arr[-1]

6. How to find array length?

   * a) arr.size
   * b) arr.length
   * c) arr.count
   * d) arr.total

7. Can arrays contain other arrays?

   * a) Yes
   * b) No

8. Last element access?

   * a) arr[arr.length]
   * b) arr[arr.length-1]
   * c) arr[-1]
   * d) arr.last

9. Example: ['a','b','c'] index of 'c'?

   * a) 1
   * b) 2
   * c) 3
   * d) 0

10. Arrays are mutable?

    * a) Yes
    * b) No

11. Can arrays hold functions?

    * a) Yes
    * b) No

12. Array declaration using constructor?

    * a) let arr = new Array();
    * b) let arr = Array[];
    * c) let arr = [];
    * d) let arr = new arr();

13. Non-integer index creates?

    * a) Array element
    * b) Property of array object

14. Array with mixed types example?

    * a) [1,'a',true]
    * b) [1 2 3]

15. Access out-of-bound index?

    * a) undefined
    * b) error

16. Arrays are zero-indexed?

    * a) True
    * b) False

17. Array copy without modifying original?

    * a) slice
    * b) splice

18. Array type?

    * a) Object
    * b) String

19. typeof []?

    * a) 'array'
    * b) 'object'

20. Can arrays have length property modified?

    * a) Yes
    * b) No

21. Array pop() removes?

    * a) First element
    * b) Last element

22. Array push() adds?

    * a) Start
    * b) End

23. Array shift() removes?

    * a) Start
    * b) End

24. Array unshift() adds?

    * a) Start
    * b) End

25. Access array inside object?

    * a) obj.arr
    * b) obj['arr']

26. Array indexOf(value)?

    * a) Returns index
    * b) Returns value

27. Array includes(value)?

    * a) Boolean
    * b) Index

28. Empty array length?

    * a) 0
    * b) undefined

29. Can array length shrink?

    * a) Yes
    * b) No

30. Best practice for arrays?

    * a) Use methods to manipulate
    * b) Directly modify string

---

## 16. Arrays: Adding and Removing Elements (30 MCQs)

1. Add element at end?

   * a) push()
   * b) unshift()

2. Add element at start?

   * a) push()
   * b) unshift()

3. Remove element from end?

   * a) pop()
   * b) shift()

4. Remove element from start?

   * a) pop()
   * b) shift()

5. push() returns?

   * a) New length
   * b) Removed element

6. pop() returns?

   * a) Removed element
   * b) New length

7. unshift() returns?

   * a) New length
   * b) Removed element

8. shift() returns?

   * a) Removed element
   * b) New length

9. push modifies array?

   * a) Yes
   * b) No

10. pop modifies array?

    * a) Yes
    * b) No

11. Adding multiple elements with push?

    * a) Yes
    * b) No

12. Adding multiple elements with unshift?

    * a) Yes
    * b) No

13. Removing multiple elements with pop?

    * a) No, only last

14. Removing multiple elements with shift?

    * a) No, only first

15. Can elements be added dynamically?

    * a) Yes

16. Can elements be removed dynamically?

    * a) Yes

17. pop() on empty array returns?

    * a) undefined

18. shift() on empty array returns?

    * a) undefined

19. push() performance for large arrays?

    * a) Fast

20. unshift() performance for large arrays?

    * a) Slower

21. Adding at end vs start?

    * a) push faster

22. Removing at end vs start?

    * a) pop faster

23. Can push accept multiple arguments?

    * a) Yes

24. Can unshift accept multiple arguments?

    * a) Yes

25. Array remains same after push of zero elements?

    * a) Yes

26. Array remains same after pop from empty?

    * a) Yes

27. Common mistake with shift?

    * a) Forgetting it re-indexes

28. Array after push and pop?

    * a) Modified correctly

29. Use unshift carefully because?

    * a) Slower for large arrays

30. Best practice for adding/removing?

    * a) Use push/pop for end, shift/unshift sparingly

---

## 17. Arrays: Removing, Inserting, and Extracting Elements (30 MCQs)

1. Remove element at index 1?

   * a) splice(1,1)
   * b) slice(1,1)

2. Insert element at index 2?

   * a) splice(2,0,'X')
   * b) slice(2,0,'X')

3. Replace element at index 3?

   * a) splice(3,1,'Y')

4. Extract portion 1-3?

   * a) slice(1,3)
   * b) splice(1,3)

5. splice modifies array?

   * a) Yes

6. slice modifies array?

   * a) No

7. indexOf(value) returns?

   * a) Index or -1

8. includes(value) returns?

   * a) Boolean

9. splice with deleteCount 0 inserts?

   * a) Yes

10. slice with start=end returns?

    * a) Empty array

11. Negative index in slice counts from?

    * a) End

12. Negative index in splice counts from?

    * a) End

13. Remove last two elements?

    * a) splice(-2,2)

14. Insert without deleting?

    * a) splice(index,0,value)

15. Replace multiple elements?

    * a) splice(index,count,values...)

16. Extract entire array?

    * a) slice()

17. Can slice accept negative indices?

    * a) Yes

18. Can splice accept negative indices?

    * a) Yes

19. splice returns?

    * a) Removed elements

20. slice returns?

    * a) New array

21. indexOf not found returns?

    * a) -1

22. includes not found returns?

    * a) false

23. Multiple insertions with splice?

    * a) Yes

24. Remove zero elements with splice?

    * a) Nothing removed

25. slice with one argument extracts?

    * a) From start to end

26. splice with one argument deletes?

    * a) From index to end

27. Combining slice and splice useful?

    * a) Yes

28. slice does shallow copy?

    * a) Yes

29. splice can delete from end with negative index?

    * a) Yes

30. Best practice?

    * a) Use splice for modification, slice for extraction

---

## Answer Key

### Arrays

1-b 2-b 3-a 4-a 5-a 6-b 7-a 8-b 9-b 10-a 11-a 12-a 13-b 14-a 15-a 16-a 17-a 18-a 19-b 20-a 21-a 22-b 23-a 24-a 25-a 26-a 27-a 28-a 29-a 30-a

### Arrays: Adding and Removing Elements

1-a 2-b 3-a 4-b 5-a 6-a 7-a 8-a 9-a 10-a 11-a 12-a 13-a 14-a 15-a 16-a 17-a 18-a 19-a 20-a 21-a 22-a 23-a 24-a 25-a 26-a 27-a 28-a 29-a 30-a

### Arrays: Removing, Inserting, and Extracting Elements

1-a 2-a 3-a 4-a 5-a 6-a 7-a 8-a 9-a 10-a 11-a 12-a 13-a 14-a 15-a 16-a 17-a 18-a 19-a 20-a 21-a 22-a 23-a 24-a 25-a 26-a 27-a 28-a 29-a 30-a

---

*End of JavaScript Arrays 90 MCQs with Answer Key*
