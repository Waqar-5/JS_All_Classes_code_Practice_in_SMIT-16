// console.log("JS Connected!");


console.log("start...");

function sayHi(){
    console.log("Hi");
}

sayHi()

console.log("End...");


test();

function test(){
    console.log("Running...");
}


// console.log(a);


// var a = 5
// console.log(a);


// console.log(x);
// let x = 10;



// why called function first-class
// 1. Function ko variable mein store karna

var greet = function(){
    console.log("Hello...");
}

greet();


// 2.function ko array mein rakhna
var arr = [
    function(){console.log(("A"))},
    function(){console.log(("B"));
    }
]

arr[0]()
arr[1]()
// console.log(arr);
// console.log(arr[1]);


// 3. Function object property ke tor pr
var obj = {
    sayHi:function(){
        console.log("Hi");
    }
}

obj.sayHi();


//4. Function ko argument pass karna (Callback)

function execute(fn){
    fn();
}

execute(function(){
    console.log("Run");
});



// 5. Function ko return karna
function outer(){
    return function(){
        console.log("Inner");
    };
};

var x = outer();
x();


// Function ko another variable mein copy karna.

function hello(){
    console.log("Hello");
};

var copy = hello


copy();


// 7. Dynamic Assignment 

var func;
// if(false){
if(true){
    func = function(){
        console.log("Yes");
    }
}


func()


console.log("********************************************");



// Higher-Order Function ( HOF )


// function argument accept karna

function doSomething(callback){
    callback()
}

doSomething(function(){
    console.log("Callback Run");
   
})





// function return karta hai.

function outer(){
  return function(){
    console.log("Returned Function run");
    
  }
}

var fn = outer();

fn();




function master(cb){
    return function(){
        cb();
    }
}

var run = master(function(){
    console.log("Work");
});



function repeat(times, fn){
    for(var i = 0; i < times; i++){
        fn()
    }
}


repeat(3, function(){
    console.log("Hi");
})


function customFilter(arr, test){

    var res = [];
    for(var i = 0; i < arr.length; i++){
        if(test(arr[i])){
            res.push(arr[i])
        }
    }

    return res;
}


console.log(customFilter([1, 2, 3, 4], function(n){
    // return n > 1
    return n < 4
}));



function customMap(arr, process){
    var output = [];
    for(var i = 0; i < arr.length; i++){
        output.push(process(arr[i]))
    }
    return output;
}

console.log(customMap([1, 2, 3, 4, 5, 6, 7, 8, 9], function(x){
    return x * 10
}));


console.log("********************************************");


// Call back Function

let arrs = [1, 2, 3];

arrs.forEach(function(item, index){
    console.log(index, item);
    
})


function repeat(times, callback){
    for(var i = 0; i < times; i++){
        callback(i)
    }
}


repeat(10, function(i){
    console.log("run", i);
})


function callAndReturn(cb){
    cb();
    return "OuterReturn"
}


let result = callAndReturn(function(){
    return "InnerReturn";
})

console.log(result);


console.log("********************************************");


// call arguments ko alag alag receive karta hai.

// apply arguments ko array ki form mein receive karta hai.

// bind ek naya function return karta hai jismein "this" permanently
// bind hota hai, aur optionally kuch initial arguments pre-set ho sakte hai.



// call

function say(){
    console.log(this.name);
}

const obj1 = {
    name: "Waqar"
}

say.call(obj1)
// say(obj1[name])



function greets(greeting, punction){
    console.log(greeting + ", " + this.name + punction);
};

const user = {
    name: "Asad"
}
greets.call(user, "hello", "!")


const obj2 = {
    value: 10,
    getValue: function(){
        return this.value
    }
};
const objects = {
    value:42
}

console.log(obj2.getValue.call(objects));


// apply 
function sum(a, b, c){
    return a + b + c;
}

const arr2 = [1, 3, 6];

console.log(sum.apply(null, arr2));


const numbers = [5, 6, 2, 9];
// console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));





// bind
function sayHello(){
    console.log("Hello, " + this.name);
}

const person = {
    name: "Ameer"
}

const bound = sayHello.bind(person);

bound()

sayHello()


function add(a,b){
  return a  + b ;
}

const addFive = add.bind(null, 5 , 40)

console.log(addFive());