// 1️⃣ Creating a new Map
const myMap = new Map(); // Create a new empty Map object called 'myMap'

// 2️⃣ Adding key-value pairs to a Map
myMap.set('name', 'Ali'); // Key: 'name', value: 'Ali'
myMap.set('age', 25) // Key: 'age', Value: 25
myMap.set('isStudent', true); // Key: 'isStudent', Value: true
myMap.set(100, 'NumberKey');  // Key can be a number
myMap.set(true, 'BooleanKey'); // Key can be a boolean

console.log(myMap); // Output all key-value pairs

console.log("*************************************************");
// 3️⃣ Getting a value using a ke

console.log(myMap.get('name'));     // Output: 'Ali'
console.log(myMap.get('age'));      // Output: 25
console.log(myMap.get(100));        // Output: 'NumberKey'

console.log("********************************************************");


// 4️⃣ Checking if a key exists
console.log(myMap.has('name'));     // true
console.log(myMap.has('gender'));   // false

console.log("********************************************************");
// 5️⃣ Deleting a key-value pair
myMap.delete('age');               // Delete key 'age'
console.log(myMap.has('age'));     // false

// 6️⃣ Getting the number of key-value pairs
console.log(myMap.size);           // 4 (after deleting 'age')

// 7️⃣ Iterating through Map using for...of
for (const [key, value] of myMap) { // Destructuring each [key, value]
  console.log(key, '=>', value);     // Print key and value
}

// 8️⃣ Iterating using forEach
myMap.forEach((value, key) => {     // forEach method takes value first, then key
  console.log(`${key}: ${value}`);   // Print in key: value format
});

// 9️⃣ Converting Map to Array
const mapArray = [...myMap]; // Spread Map into array of [key, value] pairs
console.log(mapArray);        // Output: [['name','Ali'], ['isStudent',true], [100,'NumberKey'], [true,'BooleanKey']]

//  🔹 Converting only keys or values to Array
const keysArray = [...myMap.keys()];   // Array of keys
const valuesArray = [...myMap.values()]; // Array of values
console.log(keysArray);     // ['name', 'isStudent', 100, true]
console.log(valuesArray);   // ['Ali', true, 'NumberKey', 'BooleanKey']

// 10️⃣ Using objects as keys
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const objectMap = new Map();  // New Map
objectMap.set(obj1, 'Object 1'); // Key is obj1
objectMap.set(obj2, 'Object 2'); // Key is obj2
console.log(objectMap.get(obj1)); // 'Object 1' (object reference matters)
console.log(objectMap.get({ id: 1 })); // undefined (different reference)

// 11️⃣ Practical Example: Counting frequency of items
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitMap = new Map(); // Create Map to store frequency
fruits.forEach(fruit => {
  if (fruitMap.has(fruit)) {           // If fruit already exists
    fruitMap.set(fruit, fruitMap.get(fruit) + 1); // Increment count
  } else {
    fruitMap.set(fruit, 1);             // Else set count to 1
  }
});
console.log(fruitMap); // Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

// 12️⃣ Deleting keys conditionally
for (const [key, value] of fruitMap) {
  if (value < 2) {       // Remove fruits with less than 2 occurrences
    fruitMap.delete(key);
  }
}
console.log(fruitMap);   // Map { 'apple' => 3, 'banana' => 2 }

// 13️⃣ Merging two Maps
const map1 = new Map([ ['a',1], ['b',2] ]);
const map2 = new Map([ ['b',3], ['c',4] ]);
const mergedMap = new Map([...map1, ...map2]); // Spread operator merges, later overwrites duplicates
console.log(mergedMap);   // Map { 'a' => 1, 'b' => 3, 'c' => 4 }

// 14️⃣ Using Map to store user data (real-world)
const users = new Map();
users.set(101, { name: 'Ali', age: 25 });
users.set(102, { name: 'Sara', age: 22 });
console.log(users.get(101)); // { name: 'Ali', age: 25 }

// 15️⃣ Optional: Clear Map
mergedMap.clear();        // Remove all entries
console.log(mergedMap.size); // 0

// 16️⃣ Using Map to simulate a simple cache
const cache = new Map();       // Map as cache
function getData(key) {
  if (cache.has(key)) {        // If key exists in cache
    return cache.get(key);     // Return cached value
  } else {
    const data = key * 2;      // Simulate fetch/compute
    cache.set(key, data);      // Store in cache
    return data;
  }
}
console.log(getData(5)); // 10
console.log(getData(5)); // 10 from cache