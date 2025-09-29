// Math expressions:
//  Familiar operators

// declare a variable with assigning value
var a = 3;
var b = 4;

// performa operations
console.log(" Addition :" , a + b  );
console.log(" Subtraction :" , a - b  );
console.log(" Division :" , a / b  );
console.log(" Multiplication : " , a * b  );
console.log(" Modules : " , a % b  );


var c = 10

c += 5
console.log("first add then assign (+=): " ,c);


// same for minus 
var d = 5
d -= 10;
console.log("first subtract then assign (-=): " ,d);

var e = 10
e *= 5;
console.log("first multiply then assign (*=): " ,e);


var f = 10
f %= 5;
console.log("first modules then assign (%=): " ,f);


var g = 10
g /= 5;
console.log("first divide then assign (/=): " ,g);


console.log("**********************************************************");

// Math expressions:
//  Unfamiliar operators

var increament = 10;
var x = increament + 10
console.log(x);

console.log(increament++); // remain 10 first show then assign
console.log(increament);  // here 11 because again i console...
console.log(++increament); // here be 12 because first increase then show, (11 is laready be then add 1 +)




var decreament  = 5;
console.log(decreament--); // remain 5 same because first show then  decrease
console.log(decreament); // become 4 because again console it..
console.log(--decreament); // become 3 because first decrease then show





// var a = 5; // 6 // 7 / 6 / 5 / 6
//         //  5  +  7  -  6 + 6 + 6 = 18
// var b = a++ + ++a - --a + a-- + ++a;

// console.log(b);


// var x =  3;// / 4 / 5 / 4 / 3 /4 
// 	//4 + 4 +4 + 4 + 4 + 4 = 24
// var y = ++x     +     x++    +     --x    +    x--    +    ++x    +   x;

// console.log(y)

// var m = 10;// / 11 / 12 / 11 / 10 / 11
// 	//10 + 11 + 12 - 10 + 11 = 34 
// let result = m++     +     m++   +    m--    -    --m    +    ++m
 
// console.log(result)

// var z = 2; // / 3 / 4 / 4 / 3/2 / 1 / 2 / 2 /3 /3
// //	      3 	+     3 	+  4       +      3      +     3      -     1      -   2           + 2       + 3   +  3 = 21
// let output = ++z    +    z++     +     z     +     --z    +    z--     -     --z    -     ++z    +    z    +    ++z     +     z++

// console.log(output)



console.log("********************************************");

// Math expressions:
//  Eliminating ambiguity

// var operations = 10 + 2 * 2;
var operations = 10 + 2 * 2 ** 2;
console.log(operations); // it works same ways as in math

// var result = (4 + 2) * (6 - 3) + 5 ** 2 ; // but i want to own custom operations like

// 1 . 4 + 2 = 6 
// 2 . 6 - 3 = 3
// 3 . 6 * 3 = 18
// 4 . 5 ** 2 = 25
// 5 . 18 + 25 = 43


// var result = ((2 + 3) * 2 ) ** 2;
// 1 . 2 + 3 = 5
// 2 . 5 * 2 = 10;
// 3 . 10 ** 2 = 100;



console.log("*******************************************************");
// Concatenating text strings

var message = "Hello world!";
console.log(message + " Welcome to Pakistan");  // concatenate by then +


var fName = "Waqar";
var lName = "Ali";
//use " " for sapce between them
var fullName = fName + " " + lName; // concatenation
console.log(fullName);


var name = "Asad Ali";
var age = 17;
var standard = "11th class"
var concate = name + " is a good student, his age is " + age + " years old and he is studying in " + standard;
console.log(concate);
 


var message1 = "Welcome"
message1 += " to "
message1 += "Pakistan."
console.log(message1);


// by default like here in prompt "Guest!"
// here in JS prompt used for getting input from user..
// var userInput = prompt("Enter your name: ", "Guset!")
// console.log(userInput);


// var firstName = prompt("Enter your first name: ")
// var lastName = prompt("Enter your last name: ")
// var result = firstName + " " + lastName;
// console.log("Full name: " + result);


// for breaking like use \n or <br /> tag
console.log("Hello\nI want to meet you\nwhen we meet together?");

