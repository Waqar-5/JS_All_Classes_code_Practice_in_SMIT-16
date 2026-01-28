# 🌐 Browser Control in JavaScript – 90 MCQs (Beginner → Advanced)

> **One complete MCQ pack** focused ONLY on **Browser Control topics (76–81)**.
> Designed to help you **crack exams, interviews, MCQ tests, and frontend assessments**.

---

## 📚 Topics Covered (15 MCQs Each)

76. Getting and setting the URL
77. Getting and setting the URL (another way)
78. Forward and reverse navigation
79. Filling the window with content
80. Controlling window size and location
81. Testing for popup blockers

---

# 76️⃣ Getting and Setting the URL (MCQs 1–15)

**1.** Which object is used to access the current URL?
A. document
B. history
C. location
D. screen

**2.** What does `window.location.href` return?
A. Domain only
B. Full URL
C. Path only
D. Protocol only

**3.** Which property gives query parameters?
A. pathname
B. hash
C. search
D. origin

**4.** What happens when `location.href` is assigned a new value?
A. URL changes without reload
B. Page reloads
C. History clears
D. Error occurs

**5.** Which part contains `#section`?
A. search
B. pathname
C. hash
D. origin

**6.** How to get protocol (`https:`)?
A. location.origin
B. location.protocol
C. location.host
D. location.hostname

**7.** Which property includes port number?
A. hostname
B. host
C. protocol
D. pathname

**8.** `window.location` belongs to which object?
A. document
B. browser
C. window
D. screen

**9.** What is the type of `window.location`?
A. String
B. Object
C. Function
D. Array

**10.** Which property gives `/about.html`?
A. href
B. pathname
C. search
D. hash

**11.** Which method reloads current page?
A. location.assign()
B. location.reload()
C. history.go()
D. window.open()

**12.** What does `location.origin` include?
A. Protocol + hostname + port
B. Only hostname
C. Path only
D. Query string

**13.** Which is read-only?
A. location.href
B. location.pathname
C. location.origin
D. location.hash

**14.** Changing URL using location is considered:
A. Client routing
B. Server routing
C. Full navigation
D. SPA routing

**15.** Which is correct?
A. URL can be changed without reload using location
B. location always reloads page
C. history can’t change URL
D. document controls URL

---

# 77️⃣ Getting and Setting the URL (Another Way) – MCQs 16–30

**16.** Which method adds entry to browser history?
A. replace()
B. assign()
C. reload()
D. open()

**17.** Which method does NOT allow back navigation?
A. href
B. assign()
C. replace()
D. reload()

**18.** `location.assign()` is similar to:
A. history.go()
B. location.href
C. window.open()
D. document.write()

**19.** Which is best for redirect after login?
A. assign()
B. replace()
C. reload()
D. back()

**20.** Which removes current page from history?
A. assign()
B. href
C. replace()
D. open()

**21.** What does `location.reload(true)` do?
A. Reload from cache
B. Reload from server
C. Clear history
D. Change URL

**22.** Which causes full page navigation?
A. hash change
B. replace()
C. assign()
D. Both B & C

**23.** Which is preferred in SPAs?
A. location.href
B. history API
C. reload()
D. open()

**24.** Which is safer for redirect loops prevention?
A. assign()
B. replace()
C. href
D. reload()

**25.** Which one breaks back button?
A. assign()
B. href
C. replace()
D. back()

**26.** Which method works silently without user action?
A. open()
B. assign()
C. alert()
D. confirm()

**27.** Which does NOT create new tab?
A. open()
B. assign()
C. href
D. replace()

**28.** Which method is SEO-unfriendly?
A. replace()
B. assign()
C. reload()
D. open()

**29.** Which is equivalent?
`location.href = url`
A. replace(url)
B. assign(url)
C. reload(url)
D. go(url)

**30.** Best use of replace()?
A. Temporary pages
B. Authentication redirects
C. Navigation menu
D. SPA routing

---

# 78️⃣ Forward and Reverse Navigation (MCQs 31–45)

**31.** Which object controls browser navigation?
A. location
B. history
C. document
D. screen

**32.** `history.back()` is same as:
A. history.go(1)
B. history.go(-1)
C. history.forward()
D. location.back()

**33.** Which goes forward?
A. back()
B. reverse()
C. forward()
D. next()

**34.** `history.go(0)` does what?
A. Clears history
B. Reloads page
C. Goes back
D. Goes forward

**35.** Negative value in go() means:
A. Reload
B. Forward
C. Backward
D. Error

**36.** Which API supports SPA routing?
A. location
B. history.pushState
C. open
D. screen

**37.** history length represents:
A. Pages visited
B. Current index
C. Total entries
D. Cache size

**38.** Which cannot modify URL?
A. back()
B. go()
C. pushState()
D. open()

**39.** Which does not reload page?
A. pushState
B. back()
C. forward()
D. reload()

**40.** history is part of:
A. document
B. window
C. navigator
D. screen

**41.** Which is deprecated?
A. history.go()
B. history.length
C. history.forward()
D. None

**42.** Browser back button uses:
A. location
B. history
C. document
D. screen

**43.** Which breaks history stack?
A. assign()
B. replace()
C. back()
D. forward()

**44.** Which method supports state objects?
A. back()
B. go()
C. pushState()
D. reload()

**45.** Best for client-side routing?
A. location.href
B. history API
C. reload
D. open

---

# 79️⃣ Filling the Window with Content (MCQs 46–60)

**46.** Which unit fills viewport height?
A. %
B. em
C. vh
D. px

**47.** Which removes default spacing?
A. padding:0
B. margin:0
C. border:0
D. gap:0

**48.** Which element controls visible content?
A. window
B. document
C. screen
D. history

**49.** Best CSS for full screen layout?
A. height:100%
B. height:100vh
C. width:auto
D. position:fixed

**50.** Which property gives viewport width?
A. screen.width
B. innerWidth
C. outerWidth
D. offsetWidth

**51.** Which affects entire page content?
A. document.body
B. window
C. screen
D. history

**52.** Which is NOT viewport unit?
A. vw
B. vh
C. em
D. vmin

**53.** Which supports responsive UI?
A. px
B. vh/vw
C. pt
D. cm

**54.** Which event detects resize?
A. load
B. resize
C. scroll
D. click

**55.** Full screen content requires:
A. JS only
B. CSS only
C. JS + CSS
D. HTML only

**56.** Which avoids scrollbars?
A. overflow:hidden
B. display:none
C. position:absolute
D. z-index

**57.** Which is correct?
A. body fills screen by default
B. html needs height
C. vh needs JS
D. CSS can’t fill window

**58.** Which centers content vertically?
A. float
B. flexbox
C. inline
D. block

**59.** Which is dynamic on resize?
A. px
B. em
C. vh
D. rem

**60.** Best practice?
A. Inline styles
B. CSS classes
C. document.write
D. alert

---

# 80️⃣ Window Size and Location (MCQs 61–75)

**61.** Which returns viewport width?
A. outerWidth
B. innerWidth
C. screen.width
D. clientWidth

**62.** Which gives browser chrome size?
A. innerHeight
B. outerHeight
C. screen.height
D. offsetHeight

**63.** Which moves window?
A. resizeTo
B. moveTo
C. scrollTo
D. position

**64.** Which resizes window?
A. moveTo
B. resizeBy
C. scrollBy
D. center

**65.** Which is restricted by browsers?
A. moveTo
B. resizeTo
C. Both A & B
D. scrollTo

**66.** Screen object gives:
A. Viewport size
B. Device resolution
C. Page height
D. History length

**67.** Which works only on script-opened windows?
A. open
B. resizeTo
C. alert
D. confirm

**68.** Which detects device width?
A. screen.width
B. innerWidth
C. offsetWidth
D. scrollWidth

**69.** Which is deprecated in some browsers?
A. moveBy
B. resizeBy
C. open
D. reload

**70.** Which is safer for responsive design?
A. screen
B. viewport
C. history
D. location

**71.** Which changes window position relative?
A. moveTo
B. moveBy
C. resizeTo
D. resizeBy

**72.** Which unit avoids JS resizing?
A. px
B. vh/vw
C. pt
D. cm

**73.** Which returns height excluding toolbars?
A. outerHeight
B. innerHeight
C. screen.height
D. clientHeight

**74.** Which object knows screen orientation?
A. window
B. screen
C. document
D. history

**75.** Best practice today?
A. Move windows
B. Resize windows
C. Responsive CSS
D. Popups

---

# 81️⃣ Popup Blocker Detection (MCQs 76–90)

**76.** Which opens new window?
A. location.assign
B. history.go
C. window.open
D. document.write

**77.** Why are popups blocked?
A. Security
B. UX abuse
C. Malware
D. All

**78.** Best way to avoid blocking?
A. setTimeout
B. User click
C. loop
D. reload

**79.** Popup blocker detection checks:
A. null return
B. closed property
C. undefined
D. All

**80.** Which returns null if blocked?
A. alert
B. open
C. confirm
D. prompt

**81.** Which is allowed?
A. Auto open on load
B. Open on click
C. Loop open
D. Hidden open

**82.** Which is safest?
A. _self
B. _top
C. _blank
D. _parent

**83.** Which property checks popup state?
A. closed
B. status
C. focus
D. blur

**84.** Popup blocking happens at:
A. Server
B. Browser
C. OS
D. Network

**85.** Which is deprecated?
A. showModalDialog
B. alert
C. confirm
D. prompt

**86.** Which API opens tab instead of window?
A. location
B. open
C. history
D. screen

**87.** Which improves UX?
A. Multiple popups
B. Modal dialogs
C. Alerts only
D. Auto open

**88.** Popup blockers mainly affect:
A. Images
B. Windows
C. Styles
D. Scripts

**89.** Which is modern alternative?
A. alert
B. confirm
C. Modal UI
D. prompt

**90.** Best practice?
A. Avoid popups
B. Force popups
C. Disable blocker
D. Ignore UX

---

# ✅ Answer Key

1-C, 2-B, 3-C, 4-B, 5-C, 6-B, 7-B, 8-C, 9-B, 10-B, 11-B, 12-A, 13-C, 14-C, 15-B,
16-B, 17-C, 18-B, 19-B, 20-C, 21-B, 22-D, 23-B, 24-B, 25-C, 26-B, 27-B, 28-A, 29-B, 30-B,
31-B, 32-B, 33-C, 34-B, 35-C, 36-B, 37-C, 38-D, 39-A, 40-B, 41-D, 42-B, 43-B, 44-C, 45-B,
46-C, 47-B, 48-B, 49-B, 50-B, 51-A, 52-C, 53-B, 54-B, 55-C, 56-A, 57-B, 58-B, 59-C, 60-B,
61-B, 62-B, 63-B, 64-B, 65-C, 66-B, 67-B, 68-A, 69-A, 70-B, 71-B, 72-B, 73-B, 74-B, 75-C,
76-C, 77-D, 78-B, 79-D, 80-B, 81-B, 82-C, 83-A, 84-B, 85-A, 86-B, 87-B, 88-B, 89-C, 90-A

---

🎯 **Master these 90 MCQs = You can confidently crack any browser-control related test or interview**



more 
# 🌐 Browser Control in JavaScript – 90 MCQs (Exam Cracker Edition)

> **Best-over-best MCQs** designed to crack **any kind of exam**: university tests, frontend interviews, JS MCQs, competitive exams.
>
> ✔ Clear concepts
> ✔ Tricky but fair options
> ✔ Real browser behavior
> ✔ Beginner → Advanced progression

---

## 📌 Topics & Distribution (15 MCQs Each)

76. Browser control: Getting and setting the URL
77. Browser control: Getting and setting the URL (another way)
78. Browser control: Forward and reverse navigation
79. Browser control: Filling the window with content
80. Browser control: Controlling the window’s size and location
81. Browser control: Testing for popup blockers

---

# 76️⃣ Getting and Setting the URL (MCQs 1–15)

**1.** Which JavaScript object directly represents the browser’s current URL?
A. `window`
B. `document`
C. `location`
D. `history`

**2.** What does `window.location.href` return?
A. Only the domain name
B. Only the path
C. The complete URL
D. Only protocol

**3.** Which property contains query parameters like `?id=10`?
A. `pathname`
B. `search`
C. `hash`
D. `origin`

**4.** Assigning a new value to `location.href` will:
A. Change URL without reload
B. Reload the page
C. Clear browser cache
D. Update history silently

**5.** Which part of URL stores `#section1`?
A. `search`
B. `pathname`
C. `hash`
D. `host`

**6.** How do you get the protocol (`https:`)?
A. `location.origin`
B. `location.protocol`
C. `location.host`
D. `location.hostname`

**7.** Which property includes port number if present?
A. `hostname`
B. `host`
C. `protocol`
D. `pathname`

**8.** `window.location` is best described as:
A. String
B. Function
C. Object
D. Array

**9.** Which property is read-only?
A. `href`
B. `pathname`
C. `origin`
D. `hash`

**10.** Which property returns `/profile.html`?
A. `href`
B. `pathname`
C. `search`
D. `hash`

**11.** Which method reloads the current page?
A. `location.assign()`
B. `location.reload()`
C. `history.go()`
D. `window.open()`

**12.** What does `location.origin` include?
A. Domain only
B. Protocol + domain + port
C. Path + query
D. Hash only

**13.** Which URL change causes no page reload?
A. `location.href`
B. `location.assign()`
C. Hash change only
D. `location.replace()`

**14.** URL control using `location` is considered:
A. Client-side routing
B. Full navigation
C. Virtual routing
D. Shadow routing

**15.** Which is correct?
A. `location` works without reload
B. `location` always reloads page
C. `document` controls URL
D. `screen` controls navigation

---

# 77️⃣ Getting and Setting the URL (Another Way) (MCQs 16–30)

**16.** Which method adds a new entry to browser history?
A. `replace()`
B. `assign()`
C. `reload()`
D. `open()`

**17.** Which method prevents the back button from returning?
A. `href`
B. `assign()`
C. `replace()`
D. `back()`

**18.** `location.assign()` behaves like:
A. `history.go()`
B. Setting `href`
C. `window.open()`
D. `document.write()`

**19.** Best method for login redirect?
A. `assign()`
B. `replace()`
C. `reload()`
D. `open()`

**20.** Which removes current page from history?
A. `assign()`
B. `href`
C. `replace()`
D. `go()`

**21.** `location.reload(true)` means:
A. Reload from cache
B. Reload from server
C. Clear history
D. New tab reload

**22.** Which causes full navigation?
A. Hash change
B. `replace()`
C. `assign()`
D. Both B & C

**23.** Which is preferred in Single Page Apps?
A. `location.href`
B. History API
C. `reload()`
D. `open()`

**24.** Which avoids redirect loops?
A. `assign()`
B. `replace()`
C. `href`
D. `reload()`

**25.** Which breaks browser back navigation?
A. `assign()`
B. `href`
C. `replace()`
D. `back()`

**26.** Which method works without user interaction?
A. `open()`
B. `assign()`
C. `confirm()`
D. `prompt()`

**27.** Which does NOT open a new tab?
A. `open()`
B. `assign()`
C. `_blank`
D. `target`

**28.** Which is SEO-unfriendly for navigation?
A. `replace()`
B. `assign()`
C. `reload()`
D. `open()`

**29.** Which is equivalent to `location.href = url`?
A. `replace(url)`
B. `assign(url)`
C. `reload(url)`
D. `go(url)`

**30.** Best use-case for `replace()`?
A. Menu navigation
B. Auth redirect
C. SPA routing
D. Pagination

---

# 78️⃣ Forward and Reverse Navigation (MCQs 31–45)

**31.** Which object manages browser navigation history?
A. `location`
B. `history`
C. `document`
D. `screen`

**32.** `history.back()` is same as:
A. `history.go(1)`
B. `history.go(-1)`
C. `history.forward()`
D. `location.back()`

**33.** Which moves one step forward?
A. `back()`
B. `go(-1)`
C. `forward()`
D. `reload()`

**34.** What does `history.go(0)` do?
A. Clears history
B. Reloads page
C. Goes back
D. Goes forward

**35.** Negative value in `history.go()` means:
A. Forward navigation
B. Reload
C. Backward navigation
D. Error

**36.** Which method supports state objects?
A. `back()`
B. `forward()`
C. `pushState()`
D. `reload()`

**37.** Which does NOT reload the page?
A. `pushState()`
B. `back()`
C. `reload()`
D. `go(0)`

**38.** Which is used by browser back button?
A. `location`
B. `history`
C. `screen`
D. `document`

**39.** History API belongs to:
A. `document`
B. `window`
C. `navigator`
D. `screen`

**40.** Which breaks history stack?
A. `assign()`
B. `replace()`
C. `back()`
D. `forward()`

**41.** Which supports SPA routing?
A. `location.href`
B. History API
C. `reload()`
D. `open()`

**42.** `history.length` represents:
A. Current index
B. Pages visited
C. Total entries
D. Cache size

**43.** Which is deprecated?
A. `history.go()`
B. `history.length`
C. `history.forward()`
D. None

**44.** Which modifies URL without reload?
A. `assign()`
B. `pushState()`
C. `reload()`
D. `open()`

**45.** Best practice for client navigation?
A. Reload page
B. History API
C. Use popups
D. Use alerts

---

# 79️⃣ Filling the Window with Content (MCQs 46–60)

**46.** Which unit fills full viewport height?
A. `%`
B. `px`
C. `vh`
D. `em`

**47.** Which removes default browser spacing?
A. `padding:0`
B. `margin:0`
C. `border:0`
D. `gap:0`

**48.** Which object controls visible page content?
A. `window`
B. `document`
C. `screen`
D. `history`

**49.** Best CSS for full-height layout?
A. `height:100%`
B. `height:100vh`
C. `width:auto`
D. `position:absolute`

**50.** Which property gives viewport width?
A. `screen.width`
B. `innerWidth`
C. `outerWidth`
D. `offsetWidth`

**51.** Which affects whole page?
A. `document.body`
B. `window`
C. `screen`
D. `history`

**52.** Which is NOT a viewport unit?
A. `vh`
B. `vw`
C. `em`
D. `vmin`

**53.** Which supports responsive design?
A. `px`
B. `vh/vw`
C. `pt`
D. `cm`

**54.** Which event detects window resize?
A. `load`
B. `resize`
C. `scroll`
D. `click`

**55.** Which avoids scrollbars?
A. `overflow:hidden`
B. `display:none`
C. `position:absolute`
D. `z-index`

**56.** Which centers content vertically?
A. Float
B. Flexbox
C. Inline-block
D. Position static

**57.** Which changes dynamically on resize?
A. `px`
B. `em`
C. `vh`
D. `rem`

**58.** Which tag must also be 100% height?
A. `body` only
B. `html` only
C. Both `html` and `body`
D. None

**59.** Which is best practice?
A. Inline JS styles
B. CSS classes
C. `document.write()`
D. Alerts

**60.** Filling window is mainly:
A. JavaScript job
B. CSS job
C. HTML job
D. Server job

---

# 80️⃣ Window Size and Location (MCQs 61–75)

**61.** Which returns viewport width?
A. `outerWidth`
B. `innerWidth`
C. `screen.width`
D. `clientWidth`

**62.** Which includes browser UI?
A. `innerHeight`
B. `outerHeight`
C. `screen.height`
D. `clientHeight`

**63.** Which moves window to position?
A. `resizeTo()`
B. `moveTo()`
C. `scrollTo()`
D. `position()`

**64.** Which resizes window?
A. `moveBy()`
B. `resizeTo()`
C. `scrollBy()`
D. `center()`

**65.** Which is restricted by browsers?
A. `moveTo()`
B. `resizeTo()`
C. Both A & B
D. `scrollTo()`

**66.** Screen object provides:
A. Viewport size
B. Device resolution
C. Page height
D. History info

**67.** Which works only on script-opened windows?
A. `open()`
B. `resizeTo()`
C. `alert()`
D. `confirm()`

**68.** Best way to detect device width?
A. `screen.width`
B. `innerWidth`
C. `offsetWidth`
D. `scrollWidth`

**69.** Which is deprecated in modern browsers?
A. `moveBy()`
B. `resizeBy()`
C. `open()`
D. `reload()`

**70.** Modern best practice is:
A. Move windows
B. Resize windows
C. Responsive CSS
D. Popups

**71.** Which moves window relatively?
A. `moveTo()`
B. `moveBy()`
C. `resizeTo()`
D. `resizeBy()`

**72.** Which avoids JS resizing?
A. `px`
B. `vh/vw`
C. `pt`
D. `cm`

**73.** Which excludes toolbars?
A. `outerHeight`
B. `innerHeight`
C. `screen.height`
D. `clientHeight`

**74.** Which knows orientation?
A. `window`
B. `screen`
C. `document`
D. `history`

**75.** Best UX approach?
A. Force resize
B. Force move
C. Responsive design
D. Popups

---

# 81️⃣ Popup Blocker Testing (MCQs 76–90)

**76.** Which method opens a new tab/window?
A. `assign()`
B. `open()`
C. `reload()`
D. `go()`

**77.** Why browsers block popups?
A. Security
B. User experience
C. Abuse prevention
D. All of these

**78.** Safest way to open popup?
A. On page load
B. On user click
C. Inside loop
D. On timeout

**79.** Popup is blocked if `window.open()` returns:
A. true
B. false
C. null
D. object

**80.** Which property checks popup state?
A. `status`
B. `closed`
C. `focus`
D. `blur`

**81.** Which is allowed?
A. Auto-open popup
B. Popup on click
C. Hidden popup
D. Multiple popups

**82.** Which target opens new tab?
A. `_self`
B. `_parent`
C. `_blank`
D. `_top`

**83.** Popup blockers work at:
A. Server level
B. Browser level
C. OS level
D. Network level

**84.** Which is deprecated?
A. `showModalDialog()`
B. `alert()`
C. `confirm()`
D. `prompt()`

**85.** Modern alternative to popups?
A. Alerts
B. Confirm boxes
C. Modal UI
D. Prompts

**86.** Which improves UX?
A. Multiple popups
B. Single modal
C. Forced tabs
D. Auto redirects

**87.** Popup blockers mainly block:
A. Images
B. Windows
C. Stylesheets
D. Cookies

**88.** Which returns reference to opened window?
A. `alert()`
B. `confirm()`
C. `window.open()`
D. `location.assign()`

**89.** Which is best practice?
A. Avoid popups
B. Force popups
C. Disable blockers
D. Ignore UX

**90.** Popup blockers protect against:
A. Spam
B. Malware
C. Poor UX
D. All of these

---

# ✅ Answer Key

1-C, 2-C, 3-B, 4-B, 5-C, 6-B, 7-B, 8-C, 9-C, 10-B, 11-B, 12-B, 13-C, 14-B, 15-B,
16-B, 17-C, 18-B, 19-B, 20-C, 21-B, 22-D, 23-B, 24-B, 25-C, 26-B, 27-B, 28-A, 29-B, 30-B,
31-B, 32-B, 33-C, 34-B, 35-C, 36-C, 37-A, 38-B, 39-B, 40-B, 41-B, 42-C, 43-D, 44-B, 45-B,
46-C, 47-B, 48-B, 49-B, 50-B, 51-A, 52-C, 53-B, 54-B, 55-A, 56-B, 57-C, 58-C, 59-B, 60-B,
61-B, 62-B, 63-B, 64-B, 65-C, 66-B, 67-B, 68-A, 69-A, 70-C, 71-B, 72-B, 73-B, 74-B, 75-C,
76-B, 77-D, 78-B, 79-C, 80-B, 81-B, 82-C, 83-B, 84-A, 85-C, 86-B, 87-B, 88-C, 89-A, 90-D

---

🎯 **Revise this README once = high confidence in any browser-control exam or interview**
