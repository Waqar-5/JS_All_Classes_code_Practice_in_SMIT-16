// 1️⃣ Copy & Merge Arrays
function copyMergeArrays(){
  const a = document.getElementById('arr1').value.split(',').map(Number); // Get array 1
  const b = document.getElementById('arr2').value.split(',').map(Number); // Get array 2
  const copyA = [...a]; // Spread copies array a
  const merged = [...a,...b]; // Spread merges both arrays
  document.getElementById('arrOutput').textContent = `Copy: [${copyA}]\nMerged: [${merged}]`;
}

// 2️⃣ Copy & Merge Objects
function copyMergeObjects(){
  try{
    const objA = JSON.parse(document.getElementById('obj1').value || '{}'); // Object 1
    const objB = JSON.parse(document.getElementById('obj2').value || '{}'); // Object 2
    const copyA = {...objA}; // Spread copy
    const merged = {...objA,...objB}; // Spread merge, objB overwrites keys
    document.getElementById('objOutput').textContent = `Copy: ${JSON.stringify(copyA)}\nMerged: ${JSON.stringify(merged)}`;
  } catch(e){
    document.getElementById('objOutput').textContent = 'Invalid JSON!'; // Error handling
  }
}

// 3️⃣ Add Elements to Array
function addElements(){
  const base = document.getElementById('baseArr').value.split(',').map(Number); // Base array
  const add = document.getElementById('addArr').value.split(',').map(Number); // Elements to add
  const newArr = [...base,...add]; // Merge using spread
  document.getElementById('addOutput').textContent = `[${newArr}]`;
}

// 4️⃣ Convert String to Array
function stringToArray(){
  const str = document.getElementById('strInput').value; // Get string
  const arr = [...str]; // Spread converts string to array of chars
  document.getElementById('strOutput').textContent = `[${arr.join(', ')}]`;
}

// 5️⃣ Pass Array to Function
function passToFunction(){
  const nums = document.getElementById('funcArr').value.split(',').map(Number); // Array input
  function sum(...args){ return args.reduce((a,b)=>a+b,0); } // Function supports any length
  document.getElementById('funcOutput').textContent = `Sum: ${sum(...nums)}`;
}

// 6️⃣ Shallow Copy Demo
function shallowCopyDemo(){
  const nested = [[1,2],[3,4]]; // Original nested array
  const copyNested = [...nested]; // Shallow copy
  copyNested[0].push(99); // Modify inner array
  document.getElementById('shallowOutput').textContent =
    `Original: ${JSON.stringify(nested)}\nShallow Copy: ${JSON.stringify(copyNested)}\nNotice: inner array shared!`;
}
