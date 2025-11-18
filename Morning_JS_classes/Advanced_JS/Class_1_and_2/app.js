
// localStorage and sessionStorage  --> Browser Storage/ client-side

// setItem(Key,Value) --> data store karta hai. 

// getItem(key) --> value lao , agar key nahin hai tho null aayega.

// removeItem(key) --> specific key delete karo.

// clear() -- saara storage clear kardo.

// length aur key(i) -- iterate karne mein madad.


// function signUp(){
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
    
//     if(name === "" || email === "" || password === ""){
//         alert("Please fill all the fields!");
//     } else {
//         var user = {
//             name: name,
//             email: email,
//             password: password
//         };

//         localStorage.setItem("userDate", JSON.stringify(user));
//         alert("Sign up successful!");
//     }
// }


// function login(){
//     var loginEmail = document.getElementById("loginEmail").value;
//     var loginPassword = document.getElementById("loginPassword").value;
//     var data = localStorage.getItem("userDate");

//     if(data === null){
//         alert("No user found, please sign up First")
//     } else {
//         var user = JSON.parse(data);
        
//         if(user.email === loginEmail){
//             if(user.password === loginPassword){
//                 alert("Login Successful! Welcome " + user.name);
//             } else {
//                 alert("Incorrect Password!");
//             }
//         } else {
//             alert("Email not found!");
//         }
//     }

// }



// function signUp() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if (name === "" || email === "" || password === "") {
//         alert("Please fill all the fields!");
//     } else {
//         var user = {
//             name: name,
//             email: email,
//             password: password
//         };

//         localStorage.setItem("userDate", JSON.stringify(user));
//         alert("Sign up successful!");

//         // Hide signup page and show login page
//         document.getElementById("signUpPage").classList.add("hidden");
//         document.getElementById("loginPage").classList.remove("hidden");
//     }
// }

// function login() {
//     var loginEmail = document.getElementById("loginEmail").value;
//     var loginPassword = document.getElementById("loginPassword").value;
//     var data = localStorage.getItem("userDate");

//     if (data === null) {
//         alert("No user found, please sign up first");
//         return;
//     }

//     var user = JSON.parse(data);

//     if (user.email === loginEmail) {
//         if (user.password === loginPassword) {
//             alert("Login Successful! Welcome " + user.name);
//         } else {
//             alert("Incorrect Password!");
//         }
//     } else {
//         alert("Email not found!");
//     }
// }








// function signUp() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     if (name === "" || email === "" || password === "") {
//         alert("Please fill all the fields!");
//         return;
//     }

//     let user = { name, email, password };
//     localStorage.setItem("userDate", JSON.stringify(user));

//     alert("Sign up successful!");

//     // Switch pages
//     document.getElementById("signUpPage").classList.add("hidden");
//     document.getElementById("loginPage").classList.remove("hidden");
// }
// function login() {
//     let loginEmail = document.getElementById("loginEmail").value;
//     let loginPassword = document.getElementById("loginPassword").value;

//     let data = localStorage.getItem("userDate");

//     // If no user exists in storage
//     if (!data) {
//         alert("No user found, please sign up first!");

//         // Redirect to signup page
//         document.getElementById("loginPage").classList.add("hidden");
//         document.getElementById("signUpPage").classList.remove("hidden");
//         return;
//     }

//     let user = JSON.parse(data);

//     // Check email + password
//     if (user.email === loginEmail && user.password === loginPassword) {
//         alert("Welcome " + user.name + "!");
//     } else {
//         alert("User not found, please sign up first!");

//         // Redirect to signup page
//         document.getElementById("loginPage").classList.add("hidden");
//         document.getElementById("signUpPage").classList.remove("hidden");
//     }
// }




// // todo list
// var list = [];

// if(localStorage.getItem("todos") !== null){
//     list = JSON.parse(localStorage.getItem("todos"))
//     showTodos()
// }

// function addTodo(){
//     var text = document.getElementById("todoInput").value;

//     if(text === ""){
//         alert("Write something first!")
//     } else {
//         list.push(text )


//     localStorage.setItem("todos", JSON.stringify(list))

//     text = "";

//     showTodos() 
//     }
// }


// function showTodos(){
//     var ul = document.getElementById("todoList");

//     ul.innerHTML = "";

//     for(var i = 0; i < list.length; i++){
//         var li = document.createElement("li");

//         li.innerHTML = list[i] + `<button onclick="deleteTodo(${i})"> delete</button>`;

//         ul.appendChild(li)
//     }
// }


// function deleteTodo(index){
//   list.splice(index,1);

//   console.log(list);
  

//   localStorage.setItem("todos", JSON.stringify(list));

//   showTodos();
// }




// var count = sessionStorage.getItem("count");

// if(count === null){
//     count = 1
// } else{
//     count = Number(count) + 1
// }

// sessionStorage.setItem("count", count)
// document.getElementById("msg").innerHTML = "This tab visited " + count + " times.";





// localStorage.setItem("username" , "Meer");

// sessionStorage.setItem("color" , "red");


// var name = localStorage.getItem("username");

// var fav = sessionStorage.getItem("color");


// console.log(name);
// console.log(fav);

// localStorage.removeItem("username");


// localStorage.setItem("username" , "Meer");
// localStorage.setItem("batch" , "16");
// localStorage.setItem("time" , "weekend");

// // localStorage.clear();

// var count = localStorage.length;

// console.log(count);

// var firstKey = localStorage.key(0);

// console.log(firstKey);








var savedMode = localStorage.getItem("mode");

if(savedMode === "dark"){
  document.getElementById("body").classList.add("dark");
}


function toggleMode(){
  var body = document.getElementById("body");


  if(body.classList.contains("dark") === true){
    body.classList.remove("dark");
    localStorage.setItem("mode", "light")
  }else{
    body.classList.add("dark");

    localStorage.setItem("mode", "dark");

  }

}