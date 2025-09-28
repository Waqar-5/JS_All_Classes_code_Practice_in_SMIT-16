// // 15. Arrays

// // 1️⃣ Basic array

// var fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits);


// // 2️⃣ Accessing array elements
// var fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // Apple
// console.log(fruits[2]); // Mango

// // 3️⃣ Array with numbers
// var numbers = [10, 20, 30, 40];
// console.log(numbers[1]); // 20

// // 4️⃣ Mixed array
// var mixed = ["Waqar", 20, true];
// console.log(mixed[0]); // Waqar
// console.log(mixed[1]); // 20


// // 5️⃣ Changing array elements
// var fruits = ["Apple", "Banana", "Mango"];
// fruits[1] = "Orange";
// console.log(fruits); // ["Apple", "Orange", "Mango"]


// // 6️⃣ Array length
// var number = [1, 2, 3, 4, 5];
// console.log(number.length); // 5


// // 7️⃣ Last element using length
// var fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[fruits.length - 1]); // Mango


// // 8️⃣ Array inside function

// function printColors(colors){
//   console.log(colors[0] + ", " + colors[1]);
// }
// printColors(["Red", "Blue"]);


// // 9️⃣ Array from prompt
// var fruits = [];
// fruits[0] = prompt("Enter first fruit:");
// fruits[1] = prompt("Enter second fruit:");
// console.log(fruits);


// // 🔟 Array with boolean values
// var flags = [true, false, true];
// console.log(flags[1]); // false


// console.log("**************************************************");
// // 16. Arrays: Adding and Removing Elements

// // 1️⃣ Adding element at the end (push)
// var fruits = ["Apple", "Banana"];
// fruits.push("Mango");
// console.log(fruits); // ["Apple", "Banana", "Mango"]


// // 2️⃣ Removing element from the end (pop)
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// console.log(fruits); // ["Apple", "Banana"]



// // 3️⃣ Adding element at the start (unshift)
// let fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");
// console.log(fruits); // ["Apple", "Banana", "Mango"]


// // 4️⃣ Removing element from the start (shift)
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.shift();
// console.log(fruits); // ["Banana", "Mango"]



// // 5️⃣ Adding multiple elements (push)
// var numbers = [1, 2];
// numbers.push(3, 4, 5);
// console.log(numbers); // [1, 2, 3, 4, 5]


// // 6️⃣ Removing multiple elements (pop in loop)
// var numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// numbers.pop();
// console.log(numbers); // [1, 2, 3]


// // 7️⃣ Using shift and unshift together
// let colors = ["Red", "Blue"];
// colors.unshift("Green"); // Add at start
// colors.shift();           // Remove from start
// console.log(colors); // ["Red", "Blue"]


// // 8️⃣ Adding elements from user input
// let fruits = [];
// fruits.push(prompt("Enter first fruit:"));
// fruits.push(prompt("Enter second fruit:"));
// console.log(fruits);



// // 9️⃣ Removing last element from user-added array
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// console.log(fruits); // ["Apple", "Banana"]


// // 🔟 Complex example

// let numbers = [10, 20];
// numbers.push(30);       // [10, 20, 30]
// numbers.unshift(5);     // [5, 10, 20, 30]
// numbers.pop();           // [5, 10, 20]
// numbers.shift();         // [10, 20]
// console.log(numbers);    // [10, 20]




// // 17. Arrays: Removing, Inserting, and Extracting Elements

// // 1️⃣ Removing elements using splice

// var fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(1, 2); // Remove 2 elements from index 1
// console.log(fruits); // ["Apple", "Orange"]


// // 2️⃣ Inserting elements using splice
// var fruits = ["Apple", "Orange"];
// fruits.splice(1, 0, "Banana", "Mango"); // Insert at index 1
// console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]


// // 3️⃣ Replacing elements using splice
// var fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(1, 1, "Orange"); // Replace 1 element at index 1
// console.log(fruits); // ["Apple", "Orange", "Mango"]


// // 4️⃣ Extracting elements using slice
// var fruits = ["Apple", "Banana", "Mango", "Orange"];
// let newFruits = fruits.slice(1, 3); // index 1 to 2
// console.log(newFruits); // ["Banana", "Mango"]


// // 5️⃣ Copy entire array using slice
// var numbers = [1, 2, 3, 4, 5];
// let copyNumbers = numbers.slice();
// console.log(copyNumbers); // [1, 2, 3, 4, 5]


// // 6️⃣ Using negative index with slice
// var fruits = ["Apple", "Banana", "Mango", "Orange"];
// let lastTwo = fruits.slice(-2);
// console.log(lastTwo); // ["Mango", "Orange"]


// // 7️⃣ Remove elements dynamically
// var numbers = [10, 20, 30, 40, 50];
// numbers.splice(2, 2); // Remove 2 elements from index 2
// console.log(numbers); // [10, 20, 50]


// // 8️⃣ Insert at the end using splice
// let colors = ["Red", "Blue"];
// colors.splice(colors.length, 0, "Green"); // Insert at end
// console.log(colors); // ["Red", "Blue", "Green"]


// // 9️⃣ Replace multiple elements
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 3, 10, 20); // Replace 3 elements starting from index 1
// console.log(arr); // [1, 10, 20, 5]


// // 🔟 Combining slice and splice
// var fruits = ["Apple", "Banana", "Mango", "Orange"];
// let extracted = fruits.slice(1, 3); // ["Banana", "Mango"]
// fruits.splice(2, 1); // Remove "Mango" from original
// console.log(fruits);    // ["Apple", "Banana", "Orange"]
// console.log(extracted); // ["Banana", "Mango"]






// 18. for Loops

// 1️⃣ Basic for loop

// for (let i = 0; i < 5; i++){
//     console.log(i);  // 0 1 2 3 4
// }


// console.log("***********************************************");

// // 2️⃣ Counting down
// for(let i = 5; i > 0; i--){
//     console.log(i); // 5 4 3 2 1
// }

// console.log("***********************************************");

// // 3️⃣ Loop with step
// for(let i = 0; i <= 10; i += 2){
//     console.log(i); // 0 2 4 6 8 10
// }


// console.log("***********************************************");



// // 4️⃣ Sum of numbers
// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum += i;
// }
// console.log(sum); // 15

// console.log("******************************************");


// // 5️⃣ Looping through array
// let fruits = ["Apple", "Banana", "Mango"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// // 6️⃣ Using let inside loop

// console.log("***********************************");


// for(let i = 1; i <= 3; i++){
//   let square = i * i;
//   console.log(square); // 1 4 9
// }


// console.log("************************************");
// // 7️⃣ Printing even numbers
// for(let i = 0; i <= 10; i++){
//   if(i % 2 === 0){
//     console.log(i);
//   }
// }


// console.log("************************************************");

// // 8️⃣ Nested calculation inside loop
// for(let i = 1; i <= 3; i++){
//     console.log(`2 x ${i} = ${2 * i}`);
// }

// console.log("***********************************************");

// // 9️⃣ Loop with prompt input
// let n = Number(prompt("Enter number of times:"));
// for(let i = 1; i <= n; i++){
//   console.log(`Iteration ${i}`);
// }


// console.log("***********************************");
// // 🔟 Loop with array modification
// let numbers = [1, 2, 3];
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] *= 2;
// }
// console.log(numbers); // [2, 4, 6]




// console.log("******************************************************");
// // 19. for Loops: Flags, Booleans, Array Length, and Breaks

// // 1️⃣ Using a flag to find an item

// let fruits = ["Apple", "Banana", "Mango"];
// let found = false;

// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i] === "Banana"){
//     // if(fruits[i] === "Apples"){
//         found = true;
//         break;
//     }
// }

// console.log(found ? "Banana found" : "Banana not found");



// console.log("*****************************************************");


// // 2️⃣ Using break when found
// let numbers = [1, 3, 7, 9, 5];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 5){
//         console.log("Found number greater than 5:", numbers[i]);
//         break;
//     }
// }

// console.log("*****************************************************");
// // 3️⃣ Using continue to skip
// for(let i = 1; i <= 5; i++){
//   if(i === 3) continue;
//   console.log(i);
// }

// console.log("*****************************************************");


// // 4️⃣ Checking if an array contains a value
// let names = ["Ali", "Ahmed", "Sara"];
// let target = "Sara";
// let exists = false;
// for(let i = 0; i < names.length; i++){
//     if(names[i] === target){
//         exists = true
//         break
//     }
// }
// console.log(exists);


// console.log("*********************************************************");
// // 5️⃣ Finding index of an element

// let fruit = ["Apple", "Banana", "Mango"];
// let index = -1;

// for(let i = 0; i < fruit.length; i++){
//   if(fruit[i] === "Mango"){
//     index = i;
//     break;
//   }
// }
// console.log(index); // 2



// console.log("************************************************************");
// // 6️⃣ Loop until condition met


// let nums = [2, 4, 6, 8, 10];
// for(let i = 0; i < nums.length; i++){
//   console.log(nums[i]);
//   if(nums[i] === 6) break;
// }


// console.log("**********************************************************");
// let marks = [80, 75, 90, 65];
// let passed = true;

// for(let i = 0; i < marks.length; i++){
//   if(marks[i] < 50){
//     passed = false;
//     break;
//   }
// }
// console.log(passed ? "All passed" : "Someone failed");


// console.log("*******************************************************");

// // 8️⃣ Looping with array length
// let arr = [1, 2, 3, 4];
// for(let i = 0; i < arr.length; i++){
//   console.log(`Index ${i} has value ${arr[i]}`);
// }


// console.log("*****************************************************");
// // 9️⃣ Searching with multiple conditions.
// let number = [5, 15, 25, 35];
// for(let i = 0; i < number.length; i++){
//   if(number[i] > 10 && number[i] < 30){
//     console.log("Found:", number[i]);
//     break;
//   }
// }



// console.log("****************************************************");
// // 🔟 Using continue with arrays
// let items = ["Pen", "", "Book", "", "Pencil"];
// for(let i = 0; i < items.length; i++){
//   if(items[i] === "") continue;
//   console.log(items[i]);
// }



// console.log("**********************************************************");

// // 20. for Loops Nested

// // 1️⃣ Multiplication table
// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; j++){
//         console.log(`${i} X ${j} = ${i * j}`);      
//     }
// }

// console.log("***********************************************");



// // 2️⃣ Printing a grid of stars
// for(let i = 1; i <= 3; i++){
//   let row = "";
//   for(let j = 1; j <= 3; j++){
//     row += "* ";
//   }
//   console.log(row);
// }


// console.log("***********************************************");


// // 3️⃣ Pattern: Triangle of stars
// for(let i = 1; i <= 5; i++){
//   let row = "";
//   for(let j = 1; j <= i; j++){
//     row += "* ";
//   }
//   console.log(row);
// }

// console.log("***********************************");
// // 4️⃣ Nested loop over arrays
// let classes = [
//   ["Ali", "Ahmed"],
//   ["Sara", "Zara"]
// ];
// for(let i = 0; i < classes.length; i++){
//   for(let j = 0; j < classes[i].length; j++){
//     console.log(classes[i][j]);
//   }
// }


// console.log("**********************************************");
// // 5️⃣ Generating coordinate pairs
// for(let x = 1; x <= 2; x++){
//   for(let y = 1; y <= 2; y++){
//     console.log(`(${x}, ${y})`);
//   }
// }

// console.log("*****************************************");


// // 6️⃣ Checking duplicates
// let nums = [1, 2, 3, 2];
// for(let i = 0; i < nums.length; i++){
//   for(let j = i + 1; j < nums.length; j++){
//     if(nums[i] === nums[j]){
//       console.log("Duplicate found:", nums[i]);
//     }
//   }
// }


// console.log("*******************************************");
// // 7️⃣ Creating a number pyramid
// for(let i = 1; i <= 4; i++){
//   let row = "";
//   for(let j = 1; j <= i; j++){
//     row += j + " ";
//   }
//   console.log(row);
// }


// console.log("****************************************");
// // 8️⃣ Looping through 2D array with conditions
// let matrix = [
//   [1, 2],
//   [3, 4]
// ];
// for(let i = 0; i < matrix.length; i++){
//   for(let j = 0; j < matrix[i].length; j++){
//     if(matrix[i][j] % 2 === 0){
//       console.log(matrix[i][j], "is even");
//     }
//   }
// }


// console.log("*******************************************");

// // 9️⃣ Multiplication table (5x5)
// for(let i = 1; i <= 10; i++){
//   let row = "";
//   for(let j = 1; j <= 10; j++){
//     row += (i * j) + "\t";
//   }
//   console.log(row);
// }


// console.log("*******************************************");

// // 🔟 Complex nested loop with break
// for(let i = 1; i <= 3; i++){
//   for(let j = 1; j <= 3; j++){
//     console.log(i, j);
//     if(j === 2) break; // Break inner loop
//   }
// }

