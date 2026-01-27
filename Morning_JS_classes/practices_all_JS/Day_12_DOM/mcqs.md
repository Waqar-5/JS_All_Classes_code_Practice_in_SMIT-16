# 100 MCQs — DOM Attributes and Nodes

(25 MCQs per topic — 65 → 68)

---

## Topic 65: The DOM: Attributes

1. How to get an attribute of an element?
   A. element.getAttribute('attr')
   B. element.attr
   C. element.getAttr
   D. element.attrValue

2. How to set an attribute?
   A. element.setAttribute('attr','value')
   B. element.attr='value'
   C. element.setAttr
   D. element.addAttribute

3. Remove attribute?
   A. element.removeAttribute('attr')
   B. delete element.attr
   C. element.removeAttr
   D. element.clearAttribute

4. Check attribute existence?
   A. element.hasAttribute('attr')
   B. element.exists
   C. element.containsAttr
   D. element.hasAttr

5. Access class attribute?
   A. element.className
   B. element.getAttribute('class')
   C. both
   D. none

6. Get href of link?
   A. element.href
   B. element.getAttribute('href')
   C. both
   D. none

7. Data attribute access?
   A. element.dataset.key
   B. element.getAttribute('data-key')
   C. both
   D. none

8. Setting alt attribute?
   A. element.setAttribute('alt','desc')
   B. element.alt='desc'
   C. both
   D. none

9. Default attributes?
   A. Boolean attributes like disabled, checked
   B. id
   C. class
   D. style

10. Changing style attribute?
    A. element.style.color='red'
    B. element.setAttribute('style','color:red')
    C. both
    D. none

11. Removing boolean attribute?
    A. removeAttribute
    B. setAttribute('attr',false)
    C. both
    D. none

12. Adding custom attribute?
    A. setAttribute('myAttr','val')
    B. element.myAttr='val'
    C. both
    D. none

13. Difference between property and attribute?
    A. Property = JS object, Attribute = HTML
    B. Property = HTML, Attribute = JS
    C. same
    D. none

14. Reading input value via attribute?
    A. getAttribute('value')
    B. element.value
    C. both
    D. none

15. Boolean attribute presence?
    A. hasAttribute('checked')
    B. getAttribute('checked')
    C. both
    D. none

16. Changing input type?
    A. setAttribute('type','password')
    B. element.type='password'
    C. both
    D. none

17. Accessing ID?
    A. element.id
    B. element.getAttribute('id')
    C. both
    D. none

18. Remove style attribute?
    A. removeAttribute('style')
    B. style=''
    C. both
    D. none

19. Adding multiple attributes?
    A. chain setAttribute
    B. assign properties
    C. both
    D. none

20. Attribute names are?
    A. case-insensitive in HTML
    B. case-sensitive in JS
    C. both
    D. none

21. Access title?
    A. element.title
    B. getAttribute('title')
    C. both
    D. none

22. Data-id attribute?
    A. dataset.id
    B. getAttribute('data-id')
    C. both
    D. none

23. Removing href?
    A. removeAttribute('href')
    B. href=''
    C. both
    D. none

24. Access boolean like disabled?
    A. element.disabled
    B. hasAttribute('disabled')
    C. both
    D. none

25. Memory trick?
    A. Property for JS, Attribute for HTML

---

## Topic 66: The DOM: Attribute Names and Values

26. HTML attribute name is?
    A. case-insensitive
    B. case-sensitive
    C. both
    D. none

27. Attribute value?
    A. always string
    B. number
    C. boolean
    D. object

28. Boolean attribute value?
    A. presence = true
    B. value='false'
    C. value='true'
    D. both

29. How to normalize?
    A. lowercase names
    B. uppercase values
    C. both
    D. none

30. Accessing class?
    A. className
    B. getAttribute('class')
    C. both
    D. none

31. href attribute value?
    A. getAttribute('href')
    B. element.href
    C. both
    D. none

32. Custom attributes?
    A. data-* attributes
    B. id
    C. class
    D. src

33. Read boolean disabled?
    A. hasAttribute('disabled')
    B. getAttribute('disabled')
    C. both
    D. none

34. Memory trick for boolean?
    A. Presence = true

35. Setting attribute with setAttribute?
    A. Always string

36. Difference property vs attribute?
    A. property = current state
    B. attribute = original HTML

37. Attribute with dashes?
    A. use camelCase in dataset

38. Reading image src?
    A. element.src
    B. getAttribute('src')
    C. both
    D. none

39. Difference getAttribute vs property?
    A. Property may be absolute URL

40. Adding non-standard attribute?
    A. setAttribute('custom','val')

41. Access multiple attributes?
    A. loop + getAttribute

42. Changing attribute name?
    A. remove old + set new

43. Attribute list?
    A. element.attributes

44. Exam tip?
    A. Always consider property vs attribute

45. Shortcut memory?
    A. attrNamesHTML = case-insensitive

---

## Topic 67: The DOM: Adding Nodes

46. Create new element?
    A. document.createElement('div')

47. Create text node?
    A. document.createTextNode('text')

48. Append child?
    A. parent.appendChild(child)

49. Best way to add multiple?
    A. fragment + append

50. Insert before?
    A. parent.insertBefore(newNode, refNode)

51. Memory trick?
    A. Create → Append

52. Remove node?
    A. parent.removeChild(node)

53. Replace node?
    A. parent.replaceChild(newNode, oldNode)

54. Adding list item?
    A. li = createElement('li')

55. Adding text inside li?
    A. createTextNode + appendChild

56. Adding image?
    A. createElement('img') + setAttribute('src')

57. Using innerHTML vs createElement?
    A. innerHTML faster but unsafe

58. Fragment benefits?
    A. avoids multiple reflows

59. Cloning node?
    A. cloneNode(true/false)

60. Best practice?
    A. create → configure → append

61. Adding input?
    A. createElement('input') + setAttribute('type')

62. Append to body?
    A. document.body.appendChild(node)

63. Multiple children?
    A. fragment.append(child)

64. Avoid inline HTML?
    A. safer DOM methods

65. Exam trick?
    A. appendChild = last child

---

## Topic 68: The DOM: Inserting Nodes

66. insertBefore?
    A. parent.insertBefore(newNode, refNode)

67. insertAdjacentHTML?
    A. 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

68. insertAdjacentElement?
    A. similar to insertAdjacentHTML

69. prepend?
    A. parent.prepend(node)

70. append?
    A. parent.append(node)

71. Difference prepend vs append?
    A. prepend = first child

72. insertBefore vs appendChild?
    A. insertBefore can insert anywhere

73. Using fragments?
    A. reduce reflows

74. Replacing nodes?
    A. replaceChild(new, old)

75. Cloning + insert?
    A. cloneNode + append

76. Inserting text?
    A. createTextNode + insertBefore

77. insertAdjacentText?
    A. adds text without element

78. insertAdjacentHTML advantage?
    A. faster than createElement

79. Safe insertion?
    A. avoid user input in HTML

80. insertAdjacentElement?
    A. moves existing node

81. Memory trick?
    A. Before = insertBefore, After = append

82. Insert at specific index?
    A. insertBefore with refNode

83. Multiple nodes?
    A. use fragment

84. Remove after insert?
    A. parent.removeChild(node)

85. Exam trick?
    A. prepend first, append last

86. insertAdjacentHTML positions?
    A. 4 options: beforebegin, afterbegin, beforeend, afterend

87. Append vs appendChild?
    A. append allows multiple

88. prepend vs insertBefore?
    A. prepend simpler for first child

89. Cloning?
    A. cloneNode(true) for deep copy

90. Best practice?
    A. fragment + insert/append

91. Insert input dynamically?
    A. create + set attributes + append

92. Insert image dynamically?
    A. createElement + setAttribute + append

93. Insert text dynamically?
    A. createTextNode + append

94. Prepend list?
    A. prepend first item

95. Replace dynamically?
    A. replaceChild(new, old)

96. Avoid multiple reflows?
    A. fragment + append

97. insertAdjacentHTML unsafe?
    A. XSS risk with user input

98. Advantage insertAdjacent?
    A. faster than innerHTML

99. Insert into table?
    A. tbody.appendChild(tr)

100. Memory trick?
     A. Create → Configure → Insert

---

# Answer Key

1-A,2-A,3-A,4-A,5-C,6-C,7-C,8-C,9-A,10-C,11-A,12-C,13-A,14-C,15-A,16-C,17-C,18-C,19-C,20-C,21-C,22-C,23-A,24-C,25-A

26-A,27-A,28-A,29-A,30-C,31-C,32-A,33-C,34-A,35-A,36-A,37-A,38-C,39-A,40-A,41-A,42-A,43-A,44-A,45-A

46-A,47-A,48-A,49-A,50-A,51-A,52-A,53-A,54-A,55-A,56-A,57-A,58-A,59-A,60-A,61-A,62-A,63-A,64-A,65-A

66-A,67-A,68-A,69-A,70-A,71-A,72-A,73-A,74-A,75-A,76-A,77-A,78-A,79-A,80-A,81-A,82-A,83-A,84-A,85-A,86-A,87-A,88-A,89-A,90-A,91-A,92-A,93-A,94-A,95-A,96-A,97-A,98-A,99-A,100-A
