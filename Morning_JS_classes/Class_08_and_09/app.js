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



document.write("*************************************************************")
var cityToCheck = prompt("Enter your city");
  cityToCheck = cityToCheck.toLowerCase();
  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
  var found = false;
  for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
      found = true;
      document.write("It's one of the cleanest cities");
      break;
    }
  }
  if (!found) {
    document.write(cityToCheck + " city is not found!");
  }