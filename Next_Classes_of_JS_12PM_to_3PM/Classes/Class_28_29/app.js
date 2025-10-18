// ✅ Declare an object named 'student'
var student = {
  name: "Bilal",           // Property 'name' → stores student's name
  class: "2nd year"        // Property 'class' → stores student's class name
}

// ✅ Add a new property 'address' dynamically to the existing object
student.address = "in karachi saddar"   // Adds a new key 'address' with value

//-------------------------------------------------------------

// ✅ Define a Constructor Function (acts like a blueprint for creating students)
function Student(name, className) {
    this.name = name              // 'this.name' → assigns name to the new object
    this.className = className    // 'this.className' → assigns class name
    this.getDetails = function () {    // Method → returns student's details
        return name + ", " + className
    }
}

//-------------------------------------------------------------

// ✅ Create new student objects using the 'new' keyword (constructor call)
console.log("Student1 ==>", new Student("Bilal", "1st year"));   // Creates new object with Bilal’s info
console.log("Student2 ==>", new Student("Sudais", "2nd year"));  // Creates new object with Sudais’s info

//-------------------------------------------------------------

// ✅ Re-declare constructor to show repetition (same logic again)
function Student(name, className){
    this.name = name;            // Assign student name
    this.className = className;  // Assign class name
    this.getDetails = function(){  // Define a method inside constructor
        return name + ", " + className   // Return both values together
    }
}

// ✅ Create two student objects using constructor function
var student1 = new Student("Khan", "6th class")    // Creates 'student1' object
var student2 = new Student("Meer", "10th class")   // Creates 'student2' object

// ✅ Display results using method
console.log("Student1 ==>", student1.getDetails());  // Prints: Khan, 6th class
console.log("Student2 ==>", student2.getDetails());  // Prints: Meer, 10th class

//-------------------------------------------------------------
// Below are commented examples for learning (prototype & method handling)

// function Add(num1Value, num2Value) {
//   this.num1 = num1Value;              // Stores first number
//   this.num2 = num2Value;              // Stores second number
//   this.calculate = function () {      // Method to calculate sum
//     return this.num1 + this.num2
//   }
// }

// var calculation1 = new Add(2, 2);   // Object with num1=2, num2=2
// var calculation2 = new Add(12, 24); // Object with num1=12, num2=24
// console.log("Answer ==>", calculation1.calculate());  // Output: 4
// console.log("Answer ==>", calculation2.calculate());  // Output: 36

//-------------------------------------------------------------

// ✅ Using Prototype (Recommended)
// This saves memory because all objects share one 'calculate' method
function Add(num1Value, num2Value) {
  this.num1 = num1Value;  // Store first number
  this.num2 = num2Value;  // Store second number
}

// ✅ Add method to constructor’s prototype
Add.prototype.calculate = function () {
  return this.num1 + this.num2;   // Add both numbers
}

// ✅ Create multiple Add objects
var calculation1 = new Add(2, 2);    // {num1:2, num2:2}
var calculation2 = new Add(12, 24);  // {num1:12, num2:24}

// ✅ Call the shared prototype method
console.log("calculation1 ==>", calculation1.calculate()); // 4
console.log("Answer ==>", calculation2.calculate());       // 36

// ✅ Check if 'calculate' exists in the object
console.log("isCalculate Method Available ==>", "calculate" in calculation1); // true

// ✅ Test with array
var arr = []         // Create an empty array
console.log("arr ==>", arr); // []





/*
Concept	Meaning
Object Literal	{} syntax for quick objects (e.g., var student = {...})
Constructor Function	Function that creates new objects using new
this	Refers to the current object being created
Prototype	Shared methods (memory efficient)
Dynamic Property	Add new property anytime like student.address = ...
new keyword	Creates a new instance (object) of a constructor
*/