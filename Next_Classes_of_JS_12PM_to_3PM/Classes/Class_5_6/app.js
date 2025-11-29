
// var arr = ["Bilal", "Maaz", "Arshad", "Mujeeb", "Hadi", "Suleman"]; // arr initialization
// index starts from 0, total index ==> 3
// length starts from 1, total length ==> 4

// arr.push("Atta ur Rehman")
// arr.push("Shahzaib")

// document.write("Array starting: ",arr)

// arr.pop()
// arr.pop()

// document.write('</br>After using pop method: ' + arr)

// arr.unshift(123, 345, 5678)

// document.write("</br>After using unshift method: " + arr)

// arr.shift()

// document.write("</br>After using shift method: " + arr)

// arr.splice(2, 1, "Hunain", "Saim")

// document.write("</br>After using splice method: " + arr)

// var arr2 = arr.slice(3, 6);
// if the value is not provided to the slice method, it considers it as 0 (starting index): arr.slice()

// if we provide only one value to slice method, it copies the element from that index, to the last element: arr.slice(3)

// if we provide the ending index, it will consider it as n - 1: arr.slice(3, 6) ==> 3, 4, 5

// after using slice the orignal array remains the same

// document.write("</br>Arr2: " + arr2);
// document.write("</br>Arr(Orignal Array): " + arr)

// document.write("Hello World!")

// 3 basic loops are in JS
// for loop
// while loop
// do while loop

// for loop
// variable initialization
// condition checking
// increment/decrement

// if () {

// }

// var a; // variable declaration

// var a = 1; // variable initialization

// initialization
// condition checking
// block scope
// increment

// condition checking
// block scope
// increment

// condition checking
// block scope
// increment

// codition checking (false)

// for (a; a < 5; a++) {
//   document.write("</br>" + a + "Hello World!") // 0Hello World
//   // 1Hello World
//   // 2Hello World
//   // 3Hello World
//   // 4Hello World
// }

// var a = 5

// for (a; a >= 1; a--) {
//   document.write("</br>" + a + ") Hello world!")
// }

var table = 2;
// 2 x 1 = 2
// document.write(table + " x " + multiple + " = " + result)

for (var multiple = 1; multiple <= 10; multiple++) {

  var result = table * multiple;

  document.write("</br>" + table + " x " + multiple + " = " + result)
}




// var arr = [1, 3, 5, 6, 7]

// indexes ==> 4
// length ==> 5
//  i < length  ==> 4 < 5

// document.write(arr)
// document.write(arr[0] + " " + arr[1])

// for(var i = 0; i < arr.length ; i++) {
//   document.write(arr[i] + " ") // 1 3 5 6 7 undefined
// }

// var arr = ["karachi", "lahore", "islamabad", "peshawar", "quetta"]
// var userInp = prompt("Enter city name: ")
// var isMatch = false
// var isFound = "no"

// for (var i = 0; i < arr.length; i++) { // i = 0, 1
  // if (userInp.toUpperCase() == arr[i].toUpperCase()) { // quetta == "karachi", quetta == "lahore"
    // isMatch = true
    // isFound = "yes"
    // alert("city found")
    // break
    // document.write(arr[i] + " ")
//   }
// } 

// if (isMatch == false) {
//   alert("city not found")
// }

// if (isFound == "no") {
//   alert("city not found")
// }

// if (!isMatch) {
//   alert("city not found")
// }

// else {
//  alert("city not found")
// }



// if (userInp == arr) { // karachi == ""karachi", "lahore", "islamabad", "peshawar", "quetta"]"
//   document.write("City found")
// } else {
//   document.write("city not found")
// }



// var arr = ["Salman", "Sohail", "Arbaaz"]
// var arr2 = ["Saleem Khan", "Sami Bhai", "Hadi", "Rehman"]

// for (var i = 0; i < arr.length; i++) {

//   for (var j = 0; j < arr2.length; j++) {
//     document.write(arr[i] + " " + arr2[j] + "</br>")
//   }


//   // document.write(arr[i] + " " + arr2[0] + "</br>")
//   // document.write(arr[i] + " " + arr2[1] + "</br>")
// }