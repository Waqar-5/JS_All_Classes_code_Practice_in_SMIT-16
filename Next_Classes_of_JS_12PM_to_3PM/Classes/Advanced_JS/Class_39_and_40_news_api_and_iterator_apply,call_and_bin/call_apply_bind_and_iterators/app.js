const person = {
    firstName: "ABC",
    lastName: "DEF",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}


console.log("FullName ==> ", person.fullName());


const person1 = {
  firstName: "ABC",
  lastName: "DEF",
}

const person2 = {
  firstName: "RST",
  lastName: "XYZ",
}

const persons = {
  fullName: function (a, b) {
    return `${a}, ${this.firstName} ${this.lastName}. ${b}`
  }
}


// // calls substituting another object in the current object.
console.log(persons.fullName.call(person1, "Hello", "How are you?"));
console.log(persons.fullName.call(person2, "Hello", "How are you?"));




// apply
console.log(persons.fullName.apply(person1, ["Hello", "How are you?"]));
console.log(persons.fullName.apply(person2, ["Hello", "How are you?"]));


// // console.log(Math.max(2, 4, 5, 1))
// // console.log(Math.max([2, 4, 5, 1]))

// // console.log(Math.max.apply(null, [2, 4, 5, 1]));


const greetings = function (a, b){
    return `${a}, ${this.firstName} ${this.lastName}, ${b}`
}

const bound = greetings.bind(person1);

console.log("output ==>", bound("Hello", "How are you?"));


// ============ EVENT LOOP =============
console.log("Starting running");

setTimeout(() =>{
    console.log("Running in setTimeout");
}, 0)


Promise.resolve().then(()=>{
    console.log("Running in Promise1");
    Promise.resolve().then(()=>{
        console.log("Running in Promise2");
        Promise.resolve().then(()=>{
            console.log("Running in Promsie3");
            Promise.resolve().then(()=>{
                console.log("Running in Promise4");
                
            })
        })
    })
    
// // Promise.resolve().then(() => {
// //   console.log("running in Promise 2");
// // })
})

setTimeout(() => {
    console.log("running in setTimeOut 2");
    
}, 0);

console.log("Ending running");




console.log("Starting running");

// ---------- setTimeout callbacks ----------
function timeout1() {
    console.log("Running in setTimeout 1");
}

function timeout2() {
    console.log("Running in setTimeout 2");
}

// ---------- Promise callbacks ----------
function promise1() {
    console.log("Running in Promise1");
    Promise.resolve().then(promise2);
}

function promise2() {
    console.log("Running in Promise2");
    Promise.resolve().then(promise3);
}

function promise3() {
    console.log("Running in Promise3");
    Promise.resolve().then(promise4);
}

function promise4() {
    console.log("Running in Promise4");
}

// Schedule setTimeouts (macro-task)
setTimeout(timeout1, 0);
setTimeout(timeout2, 0);

// Schedule Promise (micro-task)
Promise.resolve().then(promise1);

console.log("Ending running");



console.log("**************************************");
// iterator
function makeRangIterator(start = 0, end = Infinity, step = 1){
    let nextIndex = start;
    let iteratorCount = 0;

    const rangeInterator = {
        next(){
            let result;
            if(nextIndex < end){
                result = {value: nextIndex, done: false};
                nextIndex += step;
                iteratorCount++;
                return result
            }
            return {value: iteratorCount, done: true};
        },
    };
    return rangeInterator;
}

const iter = makeRangIterator(1, 10, 2)

// let result = iter.next()

console.log("result ==>", iter.next());
console.log("result ==>", iter.next());
console.log("result ==>", iter.next());
console.log("result ==>", iter.next());
console.log("result ==>", iter.next());
console.log("result ==>", iter.next());




