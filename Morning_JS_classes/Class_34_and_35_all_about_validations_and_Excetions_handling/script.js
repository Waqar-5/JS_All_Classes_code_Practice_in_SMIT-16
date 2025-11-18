// simple ways 

// function checkForSelection(){
//     if (document.getElementById("states").selectedIndex === 0){
//         alert("Please select a state.")
//         return false;
//     }
    
// }



// when user clicks submit button without selecting a state from dropdown, that will trigger an alert and show focus on selectiing option.
// function checkForSelection(selectId){
//     var target = document.getElementById(selectId);
    
//     if(target.selectedIndex === 0){
//         alert("Please select a state.");
//         console.log(target.selectedIndex);
//         target.focus();
//         return false;
//     }
//     return true;
//     // or 
//     // return alert("Thank you for selecting a state.");

// }


// radios validation
// function validateRadios(){
//     var radios = document.getElementsByName("r1");
//     for(var i = 0; i < radios.length; i++){
//         if(radios[i].checked){
//             return true;
//         }
//     }
//     alert("Please check one.");
//     return false;
// }




// function validateZip(){
//     var inpVal = document.getElementById("zip").value.trim();

//     if(inpVal.length < 5){
//         alert("Please enter a 5 digit code.")
//         return false;
//     }
//     return true;
// }


// same for above with more validation
// function validateZip(){
//     var inpVal = document.getElementById("zip").value.trim();

//     if(inpVal.length !== 5){
//         alert("Enter 5 digits.")
//         return false;
//     }

//     for(var i =0; i < 5; i++){
//         if(isNaN(Number(inpVal[i]))){
//             alert("Only digits Allowed.");
//             return false;
//         }
//     }

//     return true;

// }


// same using regex
// function validateZip(){
//     var v = document.getElementById("zip").value.trim();
//     var regex = /^\d{5}$/;

//     if(!regex.test(v)){
//         alert("Please enter exactly 5 digits.")
//         return false;
//     }
//     return true;
// }



// function validatePassword(password){
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

//     return passwordRegex.test(password);
// }

// document.write(validatePassword("Waqar1@ss")); // true
// document.write(validatePassword("12345")); // false



// check empty string

// function validateEmail(){
//     var email = document.getElementById("email").value.trim();

//     if(email === ""){
//         alert("Email cannot be empty.");
//         return false;
//     }
//     return true;
// }



// check position of @

// function validateEmail(){
//     var email = document.getElementById("email").value.trim();
//     var at = email.indexOf("@");
//     if(at < 1 || email.length - 5){
//         alert("Invalid postion of @ symbol.");
//         return false;
//     }
//     return true;
// }


// check Dot (.) after
// function validateEmail(){
//     var email = document.getElementById("email").value.trim();

//     var at = email.indexOf("@");
//     var dot = email.indexOf(".");

//     if(dot - at < 2 || dor > email.length - 3){
//         alert("Invalid position of dot (.)");
//         return false;
//     }
//     return true;
// }



// function validateEmail(){

// var email = document.getElementById("email").value.trim();


// var firstAt = email.indexOf("@");
// var lastAt = email.lastIndexOf("@");



// if(firstAt === -1 || firstAt !== lastAt){
//   alert("Email must contain exactly one @!");
//   return false;
// }

// return true;

// }


// function validateEmail(){
//   var email = document.getElementById("email").value.trim();


//   var regex = /^\S+@\S+\.\S{2,4}$/;

//   if(!regex.test(email)){
//     alert("Please enter a valid email");
//     return false;
//   }

//   return true;


// }


// function validateEmail(){
//   var email = document.getElementById("email").value.trim();


//   var regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//   if(!regex.test(email)){
//     alert("Please enter a valid email");
//     return false;
//   }

//   return true;


// }




// Exception Handling using try...catch...finally..throw

// function greetWorld(){
//     var greeting = "Hello, World!";
//     aler(greeting); // here is a typo error in alert
// }

// greetWorld();


// syntax try ... catch
// try {
    // code which may throw an error or runs
// }

// catch (error) {
    // code to handle the error or catch the error
// }


// function greetWorld(){
//     try {
//         var greeting = "Hello, World!";
//         aler(greeting); // here is a typo error in alert
//     }
//     catch (error) {
//         // console.log("An error occurred: " + error.message);
//         alert("An error occurred: " + error.message);
//     }
// }


// function greetWorld(){

// try {
//     console.log("Starting code...");

//     let x = 10;
//     let y = z + 5

//     console.log("This line will not run!");
    
// } catch (error) {
//     console.log("An error occurred: " + error.message);
//     // alert("An error occurred: " + error);
// }
// }


// try {
//     let num  = 10;
//     console.log(num / 0); // no error
    
// } catch (error) {
//     // console.log("An error occurred: " + error.message);
//     console.log("An error occurred: " + error);
// } finally {
//     console.log("Finally Block runs in any situation");
    
// }



// try {
//     console.log(a + 4); // ReferenceError: a is not defined
    
// } catch (error) {
//     console.log("Error Type: " + error.name);
//     console.log("Error Type: " + error.message);
    
// }


// function divideNumbers(a, b){
//     try {
//         if(isNaN(a) || isNaN(b)){
//             throw "Both arguments must be numbers.";
//         }
//         console.log(a / b);
        
//     } catch (error) {
//         console.log("Error: " + error);
// }

// }

// divideNumbers(10, "a"); // Error: Both arguments must be numbers.
// divideNumbers(20, 4); // 5
// divideNumbers(15, 0); // Infinity
// divideNumbers("x", 5); // Error: Both arguments must be numbers.
// divideNumbers(30, 3); // 10

// Throw is used to create custom errors.


try {
  var age = 121;
  if(age < 18){
    throw "Underage"
  }
  console.log("allowed!");
  
} catch (error) {
  console.log("Error: " + error);
  
} finally {
  console.log("Age verification completed.");   
}