// Project: Number Explorer – JavaScript Iterators

/* 
Number Explorer
A project to explore numbers using iterators in different ways.
Teaches: basic iterators, custom iterators, infinite sequences, filtering, generators.
*/

// ------------------------------
// 1. Basic Array Iterator
// ------------------------------
const numbers = [5, 10, 15, 20]; // Array of numbers to iterate

// Get the array's default iterator
const numIterator = numbers[Symbol.iterator](); // Symbol.iterator returns iterator object

console.log("Basic Array Iterator:");
console.log(numIterator.next()); // { value: 5, done: false }
console.log(numIterator.next()); // { value: 10, done: false }
console.log(numIterator.next()); // { value: 15, done: false }
console.log(numIterator.next()); // { value: 20, done: false }
console.log(numIterator.next()); // { value: undefined, done: true }

console.log("******************************************");

// ------------------------------
// 2. Custom Iterator: Odd Numbers Only
// ------------------------------
const oddNumbers = {
    start: 1, // Starting number
    end: 15,  // Ending number
    [Symbol.iterator]() { // Make this object iterable
        let current = this.start; // Initialize current value
        const last = this.end; // Ending value

        return {
            next() { // Next method called by for...of or .next()
                while(current <= last){ // Loop until end
                    const value = current++; // Take current value and increment
                    if(value % 2 !== 0){ // Skip even numbers
                        return { value, done: false }; // Return odd number
                    }
                }
                return { value: undefined, done: true }; // End iteration
            }
        }
    }
}

console.log("Odd Numbers Iterator:");
for(const n of oddNumbers){
    console.log(n); // 1, 3, 5 ... 15
}

console.log("******************************************");

// ------------------------------
// 3. Infinite Number Iterator (Lazy Evaluation)
// ------------------------------
const infiniteNumbers = {
    [Symbol.iterator]() { // Make iterable
        let num = 0; // Start number
        return {
            next() { // Next method
                num++; // Increment number
                return { value: num, done: false }; // Never stops automatically
            }
        }
    }
}

// Take first 10 numbers from infinite sequence
const infiniteIter = infiniteNumbers[Symbol.iterator](); // Get iterator object
console.log("First 10 numbers from Infinite Iterator:");
for(let i=0; i<10; i++){
    console.log(infiniteIter.next().value); // 1,2,3,...10
}

console.log("******************************************");

// ------------------------------
// 4. Fibonacci Sequence Iterator
// ------------------------------
const fibonacci = {
    [Symbol.iterator]() { // Make iterable
        let a = 0, b = 1; // First two Fibonacci numbers
        return {
            next() {
                const value = a; // Current Fibonacci number
                [a, b] = [b, a + b]; // Update next Fibonacci numbers
                return { value, done: false }; // Infinite sequence
            }
        }
    }
}

const fibIter = fibonacci[Symbol.iterator](); // Get iterator
console.log("First 10 Fibonacci numbers:");
for(let i=0; i<10; i++){
    console.log(fibIter.next().value); // 0 1 1 2 3 5 8 13 21 34
}

console.log("******************************************");

// ------------------------------
// 5. Generator Function Iterator: Power of 2
// ------------------------------
function* powerOfTwo(limit){ // Generator function for power of 2
    let n = 1; // Start exponent
    while(n <= limit){ // Loop until limit
        yield 2 ** n; // Yield 2^n
        n++; // Increment exponent
    }
}

console.log("Power of 2 up to 2^8:");
for(const val of powerOfTwo(8)){
    console.log(val); // 2 4 8 16 32 64 128 256
}

console.log("******************************************");

// ------------------------------
// 6. Filtered Fibonacci: Only Even Fibonacci
// ------------------------------
function* evenFibonacci(limit){ // Generator for filtered Fibonacci
    let a = 0, b = 1, count = 0;
    while(count < limit){ // Stop after 'limit' even numbers
        if(a % 2 === 0){ // Only even numbers
            yield a; // Yield even Fibonacci
            count++;
        }
        [a, b] = [b, a + b]; // Update Fibonacci
    }
}

console.log("First 5 Even Fibonacci numbers:");
for(const val of evenFibonacci(5)){
    console.log(val); // 0 2 8 34 144
}

console.log("******************************************");

// ✅ End of Project
// This project teaches:
// - Array iterators
// - Custom iterators with conditions
// - Infinite iterators
// - Fibonacci and generator iterators
// - Filtering with iterators
