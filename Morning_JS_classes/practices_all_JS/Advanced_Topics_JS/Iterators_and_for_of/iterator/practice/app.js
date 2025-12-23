// Basic Array Iterator


// / Example 1: Using built-in iterator on an array
const numbers = [10, 20, 30];
// const numbers = [10, 20, , 2,];

// Get the array's iterator
const iterator = numbers[Symbol.iterator]();


// Manually iterate using .next()
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// ✅ Teaches: How .next() works and when iteration ends


console.log("******************************************");


// 2. String Iterator
// Example 2: Iterating over a string

const word = "HELLO";
const stringIterator = word[Symbol.iterator]();

console.log(stringIterator.next()); // { value: 'H', done: false }
console.log(stringIterator.next()); // { value: 'E', done: false }
console.log(stringIterator.next()); // { value: 'L', done: false }
console.log(stringIterator.next()); // { value: 'L', done: false }
console.log(stringIterator.next()); // { value: 'O', done: false }
console.log(stringIterator.next()); // { value: undefined, done: true }

// ✅ Teaches: Strings are iterable too


console.log("**************************************");
// 3. Custom Iterator (Simple Numbers)

// Example 3: Creating a custom iterator

const myNumbers = {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
        let current = this.start;
        const last = this.end
        
        return {
            next() {
                if (current <= last) {
                    return {value: current++, done:false };
                } else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}


// Use for...of (internally uses iterator)
for(const num of myNumbers){
    console.log(num); // 1 2 3 4 5
    
}

// ✅ Teaches: How to implement a custom iterator


console.log("******************************************");


// 4. Infinite Iterator (Lazy Evaluation)
// Example 4: Infinite numbers iterator (lazy evaluation)

const infiniteNumbers = {
    [Symbol.iterator](){
        let num = 0;
        return {
            next(){
                num++;
                return {value: num, done: false}; // never stops by itself
            }
        }
    }
}

const iterators = infiniteNumbers[Symbol.iterator]();

console.log(iterators.next().value); // 1
console.log(iterators.next().value); // 2
console.log(iterators.next().value); // 3

// ✅ Teaches: Iterators can produce values on-demand without storing all

console.log("*********************************");
// 5. Iterator with Condition / Skip Logic
// Example 5: Custom iterator with skipping even numbers

const skipEvens = {
    start: 1,
    end: 10,
    [Symbol.iterator](){
        let current = this.start;
        const last = this.end;

        return {
            next(){
                while(current <= last){
                    const value = current++;
                    if(value % 2 !== 0) { // skip even numbers
                        return{ value, done: false}
                    }
                }

                return {value:undefined, done: true}

            }
        }

    }
}

for (const n of skipEvens) {
  console.log(n); // 1 3 5 7 9
}

// ✅ Teaches: You can add logic inside iterators (filtering, conditions)


console.log("**********************************************");


// Fibonacci Sequence with Iterator (Infinite Lazy Evaluation)
// Example 1: Fibonacci sequence using a custom iterator
const fibonacci = {
  [Symbol.iterator]() {
    let a = 0, b = 1;
    return {
      next() {
        const value = a;
        [a, b] = [b, a + b]; // update a and b for next number
        return { value, done: false }; // infinite sequence
      }
    };
  }
};

const fibIterator = fibonacci[Symbol.iterator]();
console.log(fibIterator.next().value); // 0
console.log(fibIterator.next().value); // 1
console.log(fibIterator.next().value); // 1
console.log(fibIterator.next().value); // 2
console.log(fibIterator.next().value); // 3

// ✅ Teaches: Infinite lazy iterator, on-demand calculation

console.log("**********************************");

// 2. Iterable Object with Custom Logic

// Example 2: Custom iterable object (skip multiples of 3)

const skipMultiplesOf3 = {
    start: 1,
    end: 10,
    [Symbol.iterator](){
        let current = this.start;
        const last = this.end;

        return {
            next() {
                while(current <= last){
                    const value = current++;
                    if(value % 3 !==0) { // skip multiples of 3
                        return {value, done: false}
                    }
                }

                return {value: undefined, done: true}

            }
        }

        
    }
}


for (const num of skipMultiplesOf3) {
  console.log(num); // 1 2 4 5 7 8 10
}

// ✅ Teaches: Filtering logic inside iterators

console.log("**********************************************");
// 3. Generator Function as Iterator (Elegant and Powerful)

// Example 3: Using generator function for iteration

function * powerOfTwo(limit){
    let n = 1;
    while(n <= limit){
        yield 2 ** n // yields  2^1, 2^2, 2^3 ...
        n++;
    }
}

for(const val of powerOfTwo(5)){
    console.log(val); // 2 4 8 16 32
}

// ✅ Teaches: Generators are simple way to create iterators

console.log("****************************************");
// Map/Set Custom Iterator Use
// Example 4: Iterating a Map with destructuring

const students = new Map([
    ["Alice", 89],
    ["Meer", 76],
    ["Khan", 87],
])

// Using for...of with destructuring
for (const [name, score] of students) {
  console.log(`${name} scored ${score}`);
}
// Output: Alice scored 89 ...
// ✅ Teaches: Map is iterable, destructure in for...of

console.log("********************************");
// Iterator with Stop Condition (Advanced Control)

// Example 5: Iterator that stops when a condition is met
const number = {
  start: 1,
  end: 100,
  [Symbol.iterator]() {
    let current = this.start;
    const last = this.end;
    return {
      next() {
        if (current <= last) {
          const value = current++;
          if (value > 10) return { value: undefined, done: true }; // stop early
          return { value, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const n of number) {
  console.log(n); // 1 2 3 ... 10
}

// ✅ Teaches: Stop condition inside iterator, controlling iteration dynamically



/*
Iterators are always used with for...of.

for...in is for object keys, not for iterators.

If you implement [Symbol.iterator](), you must use for...of to iterate values.

Remember: for...of = values (iterator), for...in = keys (object).

*/

