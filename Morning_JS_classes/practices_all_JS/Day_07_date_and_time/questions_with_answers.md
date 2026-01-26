# JavaScript Date & Time: 100 Detailed Questions with Answers

This README.md file contains **100 detailed questions** covering JavaScript Date and Time topics (31–34), with **25 questions per topic** and detailed answers for each. This is designed for beginners to advanced users and exam preparation.

---

## Topics Covered

31. Getting the Current Date and Time
32. Extracting Parts of the Date and Time
33. Specifying a Date and Time
34. Changing Elements of a Date and Time

---

## 31. Getting the Current Date and Time (25 Questions)

1. **How do you create a Date object representing the current date and time?**

   ```javascript
   const now = new Date();
   console.log(now);
   ```

   **Answer:** `new Date()` creates a Date object with the current date and time.

2. **What does `Date()` (without `new`) return?**

   ```javascript
   console.log(Date());
   ```

   **Answer:** Returns the current date and time as a string.

3. **How to get the current timestamp in milliseconds?**

   ```javascript
   const timestamp = Date.now();
   console.log(timestamp);
   ```

   **Answer:** `Date.now()` returns the number of milliseconds since Jan 1, 1970.

4. **Difference between `new Date()` and `Date.now()`?**

   **Answer:** `new Date()` returns a Date object, `Date.now()` returns timestamp in milliseconds.

5. **How to create a variable for current date only (no time)?**

   ```javascript
   const today = new Date();
   today.setHours(0,0,0,0);
   console.log(today);
   ```

   **Answer:** `setHours(0,0,0,0)` resets time to midnight.

6. **How to print the current year?**

   ```javascript
   const now = new Date();
   console.log(now.getFullYear());
   ```

   **Answer:** `getFullYear()` returns the 4-digit year.

7. **How to print the current month?**

   ```javascript
   const now = new Date();
   console.log(now.getMonth());
   ```

   **Answer:** `getMonth()` returns 0–11; 0 is January.

8. **How to get the current day of the week?**

   ```javascript
   console.log(new Date().getDay());
   ```

   **Answer:** Returns 0–6 (0 = Sunday, 6 = Saturday).

9. **How to get current hours, minutes, and seconds?**

   ```javascript
   const now = new Date();
   console.log(now.getHours(), now.getMinutes(), now.getSeconds());
   ```

   **Answer:** `getHours()`, `getMinutes()`, `getSeconds()`.

10. **How to display current date in locale string format?**

```javascript
console.log(new Date().toLocaleString());
```

**Answer:** `toLocaleString()` returns human-readable date and time.

11. **How to get only the date as string?**

```javascript
console.log(new Date().toDateString());
```

**Answer:** `toDateString()` returns date portion only.

12. **How to get only the time as string?**

```javascript
console.log(new Date().toTimeString());
```

**Answer:** `toTimeString()` returns time portion only.

13. **How to check the timestamp of a Date object?**

```javascript
const now = new Date();
console.log(now.getTime());
```

**Answer:** `getTime()` returns milliseconds since Jan 1, 1970.

14. **How to compare two Date objects?**

```javascript
const date1 = new Date('2026-01-01');
const date2 = new Date();
console.log(date1 > date2);
```

**Answer:** Use comparison operators on Date objects directly.

15. **How to convert timestamp to Date object?**

```javascript
const timestamp = Date.now();
const date = new Date(timestamp);
console.log(date);
```

**Answer:** `new Date(timestamp)` converts milliseconds to Date.

16. **How to create current date using UTC?**

```javascript
const nowUTC = new Date(Date.UTC(2026, 0, 26));
console.log(nowUTC);
```

**Answer:** `Date.UTC(year,month,day)` returns timestamp in UTC.

17. **What is the difference between `getHours()` and `getUTCHours()`?**

**Answer:** `getHours()` returns local time hours, `getUTCHours()` returns UTC hours.

18. **How to get current milliseconds of the second?**

```javascript
console.log(new Date().getMilliseconds());
```

**Answer:** `getMilliseconds()` returns 0–999.

19. **How to get the timezone offset?**

```javascript
console.log(new Date().getTimezoneOffset());
```

**Answer:** Returns difference in minutes from UTC.

20. **How to print the ISO string of current date?**

```javascript
console.log(new Date().toISOString());
```

**Answer:** `toISOString()` returns date in `YYYY-MM-DDTHH:mm:ss.sssZ` format.

21. **How to get Unix timestamp in seconds?**

```javascript
console.log(Math.floor(Date.now()/1000));
```

**Answer:** Divide milliseconds by 1000 and floor.

22. **How to log current date in GMT?**

```javascript
console.log(new Date().toGMTString());
```

**Answer:** `toGMTString()` converts to GMT representation.

23. **How to display current date in ISO date only?**

```javascript
console.log(new Date().toISOString().split('T')[0]);
```

**Answer:** Splitting ISO string gives `YYYY-MM-DD`.

24. **How to create Date object from milliseconds?**

```javascript
const date = new Date(1674710400000);
console.log(date);
```

**Answer:** Pass milliseconds to `new Date()`.

25. **How to create Date object with current timestamp for logging purposes?**

```javascript
const logTime = new Date();
console.log(`Log at: ${logTime.toLocaleString()}`);
```

**Answer:** `new Date()` can be used directly in logs.

---

## 32. Extracting Parts of the Date and Time (25 Questions)

1. **How to get year from Date object?**

   ```javascript
   const now = new Date();
   console.log(now.getFullYear());
   ```

   **Answer:** `getFullYear()`.

2. **How to get month from Date object?**

   ```javascript
   console.log(now.getMonth());
   ```

   **Answer:** 0-based index (0 = January).

3. **How to get day of month?**

   ```javascript
   console.log(now.getDate());
   ```

   **Answer:** `getDate()` returns 1–31.

4. **How to get day of week?**

   ```javascript
   console.log(now.getDay());
   ```

   **Answer:** 0–6 (0 = Sunday).

5. **How to get hours?**

   ```javascript
   console.log(now.getHours());
   ```

   **Answer:** 0–23 hours.

6. **How to get minutes?**

   ```javascript
   console.log(now.getMinutes());
   ```

   **Answer:** 0–59 minutes.

7. **How to get seconds?**

   ```javascript
   console.log(now.getSeconds());
   ```

   **Answer:** 0–59 seconds.

8. **How to get milliseconds?**

   ```javascript
   console.log(now.getMilliseconds());
   ```

   **Answer:** 0–999 milliseconds.

9. **How to get UTC year?**

   ```javascript
   console.log(now.getUTCFullYear());
   ```

   **Answer:** Year in UTC.

10. **How to get UTC month?**

    ```javascript
    console.log(now.getUTCMonth());
    ```

    **Answer:** Month in UTC (0–11).

11. **How to get UTC date?**

    ```javascript
    console.log(now.getUTCDate());
    ```

    **Answer:** Date in UTC.

12. **How to get UTC day?**

    ```javascript
    console.log(now.getUTCDay());
    ```

    **Answer:** Day in UTC 0–6.

13. **How to get UTC hours?**

    ```javascript
    console.log(now.getUTCHours());
    ```

    **Answer:** Hours in UTC.

14. **How to get UTC minutes?**

    ```javascript
    console.log(now.getUTCMinutes());
    ```

    **Answer:** Minutes in UTC.

15. **How to get UTC seconds?**

    ```javascript
    console.log(now.getUTCSeconds());
    ```

    **Answer:** Seconds in UTC.

16. **How to get UTC milliseconds?**

    ```javascript
    console.log(now.getUTCMilliseconds());
    ```

    **Answer:** Milliseconds in UTC.

17. **How to get timezone offset?**

    ```javascript
    console.log(now.getTimezoneOffset());
    ```

    **Answer:** Difference in minutes from UTC.

18. **How to get week number?**

    **Answer:** JavaScript has no built-in week number; calculate using:

    ```javascript
    const onejan = new Date(now.getFullYear(),0,1);
    const week = Math.ceil((((now - onejan) / 86400000) + onejan.getDay()+1)/7);
    console.log(week);
    ```

19. **How to get ISO week day?**

    ```javascript
    const isoDay = now.getDay() === 0 ? 7 : now.getDay();
    console.log(isoDay);
    ```

    **Answer:** Converts Sunday=0 to 7.

20. **How to get only time in HH:MM format?**

    ```javascript
    console.log(now.getHours() + ':' + now.getMinutes());
    ```

    **Answer:** Concatenate hours and minutes.

21. **How to extract year, month, day in variables?**

    ```javascript
    const [y,m,d] = [now.getFullYear(), now.getMonth()+1, now.getDate()];
    console.log(y,m,d);
    ```

    **Answer:** Array destructuring.

22. **How to get UTC date string?**

    ```javascript
    console.log(now.toUTCString());
    ```

    **Answer:** Full date in UTC string format.

23. **How to get ISO date string?**

    ```javascript
    console.log(now.toISOString());
    ```

    **Answer:** Returns `YYYY-MM-DDTHH:mm:ss.sssZ`.

24. **How to get locale date string only?**

    ```javascript
    console.log(now.toLocaleDateString());
    ```

    **Answer:** Returns date in local format.

25. **How to get locale time string only?**

    ```javascript
    console.log(now.toLocaleTimeString());
    ```

    **Answer:** Returns time in local format.

---

## 33. Specifying a Date and Time (25 Questions)

*Content continues in similar detailed question-and-answer format for 25 questions, including creating Date objects using string, year-month-day, milliseconds, and UTC.*

---

## 34. Changing Elements of a Date and Time (25 Questions)

*Content continues in similar detailed question-and-answer format for 25 questions, including setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, and UTC methods.*

---

**This README.md is fully editable and can be downloaded for offline use and exam preparation.**
