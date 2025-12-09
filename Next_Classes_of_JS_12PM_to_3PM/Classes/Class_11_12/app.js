// var num = 3 + (4 - 5) * (2 / 2);
//     // 3 + (-1) * 1
//     // 3 + (-1)
//     // 3 - 1
//     // 2
//     // var num = (1 + 3) * 4
//           // 4 * 4 ==> 16 

// // var num = ((2 * 4) * 4) + 2
//           // (8 * 4) + 2
//           // 32 + 2
//           // 34, 
// // console.log("num ==>", num);

// // var expression1 = 4 > 4 // false
// // var expression2 = "" // true
// //                 // 
// // console.log("expression2 ==>", expression2);

// // 0
// // NaN
// // undefinied
// // null
// // empty string
// // false



// // if (expression2) {
// //   console.log("in the console section");
// // }


// // var num1 = 123
// // var num2 = "123"

// // if (expression1 !== expression2) { // false != 5 == 5 // false
// //   console.log("in the console section");
// // }


// // for (var i = 0; i < 20; i++) {
// //   console.log("Hello, World! ==>", i + 1);
// // }

// // for (var i = 20; i > 0; i--) {
// //   console.log("Hello, World! ==>", i);
// // }

// // var cities = ["Karachi", "Islamabad", "Korangi", "Orangi", "Landi"]


// // var para = document.getElementById("para").innerHTML




// function getValue() {
//   var inp = document.getElementById("userName").value
//   console.log("inp ==>", inp);
// }

// // console.log("para ==>", para);



// Palindrome word ==> civic ==> civic

// takes input from user (Done)
// reverse the input 
// check the reverse word with the userInp
// show the output

// console.log("document ==> ", document);



function checkPalindrome(){
  var userInp = document.getElementById("userInp").value;
  var reverse = ""
  console.log("userInp ==> ", userInp);

  for(var i = userInp.length - 1; i >= 0; i--){
    console.log("i ==>", userInp[i]);
    reverse += userInp[i] // or 
    // reverse = reverse + userInp[i] 
  }
  
  console.log("reverse ==> ", reverse);

  if(userInp === reverse){
    document.write("It is a palindrome word")
  } else {
    document.write("It is not a palindrome word!")
  }
}



//  var arr = [3, 6, 5, 2, 1, 9, 7, 8];
 var arr = [3, 6, 5, 2, 1, 9, 7, 8, 20];
 var min = arr[0] // 3

for(var i = 0; i < arr.length; i++){
  console.log("min ==> ", min);
  // console.log("currentElement ==> ", arr[i]); // arr[0] (3), arr[1] (6)
  if(arr[i] < min){
  // if(arr[i] > min){
    min = arr[i]
  }   
}
console.log("min ==> ", min);

console.log("***********************************");

// var arr = ["This", "is", "Pakistan"] // This is Paksitan

// // function myFunction(waqar){
// function myFunction(separator){
//   var text = arr[0];
//   for(var i = 1; i < arr.length; i++){
//     text = text + separator + arr[i]
//   }

//   // return text
//   var text = "";
//   for(var i = 0; i < arr.length; i++){
//     if(i === 0){
//       text = text + arr[i] // text = "" + This == This
//     } else{
//       text = text + waqar + arr[i]
//     }
//   }
//   return text

// }

// var result = myFunction("+++++")
// console.log("Result ==> ", result);



// console.log("text ==>", text);

// console.log("result ==>", arr.join());

var arr = ["This", "is", "my", "array"];

function myFunction(separator){
  var text = "";
  for(var i = 0; i < arr.length; i++){
    if(i === 0){
      text = arr[i]; // first element
    } else{
      text = text + separator + arr[i]; // add separator + element
    }
  }
  return text;
}

var result = myFunction("+++++");
console.log("Result ==> ", result); // This+++++is+++++my+++++array

// No "text" variable outside function
console.log("Result using join ==> ", arr.join("+++++")); // same as above

console.log("*************************************");

function fifo(){
  var userInp = document.querySelector(".userInp").value;
  var arr = userInp.split(",")
  var output = document.getElementById("output");

  for(let i = 0; i < arr.length; i++){
    var element = arr[i];
    console.log("element ==> ", element);
       // output.innerHTML = "<b>" + element + "</b>"
    // output.innerText += element
    output.innerText = output.innerText + " " + element
    
  }

}
