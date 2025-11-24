// // string and its methods
// var str = "Hello"
// var str1 = "World"
// console.log(str ," ", str1);
// // document.write("*******************************")
// console.log(str[1]) // output e
// console.log(str[5]) // find not show underfined
// console.log(str.length);  // output: 5


// console.log("******************************************");

// // using manually loop:
// var str2 = "Hello World";
// var count = 0;
// for (var i = 0; i < str2.length; i++){
//     count++
//     // console.log(str2);
//     // console.log(i);
    
// }
// console.log("string length by using loops: ",count);


// console.log("**************************************");


// var sentence = "JavaScript is Powerful";

// var copy = sentence.slice(0,10);

// console.log(copy);

// var str = "JavaScript is fun";
// var result = "";

// for(var i = 0; i < 10; i++){
//   result += str[i];
// }

// console.log("result: " ,result);



// document.write("************************************************************* </br>" )
// var cityToCheck = prompt("Enter your city");
//   cityToCheck = cityToCheck.toLowerCase();
//   var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//   var found = false;
//   for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//       found = true;
//       document.write("It's one of the cleanest cities");
//       break;
//     }
//   }
//   if (!found) {
//     document.write(cityToCheck + " city is not found!");
//   }

console.log("***************************************************** ");



// indexOf
var line = "I love to love coding!"
var index = console.log(line.indexOf("love")); // answer is 2 first charter or word it tell index 

console.log("**************************************************** ");



// manually index finding
var str = "JS is amazing Language!";
// var search = "Script"
var search = "JS"

var foundAt = -1;
for(var i = 0; i <= str.length; i++){

  var match = true;

  for(var j = 0; j < search.length; j++){
    if(str[i + j] !== search[j]){
      match = false;
      break;
    }
  }


  if(match){
    foundAt = i;
    break;
  }
}

console.log("Found at: ", foundAt);


console.log("**************************************************");




// charAt() method provide character or word on which given index 
var word = "Karachi";
console.log(word.charAt(2)); // r 

console.log("*************************************************************");

// manually charAt Method 
var word1 = "Larkana";
var index1 = 4;

var char = "";

for(var i = 0; i < word1.length; i++){
  if(i === index1){
    char = word[i]
    break;
  }
}

console.log("Character at index : " + index1 + " is " + char);


console.log("****************************************************** ");

var original = "I like to learn coding!"

var find = "coding!";

var replaceWith = "JavaScript"

var result = "";


for(var i = 0; i < original.length; i++){
  if(original.slice(i, i + find.length) === find){
    result += replaceWith;
    i += find.length - 1;
  } else {
    result += original[i]
  }
}

console.log("Original: " + original);

console.log("Updated: ", result);


console.log("***************************************************");


var original  = "That is my car. It is new!"

var find = "is";
var replaceWith = "was";

var result = "";

for(var i = 0; i < original.length; i++){
  if(original.slice(i, i + find.length) === find){

    result += replaceWith;
    
    i += find.length - 1
  } else {
  result += original[i];
}

} 

console.log("Original: " + original);
console.log("Updated Value: " + result);


console.log("***************************************************");

var original  = "This is my car. It is new!"

var find = "is";
var replaceWith = "was";

var result = "";

for(var i = 0; i < original.length; i++){
  if(original.slice(i, i + find.length) === find &&     (i === 0 || original[i - 1] === " " || original[i - 1] === "." || original[i - 1] === "!") // left boundary
     &&  (i + find.length === original.length || original[i + find.length] === " " || original[i + find.length] === "." || original[i + find.length] === "!") // right boundary
){
    result += replaceWith;
    
    i += find.length - 1
  } else {
  result += original[i];
}

} 

console.log("Original: " + original);
console.log("Updated Value: " + result);


console.log("***********************************************");

var original = "Ali is a good boy. Ali plays Cricket";

var find = "Ali";
var replaceWith = "Ahmed"

var result = ""

for(var i = 0; i < original.length; i++){
  if(original.slice(i, i + find.length) === find){
    result += replaceWith;
    i += find.length - 1;
  } else {
    result += original[i];
  }
}


console.log(result);
