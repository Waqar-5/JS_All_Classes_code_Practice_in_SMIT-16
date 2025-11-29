// var num; // varaibale declaration
// var num = 1 // variable initialization

// document.write("Value after variable declaration is: ??")
// variable declaration me variable ki value undefined rehti hai

// num = 30

// document.write("</br>Initial value: " + num) // 30

// num++ // post increment // 30

                                            // num = num + 1
// document.write("</br>Value after increment is: " + num)

// num = num + 7

// document.write("</br>Value after addition is: " + num)

// num--

// document.write("</br>Value after decrement is: " + num)

// num = num % 3

// document.write("</br>The remainder is : " + num)


// var num = 6
// var num2 = 6

// var res = num % num2
// document.write(res)

// var res = 3 - 2 * 4 * (3 + 7) + 5;
// 3 - 2 * 4 * 10 + 5
// 3 - 80 + 5
// 3 - 75
// -72
// var res = ((2 * 4) * 4) + 2;
        //(8 * 4) + 2
        // 32 + 2 // 34

// var res = (2 * 4) * (4 + 2)
//       //  8 * 6

// document.write(res)

// Conditional Operatiors

// < less than
// > greater than
// >= greater or equal
// <= less or equal

// == left ko right se match karna
// === left aur right ko match karna hai with data type
// && And Operator, left side ke sath sath right side ki condition true hogi tu hi aage jane donga
// || Or operator, koi bhi aik side agar ture hoi, tu aage jane donga



// if (8 === 8) {
//   document.write('Han, sahi hai!')
// } else {
//   document.write('Ghalat kardiya')
// }

// var email = "example@gmail.com"
// var password = "example@gmail.com"

// if (email === password) {
//   document.write("Login Success")
// } else {
//   alert("Invalid email or password")
// }


// var email = prompt("Enter your email:")
// var password = prompt("Enter your password:")

// if (email == "admin" || password == "123456") {
//   alert("Login successful")
// } else {
//   alert("email or password pehle sahi likho")
// }

// var per = prompt("Enter your percenatage: ");

// if (per >= 80 && per <= 100) {
//   document.write("Grade: A+")
// } else if (per >=70 && per < 80) {
//   document.write("Grade: A")
// } else if (per >=60 && per < 70) {
//   document.write("Grade: B")
// } else if (per >=50 && per < 60) {
//   document.write("Grade: C")
// } else if (per >=40 && per < 50) {
//   document.write("Grade: D")
// } else if (per >=30 && per < 40) {
//   document.write("Grade: E")
// } else if (per > 0 && per < 30) {
//   document.write("Fail, mar khane ke liye tayar hojao")
// } else {
//   document.write("Invalid percentage")
// }


// Marksheet
// Roll No.
// Marks of 5 subjects
// total = 500
// obtain = sub1 + sub2 + sub3 + sub4 + sub5
// percentage = obtain / total * 100
// grade
// Marksheet



var flag = false;

// javascript has 6 falsy values
// "" ==> empty string
// 0 ==> zero
// false
// undefined
// NaN ==> Not a Number
// null


// ! changes the boolean sign
// !true == false
// !false == true

// if (flag) {
//   console.log("flag ==>", 15)
// }

// {} ==> scope

// var a = 3
// var b = 4


// comparision operators gives the true/false
// a < b ==> 3 < 4 ==> true

// if (!(a < b)) {
//   console.log("a is smaller than b");
// } else {
//   console.log("else is running");
// }

// var a = 3
// var b = 4

// if (a != b) {
//   console.log("a is not equal to b");
// }

// if (a <= b) {
//   console.log("a is less than or equal to b");
// }


// comparision operators

// <
// >
// <=
// >=
// == 
// ===
// !=

// conditional operators
// && ===> And operator
// || ==> Or operator


// var firstName = "Huzaifa"
// var lastName = "Khan"
// var age = 21

// var arr = ["Huzaifa", "Khan", 21, true]
//            0     ,  1,     2,  3

// in array, index starts from 0

// console.log(arr[0] + " " + arr[1] + " " + arr[3]);

// console.log(arr[2], arr[1]);

// document.write(arr);

var arr = ["Huzaifa", "Khan", 21, true, "Rehman", "Faizan", "Jameel", "Usman"]

// arr.push("Rehman")
// arr.push("sara")
// arr.push("Faizan")

// arr.pop()
// arr.pop()

// arr.unshift("Areeba")
// arr.unshift("Faizan")

// arr.shift()

// arr.push("Sara")
// arr.push("Faizan")

// arr.splice(5, 0, "Amna", "Hasnain")
              // starting index, number of deletion, element to be inserted at the starting index



document.write(arr);

// 6 basic methods of array
// push ==> adds element to the last of array
// pop ==> removes last element from the array
// unshift ==> adds the element at the start of array.
// shift ==> removes the first element from the array
// splice ==> add, remove, at any index of the array
// slice ==> Returns a copy of a section of an array.
