// // Alerts

// // 1️⃣ Basic alert

// alert("Hello, World!")

// // 2️⃣ Alert with a number

// alert(123)

// // 3️⃣ Alert with a calculation
// alert(5 + 7)


// // 4️⃣ Alert with a variable
// let name = "Waqar";
// alert(name);


// // 5️⃣ Alert with concatenation
// let fName = "Waqar";
// let lName = "Ali";
// alert(fName +" " +  lName);


// // 6️⃣ Alert with template literals
// let age = 20;
// alert(`I am ${age} years old!`)

// // 7️⃣ Alert inside a function

// function greet(){
//     alert("Good Morning!")
// }
//  greet();

// // 8️⃣ Alert with boolean value
// let isStudent = true;
// alert(isStudent)


// // 9️⃣ Multiple alerts
// alert("Step 1");
// alert("Step 2");
// alert("Step 3");


// // 🔟 Alert with expression
// let a = 10;
// let b = 5;
// alert("Sum = " + (a + b));




// console.log("**************************************************");
// // 2. Variables for Strings

// // 1️⃣ Basic string variable

// let name1 = "Waqar";
// console.log(name1);


// // 2️⃣ Changing string variable

// let city = "Karachi";
// city = "Larkana";
// console.log(city);


// // 3️⃣ String with single quotes
// let greeting = 'Hello World';
// console.log(greeting);


// // 4️⃣ Combining two string variables
// let firstName = "Waqar";
// let lastName = "Ali";
// let fullName = firstName + " " + lastName;
// console.log(fullName);


// // 5️⃣ String with template literal
// let age1 = 20;
// let message = `I am ${age1} years old`;
// console.log(message);


// // 6️⃣ String with special characters
// let quote = "He said, \"JavaScript is fun!\"";
// console.log(quote);


// // 7️⃣ Empty string variable
// let empty = "";
// console.log(empty);


// // 8️⃣ String from user input (prompt)
// let userName = prompt("Enter your name: ");
// console.log("Hello, " + userName);


// // 9️⃣ Concatenating strings directly

// console.log("Hello " + "World!");

// // 🔟 Updating string variable

// let color = "Red";
// color = color + " and Blue";
// console.log(color);




// console.log("******************************************************");

// // 3. Variables for Numbers

// // 1️⃣ Basic number variable

// let age2 = 20;
// console.log(age2);


// // 2️⃣ Updating number variable

// let score = 50;
// score = score + 10;
// console.log(score);

// // 3️⃣ Decimal numbers
// let price = 99.99;
// console.log(price);


// // 4️⃣ Negative numbers
// let temperature = -5;
// console.log(temperature);

// // 5️⃣ Arithmetic with variables
// let a = 10;
// let b = 5;
// let sum =a + b;
// console.log(sum);


// // 6️⃣ Using multiple operations


// let x = 10;
// let y = 5;
// let z = 2;
// console.log(x + y * z);  // 20

// // 7️⃣ Increment and decrement
// let count = 0;
// count++;
// console.log(count); // 1
// count--;
// console.log(count); // 0


// // 8️⃣ Number from user input
// let num = prompt("Enter a number:");
// num = Number(num);  // convert to number
// console.log(num + 10);


// // 9️⃣ Combining number and string
// let age = 20;
// console.log("I am " + age + " years old");

// // 🔟 Number in a function
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(5, 4));



// console.log("****************************************************");


// 4. Variable Names: Legal and Illegal

// 1️⃣ Legal variable names

// let age = 20;
// let userName = "Waqar";
// let $price = 100;
// let _score = 50;
// console.log(age, userName, $price, _score);


// // 2️⃣ Illegal: starting with a number
// // let 1stName = "Ali"; // ❌ Invalid

// // 3️⃣ Illegal: using space
// // let first name = "Ali"; // ❌ Invalid

// // 4️⃣ Legal: camelCase naming
// let firstName = "Waqar";
// let lastName = "Ali";
// console.log(firstName + " " + lastName);

// // 5️⃣ Illegal: using special symbols
// // let age@ = 25; // ❌ Invalid

// // 6️⃣ Legal: using underscore or dollar sign
// let _temp = 30;
// let $tax = 5;
// console.log(_temp, $tax);


// // 7️⃣ Illegal: reserved keywords
// // let let = 10; // ❌ Invalid (reserved word)


// // 8️⃣ Legal: long descriptive names
// let totalScoreOfPlayer = 100;
// console.log(totalScoreOfPlayer);

// // 9️⃣ Legal: combining letters, numbers, $, _
// let score1 = 50;
// let $bonus2 = 10;
// console.log(score1 + $bonus2);


// // Illegal: starting with a number, with space or hyphen
// // let 2-score = 20; // ❌ Invalid





// console.log("**********************************************************");
// // 5. Math Expressions: Familiar Operators

// // 1️⃣ Addition
// let a = 10;
// let b = 5;
// let sum = a + b;
// console.log(sum); // 15


// // 2️⃣ Subtraction
// let x = 20;
// let y = 8;
// let difference = x - y;
// console.log(difference); // 12

// // 3️⃣ Multiplication
// let price = 50;
// let quantity = 3;
// let total = price * quantity;
// console.log(total); // 150


// // 4️⃣ Division
// let totalMoney = 100;
// let friends = 4;
// let share = totalMoney / friends;
// console.log(share); // 25


// // 5️⃣ Modulus (remainder)
// let remainder = 17 % 3;
// console.log(remainder); // 2


// // 6️⃣ Multiple operations
// let result = 5 + 10 * 2;
// console.log(result); // 25

// // 7️⃣ Using parentheses to control order
// let result1 = (5 + 10) * 2;
// console.log(result1); // 30


// // 8️⃣ Increment operator
// let count = 5;
// count++;
// console.log(count); // 6


// // 9️⃣ Decrement operator
// let lives = 3;
// lives--;
// console.log(lives); // 2


// // 🔟 Combining operators
// let a1 = 10;
// let b2 = 3;
// let result3 = (a1 + b2) * (a1 - b2) / b2;
// console.log(result3); // 30.333333333333332



// console.log("*********************************************************");
// // 6. Math Expressions: Unfamiliar Operators

// // 1️⃣ Exponentiation (**)
// let base = 2;
// let power = 3;
// let result = base ** power;  // 2^3
// console.log(result); // 8


// // 2️⃣ Modulus (%)
// let remainder = 17 % 5;
// console.log(remainder); // 2


// // 3️⃣ Increment after use (x++)
// let x = 5;
// console.log(x++); // 5 (used first, then incremented)
// console.log(x);   // 6


// // 4️⃣ Increment before use (++x)
// let y = 5;
// console.log(++y); // 6 (incremented first, then used)


// // 5️⃣ Decrement after use (x--)
// let a = 10;
// console.log(a--); // 10
// console.log(a);   // 9

// // 6️⃣ Decrement before use (--x)
// let b = 10;
// console.log(--b); // 9


// // 7️⃣ Combined assignment (+=)let score = 50;
// let score = 50;
// score += 10;  // same as score = score + 10
// console.log(score); // 60


// // 8️⃣ Combined assignment (*=)
// let price = 20;
// price *= 3; // same as price = price * 3
// console.log(price); // 60


// // 9️⃣ Combined assignment (%=)
// let total = 17;
// total %= 5; // same as total = total % 5
// console.log(total); // 2


// // 🔟 Negation (-)
// let num = 10;
// let negNum = -num; // change sign
// console.log(negNum); // -10





// console.log("***************************************************");


// // 7. Math Expressions: Eliminating Ambiguity

// // 1️⃣ Basic precedence

// let result = 5 + 3 * 2;
// console.log(result); // 11 (multiplication first)


// // 2️⃣ Using parentheses to change order
// let result1 = (5 + 3) * 2;
// console.log(result1); // 16


// // 3️⃣ Multiple parentheses
// let result2 = (2 + 3) * (4 + 1);
// console.log(result2); // 25


// // 4️⃣ Nested parentheses
// let result3 = ((2 + 3) * 4) + 1;
// console.log(result3); // 21


// // 5️⃣ Division and multiplication precedence
// let result4 = 20 / 5 * 2;
// console.log(result4); // 8


// // 6️⃣ Using parentheses with division
// let result5 = 20 / (5 * 2);
// console.log(result5); // 2


// // 7️⃣ Addition and subtraction
// let result6 = 10 - 3 + 2;
// console.log(result6); // 9 (left to right)


// // 8️⃣ Left-to-right rule
// let result7 = 10 - 3 + 5;
// console.log(result7); // 12


// // Complex expression
// let result8 = 2 + 3 * 4 ** 2 - 5;
// console.log(result8); // 45


// //🔟 Adding parentheses to clarify
// let result9 = 2 + 3 * (4 ** 2 - 5);
// console.log(result9); // 35




// console.log("****************************************");

// // 8. Concatenating Text Strings

// // 1️⃣ Simple concatenation

// let firstName = "Waqar";
// let lastName = "Ali";
// let fullName = firstName + " " + lastName;
// console.log(fullName); // Waqar Ali


// // 2️⃣ Concatenate string with number
// let age = 20;
// console.log("I am " + age + " years old"); // I am 20 years old


// // 3️⃣ Using multiple variables
// let city = "Karachi";
// let country = "Pakistan";
// console.log(city + ", " + country); // Karachi, Pakistan


// // 4️⃣ Using template literals
// let name = "Waqar";
// let age1 = 20;
// console.log(`My name is ${name} and I am ${age1} years old`);


// // 5️⃣ Concatenating in a function

// function greet(first, last) {
//   return "Hello " + first + " " + last + "!";
// }
// console.log(greet("Waqar", "Ali"));



// // 6️⃣ Adding strings to itself

// let message = "Hello";
// message += " World!";
// console.log(message); // Hello World!



// // 7️⃣ Concatenating with symbols
// let a = "Score: ";
// let b = 50;
// console.log(a + b + "/100"); // Score: 50/100


// // 8️⃣ Combining user input
// let firstName1 = prompt("Enter your first name:");
// let lastName1 = prompt("Enter your last name:");
// alert("Hello " + firstName1 + " " + lastName1 + "!");


// // 9️⃣ Concatenating multiple strings
// let str1 = "JavaScript ";
// let str2 = "is ";
// let str3 = "fun!";
// console.log(str1 + str2 + str3); // JavaScript is fun!


// // 🔟 Concatenate inside console.log directly
// let name1 = "Waqar";
// let course = "JavaScript";
// console.log("Hello " + name1 + ", welcome to " + course + " course!");



// console.log("***********************************************");


// // 9. Prompts

// // 1️⃣ Basic prompt

// let name = prompt("Enter your name:");
// console.log("Hello " + name + "!");


// // 2️⃣ Prompt with number input
// let age = prompt("Enter your age:");
// age = Number(age);
// console.log("You are " + age + " years old");



// // 3️⃣ Prompt inside a function
// function greetUser() {
//   let user = prompt("Enter your name:");
//   alert("Welcome, " + user + "!");
// }
// greetUser();


// // 4️⃣ Prompt with default value
// let city = prompt("Enter your city:", "Karachi");
// console.log("City: " + city);



// // 5️⃣ Prompt and calculate
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// alert("Sum = " + (num1 + num2));


// // 6️⃣ Prompt with concatenation
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// console.log("Full Name: " + firstName + " " + lastName);


// // 7️⃣ Prompt with conditional check
// let age1 = Number(prompt("Enter your age:"));
// if(age1 >= 18){
//   console.log("You can vote");
// } else {
//   console.log("You are too young to vote");
// }


// // 8️⃣ Prompt and repeat input
// let favoriteColor = prompt("Enter your favorite color:");
// console.log("Your favorite color is " + favoriteColor + "!");
// console.log("Remember, " + favoriteColor + " looks great on you!");



// // 9️⃣ Prompt with number comparison

// let a = Number(prompt("Enter a number:"));
// let b = Number(prompt("Enter another number:"));
// if(a > b){
//   console.log(a + " is greater than " + b);
// } else {
//   console.log(b + " is greater than " + a);
// }



// // 🔟 Prompt and store multiple values
// let name2 = prompt("Name:");
// let age2 = Number(prompt("Age:"));
// let city1 = prompt("City:");
// console.log(`Name: ${name2}, Age: ${age2}, City: ${city1}`);





console.log("******************************************************");


