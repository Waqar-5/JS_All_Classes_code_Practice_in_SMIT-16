# JavaScript Date and Time: 100 MCQs with Answer Key

This README.md contains **100 multiple-choice questions** covering JavaScript Date and Time topics 31–34, with **25 MCQs per topic** and an **answer key at the bottom**. Each question has options a–d.

---

## Topics Covered

31. Getting the Current Date and Time
32. Extracting Parts of the Date and Time
33. Specifying a Date and Time
34. Changing Elements of a Date and Time

---

### 31. Getting the Current Date and Time (25 MCQs)

1. Which object is used for date and time in JavaScript?

   * a) Date  b) Time  c) Calendar  d) Clock
2. How to get current date and time?

   * a) new Date()  b) Date.now()  c) getTime()  d) currentTime()
3. Date.now() returns?

   * a) Milliseconds since Jan 1, 1970  b) Current year  c) Time string  d) Date object
4. What type is returned by new Date()?

   * a) Object  b) String  c) Number  d) Boolean
5. new Date() vs Date.now() difference?

   * a) Object vs Number  b) Number vs Object  c) Both same  d) None
6. How to store current date in variable?

   * a) let now = new Date();  b) let now = Date.now;  c) let now = getDate();  d) let now = currentTime();
7. Console.log(new Date()) shows?

   * a) Full current date and time  b) Only year  c) Only time  d) Only date
8. Can we compare dates directly?

   * a) Yes using getTime()  b) No  c) Only using strings  d) Only using objects
9. new Date().toString() returns?

   * a) Readable date string  b) Timestamp  c) Number  d) Boolean
10. Is new Date() affected by system timezone?

    * a) Yes  b) No  c) Only UTC  d) Only browser
11. new Date().getTime() vs Date.now()?

    * a) Both return milliseconds  b) Different values  c) Only date object  d) Only timestamp
12. Can Date object be mutated?

    * a) Yes  b) No  c) Only clone  d) Only new Date()
13. Epoch time is?

    * a) Jan 1, 1970  b) Jan 1, 2000  c) Current date  d) None
14. new Date(0) returns?

    * a) Jan 1, 1970  b) Current date  c) Null  d) Error
15. new Date().toUTCString() shows?

    * a) UTC format  b) Local format  c) Timestamp  d) ISO string
16. How to get current time only?

    * a) new Date().toTimeString()  b) new Date().toDateString()  c) Date.now()  d) getTime()
17. Can we create Date object without parentheses?

    * a) No  b) Yes  c) Only in ES6  d) Only in Node.js
18. Default format of new Date()?

    * a) ISO  b) UTC  c) Local  d) Custom
19. Is Date object mutable?

    * a) Yes  b) No  c) Only with set methods  d) Only in ES6
20. new Date() in JSON.stringify()?

    * a) Converts to ISO string  b) Error  c) Returns object  d) Returns timestamp
21. Which method returns current year?

    * a) getFullYear()  b) getYear()  c) year()  d) getDate()
22. Does new Date() include milliseconds?

    * a) Yes  b) No  c) Only in timestamp  d) Never
23. Can we subtract two Date objects?

    * a) Yes using getTime()  b) No  c) Only add  d) Only compare
24. How to get day of week from current date?

    * a) getDay()  b) getDate()  c) getWeek()  d) getFullYear()
25. new Date().toLocaleString() returns?

    * a) Localized date and time string  b) Timestamp  c) Object  d) Number

---

### 32. Extracting Parts of the Date and Time (25 MCQs)

1. getFullYear() returns?

   * a) 4-digit year  b) 2-digit year  c) Month  d) Date
2. getMonth() returns?

   * a) Month index (0-11)  b) 1-12  c) Name  d) Week
3. getDate() returns?

   * a) Day of month  b) Month  c) Week  d) Year
4. getDay() returns?

   * a) Day of week  b) Day of month  c) Month  d) Year
5. getHours() returns?

   * a) Hours 0-23  b) Minutes 0-59  c) Seconds 0-59  d) Milliseconds
6. getMinutes()?

   * a) Minutes 0-59  b) Hours 0-23  c) Seconds 0-59  d) Milliseconds
7. getSeconds()?

   * a) 0-59  b) 0-23  c) 0-11  d) 0-999
8. getMilliseconds()?

   * a) 0-999  b) 0-59  c) 0-23  d) 0-11
9. getTime()?

   * a) Timestamp in ms  b) Hours  c) Date  d) Month
10. Can getMonth() be used for display?

    * a) No, needs +1  b) Yes directly  c) Only string  d) Only number
11. getDay() index starts at?

    * a) 0 = Sunday  b) 1 = Monday  c) 0 = Monday  d) 1 = Sunday
12. Negative indices in get methods?

    * a) Not allowed  b) Allowed  c) Only ES6  d) Only Node.js
13. Can we extract timezone info?

    * a) getTimezoneOffset()  b) getUTCOffset()  c) getTimeZone()  d) None
14. getUTCFullYear() returns?

    * a) UTC year  b) Local year  c) Timestamp  d) Date
15. getUTCMonth()?

    * a) UTC month  b) Local month  c) Day  d) Hours
16. getUTCDay()?

    * a) UTC day  b) Local day  c) Month  d) Date
17. getUTCHours()?

    * a) UTC hours  b) Local hours  c) Minutes  d) Seconds
18. getUTCMinutes()?

    * a) UTC minutes  b) Local minutes  c) Seconds  d) Milliseconds
19. getUTCSeconds()?

    * a) UTC seconds  b) Local seconds  c) Minutes  d) Hours
20. getUTCMilliseconds()?

    * a) UTC milliseconds  b) Local milliseconds  c) Seconds  d) Minutes
21. Can we chain get methods?

    * a) No  b) Yes  c) Only ES6  d) Only Node.js
22. Using get methods with new Date('2026-01-26T10:00:00') returns?

    * a) Correct parts  b) Error  c) NaN  d) Null
23. Useful for?

    * a) Extracting components  b) Changing values  c) Both  d) None
24. Can get methods return string?

    * a) No  b) Yes  c) Only toString()  d) Only getDate()
25. getTime() useful for?

    * a) Comparisons and math  b) Logging  c) Formatting  d) Display only

---

### 33. Specifying a Date and Time (25 MCQs)

1. new Date(2026,0,1)?

   * a) Jan 1, 2026  b) Feb 1, 2026  c) Dec 1, 2026  d) Error
2. new Date('2026-01-26T10:00:00')?

   * a) Specified date and time  b) Current date  c) Timestamp  d) Null
3. new Date(0)?

   * a) Jan 1, 1970  b) Current date  c) Invalid  d) Null
4. Month index starts at?

   * a) 0  b) 1  c) 12  d) None
5. Which formats supported?

   * a) ISO  b) Short date  c) Custom  d) Only ISO
6. Invalid date string returns?

   * a) Invalid Date  b) 0  c) Null  d) NaN
7. new Date('2026-02-30')?

   * a) Mar 2, 2026  b) Feb 30 error  c) Feb 28  d) Null
8. Can we specify hours, minutes, seconds?

   * a) Yes  b) No  c) Only minutes  d) Only seconds
9. new Date(2026,11,25,15,30,0)?

   * a) Dec 25, 2026 15:30  b) Nov 25  c) Jan 25  d) Error
10. Using milliseconds constructor?

    * a) new Date(1609459200000)  b) new Date('1609459200000')  c) new Date()  d) Null
11. ISO string required for?

    * a) Cross-browser consistency  b) Only Node.js  c) Only browser  d) None
12. new Date('2026-01-26')?

    * a) Midnight Jan 26  b) Noon  c) Current time  d) Invalid
13. new Date('')?

    * a) Invalid Date  b) Current date  c) Null  d) 0
14. new Date('2026-13-01')?

    * a) Invalid Date  b) Jan 1, 2026  c) Dec 1  d) Null
15. Can we specify timezone?

    * a) Yes  b) No  c) Only UTC  d) Only local
16. ISO 8601 format?

    * a) YYYY-MM-DDTHH:mm:ss  b) DD-MM-YYYY  c) MM/DD/YYYY  d) None
17. Date string without time?

    * a) Defaults to midnight  b) Noon  c) Current time  d) Null
18. Using new Date() without args?

    * a) Current date and time  b) Epoch  c) Invalid  d) Null
19. Can timestamp be negative?

    * a) Yes (before 1970)  b) No  c) Only 0  d) Null
20. new Date('2026-01-26T10:00:00Z')?

    * a) UTC time  b) Local  c) Invalid  d) Null
21. String '2026-01-26' parsed as?

    * a) Local timezone midnight  b) UTC  c) Noon  d) Invalid
22. Can we specify day of week?

    * a) No  b) Yes  c) Only with timestamp  d) Only ISO string
23. Using array or object to create date?

    * a) Not allowed  b) Allowed  c) Only array  d) Only object
24. Can we create date in past/future?

    * a) Yes  b) No  c) Only past  d) Only future
25. new Date(NaN)?

    * a) Invalid Date  b) 0  c) Null  d) Epoch

---

### 34. Changing Elements of a Date and Time (25 MCQs)

1. setFullYear(2027)?

   * a) Changes year  b) Month  c) Day  d) Time
2. setMonth(11)?

   * a) Sets December  b) November  c) Month index 0  d) Error
3. setDate(25)?

   * a) Changes day of month  b) Month  c) Year  d) Time
4. setHours(15,45)?

   * a) Hours and minutes  b) Only hours  c) Only minutes  d) Seconds
5. setMinutes(30,0)?

   * a) Minutes and seconds  b) Hours  c) Milliseconds  d) Day
6. setSeconds(0,500)?

   * a) Seconds and milliseconds  b) Only seconds  c) Only milliseconds  d) Hours
7. setMilliseconds(250)?

   * a) Sets milliseconds  b) Seconds  c) Minutes  d) Hours
8. setTime(1609459200000)?

   * a) Changes date to timestamp  b) Invalid  c) Current date  d) Null
9. setFullYear(2026,11,25)?

   * a) Changes year, month, day  b) Only year  c) Only month  d) Only day
10. What happens if day > max in month?

    * a) Rolls over to next month  b) Error  c) Sets max day  d) Null
11. Can setMonth(12) work?

    * a) Rolls to next year  b) Error  c) Month 0  d) Null
12. setUTCFullYear(2026)?

    * a) UTC year  b) Local year  c) Timestamp  d) Invalid
13. Chaining set methods?

    * a) Not allowed  b) Allowed  c) Only hours  d) Only day
14. Overwriting hours?

    * a) setHours()  b) getHours()  c) getTime()  d) new Date()
15. Adjusting date by timestamp?

    * a) setTime()  b) setDate()  c) setFullYear()  d) setMonth()
16. set methods affect original object?

    * a) Yes  b) No  c) Only clone  d) Null
17. Using negative values?

    * a) Rolls backward  b) Error  c) Null  d) NaN
18. setUTCMonth(5)?

    * a) Sets UTC month  b) Local  c) Hours  d) Date
19. Resetting time to midnight?

    * a) setHours(0,0,0,0)  b) setTime(0)  c) setDate(0)  d) setMonth(0)
20. Incrementing day?

    * a) setDate(currentDate+1)  b) setDate(currentDate)  c) getDate()+1  d) new Date()
21. Changing minutes only?

    * a) setMinutes()  b) setHours()  c) setSeconds()  d) setMilliseconds()
22. Changing month and day together?

    * a) setMonth(month, day)  b) setFullYear()  c) setDate()  d) setTime()
23. Common use of set methods?

    * a) Scheduling, timers, dynamic updates  b) Logging only  c) Formatting  d) Display
24. Can setTime() accept negative ms?

    * a) Yes (before 1970)  b) No  c) Only 0  d) Null
25. Checking updated date?

    * a) Use get methods  b) console.log only  c) Error  d) Null

---

## Answer Key

**31.** 1-a,2-a,3-a,4-a,5-a,6-a,7-a,8-a,9-a,10-a,11-a,12-a,13-a,14-a,15-a,16-a,17-a,18-a,19-a,20-a,21-a,22-a,23-a,24-a,25-a
**32.** 1-a,2-a,3-a,4-a,5-a,6-a,7-a,8-a,9-a,10-a,11-a,12-a,13-a,14-a,15-a,16-a,17-a,18-a,19-a,20-a,21-b,22-a,23-a,24-a,25-a
**33.** 1-a,2-a,3-a,4-a,5-a,6-a,7-a,8-a,9-a,10-a,11-a,12-a,13-a,14-a,15-a,16-a,17-a,18-a,19-a,20-a,21-a,22-a,23-a,24-a,25-a
**34.** 1-a,2-a,3-a,4-a,5-a,6-a,7-a,8-a,9-a,10-a,11-a,12-a,13-b,14-a,15-a,16-a,17-a,18-a,19-a,20-a,21-a,22-a,23-a,24-a,25-a
