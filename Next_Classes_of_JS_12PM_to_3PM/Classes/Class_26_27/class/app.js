// document.body.innerHTML = "Waqar"
// document.innerHTML = "Hello World"
// var content = document.getElementById("content")
// content.innerText = "Good"



// console.log("document ==> ", document.body);


var sum = 0;
// for(var i = 1; i < 10; i += 2){ // i = i + 2, 
for(var i = 1; i < 10; i++){ // i = i + 2, 
    sum += i
}
console.log("Sum ==>", sum);



// var a;
// console.log(a);


// var x = 1;
// function test() {
//   console.log(x);
//   var x = 2;
// }


// test();

// function test(a) {
//   return a * 2
// }

// console.log(test());

// let a;
// console.log(a);

// var obj = {
//   property/key: value,
// }




var obj ={
    name: "Meer",
    age: 20,
    fatherName: "xyz",
    getDetails: function(){
        return obj.name
    }
} 

obj.fatherName = "abc";
var currentTime = new Date();

obj.getDetails = function(){
    return obj.fatherName
}

console.log("CurrentMonth ==>", currentTime.getMonth());

console.log("obj ==>", obj.getDetails());



var obj = {
  name: "Hamza",
  fatherName: "abc",
  age: 18,
  isEligible: false,
  hobbies: ["game", "football"],
  getDetails: function () {
    return this.name + ", " + this.fatherName
  },
}

// obj.schools.schoolName = "SMIT";
obj.getDetails.schoolName = "SMIT";

console.log("obj ==>", obj.getDetails.schoolName);


// var obj2 = {
//   name: "Bilal",
//   fatherName: "xyz",
//   getDetails: function () {
//     return obj.name + ", " + obj.fatherName
//   }
// }

// console.log("getDetails ==>", obj);
// console.log("getDetails ==>", obj2.getDetails());


// console.log("this ==>", this);



