// // Array

// // To stop doing that things again, array is raised or come..
// // var fruit1 = "Apple";
// // var fruit2 = "Banana";
// // var fruit3 = "Orange";
// // var fruit4 = "Mango";
// // var fruit5 = "Peach";

// // console.log(fruit1);
// // console.log(fruit2);
// // console.log(fruit3);
// // console.log(fruit4);
// // console.log(fruit5);

// //  array is written in square brackets
// // array mostly works on index base
// // array store multiple values in single variable

// // declare array and assign values
// var fruits = ["Apple", "Orange", "mango", "Banana"];

// fruits[10] = "pineapple" // assign value on specifi index
// // accessing through index
// console.log(fruits[2]);//mango
// console.log(fruits[10]); // undefined (ou of range of index)
// console.log(fruits); // from 4 to 9 remain emlty
// console.log(fruits.length); // length 11


// var nums = [1, 2, 3]

// var num = nums
// console.log(num); // [1, 2, 3] because nums values come in num


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log("Original array: " + arr);

// // push used to add element at the end of array
// arr.push(11)
// console.log("after pushing 11 in array: ", arr);


// var mixedData = ["This is Array" , 1 , true , undefined , null , []];

// console.log("Mixed data: ",mixedData);



// var fruits = [ "apple" , "Banana"];
// console.log("Original Array: ", fruits);

// fruits.push("Mango");
// console.log("after added at the end of array 'Mango': ", fruits);


// // pop is used to remove element from end
// fruits.pop()
// console.log("after using pop method: ", fruits);


// // unshift is used to add elements in array in beginning of array
// fruits.unshift("peaches", "Oranges")
// console.log("after using unshift method: ",fruits);


// // shift is sued to remove elements from array in beginning
// fruits.shift()
// console.log("After using shift method: " + fruits);


// var fruitsArr =  ["Apple" , "Mango" , "Banana" , "Orange" , "Grapes" , "Peaches", "Watermelon"];
// console.log("original array: ", fruitsArr);


// // sliced is used to get copy of an array, it takes two values first starting an d2nd lasting or ending values
// // note: you have to store that in other vaiable (means new variable) not like pop, push etc..
// var sliced = fruitsArr.slice(1, 4) //  ['Mango', 'Banana', 'Orange'] because always be -1 from last value or ending value
// console.log("Sliced method is used: ",sliced);


// var number = [1, 2, 3, 4, 5]
// console.log("Original array: ", number);

// var copy = number.slice()
// console.log("copy of array with the help of slice method: ",copy); // here it will gave you same as in number have values



// // splice is used to remove element from array at specifi index or its value
// // it takes two values 1st value showing starting point, 2nd deletion count(numbers) if provide after 2 values, these will be added in where other deleted 
// var items = ["a" , "b" , "c" , "d" , "e"];
// items.splice(1, 2)
// console.log(items); //  ['a', 'd', 'e']

// var items = ["a" , "b" , "c" , "d" , "e"];
// items.splice(1, 2,2)
// console.log(items); // ['a', 2, 'd', 'e']



// // inserting values
// var colors = ["Red", "Green" , "Blue"];
// // colors.pop()
// console.log(colors); //['Red', 'Green', 'Blue']


// colors.splice(2,1);
// console.log(colors); //['Red', 'Green']
// colors.splice(1, 0, "Yellow" , "Purple");
// console.log(colors); //['Red', 'Yellow', 'Purple', 'Green']


// var names = ["Khan", "Meer", "Ameer"]
// console.log(names); // ['Khan', 'Meer', 'Ameer']
// names.splice(1, 1, "Sameer")
// console.log(names); //['Khan', 'Sameer', 'Ameer']




// var arr = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];

// arr.splice(1,8);

// console.log(arr); // [1, 10]


// // note: length starts from 1 and index starts from 0

// // length is property which tells counts length or string, numbers etc...
// var name = "Waqar Ali";

// console.log("Length of this string 'Waqar Ali' is: " + name.length); // 9



// var msg = "Welcome to JavaScript";
// console.log(msg.slice(11)); //JavaScript



// var msg = "JavaScript";

// // having two values, starting and ending
// console.log(msg.substring(0,4)); // Java
// console.log(msg.substring(4,0)); 


// // var user = "ali";

// // var shout = "HELLO!"

// // console.log(user.toUpperCase());
// // console.log(shout.toLowerCase());


// // var user = prompt("Type your name!")

// // console.log(user.toUpperCase());



// // var a = [1 , 2 ,3];
// // var b = a;
// // b.push(4)



// // console.log("a:" , a);
// // console.log("b:" , b);



// // var arr = [];

// // if([] == []){
// //   console.log("True");
// // }else{
// //   console.log(false);
// // }



console.log("****************************************************");




// for(init ; condition ; incre/decre){
//   // block of code 
// }

// for(var i = 1; i <= 100 ; i++){
//   console.log(i);
// }

var fruits = ["Apple" , "Banana" , "Mango"];

for(var i = 0; i < fruits.length; i++){
  console.log(i + ": " + fruits[i]);

}

// // var a =0
// // for(var i = 0; i >= 10; i++){
// //     for(var  j = 11; j >= 100; 1++){
// //         document.write("i = "+ i[i] + "j = " + j[j])
// //     }
// // }


// // for (var i = 0; i <= 100; i += 10) {
// //     for (var j = 10; j <= 100; j += 10) {
// //         document.write("i = " + i + ", j = " + j + "<br>");
// //     }
// //     document.write("<hr>"); // horizontal line after each i loop
// // }



// // let arr = [];

// // for (let i = 1; i <= 100; i++) {
// //     arr.push(i);

// //     // When we reach every 10th number, print the row and reset array
// //     if (i % 10 === 0) {
// //         document.write("[" + arr.join(", ") + "]<br>");
// //         arr = [];  // reset for the next row
// //     }
// // }



// for (var i = 1; i <= 100; i++) {
//     document.write(i + " ");
    
//     // After every 10 numbers, go to the next line
//     if (i % 10 === 0) {
//         document.write("<br>");
//     }
// }



// for (initialization;    condition;  increment/decrement){
//   block of code
// }

for (var i = 1; i <= 5; i++){
    console.log("number: ",i );
}



// for loop on array
var fruits = ["Mango" , "Peach" , "Apple" , "Banana" , "Orange"];
for(var i = 0; i <fruits.length; i++){
    console.log("Fruit: ", fruits[i]);
    
}


for(var i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log("The number is even: ", i);
    }
}



// 1, 2, 3 tables prints
for(var i = 1; i <= 3; i++){
    console.log("Table of " + i);
    for(var j = 1; j <= 10; j++){
        console.log(i + " X " + j +  " = " + i * j);
    }
    console.log("---------------------------------");   
}

for(var i = 10; i >= 1; i--){
    console.log(i);
}

var nums = [10, 20 , 30 , 40];
var total = 0;

for(var i = 0; i < nums.length; i++){
  total += nums[i]
}

console.log("Total:" , total);


var num = +prompt("Type your number") // used + so that when user gives input , it gets converted to number
var total = +prompt("How many times you wanna multiply!")

for(var i = 1; i <= total; i++){
  console.log(num + " x " + i + " = " + num * i);
  document.write(num + " x " + i + " = " + num * i + "<br />");
}

var matrix = [
  [1, 2 ,3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(matrix[2][0]);

for(var i =0; i < matrix.length; i++){

  for(var j = 0; j < matrix[i].length; j++){

    console.log(matrix[i][j]);


  }
}



console.log(matrix[2][0]);

for(var i =0; i < matrix.length; i++){

  for(var j = 0; j < matrix[i].length; j++){

    console.log(matrix[i][j]);


  }
}




// for(var i =1 ; i <= 5 ; i++){
//   var stars = "";

//   for(var j = 1; j <= i; j++){

//     stars += "* ";

//   }

//   console.log(stars);

// }

// var boys = ["Bilal" , "Ali" , "Haris" , "Abdullah"];
// var girls = ["Ayesha" , "Zoya" , "Sara" , "Eshal"];


// for(var i = 0; i < boys.length; i++){

//   for(var j = 0; j < girls.length; j++){
//     console.log(boys[i] + " VS " + girls[j]);
//   }


// }


// var items = ["pen" , "book" , "eraser"];

// var found = false;

// for(var i = 0; i < items.length; i++){

//   if(items[i] === "book"){
//     console.log("Found");
//   }else{
//     console.log("Not Found!");
//   }


// }



// for(var i =0 ; i < items.length; i++){
//   if(items[i] === "book"){
//     found = true;
//     break;
//   }
// }


// if(found){
//   console.log("Book Mil gaya!");
// }else{
//   console.log("Book Nahi mila!");
// }


var items = ["Pen" , "Book" , "raser" , "BallPen"];

var flag = false;


for(var i = 0; i < items.length; i++){

  if(items[i] === "Eraser"){
    flag = true;
    break;
  }
}

if(flag){
  console.log("Eraser mil gaya hai!");
}else{
  console.log("Eraser Nahi mila!");
}