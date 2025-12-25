// // Qestions list 

// time complixity O(n)
// // 1. Print Numbers from 1 to N 
// // for(let i = 1; i <=5; i++){
// //     console.log(i);
// // }

// // // or 
// // for(let i = 1; i < 6; i++){
// //     console.log(i);  
// // }
// // // or 
// // for(let i = 0+1; i < 6; i++){
// // console.log(i);
// // }

// // or 
// // const num = 5;
// // for(let i = 1; i <= num; i++){
// //     console.log(i);
// // }

// // const user = +prompt("Enter a number: "); // using + to convert into number
// // const user = parseInt(prompt("Enter a number: "));
// // for(let i = 1; i <= user; i++){
// //     console.log(i);
// // }


// console.log("********************************");


// // Print Numbers from N to 1 without changing the loop condition of above question
// let num = 100;
// for(let i = 1; i <= num; i++){
//     // console.log(num - i ); 
//     console.log(num - i + 1); 
//     // console.log(i - num); // values in negative 
// }

// console.log("*************************************");



// // Print All Even Numbers from 1 to N

// const problem3 = 10;

// for(let i = 1; i <= problem3; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
    
// }


// console.log("*********************************");

// Sum of First N Natural Numbers

// console.log("********************************");

// const problem4b = 10;
// let sums = 0;

// for(let i = 1; i <= problem4b; i++){
//     sums += i;
    
// }

// console.log(sums)



console.log("*********************************************");



//5:  Product (Factorial) of N

// for factorial also that need solution 
console.time('default');   // start timer

// const product = 100000n;
const product = 10n;
let sum1 = 1n;

for(let i = 1n; i <= product; i++){
    sum1 *= i;
    
}

console.log(sum1)
console.timeEnd('default'); // end timer





console.log("****************************************");
// console.timeEnd('default'); // start timer
//6. Sum of All Even Numbers up to N

const even = 10n;
let evenSum = 0n;

for(let i = 1n; i <= even; i++){
    if(i % 2n === 0n){
        evenSum += i;
    }
    
}

console.log(evenSum)
// console.timeEnd('default'); // end timer


console.log("********************************");
// Print Squares of Numbers from 1 to N

const square = 10n;

for(let i = 1n; i <= square; i++){
    // console.log(i ** 2n);
    console.log(i * i);
    // console.log(Math.pow(i, 2));// bigint is not sued on here.
    
    
}

