import { auth, sendEmailVerification, signInWithEmailAndPassword , signOut } from "./firebase.js";


document.getElementById("loginBtn").addEventListener("click", async ()=>{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = auth.currentUser;

    if(!user){
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            console.log("Login! Successfuly!", userCredential.user);

            alert("user logged in: " + userCredential.user.email)
        } catch{
            console.log("Error: " , error.message);
    alert(error.message)    
        }
    } else{
        alert("A User is Already logged in!")
    }

    if(user){
        try{
            await sendEmailVerification(user);
            alert("Verification email sent to " + user.email);
        } catch(error){
            alert(error.message)
        }
    }

})


document.getElementById("logoutBtn").addEventListener("click", async()=>{
    try{
        await signOut(auth);
        alert("Use logged out Successfully!")
    } catch(error){
        console.log("Error: ", error.message)
        alert(error.message);
    }
})









// document.getElementById("sign").addEventListener("click", async () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Simple validation to ensure both fields are filled
//     if (!email || !password) {
//         alert("Please fill in both email and password.");
//         return;
//     }

//     try {
//         // Use signInWithEmailAndPassword for login
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         console.log("Login successful!", userCredential.user);
//         alert("User Logged In: " + userCredential.user.email);
//     } catch (error) {
//         console.error("Error: ", error.message);
//         alert(error.message);  // Show the error message to the user
//     }
// });

// // Toggle password visibility
// document.getElementById("togglePassword").addEventListener("change", function() {
//     const passwordField = document.getElementById("password");
//     if (this.checked) {
//         passwordField.type = "text"; // Show password
//     } else {
//         passwordField.type = "password"; // Hide password
//     }
// });
