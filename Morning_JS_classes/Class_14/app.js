// Practice 
// Q#1
// alert("Welcome.")


// // Q#2
// alert("Error, please enter a valid password.")


// // Q#3 
// alert("Welcome to JS Land...\n Happy coding")


// Q#4 
// var userName;


// Q#5 
// var myName = "Waqar Ali"
// or 
// myName = "Waqar Ali"


// Q#6 
// var message = "Hello World!"
// alert(message)


// Q#7
// var studentName = "Waqar Ali";
// var age = 19;
// var studentRollNo = 12345;
// var course = "Modern Web Application Development"

// alert("Name: " + studentName)
// alert("Age: " + age)
// alert("Roll Number: " + studentRollNo)
// alert("Course Name: " + course)


// Q#8
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")


// Q#9
// document.write("I can write HTML content through JavaScript!<br>")



// Q#10
// var birthYear = 2006;
// document.write("My birth year is "+ birthYear +
//  ".")


// Q#11 
// var visitorName = "Asad Ali"
// var ProductTitle = "T-Shirts"
// var Quantity = 12

// // document.write("Visitor Name is " + visitorName + ", Quantity is " + Quantity + " and productitle is " + ProductTitle + "on Daraz.") 
// document.write(visitorName + " Ordered " + Quantity  + " " +  ProductTitle + " on Daraz.") 



// // Q#12
// var num1 = 12
// var num2 = 15
// // // var result = num1 + num2
// // // document.write(result)
// document.write("The sum of ", num1 + " and ", num2, " is ", num1 + num2 ,"<br>")
// document.write("The division of ", num1 + " and ", num2, " is ", num1 / num2 ,"<br>")
// document.write("The multiplication of ", num1 + " and ", num2, " is ", num1 * num2 ,"<br>")
// document.write("The remindar of ", num1 + " and ", num2, " is ", num1 % num2 ,"<br>")
// document.write("The  power of ", num1 + " over ", num2, " is ", num1 ** num2 ,"<br>")
// // document.write(num1 - num2 ,"<br>")
// document.write(num1 / num2 ,"<br>")
// document.write(num1 * num2 ,"<br>")
// document.write(num1 % num2 ,"<br>")
// document.write(num1 ** num2 ,"<br>")



// Q#13
// var value;
// document.write("Value after variable declaration is: " + value + "<br>")

// value = 10;
// document.write("Initial value is: "+ value + "<br>")

// ++value
// document.write("Value after increment is: "+ value +   "<br>")
// value = value + 7

// document.write("Value after addition is: " + value + "<br>")

// --value
// document.write("Value after decrement is: " + value + "<br>")

// var remindar = 3;
// var result = value % remindar
// document.write("The reminder is: " + result)




// Q#14
// var ticketPrice = 600;
// var currency = "PKR";
// var calculate = ticketPrice * 5
// document.write("Total cost to buy 5 tickets to a movie is " + calculate + currency + ".")

// Q#15

// var tableNum = 4;
// document.write("The table of" + tableNum + "<br>")
// document.write(tableNum + " x " + 1 + " = " + tableNum * 1 + "<br>")
// document.write(tableNum + " x " + 2 + " = " + tableNum * 2 +  "<br>")
// document.write(tableNum + " x " + 3 + " = " + tableNum * 3 + "<br>")
// document.write(tableNum + " x " + 4 + " = " + tableNum * 4 + "<br>")
// document.write(tableNum + " x " + 5+ " = " + tableNum  * 5 + "<br>")
// document.write(tableNum + " x " + 6 + " = " + tableNum * 6 + "<br>")
// document.write(tableNum + " x " + 7 + " = " + tableNum * 7 + "<br>")
// document.write(tableNum + " x " + 8 + " = " + tableNum * 8 + "<br>")
// document.write(tableNum + " x " + 9 + " = " + tableNum * 9 + "<br>")
// document.write(tableNum + " x " + 10 + " = " + tableNum * 10 + "<br>")


// Q#16
// var userName = prompt("Enter your name: ")
// alert("Welcome, " + userName)


// var tableNum = prompt("Enter table name: ", 5);
// document.write("The table of " + tableNum + "<br>")
// document.write(tableNum + " x " + 1 + " = " + tableNum * 1 + "<br>")
// document.write(tableNum + " x " + 2 + " = " + tableNum * 2 +  "<br>")
// document.write(tableNum + " x " + 3 + " = " + tableNum * 3 + "<br>")
// document.write(tableNum + " x " + 4 + " = " + tableNum * 4 + "<br>")
// document.write(tableNum + " x " + 5+ " = " + tableNum  * 5 + "<br>")
// document.write(tableNum + " x " + 6 + " = " + tableNum * 6 + "<br>")
// document.write(tableNum + " x " + 7 + " = " + tableNum * 7 + "<br>")
// document.write(tableNum + " x " + 8 + " = " + tableNum * 8 + "<br>")
// document.write(tableNum + " x " + 9 + " = " + tableNum * 9 + "<br>")
// document.write(tableNum + " x " + 10 + " = " + tableNum * 10 + "<br>")





// Q#17
// var city = prompt("Enter your city name: ").toLowerCase()

// if(city === "karachi"){
//     alert("Welcome to city of lights.")
// } else{
//     alert("Welcome to the " + city);
// }



// var tableNum = 5
// for(var i =1; i <= 10; i++){
//     document.write(tableNum + " X " + i + "  = " + tableNum * i + "<br>" )
// }





// Q#18
// var gender = prompt("Enter your gender: ").toLowerCase()
// if(gender === "male"){
//     alert("Good Morning Sir.")
// } else if (gender === "female"){
//     alert("Good Morning Ma’am.")
// } else{
//     alert("Enter only the valid gender.")
// }



// Q#19
var trafficRules = prompt("Enter the signal color: ").toLowerCase()
if(trafficRules === "red"){
    alert("Must Stop")
} else if(trafficRules === "yellow"){
    alert("Ready to move")
} else if(trafficRules === "green"){
    alert("Move now")
} else{
    alert("Enter valid signal color.")
}



// Q#20 
var remainingFuel = prompt("Enter the fuel: ")
if(remainingFuel < 0.25 + "lites"){
    alert("Please refill the fuel in your car")
}













console.log("JavaScript Connected!");

// for(var i = 1; i <= 100;i++){
//   console.log(i);
// }



// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// var fruits = ["apple", "Mango" , "Banana" , "Orange"];

// for(var i = 0;i < fruits.length;i++){
//       console.log(fruits[i]);
// }


// var arr = [3 , 7 , 12 , 5];
// var found = false;

// for(var i = 0; i < arr.length; i++){

//   if(arr[i] === 12){
//     found = true;
//     break;
//   }
// }
// if(found){
//   console.log("Found it!");
// }else{
//   console.log("Not Found!");
// }


// var arr = [2,4,6,9];
// var allEven = true;

// for(var i =0; i < arr.length;i++){

//   if(arr[i] % 2 !== 0){
//     allEven = false;
//     break;
//   }
// }
// if(allEven){
//   console.log("Sab Even hai");
// }else{
//   console.log("Kuch odd bhi hai.");
// }

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo "];

var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

var fullNames = [];


// for(var i = 0; i < firstNames.length; i++){

//   for(var j = 0; j < lastNames.length; j++){

//    if(i === j){
//     fullNames.push(firstNames[i] + " " + lastNames[j])
//    }
//   }
  
// }

// console.log(fullNames)


for(var i = 0; i < firstNames.length && i < lastNames.length; i++){
    fullNames.push(firstNames[i] + " " + lastNames[i])
}

console.log(fullNames);