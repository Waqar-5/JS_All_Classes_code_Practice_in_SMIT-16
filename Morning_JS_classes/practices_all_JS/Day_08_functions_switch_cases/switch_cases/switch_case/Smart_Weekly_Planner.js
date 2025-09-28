function planDay(){
    // get user inputs
    let day = document.getElementById("dayInput").value.trim().toLowerCase();
    let user = document.getElementById("userType").value;
    let output = document.getElementById("output");


    let dayType = "";

    // Switch + Fall-through for DRY (weekends vs weekdays)
    switch(day) {
        case "saturday":
        case "sunday":
            dayType = "weekend";
            break;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "friday":
            dayType = "weekday";
            break;
        default:
            output.innerHTML = "⚠️ Invalid day!"
            return;
    }


    //     // If-Else for user-specific plan (complex conditions)
    let plan = "";
    if (dayType === "Weekend" && user === "student"){
        plan = "Relax, study a bit, and have fun! 🎉";
    } else if (dayType === "Weekend" && user === "worker"){
        plan = "Relax and spend time with family! 🏡";
    } else if (dayType === "Weekday" && user === "student"){
        plan = "Go to school/college and complete assignments! 📚";
    } else if(dayType === "Weekday" && user === "worker"){
        plan = "Go to work and finish your tasks! 💼";
    } else{
        plan = "Unknown user type. Enjoy your day! 😊";
    }


    //  display output
    output.innerText = `It's a ${dayType}. ${plan}`;
}
