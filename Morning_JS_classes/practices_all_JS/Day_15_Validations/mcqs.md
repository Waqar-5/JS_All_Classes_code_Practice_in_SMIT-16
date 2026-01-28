# 📝 75 MCQs on Form Validation in JavaScript

> **Topics Covered:**
> 82. Form validation: text fields
> 83. Form validation: drop-downs
> 84. Form validation: radio buttons
> 85. Form validation: ZIP codes
> 86. Form validation: email

Each topic has 15 MCQs. Answer key is provided at the bottom.

---

## 82️⃣ Text Fields Validation (15 MCQs)

1. What is the primary purpose of validating a text field?
   a) Styling input
   b) Checking user input correctness
   c) Storing data
   d) Animating input

2. Which JS method removes extra spaces in text input?
   a) .trim()
   b) .slice()
   c) .replace()
   d) .substr()

3. Regex `/^[a-zA-Z\s]{3,30}$/` validates:
   a) Numbers only
   b) Letters with spaces, length 3-30
   c) Emails
   d) ZIP codes

4. Minimum length validation helps to:
   a) Make text bold
   b) Avoid too short input
   c) Convert text to uppercase
   d) Hide input

5. What property gets text field value?
   a) .text
   b) .value
   c) .input
   d) .content

6. What will `"   John  ".trim()` return?
   a) "John"
   b) "   John  "
   c) "John  "
   d) "   John"

7. Which event is best for real-time text validation?
   a) click
   b) blur
   c) hover
   d) focusout

8. Text field validation is usually done:
   a) Server-side only
   b) Client-side only
   c) Both client and server-side
   d) Not needed

9. What does `pattern` attribute in HTML do?
   a) Sets color
   b) Provides regex for validation
   c) Animates input
   d) Sets max length

10. Which is correct regex for letters only?
    a) /^[0-9]+$/
    b) /^[a-zA-Z]+$/
    c) /^\d+$/
    d) /^.+$/

11. What happens if a required text field is empty?
    a) Form submits
    b) Form blocked until filled
    c) Browser crashes
    d) Ignored silently

12. To allow Unicode letters in names, regex should include:
    a) \w
    b) \d
    c) \p{L} with u flag
    d) \s

13. Maximum length validation prevents:
    a) Long strings
    b) Short strings
    c) Numbers
    d) CSS overflow

14. `value.length` gives:
    a) Number of characters in input
    b) Width of input
    c) Number of words
    d) Height of input

15. Which is not a text field validation rule?
    a) Required
    b) Min/Max length
    c) Pattern
    d) Color

---

## 83️⃣ Drop-downs Validation (15 MCQs)

1. Default option placeholder value should be:
   a) "0"
   b) "default"
   c) ""
   d) "null"

2. To get selected value:
   a) select.value
   b) select.text
   c) select.input
   d) select.option

3. Which event is best for validating drop-down selection?
   a) click
   b) change
   c) blur
   d) input

4. If select value is empty, it is:
   a) Valid
   b) Invalid
   c) Optional
   d) Ignored

5. Drop-down validation prevents:
   a) Selecting invalid placeholder
   b) Submitting form
   c) CSS issues
   d) Animations

6. Which property provides selected index?
   a) select.selectedIndex
   b) select.value
   c) select.optionIndex
   d) select.index

7. To validate multiple drop-downs dynamically, use:
   a) Loop
   b) Single variable
   c) CSS
   d) HTML only

8. Drop-down values are typically:
   a) Numbers
   b) Strings
   c) Both
   d) Null

9. HTML select tag requires which closing tag?
   a) No closing
   b) </select>
   c) </option>
   d) </input>

10. Dynamic options validation ensures:
    a) Only placeholder is selected
    b) API values are valid
    c) CSS is applied
    d) Input type changes

11. Can drop-down be empty when required?
    a) Yes
    b) No
    c) Sometimes
    d) Depends on browser

12. Event `change` triggers when:
    a) Input is typed
    b) Selection changes
    c) Mouse hovers
    d) Form submits

13. Select validation is usually:
    a) Optional
    b) Required for data accuracy
    c) Only for styling
    d) Ignored

14. `option.disabled = true` does:
    a) Prevent selection
    b) Allows selection
    c) Hides option
    d) Submits form

15. Placeholder option should:
    a) Have value=""
    b) Have numeric value
    c) Be hidden
    d) Be selected always

---

## 84️⃣ Radio Buttons Validation (15 MCQs)

1. Radio buttons allow:
   a) Multiple selections
   b) Single selection
   c) No selection
   d) Auto fill

2. Which property checks if radio is selected?
   a) .checked
   b) .selected
   c) .value
   d) .active

3. Best method to check one radio is selected:
   a) Loop through name group
   b) Check first element only
   c) Use CSS
   d) Use HTML attribute

4. Which JS method simplifies check on NodeList?
   a) Array.some()
   b) Array.map()
   c) Array.filter()
   d) Array.join()

5. Radio validation is skipped if:
   a) Field not required
   b) Multiple radios exist
   c) Form is submitted
   d) Browser error

6. How to get value of selected radio?
   a) radios.find(r => r.checked).value
   b) radios.value
   c) radios.checked
   d) radios.text

7. Radio buttons share:
   a) Same class
   b) Same name attribute
   c) Same id
   d) Same type only

8. Radio validation usually occurs:
   a) On submit
   b) On click
   c) On focus
   d) On hover

9. For dynamic radios, validation requires:
   a) Live NodeList or Array.from
   b) Static array
   c) CSS
   d) HTML only

10. Default radio value:
    a) Always selected
    b) Can be none
    c) Always blank
    d) Cannot exist

11. Which event can trigger validation?
    a) click
    b) change
    c) blur
    d) input

12. If no radio selected and required, form:
    a) Submits
    b) Blocks submission
    c) Crashes
    d) Ignores

13. Radio validation is essential for:
    a) Single choice fields
    b) Multi-choice fields
    c) Text input
    d) Dropdowns

14. Inline error messages are:
    a) Better than alert
    b) Worse than alert
    c) Optional
    d) Not used

15. To validate multiple radio groups:
    a) Separate validation per group
    b) One loop for all
    c) Only first group
    d) CSS handles it

---

## 85️⃣ ZIP Codes Validation (15 MCQs)

1. Regex `/^\d{5}$/` validates:
   a) 5-digit ZIP
   b) Email
   c) Letters
   d) Dropdown

2. Regex `/^\d{5}(-\d{4})?$/` validates:
   a) 5 or 9-digit ZIP
   b) 6-digit ZIP
   c) Letters
   d) Emails

3. Always convert input to string before regex because:
   a) Numbers cannot be tested
   b) Browser error
   c) CSS fails
   d) Input ignored

4. ZIP codes are usually:
   a) Numbers
   b) Strings
   c) Both
   d) Letters

5. Country-specific ZIP regex ensures:
   a) Correct shipping
   b) Form submits faster
   c) CSS styling
   d) JS animation

6. Which property gives ZIP field value?
   a) .value
   b) .text
   c) .content
   d) .data

7. ZIP validation prevents:
   a) Invalid addresses
   b) Styling errors
   c) Browser crash
   d) Font issues

8. Length validation helps:
   a) Ensure proper digits
   b) Color input
   c) Animate input
   d) Hide field

9. Regex symbols ^ and $ mean:
   a) Start and end
   b) Number only
   c) Space
   d) Pattern optional

10. Optional field ZIP can:
    a) Be empty
    b) Must be filled
    c) Must have letters
    d) Ignore regex

11. ZIP codes can include:
    a) Numbers only
    b) Letters
    c) Special chars
    d) Spaces

12. Validation should occur:
    a) On blur
    b) On click
    c) On hover
    d) Never

13. For dynamic ZIP forms:
    a) Update regex per country
    b) Use single regex
    c) Ignore input
    d) Use CSS

14. User enters 12345-6789, validation:
    a) Passes
    b) Fails
    c) Error
    d) Ignores

15. Real-world ZIP validation is essential for:
    a) Shipping forms
    b) Text inputs
    c) Dropdowns
    d) Radio buttons

---

## 86️⃣ Email Validation (15 MCQs)

1. Regex `/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i` validates:
   a) Most real emails
   b) Only Gmail
   c) Numbers
   d) ZIP codes

2. Email must contain:
   a) @ symbol
   b) # symbol
   c) $ symbol
   d) & symbol

3. Email validation should prevent:
   a) Spaces
   b) Numbers
   c) Letters
   d) Hyphen

4. Email regex is usually:
   a) Case-insensitive
   b) Case-sensitive
   c) Numeric only
   d) Optional

5. Before storing email, best practice:
   a) Lowercase
   b) Uppercase
   c) Trim numbers
   d) Encrypt only

6. Email validation combined with server-side ensures:
   a) No duplicates
   b) Faster CSS
   c) Animations
   d) Text format

7. Emails like [user.name+tag@gmail.com](mailto:user.name+tag@gmail.com):
   a) Valid
   b) Invalid
   c) Optional
   d) Must be rejected

8. Input type for email in HTML:
   a) type="email"
   b) type="text"
   c) type="number"
   d) type="zip"

9. Which event is best for email validation?
   a) blur
   b) click
   c) hover
   d) focus

10. Real-time validation improves:
    a) UX
    b) Server CPU
    c) CSS
    d) JS only

11. Invalid email submission should:
    a) Block form
    b) Submit anyway
    c) Crash browser
    d) Ignore

12. Which JS method tests email regex?
    a) .test()
    b) .match()
    c) .slice()
    d) .trim()

13. Client-side email validation alone:
    a) Improves UX
    b) Ensures uniqueness
    c) Checks database
    d) CSS styling

14. Correct email format includes:
    a) local-part@domain
    b) local-part#domain
    c) local-part&domain
    d) local-part+domain

15. Inline error for email field is:
    a) Better than alert
    b) Worse
    c) Optional
    d) Invalid

---

# ✅ Answer Key

### 82 Text Fields: 1-b, 2-a, 3-b, 4-b, 5-b, 6-a, 7-b, 8-c, 9-b, 10-b, 11-b, 12-c, 13-a, 14-a, 15-d

### 83 Drop-downs: 1-c, 2-a, 3-b, 4-b, 5-a, 6-a, 7-a, 8-c, 9-b, 10-b, 11-b, 12-b, 13-b, 14-a, 15-a

### 84 Radio Buttons: 1-b, 2-a, 3-a, 4-a, 5-a, 6-a, 7-b, 8-a, 9-a, 10-b, 11-b, 12-b, 13-a, 14-a, 15-a

### 85 ZIP Codes: 1-a, 2-a, 3-a, 4-c, 5-a, 6-a, 7-a, 8-a, 9-a, 10-a, 11-a, 12-a, 13-a, 14-a, 15-a

### 86 Email: 1-a, 2-a, 3-a, 4-a, 5-a, 6-a, 7-a, 8-a, 9-a, 10-a, 11-a, 12-a, 13-a, 14-a, 15-a
