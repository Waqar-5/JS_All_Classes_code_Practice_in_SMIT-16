import { auth } from "./firebase.js";

document.getElementById("checkBtn").addEventListener("click", ()=>{
    const user = auth.currentUser;
    if(user){
        alert("Current user: ", user.email)
    } else{
        alert("No user Logged in!")
    }
})