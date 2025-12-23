# JavaScript Array `filter()` – Key Points & Summary

This document contains **all the essential points about `Array.prototype.filter()`** in a **concise, professional, and easy-to-remember format**.

---

## 🔹 What is `filter()`?

- Creates a **new array** with elements that **pass a test** defined in a callback.  
- **Does not mutate** the original array.  
- Follows **functional programming principles**: declarative, pure, and immutable.

---

## 🔹 Callback Function

- Receives **three arguments**:
  1. `element` → current array element  
  2. `index` → index of current element  
  3. `array` → original array  
- Must return **boolean or truthy/falsy**:
  - `true` → include element  
  - `false` → exclude element

---

## 🔹 Behavior & Rules

- Returns a **new array**, even if empty.  
- **Order is preserved** in the new array.  
- Always iterates **all elements**, cannot stop early.  
- Skips **empty array slots** (`[1,,3]`).  

---

## 🔹 Common Use Cases

- Filtering **numbers**, **strings**, **objects**, or **nested arrays**.  
- Removing **falsy values** (`false`, `0`, `null`, `undefined`).  
- Filtering **unique values**.  
- Filtering based on **multiple conditions** with `&&` or `||`.  
- Searching/filtering in **React state arrays**.  
- Filtering **sets, maps**, or converted objects.

---

## 🔹 Advanced & Chaining

- Can **chain with other methods**:
  - `filter().map()` → transform filtered results  
  - `filter().reduce()` → aggregate filtered results  
  - `filter().sort()` → sort filtered results
- Works well in **data pipelines** for functional programming.

---

## 🔹 Filtering Objects

- Use property checks:  
```javascript
users.filter(user => user.active);
Combine multiple properties:

javascript
Copy code
users.filter(user => user.active && user.age >= 18);
🔹 Removing Duplicates
Using indexOf for uniqueness:

javascript
Copy code
arr.filter((value, index, self) => self.indexOf(value) === index);
🔹 Practical Examples
Search functionality: products.filter(p => p.name.includes(searchTerm))

Clean arrays: arr.filter(x => x != null)

Nested arrays: nested.flat().filter(x => x > 5)

🔹 Performance Tips
Keep callback simple and concise.

Avoid side effects inside callback.

Combine with map/reduce for efficient pipelines.

Use immutably for functional programming or React projects.

🔹 Remember
filter() = selection of elements

map() = transformation

reduce() = aggregation

Always return boolean or truthy/falsy in callback

Works with arrays, objects (converted), nested arrays, sets, and maps
