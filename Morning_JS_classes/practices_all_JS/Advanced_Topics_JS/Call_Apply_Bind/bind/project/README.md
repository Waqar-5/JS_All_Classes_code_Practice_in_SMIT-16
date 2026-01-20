# 🛒 Shopping Cart Discount Simulator

A simple JavaScript project to simulate shopping cart discounts for different users using the **`bind()`** method.

---

## **Project Overview**

This project demonstrates:

* How to use **`bind()`** to fix `this` in JavaScript functions.
* Applying discounts dynamically for multiple users.
* Event-driven updates for user interaction.
* Clean and reusable code using a single generic function.

---

## **Features**

1. Multiple users with different discount rates:

   * Waqar → 10%
   * Ali → 20%
   * Sara → 15%

2. Input any product price.

3. Click on a user button to calculate the discounted price.

4. Output shows final price dynamically with discount applied.

---

## **HTML Structure**

* `button` → selects the user.
* `input` → enter the product price.
* `p#finalPrice` → displays final discounted price.

```html
<button id="user1">Waqar (10% Discount)</button>
<input type="number" id="productPrice" placeholder="100" />
<p id="finalPrice">Select a user and enter price</p>
```

---

## **CSS Styling**

* Clean, colorful, and responsive design.
* Buttons change color on hover.
* Container with shadows and rounded corners.

---

## **JavaScript Logic**

### **Step 1: Define Users**

```javascript
const user1 = { name: "Waqar", discount: 0.10 };
const user2 = { name: "Ali", discount: 0.20 };
const user3 = { name: "Sara", discount: 0.15 };
```

* Each user has a `name` and a `discount` property.
* Discount is in decimal (0.10 = 10%).

---

### **Step 2: Generic Discount Function**

```javascript
function applyDiscount(price) {
    const final = price - (price * this.discount);
    return `${this.name} pays $${final.toFixed(2)} (Discount: ${this.discount*100}%)`;
}
```

* `this` refers to the user object dynamically.
* Takes `price` as an argument.
* Returns a formatted string showing the final price.

---

### **Step 3: Bind the Function to Each User**

```javascript
const discountWaqar = applyDiscount.bind(user1);
const discountAli = applyDiscount.bind(user2);
const discountSara = applyDiscount.bind(user3);
```

* **`bind()`** locks `this` to a specific user.
* Returns a new function that always uses the correct user object.
* Arguments (price) can be passed later.

**Without `bind()`**:

```javascript
applyDiscount(100);
// 'this.discount' → undefined
// Output: "NaN"
```

* `bind()` fixes this problem by permanently linking the function to a user.

---

### **Step 4: Add Event Listeners**

```javascript
document.getElementById("user1").addEventListener("click", () => {
    const price = Number(document.getElementById("productPrice").value) || 0;
    document.getElementById("finalPrice").textContent = discountWaqar(price);
});
```

* Reads the product price from input.
* Calls the bound discount function for the selected user.
* Updates the output dynamically.

---

### **Step 5: How It Works**

1. User enters a product price.
2. Clicks on their button (Waqar, Ali, Sara).
3. Bound function calculates final price using `this.discount`.
4. Output is displayed in `#finalPrice`.

**Example:**

```
Input: 200, User: Ali (20% discount)
Output: "Ali pays $160.00 (Discount: 20%)"
```

---

## **Why `bind()` is Useful Here**

* Without `bind()`, the function `applyDiscount` cannot know which user's discount to use.
* Avoids rewriting separate functions for each user.
* Makes the code **reusable and clean**.

**Memory Trick:**

```text
bind() = Lock the chef in a kitchen
Chef = function
Kitchen = object (user)
Ingredients = arguments (price)
Locked chef can cook anytime in that kitchen
```

---

## **Key Takeaways**

1. **`this` binding:** `bind()` permanently sets `this` to the specified object.
2. **Reusability:** One function can serve multiple users.
3. **Event-driven updates:** Users can calculate discount anytime by clicking buttons.
4. **Partial application (optional):** You can pre-set some arguments while binding.

---

## **Comparison with call() and apply()**

| Method  | Executes Immediately? | Arguments                              | 'this' binding             |
| ------- | --------------------- | -------------------------------------- | -------------------------- |
| call()  | Yes                   | Comma-separated                        | Dynamic (overrides 'this') |
| apply() | Yes                   | Array                                  | Dynamic (overrides 'this') |
| bind()  | No (returns new fn)   | Comma-separated (partial args allowed) | Permanent (fixed 'this')   |

---

## **Summary**

* This project shows **how to use `bind()`** for real-world scenarios like discounts.
* Helps in **avoiding code repetition**.
* Ensures **correct `this` context** across multiple objects.
* Perfect example for learning `bind()` for beginners and interviews.

---

✅ **Final Note**

You can safely extend this project to:

* Add more users dynamically.
* Add multiple products.
* Combine with `call()` and `apply()` for advanced scenarios.
