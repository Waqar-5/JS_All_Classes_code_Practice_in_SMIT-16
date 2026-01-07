// Set in JavaScript (Simple Definition)

// A Set is like a special box that only keeps unique things.

// No duplicates allowed – if you try to put the same thing twice, it ignores the second one.

// Keeps things in the order you put them – first in, first out.

// Can store any type of value – numbers, strings, objects, even NaN.

// Think of it like this:

// “A Set is a collection that says: ‘I only want one of each thing, thank you.’”

// Example:

// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(1); // ignored
// console.log(mySet); // Set {1, 2}


// ✅ Easy to remember: “Set = Unique + Ordered + Any type”





// 1️⃣ Creating a new Set
console.log("All about Array with Set");

const mySet = new Set(); // Create a new empty Set object called 'mySet'

// // 2️⃣ Adding values to a Set
mySet.add(1) // Add the number 1 to the Set
mySet.add(2) // Add the number 2 to the Set
mySet.add(2);            // Try to add 2 again (ignored because Set only stores unique values)
// mySet.add(1)
mySet.add("Hello");  // Add a string 'Hello' to the Set
mySet.add(true);// Add a boolean value 'true' to the Set

console.log(mySet);      // Output: Set { 1, 2, 'Hello', true }

console.log("*****************************************************");

// 3️⃣ Checking if a value exists in a Set
console.log(mySet.has(1)); // true - 1 exist in the Set
console.log(mySet.has('World')); // false - 'World' does not exist

console.log("*****************************************************");
// 4️⃣ Deleting a value from a Set
mySet.delete(2)  // Remove the value 2 from the Set
console.log(mySet); // Output: Set { 1, 'Hello', true }

console.log("***********************************************");
// 5️⃣ Getting the number of elements in a Set
console.log(mySet.size); // 3 - the Set has 3 elements

console.log("*******************************************");
// 6️⃣ Iterating through a Set using for...of
for (const value of mySet){ // Loop through each value in the Set
    console.log(value); // Print the value   
}


console.log("******************************************************");
// 7️⃣ Iterating using forEach
mySet.forEach((value) => { // forEach method iterates over Set
    console.log("Value: ", value);// Print value with a label
});

console.log("******************************************************");
// 8️⃣ Removing all elements
mySet.clear(); // Clear all values from the Set
console.log(mySet.size);      // 0 - Set is empty

console.log("**************************************************");
// 9️⃣ Converting an Array to a Set (removes duplicates)
const numbers = [1, 2, 2, 3, 4, 4, 5]; // Array with duplicate numbers
const uniqueNumbers = new Set(numbers); // Convert array to Set (duplicates removed)
console.log(uniqueNumbers);  // Output: Set { 1, 2, 3, 4, 5 }


console.log("***********************************************************");
//  🔹 Convert back to Array if needed
const uniqueArray = [...uniqueNumbers]; // Spread Set into Array
console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5]





console.log("***************************************************");
console.log("All about Object with Set");

// 10️⃣ Using objects in Set

const obj1 = { id: 1, name: 'Ali' };    // Object 1
const obj2 = { id: 2, name: 'Sara' };   // Object 2
const objSet = new Set();               // Create new Set for objects
objSet.add(obj1);                       // Add obj1
objSet.add(obj2);                       // Add obj2
objSet.add(obj1);                       // Try to add obj1 again (ignored, reference is same)
console.log(objSet);                    // Output: Set { { id: 1, name: 'Ali' }, { id: 2, name: 'Sara' } }


console.log("***********************************************************");
// 11️⃣ Practical Example: Removing duplicates from user input
const userInput = ["spply", "banana", "apple", "orange", "banana"]; // // Input array
const uniqueFruits = [...new Set(userInput)]; // Remove duplicates using Set
console.log(uniqueFruits); // Output: ['apple', 'banana', 'orange']



console.log("**********************************************************");
// 12️⃣ Real-life Example: Tracking visited pages
const visitedPages = new Set(); // Create Set to track visisted pages
visitedPages.add("/home"); // User visits /home
visitedPages.add('/about');     // User visits /about
visitedPages.add('/home');      // User revisits /home (ignored, already visited)
console.log(visitedPages);      // Output: Set { '/home', '/about' }



console.log("***************************************************");
// 13️⃣ Combining two Sets (union)
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const unionSet = new Set([...setA, ...setB]); // Merge two Sets
console.log(unionSet); // Output: Set { 1, 2, 3, 4, 5 }



console.log("*************************************************");
// 14️⃣ Intersection of two Sets
const intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log(intersectionSet);   // Output: Set { 3 }


console.log("******************************************************************");

// 15️⃣ Difference of two Sets
const differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log(differenceSet);    // Output: Set { 1, 2 }


console.log("************************************************************");
// 16️⃣ Using Set with strings
const sentence = 'hello world';
const letters = new Set(sentence);  // Unique letters only
console.log(letters);               


/*

✅ Key Points From the Code

Set stores only unique values → duplicates ignored.

Any data type allowed → numbers, strings, booleans, objects, functions.

Preserves insertion order → iteration is predictable.

Useful in real-life scenarios → removing duplicates, tracking visited items, filtering unique letters or IDs.

Works well with Arrays → convert Array → Set → Array to remove duplicates.

Set operations → union, intersection, difference are easy with spread operator and filter.

*/


