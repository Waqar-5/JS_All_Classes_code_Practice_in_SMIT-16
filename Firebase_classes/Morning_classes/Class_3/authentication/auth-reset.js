import {auth, sendPasswordResetEmail} from "./firebase.js"

document.getElementById("resetBtn").addEventListener("click", async ()=>{
    const email = document.getElementById("email").value;

    try{
        await sendPasswordResetEmail(auth, email);
        alert("Paasword reset email send to " + email);
    } catch(err){
        console.log("Error:", err.message);
        alert(err.message)        
    }
})