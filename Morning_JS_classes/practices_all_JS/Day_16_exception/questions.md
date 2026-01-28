# 📝 60 Detailed Questions & Answers on Exceptions and Event Handling in JavaScript

> **Topics Covered:**
> 87. Exceptions: try and catch
> 88. Exceptions: throw
> 89. Handling events in JavaScript

This README contains **20 detailed Q&A per topic** with tricky insights, tips, and memory tricks to master these concepts.

---

## 87️⃣ Exceptions: try and catch (20 Q&A)

1. **Q:** What is the purpose of the `try` block?
   **A:** To execute code that may throw errors. **Trick:** Think of `try` as “test run”—it attempts code safely.

2. **Q:** What does the `catch` block do?
   **A:** Executes when an error occurs in `try`. **Tip:** Catch = safety net.

3. **Q:** Can `try` exist without `catch`?
   **A:** Yes, if used with `finally`. **Memory Tip:** Try + finally = guaranteed execution.

4. **Q:** Can `catch` exist without `try`?
   **A:** No, catch must follow a try block.

5. **Q:** What is the keyword for code that always executes?
   **A:** `finally`. **Trick:** Always runs, like closing a door.

6. **Q:** How to access error info in `catch`?
   **A:** Use the identifier: `catch(e) { console.log(e.message) }`.

7. **Q:** Can multiple try-catch blocks be nested?
   **A:** Yes, nested try-catch helps handle complex scenarios.

8. **Q:** Difference between runtime and syntax errors?
   **A:** Syntax errors prevent code execution; runtime errors occur during execution.

9. **Q:** Can finally block modify return values?
   **A:** Yes, it can override returns in try/catch. **Tip:** Watch out for unexpected results.

10. **Q:** How to rethrow an error?
    **A:** `throw e;` inside catch. **Tip:** Useful for higher-level handling.

11. **Q:** Which errors are caught by try-catch?
    **A:** Only runtime errors, not syntax errors.

12. **Q:** Can try-catch handle asynchronous errors directly?
    **A:** No, use promises or async-await.

13. **Q:** Can the catch variable name be anything?
    **A:** Yes, it can be any valid identifier.

14. **Q:** What happens if error is not caught?
    **A:** Program stops and logs the error.

15. **Q:** Is try-catch performance heavy?
    **A:** Slightly, so use for risky code only.

16. **Q:** Can try block contain multiple statements?
    **A:** Yes, all risky statements can be inside try.

17. **Q:** Can catch differentiate error types?
    **A:** Yes, using `instanceof` checks inside catch.

18. **Q:** Why use try-catch in loops?
    **A:** To continue loop even if one iteration fails.

19. **Q:** Best practices?
    **A:** Only wrap risky code, avoid overusing.

20. **Q:** Real-world example?
    **A:** API calls, file reading, JSON parsing.

---

## 88️⃣ Exceptions: throw (20 Q&A)

1. **Q:** What does `throw` do?
   **A:** Generates custom error, stops normal execution. **Trick:** Think of throwing a ball—you decide where it lands.

2. **Q:** Can you throw any type?
   **A:** Yes, string, number, object, or Error.

3. **Q:** Preferred way?
   **A:** `throw new Error("message")` for stack trace.

4. **Q:** Where to use throw?
   **A:** Inside functions, try blocks, or anywhere code requires error signaling.

5. **Q:** Uncaught throw effect?
   **A:** Stops program execution and logs error.

6. **Q:** Can throw create custom errors?
   **A:** Yes, extend Error class for user-defined errors.

7. **Q:** Difference between throw and return?
   **A:** Throw = error, Return = function result.

8. **Q:** Throw object vs string?
   **A:** Object preferred for detailed info and stack trace.

9. **Q:** Rethrow inside catch?
   **A:** Yes, for higher-level handling.

10. **Q:** Throw in async function?
    **A:** Can use; handle with try-catch or promise.catch().

11. **Q:** Multiple throw statements?
    **A:** Allowed; only first executed if uncaught.

12. **Q:** Conditional throw?
    **A:** Yes, inside if statements for validation.

13. **Q:** Throw inside loops?
    **A:** Stops loop unless handled in try-catch.

14. **Q:** Best practice?
    **A:** Only throw exceptional situations, not control flow.

15. **Q:** Throw without try?
    **A:** Allowed, but uncaught errors stop program.

16. **Q:** Throw and finally?
    **A:** finally executes even after throw.

17. **Q:** Throw for API validation?
    **A:** Yes, for custom response errors.

18. **Q:** Difference between throw new Error() and throw string?
    **A:** Error object provides stack trace; string does not.

19. **Q:** Can throw be caught multiple times?
    **A:** Rethrow allows multiple layers to handle it.

20. **Q:** Example of throw?
    **A:** `if(!user) throw new Error("User missing")`.

---

## 89️⃣ Handling events in JavaScript (20 Q&A)

1. **Q:** Method to attach event handler?
   **A:** `addEventListener()`. **Trick:** Always better than inline.

2. **Q:** Inline HTML event?
   **A:** `<button onclick="func()">`.

3. **Q:** Event object contains?
   **A:** Type, target, timestamp, etc.

4. **Q:** Event triggers on key press?
   **A:** keydown, keypress, keyup.

5. **Q:** Remove event listener?
   **A:** `removeEventListener()` with same function reference.

6. **Q:** Event bubbling?
   **A:** Child → parent. **Trick:** Think ripple effect.

7. **Q:** stopPropagation()?
   **A:** Stops bubbling.

8. **Q:** preventDefault()?
   **A:** Stops default browser action.

9. **Q:** Event delegation?
   **A:** Single listener on parent handles children.

10. **Q:** Capture phase?
    **A:** Parent → child before bubbling.

11. **Q:** Once option?
    **A:** Listener runs only once.

12. **Q:** Passive option?
    **A:** Improves scroll performance.

13. **Q:** Mouseover vs mouseenter?
    **A:** Mouseover bubbles; mouseenter does not.

14. **Q:** Keyboard events?
    **A:** keydown, keyup, keypress.

15. **Q:** Form events?
    **A:** submit, input, change.

16. **Q:** Async events?
    **A:** setTimeout, promises, async-await.

17. **Q:** Event.target vs currentTarget?
    **A:** target = actual element, currentTarget = listener element.

18. **Q:** Multiple listeners on same element?
    **A:** Yes, addEventListener supports it.

19. **Q:** Custom events?
    **A:** Use `new CustomEvent()`.

20. **Q:** Real-world example?
    **A:** Clicks, form submission, dynamic UI interactions.
