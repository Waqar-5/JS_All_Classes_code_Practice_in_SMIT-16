# JavaScript Strings and Numbers: Complete Guide

This `README.md` is a **comprehensive guide** for beginners and intermediate learners to understand **JavaScript string and number operations**, including changing case, measuring length, extracting parts, finding segments, rounding numbers, generating random numbers, and converting between types. It includes **key points, examples, and exam-focused tips**.

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

## 21. Changing Case

### Key Points

* `toUpperCase()`: Converts string to uppercase.
* `toLowerCase()`: Converts string to lowercase.
* Strings are immutable; methods return **new strings**.

### Examples

```javascript
let text = 'Hello World';
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world
```

**Exam Tip:** Use chaining to apply multiple string methods.

---

## 22. Strings: Measuring Length and Extracting Parts

### Key Points

* `.length` gives total characters.
* `.slice(start, end)`, `.substring(start, end)`, `.substr(start, length)` extract parts.
* `slice` supports negative indices.

### Examples

```javascript
let str = 'JavaScript';
console.log(str.length); // 10
console.log(str.slice(0,4)); // Java
console.log(str.substring(0,4)); // Java
console.log(str.substr(4,6)); // Script
```

**Exam Tip:** Remember the difference between `slice`, `substring`, and `substr`.

---

## 23. Strings: Finding Segments

### Key Points

* `.indexOf(substring)`: Returns first occurrence index.
* `.lastIndexOf(substring)`: Returns last occurrence.
* Returns -1 if not found.
* Case-sensitive.

### Examples

```javascript
let text = 'JavaScript is fun';
console.log(text.indexOf('is')); // 11
console.log(text.lastIndexOf('a')); // 3
```

**Exam Tip:** Use `toLowerCase()` before search for case-insensitive search.

---

## 24. Strings: Finding a Character at a Location

### Key Points

* `.charAt(index)`: Returns character at specific position.
* `[index]` notation also works.
* Index starts from 0.

### Examples

```javascript
let str = 'Hello';
console.log(str.charAt(1)); // e
console.log(str[1]); // e
```

**Exam Tip:** Negative indices are **not supported** in `charAt`.

---

## 25. Strings: Replacing Characters

### Key Points

* `.replace(oldValue, newValue)`: Replaces first occurrence.
* Use regex with `g` flag for global replacement.

### Examples

```javascript
let text = 'I like JavaScript';
console.log(text.replace('JavaScript','Python')); // I like Python
console.log(text.replace(/i/g,'I')); // I lIke JavaScrIpt
```

**Exam Tip:** Remember `replace` does not change original string.

---

## 26. Rounding Numbers

### Key Points

* `Math.round(num)`: Rounds to nearest integer.
* `Math.ceil(num)`: Rounds up.
* `Math.floor(num)`: Rounds down.
* `toFixed(n)`: Formats number to n decimals (string).

### Examples

```javascript
let num = 4.7;
console.log(Math.round(num)); // 5
console.log(Math.ceil(num)); // 5
console.log(Math.floor(num)); // 4
console.log(num.toFixed(2)); // 4.70
```

**Exam Tip:** Use `toFixed` for displaying decimals, `Math.round` for computation.

---

## 27. Generating Random Numbers

### Key Points

* `Math.random()`: Returns random number between 0 (inclusive) and 1 (exclusive).
* Multiply and round to get desired range.

### Examples

```javascript
console.log(Math.random()); // 0.0 to 0.999
console.log(Math.floor(Math.random()*10)); // 0 to 9
console.log(Math.floor(Math.random()*10)+1); // 1 to 10
```

**Exam Tip:** For integer range [min,max], use: `Math.floor(Math.random()*(max-min+1))+min`

---

## 28. Converting Strings to Integers and Decimals

### Key Points

* `parseInt(str)`: Converts string to integer.
* `parseFloat(str)`: Converts string to decimal.
* Ignores trailing non-numeric characters.

### Examples

```javascript
console.log(parseInt('123')); // 123
console.log(parseFloat('123.45')); // 123.45
console.log(parseInt('123abc')); // 123
```

**Exam Tip:** Always check the string for valid numeric content.

---

## 29. Converting Strings to Numbers, Numbers to Strings

### Key Points

* `Number(str)`: Converts string to number.
* `String(num)` or `.toString()`: Converts number to string.

### Examples

```javascript
console.log(Number('123')); // 123
console.log(String(123)); // '123'
console.log((123).toString()); // '123'
```

**Exam Tip:** Use `Number` for arithmetic and `String` for concatenation.

---

## 30. Controlling the Length of Decimals

### Key Points

* `toFixed(n)`: Returns string with n decimal places.
* `toPrecision(n)`: Formats number to n significant digits.
* Useful for currency and precise calculations.

### Examples

```javascript
let num = 12.34567;
console.log(num.toFixed(2)); // '12.35'
console.log(num.toPrecision(4)); // '12.35'
```

**Exam Tip:** `toFixed` rounds the number while formatting.

---

## ✅ Summary Tips for Exams

1. Strings are **immutable**, so methods return new strings.
2. Use `.length` to get string size.
3. `slice`, `substring`, `substr` have different rules for extracting.
4. `indexOf` and `lastIndexOf` are **case-sensitive**.
5. `charAt` and `[index]` can access characters.
6. `replace` only replaces first occurrence unless using regex `/g`.
7. `Math.round`, `ceil`, `floor`, `toFixed` are essential for rounding.
8. `Math.random()` must be multiplied and adjusted for custom ranges.
9. `parseInt`, `parseFloat`, `Number`, and `String` are key type conversion methods.
10. Control decimal places with `toFixed` or `toPrecision`.

*End of JavaScript Strings and Numbers README*
