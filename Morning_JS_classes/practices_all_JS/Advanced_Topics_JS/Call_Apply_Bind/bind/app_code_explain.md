# JavaScript `bind()` – Full Examples and Explanations

## Key Idea

`bind()` creates a **new function** with `this` permanently set to the object you provide. Unlike `call()` or `apply()`, it does **not call the function immediately**. It can also pre-set arguments for **partial application**.

**Memory Trick:**
`bind()` = Lock the chef in a kitchen 🔒 + optionally give some ingredients now, other ingredients later.

---

## Example 1: Basic Usage of `bind()`

```javascript
const person = { name: "Waqar" };
function greet(greeting, punctuation){
    console.log(greeting + ", " + this.name + punctuation);
}

const greetPerson = greet.bind(person); // 'this' is permanently set to 'person'
greetPerson("Hello", "!"); // Output: Hello, Waqar!
```

**Explanation line by line:**

* `const person = {...}` → Create an object with a name property.
* `function greet(...)` → Function that uses `this.name`.
* `greet.bind(person)` → Creates a **new function** with `this` fixed to `person`.
* `greetPerson(...)` → Calls the new function; original function not affected.

Without `bind()`:

```javascript
greet("Hello", "!"); // 'this' defaults to window or undefined in strict mode
```

Output: `Hello, undefined!`

---

## Example 2: Partial Application

```javascript
const person2 = { name: "Ali" };
const sayHi = greet.bind(person2, "Hi"); // 'this' = person2, greeting = 'Hi'
sayHi("!!!"); // Output: Hi, Ali!!!
```

**Explanation:**

* `bind(person2, "Hi")` → locks `this` and sets first argument.
* Remaining arguments are passed later (`"!!!"`).

Without `bind()`, you would need to pass both arguments every time.

---

## Example 3: Using bind() in Objects

```javascript
const calculator = {
    factor: 3,
    multiply: function(a, b) {
        return (a * b) * this.factor;
    }
};

const multiplyBy3 = calculator.multiply.bind(calculator);
console.log(multiplyBy3(4, 5)); // Output: 60
```

**Explanation:**

* `bind(calculator)` → ensures `this.factor` always comes from calculator.
* Original function works on any object if bound.

Without `bind()`:

```javascript
const multiplyWrong = calculator.multiply;
multiplyWrong(4,5); // Output: NaN (this = undefined)
```

---

## Example 4: Borrowing Methods

```javascript
const arrayLike = { 0: "x", 1: "y", 2: "z", length: 3 };
const joinArrayLike = Array.prototype.join.bind(arrayLike, "-");
console.log(joinArrayLike()); // Output: x-y-z
```

**Explanation:**

* `bind(arrayLike, "-")` → sets `this` to arrayLike and argument separator.
* Can now call the function without passing arguments.

Without `bind()`:

```javascript
Array.prototype.join.call(arrayLike, "-"); // Works, but must call immediately
```

`bind()` gives a reusable function.

---

## Example 5: Event Handlers

```javascript
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

const user = {
    name: "Waqar",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

button.addEventListener("click", user.greet.bind(user));
// Output when clicked: Hello, Waqar
```

**Explanation:**

* `bind(user)` → locks `this` to user.
* Prevents event from setting `this` to button.

Without `bind()`:

```javascript
button.addEventListener("click", user.greet);
// Output: Hello, undefined (this = button)
```

---

## Example 6: Multiple Objects & Partial Arguments

```javascript
function introduce(age, city) {
    console.log("My name is " + this.name + ", I am " + age + " years old, from " + city);
}

const person1 = { name: "Waqar" };
const person2 = { name: "Ali" };

const introWaqar = introduce.bind(person1, 25);
const introAli = introduce.bind(person2, 30);

introWaqar("Karachi"); // Output: My name is Waqar, I am 25 years old, from Karachi
introAli("Lahore");   // Output: My name is Ali, I am 30 years old, from Lahore
```

**Explanation:**

* Pre-set `age` using `bind`.
* Remaining arguments can be passed later.
* Reusable function for each object.

---

## Example 7: Timers

```javascript
const hero = { name: "Flash", speed: 100, run: function() { console.log(this.name + " runs at " + this.speed + " km/h"); } };

setTimeout(hero.run.bind(hero), 1000); // Output: Flash runs at 100 km/h
```

**Explanation:**

* `bind(hero)` ensures `this` refers to hero.
* Without bind, `this` in setTimeout = global object.

---

## Key Differences: call(), apply(), bind()

| Method  | Executes Immediately?     | Arguments                      | 'this' Binding             |
| ------- | ------------------------- | ------------------------------ | -------------------------- |
| call()  | Yes                       | Comma-separated                | Dynamic (overrides 'this') |
| apply() | Yes                       | Array                          | Dynamic (overrides 'this') |
| bind()  | No (returns new function) | Comma-separated (partial args) | Permanent (fixed 'this')   |

## Memory Trick

`bind()` = Lock the chef in a kitchen 🔒

* Chef = function
* Kitchen = object (`this`)
* Ingredients = arguments

**Locked chef** can cook anytime in that kitchen.

---

## When to Use bind()

* Event handlers
* Partial application of functions
* Reusing functions across objects without calling immediately

---

## Summary

* `bind()` **creates a new function** with permanent `this`.
* Arguments can be pre-set for partial application.
* Without `bind()`, `this` may be lost in callbacks, timers, or event handlers.
* `bind()` is perfect for situations where you want a function **locked to a specific object**, reusable anytime.
* Compare with `call()` / `apply()`:

  * `call()` → executes immediately with comma-separated args
  * `apply()` → executes immediately with array args
  * `bind()` → returns a new function, `this` fixed, optional partial args
