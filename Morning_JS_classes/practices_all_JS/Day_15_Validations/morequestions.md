# 📝 75 Questions & Detailed Answers on Form Validation in JavaScript (Memory Tricks Included)

> **Topics Covered:**
> 82. Form validation: text fields
> 83. Form validation: drop-downs
> 84. Form validation: radio buttons
> 85. Form validation: ZIP codes
> 86. Form validation: email

This README contains **15 detailed questions and answers per topic** with explanations, tips, memory tricks, and real-world scenarios.

---

## 82️⃣ Text Fields Validation (15 Q&A)

1. **Q:** Why validate text fields?
   **A:** To ensure input meets requirements (format, length, characters). **Trick:** Remember “**FLT**” → Format, Length, Type.

2. **Q:** Role of `.trim()`?
   **A:** Removes spaces at edges. **Memory Tip:** Think of trimming a plant, edges only, not middle.

3. **Q:** Regex for letters only (3-30 chars)?
   **A:** `/^[a-zA-Z\s]{3,30}$/`
   **Trick:** Letters + spaces only, `{3,30}` = age of a person (easy to remember).

4. **Q:** Minimum length validation prevents?
   **A:** Too short input. **Tip:** Minimum → “tiny input guard”.

5. **Q:** Maximum length validation prevents?
   **A:** Overlong input. **Tip:** Maximum → “stop overflow”.

6. **Q:** How to get value?
   **A:** `element.value`. **Trick:** `.value` → think “what’s inside”.

7. **Q:** Best events for validation?
   **A:** `input`, `blur`. **Tip:** Input = type, blur = leave field.

8. **Q:** Server-side only validation sufficient?
   **A:** No, client-side helps UX and reduces errors.

9. **Q:** `pattern` attribute?
   **A:** Regex in HTML. **Tip:** Pattern = expected blueprint.

10. **Q:** Unicode letters support?
    **A:** `/^[\p{L}\s]{3,30}$/u`.
    **Trick:** `   **Trick:**`\u` = universal letters.

11. **Q:** Inline error message?
    **A:** `<span>` updated dynamically. **Tip:** Error appears nearby = “close alert”.

12. **Q:** Difference `.trim()` vs regex?
    **A:** Trim removes edges, regex validates structure. **Tip:** Trim = haircut, regex = rulebook.

13. **Q:** Dynamic input validation?
    **A:** Event delegation. **Tip:** Handle new fields automatically.

14. **Q:** Combine multiple rules?
    **A:** Reusable function sequence. **Tip:** Rule chain = assembly line.

15. **Q:** Why crucial?
    **A:** Prevent invalid/malicious input, UX improvement. **Tip:** “Clean input = happy backend”.

---

## 83️⃣ Drop-downs Validation (15 Q&A)

1. **Q:** Why validate drop-downs?
   **A:** Prevent placeholder submission. **Tip:** Dropdown = “choice gate”.

2. **Q:** Get selected value?
   **A:** `select.value`. **Tip:** Think “grab selected treasure”.

3. **Q:** Best event?
   **A:** `change`. **Tip:** Only triggers when selection changes.

4. **Q:** Detect placeholder?
   **A:** `value === ""`. **Tip:** Empty = fake choice.

5. **Q:** Skip validation?
   **A:** Only if optional. **Tip:** Optional = safe skip.

6. **Q:** Multiple drop-downs?
   **A:** Loop `querySelectorAll('select')`. **Tip:** Each gate must be checked.

7. **Q:** Selected index?
   **A:** `select.selectedIndex`. **Tip:** Count from top, 0-based.

8. **Q:** Disable submit until valid?
   **A:** Prevent invalid submission. **Tip:** Stop sign.

9. **Q:** Dynamic options?
   **A:** Fetch and validate. **Tip:** Always check imported values.

10. **Q:** Mark invalid?
    **A:** Add `.invalid`. **Tip:** Red highlight = danger.

11. **Q:** Multiple selects?
    **A:** Validate individually. **Tip:** Each gate = checkpoint.

12. **Q:** Optional drop-down?
    **A:** Skip if empty. **Tip:** Soft gate.

13. **Q:** SelectedIndex vs value?
    **A:** Index = position, value = actual choice.

14. **Q:** Prevent placeholder selection?
    **A:** `disabled + selected`.

15. **Q:** Client + server validation?
    **A:** Yes. **Tip:** Double lock.

---

## 84️⃣ Radio Buttons Validation (15 Q&A)

1. **Q:** How many select?
   **A:** One per group. **Tip:** Single-choice = radio rule.

2. **Q:** Check selected?
   **A:** `.checked`. **Tip:** Tick mark.

3. **Q:** Validate group?
   **A:** Loop through `name`. **Tip:** Group = family check.

4. **Q:** JS shortcut?
   **A:** `Array.from(radios).some(r => r.checked)`.

5. **Q:** Skip validation?
   **A:** Only optional.

6. **Q:** Get selected value?
   **A:** `find(r => r.checked).value`. **Tip:** Treasure hunt.

7. **Q:** Grouping?
   **A:** Same `name`. **Tip:** Name = family ID.

8. **Q:** Event?
   **A:** `change` or `click`. **Tip:** Click triggers decision.

9. **Q:** Dynamic radios?
   **A:** `Array.from()`.

10. **Q:** Default selected?
    **A:** Optional. **Tip:** Decide later.

11. **Q:** Multiple groups?
    **A:** Yes, unique `name`.

12. **Q:** Inline error?
    **A:** `<span>`. **Tip:** Visible hint.

13. **Q:** Essential for?
    **A:** Single-choice fields.

14. **Q:** Highlight selected?
    **A:** `:checked` CSS.

15. **Q:** Validate on submit?
    **A:** Yes, prevent wrong submission.

---

## 85️⃣ ZIP Codes Validation (15 Q&A)

1. **Q:** Regex 5-digit?
   **A:** `/^\d{5}$/`

2. **Q:** Regex 5 or 9-digit?
   **A:** `/^\d{5}(-\d{4})?$/`

3. **Q:** Convert to string?
   **A:** Regex needs string, preserves leading zeros.

4. **Q:** Numbers or strings?
   **A:** Strings. **Tip:** Keep zeros.

5. **Q:** Country-specific ZIP?
   **A:** Correct shipping. **Tip:** International guard.

6. **Q:** Access value?
   **A:** `.value`

7. **Q:** Min/max length?
   **A:** Correct digits.

8. **Q:** ^ and $?
   **A:** Start and end.

9. **Q:** Letters allowed?
   **A:** Only in countries like Canada.

10. **Q:** Validation event?
    **A:** `blur` or `input`.

11. **Q:** Optional ZIP?
    **A:** Skip validation.

12. **Q:** Dynamic rules?
    **A:** Regex per country.

13. **Q:** Invalid submission?
    **A:** Block and alert.

14. **Q:** Real-world example?
    **A:** Checkout forms.

15. **Q:** Pro tip?
    **A:** Trim + string conversion.

---

## 86️⃣ Email Validation (15 Q&A)

1. **Q:** Regex?
   **A:** `/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i`

2. **Q:** Must contain?
   **A:** `@`

3. **Q:** Spaces allowed?
   **A:** No. **Tip:** Space = invalid

4. **Q:** Case-sensitive?
   **A:** No, `i` flag.

5. **Q:** Store best practice?
   **A:** Lowercase.

6. **Q:** Client + server?
   **A:** UX + integrity.

7. **Q:** + tag valid?
   **A:** Yes.

8. **Q:** HTML input type?
   **A:** `email`

9. **Q:** Event?
   **A:** `blur` or `input`

10. **Q:** Real-time help?
    **A:** Reduce mistakes.

11. **Q:** Invalid submission?
    **A:** Block.

12. **Q:** Test regex?
    **A:** `.test()`

13. **Q:** Client-only ensures?
    **A:** UX, not uniqueness.

14. **Q:** Format?
    **A:** `local-part@domain`.

15. **Q:** Inline error vs alert?
    **A:** Inline better, visible near field.
