// Advanced JS method

// map 

const nums = [1, 2, 3, 4]

const doubled = nums.map(function(n) {return n * 2})

console.log(doubled);
console.log(nums);


const users = [
    {name: "Ali", age:20},
    {name: "Meer", age: 26}
]

const names = users.map(function(u) {return u.name})

console.log(names);

const arr = ["a", "b", "c"];

const labeled = arr.map(function(v, i){
    return i + ":" + v;
})
console.log(labeled);


const scores = [40, 55, 70, 90];
const grade = scores.map(function(s){
    return s >= 60 ? "pass" : "fail";
})

console.log(grade);


const numbers = [1, 2, 3];

const result = numbers.map(function(n){return n + 1}).map(function(n){
    return n * 3
})

console.log(result);

const items = ["Apple", "Mango", "Orange", "Banana"];

const lis = items.map(function(it){
    return '<li>' + it + '</li>'
})

console.log(lis.join(''));




console.log("********************************");
console.log("All now about filters...");

const num = [1, 4, 7, 10];
const big = num.filter(function(n){
    // return n > 5
    return n > 9
    // return n < 5
    // return n < 2
})


console.log(big);


const usersInFilter = [
    {name: "Asad", active:true},
    // {name: "Ameer", active:false}
    {name: "Ameer", active:true}
];

const active = usersInFilter.filter(function(u){
    return u.active;
})

console.log(active);



console.log("*******************************************");
console.log("All about Reduce Method");
// It always takes two values and it takes 1 or by defual is 0 after return 

const arrayNum = [1, 2, 3, 4, 5];
const sum = arrayNum.reduce(function(acc, val) {
    return acc + val 
})

console.log(sum);



const numReduce = [2, 3, 4];
const product = numReduce.reduce(function(acc, val){
    return acc * val
}, 1)

console.log(product);


const nested = [[1, 2], [3, 4], [5, 6]];

const falt = nested.reduce(function(acc, arr){
    return acc.concat(arr)

}, [])
console.log(falt);



console.log("****************************");

[1, 2, 3].forEach(function(n){
    console.log(n);
    
})


const res = [];
[1, 2, 3].forEach(function(n){
    res.push(n * 2)
})

console.log(res);


const arrs = ["a", "b"];

arr.forEach(function(v, i){
    console.log(i, v);
})


const item = ["x", "y"];

let html = '';

item.forEach(function(i){
    html += '<div>' + i + '</div>';
});


console.log(html
);


const arrfind = [1, 3, 5, 7, 9];

const firstEven = arrfind.find(function(n){
    return n % 2 === 0;
})

console.log(firstEven);


const userss = [
    {id: 1},
    {id: 2},
    {id: 3}
]


const u = userss.find(function(x){
    return x.id === 2;
})

console.log(u);


console.log("**************************************");

console.log([1, 3, 5].some(function(n){
    return n % 2 === 0;
}));


console.log([1, 4, 5].some(function(n){
    return n % 2 === 0;
}));



const usersome = [
    {active: false},
    {active: true}
];

console.log(usersome.some(function(u){
    return u.active
}));



console.log("*************************************************");



// Destructuring, rest and spread opertors
const arr1 = [10, 20, 30];

const [a, b, c] = arr1;
console.log(a, b, c);



const arr2 = [1, 2, 3, 4];
const [x, , z] = arr2

console.log(x, z);


const arr3 = [5, 10];
const [a1 = 1, b1 = 2, c1 = 3] = arr3


console.log(a1, b1, c1);


let p = 1;
let q = 2;

[q, p] = [p, q];
console.log(p, q);


console.log("************************************");

// rest parameters
const arr4 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr4;
console.log(first, second, rest)



const nest = [1, [2, 3], 4];
const [one, [two, three], four] = nest;
console.log(one, two, three, four);


const userData = {
    name: "Ali", 
    age: 25
};

const {name, age} = userData;

console.log(name, age)



const u1 = {
    name1: "Khan"
}

const {name1 , city = "Karachi" } = u1;
console.log(name, city);



// spread operator array ya object ko spread karke elements/properties alag alag items bana deta hai. Ye values ko copy ya merge karne k liye use hota hai.
const an = [1, 2, 3];
const ban = [...an]
console.log(ban);
console.log(a === b);

const a2 =  [1, 2];
const b2 = [3, 4]

const all = [...a2, ...b2]
console.log(all);


 const base = [2, 3];
 const newArr = [1, ...base, 4];
 console.log(newArr);
 console.log(base)


 function sums(a, b, c){
    return a + b + c
 }

const nu = [1, 2, 3]
console.log(sums(...nu));
 

const chars = [...'hello'];
console.log(chars);


const arr5 = [{x1:1}];
const copy = [...arr5]
copy[0].x1 = 9
// console.log(copy[0].x1 = 9);

console.log(arr5[0].x1);


// spread creates shallow copies, nested objects remain same reference.
// order matters for objects, later spreads overwrite previous properties


console.log("Start: ");

function sayHi(){
    console.log("Hi");
}

sayHi();
console.log("End");


test();

function test(){
    console.log("Running");
    
}


// console.log(a);

// var a = 5;


// let x = 10;
// console.log(x);


console.log("start");

setTimeout(function(){
  console.log("Timeout");  
}, 0);

console.l

