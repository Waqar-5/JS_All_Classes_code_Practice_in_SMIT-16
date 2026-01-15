import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.esm.js";

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  import { getAuth,  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD1bsR3L9sYaeluJoEHv1ZEkzRmcAPNp8o",
    authDomain: "day1auth-1b951.firebaseapp.com",
    projectId: "day1auth-1b951",
    storageBucket: "day1auth-1b951.firebasestorage.app",
    messagingSenderId: "528712374466",
    appId: "1:528712374466:web:0ee9dd669304d6b9c4035b",
    measurementId: "G-R80HE52CKR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);





// const signupBtn = document.getElementById("signUp")
// signupBtn.addEventListener("click", ()=>{
// const semail = document.getElementById("semail").value
// const spassword = document.getElementById("spassword").value
// createUserWithEmailAndPassword(auth, semail, spassword)


// // signup
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//     console.log(user);
    
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.log(errorMessage)
//   });
// })

// // createUserWithEmailAndPassword()




// // login page

//   const login = document.getElementById("login")

//   login.addEventListener("click", ()=>{
// const lemail = document.getElementById("lemail").value
// const lpassword = document.getElementById("lpassword").value
//   signInWithEmailAndPassword(auth, lemail, lpassword)


//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//      console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//       console.log(errorMessage)
//   });


//   })
  



// Forms
const signupDiv = document.querySelector(".signup");
const loginDiv = document.querySelector(".login");

// Toggle between signup and login
document.getElementById("goToLogin").addEventListener("click", (e)=>{
    e.preventDefault();
    signupDiv.style.display = "none";
    loginDiv.style.display = "flex";
});

document.getElementById("goToSignup").addEventListener("click", (e)=>{
    e.preventDefault();
    loginDiv.style.display = "none";
    signupDiv.style.display = "flex";
});

// SIGNUP
document.getElementById("signUp").addEventListener("click", ()=>{
    const email = document.getElementById("semail").value;
    const password = document.getElementById("spassword").value;

    if(email === "" || password === ""){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please enter email and password'
        });
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        Swal.fire({
            icon: 'success',
            title: 'Signed Up!',
            text: 'Account created successfully!',
            timer: 2000,
            showConfirmButton: false
        });
        // Switch to login after signup
        setTimeout(()=>{
            signupDiv.style.display = "none";
            loginDiv.style.display = "flex";
        }, 2000);
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Signup Failed',
            text: error.message
        });
    });
});

// // LOGIN
// document.getElementById("login").addEventListener("click", ()=>{
//     const email = document.getElementById("lemail").value;
//     const password = document.getElementById("lpassword").value;

//     if(email === "" || password === ""){
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: 'Please enter email and password'
//         });
//         return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         Swal.fire({
//             icon: 'success',
//             title: 'Logged In!',
//             text: 'Welcome back!',
//             timer: 2000,
//             showConfirmButton: false
//         });
//     })
//     .catch((error) => {
//         Swal.fire({
//             icon: 'error',
//             title: 'Login Failed',
//             text: 'Invalid email or password'
//         });
//     });
// });



// // LOGIN
// document.getElementById("login").addEventListener("click", () => {
//     const email = document.getElementById("lemail").value;
//     const password = document.getElementById("lpassword").value;

//     if (email === "" || password === "") {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: 'Please enter email and password'
//         });
//         return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Logged In!',
//                 text: 'Welcome back!',
//                 timer: 2000,
//                 showConfirmButton: false
//             });

//             // Redirect to portfolio after 2 seconds (matching Swal timer)
//             setTimeout(() => {
//                 window.location.href = 'https://well-portfolio-of-waqar.netlify.app/';
//             }, 1000);
//         })
//         .catch((error) => {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Login Failed',
//                 text: 'Invalid email or password'
//             });
//         });
// });


// // LOGIN
// document.getElementById("login").addEventListener("click", () => {
//     const email = document.getElementById("lemail").value;
//     const password = document.getElementById("lpassword").value;

//     if (email === "" || password === "") {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: 'Please enter email and password',
//             confirmButtonColor: '#f56a6a'
//         });
//         return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             Swal.fire({
//                 title: '🎉 Welcome Back!',
//                 html: `<h3>Login Successful</h3><p>Welcome to my portfolio website</p>`,
//                 icon: 'success',
//                 showConfirmButton: true,
//                 confirmButtonText: 'Go to Portfolio',
//                 confirmButtonColor: '#f56a6a',
//                 backdrop: `
//                     rgba(0,0,123,0.4)
//                     url("https://media.giphy.com/media/111ebonMs90YLu/giphy.gif")
//                     center top
//                     no-repeat
//                 `
//             }).then(() => {
//                 // Redirect after clicking confirm button
//                 window.location.href = 'https://well-portfolio-of-waqar.netlify.app/';
//             });
//         })
//         .catch((error) => {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Login Failed',
//                 text: 'Invalid email or password',
//                 confirmButtonColor: '#f56a6a'
//             });
//         });
// });



// LOGIN
document.getElementById("login").addEventListener("click", () => {
    const email = document.getElementById("lemail").value;
    const password = document.getElementById("lpassword").value;

    if (email === "" || password === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please enter email and password',
            confirmButtonColor: '#f56a6a'
        });
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            Swal.fire({
                title: '🎉 Welcome Back!',
                html: `<h3>Login Successful</h3><p>Welcome to my portfolio website</p>`,
                icon: 'success',
                showCancelButton: true,              // <-- Show Cancel button
                confirmButtonText: 'Go to Portfolio',
                cancelButtonText: 'Stay Here',       // <-- Cancel text
                confirmButtonColor: '#f56a6a',
                cancelButtonColor: '#999999',
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://media.giphy.com/media/111ebonMs90YLu/giphy.gif")
                    center top
                    no-repeat
                `
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect after clicking confirm button
                    window.location.href = 'https://well-portfolio-of-waqar.netlify.app/';
                } 
                // else do nothing → user stays on login page
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password',
                confirmButtonColor: '#f56a6a'
            });
        });
});
