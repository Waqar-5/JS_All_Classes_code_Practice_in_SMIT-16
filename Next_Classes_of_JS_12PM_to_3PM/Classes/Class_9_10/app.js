// // // var str = prompt("Enter some text");
// // var str;
// // var numChars = str.length;

// // for(var i = 0; i < numChars; i++){
// //     console.log("str.slice(i, i + 2) ==> ", str.slice(i, i + 2));
// //     console.log("condition ==> ", str.slice(i, i + 2) === "  ");

// //     if(str.slice(i, i + 2) === "  "){
// //         alert("No double spaces!")
// //         break;
// //     }
// // }


// var text = "Pak Karachi Pak"
//  //starting index of Kar // 4
// //               // text.slice(0, index) ==> text.slice(0, 4) (0 ==> 3) "Pak "
// //               // text.slice(0, 4) + "Pak" + text.slice(4 + Pak)

// var firstChar = text.indexOf("Karachi");
// if(firstChar !== -1){
//     text = text.slice(0, firstChar) + "Pakistan" + text.slice(firstChar + 3);
// }

// console.log(text);


// var text = "Pak Karachi Pak Karachi"
// var tochange = "Karachi"
// var withchange = "Pakistan"
//               //starting index of Kar // 4
//               // text.slice(0, index) ==> text.slice(0, 4) (0 ==> 3) "Pak "
//               // text.slice(0, 4) + "Pak" + text.slice(4 + Pak)

// var firstChar = text.indexOf("Karachi");
// if (firstChar !== -1) {
//   text = text.slice(0, firstChar) + withchange + text.slice(firstChar + tochange.length);
// }

// console.log(text);




// // var text = "Pak Karachi Pak Karachi"
// // // var newText = text.replaceAll("Karachi", "Pakistan")
// // var newText = text.replace(/Karachi/g, "Pakistan")

// // console.log(text);
// // console.log(newText);

// // console.log(Math.round(9.76));
// // console.log(Math.ceil(0.09999));

// // console.log(Math.ceil(2.1));
// // console.log(Math.floor(2.9));

// // console.log(Math.round(Math.random() * 8));

// // var age = prompt("Enter your age: ")

// // var result = age - 18

// // console.log(result);


// // var text = "200"
// // console.log(parseInt(text) + 15)

// // var text = "200.01"
// // console.log(parseInt(text) + 15)

// // var text = "200.01"
// // console.log(parseFloat(text) + 15)


// // var num = 123456.456789

// // console.log("My lucky number is " + num.toString());

// // var text = "200.01"
// // typeof((Number(text) + 15).toString())

// // var text = "200.01"
// // typeof((Number(text) + 15))


// // var num = 5698.98794236789816589798687
// // console.log(num.toFixed());


// // var currentDate = new Date()
// // console.log(currentDate.toString());
// // console.log(currentDate.getDate());

// var days = ["Sun", "Mon", "Tue", "Wed","Thur", "Fri", "Sat"]
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "August", "Sept"]

// // console.log(months[currentDate.getMonth()]);

// // console.log(currentDate.getDay());

// // console.log(currentDate.getTime() / (1000 * 60 * 60 * 24));

// var newDate = new Date("30-Sep-2004")
// var currentDate = new Date()

// var diff = currentDate.getTime() - newDate.getTime()

// console.log(diff / (1000 * 60 * 60 * 24 * 365));




// date and time object

var currentTime = new Date();
var year = currentTime.setFullYear(2006)
currentTime.setMonth(7)

var hour = currentTime.getHours();
var second = currentTime.getSeconds()

console.log("currentTime ==>", currentTime); // millisecond
console.log("Year ==> ", year);
console.log("Hour ==> ", hour);
console.log("Second ==> ", second);



// functions

// function fullName() {} // function declaration / function initialization / fuctin definition
// function fullName() {
//   var firstName = "Huzaifa"
//   var lastName = "Khan"

//   var fullName = firstName + lastName
//   console.log("fullName ==>", fullName);
// }


// alert()
// fullName() // function calling

function fullName(fName, lName) { // function parameters
    var fullName = fName + " " + lName;
    return fullName
    // return fName + " " + lName

}

console.log(fullName("ALI", "KHAN"));


// alert(" ")
var firstName = "Muhammad";
var lastName = "Ali";
var student1 = fullName(firstName, lastName) // argument
var student2 = fullName("Ameer", "Ali") // argument
var student3 = fullName("Sameer", "Ali") // argument
var student4 = fullName("Asad", "Ali") // argument

console.log("studenr1 ==> ", student1);
console.log("studenr2 ==> ", student2);
console.log("studenr3 ==> ", student3);
console.log("studenr4 ==> ", student4);


var num = 123;
function addition(){
    var num = 456;
    console.log("num ==> ", num);
    console.log("num ==> ", num);
    
}

addition()
console.log("num ==> ", num);

// hoisting

// {
//   var num1 = 1
//   {
//     var num2 = 2
//     {
//       var num3 = 3
//     }
//     console.log("num1 ==>", num1);
//     console.log("num2 ==>", num2);
//     console.log("num3 ==>", num3);
//   }
// }

// function addition() {
//   var sum = 1 + 2
//   return sum
// }

// var sum = addition();

// console.log("sum ==>", sum);

var day = prompt("Enter day today: ");
if(day == "sat" || day == "sun"){
    console.log("Have to take class");
} else if(day == "fri"){
    console.log("Take a bath!");
} else{
    console.log("Hit the books!");
    
}


switch(day){
    case "sat":
        console.log("Take classes!");
        break;
    case "sun":
        console.log("Take classes!");
    case "fri":
        console.log("Take a bath!");
    default:
        console.log("Hit the books!");
        
}