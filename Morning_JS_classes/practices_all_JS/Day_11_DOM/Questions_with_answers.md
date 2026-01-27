# DOM Mastery Notes (Topics 57–64)

> **Purpose:** A complete, exam-ready, developer-focused guide to core DOM concepts.
> Covers beginner → advanced points with clear explanations, best practices, and code examples.

---

## 57. Target Some Elements by Tag Name

### What it Means

Selecting elements based on their HTML tag (e.g., `div`, `p`, `li`).

### Methods

#### 1. `getElementsByTagName()` (Live Collection)

```js
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);
```

* Returns **HTMLCollection** (live, auto-updates)
* Older API, but still useful

#### 2. `querySelectorAll()` (Static NodeList)

```js
const divs = document.querySelectorAll("div");
```

* Returns **NodeList** (static)
* Supports CSS selectors

### Key Differences

| Feature       | getElementsByTagName | querySelectorAll |
| ------------- | -------------------- | ---------------- |
| Live updates  | ✅ Yes                | ❌ No             |
| CSS selectors | ❌ No                 | ✅ Yes            |
| Modern        | ❌ Legacy             | ✅ Recommended    |

### Interview Tip

> Prefer `querySelectorAll()` for predictable behavior.

---

## 58. The DOM (Document Object Model)

### Definition

The **DOM** is a tree-like structure representing the HTML document.

### Why It Exists

* Enables JavaScript to read & modify HTML
* Allows dynamic content
* Enables interactivity

### Example

```html
<p id="msg">Hello</p>
<script>
  document.getElementById("msg").textContent = "Hi DOM";
</script>
```

### Core Concepts

* Nodes
* Elements
* Attributes
* Text

### DOM Tree

```
Document
 └── html
     ├── head
     └── body
```

### Interview Tip

> DOM is a **programming interface** for HTML/XML.

---

## 59. DOM: Parents and Children

### Relationships

```html
<div id="parent">
  <p>Child 1</p>
  <p>Child 2</p>
</div>
```

```js
const parent = document.getElementById("parent");
console.log(parent.children);
```

### Properties

| Property        | Description                        |
| --------------- | ---------------------------------- |
| `parentNode`    | Immediate parent node              |
| `parentElement` | Parent if element                  |
| `children`      | Element children only              |
| `childNodes`    | All nodes (text, comment, element) |

### Interview Tip

> Use `children` for elements only.

---

## 60. DOM: Finding Children

### Methods

```js
const div = document.getElementById("box");

// All nodes
console.log(div.childNodes);

// Only elements
console.log(div.children);

// First child
console.log(div.firstChild);

// First element
console.log(div.firstElementChild);

// Last element
console.log(div.lastElementChild);
```

### Node Types

| Node     | Type |
| -------- | ---- |
| Element  | 1    |
| Text     | 3    |
| Comment  | 8    |
| Document | 9    |

### Interview Tip

> Use `firstElementChild` not `firstChild`.

---

## 61. DOM: Junk Artifacts and nodeType

### What Are Junk Artifacts

Whitespace and line breaks become text nodes.

```html
<div>
  <p>Hi</p>
</div>
```

```js
console.log(div.childNodes);
```

### nodeType Usage

```js
div.childNodes.forEach(node => {
  if (node.nodeType === 1) {
    console.log(node.tagName);
  }
});
```

### NodeType Constants

| Value | Meaning  |
| ----- | -------- |
| 1     | Element  |
| 3     | Text     |
| 8     | Comment  |
| 9     | Document |

### Interview Tip

> Junk artifacts = text nodes.

---

## 62. DOM: More Ways to Target Elements

### Methods

```js
document.getElementById("box");
document.getElementsByClassName("card");
document.getElementsByTagName("li");
document.querySelector(".card");
document.querySelectorAll(".card");
```

### Advanced Selectors

```js
document.querySelector("ul li:first-child");
document.querySelectorAll("div[data-id]");
```

### Interview Tip

> `querySelector` supports CSS selectors.

---

## 63. DOM: Getting a Target's Name

### Properties

```js
const el = document.querySelector("div");
console.log(el.tagName);   // DIV
console.log(el.nodeName);  // DIV
```

### Attribute Access

```js
el.getAttribute("id");
el.id;
```

### Interview Tip

> `tagName` is uppercase in HTML.

---

## 64. DOM: Counting Elements

### Count Elements

```js
const items = document.querySelectorAll("li");
console.log(items.length);
```

### Count Children

```js
const ul = document.querySelector("ul");
console.log(ul.children.length);
```

### Filter Count

```js
const count = Array.from(ul.children)
  .filter(el => el.classList.contains("active")).length;
```

### Interview Tip

> Convert HTMLCollection → Array.

---

## Exam-Ready Summary

| Topic            | Key Point                   |
| ---------------- | --------------------------- |
| Tag Targeting    | Use querySelectorAll        |
| DOM              | Tree-like structure         |
| Parent/Child     | Use children not childNodes |
| Finding Children | Avoid text nodes            |
| nodeType         | Filter nodes                |
| Targeting        | CSS selectors               |
| Names            | tagName uppercase           |
| Counting         | Use length                  |

---

## Memory Tricks

* **DOM = Document Object Model**
* **1 = Element, 3 = Text**
* **query = CSS selector**
* **children = clean list**

---

## Practice Mini Project

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
<script>
  const ul = document.getElementById("list");
  console.log(ul.children.length);
</script>
```

---

## Final Tip

> Master **querySelector**, **children**, **nodeType**, and **DOM traversal**.

---

**Author:** Waqar Ali
**Purpose:** Interview + Exam + Development Notes
**Editable Markdown File**

---

## Interview Power Points (Must-Know)

### 1. Tag Targeting

* Use `querySelectorAll()` for predictable behavior
* Avoid legacy live collections unless needed

**Memory Trick:** *Query = CSS power*

---

### 2. DOM Core

* DOM is a live interface
* Browser creates it from HTML

**Memory Trick:** *DOM = Tree API*

---

### 3. Parents & Children

* `children` avoids text nodes
* `parentElement` safer than `parentNode`

**Memory Trick:** *Children = clean*

---

### 4. Finding Children

* Use `firstElementChild`
* Avoid whitespace nodes

**Memory Trick:** *Element = safe*

---

### 5. nodeType

* 1 = Element
* 3 = Text

**Memory Trick:** *1 = One Element*

---

### 6. Targeting Methods

* `querySelector()` supports CSS
* `getElementById()` fastest

**Memory Trick:** *ID = Instant*

---

### 7. Element Names

* `tagName` uppercase
* `nodeName` generic

**Memory Trick:** *Tag = HTML*

---

### 8. Counting

* Use `.length`
* Convert HTMLCollection → Array

**Memory Trick:** *Length = Count*

---

## Exam Cracker Checklist

* Know nodeType values
* Difference: children vs childNodes
* Live vs static collections
* querySelector advantages

---

## When to Use What

| Situation      | Best Method      |
| -------------- | ---------------- |
| Single ID      | getElementById   |
| Multiple CSS   | querySelectorAll |
| Performance    | getElementById   |
| Clean children | children         |
| Filter nodes   | nodeType         |

---

## One-Line Definitions

* DOM: Programming interface for HTML
* nodeType: Identifies node kind
* children: Element-only nodes
* querySelector: CSS selector API

---

## Last-Minute Revision Tricks

* DOM = Tree
* 1 = Element
* Query = CSS
* Children = Safe

---

---

# 120 MCQs on DOM Topics (57–64)

## Topic 57: Target Elements by Tag Name (15 MCQs)

1. Which method selects elements by tag name?
   A. getElementById
   B. getElementsByTagName
   C. querySelector
   D. getClassName

2. getElementsByTagName returns:
   A. NodeList
   B. HTMLCollection
   C. Array
   D. Object

3. querySelectorAll returns:
   A. Live list
   B. Static NodeList
   C. HTMLCollection
   D. Array

4. Which supports CSS selectors?
   A. getElementsByTagName
   B. querySelectorAll
   C. getElementById
   D. getElementsByClassName

5. Which auto-updates when DOM changes?
   A. querySelectorAll
   B. getElementsByTagName
   C. Array.from
   D. filter

6. Which is modern and preferred?
   A. getElementsByTagName
   B. querySelectorAll
   C. childNodes
   D. parentNode

7. document.getElementsByTagName('p')[0] gives:
   A. First <p>
   B. All <p>
   C. Error
   D. Text

8. Which is legacy?
   A. querySelectorAll
   B. getElementsByTagName
   C. getElementById
   D. classList

9. Can getElementsByTagName accept CSS?
   A. Yes
   B. No

10. Which is predictable?
    A. Live list
    B. Static list

11. Best for filtering elements later?
    A. HTMLCollection
    B. NodeList
    C. Array
    D. TextNode

12. Which needs conversion for map?
    A. HTMLCollection
    B. NodeList
    C. Both
    D. None

13. document.querySelectorAll('div').length returns:
    A. Count of divs
    B. First div
    C. Error
    D. Text nodes

14. Which is slower but flexible?
    A. getElementById
    B. querySelectorAll
    C. children
    D. parentNode

15. Which returns live updates?
    A. NodeList
    B. HTMLCollection

---

## Topic 58: The DOM (15 MCQs)

16. DOM stands for:
    A. Data Object Model
    B. Document Object Model
    C. Digital Object Mode
    D. Dynamic Object Map

17. DOM is:
    A. Database
    B. Programming interface
    C. Language
    D. API only for CSS

18. Browser creates DOM from:
    A. JS
    B. HTML
    C. CSS
    D. JSON

19. DOM allows:
    A. Styling
    B. Interactivity
    C. Dynamic content
    D. All

20. Root node of DOM tree:
    A. body
    B. html
    C. document
    D. head

21. DOM nodes include:
    A. Elements
    B. Text
    C. Attributes
    D. All

22. Which represents HTML in memory?
    A. DOM
    B. BOM
    C. API
    D. CSSOM

23. DOM is:
    A. Static
    B. Dynamic
    C. Dead
    D. Fixed

24. Which nodeType = 9?
    A. Element
    B. Text
    C. Comment
    D. Document

25. DOM manipulation example:
    A. console.log
    B. document.getElementById('x').textContent='Hi'
    C. alert()
    D. Math.random()

26. DOM tree is:
    A. Linear
    B. Hierarchical
    C. Circular
    D. Flat

27. Which part is DOM?
    A. window
    B. document
    C. screen
    D. history

28. Which updates UI?
    A. DOM changes
    B. CSS only
    C. HTML only
    D. JS only

29. DOM can be modified by:
    A. JS
    B. CSS
    C. HTML
    D. SQL

30. DOM is platform:
    A. Independent
    B. Browser-only
    C. Node-only
    D. Mobile-only

---

## Topic 59: Parents and Children (15 MCQs)

31. parentNode returns:
    A. Element only
    B. Any node
    C. Child only
    D. Text only

32. parentElement returns:
    A. Node
    B. Element
    C. Text
    D. Document

33. children property includes:
    A. Text
    B. Comment
    C. Element only
    D. All

34. childNodes includes:
    A. Elements
    B. Text
    C. Comments
    D. All

35. Safer parent access:
    A. parentNode
    B. parentElement

36. Clean children list:
    A. childNodes
    B. children

37. body.parentNode is:
    A. html
    B. document
    C. head
    D. null

38. body.parentElement is:
    A. html
    B. document
    C. null
    D. head

39. children returns:
    A. NodeList
    B. HTMLCollection
    C. Array
    D. Object

40. childNodes returns:
    A. NodeList
    B. HTMLCollection
    C. Array
    D. Object

41. Which ignores whitespace?
    A. children
    B. childNodes

42. Which includes junk artifacts?
    A. children
    B. childNodes

43. Which is live?
    A. children
    B. childNodes
    C. Both
    D. None

44. Which returns elements only?
    A. childNodes
    B. children

45. Parent of html is:
    A. body
    B. document
    C. null
    D. head

---

## Topic 60: Finding Children (15 MCQs)

46. firstChild returns:
    A. Element
    B. Text
    C. Any node
    D. Only comment

47. firstElementChild returns:
    A. Element
    B. Text
    C. Any node
    D. Only comment

48. lastChild may be:
    A. Text
    B. Element
    C. Comment
    D. All

49. lastElementChild returns:
    A. Element
    B. Text
    C. Comment
    D. Any

50. Which avoids whitespace nodes?
    A. firstChild
    B. firstElementChild

51. children[0] equals:
    A. firstChild
    B. firstElementChild

52. childNodes[0] equals:
    A. firstChild
    B. firstElementChild

53. Which is safer?
    A. firstChild
    B. firstElementChild

54. Access last element:
    A. lastChild
    B. lastElementChild

55. Which includes comments?
    A. children
    B. childNodes

56. nextSibling returns:
    A. Node
    B. Element
    C. Text
    D. Comment

57. nextElementSibling returns:
    A. Element
    B. Node
    C. Text
    D. Comment

58. Which ignores text?
    A. nextSibling
    B. nextElementSibling

59. Which can return null?
    A. firstElementChild
    B. children
    C. Both
    D. None

60. Which property is modern?
    A. firstChild
    B. firstElementChild

---

## Topic 61: Junk Artifacts & nodeType (15 MCQs)

61. Junk artifacts are:
    A. Elements
    B. Text nodes
    C. Comments
    D. Attributes

62. Whitespace becomes:
    A. Element
    B. Text node
    C. Comment
    D. Attribute

63. nodeType of element:
    A. 1
    B. 3
    C. 8
    D. 9

64. nodeType of text:
    A. 1
    B. 3
    C. 8
    D. 9

65. nodeType of comment:
    A. 1
    B. 3
    C. 8
    D. 9

66. nodeType of document:
    A. 1
    B. 3
    C. 8
    D. 9

67. Filter elements using:
    A. nodeName
    B. nodeType
    C. tagName
    D. children

68. Junk artifacts cause:
    A. Bugs
    B. Unexpected nodes
    C. Wrong counts
    D. All

69. childNodes includes:
    A. Junk
    B. Elements
    C. Comments
    D. All

70. Avoid junk using:
    A. childNodes
    B. children

71. Which value is element?
    A. 1
    B. 3

72. Which value is text?
    A. 1
    B. 3

73. nodeType is:
    A. Property
    B. Method

74. nodeType returns:
    A. Number
    B. String

75. Which filters best?
    A. if(node.nodeType===1)
    B. if(node.tagName)

---

## Topic 62: More Ways to Target Elements (15 MCQs)

76. Fastest selector:
    A. getElementById
    B. querySelector
    C. getElementsByClassName
    D. querySelectorAll

77. Which supports CSS?
    A. getElementById
    B. querySelector

78. getElementsByClassName returns:
    A. NodeList
    B. HTMLCollection

79. querySelector returns:
    A. First match
    B. All matches

80. querySelectorAll returns:
    A. First
    B. All

81. Select by attribute:
    A. getElementById
    B. querySelector('[data-id]')

82. Select first child:
    A. :first-child
    B. :nth-child(1)

83. Select by class:
    A. .card
    B. #card

84. Select by id:
    A. .id
    B. #id

85. Legacy API:
    A. getElementsByClassName
    B. querySelectorAll

86. querySelector supports:
    A. CSS3
    B. Only tag

87. Which is static?
    A. HTMLCollection
    B. NodeList

88. Which is live?
    A. HTMLCollection
    B. NodeList

89. Which needs #?
    A. getElementById
    B. querySelector

90. Which returns single element?
    A. querySelector
    B. querySelectorAll

---

## Topic 63: Getting a Target’s Name (15 MCQs)

91. tagName returns:
    A. Uppercase
    B. Lowercase

92. nodeName equals:
    A. tagName
    B. className

93. tagName for <div>:
    A. div
    B. DIV

94. nodeName for text node:
    A. #text
    B. TEXT

95. el.id gets:
    A. id attribute
    B. class

96. el.getAttribute('id') returns:
    A. id value
    B. nodeType

97. tagName is:
    A. Property
    B. Method

98. nodeName is:
    A. Property
    B. Method

99. tagName works on:
    A. Elements
    B. Text

100. nodeName works on:
     A. Elements
     B. All nodes

101. tagName case:
     A. HTML uppercase
     B. XHTML lowercase

102. nodeName returns:
     A. String
     B. Number

103. Which gives element name?
     A. tagName
     B. nodeType

104. Which identifies node?
     A. nodeName
     B. className

105. Which safer for elements?
     A. tagName
     B. nodeName

---

## Topic 64: Counting Elements (15 MCQs)

106. Count li elements:
     A. document.querySelectorAll('li').length
     B. document.getElementById('li')

107. children.length counts:
     A. Elements
     B. All nodes

108. childNodes.length counts:
     A. Elements
     B. All nodes

109. Which gives clean count?
     A. childNodes.length
     B. children.length

110. Convert HTMLCollection:
     A. Array.from()
     B. JSON.parse()

111. Filter count example uses:
     A. filter()
     B. map()

112. length is:
     A. Property
     B. Method

113. Which can miscount?
     A. childNodes
     B. children

114. Count active class:
     A. querySelectorAll('.active').length
     B. getElementById('active')

115. NodeList length:
     A. Dynamic
     B. Static

116. HTMLCollection length:
     A. Live
     B. Static

117. Which auto-updates count?
     A. HTMLCollection
     B. NodeList

118. Count using CSS selector:
     A. querySelectorAll
     B. getElementsByTagName

119. Best practice:
     A. Use children.length
     B. Use childNodes.length

120. Convert before map:
     A. HTMLCollection
     B. NodeList

---

# Answer Key

1-B  2-B  3-B  4-B  5-B  6-B  7-A  8-B  9-B  10-B  11-C  12-C  13-A  14-B  15-B

16-B  17-B  18-B  19-D  20-C  21-D  22-A  23-B  24-D  25-B  26-B  27-B  28-A  29-A  30-A

31-B  32-B  33-C  34-D  35-B  36-B  37-B  38-A  39-B  40-A  41-A  42-B  43-C  44-B  45-B

46-C  47-A  48-D  49-A  50-B  51-B  52-A  53-B  54-B  55-B  56-A  57-A  58-B  59-C  60-B

61-B  62-B  63-A  64-B  65-C  66-D  67-B  68-D  69-D  70-B  71-A  72-B  73-A  74-A  75-A

76-A  77-B  78-B  79-A  80-B  81-B  82-A  83-A  84-B  85-A  86-A  87-B  88-A  89-B  90-A

91-A  92-A  93-B  94-A  95-A  96-A  97-A  98-A  99-A  100-B  101-A  102-A  103-A  104-A  105-A

106-A  107-A  108-B  109-B  110-A  111-A  112-A  113-A  114-A  115-B  116-A  117-A  118-A  119-A  120-A

---

# 120 Interview Questions with Detailed Answers (Topics 57–64)

## Topic 57: Target Elements by Tag Name (15 Q&A)

1. **What does getElementsByTagName do?**
   It selects all elements of a given tag name and returns an HTMLCollection (live).
   **Example:**

```js
const ps = document.getElementsByTagName('p');
```

**Memory Trick:** *TagName = Live list*

2. **Difference between getElementsByTagName and querySelectorAll?**
   getElementsByTagName is live; querySelectorAll is static and supports CSS selectors.

3. **Why prefer querySelectorAll?**
   Predictable static list and powerful CSS selection.

4. **Does getElementsByTagName support CSS selectors?**
   No, only tag names.

5. **What is returned type of querySelectorAll?**
   NodeList (static).

6. **Which auto-updates when DOM changes?**
   HTMLCollection.

7. **How to get first <p>?**

```js
document.getElementsByTagName('p')[0];
```

8. **Why is getElementsByTagName legacy?**
   Limited features, no CSS selectors.

9. **When to use getElementsByTagName?**
   When you need a live list.

10. **Is NodeList an array?**
    No, but iterable.

11. **Convert NodeList to array?**

```js
Array.from(nodeList);
```

12. **Which is slower?**
    querySelectorAll.

13. **Which is modern?**
    querySelectorAll.

14. **Best practice?**
    Use querySelectorAll.

15. **Real example?**

```js
document.querySelectorAll('li').forEach(li=>li.style.color='red');
```

---

## Topic 58: The DOM (15 Q&A)

16. **What is the DOM?**
    Programming interface representing HTML as a tree.

17. **Why DOM exists?**
    To allow JS to manipulate HTML.

18. **Who creates DOM?**
    Browser.

19. **Root node?**
    Document.

20. **DOM tree nature?**
    Hierarchical.

21. **Node types?**
    Element, Text, Comment, Document.

22. **nodeType of document?**

23.

24. **DOM is static?**
    No, dynamic.

25. **DOM vs BOM?**
    DOM = document, BOM = browser.

26. **Example manipulation?**

```js
document.body.style.background='yellow';
```

26. **DOM API?**
    Methods to access nodes.

27. **What updates UI?**
    DOM changes.

28. **DOM platform?**
    Independent.

29. **Can CSS change DOM?**
    No.

30. **Memory Trick:** *DOM = Tree API*

---

## Topic 59: Parents and Children (15 Q&A)

31. **parentNode vs parentElement?**
    parentNode can return document; parentElement only element.

32. **children vs childNodes?**
    children = elements only; childNodes = all.

33. **Why children safer?**
    No text nodes.

34. **Type of children?**
    HTMLCollection.

35. **Type of childNodes?**
    NodeList.

36. **Parent of body?**
    html.

37. **Parent of html?**
    document.

38. **Which includes whitespace?**
    childNodes.

39. **Which is live?**
    Both.

40. **Example?**

```js
el.children.length;
```

41. **Memory Trick:** *Children = clean*

42. **Why avoid childNodes?**
    Includes junk artifacts.

43. **How to loop children?**
    Array.from(el.children).forEach()

44. **Parent safe access?**
    parentElement.

45. **Real use?**
    DOM traversal.

---

## Topic 60: Finding Children (15 Q&A)

46. **firstChild vs firstElementChild?**
    firstChild may be text; firstElementChild always element.

47. **Why avoid firstChild?**
    Whitespace nodes.

48. **lastChild vs lastElementChild?**
    lastChild may be text; lastElementChild element.

49. **nextSibling vs nextElementSibling?**
    Sibling node vs element.

50. **When nextElementSibling returns null?**
    No next element.

51. **Example?**

```js
el.firstElementChild.style.color='red';
```

52. **Which ignores text?**
    firstElementChild.

53. **Which includes comments?**
    firstChild.

54. **Which safer?**
    firstElementChild.

55. **Modern properties?**
    ElementChild APIs.

56. **Memory Trick:** *Element = safe*

57. **Real use?**
    Navigation menus.

58. **Loop siblings?**
    Use nextElementSibling.

59. **Why null?**
    No more siblings.

60. **Interview tip:** *Use Element variants.*

---

## Topic 61: Junk Artifacts & nodeType (15 Q&A)

61. **What are junk artifacts?**
    Whitespace text nodes.

62. **Why they exist?**
    HTML formatting.

63. **nodeType of element?**

64.

65. **nodeType of text?**

66.

67. **nodeType of comment?**

68.

69. **nodeType of document?**

70.

71. **Why filter nodes?**
    Avoid junk.

72. **Filter example?**

```js
nodes.filter(n=>n.nodeType===1)
```

69. **childNodes includes?**
    All nodes.

70. **Best clean list?**
    children.

71. **Memory Trick:** *1 = Element*

72. **Why nodeType numeric?**
    Performance.

73. **nodeType property?**
    Yes.

74. **nodeType returns?**
    Number.

75. **Interview tip:** *Use nodeType for filtering.*

---

## Topic 62: More Ways to Target Elements (15 Q&A)

76. **Fastest selector?**
    getElementById.

77. **CSS selectors support?**
    querySelector.

78. **getElementsByClassName returns?**
    HTMLCollection.

79. **querySelector returns?**
    First match.

80. **querySelectorAll returns?**
    All matches.

81. **Select attribute?**

```js
document.querySelector('[data-id]');
```

82. **Legacy API?**
    getElementsByClassName.

83. **Static list?**
    NodeList.

84. **Live list?**
    HTMLCollection.

85. **ID selection?**
    #id in querySelector.

86. **Select class?**
    .card.

87. **Memory Trick:** *Query = CSS*

88. **Real use?**
    Form validation.

89. **Best practice?**
    querySelector.

90. **Interview tip:** *Use modern APIs.*

---

## Topic 63: Getting a Target’s Name (15 Q&A)

91. **tagName returns?**
    Uppercase tag.

92. **nodeName vs tagName?**
    nodeName generic.

93. **tagName for <div>?**
    DIV.

94. **nodeName for text?**
    #text.

95. **Get id property?**
    el.id.

96. **Get id attribute?**
    el.getAttribute('id').

97. **tagName property?**
    Yes.

98. **nodeName property?**
    Yes.

99. **Works on elements?**
    tagName.

100. **Works on all nodes?**
     nodeName.

101. **Memory Trick:** *Tag = HTML*

102. **Real use?**
     Debugging.

103. **Case sensitivity?**
     HTML uppercase.

104. **Identify node?**
     nodeName.

105. **Safer?**
     tagName.

---

## Topic 64: Counting Elements (15 Q&A)

106. **Count elements?**
     Use .length.

107. **children.length counts?**
     Elements only.

108. **childNodes.length counts?**
     All nodes.

109. **Clean count?**
     children.length.

110. **Convert HTMLCollection?**
     Array.from().

111. **Filter count?**

```js
Array.from(ul.children).filter(li=>li.classList.contains('active')).length;
```

112. **length property?**
     Yes.

113. **Miscount?**
     childNodes.

114. **Count class?**
     querySelectorAll('.class').length.

115. **NodeList static?**
     Yes.

116. **HTMLCollection live?**
     Yes.

117. **Auto-update count?**
     HTMLCollection.

118. **CSS selector count?**
     querySelectorAll.

119. **Best practice?**
     Use children.length.

120. **Memory Trick:** *Length = Count*

---
