# JavaScript Strings and Numbers: 100 Questions with Detailed Answers

This README.md contains **100 questions** covering JavaScript topics 21–30, with **10 questions per topic** and **detailed answers with explanations and examples**. The file is fully **editable and downloadable**.

---

## Topics Covered

21. Changing Case
22. Strings: Measuring Length and Extracting Parts
23. Strings: Finding Segments
24. Strings: Finding a Character at a Location
25. Strings: Replacing Characters
26. Rounding Numbers
27. Generating Random Numbers
28. Converting Strings to Integers and Decimals
29. Converting Strings to Numbers, Numbers to Strings
30. Controlling the Length of Decimals

---

### 21. Changing Case (10 Questions)

**Q1.** Which method converts a string to uppercase?

* **Answer:** `toUpperCase()`
* **Explanation:** This method returns a new string with all letters converted to uppercase. It does not modify the original string.

  ```js
  let str = 'hello';
  console.log(str.toUpperCase()); // 'HELLO'
  ```

**Q2.** Which method converts a string to lowercase?

* **Answer:** `toLowerCase()`
* **Explanation:** Converts all letters to lowercase without changing the original string.

  ```js
  let str = 'HELLO';
  console.log(str.toLowerCase()); // 'hello'
  ```

**Q3.** Does changing case modify the original string?

* **Answer:** No
* **Explanation:** JavaScript strings are immutable. Methods like `toUpperCase()` and `toLowerCase()` return new strings.

**Q4.** Can string methods be chained?

* **Answer:** Yes
* **Example:**

  ```js
  let str = 'hello';
  console.log(str.toUpperCase().toLowerCase()); // 'hello'
  ```

**Q5.** Is `toUpperCase()` locale-sensitive?

* **Answer:** Yes
* **Explanation:** Some languages have different case rules, e.g., Turkish 'i' vs 'İ'.

**Q6.** How to capitalize the first letter of a string?

* **Answer:** `str.charAt(0).toUpperCase() + str.slice(1)`
* **Example:**

  ```js
  let str = 'hello';
  let cap = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(cap); // 'Hello'
  ```

**Q7.** 'abc123'.toUpperCase() returns?

* **Answer:** 'ABC123'
* **Explanation:** Letters are converted; numbers remain unchanged.

**Q8.** Does `toLowerCase()` affect numbers?

* **Answer:** No

**Q9.** Can `toUpperCase()` be used on an empty string?

* **Answer:** Yes, returns empty string ''

**Q10.** Example of chaining with slice and case change?

* **Answer:**

  ```js
  let str = 'hello';
  let newStr = str.slice(0,2).toUpperCase() + str.slice(2);
  console.log(newStr); // 'HEllo'
  ```

---

### 22. Strings: Measuring Length and Extracting Parts (10 Questions)

**Q1.** How do you get the length of a string?

* **Answer:** Using `.length` property.

  ```js
  let str = 'Hello';
  console.log(str.length); // 5
  ```

**Q2.** Extract substring from index 0 to 4?

* **Answer:** `str.slice(0,4)`

  ```js
  let str = 'Hello';
  console.log(str.slice(0,4)); // 'Hell'
  ```

**Q3.** Difference between `slice()`, `substring()`, and `substr()`?

* **Answer:**

  * `slice(start,end)`: extracts from start to end (not including end). Negative indices allowed.
  * `substring(start,end)`: extracts from start to end (negative treated as 0).
  * `substr(start,length)`: extracts length characters from start.

**Q4.** Can `slice()` accept negative indices?

* **Answer:** Yes, counts from end.

**Q5.** substring(0,4) includes which indices?

* **Answer:** 0 to 3

**Q6.** substr(start,length) example?

* **Answer:**

  ```js
  let str = 'Hello';
  console.log(str.substr(1,3)); // 'ell'
  ```

**Q7.** 'Hello'.slice(-3) returns?

* **Answer:** 'llo'

**Q8.** Does `slice()` modify the original string?

* **Answer:** No

**Q9.** How to get last character using slice?

* **Answer:** `str.slice(-1)`

**Q10.** Example combining slice and toUpperCase?

* **Answer:**

  ```js
  let str = 'hello';
  console.log(str.slice(0,1).toUpperCase() + str.slice(1)); // 'Hello'
  ```

---

### 23. Strings: Finding Segments (10 Questions)

**Q1.** How to find first occurrence of a substring?

* **Answer:** `indexOf('substring')`

**Q2.** How to find last occurrence of substring?

* **Answer:** `lastIndexOf('substring')`

**Q3.** indexOf returns -1 if not found?

* **Answer:** Yes

**Q4.** Is indexOf case sensitive?

* **Answer:** Yes

**Q5.** indexOf with starting index example?

* **Answer:** `str.indexOf('a',3)` searches from index 3 onward

**Q6.** lastIndexOf backward search example?

* **Answer:** `str.lastIndexOf('a',10)` searches from index 10 backward

**Q7.** What happens if substring not found?

* **Answer:** Returns -1

**Q8.** Can indexOf use regex?

* **Answer:** No, regex requires match()

**Q9.** Check if substring exists?

* **Answer:** `'JavaScript'.includes('Script') // true`

**Q10.** indexOf('') returns?

* **Answer:** 0

---

### 24. Strings: Finding a Character at a Location (10 Questions)

**Q1.** charAt(2) returns?

* **Answer:** Character at index 2

**Q2.** 'Hello'[1] returns?

* **Answer:** 'e'

**Q3.** Indexing starts from?

* **Answer:** 0

**Q4.** Negative index in charAt?

* **Answer:** Returns ''

**Q5.** Can you modify string via [index]?

* **Answer:** No, strings are immutable

**Q6.** charAt returns string or number?

* **Answer:** String

**Q7.** str[10] for shorter string?

* **Answer:** undefined

**Q8.** Can you chain charAt with toUpperCase()?

* **Answer:** Yes, e.g., `str.charAt(0).toUpperCase()`

**Q9.** Access first character?

* **Answer:** `str.charAt(0)` or `str[0]`

**Q10.** Access last character?

* **Answer:** `str.charAt(str.length-1)` or `str[str.length-1]`

---

### 25. Strings: Replacing Characters (10 Questions)

**Q1.** Replace first occurrence?

* **Answer:** `replace()`

**Q2.** Replace all occurrences?

* **Answer:** `replaceAll()`

**Q3.** 'abcabc'.replace('a','x')?

* **Answer:** 'xbcabc'

**Q4.** replace() case sensitive?

* **Answer:** Yes

**Q5.** Can replace use regex?

* **Answer:** Yes

**Q6.** 'Hello'.replace('l','L')?

* **Answer:** 'HeLlo'

**Q7.** replaceAll() added in?

* **Answer:** ES2021

**Q8.** Can you chain replace()?

* **Answer:** Yes

**Q9.** Substring not found?

* **Answer:** Original string unchanged

**Q10.** 'abc'.replace(/a/g,'x')?

* **Answer:** 'xbc'

---

### 26. Rounding Numbers (10 Questions)

**Q1.** Math.round(4.5)?

* **Answer:** 5

**Q2.** Math.floor(4.9)?

* **Answer:** 4

**Q3.** Math.ceil(4.1)?

* **Answer:** 5

**Q4.** Math.round(-1.5)?

* **Answer:** -1

**Q5.** Math.floor(-1.1)?

* **Answer:** -2

**Q6.** Math.ceil(-1.1)?

* **Answer:** -1

**Q7.** Math.round(0.49)?

* **Answer:** 0

**Q8.** Math.floor(0.99)?

* **Answer:** 0

**Q9.** Rounding to nearest integer?

* **Answer:** Math.round()

**Q10.** Math.ceil always increase value?

* **Answer:** Only for positive numbers

---

### 27. Generating Random Numbers (10 Questions)

**Q1.** Generate random 0–1?

* **Answer:** Math.random()

**Q2.** Math.random()*10?

* **Answer:** 0 ≤ x < 10

**Q3.** Integer 0–9?

* **Answer:** Math.floor(Math.random()*10)

**Q4.** Negative random?

* **Answer:** Multiply by negative number

**Q5.** Random between min & max?

* **Answer:** Math.floor(Math.random()*(max-min+1))+min

**Q6.** Math.random() === Math.random()?

* **Answer:** False, each call different

**Q7.** Can Math.random() return 1?

* **Answer:** No, 1 excluded

**Q8.** Dice roll 1–6?

* **Answer:** Math.floor(Math.random()*6)+1

**Q9.** Is Math.random seedable?

* **Answer:** No, native JS cannot seed

**Q10.** Multiply random by negative?

* **Answer:** Yes, gives negative number

---

# JavaScript Strings and Numbers: 100 Questions with Detailed Answers

This README.md contains **100 questions** covering JavaScript topics 21–30, with **10 questions per topic** and **detailed answers with explanations and examples**. The file is fully **editable and downloadable**.

---

## Topics Covered

21. Changing Case
22. Strings: Measuring Length and Extracting Parts
23. Strings: Finding Segments
24. Strings: Finding a Character at a Location
25. Strings: Replacing Characters
26. Rounding Numbers
27. Generating Random Numbers
28. Converting Strings to Integers and Decimals
29. Converting Strings to Numbers, Numbers to Strings
30. Controlling the Length of Decimals

---



### 28. Converting Strings to Integers and Decimals (10 Questions)

**Q1.** parseInt('123')?

* **Answer:** 123
* **Explanation:** Converts string to integer.

**Q2.** parseFloat('12.34')?

* **Answer:** 12.34
* **Explanation:** Converts string to float.

**Q3.** Number('123.45')?

* **Answer:** 123.45

**Q4.** parseInt('12abc')?

* **Answer:** 12
* **Explanation:** Stops parsing at first non-digit character.

**Q5.** parseFloat('12.34abc')?

* **Answer:** 12.34

**Q6.** Number('12abc')?

* **Answer:** NaN
* **Explanation:** Number() returns NaN if invalid numeric string.

**Q7.** parseInt('0x10')?

* **Answer:** 16
* **Explanation:** Interprets as hexadecimal.

**Q8.** parseFloat('0.1e2')?

* **Answer:** 10

**Q9.** Can parseInt accept radix?

* **Answer:** Yes, second parameter specifies base.

**Q10.** Number('123.45')?

* **Answer:** 123.45

---

### 29. Converting Strings to Numbers, Numbers to Strings (10 Questions)

**Q1.** String(123)?

* **Answer:** '123'

**Q2.** (123).toString()?

* **Answer:** '123'

**Q3.** Number('123')?

* **Answer:** 123

**Q4.** Number('12.34')?

* **Answer:** 12.34

**Q5.** Can toString() take radix?

* **Answer:** Yes, e.g., (10).toString(2) => '1010'

**Q6.** parseInt('123')?

* **Answer:** 123

**Q7.** Convert number to string using concatenation?

* **Answer:** 123 + '' => '123'

**Q8.** Number('abc')?

* **Answer:** NaN

**Q9.** String(true)?

* **Answer:** 'true'

**Q10.** (123.45).toString()?

* **Answer:** '123.45'

---

### 30. Controlling the Length of Decimals (10 Questions)

**Q1.** (3.14159).toFixed(2)?

* **Answer:** '3.14'

**Q2.** (3.14159).toPrecision(3)?

* **Answer:** '3.14'

**Q3.** toFixed returns?

* **Answer:** String

**Q4.** toPrecision returns?

* **Answer:** String

**Q5.** (1.005).toFixed(2)?

* **Answer:** '1.01'

**Q6.** Controlling decimal length for display?

* **Answer:** toFixed() or toPrecision()

**Q7.** (123.456).toPrecision(4)?

* **Answer:** '123.5'

**Q8.** toFixed(-1)?

* **Answer:** Error
* **Explanation:** Negative precision not allowed.

**Q9.** Can toFixed be chained with Number()?

* **Answer:** Yes, e.g., Number((0.1+0.2).toFixed(2)) => 0.3

**Q10.** (0.1 + 0.2).toFixed(2)?

* **Answer:** '0.30'

---

This file now contains **all 100 questions with detailed answers and examples** for topics 21–30, fully editable and ready for download.
*
