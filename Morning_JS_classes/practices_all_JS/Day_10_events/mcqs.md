# DOM Manipulation Mastery — Complete Notes (Beginner to Advanced)

This README covers **core DOM manipulation topics** required for:

* Front-end development
* JavaScript interviews
* Exams and practical projects

Topics Included:
49. Reading field values
50. Setting field values
51. Reading and setting paragraph text
52. Manipulating images and text
53. Swapping images
54. Swapping images and setting classes
55. Setting styles
56. Target all elements by tag name
57. Target some elements by tag name

---

## 49. Reading Field Values

### What it means

Reading the value entered by a user into an input field (text box, email, password, etc.)

### Why it matters

* Form validation
* User input handling
* Dynamic UI updates

### Code Example

```html
<input type="text" id="username" />
<button onclick="readValue()">Read</button>

<script>
function readValue() {
  const value = document.getElementById("username").value;
  console.log(value);
}
</script>
```

### Key Points

* `.value` is used for form fields
* Always read value inside an event (click, submit, change)

---

## 50. Setting Field Values

### What it means

Programmatically putting text into an input field

### Why it matters

* Auto-fill forms
* Reset fields
* Prefill data from APIs

### Code Example

```js
document.getElementById("username").value = "Waqar Ali";
```

### Advanced

```js
function setValue(id, value) {
  document.getElementById(id).value = value;
}
```

---

## 51. Reading and Setting Paragraph Text

### What it means

Getting or changing text inside a paragraph

### Methods

* `innerText`
* `textContent`
* `innerHTML`

### Code Example

```html
<p id="para">Hello World</p>

<script>
const p = document.getElementById("para");
console.log(p.innerText);

p.innerText = "Updated Text";
</script>
```

### Differences

| Property    | Behavior      |
| ----------- | ------------- |
| innerText   | Visible text  |
| textContent | Raw text      |
| innerHTML   | Includes HTML |

---

## 52. Manipulating Images and Text

### What it means

Changing images or text dynamically

### Image Change Example

```html
<img id="pic" src="img1.jpg" />
<button onclick="changeImage()">Change</button>

<script>
function changeImage() {
  document.getElementById("pic").src = "img2.jpg";
}
</script>
```

### Text Change Example

```js
document.getElementById("para").innerText = "New content";
```

---

## 53. Swapping Images

### What it means

Replacing one image with another

### Code Example

```js
const img = document.getElementById("pic");
img.src = img.src.includes("img1") ? "img2.jpg" : "img1.jpg";
```

---

## 54. Swapping Images and Setting Classes

### What it means

Change image and apply a class

### Code Example

```js
const img = document.getElementById("pic");
img.src = "img2.jpg";
img.classList.add("highlight");
```

### Toggle Example

```js
img.classList.toggle("active");
```

---

## 55. Setting Styles

### What it means

Applying inline CSS using JavaScript

### Code Example

```js
const box = document.getElementById("box");
box.style.backgroundColor = "red";
box.style.padding = "20px";
```

### Best Practice

Prefer CSS classes:

```js
box.classList.add("danger");
```

---

## 56. Target All Elements by Tag Name

### What it means

Selecting all elements of a specific type

### Methods

* `getElementsByTagName`
* `querySelectorAll`

### Code Example

```js
const paras = document.getElementsByTagName("p");

for (let p of paras) {
  p.style.color = "blue";
}
```

---

## 57. Target Some Elements by Tag Name

### What it means

Selecting only certain elements

### Code Example

```js
const paras = document.querySelectorAll(".container p");

paras.forEach(p => {
  p.style.fontWeight = "bold";
});
```

---

## Interview & Exam Tips (High‑Yield)

### 1. Reading Field Values

**Interview Point:**

* Always use `.value` for input, textarea, select elements.
* Never use `.innerText` or `.innerHTML` for form fields.

**Memory Trick:**

> *Input = Value*

**When to Use:**

* Form validation
* Login systems
* Search bars

---

### 2. Setting Field Values

**Interview Point:**

* Set `.value` to prefill or reset forms.
* Useful in auto‑fill and form reset features.

**Memory Trick:**

> *Set input → use .value = something*

**When to Use:**

* API data binding
* Reset buttons
* Default form values

---

### 3. Reading & Setting Paragraph Text

**Interview Point:**

* `.innerText` respects CSS visibility.
* `.textContent` is faster and raw.
* `.innerHTML` is dangerous if user input is used.

**Memory Trick:**

> *HTML = risky*
> *Text = safe*

**When to Use:**

* Dynamic messages
* Notifications
* UI updates

---

### 4. Manipulating Images

**Interview Point:**

* Change `.src` attribute dynamically.
* Use `alt` for accessibility.

**Memory Trick:**

> *Image source = .src*

**When to Use:**

* Theme change
* Galleries
* UI feedback

---

### 5. Swapping Images

**Interview Point:**

* Toggle image using condition or dataset.

**Memory Trick:**

> *If image = A → switch to B*

**When to Use:**

* Like buttons
* Product previews

---

### 6. Swapping Images + Classes

**Interview Point:**

* Always use `classList.add/remove/toggle`.

**Memory Trick:**

> *Style change = classList*

**When to Use:**

* Highlight effects
* Active states

---

### 7. Setting Styles

**Interview Point:**

* Inline styles override CSS.
* Prefer CSS classes.

**Memory Trick:**

> *JS styles = last resort*

**When to Use:**

* Dynamic animations
* JS‑only styling

---

### 8. Target All Elements by Tag

**Interview Point:**

* `getElementsByTagName` is live collection.
* `querySelectorAll` is static.

**Memory Trick:**

> *All = querySelectorAll*

**When to Use:**

* Bulk styling
* Data processing

---

### 9. Target Some Elements by Tag

**Interview Point:**

* Use CSS selectors inside `querySelectorAll`.

**Memory Trick:**

> *Filtered = querySelectorAll('.box p')*

**When to Use:**

* Scoped updates
* Component‑based DOM

---

## One‑Line Definitions (Exam Ready)

* Reading Field Values → Getting user input using `.value`
* Setting Field Values → Assigning text into inputs using `.value = ...`
* Paragraph Text → Using `.innerText`, `.textContent`, `.innerHTML`
* Image Manipulation → Changing `.src` attribute
* Swapping Images → Toggling image source
* Classes → Styling using `classList`
* Styles → Inline CSS via `.style`
* All Elements → `querySelectorAll('tag')`
* Some Elements → `querySelectorAll('parent tag')`

---

## Golden Rules (Must Remember)

1. Never use `.innerHTML` with user data
2. Always use `.value` for inputs
3. Prefer `classList` over `.style`
4. Prefer `querySelectorAll` for modern code
5. Keep DOM logic after page load

---

## Super Memory Cheatsheet

| Task         | Use                |
| ------------ | ------------------ |
| Input value  | `.value`           |
| Text content | `.innerText`       |
| Raw text     | `.textContent`     |
| HTML         | `.innerHTML`       |
| Image change | `.src`             |
| Style        | `classList`        |
| All elements | `querySelectorAll` |
| One element  | `getElementById`   |

---

## Exam‑Cracking Strategy

1. Memorize one‑line definitions
2. Practice toggling images
3. Change input values dynamically
4. Use classes instead of styles
5. Select elements using querySelectorAll

---

## Final Interview Hack

If confused:

> *Input → .value*
> *Text → innerText*
> *HTML → innerHTML (danger)*
> *Many → querySelectorAll*
> *Style → classList*

---

## Final Note

Revise this README twice → Crack DOM questions in exams, interviews, and projects.

# 135 MCQs — DOM Manipulation Mastery

(15 MCQs per topic)

---

## Topic 49: Reading Field Values

1. Which property is used to read input field data?
   A. innerText
   B. value
   C. textContent
   D. data

2. Which element uses `.value`?
   A. div
   B. span
   C. input
   D. p

3. Best event to read form input?
   A. load
   B. click
   C. mouseover
   D. scroll

4. `.value` returns what type?
   A. number
   B. string
   C. boolean
   D. object

5. For select dropdown value?
   A. selected
   B. option
   C. value
   D. innerText

6. Read textarea text?
   A. innerText
   B. textContent
   C. value
   D. data

7. Best practice when reading inputs?
   A. Global scope
   B. Inside event
   C. On page load
   D. On resize

8. `.value` works on?
   A. Forms only
   B. Input-like elements
   C. Any element
   D. Only textarea

9. What happens if input empty?
   A. null
   B. undefined
   C. empty string
   D. error

10. Input password read via?
    A. innerHTML
    B. textContent
    C. value
    D. alt

11. Wrong way to read input?
    A. el.value
    B. el.innerText
    C. el.textContent
    D. el.getValue

12. Which is safest?
    A. innerHTML
    B. value
    C. document.write
    D. alert

13. For radio buttons?
    A. checked + value
    B. innerText
    C. src
    D. id

14. For checkbox?
    A. checked
    B. value
    C. innerText
    D. name

15. Best for form validation?
    A. innerHTML
    B. value
    C. src
    D. className

---

## Topic 50: Setting Field Values

16. Set input text using?
    A. innerText
    B. value
    C. textContent
    D. data

17. Reset input field?
    A. value = ''
    B. innerHTML = ''
    C. delete value
    D. remove()

18. Prefill data from API?
    A. value
    B. innerText
    C. src
    D. classList

19. Auto-fill feature uses?
    A. innerHTML
    B. value
    C. style
    D. dataset

20. Set textarea text?
    A. innerText
    B. value
    C. html
    D. id

21. Best for form reset?
    A. form.reset()
    B. input.value=''
    C. reload page
    D. both A and B

22. Setting select option?
    A. selectedIndex
    B. value
    C. innerText
    D. id

23. Dynamic default value?
    A. value
    B. innerHTML
    C. classList
    D. src

24. Setting password field?
    A. value
    B. innerHTML
    C. textContent
    D. dataset

25. Clear multiple inputs?
    A. loop + value=''
    B. reload
    C. hide
    D. remove

26. When to set values?
    A. before DOM load
    B. after DOM load
    C. anytime
    D. never

27. Using API data binding?
    A. value
    B. textContent
    C. src
    D. style

28. Setting checkbox?
    A. value
    B. checked
    C. innerHTML
    D. textContent

29. Setting radio?
    A. checked
    B. value
    C. name
    D. id

30. Wrong property?
    A. value
    B. innerText
    C. checked
    D. selectedIndex

---

## Topic 51: Reading & Setting Paragraph Text

31. Visible text?
    A. innerHTML
    B. innerText
    C. value
    D. alt

32. Raw text?
    A. textContent
    B. innerText
    C. value
    D. data

33. Includes HTML tags?
    A. innerHTML
    B. textContent
    C. innerText
    D. src

34. Fastest?
    A. innerText
    B. textContent
    C. innerHTML
    D. dataset

35. Unsafe with user input?
    A. innerHTML
    B. innerText
    C. value
    D. src

36. Best for notifications?
    A. innerText
    B. innerHTML
    C. src
    D. value

37. Remove all text?
    A. innerText=''
    B. textContent=''
    C. both
    D. none

38. Add bold text?
    A. innerHTML
    B. innerText
    C. value
    D. alt

39. Replace text?
    A. innerText
    B. style
    C. src
    D. className

40. Read paragraph text?
    A. innerText
    B. value
    C. src
    D. id

41. Safe method?
    A. innerText
    B. innerHTML
    C. src
    D. alt

42. Preserve whitespace?
    A. textContent
    B. innerText
    C. value
    D. id

43. Read hidden text?
    A. innerText
    B. textContent
    C. value
    D. alt

44. Insert emoji?
    A. innerText
    B. value
    C. src
    D. dataset

45. Replace HTML content?
    A. innerHTML
    B. innerText
    C. value
    D. src

---

## Topic 52: Manipulating Images & Text

46. Change image source?
    A. href
    B. src
    C. link
    D. data

47. Add alt text?
    A. alt
    B. title
    C. innerText
    D. id

48. Change caption?
    A. innerText
    B. src
    C. value
    D. style

49. Best accessibility?
    A. alt
    B. title
    C. src
    D. href

50. Dynamic galleries?
    A. src change
    B. classList
    C. style
    D. id

51. Replace image text?
    A. innerText
    B. src
    C. alt
    D. title

52. Animate text?
    A. classList
    B. src
    C. value
    D. id

53. Toggle description?
    A. innerText
    B. src
    C. style
    D. href

54. Image hover?
    A. onmouseover + src
    B. onclick
    C. onload
    D. resize

55. SEO image?
    A. alt
    B. src
    C. title
    D. id

56. Dynamic banners?
    A. src swap
    B. reload
    C. hide
    D. remove

57. Add watermark text?
    A. innerHTML
    B. value
    C. src
    D. alt

58. Best for UI feedback?
    A. text + image
    B. src only
    C. reload
    D. hide

59. Replace hero image?
    A. src
    B. alt
    C. title
    D. id

60. Change image class?
    A. classList
    B. src
    C. value
    D. alt

---

## Topic 53: Swapping Images

61. Swap logic uses?
    A. if/else
    B. while
    C. switch
    D. map

62. Toggle image?
    A. src change
    B. id change
    C. class change
    D. name change

63. Compare src?
    A. includes()
    B. match()
    C. split()
    D. join()

64. Dataset swap?
    A. data-src
    B. value
    C. alt
    D. title

65. On click swap?
    A. onclick
    B. onload
    C. resize
    D. scroll

66. Like button?
    A. swap image
    B. hide image
    C. delete
    D. move

67. Product preview?
    A. swap image
    B. reload page
    C. hide
    D. remove

68. Best event?
    A. click
    B. hover
    C. scroll
    D. resize

69. Memory efficient?
    A. toggle src
    B. reload
    C. duplicate
    D. clone

70. Accessibility?
    A. update alt
    B. src only
    C. hide alt
    D. ignore

71. Two-state UI?
    A. swap
    B. hide
    C. delete
    D. move

72. Use dataset?
    A. data-alt
    B. data-src
    C. data-id
    D. data-name

73. Animation effect?
    A. classList
    B. src
    C. value
    D. alt

74. Preload images?
    A. new Image()
    B. reload
    C. remove
    D. hide

75. Avoid flicker?
    A. preload
    B. reload
    C. hide
    D. move

---

## Topic 54: Swapping Images & Classes

76. Add class?
    A. classList.add
    B. className
    C. style
    D. id

77. Remove class?
    A. classList.remove
    B. delete
    C. clear
    D. hide

78. Toggle class?
    A. classList.toggle
    B. switch
    C. flip
    D. swap

79. Active state?
    A. classList
    B. src
    C. value
    D. alt

80. Hover effect?
    A. classList
    B. src
    C. id
    D. title

81. Animation?
    A. classList
    B. style
    C. src
    D. alt

82. Multi-classes?
    A. classList.add('a','b')
    B. className='a b'
    C. both
    D. none

83. Replace class?
    A. classList.replace
    B. swap
    C. change
    D. move

84. Best practice?
    A. classList
    B. style
    C. inline CSS
    D. id

85. Remove all classes?
    A. className=''
    B. classList.clear
    C. delete
    D. hide

86. Toggle + image?
    A. classList + src
    B. value
    C. id
    D. name

87. Visual feedback?
    A. classList
    B. src
    C. reload
    D. hide

88. Active menu?
    A. class toggle
    B. src
    C. reload
    D. delete

89. Responsive UI?
    A. classList
    B. style
    C. src
    D. id

90. Animation library?
    A. classList
    B. src
    C. value
    D. alt

---

## Topic 55: Setting Styles

91. Inline style?
    A. element.style
    B. classList
    C. css
    D. id

92. CamelCase?
    A. backgroundColor
    B. background-color
    C. bgColor
    D. colorBg

93. Multiple styles?
    A. style.cssText
    B. style.all
    C. style.group
    D. style.set

94. Override CSS?
    A. inline style
    B. class
    C. id
    D. tag

95. Best practice?
    A. classList
    B. style
    C. inline
    D. id

96. Animation style?
    A. classList
    B. style
    C. src
    D. alt

97. Remove style?
    A. style.property=''
    B. delete
    C. hide
    D. clear

98. Read style?
    A. getComputedStyle
    B. style
    C. css
    D. id

99. Transition?
    A. style.transition
    B. animate()
    C. move()
    D. swap()

100. Z-index?
     A. style.zIndex
     B. style.z-index
     C. zIndex()
     D. css

101. Visibility?
     A. style.display
     B. style.visible
     C. style.hide
     D. style.show

102. Responsive?
     A. classList
     B. style
     C. id
     D. name

103. Remove inline?
     A. style.cssText=''
     B. reload
     C. hide
     D. delete

104. Best for hover?
     A. CSS
     B. JS
     C. HTML
     D. API

105. Inline vs class?
     A. class better
     B. inline better
     C. both same
     D. none

---

## Topic 56: Target All Elements by Tag

106. Select all p?
     A. getElementsByTagName
     B. querySelectorAll
     C. both
     D. none

107. Live collection?
     A. getElementsByTagName
     B. querySelectorAll
     C. both
     D. none

108. Static NodeList?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

109. Modern approach?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

110. Loop NodeList?
     A. forEach
     B. map
     C. reduce
     D. filter

111. HTMLCollection?
     A. getElementsByTagName
     B. querySelectorAll
     C. both
     D. none

112. Bulk style?
     A. loop + style
     B. reload
     C. hide
     D. delete

113. Filter elements?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

114. Convert to array?
     A. Array.from()
     B. JSON.parse
     C. map()
     D. join()

115. Performance?
     A. querySelectorAll
     B. getElementsByTagName
     C. both similar
     D. none

116. Nested tags?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

117. Read text?
     A. loop + innerText
     B. src
     C. value
     D. alt

118. Change class?
     A. loop + classList
     B. reload
     C. hide
     D. remove

119. NodeList length?
     A. length
     B. size
     C. count
     D. total

120. Modern UI?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

---

## Topic 57: Target Some Elements by Tag

121. Scoped select?
     A. querySelectorAll('.box p')
     B. getElementsByTagName
     C. getElementById
     D. className

122. CSS selector?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

123. First match?
     A. querySelector
     B. getElementsByTagName
     C. both
     D. none

124. Complex selector?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

125. Descendant select?
     A. '.container p'
     B. 'p.container'
     C. '#p'
     D. 'p#'

126. Attribute filter?
     A. input[type="text"]
     B. input.text
     C. input#text
     D. input@text

127. nth-child?
     A. p:nth-child(2)
     B. p:child(2)
     C. p#2
     D. p(2)

128. Multiple classes?
     A. '.a.b'
     B. '.a .b'
     C. 'a b'
     D. '#a.b'

129. Best practice?
     A. querySelectorAll
     B. getElementsByTagName
     C. both
     D. none

130. Filter by parent?
     A. '.card img'
     B. 'img.card'
     C. '#img'
     D. 'img#'

131. Direct child?
     A. 'ul > li'
     B. 'ul li'
     C. 'ul+li'
     D. 'ul~li'

132. Adjacent sibling?
     A. 'h1 + p'
     B. 'h1 p'
     C. 'h1 ~ p'
     D. 'h1 > p'

133. General sibling?
     A. 'h1 ~ p'
     B. 'h1 + p'
     C. 'h1 p'
     D. 'h1 > p'

134. Exclude selector?
     A. p:not(.active)
     B. p:remove()
     C. p:hide()
     D. p:skip()

135. Data attribute?
     A. [data-id]
     B. #data-id
     C. .data-id
     D. @data-id

---

# Answer Key

1-B, 2-C, 3-B, 4-B, 5-C, 6-C, 7-B, 8-B, 9-C, 10-C, 11-D, 12-B, 13-A, 14-A, 15-B

16-B, 17-A, 18-A, 19-B, 20-B, 21-D, 22-B, 23-A, 24-A, 25-A, 26-B, 27-A, 28-B, 29-A, 30-B

31-B, 32-A, 33-A, 34-B, 35-A, 36-A, 37-C, 38-A, 39-A, 40-A, 41-A, 42-A, 43-B, 44-A, 45-A

46-B, 47-A, 48-A, 49-A, 50-A, 51-A, 52-A, 53-A, 54-A, 55-A, 56-A, 57-A, 58-A, 59-A, 60-A

61-A, 62-A, 63-A, 64-A, 65-A, 66-A, 67-A, 68-A, 69-A, 70-A, 71-A, 72-B, 73-A, 74-A, 75-A

76-A, 77-A, 78-A, 79-A, 80-A, 81-A, 82-C, 83-A, 84-A, 85-A, 86-A, 87-A, 88-A, 89-A, 90-A

91-A, 92-A, 93-A, 94-A, 95-A, 96-A, 97-A, 98-A, 99-A, 100-A, 101-A, 102-A, 103-A, 104-A, 105-A

106-C, 107-A, 108-A, 109-A, 110-A, 111-A, 112-A, 113-A, 114-A, 115-C, 116-C, 117-A, 118-A, 119-A, 120-A

121-A, 122-A, 123-A, 124-A, 125-A, 126-A, 127-A, 128-A, 129-A, 130-A, 131-A, 132-A, 133-A, 134-A, 135-A
