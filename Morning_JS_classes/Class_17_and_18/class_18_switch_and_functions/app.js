functions

// syntax of functiin

function functionName(){}

function greet(){
    document.write("Hello, How are you now!")
}

greet()



// function with argument and parameter
function greet(name){  // name is parameter
    document.write("Hello, ", name)
}

greet("Khan")


// multiple argument and parameter
function greet(name, age, course, roolNo){  // name is parameter
    // document.write(name, " is ", age  , " years old ", "his roll number is ", roolNo, " and studying course is " , course)
    document.write(`${name} is ${age} years old his roll number is ${roolNo} and studying course is ${course}`)
}

greet("Khan", 21, "Web development", 34567)



// provide default parameter
// (it means if we provide it value in argument else it will take default paramenter value)
function add(a, b=5){
    document.write("a ==>", a, "\n b ==> ", b);
    
}

add(2)
// add(2,9)


function say(x, y){
    if(typeof y === "undefined"){
    // if(typeof y === undefined){
        // y=0
        y=0
    }
    document.write("x: ", x, " <br> y: ", y)
}

// say(5)
// say(5, 10)




// return key word
// it is used to get/receive value from function
function add(a, b){
    return a + b
}
// var result = add(5, 6)
// document.write( "sum of 5 and 6:  ", result)

document.write(add(5, 6))



function calcTot(merchTot){
    var orderTot;

    if(merchTot >= 100){
        orderTot = merchTot;
    } else if (merchTot <= 50){
        orderTot = merchTot + 5
    } else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50))
    }

    return Number(orderTot.toFixed(2))
}

// var total = calcTot(15);
// var total = calcTot(150);
// var total = calcTot(100);
// var total = calcTot(50);
// var total = calcTot(40);
var total = calcTot(70);
document.write(total)



// Q#1 
//  get two numbers as input and return sum of them
var num1 = +prompt("Enter num1: ")
var num2 = +prompt("Enter num2: ")

function addTowNums(a, b){
    return a + b
}

var result = addTowNums(num1, num2)
document.write(`The sum of ${num1} and ${num2} is ${result}`)

// Q#2
// find square using function and return its value
var num1 = +prompt("Enter num1: ")
function square(a){
    return a * a
}
var squareNum = square(num1)
document.write(`Sqaure of ${num1} is ${squareNum}`)


// Q#3
var num1 = Number(prompt("Enter a number for checking even and odd: "))
function checkOddEven(num){
    if(num % 2 === 0){
        document.write(`The number  ${num} is even`)
    } else{
        document.write(`The number ${num} is odd`)
    }
    return num
}

var result = checkOddEven(num1)

document.write(result)
// document.write(checkOddEven())



var width = +prompt("Enter the width: ");
var length = +prompt("Enter the length: ");
function areaOfRect(w, l){
    return w * l
}

var result = areaOfRect(width, length)
document.write(`The area of retangle is ${result}`)


function greetUser(name){
    return "Hello, " + name
} 

var greet = greetUser("Waqar Ali")
document.write(greet)





// Switch case
//  Same like Conditions
var dayOfWeek = prompt("Enter days name: ").toLowerCase();

switch (dayOfWeek){
    case "sunday":
        alert("Holiday")
        break;
    case "saturday":
        alert("second last day of week")
        break;
    case "friday":
        alert("prayer first")
        break;
    case "monday":
        alert("First day of week")
        break;
    case "tuesday":
        alert("Second day of week")
        break;
    case "wednesday":
        alert("Must study!")
        break;
    case "thursday":
        alert("The mid day of week")
        break;
    default:
        alert("Invalid day names! ")
}


var num1 = +prompt("Enter number 1: ")
var num2 = +prompt("Enter number 2: ")
var opt = prompt("Enter an operator : ")
var result;

switch (opt){
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 ===0){
            alert("zero is not divsible")
        } else{
          result = num1 / num2  
        }
        break;
    default:
        result = "invalid operator"
}

alert(result)




var signalColors = prompt("Enter signal Color Name: ").toLowerCase();

switch(signalColors){
    case "red":
        alert("Stop!")
        break;
    case "yellow":
        alert("Get ready!")
        break;
    case "green":
        alert("Go")
        break;
    default:
        alert("invalid signal color!")
}



var monthNames = prompt("Enter Month name to get its number: ").toLowerCase()

switch(monthNames){
    case "january":
        alert(1)
        break;
    case "february":
        alert(2);
        break;
    case "march":
        alert(3);
        break;
    case "april":
        alert(4)
        break;
    case "may":
        alert(5)
        break;
    case "june":
        alert(6);
        break;
    case "july":
        alert(7);
        break;
    case "august":
        alert(8);
        break;
    case "september":
        alert(9);
        break;
    case "october":
        alert(10);
        break;
    case "november":
        alert(11);
        break;
    case "december":
        alert(12);
        break;
    default:
        alert("Invalid month name")
}


var monthNames = prompt("Enter Month name to get its number: ")
var capitlize = monthNames.charAt(0).toUpperCase()
capitlize.slice(1 ).toLowerCase()

switch(capitlize){
    case "January":
        alert(1)
        break;
    case "february":
        alert(2);
        break;
    case "march":
        alert(3);
        break;
    case "april":
        alert(4)
        break;
    case "May":
        alert(5)
        break;
    case "june":
        alert(6);
        break;
    case "july":
        alert(7);
        break;
    case "august":
        alert(8);
        break;
    case "september":
        alert(9);
        break;
    case "october":
        alert(10);
        break;
    case "november":
        alert(11);
        break;
    case "december":
        alert(12);
        break;
    default:
        alert("Invalid month name")
}


// Grade system
var grade = prompt("Enter your grade: ").toUpperCase();
var msg;

switch(grade){
    case "A":
        // alert("Excellent");
        msg = "Excellent";
        break;
    case "B":
        // msg = "Good";
        msg = "Good";
        break;
    case "C":
        // alert("Average");
        msg = "Average";
        break;
    case "D":
        // alert("Below Average")
        msg = "Below Average";
        break;
    case "F":
        // alert("Failed")
        msg = "Failed";
        break;
    default:
        // alert("Invalid grade!")
        msg = "Invalid Grade";
}

document.write(msg)

