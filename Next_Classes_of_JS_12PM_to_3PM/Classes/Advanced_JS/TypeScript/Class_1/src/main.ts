const add = (num1: number, num2:number) => {
    return num1 + num2;
}

console.log(add(2,3));


const num1:number = 12
const num2:number = 22
console.log( "Sum of two numbers: " , num1 + num2);

const text:string = "Hello, TypeScript!";
console.log(`String Value: ${text}`);

const isActive:boolean = true;
console.log( "Boolean Value "+ isActive);

const numbersArray:number[] = [1, 2, 3, 4, 5];
console.log("Array: " + numbersArray);

const firstName: string = "Waqar"
const secondName: string = "Ali"
const fullName: string = `${firstName} ${secondName}`
// const fullName: string = FirstName + " " + secondName
console.log("FullName: " + fullName);



const age: number = 25;
const greeting: string = `My name is ${fullName} and I am ${age} years old.`;
console.log(greeting);