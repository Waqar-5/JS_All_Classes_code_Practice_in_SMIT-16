
// 10. if Statements

// 1️⃣ Basic if statement

// let age = 20;
// if (age >= 18){
//     console.log("You are an adult!");
// }



// // 2️⃣ Check a number
// let num = 10;
// if(num > 0){
//     console.log("Positive number");
// }

// // 3️⃣ Check string equality
// let color = "red";
// if(color === "red"){
//     console.log("Stop!");
// }

// // 4️⃣ Nested if
// let age1 = 25;
// if(age1 > 18){
//     if(age1 < 30){
//         console.log("Young adult!");
        
//     }
// }

// // 5️⃣ Single-line if
// let score = 90;
// if(score > 80) console.log("Excellent!");


// // 6️⃣ Check boolean value
// let isStudent = true;
// if(isStudent){
//   console.log("You get a student discount");
// }


// // 7️⃣ Using expression
// let a = 10;
// let b = 5;
// if(a + b > 12){
//   console.log("Sum is greater than 12");
// }


// // 8️⃣ If with negative number
// let temp = -5;
// if(temp < 0){
//   console.log("Freezing temperature!");
// }



// // 9️⃣ If with prompt input
// let age2 = Number(prompt("Enter your age:"));
// if(age2 >= 18){
//   alert("You can vote!");
// }


// // 🔟 If checking multiple conditions separately
// // let num1 = 7;
// let num1 = 8;
// if(num1 % 2 === 0){
//     console.log("Even number");
// }
// if(num1 % 2 !== 0){
//     console.log("Odd number");
    
// }





// console.log("******************************************************");

// // 11. Comparison Operators

// // 1️⃣ Equal to (==)
// let a = 5;
// let b = "5";
// console.log(a == b); // true (only value is compared)


// // 2️⃣ Strict equal (===)
// let a1 = 5;
// let b1 = "5";
// console.log(a1 === b1); // false (value + type)


// // 3️⃣ Not equal (!=)
// let a2 = 10;
// let b2 = 20;
// console.log(a2 != b2); // true


// // 4️⃣ Strict not equal (!==)
// let a3 = 10;
// let b3 = "10";
// console.log(a3 !== b3); // true (type differs)


// // 5️⃣ Greater than (>)
// let age = 25;
// console.log(age > 18); // true


// // 6️⃣ Less than (<)
// let temp = 30;
// console.log(temp < 40); // true


// // 7️⃣ Greater than or equal (>=)
// let score = 90;
// console.log(score >= 90); // true


// // 8️⃣ Less than or equal (<=)
// let price = 50;
// console.log(price <= 60); // true

// // 9️⃣ Comparing expressions
// let a4 = 5, b4 = 10;
// console.log((a4 + 5) === b4); // true




// // 🔟 Using comparison in if
// let num = 15;
// if(num % 3 === 0){
//   console.log("Divisible by 3");
// }





// console.log("**************************************************");
// // 12. if...else and else if Statements

// // 1️⃣ Basic if...else
// let age = 20;
// if(age >= 18){
//     console.log("You are an adult");
// } else{
//     console.log("You are a minor");
// }


// // 2️⃣ if...else with numbers
// let num3 = 10;
// if(num3 % 2 === 0){
//     console.log("Even number");
// } else{
//     console.log("Odd number");    
// }



// // 3️⃣ else if for multiple conditions
// let score = 85;
// if(score >= 90){
//   console.log("Grade A");
// } else if(score >= 75){
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }



// // 4️⃣ Checking age groups
// let checkAge = 25;
// if(checkAge < 13){
//   console.log("Child");
// } else if(checkAge < 20){
//   console.log("Teenager");
// } else {
//   console.log("Adult");
// }


// // 5️⃣ Using else if for days
// let day = 3;
// if(day === 1){
//   console.log("Monday");
// } else if(day === 2){
//   console.log("Tuesday");
// } else {
//   console.log("Other day");
// }



// // 6️⃣ Using string comparison
// let color = "red";
// if(color === "blue"){
//   console.log("Color is blue");
// } else {
//   console.log("Color is not blue");
// }



// // 7️⃣ Nested if with else
//     let temp = 25;
// if(temp > 30){
//   console.log("Hot");
// } else {
//   if(temp < 15){
//     console.log("Cold");
//   } else {
//     console.log("Nice weather");
//   }
// }


// // 8️⃣ Using prompt with if...else
// let userAge = Number(prompt("Enter your age:"));
// if(userAge >= 18){
//   alert("You can vote");
// } else {
//   alert("You are too young to vote");
// }


// // 9️⃣ Multiple ranges
// let marks = 65;
// if(marks >= 80){
//   console.log("A grade");
// } else if(marks >= 60){
//   console.log("B grade");
// } else if(marks >= 40){
//   console.log("C grade");
// } else {
//   console.log("Fail");
// }



// // 🔟 Simple login check
// let username = prompt("Enter username:");
// if(username === "admin"){
//   console.log("Welcome Admin");
// } else {
//   console.log("Access Denied");
// }




// console.log("************************************************");
// // 13. Testing Sets of Conditions

// // 1️⃣ Using AND (&&)

// let age = 20;
// let hasID = true;
// if(age >= 18 && hasID){
//   console.log("You can enter the club");
// }


// // 2️⃣ Using OR (||)

// let isStudent = false;
// let isTeacher = true;
// if(isStudent || isTeacher){
//   console.log("Access granted");
// }


// // 3️⃣ Combining multiple conditions
// let temp = 25;
// let sunny = true;
// if(temp > 20 && sunny){
//   console.log("Great weather for picnic");
// }


// // 4️⃣ Using NOT (!)
// let isRaining = false;
// if(!isRaining){
//   console.log("You can go outside");
// }



// // 5️⃣ Mixing AND & OR
// let mixedAge = 16;
// let hasPermission = true;
// if(mixedAge >= 18 || hasPermission){
//   console.log("Allowed");
// }

// // 6️⃣ Checking multiple numbers
// let num = 15;
// if(num > 10 && num < 20){
//   console.log("Number is between 10 and 20");
// }


// // 7️⃣ Using OR with strings
// let color = "red";
// if(color === "red" || color === "blue"){
//   console.log("Color is red or blue");
// }


// // 8️⃣ Combining NOT with OR
// let isAdmin = false;
// let isModerator = false;
// if(!(isAdmin || isModerator)){
//   console.log("You have no special privileges");
// }



// // 9️⃣ Using prompt with logical operators
// let promptAge = Number(prompt("Enter age:"));
// let hasParentalConsent = true;
// if(promptAge >= 18 || hasParentalConsent){
//   alert("You can join the event");
// }


// // 🔟 Complex condition
// let score = 85;
// let attendance = 90;
// if(score >= 50 && attendance >= 75){
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }




// console.log("*********************************************");
// // 14. if Statements Nested

// // 1️⃣ Basic nested if

// let age = 20;
// if(age >= 18){
//   if(age < 30){
//     console.log("Young adult");
//   }
// }


// // 2️⃣ Nested if with else
// let score = 85;
// if(score >= 50){
//   if(score >= 80){
//     console.log("Excellent");
//   } else {
//     console.log("Good");
//   }
// } else {
//   console.log("Fail");
// }


// // 3️⃣ Check multiple conditions
// let temp = 25;
// let sunny = true ;
// // let sunny = false ;
// if(temp > 20){
//   if(sunny){
//     console.log("Perfect day for picnic");
//   } else {
//     console.log("Warm but cloudy");
//   }
// }


// // 4️⃣ Nested if for numbers
// let num = 15;
// if(num > 0){
//   if(num % 2 === 0){
//     console.log("Positive even number");
//   } else {
//     console.log("Positive odd number");
//   }
// }


// // 5️⃣ Nested string check
// let user = "admin";
// let password = "1234";
// if(user === "admin"){
//   if(password === "1234"){
//     console.log("Access granted");
//   } else {
//     console.log("Wrong password");
//   }
// } else {
//   console.log("Unknown user");
// }


// // 6️⃣ Using prompt in nested if
// let myAge = Number(prompt("Enter age: "))
// if(myAge >= 18){
//     let hasID = prompt("Do you have ID? (yes/no)");
//     if(hasID === "yes"){
//         alert("You can enter")
//     } else {
//         alert("Entry denied");
//     }
// } else {
//     alert("Too young")
// }


// // 7️⃣ Nested if for grades

// let marks = 75;
// if(marks >= 50){
//   if(marks >= 80){
//     console.log("Grade A");
//   } else {
//     console.log("Grade B");
//   }
// } else {
//   console.log("Grade C");
// }


// // 8️⃣ Nested if for login

// let username = "user";
// let passwords = "pass";
// if(username === "user"){
//   if(passwords === "pass"){
//     console.log("Login successful");
//   } else {
//     console.log("Incorrect password");
//   }
// } else {
//   console.log("User not found");
// }


// // 9️⃣ Nested if with logical conditions
// let definedAge = 22;
// let isStudent = true;
// if(definedAge >= 18){
//   if(isStudent){
//     console.log("Eligible for student discount");
//   }
// }


// // 🔟 Nested if for ranges
// let temps = 35;
// if(temps >= 0){
//   if(temps <= 20){
//     console.log("Cold");
//   } else if(temps <= 30){
//     console.log("Warm");
//   } else {
//     console.log("Hot");
//   }
// } else {
//   console.log("Freezing");
// }



