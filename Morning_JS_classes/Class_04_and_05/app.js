// conparison operators
// Loose Equality (==):

// Compares values after converting them to the same type (type coercion).
// Example: 5 == '5' returns true because '5' is converted to a number.
// Strict Equality (===):

// Compares both value and type without type coercion.
// Example: 5 === '5' returns false because the types (number and string) are different.
// Inequality Operators (!= and !==):

// != performs loose comparison, while !== performs strict comparison.


var num1 = 4;
var num2 = "4";
var result1 = num1 == num2 // true because losely checked just see numbers not data type
var result2 = num1 === num2 // false beacsue strict checked, checks both values and data type
console.log(result1, result2);

var result3 = num1 != num2; // fasle because loosely checked
var result4 = num1 !== num2; // true strict checked
console.log(result3, result4);


console.log("*************************************************");
// conditions
// Syntax
/*
if(condition) {
block of code
} esle {
block of code 
}
*/

var age = 18
if (age === 18){
    console.log("You are able to vote!");
} else{
    console.log("You are not able to vote!");
}


/*
if(condition) {
block of code
} esle if {
block of code 
} esle{
block of code 
}
*/

// 
// var grade = "A+"
var grade = "A"
// var grade = "B"
if(grade === "A+"){
    console.log("Your grade is " + grade);
} else if (grade === "A"){
    console.log("Your grade is " + grade);
} else {
    console.log("You meed to update grade!");
}


// marks Comparsion
var marks = 70
if(marks >= 90){
    console.log("Grade A+");
} else if (marks >= 80){
    console.log("Grade A");
} else if (marks >= 70){
    console.log("Grade B");
} else {
    console.log("Failed!");
}


// Time Comparsion
var time = 11;
if(time < 12){
    console.log("Good Morning!");
} else if(time < 18){
    console.log("Good Afternoon");
} else{
    console.log("Good Evening!");
}




var temp = 30;
if(time < 10){
    console.log("It is too cold!");
} else if(time < 20){
    console.log("It is Cold");
} else if(time < 30){
    console.log("It is Normal");
} else {
    console.log("It is too hot!");
}


var role = "admin";
// if conation become true, that will run  (console.log("Welcome Admin!");)
if(role === "admin"){
    console.log("Welcome Admin!");
    // // if conation become false, that will run if that be true      console.log("Welcome user!");;)
} else if(role === "user"){
    console.log("Welcome user!");
    // esle if by default means if none of above runs then that must runs
} else{
    console.log("Welcome guest");    
}





var signal = prompt("Type the shown signal!");

if(signal === "red"){
  console.log("Ruko (STOP)");
}else if(signal === "yellow"){
  console.log("Taiyaar ho jao (get ready)");
}else if(signal === "green"){
  console.log("Chalo (GO)");
}else{
  console.log("invalid signal");
}



var age = 20;
var hasID = true;

if(age >= 18 && hasID){
    console.log("You can vote!");
} else{
    console.log("You can't vote!");
}

var age = 55;

if(age <= 12 || age >= 60){
  console.log("you can get discount");
}else{
  console.log("You can't get discount");
}


var age = 15;
var hasTicket = true;

if(age >= 18){
  if(hasTicket){
    console.log("Enjoy your movie!");
  }else{
    console.log("first get ticket");
  }
}else{
  console.log("Under 18 is not allowed!.");
}




var isStudent = true;
var attendance = 80;
var feePaid = false;

if(isStudent){
  if((attendance >= 75 && feePaid) || attendance === 80){
    console.log("Eligible for class!");
  }else{
    console.log("Not Eligible for class!")
  }
}else{
  console.log("Only students are allowed.");
}