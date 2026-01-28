# 📝 60 MCQs on Exceptions and Event Handling in JavaScript

> **Topics Covered:**
> 87. Exceptions: try and catch
> 88. Exceptions: throw
> 89. Handling events in JavaScript

This README contains **20 MCQs per topic** with answers at the bottom.

---

## 87️⃣ Exceptions: try and catch (20 MCQs)

1. What is the purpose of `try` block?

   * a) Execute code that may throw errors
   * b) Ignore errors
   * c) Halt the program
   * d) None

2. What does `catch` block do?

   * a) Defines the error
   * b) Executes code when error occurs in try block
   * c) Throws new error
   * d) Ignores errors

3. Which syntax is correct?

   * a) `try{} catch(){}`
   * b) `try{} catch(e){}`
   * c) `catch{} try{}`
   * d) `try{} finally{}`

4. Keyword to always execute a block?

   * a) try
   * b) finally
   * c) throw
   * d) catch

5. Can `try` exist without `catch`?

   * a) Yes
   * b) No
   * c) Only with throw
   * d) Only in ES6

6. Can `catch` exist without `try`?

   * a) Yes
   * b) No
   * c) Only in functions
   * d) Only in async

7. Object storing error info in catch?

   * a) error
   * b) e
   * c) exception
   * d) any identifier

8. What happens if error not caught?

   * a) Ignored
   * b) Program stops
   * c) Executes catch automatically
   * d) Warning shown

9. Can multiple catch blocks exist?

   * a) Yes
   * b) No
   * c) Only in ES6
   * d) Only with throw

10. Is finally block optional?

    * a) Yes
    * b) No
    * c) Must exist
    * d) Only for async

11. Can try-catch handle runtime errors?

    * a) Yes
    * b) No
    * c) Only compile-time
    * d) Only async errors

12. Can nested try-catch blocks exist?

    * a) Yes
    * b) No
    * c) Only in functions
    * d) Only in loops

13. How to rethrow an error?

    * a) throw e;
    * b) return e;
    * c) continue;
    * d) finally

14. Can try block contain multiple statements?

    * a) Yes
    * b) No
    * c) Only one
    * d) Only async code

15. Difference between syntax error and runtime error?

    * a) Syntax error caught at compile-time
    * b) Runtime error occurs during execution
    * c) Both a and b
    * d) None

16. Can finally block modify return value?

    * a) Yes
    * b) No
    * c) Only in ES6
    * d) Only async

17. Can try-catch handle asynchronous errors directly?

    * a) No, use promises/async-await
    * b) Yes
    * c) Only with setTimeout
    * d) Only in loops

18. Can catch variable be renamed?

    * a) Yes
    * b) No
    * c) Only 'err'
    * d) Only 'e'

19. Can multiple errors be handled separately?

    * a) Yes, inside catch with conditionals
    * b) No
    * c) Only one error per try
    * d) Only runtime errors

20. Best use of try-catch?

    * a) To safely execute code that may fail
    * b) To slow down program
    * c) To hide bugs
    * d) To throw syntax errors

---

## 88️⃣ Exceptions: throw (20 MCQs)

1. What does `throw` do?

   * a) Catches error
   * b) Generates custom error
   * c) Executes code normally
   * d) Ignores error

2. Can throw any type of value?

   * a) Yes
   * b) No
   * c) Only strings
   * d) Only Error objects

3. Syntax to throw custom error?

   * a) `throw new Error("msg")`
   * b) `throw Error("msg")`
   * c) `throw "msg"`
   * d) All correct

4. Where should throw be used?

   * a) Inside try
   * b) Anywhere in function
   * c) Only in catch
   * d) Only in loops

5. Can throw stop program?

   * a) Yes if uncaught
   * b) No
   * c) Only in try
   * d) Only in async

6. Can throw be used for user-defined errors?

   * a) Yes
   * b) No
   * c) Only for strings
   * d) Only in ES6

7. Difference between throw and return?

   * a) Throw generates error
   * b) Return ends function
   * c) Both a and b
   * d) None

8. Can throw objects other than Error?

   * a) Yes, e.g., string, number, object
   * b) No
   * c) Only Error objects
   * d) Only arrays

9. Throw inside catch?

   * a) Rethrows the error
   * b) Ignored
   * c) Only logged
   * d) Stops execution

10. Throw without try?

    * a) Yes, but uncaught errors stop program
    * b) No
    * c) Only in async
    * d) Only in loops

11. Can throw create custom error classes?

    * a) Yes
    * b) No
    * c) Only string messages
    * d) Only Error class

12. Throw vs error object?

    * a) Throw generates, error object contains details
    * b) Throw catches
    * c) Same
    * d) Only in async

13. Can throw stop loops?

    * a) Yes
    * b) No
    * c) Only with break
    * d) Only inside function

14. Throw with finally?

    * a) finally executes even after throw
    * b) finally ignored
    * c) only executed if no throw
    * d) only async

15. Throw best practice?

    * a) Use for expected errors
    * b) Throw everything
    * c) Never use
    * d) Only in loops

16. Can throw be conditional?

    * a) Yes, inside if statements
    * b) No
    * c) Only in try
    * d) Only async

17. Multiple throw statements?

    * a) Allowed
    * b) Not allowed
    * c) Only one per function
    * d) Only inside loops

18. Throw string vs Error object?

    * a) Error object preferred for stack trace
    * b) Strings are enough
    * c) Only numbers
    * d) Only arrays

19. Throw in async function?

    * a) Can use, should handle with try/catch or promise
    * b) Not allowed
    * c) Stops function silently
    * d) Only with await

20. Throw in constructor?

    * a) Can throw exceptions
    * b) Not allowed
    * c) Only with return
    * d) Only in async

---

## 89️⃣ Handling events in JavaScript (20 MCQs)

1. Which method attaches event handler?

   * a) addEvent()
   * b) addEventListener()
   * c) onEvent()
   * d) attachEvent()

2. Inline HTML event attribute?

   * a) `<button onclick="func()">`
   * b) `<button addEvent="func()">`
   * c) `<button handleEvent="func()">`
   * d) `<button bind="func()">`

3. Event object contains?

   * a) Event type
   * b) Target element
   * c) Timestamp
   * d) All of the above

4. Which event triggers on key press?

   * a) click
   * b) keypress
   * c) change
   * d) submit

5. How to remove event listener?

   * a) removeEventListener()
   * b) deleteEventListener()
   * c) detachEvent()
   * d) removeEvent()

6. Event bubbling occurs when?

   * a) Event propagates from child to parent
   * b) Parent triggers first
   * c) Event ignored
   * d) Only in forms

7. stopPropagation() does?

   * a) Stops event from bubbling
   * b) Stops default action
   * c) Stops loop
   * d) Stops execution

8. preventDefault() does?

   * a) Stops default browser action
   * b) Stops event bubbling
   * c) Stops function
   * d) Stops program

9. Event delegation is?

   * a) Adding one listener to parent for child elements
   * b) Multiple listeners
   * c) Removing events
   * d) Only for async

10. addEventListener supports multiple events?

    * a) True
    * b) False

11. capture phase?

    * a) Event triggers parent to child
    * b) Child to parent
    * c) Only forms
    * d) Only clicks

12. Once option in addEventListener?

    * a) Executes listener only once
    * b) Multiple times
    * c) Only in ES5
    * d) Only async

13. Passive option?

    * a) Improves scroll performance
    * b) Stops propagation
    * c) Logs event
    * d) Prevents default

14. Mouseover vs mouseenter?

    * a) mouseover bubbles, mouseenter does not
    * b) mouseenter bubbles
    * c) Both same
    * d) Only in CSS

15. Keyboard events?

    * a) keydown, keypress, keyup
    * b) click
    * c) submit
    * d) load

16. Form events?

    * a) submit, change, input
    * b) click only
    * c) load only
    * d) hover

17. Async events?

    * a) Promises, async-await, setTimeout, fetch
    * b) Only click
    * c) Only load
    * d) Only forms

18. Event target vs currentTarget?

    * a) target = actual element clicked, currentTarget = listener attached element
    * b) Same
    * c) target parent only
    * d) currentTarget parent only

19. removeEventListener requires?

    * a) Same function reference used in addEventListener
    * b) New function
    * c) String name
    * d) ID only

20. Custom events?

    * a) Can be created with `new CustomEvent()`
    * b) Cannot
    * c) Only with built-in events
    * d) Only async

---

## ✅ Answer Key

### 87️⃣ Try and Catch

1.a, 2.b, 3.b, 4.b, 5.a, 6.b, 7.d, 8.b, 9.b, 10.a, 11.a, 12.a, 13.a, 14.a, 15.c, 16.a, 17.a, 18.a, 19.a, 20.a

### 88️⃣ Throw

1.b, 2.a, 3.d, 4.b, 5.a, 6.a, 7.c, 8.a, 9.a, 10.a, 11.a, 12.a, 13.a, 14.a, 15.a, 16.a, 17.a, 18.a, 19.a, 20.a

### 89️⃣ Handling Events

1.b, 2.a, 3.d, 4.b, 5.a, 6.a, 7.a, 8.a, 9.a, 10.a, 11.a, 12.a, 13.a, 14.a, 15.a, 16.a, 17.a, 18.a, 19.a, 20.a
