# JavaScript Scripts & Events - 90 MCQs

This document contains **90 multiple choice questions** (MCQs) on JavaScript topics: Placing Scripts, Commenting, Events (link, button, mouse, fields). It is designed to help you **crack exams and interviews**.

---

## Section 1: Placing Scripts (15 MCQs)

1. Where should you place your `<script>` tag for better page load performance?
   A) In the `<head>`
   B) At the end of `<body>`
   C) Inside a `<div>`
   D) At the top of the file

2. What does `defer` attribute do in a script tag?
   A) Executes immediately
   B) Loads after HTML parsing
   C) Blocks rendering
   D) Causes error

3. Which attribute makes a script load asynchronously?
   A) async
   B) defer
   C) delay
   D) wait

4. If a script is in `<head>` without `defer` or `async`, what happens?
   A) Script waits for DOM
   B) Script blocks HTML parsing
   C) Script fails
   D) Script runs after window load

5. Where do inline scripts execute?
   A) Only in head
   B) Immediately at place
   C) At the end of body
   D) Never

6. What is the recommended practice for large JS files?
   A) Inline in HTML
   B) External file at end of body with defer
   C) External file in head without defer
   D) Ignore best practices

7. How do you include an external JS file?
   A) `<script src="file.js"></script>`
   B) `<js src="file.js"></js>`
   C) `<link src="file.js">`
   D) `<script href="file.js"></script>`

8. What happens if script file path is wrong?
   A) Script runs partially
   B) Error, code not executed
   C) Browser corrects path
   D) Script executes anyway

9. Can you have multiple `<script>` tags?
   A) Yes
   B) No
   C) Only two
   D) Only one

10. What is the effect of placing scripts at end of `<body>`?
    A) Blocks rendering
    B) Allows faster HTML load
    C) Causes errors
    D) Delays event listeners

11. Which is better for modern apps?
    A) Inline script
    B) External script with defer
    C) Head script without attributes
    D) None

12. Can `async` and `defer` be used together?
    A) Yes, always
    B) No, `async` takes priority
    C) Only in Chrome
    D) Only for inline scripts

13. Which script executes first when multiple scripts are deferred?
    A) Random
    B) In order in HTML
    C) Last one first
    D) Async executes first

14. Why use external JS files?
    A) Reusability
    B) Better caching
    C) Separation of concerns
    D) All above

15. What is wrong with inline scripts for large projects?
    A) Hard to maintain
    B) Slows page rendering
    C) Difficult to reuse
    D) All above

---

## Section 2: Commenting (15 MCQs)

16. How do you write a single-line comment in JS?
    A) `// comment`
    B) `/* comment */`
    C) `<!-- comment -->`
    D) `# comment`

17. How do you write a multi-line comment?
    A) `/* comment */`
    B) `// comment`
    C) `<!-- comment -->`
    D) `# comment`

18. Are comments executed?
    A) Yes
    B) No
    C) Sometimes
    D) Only in debug mode

19. Why use comments?
    A) Explain code
    B) Temporarily disable code
    C) Documentation
    D) All above

20. Can comments be nested?
    A) Yes
    B) No
    C) Only single-line
    D) Only multi-line

21. Which is correct?
    A) `// Hello World`
    B) `/* Hello World */`
    C) Both
    D) None

22. Which type of comment is better for documentation?
    A) Single-line
    B) Multi-line
    C) Inline only
    D) Not needed

23. Can comments affect performance?
    A) No
    B) Yes
    C) Sometimes
    D) Only in old browsers

24. Can comments be used to temporarily remove code?
    A) Yes
    B) No
    C) Only variables
    D) Only functions

25. Are HTML comments inside JS code effective?
    A) No
    B) Yes
    C) Only in head
    D) Only in body

26. Can you write a comment after code in same line?
    A) Yes, using `//`
    B) No
    C) Only with `/* */`
    D) Only outside function

27. Is `/*` without `*/` valid?
    A) No, syntax error
    B) Yes
    C) Only for single-line
    D) Ignored

28. Are comments considered whitespace?
    A) Yes
    B) No
    C) Sometimes
    D) Only in minified files

29. Can comments include code examples?
    A) Yes
    B) No
    C) Only pseudo-code
    D) Only variables

30. Which is best practice?
    A) Comment complex logic
    B) Comment every line
    C) Never comment
    D) Only comment variables

---

## Section 3: Events (link, button, mouse, fields) (60 MCQs)

### Link Events (15 MCQs)

31. Which event occurs when a user clicks a link?
    A) onclick
    B) onmouseover
    C) onkeypress
    D) onfocus

32. How do you prevent default link behavior?
    A) event.preventDefault()
    B) event.stop()
    C) return false
    D) Both A & C

33. Which event triggers when a link is hovered?
    A) onmouseover
    B) onclick
    C) onmouseout
    D) onfocus

34. Can links trigger JS functions?
    A) Yes
    B) No
    C) Only buttons
    D) Only forms

35. What does `return false` do in an event handler?
    A) Prevent default
    B) Stop execution
    C) Error
    D) Do nothing

36. Which attribute can call a function on link click?
    A) onclick
    B) onhover
    C) onfocus
    D) onkeypress

37. Is inline JS recommended for links?
    A) No, use addEventListener
    B) Yes
    C) Only in head
    D) Only in body

38. Can you have multiple event handlers for same link?
    A) Yes, with addEventListener
    B) No
    C) Only one inline
    D) Only in forms

39. What is the default event for anchor `<a>`?
    A) navigate
    B) click
    C) hover
    D) focus

40. Which event triggers on keyboard navigation of link?
    A) onfocus
    B) onclick
    C) onkeypress
    D) onmouseover

41. Can links trigger custom events?
    A) Yes
    B) No
    C) Only clicks
    D) Only mouse events

42. Which property gives link URL in event?
    A) event.target.href
    B) event.href
    C) this.href
    D) Both A & C

43. What does `addEventListener('click', func)` do?
    A) Calls func on click
    B) Overrides previous click
    C) Error
    D) Runs func immediately

44. Can link events be removed?
    A) Yes, removeEventListener
    B) No
    C) Only inline
    D) Only with return false

45. Is event delegation useful for links?
    A) Yes
    B) No
    C) Only buttons
    D) Only fields

### Button Events (15 MCQs)

46. Which event occurs when a button is clicked?
    A) onclick
    B) onsubmit
    C) onkeypress
    D) onfocus

47. Which event triggers when mouse is over button?
    A) onmouseover
    B) onclick
    C) onblur
    D) onkeydown

48. Which event triggers when button loses focus?
    A) onblur
    B) onfocus
    C) onkeyup
    D) onclick

49. Which attribute can call a function on button click?
    A) onclick
    B) onmouseover
    C) onkeypress
    D) onfocus

50. Can buttons have multiple events?
    A) Yes, addEventListener
    B) No
    C) Only inline
    D) Only form

51. What is `event.target` in button event?
    A) The button element clicked
    B) The parent element
    C) The body
    D) Undefined

52. Can button click trigger multiple functions?
    A) Yes, addEventListener
    B) No
    C) Only one inline
    D) Only with return false

53. Which event triggers on button key press?
    A) onkeydown
    B) onclick
    C) onhover
    D) onfocus

54. Can buttons trigger custom events?
    A) Yes
    B) No
    C) Only clicks
    D) Only form submit

55. How do you prevent default button action in forms?
    A) event.preventDefault()
    B) return false
    C) Both A & B
    D) None

56. Which property gives button value?
    A) event.target.value
    B) this.value
    C) Both A & B
    D) None

57. Can button events bubble?
    A) Yes
    B) No
    C) Only clicks
    D) Only mouse events

58. Which is better practice for button events?
    A) addEventListener
    B) Inline attribute
    C) Inline script
    D) Onload

59. Can buttons be disabled programmatically?
    A) Yes, element.disabled = true
    B) No
    C) Only via HTML
    D) Only via CSS

### Mouse Events (15 MCQs)

60. Which event triggers when mouse moves over an element?
    A) onmousemove
    B) onclick
    C) onkeypress
    D) onfocus

61. Which event triggers when mouse leaves element?
    A) onmouseout
    B) onmouseover
    C) onclick
    D) onblur

62. Which event occurs when mouse button pressed down?
    A) onmousedown
    B) onmouseup
    C) onclick
    D) onmousemove

63. Which event occurs when mouse button released?
    A) onmouseup
    B) onmousedown
    C) onclick
    D) onmouseover

64. Which event triggers on right-click?
    A) oncontextmenu
    B) onclick
    C) onmouseover
    D) onmousedown

65. Can mouse events be attached via JS?
    A) Yes, addEventListener
    B) No
    C) Only inline
    D) Only links

66. Which property gives mouse X/Y coordinates?
    A) event.clientX/Y
    B) event.pageX/Y
    C) Both A & B
    D) event.offsetX/Y

67. Can mouse events be prevented?
    A) Yes, preventDefault()
    B) No
    C) Only click
    D) Only hover

68. Which event triggers when mouse enters element?
    A) onmouseover
    B) onmouseenter
    C) Both
    D) None

69. Can mouse events bubble?
    A) Yes
    B) No
    C) Only click
    D) Only hover

70. Which is best practice for mouse events?
    A) addEventListener
    B) Inline attribute
    C) Inline script
    D) CSS only

71. Can mouse events trigger custom events?
    A) Yes
    B) No
    C) Only clicks
    D) Only links

72. How to remove mouse event listener?
    A) removeEventListener
    B) delete
    C) remove
    D) stopPropagation

73. Which event is triggered when mouse wheel scrolls?
    A) onwheel
    B) onscroll
    C) onmousewheel
    D) Both A & C

74. Can mouse events detect which button was clicked?
    A) Yes, event.button
    B) No
    C) Only left click
    D) Only right click

75. Which property gives target element in mouse event?
    A) event.target
    B) this
    C) Both A & B
    D) None

### Field Events (15 MCQs)

76. Which event occurs when a user focuses input?
    A) onfocus
    B) onblur
    C) oninput
    D) onchange

77. Which event occurs when input loses focus?
    A) onblur
    B) onfocus
    C) oninput
    D) onchange

78. Which event occurs when user types in input?
    A) oninput
    B) onchange
    C) onfocus
    D) onblur

79. Which event occurs when input value changes and focus lost?
    A) onchange
    B) oninput
    C) onfocus
    D) onblur

80. Can field events be attached via JS?
    A) Yes, addEventListener
    B) No
    C) Only inline
    D) Only forms

81. Which event triggers on key press inside input?
    A) onkeypress
    B) onkeydown
    C) onkeyup
    D) All above

82. Can field events be prevented?
    A) Yes, preventDefault()
    B) No
    C) Only onchange
    D) Only onblur

83. Which event triggers when form submitted?
    A) onsubmit
    B) onclick
    C) oninput
    D) onchange

84. Can field events bubble?
    A) Yes
    B) No
    C) Only onchange
    D) Only oninput

85. Which is best practice for field events?
    A) addEventListener
    B) Inline attribute
    C) Inline script
    D) HTML only

86. Which property gets input value inside event?
    A) event.target.value
    B) this.value
    C) Both A & B
    D) None

87. Can you detect specific key pressed in input?
    A) Yes, event.key
    B) No
    C) Only numbers
    D) Only letters

88. Which event triggers when input is reset?
    A) onreset
    B) oninput
    C) onchange
    D) onblur

89. Can you attach multiple listeners to same field?
    A) Yes
    B) No
    C) Only one inline
    D) Only one JS

90. Can field events trigger custom JS functions?
    A) Yes
    B) No
    C) Only for links
    D) Only for buttons

---

## Answer Key

### Section 1: Placing Scripts (1–15)

B
B
A
B
B
B
A
B
A
B
B
B
B
D
D

### Section 2: Commenting (16–30)

A
A
B
D
B
C
B
A
A
A
A
A
A
A
D

### Section 3: Events (31–90)

A
D
A
A
D
A
A
A
B
A
A
D
D
A
A

A
A
A
A
C
A
A
C
C
A
A
A
A
A
A
A
A

A
A
A
A
B
A
C
A
B
C
A
A
D
A
A

A
A
A
A
A
A
A
A
A
A
A
A
A
A
A
B
