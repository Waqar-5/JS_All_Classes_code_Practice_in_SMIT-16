# JavaScript Strings and Numbers: 100 MCQs with Answer Key

This README.md contains **100 multiple-choice questions** covering JavaScript topics 21–30, with **10 MCQs per topic** and an **answer key at the bottom**. Each question has options a–d.

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

### 21. Changing Case (10 MCQs)

1. Which method converts a string to uppercase?

   * a) toUpperCase()  b) toLowerCase()  c) upperCase()  d) uppercase()
2. Which method converts a string to lowercase?

   * a) toLowerCase()  b) toUpperCase()  c) lowerCase()  d) lowercase()
3. 'hello'.toUpperCase() returns?

   * a) HELLO  b) hello  c) Hello  d) Error
4. Can string methods be chained?

   * a) Yes  b) No  c) Sometimes  d) Only in ES6
5. Does changing case modify the original string?

   * a) No  b) Yes  c) Sometimes  d) Only with const
6. 'Test'.toLowerCase().toUpperCase() returns?

   * a) TEST  b) test  c) Test  d) Error
7. Is toUpperCase() locale-sensitive?

   * a) Yes  b) No  c) Only in modern browsers  d) Depends on OS
8. What is the output of 'abc123'.toUpperCase()?

   * a) ABC123  b) abc123  c) 123ABC  d) Error
9. Which method is used to capitalize the first letter?

   * a) Slice + toUpperCase()  b) capitalize()  c) upperFirst()  d) toTitleCase()
10. Does toLowerCase() affect numbers in the string?

    * a) No  b) Yes  c) Only integers  d) Only decimals

### 22. Strings: Measuring Length and Extracting Parts (10 MCQs)

1. How to get the length of a string?

   * a) .length  b) .size  c) .count  d) length()
2. 'Hello'.length returns?

   * a) 5  b) 4  c) 6  d) 0
3. Which method extracts substring from start to end index?

   * a) slice()  b) substring()  c) substr()  d) All above
4. 'Hello'.slice(0,4) returns?

   * a) Hell  b) Hello  c) ello  d) He
5. substring(0,4) includes which indices?

   * a) 0 to 3  b) 0 to 4  c) 1 to 4  d) 1 to 3
6. substr(start,length) differs how?

   * a) Second parameter is length  b) Second parameter is end  c) First parameter is length  d) No difference
7. 'Hello'.slice(-3) returns?

   * a) llo  b) Hel  c) lo  d) Error
8. Can slice() accept negative indices?

   * a) Yes  b) No  c) Sometimes  d) Only in ES6
9. substring() accepts negative indices?

   * a) No  b) Yes  c) Converts to length  d) Throws error
10. str.substr(0,3) returns?

    * a) First three characters  b) Last three  c) Whole string  d) Error

### 23. Strings: Finding Segments (10 MCQs)

1. indexOf('a') returns?

   * a) Index of first occurrence  b) Index of last occurrence  c) Boolean  d) Undefined
2. lastIndexOf('a') returns?

   * a) Last occurrence  b) First occurrence  c) Boolean  d) Undefined
3. indexOf returns -1 if not found?

   * a) Yes  b) No  c) Sometimes  d) Always 0
4. indexOf is case sensitive?

   * a) Yes  b) No  c) Only numbers  d) Only letters
5. indexOf('Java',5) searches from?

   * a) Index 5  b) Index 0  c) Index 1  d) Index -5
6. lastIndexOf('Java',10) searches backward?

   * a) Yes  b) No  c) Sometimes  d) Only in strings
7. 'abc'.indexOf('d') returns?

   * a) -1  b) 0  c) Error  d) Null
8. Can indexOf use regex?

   * a) No  b) Yes  c) Only in ES6  d) Only in Node.js
9. 'JavaScript'.includes('Script') returns?

   * a) true  b) false  c) 'Script'  d) Index
10. indexOf('') returns?

    * a) 0  b) -1  c) String length  d) Null

### 24. Strings: Finding a Character at a Location (10 MCQs)

1. charAt(2) returns?

   * a) Character at index 2  b) Character at index 3  c) First character  d) Last character
2. 'Hello'[1] returns?

   * a) e  b) H  c) l  d) o
3. Indexing starts from?

   * a) 0  b) 1  c) -1  d) Depends
4. Negative index in charAt?

   * a) Returns ''  b) Error  c) Last char  d) First char
5. Can you modify string via [index]?

   * a) No  b) Yes  c) Only in ES6  d) Only with let
6. charAt returns string or number?

   * a) String  b) Number  c) Boolean  d) Undefined
7. str[10] for shorter string?

   * a) undefined  b) ''  c) Error  d) null
8. Can you chain charAt with toUpperCase()?

   * a) Yes  b) No  c) Only in ES6  d) Only numbers
9. Access first character?

   * a) str.charAt(0)  b) str[0]  c) Both a & b  d) str[1]
10. Access last character?

    * a) str.charAt(str.length-1)  b) str[str.length-1]  c) Both a & b  d) str[0]

### 25. Strings: Replacing Characters (10 MCQs)

1. Which method replaces first occurrence of substring?

   * a) replace()  b) replaceAll()  c) swap()  d) change()
2. Replace all occurrences?

   * a) replaceAll()  b) replace()  c) swap()  d) update()
3. 'abcabc'.replace('a','x') returns?

   * a) xbcabc  b) xbcxbc  c) abcabc  d) xxbcabc
4. replace() is case sensitive?

   * a) Yes  b) No  c) Only strings  d) Only numbers
5. Can replace use regex?

   * a) Yes  b) No  c) Only literals  d) Only numbers
6. 'Hello'.replace('l','L') returns?

   * a) HeLlo  b) HeLLo  c) HELLo  d) Hellow
7. replaceAll() is ES?

   * a) ES2021  b) ES6  c) ES5  d) ES2015
8. Can you chain replace()?

   * a) Yes  b) No  c) Only in ES6  d) Only strings
9. What happens if substring not found?

   * a) String unchanged  b) Error  c) Null  d) Empty string
10. 'abc'.replace(/a/g,'x') returns?

    * a) xbc  b) xbcabc  c) abc  d) xxbc

### 26. Rounding Numbers (10 MCQs)

1. Math.round(4.5) returns?

   * a) 5  b) 4  c) 4.5  d) 0
2. Math.floor(4.9) returns?

   * a) 4  b) 5  c) 4.9  d) 0
3. Math.ceil(4.1) returns?

   * a) 5  b) 4  c) 4.1  d) 0
4. Math.round(-1.5) returns?

   * a) -1  b) -2  c) -1.5  d) 0
5. Math.floor(-1.1) returns?

   * a) -2  b) -1  c) 0  d) -1.1
6. Math.ceil(-1.1) returns?

   * a) -1  b) -2  c) 0  d) -1.1
7. Math.round(0.49) returns?

   * a) 0  b) 1  c) 0.5  d) -1
8. Math.floor(0.99) returns?

   * a) 0  b) 1  c) -1  d) 0.99
9. Rounding to nearest integer?

   * a) Math.round()  b) Math.floor()  c) Math.ceil()  d) parseInt()
10. Does Math.ceil always increase value?

    * a) Yes  b) No  c) Sometimes  d) Only positive

### 27. Generating Random Numbers (10 MCQs)

1. Which method generates random number 0–1?

   * a) Math.random()  b) Math.rand()  c) random()  d) Math.random(0,1)
2. Math.random()*10 generates?

   * a) Number 0 ≤ x <10  b) 1–10  c) 0–9  d) 0–10 inclusive
3. Convert Math.random() to integer 0–9?

   * a) Math.floor(Math.random()*10)  b) Math.round()  c) parseInt()  d) Math.ceil()
4. Can Math.random() generate negative numbers?

   * a) No  b) Yes  c) Sometimes  d) Only with -1 multiplier
5. Random number between min & max?

   * a) Math.floor(Math.random()*(max-min+1))+min  b) Math.random()*(max-min)+min  c) Math.round()  d) Math.ceil()
6. Math.random() === Math.random()?

   * a) False  b) True  c) Sometimes  d) Only integers
7. Can Math.random() return exactly 1?

   * a) No  b) Yes  c) Only decimals  d) Never
8. Math.floor(Math.random()*6)+1 simulates?

   * a) Dice roll 1–6  b) 0–5  c) 1–5  d) 0–6
9. Is Math.random() seedable?

   * a) No  b) Yes  c) Only in Node.js  d) Only with libraries
10. Multiply random by negative number?

    * a) Generates negative numbers  b) Error  c) NaN  d) Zero

### 28. Converting Strings to Integers and Decimals (10 MCQs)

1. parseInt('123') returns?

   * a) 123  b) '123'  c) NaN  d) 0
2. parseFloat('12.34') returns?

   * a) 12.34  b) '12.34'  c) NaN  d) 12
3. Number('123.45') returns?

   * a) 123.45  b) '123.45'  c) NaN  d) 0
4. parseInt('12abc') returns?

   * a) 12  b) NaN  c) '12'  d) 0
5. parseFloat('12.34abc') returns?

   * a) 12.34  b) NaN  c) '12.34'  d) 0
6. Number('12abc') returns?

   * a) NaN  b) 12  c) '12'  d) 0
7. parseInt('0x10') returns?

   * a) 16  b) 10  c) '0x10'  d) 0
8. parseFloat('0.1e2') returns?

   * a) 10  b) 0.1  c) '0.1e2'  d) 0
9. Can parseInt accept radix?

   * a) Yes  b) No  c) Only base 10  d) Only base 16
10. Converting string '123.45' using Number()?

    * a) 123.45  b) '123.45'  c) 123  d) NaN

### 29. Converting Strings to Numbers, Numbers to Strings (10 MCQs)

1. String(123) returns?

   * a) '123'  b) 123  c) NaN  d) 0
2. (123).toString() returns?

   * a) '123'  b) 123  c) NaN  d) 0
3. Number('123') returns?

   * a) 123  b) '123'  c) NaN  d) 0
4. Number('12.34') returns?

   * a) 12.34  b) '12.34'  c) NaN  d) 0
5. Can toString() take radix?

   * a) Yes  b) No  c) Only decimal  d) Only binary
6. parseInt('123') returns?

   * a) 123  b) '123'  c) NaN  d) 0
7. Converting number to string: 123 + ''?

   * a) '123'  b) 123  c) NaN  d) 0
8. Number('abc') returns?

   * a) NaN  b) 0  c) 'abc'  d) 1
9. String(true) returns?

   * a) 'true'  b) true  c) NaN  d) 1
10. (123.45).toString() returns?

    * a) '123.45'  b) 123.45  c) NaN  d) 123

### 30. Controlling the Length of Decimals (10 MCQs)

1. (3.14159).toFixed(2) returns?

   * a) '3.14'  b) 3.14  c) '3.14159'  d) 3
2. (3.14159).toPrecision(3) returns?

   * a) '3.14'  b) '3.14e+0'  c) 3.14  d) 3.142
3. toFixed returns?

   * a) String  b) Number  c) NaN  d) Integer
4. toPrecision returns?

   * a) String  b) Number  c) Boolean  d) Undefined
5. (1.005).toFixed(2) returns?

   * a) '1.01'  b) '1.00'  c) '1.05'  d) 1.01
6. Controlling decimal length for display?

   * a) toFixed()  b) toPrecision()  c) Both  d) None
7. (123.456).toPrecision(4) returns?

   * a) '123.5'  b) '123.46'  c) '123.456'  d) 123.5
8. toFixed(-1) returns?

   * a) Error  b) String  c) Number  d) NaN
9. Can toFixed be chained with Number()?

   * a) Yes  b) No  c) Only strings  d) Only integers
10. (0.1 + 0.2).toFixed(2) returns?

    * a) '0.30'  b) '0.3'  c) 0.3  d) 0.30

---

##

# JavaScript Strings and Numbers: 100 MCQs with Answer Key

This README.md contains **100 multiple-choice questions** covering JavaScript topics 21–30, with **10 MCQs per topic** and an **answer key at the bottom**. Each question has options a–d.

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

*(MCQs content goes here as you provided)*

---

## Answer Key

### 21. Changing Case

1. a  2. a  3. a  4. a  5. a  6. a  7. a  8. a  9. a  10. a

### 22. Strings: Measuring Length and Extracting Parts

1. a  2. a  3. d  4. a  5. a  6. a  7. a  8. a  9. a  10. a

### 23. Strings: Finding Segments

1. a  2. a  3. a  4. a  5. a  6. a  7. a  8. a  9. a  10. a

### 24. Strings: Finding a Character at a Location

1. a  2. a  3. a  4. a  5. a  6. a  7. a  8. a  9. c  10. c

### 25. Strings: Replacing Characters

1. a  2. a  3. a  4. a  5. a  6. a  7. a  8. a  9. a  10. a

### 26. Rounding Numbers

1. a  2. a  3. a  4. b  5. a  6. a  7. a  8. a  9. a  10. a

### 27. Generating Random Numbers

1. a  2. a  3. a  4. a  5. a  6. a  7. a  8. a  9. a  10. a

### 28. Converting Strings to Integers and Decimals

1. a  2. a  3. a  4. a  5. a  6. a  7. a  8. a  9. a  10. a

### 29. Converting Strings to Numbers, Numbers to Strings

1. a  2. a  3. a  4. a  5. a  6. a  7. a  8. a  9. a  10. a

### 30. Controlling the Length of Decimals

1. a  2. d  3. a  4. a  5. a  6. c  7. a  8. a  9. a  10. a
