# 🌐 Browser Control in JavaScript – 90 Detailed MCQs & Answers

> This README provides **90 MCQs with detailed explanations** to help you fully understand browser control topics and excel in exams or interviews.

---

## 📌 Topics Covered

1. Getting & Setting the URL
2. Getting & Setting the URL (Another Way)
3. Forward & Reverse Navigation
4. Filling the Window with Content
5. Controlling Window Size & Location
6. Testing for Popup Blockers

---

# 76️⃣ Getting and Setting the URL (MCQs 1–15)

**1. Which JavaScript object directly represents the browser’s current URL?**

* **Answer:** `location`
* **Explanation:** The `window.location` object contains the current URL and its components.

**2. What does `window.location.href` return?**

* **Answer:** The complete URL
* **Explanation:** `href` returns the full URL including protocol, domain, path, query, and hash.

**3. Which property contains query parameters like `?id=10`?**

* **Answer:** `search`
* **Explanation:** `location.search` contains the query string including the `?`.

**4. Assigning a new value to `location.href` will:**

* **Answer:** Reload the page
* **Explanation:** Changing `href` navigates to a new URL, causing a reload.

**5. Which part of URL stores `#section1`?**

* **Answer:** `hash`
* **Explanation:** The `hash` property returns the fragment identifier.

**6. How do you get the protocol (`https:`)?**

* **Answer:** `location.protocol`
* **Explanation:** `protocol` gives `http:` or `https:` including the colon.

**7. Which property includes the port number if present?**

* **Answer:** `host`
* **Explanation:** `host` returns `hostname:port` if a port is used.

**8. `window.location` is best described as:**

* **Answer:** Object
* **Explanation:** It is a location object with properties like `href`, `pathname`, `search`, and methods.

**9. Which property is read-only?**

* **Answer:** `origin`
* **Explanation:** `origin` is read-only and returns protocol + hostname + port.

**10. Which property returns `/profile.html`?**

* **Answer:** `pathname`
* **Explanation:** `pathname` returns the path after the host in the URL.

**11. Which method reloads the current page?**

* **Answer:** `location.reload()`
* **Explanation:** Reloads the page; `true` forces reload from server.

**12. What does `location.origin` include?**

* **Answer:** Protocol + domain + port
* **Explanation:** Origin excludes path, query, or hash.

**13. Which URL change causes no page reload?**

* **Answer:** Hash change only (`location.hash`)
* **Explanation:** Changing only `hash` updates URL fragment without reload.

**14. URL control using `location` is considered:**

* **Answer:** Full navigation
* **Explanation:** Assigning `href` or using `assign()` triggers full navigation.

**15. Which is correct?**

* **Answer:** `location` always reloads page (except hash changes)
* **Explanation:** Changing URL via `location` usually reloads the page.

---

# 77️⃣ Getting and Setting the URL (Another Way) (MCQs 16–30)

**16. Which method adds a new entry to browser history?**

* **Answer:** `location.assign()`
* **Explanation:** `assign()` navigates to a new URL and adds it to history.

**17. Which method prevents the back button from returning?**

* **Answer:** `location.replace()`
* **Explanation:** `replace()` navigates without adding a new entry to history.

**18. `location.assign()` behaves like:**

* **Answer:** Setting `href`
* **Explanation:** Both navigate to a new page and add to history.

**19. Best method for login redirect?**

* **Answer:** `replace()`
* **Explanation:** Prevents user from going back to login page after login.

**20. Which removes current page from history?**

* **Answer:** `replace()`
* **Explanation:** Replaces current history entry.

**21. `location.reload(true)` means:**

* **Answer:** Reload from server
* **Explanation:** `true` forces bypassing cache.

**22. Which causes full navigation?**

* **Answer:** `assign()` or `replace()`
* **Explanation:** Both navigate fully to a new URL.

**23. Which is preferred in Single Page Apps?**

* **Answer:** History API
* **Explanation:** Avoids full reload, updates URL and state.

**24. Which avoids redirect loops?**

* **Answer:** `replace()`
* **Explanation:** Because it doesn’t add a new history entry.

**25. Which breaks browser back navigation?**

* **Answer:** `replace()`
* **Explanation:** Current page is replaced; back button skips it.

**26. Which method works without user interaction?**

* **Answer:** `assign()`
* **Explanation:** Navigates to new page directly.

**27. Which does NOT open a new tab?**

* **Answer:** `assign()`
* **Explanation:** It navigates in the same window.

**28. Which is SEO-unfriendly for navigation?**

* **Answer:** `replace()`
* **Explanation:** Page replaced in history may cause search engines to miss original URL.

**29. Which is equivalent to `location.href = url`?**

* **Answer:** `assign(url)`
* **Explanation:** Both navigate and add to history.

**30. Best use-case for `replace()`?**

* **Answer:** Auth redirect
* **Explanation:** Prevent user from returning to login.

---

# 78️⃣ Forward and Reverse Navigation (MCQs 31–45)

**31. Which object manages browser navigation history?**

* **Answer:** `history`
* **Explanation:** `window.history` has back/forward/go methods.

**32. `history.back()` is same as:**

* **Answer:** `history.go(-1)`
* **Explanation:** Moves back one step in history stack.

**33. Which moves one step forward?**

* **Answer:** `history.forward()`
* **Explanation:** Moves forward one step in history stack.

**34. What does `history.go(0)` do?**

* **Answer:** Reloads page
* **Explanation:** `0` reloads current page.

**35. Negative value in `history.go()` means:**

* **Answer:** Backward navigation
* **Explanation:** Negative moves back, positive moves forward.

**36. Which method supports state objects?**

* **Answer:** `pushState()`
* **Explanation:** HTML5 History API lets you push state without reload.

**37. Which does NOT reload the page?**

* **Answer:** `pushState()`
* **Explanation:** Updates URL and state silently.

**38. Which is used by browser back button?**

* **Answer:** `history`
* **Explanation:** Browser reads the history stack for back/forward buttons.

**39. History API belongs to:**

* **Answer:** `window`
* **Explanation:** It is part of `window` object.

**40. Which breaks history stack?**

* **Answer:** `replace()`
* **Explanation:** Replaces current entry instead of adding new one.

**41. Which supports SPA routing?**

* **Answer:** History API
* **Explanation:** Allows URL changes without page reload.

**42. `history.length` represents:**

* **Answer:** Total entries
* **Explanation:** Shows number of entries in history stack.

**43. Which is deprecated?**

* **Answer:** None
* **Explanation:** All major methods are current.

**44. Which modifies URL without reload?**

* **Answer:** `pushState()`
* **Explanation:** Only URL and state are updated.

**45. Best practice for client navigation?**

* **Answer:** History API
* **Explanation:** Avoids full page reloads in SPAs.

---

# 79️⃣ Filling the Window with Content (MCQs 46–60)

**46. Which unit fills full viewport height?**

* **Answer:** `vh`
* **Explanation:** `100vh` equals 100% of viewport height.

**47. Which removes default browser spacing?**

* **Answer:** `margin:0`
* **Explanation:** Eliminates default body margins.

**48. Which object controls visible page content?**

* **Answer:** `document`
* **Explanation:** `document` contains DOM elements.

**49. Best CSS for full-height layout?**

* **Answer:** `height:100vh`
* **Explanation:** Ensures element fills viewport height.

**50. Which property gives viewport width?**

* **Answer:** `innerWidth`
* **Explanation:** Returns viewport width in pixels.

**51. Which affects whole page?**

* **Answer:** `document.body`
* **Explanation:** Styling body affects the full visible page.

**52. Which is NOT a viewport unit?**

* **Answer:** `em`
* **Explanation:** `em` is relative to font size, not viewport.

**53. Which supports responsive design?**

* **Answer:** `vh/vw`
* **Explanation:** Viewport units scale with window size.

**54. Which event detects window resize?**

* **Answer:** `resize`
* **Explanation:** Triggered when window size changes.

**55. Which avoids scrollbars?**

* **Answer:** `overflow:hidden`
* **Explanation:** Hides content overflow.

**56. Which centers content vertically?**

* **Answer:** Flexbox
* **Explanation:** Flexbox makes vertical centering easy.

**57. Which changes dynamically on resize?**

* **Answer:** `vh`
* **Explanation:** Viewport height unit updates on window resize.

**58. Which tags must also be 100% height for full viewport fill?**

* **Answer:** `html` and `body`
* **Explanation:** Both need 100% for full-page height effects.

**59. Best practice?**

* **Answer:** CSS classes
* **Explanation:** Maintainable and reusable styles.

**60. Filling window is mainly:**

* **Answer:** CSS job
* **Explanation:** Layout and sizing are controlled via CSS.

---

# 80️⃣ Window Size and Location (MCQs 61–75)

**61. Which returns viewport width?**

* **Answer:** `innerWidth`
* **Explanation:** Returns viewport width excluding browser chrome.

**62. Which includes browser UI?**

* **Answer:** `outerHeight`
* **Explanation:** `outerHeight` includes toolbars, scrollbars.

**63. Which moves window to position?**

* **Answer:** `moveTo()`
* **Explanation:** Moves window top-left corner.

**64. Which resizes window?**

* **Answer:** `resizeTo()`
* **Explanation:** Sets window width and height.

**65. Which is restricted by browsers?**

* **Answer:** `moveTo()` and `resizeTo()`
* **Explanation:** Modern browsers block scripts from resizing main windows.

**66. Screen object provides:**

* **Answer:** Device resolution
* **Explanation:** `screen.width` and `screen.height` show device screen size.

**67. Which works only on script-opened windows?**

* **Answer:** `resizeTo()` and `moveTo()`
* **Explanation:** Browsers restrict these on main windows.

**68. Best way to detect device width?**

* **Answer:** `screen.width`
* **Explanation:** Gives actual device width in pixels.

**69. Which is deprecated?**

* **Answer:** `moveBy()`
* **Explanation:** Modern browsers discourage moving main windows.

**70. Modern best practice is:**

* **Answer:** Responsive CSS
* **Explanation:** Avoid moving or resizing windows; use CSS for layout.

**71. Which moves window relatively?**

* **Answer:** `moveBy()`
* **Explanation:** Moves window by relative offsets.

**72. Which avoids JS resizing?**

* **Answer:** `vh/vw`
* **Explanation:** Responsive units remove need for resizing.

**73. Which excludes toolbars?**

* **Answer:** `innerHeight`
* **Explanation:** Only content area height.

**74. Which knows orientation?**

* **Answer:** `screen`
* **Explanation:** Screen API includes width vs height info.

**75. Best UX approach?**

* **Answer:** Responsive design
* **Explanation:** User-friendly; avoids forcing window size.

---

# 81️⃣ Popup Blocker Testing (MCQs 76–90)

**76. Which method opens a new tab/window?**

* **Answer:** `window.open()`
* **Explanation:** Opens new window/tab depending on browser settings.

**77. Why browsers block popups?**

* **Answer:** All of these
* **Explanation:** Security, UX, and spam prevention.

**78. Safest way to open popup?**

* **Answer:** On user click
* **Explanation:** Most blockers allow popups triggered by user action.

**79. Popup is blocked if `window.open()` returns:**

* **Answer:** null
* **Explanation:** Blocked popups return `null` reference.

**80. Which property checks popup state?**

* **Answer:** `closed`
* **Explanation:** Checks if the popup window is closed.

**81. Which is allowed?**

* **Answer:** Popup on click
* **Explanation:** Only user-initiated popups bypass blockers.

**82. Which target opens new tab?**

* **Answer:** `_blank`
* **Explanation:** Opens new tab/window.

**83. Popup blockers work at:**

* **Answer:** Browser level
* **Explanation:** Each browser has internal blocker rules.

**84. Which is deprecated?**

* **Answer:** `showModalDialog()`
* **Explanation:** Removed in modern browsers; use modal UI instead.

**85. Modern alternative to popups?**

* **Answer:** Modal UI
* **Explanation:** Inline modals replace popups safely.

**86. Which improves UX?**

* **Answer:** Single modal
* **Explanation:** Less intrusive than multiple popups.

**87. Popup blockers mainly block:**

* **Answer:** Windows
* **Explanation:** Scripts opening new windows/tabs.

**88. Which returns reference to opened window?**

* **Answer:** `window.open()`
* **Explanation:** Returns window object if popup allowed.

**89. Which is best practice?**

* **Answer:** Avoid popups
* **Explanation:** UX-friendly, compatible with blockers.

**90. Popup blockers protect against:**

* **Answer:** All of these
* **Explanation:** Security, malware, and poor UX.

---

🎯 **Revision Tip:** Focus on `location`, `history`, `window`, `screen`, and popup behaviors — these are commonly tested in frontend exams and interviews.
