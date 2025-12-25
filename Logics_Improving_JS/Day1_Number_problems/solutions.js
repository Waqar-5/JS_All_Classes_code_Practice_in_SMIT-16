// // Assignment that print number fom given user using DOM
// // let add = document.getElementById("add")
// // let numUse = document.getElementById("numUse")

// // add.addEventListener("click", function(){
// //     const value = Number(numUse.value); // get the value on click
// //     for(let i = 1; i <= value; i++){
// //         console.log(i);  
// //     }
// // })

// // best solution
// // optimized solution
// // time complixity (this is constant time complixity) O(1)
// // It takes  0.1279296875 ms
// console.time('default');   // start timer

// const problem4 = 1000000000;
// let sum = (problem4 * (problem4 + 1)) / 2

// console.log(sum)
// console.timeEnd('default'); // end timer


// its time complxity is O(n) increase by number
// // other solution using bigint for biggest number

// // for factorial also that need solution 
// console.time('default');   // start timer

// const problem4b = 1000000000n;
// // const problem4 = 10;
// let sums = 0n;

// for(let i = 1n; i <= problem4b; i++){
//     sums += i;
    
// }

// console.log(sums)
// console.timeEnd('default'); // end timer




// factorial using DOM

// const product = document.getElementById("product")
// const factorial = document.getElementById("factorial")

// product.addEventListener("click", ()=>{
//     let values = Number(factorial.value)
//     let sum = 1
//     for(let i = 1; i <= values; i++){
//         sum *= i
//         // console.log(i);
        
//     }
//     console.log(sum);
// })



