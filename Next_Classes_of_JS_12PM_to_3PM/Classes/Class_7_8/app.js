// var arr = ["Karachi", "Islamabd", "Sukkur", "Larakana"]
// var userInp = prompt("Enter city name: ")
// var firstChar = userInp.slice(0, 1).toUpperCase();
// var remainChars = userInp.slice(1).toLocaleLowerCase();
// var res = firstChar + remainChars;
// var isFound = false

// // var city = "KaraChi"
// // var firstChar = city.slice(0, 1).toUpperCase()
// // var remainchars = city.slice(1).toLowerCase()
// // console.log(firstChar + remainchars);

// for(var i = 0; i < arr.length; i++){
//     if(res === arr[i]){
//         isFound = true;
//         alert("City Found")
//         break;
//     }
// }

// if(!isFound){
//     alert("City not found!")
// }


console.log("***************************************");

// for(var i = 0; i < 10; i++) { // 0, 1
//   for(var j = 1; j <= 10; j++) { // 1
//     var res = i * 10 + j // res = 11
//     document.write(res + " ") 
//     // 1 2 3 4 5 6 7 8 9 10
//     // 11
//   }
//   document.write("</br>")
// }

// document.write("</br>")


// for (var i = 1; i <= 100; i = i + 10) { // 1 11 21 31 41 ... 91
//     for(var j = i; j < i + 10; j++) { // j < 11 + 10
//       document.write(j + " ")
//     }

//     document.write("</br>")
//   // document.write(i + "</br>")
// }


// var arr = ["Zain", "Shahzaib", "Maaz", "Saim", "Zain", "Shahzaib", "Maaz", "Zain"]

// document.write(arr.indexOf("Suleman"))
// document.write(arr.lastIndexOf("Zain"))

// document.write(arr.)

// var cityName = "Karachi"

// document.write(cityName.charAt(3))




console.log("**********************************");


var city = ["karachi", "larkana", "sukkur", "dadu", "khairpur"]

city.splice(2, 1, "mehar", "nasirabad")
console.log(city);


var newArr = city.splice(2)
console.log(newArr); // ['mehar', 'nasirabad', 'dadu', 'khairpur'] retrun deleted items
var newArr = city.splice(2, 4)
console.log(newArr); //[] NO index 2, so nothing is deleted. so []
var newArr = city.splice(0, 4)
console.log(newArr); //  ['karachi', 'larkana'] so deleted only both 

console.log(city.length); // 0


city.push("Lahore")
city.push("Johi")
console.log(city); // added elements in the end with push

city.pop()
console.log(city); // remove element from end


city.unshift("Hyderabad")
console.log(city); // added city in start

city.shift()
console.log(city); // remove city from start


console.log("********************************");

var text = "Asad Ali";
var toFound = "b";
// var toFound = prompt("Enter a character to find in (Asad Ali): ");
var isFound = false;
var index = -1;

for(var i = 4; i < text.length; i++){
    if(toFound == text[i]){ // w ==
        isFound = true
        index = i
        break;
    }
}

if(isFound){
    console.log("Element found at index: " + index);
} else{
    console.log("Not found " + index);

}

console.log("************************************");


// var text = "Muhammad Huzaifa Muhammad"
// var toFound = "Muhammad"
// var isFound = false
// var index = -1


// for (var i = 1; i < text.length; i++) {
//   console.log(text.slice(i, i + toFound.length));
//   // text.slice(0, 8) (Muhammad)
//   // text.slice(1, 9) (uhammad )
//   // text.slice(2, 10) (hammad H)
  
//   if (toFound == text.slice(i, i + toFound.length)) {
//     isFound = true
//     index = i
//     break
//   }
//   // if(toFound == text[i]) { // Muhammad == text[i]
//   //   isFound = true
//   //   index = i
//   //   break
//   // }
// }

// if (isFound) {
//   console.log("Element found at index: " + index);
// } else {
//   console.log("Not found " + index);
// }


// console.log(text.indexOf("Muhammad", 1)); 


var userInp = prompt("Enter your choice (Head/Tails): ")
var result = Math.round(Math.random() * 1)
if(result == 1 && userInp == "Head"){
    console.log("You win");
} else {
    console.log("You loss");
    
}

console.log("Result ==> " + result);
