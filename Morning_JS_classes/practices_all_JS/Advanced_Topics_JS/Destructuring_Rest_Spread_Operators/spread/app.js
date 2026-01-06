// 📦 JavaScript Spread Operator - 10 Professional Examples
// Each line has detailed comments for easy understanding
// 1️⃣ Copying an Array
const numbers = [1,2,3]; 
const copyNumbers = [...numbers]; // Spread copies elements individually
console.log(copyNumbers); // [1,2,3]

// 2️⃣ Merging Arrays
const arr1 = [10,20], arr2 = [30,40];
const mergedArr = [...arr1,...arr2];
console.log(mergedArr); // [10,20,30,40]

// 3️⃣ Add Elements While Copying
const originalArr = [2,3];
const newArr = [1,...originalArr,4];
console.log(newArr); // [1,2,3,4]

// 4️⃣ Copying Objects
const user = {name:"Ali", age:20};
const copiedUser = {...user};
console.log(copiedUser);

// 5️⃣ Merging Objects
const obj1 = {x:1,y:2}, obj2 = {y:5,z:3};
const mergedObj = {...obj1,...obj2};
console.log(mergedObj);

// 6️⃣ Function Arguments
function sum(a,b,c){return a+b+c;}
const values = [5,10,15];
console.log(sum(...values)); // 30

// 7️⃣ String to Array
const word = "JS";
const letters = [...word];
console.log(letters); // ['J','S']

// 8️⃣ React-like State Update
const state = {name:"Ali", skills:["JS","React"]};
const newState = {...state, skills:[...state.skills,"Node"]};
console.log(newState);

// 9️⃣ Shallow Copy Pitfall
const nestedArr = [[1,2],[3,4]];
const copyNested = [...nestedArr];
copyNested[0].push(99);
console.log(nestedArr); // [[1,2,99],[3,4]]

// 🔟 Combining Array & Object
const numbersArr = [1,2];
const infoObj = {name:"Ali"};
const combined = {...infoObj, numbers:[...numbersArr]};
console.log(combined); // {name:"Ali", numbers:[1,2]}


// 📌 JavaScript Spread Operator - 5 Examples to Clear All Doubts

// 1️⃣ Copying and Merging Arrays
const arrA = [1, 2, 3]; // Original array A
const arrB = [4, 5];    // Original array B
const copyA = [...arrA]; // Spread creates a new copy of arrA
const mergedArrs = [...arrA, ...arrB, 6]; // Merge A + B + add 6
console.log(copyA);     // Output: [1,2,3]
console.log(mergedArrs); // Output: [1,2,3,4,5,6]

// ✅ Covers: copy array, merge arrays, add elements

// 2️⃣ Copying and Merging Objects
const obj3 = { name: "Ali", age: 20 };
const obj4 = { age: 25, role: "Developer" };
const copyObj1 = { ...obj3 }; // Copy obj1
const mergedObjs = { ...obj3, ...obj4 }; // Merge objects (obj2 overwrites age)
console.log(copyObj1);  // Output: {name:"Ali", age:20}
console.log(mergedObjs); // Output: {name:"Ali", age:25, role:"Developer"}

// ✅ Covers: object copy, object merge, key overwrite

// 3️⃣ Shallow Copy with Nested Arrays
const nestedArrs = [[1,2],[3,4]];
const shallowCopy = [...nestedArrs]; // Only outer array is copied
shallowCopy[0].push(99); // Modify inner array
console.log(nestedArr);   // Output: [[1,2,99],[3,4]]
console.log(shallowCopy); // Output: [[1,2,99],[3,4]]

// ✅ Covers: shallow copy behavior, nested arrays reference sharing

// 4️⃣ Spread with Functions
function sum(a,b,c){
  return a + b + c;
}
const nums = [10, 20, 30]; 
console.log(sum(...nums)); // Output: 60
// Expands array elements as individual arguments

// ✅ Covers: passing arrays to functions as arguments

// 5️⃣ Spread with Strings and Combining with Arrays
const words = "JS"; 
const letterss = [...words]; // ['J','S'], strings are iterable
const combinedArr = [...letterss, "Framework"]; 
console.log(letterss);      // Output: ['J','S']
console.log(combinedArr);  // Output: ['J','S','Framework']

// ✅ Covers: string to array, combining with arrays, iterable behavior
