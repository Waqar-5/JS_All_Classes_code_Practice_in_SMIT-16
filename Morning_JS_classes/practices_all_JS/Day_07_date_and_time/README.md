# JavaScript Date and Time: Complete Guide

This README.md contains a **comprehensive guide** on JavaScript date and time manipulation, covering topics 31–34. It explains **key points, functions, methods, code examples, and advanced tips** to fully understand and excel in exams or practical coding.

---

## Topics Covered

31. Getting the Current Date and Time
32. Extracting Parts of the Date and Time
33. Specifying a Date and Time
34. Changing Elements of a Date and Time

---

### 31. Getting the Current Date and Time

**Key Points:**

* JavaScript provides the `Date` object to handle dates and times.
* `new Date()` returns the current date and time.
* Can be stored in variables and used for calculations.

**Code Examples:**

```javascript
// Current date and time
let now = new Date();
console.log(now); // e.g., 2026-01-26T04:33:12.123Z

// Current timestamp (milliseconds since Jan 1, 1970)
let timestamp = Date.now();
console.log(timestamp);
```

**Explanation:**

* `new Date()` creates a new Date object representing the current date and time.
* `Date.now()` gives a numeric timestamp useful for performance measurement or comparisons.

**Tips:**

* Useful in logging, timestamping events, or calculating durations.

---

### 32. Extracting Parts of the Date and Time

**Key Points:**

* Use `get` methods to extract specific parts of a date.
* Common methods include:

  * `getFullYear()` → Year (4 digits)
  * `getMonth()` → Month (0–11)
  * `getDate()` → Day of the month (1–31)
  * `getDay()` → Day of the week (0–6)
  * `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`
  * `getTime()` → Timestamp in milliseconds

**Code Examples:**

```javascript
let now = new Date();
console.log(now.getFullYear());   // e.g., 2026
console.log(now.getMonth());      // 0 = January, 11 = December
console.log(now.getDate());       // Day of month
console.log(now.getDay());        // Day of week, 0 = Sunday
console.log(now.getHours());      // 0-23
console.log(now.getMinutes());    // 0-59
console.log(now.getSeconds());    // 0-59
console.log(now.getMilliseconds()); // 0-999
console.log(now.getTime());       // Timestamp in ms
```

**Explanation:**

* Months are 0-indexed (January = 0).
* Days of the week are 0-indexed (Sunday = 0).
* `getTime()` is useful for date comparisons and arithmetic.

**Tips:**

* Always check the index of months when formatting or displaying.
* Use `toLocaleString()` for human-readable formats.

---

### 33. Specifying a Date and Time

**Key Points:**

* You can create a date for a specific point in time.
* Constructors:

  1. `new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)`
  2. `new Date(dateString)`
  3. `new Date(milliseconds)`

**Code Examples:**

```javascript
// Using components (year, month, day...)
let birthday = new Date(1995, 4, 15, 10, 30, 0); // May 15, 1995 10:30:00
console.log(birthday);

// Using date string
let meeting = new Date('2026-02-01T09:00:00');
console.log(meeting);

// Using timestamp
let epochDate = new Date(0); // Jan 1, 1970 UTC
console.log(epochDate);
```

**Explanation:**

* Month index starts at 0.
* String format should follow ISO 8601 (`YYYY-MM-DDTHH:mm:ss`).
* Timestamp is milliseconds since epoch.

**Tips:**

* Prefer ISO 8601 strings for cross-browser consistency.
* Validate date objects using `isNaN(date)`.

---

### 34. Changing Elements of a Date and Time

**Key Points:**

* Use `set` methods to modify parts of a date.
* Common methods include:

  * `setFullYear(year, month, day)`
  * `setMonth(monthIndex, day)`
  * `setDate(day)`
  * `setHours(hours, minutes, seconds, ms)`
  * `setMinutes(minutes, seconds, ms)`
  * `setSeconds(seconds, ms)`
  * `setMilliseconds(ms)`
  * `setTime(milliseconds)`

**Code Examples:**

```javascript
let event = new Date('2026-01-26T10:00:00');

// Change year
event.setFullYear(2027);
console.log(event);

// Change month to December
event.setMonth(11);
console.log(event);

// Change day of the month
event.setDate(25);
console.log(event);

// Change hours and minutes
event.setHours(15, 45);
console.log(event);

// Change milliseconds
event.setMilliseconds(500);
console.log(event);
```

**Explanation:**

* `set` methods modify the original date object.
* Be careful with month index (0–11) and day overflow.

**Tips:**

* Use `setTime()` for timestamp-based changes.
* Always check resulting date after setting values to avoid unexpected rollovers.

---

This file now contains **all key points, methods, code examples, and tips** for JavaScript Date and Time topics 31–34, fully editable and ready for download.




## Important points
# JavaScript Date and Time: Most Important Points (Exam & Coding Focused)

This file lists **key points and most commonly used aspects** of JavaScript Date and Time (Topics 31–34) for exams and coding interviews.

---

### 31. Getting the Current Date and Time

* `new Date()` → Current date and time.
* `Date.now()` → Timestamp in milliseconds.
* Store in variable for calculations and comparisons.
* Commonly used for logging events, timestamps, and performance measurement.

### 32. Extracting Parts of the Date and Time

* `getFullYear()` → Year (4 digits).
* `getMonth()` → Month index (0 = January).
* `getDate()` → Day of the month.
* `getDay()` → Day of the week (0 = Sunday).
* `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()` → Time components.
* `getTime()` → Timestamp (ms since Jan 1, 1970).
* Use `toLocaleString()` for readable display.

### 33. Specifying a Date and Time

* `new Date(year, monthIndex, day, hours, minutes, seconds, ms)` → Custom date.
* `new Date('YYYY-MM-DDTHH:mm:ss')` → ISO 8601 string.
* `new Date(milliseconds)` → From timestamp.
* Months are 0-indexed; use ISO strings for cross-browser consistency.
* Always validate dates with `isNaN(date)`.

### 34. Changing Elements of a Date and Time

* `setFullYear(year, month, day)` → Change year.
* `setMonth(monthIndex, day)` → Change month.
* `setDate(day)` → Change day of month.
* `setHours(hours, minutes, seconds, ms)` → Change time.
* `setMinutes(minutes, seconds, ms)`, `setSeconds(seconds, ms)`, `setMilliseconds(ms)` → Modify smaller units.
* `setTime(milliseconds)` → Change date via timestamp.
* Use carefully to avoid rollovers (e.g., setting 32nd day moves to next month).
* Commonly used in scheduling, timers, and dynamic date updates in coding projects.

---

These points are the **most frequently asked in exams and commonly used in coding tasks**, focusing on practical applications and concise usage.
