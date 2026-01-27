# 100 Detailed Questions & Answers — DOM Attributes and Nodes

(25 Questions per topic — 65 → 68)

---

## Topic 65: The DOM: Attributes

1. **Q:** How do you get an attribute value of an element?
   **A:** Use `element.getAttribute('attrName')`. This retrieves the current value of the attribute in HTML.
   **Tip:** Use getAttribute for original HTML values, not JS properties.

2. **Q:** How do you set an attribute on an element?
   **A:** Use `element.setAttribute('attrName', 'value')`. This updates the attribute in HTML.
   **Tip:** Always strings.

3. **Q:** How can you remove an attribute from an element?
   **A:** `element.removeAttribute('attrName')`.
   **Tip:** Boolean attributes like disabled disappear entirely.

4. **Q:** How to check if an element has a specific attribute?
   **A:** `element.hasAttribute('attrName')` returns true/false.

5. **Q:** How to access the class attribute?
   **A:** Use `element.className` or `element.getAttribute('class')`.
   **Tip:** className is preferred in JS.

6. **Q:** How to read the href of a link?
   **A:** Use `element.href` for absolute URL, `getAttribute('href')` for original HTML value.

7. **Q:** How do you read a data-* attribute?
   **A:** `element.dataset.key` or `getAttribute('data-key')`.
   **Tip:** dataset converts dash-case to camelCase.

8. **Q:** How to set alt text on an image?
   **A:** `element.alt = 'description'` or `element.setAttribute('alt', 'description')`.

9. **Q:** What are default boolean attributes?
   **A:** Attributes like `disabled`, `checked`, `readonly`.
   **Tip:** Presence = true.

10. **Q:** How to change the style attribute?
    **A:** `element.style.property = 'value'` or `setAttribute('style', 'property:value')`.

11. **Q:** How to remove a boolean attribute?
    **A:** `removeAttribute('attrName')`.

12. **Q:** Can you add custom attributes?
    **A:** Yes, via `setAttribute('myAttr', 'val')`.

13. **Q:** Difference between property and attribute?
    **A:** Property = current JS state; Attribute = original HTML.

14. **Q:** Reading input value via attribute?
    **A:** `element.value` is live, `getAttribute('value')` is initial.

15. **Q:** Boolean attribute presence?
    **A:** Use `hasAttribute('checked')`.

16. **Q:** Change input type?
    **A:** `element.type = 'password'` or `setAttribute('type','password')`.

17. **Q:** Access ID of an element?
    **A:** `element.id` or `getAttribute('id')`.

18. **Q:** Remove style attribute?
    **A:** `element.removeAttribute('style')` or `element.style.cssText=''`.

19. **Q:** Add multiple attributes?
    **A:** Chain `setAttribute` calls or assign JS properties.

20. **Q:** Are HTML attribute names case-sensitive?
    **A:** No, HTML is case-insensitive.

21. **Q:** Access title attribute?
    **A:** `element.title` or `getAttribute('title')`.

22. **Q:** Data-id attribute access?
    **A:** `element.dataset.id` or `getAttribute('data-id')`.

23. **Q:** Remove href?
    **A:** `element.removeAttribute('href')`.

24. **Q:** Access boolean like disabled?
    **A:** `element.disabled` (property) or `hasAttribute('disabled')`.

25. **Q:** Memory trick for attributes?
    **A:** Property = JS object, Attribute = HTML original.

---

## Topic 66: The DOM: Attribute Names and Values

26. **Q:** Are HTML attribute names case-sensitive?
    **A:** No, HTML treats them as case-insensitive.

27. **Q:** What type are attribute values?
    **A:** Always strings.

28. **Q:** Boolean attribute value?
    **A:** Presence = true; absence = false.

29. **Q:** How to normalize attributes?
    **A:** Use lowercase names; JS handles values.

30. **Q:** Access class attribute?
    **A:** `element.className` or `getAttribute('class')`.

31. **Q:** Href attribute?
    **A:** `getAttribute('href')` for HTML value, `element.href` for absolute URL.

32. **Q:** Custom attributes?
    **A:** Use data-* attributes.

33. **Q:** Reading disabled?
    **A:** `hasAttribute('disabled')`.

34. **Q:** Boolean attribute memory trick?
    **A:** Presence = true.

35. **Q:** Setting attribute with setAttribute?
    **A:** Always a string.

36. **Q:** Difference property vs attribute?
    **A:** Property = current state, Attribute = original HTML.

37. **Q:** Attribute with dashes?
    **A:** Access via dataset in camelCase.

38. **Q:** Reading image src?
    **A:** `element.src` or `getAttribute('src')`.

39. **Q:** getAttribute vs property?
    **A:** Property may auto-resolve to absolute URL.

40. **Q:** Adding non-standard attribute?
    **A:** `setAttribute('custom', 'val')`.

41. **Q:** Access multiple attributes?
    **A:** Loop with `element.attributes`.

42. **Q:** Changing attribute name?
    **A:** Remove old, set new.

43. **Q:** Attribute list?
    **A:** `element.attributes` returns NamedNodeMap.

44. **Q:** Exam tip?
    **A:** Property vs attribute distinction is key.

45. **Q:** Memory shortcut?
    **A:** HTML attributes = original, JS properties = live.

---

## Topic 67: The DOM: Adding Nodes

46. **Q:** Create a new element?
    **A:** `document.createElement('div')`.

47. **Q:** Create a text node?
    **A:** `document.createTextNode('text')`.

48. **Q:** Append child to parent?
    **A:** `parent.appendChild(child)`.

49. **Q:** Add multiple nodes efficiently?
    **A:** Use `DocumentFragment` and append all.

50. **Q:** Insert before reference node?
    **A:** `parent.insertBefore(newNode, refNode)`.

51. **Q:** Memory trick?
    **A:** Create → configure → append.

52. **Q:** Remove node?
    **A:** `parent.removeChild(node)`.

53. **Q:** Replace node?
    **A:** `parent.replaceChild(newNode, oldNode)`.

54. **Q:** Adding list item dynamically?
    **A:** `li = createElement('li'); li.textContent='item'; ul.appendChild(li)`.

55. **Q:** Adding image dynamically?
    **A:** `img = createElement('img'); img.src='url'; parent.appendChild(img)`.

56. **Q:** Using innerHTML vs createElement?
    **A:** innerHTML faster but unsafe; createElement safer.

57. **Q:** Benefits of fragment?
    **A:** Reduces multiple reflows.

58. **Q:** Cloning a node?
    **A:** `cloneNode(true/false)`.

59. **Q:** Best practice?
    **A:** Create → Configure → Append.

60. **Q:** Adding input dynamically?
    **A:** `input = createElement('input'); input.type='text'; parent.appendChild(input)`.

61. **Q:** Append to body?
    **A:** `document.body.appendChild(node)`.

62. **Q:** Append multiple children?
    **A:** Use fragment.

63. **Q:** Avoid inline HTML?
    **A:** Safer DOM methods.

64. **Q:** Insert text node?
    **A:** `createTextNode` + append.

65. **Q:** Exam trick?
    **A:** appendChild = last child.

---

## Topic 68: The DOM: Inserting Nodes

66. **Q:** insertBefore usage?
    **A:** `parent.insertBefore(newNode, refNode)`.

67. **Q:** insertAdjacentHTML?
    **A:** Positions: 'beforebegin','afterbegin','beforeend','afterend'.

68. **Q:** insertAdjacentElement?
    **A:** Similar to insertAdjacentHTML, inserts an element.

69. **Q:** Prepend node?
    **A:** `parent.prepend(node)`.

70. **Q:** Append node?
    **A:** `parent.append(node)`.

71. **Q:** Difference prepend vs append?
    **A:** Prepend = first child, Append = last child.

72. **Q:** insertBefore vs appendChild?
    **A:** insertBefore can insert anywhere before ref node.

73. **Q:** Using fragment?
    **A:** Reduce reflows.

74. **Q:** Replacing nodes?
    **A:** `replaceChild(new, old)`.

75. **Q:** Clone + insert?
    **A:** cloneNode + append.

76. **Q:** Insert text?
    **A:** createTextNode + insertBefore.

77. **Q:** insertAdjacentText?
    **A:** Adds text directly without creating element.

78. **Q:** insertAdjacentHTML advantage?
    **A:** Faster than createElement.

79. **Q:** Safe insertion?
    **A:** Avoid user input in HTML.

80. **Q:** insertAdjacentElement moves existing node?
    **A:** Yes, can relocate.

81. **Q:** Memory trick?
    **A:** Before = insertBefore, After = append.

82. **Q:** Insert at specific index?
    **A:** insertBefore with refNode.

83. **Q:** Insert multiple nodes?
    **A:** Use fragment.

84. **Q:** Remove after insert?
    **A:** parent.removeChild(node).

85. **Q:** Exam trick?
    **A:** Prepend first, Append last.

86. **Q:** insertAdjacentHTML positions?
    **A:** 'beforebegin', 'afterbegin', 'beforeend', 'afterend'.

87. **Q:** Append vs appendChild?
    **A:** append allows multiple nodes.

88. **Q:** Prepend vs insertBefore?
    **A:** prepend simpler for first child.

89. **Q:** Cloning nodes?
    **A:** cloneNode(true) for deep copy.

90. **Q:** Best practice?
    **A:** fragment + insert/append.

91. **Q:** Insert input dynamically?
    **A:** create + set attributes + append.

92. **Q:** Insert image dynamically?
    **A:** createElement + setAttribute + append.

93. **Q:** Insert text dynamically?
    **A:** createTextNode + append.

94. **Q:** Prepend list item?
    **A:** prepend first.

95. **Q:** Replace dynamically?
    **A:** replaceChild(new, old).

96. **Q:** Avoid multiple reflows?
    **A:** fragment + append.

97. **Q:** insertAdjacentHTML unsafe?
    **A:** XSS risk with user input.

98. **Q:** Advantage of insertAdjacent?
    **A:** Faster than innerHTML.

99. **Q:** Insert into table?
    **A:** tbody.appendChild(tr).

100. **Q:** Memory trick?
     **A:** Create → Configure → Insert.

---

This README now has **100 detailed Q&A** covering topics 65–68, perfect for exam preparation and interview mastery.
