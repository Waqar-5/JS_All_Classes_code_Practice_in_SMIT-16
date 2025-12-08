// console.log("JS Connected!");

// ---------------------
// 1. Basic Closure Example
// ---------------------

function outer() {
  var message = "Hello"; // Local variable inside outer()

  function inner() {
    // inner() has access to message even after outer() finishes
    console.log(message); // This is closure
  }

  return inner; // Returning the inner function (closure)
}

var fn = outer(); // outer() runs and returns inner()
fn(); // prints "Hello" because of closure

// ---------------------
// 2. Counter using Closure (Private variable)
// ---------------------

function makeCounter() {
  let count = 0; // Private variable (not accessible outside)

  return function () {
    // This inner function can access and modify count
    count += 1;
    return count;
  };
}

let c1 = makeCounter(); // New counter instance

console.log(c1()); // 1
console.log(c1()); // 2
console.log(c1()); // 3
console.log(c1()); // 4

let c2 = makeCounter(); // New independent counter

console.log(c2()); // 1
console.log(c2()); // 2
console.log(c2()); // 3

// ---------------------
// 3. Private Properties using Closure (Encapsulation)
// ---------------------

function createPerson(name) {
  var _name = name; // Private variable, not directly accessible

  return {
    getName: function () {
      // Getter
      return _name;
    },
    setName: function (newName) {
      // Setter
      _name = newName;
    },
  };
}

var p = createPerson("Sameer");
console.log(p.getName()); // Sameer
p.setName("Ameer");
console.log(p.getName()); // Ameer

// ---------------------
// 4. Module Pattern using IIFE
// ---------------------

var counterModule = (function () {
  var count = 0; // private variable

  function increment() {
    count++; // private function to change count
  }

  function get() {
    return count; // private function to read count
  }

  // Public API (only these are accessible outside)
  return {
    inc: increment,
    getCount: get,
  };
})(); // IIFE → function executes immediately and returns object

counterModule.inc();
counterModule.inc();
counterModule.inc();

console.log(counterModule.getCount()); // 3
console.log(counterModule.getCount()); // 3

// ---------------------
// 5. Closure Problem in Loops using var
// ---------------------

var funcs = [];

for (var i = 0; i < 3; i++) {
  // All functions capture the *same* i (which becomes 3 at end)
  funcs.push(function () {
    console.log(i); // Always prints 3 due to closure + var
  });
}

funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

// ---------------------
// 6. Fixing var Loop Closure using IIFE
// ---------------------

var funcs = [];

for (var i = 0; i < 3; i++) {
  (function (j) {
    // j is a copy of i, captured separately each iteration
    funcs.push(function () {
      console.log(j); // Correctly prints 0, 1, 2
    });
  })(i); // Immediately passing i into IIFE
}

funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2

// ---------------------
// 7. let Automatically Fixes Loop Closure
// ---------------------

var funcs = [];

for (let i = 0; i < 3; i++) {
  // let creates block scope → new i created each iteration
  funcs.push(function () {
    console.log(i); // Correctly prints 0, 1, 2
  });
}

funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2

var person = {
  name: "Asad",
  age: 18,
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

person.greet();

function Car(model, year) {
  this.model = model;
  this.year = year;
  this.info = function () {
    console.log("Model: " + this.model + ", Year: " + this.year);
  };
}

var car1 = new Car("Civic", 2024);
var car2 = new Car("City", 2025);

car1.info();
car2.info();

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

var d = new Dog("Rex");

d.speak();

class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
  show() {
    console.log(this.name + " - " + this.roll);
  }
}

var student1 = new Student("Meer", 123);
student1.show();

class Animals {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Cat extends Animals {
  speak() {
    console.log(this.name + " Meows");
  }
}

var cat = new Cat("Cat");

cat.speak();

//Asynchronous JavaScript

// microtasks , macrotask

// async function loadRandomImage(){
//     const img = document.getElementById("pic");

//     try{
//         const res = await fetch("https://picsum.photos/200/300");


//         img.src= res.url;
//         img.onload = () => console.log("Image Loaded");
//         img.onerror = () =>console.log("image load error");
//     } catch(err){
//         console.log("fetch error", err);
//     }
// }

// loadRandomImage()


const loader = document.getElementById("loader");
const img = document.getElementById("pic");
const btn = document.getElementById("newImageBtn");

async function loadRandomImage() {
    loader.style.display = "block";  // Show loader
    img.style.display = "none";      // Hide image while loading

    try {
        const res = await fetch("https://picsum.photos/200/300");

        img.src = res.url;

        img.onload = () => {
            loader.style.display = "none"; // Hide loader
            img.style.display = "block";   // Show image
            console.log("Image Loaded");
        };

        img.onerror = () => {
            loader.style.display = "none";
            console.log("Image load error");
            alert("Failed to load image.");
        };
    } catch (err) {
        loader.style.display = "none";
        console.log("Fetch error", err);
        alert("Failed to fetch image.");
    }
}

// Initial load
loadRandomImage();

// Load new image on button click
btn.addEventListener("click", loadRandomImage);