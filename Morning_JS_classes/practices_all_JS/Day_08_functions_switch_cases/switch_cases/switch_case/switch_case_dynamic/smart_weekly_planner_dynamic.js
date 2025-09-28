// Load previous inputs from localStorage
window.onload = function() {
    if(localStorage.getItem("lastDay")) {
        document.getElementById("dayInput").value = localStorage.getItem("lastDay");
    }
    if(localStorage.getItem("lastUser")) {
        document.getElementById("userType").value = localStorage.getItem("lastUser");
    }
};

function planDay() {
    let day = document.getElementById("dayInput").value.trim().toLowerCase();
    let user = document.getElementById("userType").value;
    let output = document.getElementById("output");

    // Save inputs for future
    localStorage.setItem("lastDay", document.getElementById("dayInput").value);
    localStorage.setItem("lastUser", user);

    let dayType = "";

    // Switch + fall-through for DRY
    switch(day) {
        case "saturday":
        case "sunday":
            dayType = "Weekend";
            break;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            dayType = "Weekday";
            break;
        default:
            output.innerText = "⚠️ Invalid day!";
            output.style.background = "rgba(255,0,0,0.5)";
            return;
    }

    // Plan logic using if-else
    let plan = "";
    let bgColor = "";
    if(dayType === "Weekend" && user === "student") {
        plan = "Relax, study a bit, and have fun! 🎉";
        bgColor = "rgba(255, 215, 0, 0.4)"; // golden
    } else if(dayType === "Weekend" && user === "worker") {
        plan = "Relax and spend time with family! 🏡";
        bgColor = "rgba(34, 139, 34, 0.4)"; // green
    } else if(dayType === "Weekday" && user === "student") {
        plan = "Go to school/college and complete assignments! 📚";
        bgColor = "rgba(70,130,180,0.4)"; // blue
    } else if(dayType === "Weekday" && user === "worker") {
        plan = "Go to work and finish your tasks! 💼";
        bgColor = "rgba(255,99,71,0.4)"; // tomato
    } else {
        plan = "Unknown user type. Enjoy your day! 😊";
        bgColor = "rgba(128,128,128,0.4)";
    }

    // Dynamic output
    output.innerText = `It's a ${dayType}. ${plan}`;
    output.style.background = bgColor;
    document.body.style.background = dayType === "Weekend" ? "linear-gradient(to right, #fbc2eb, #a6c1ee)" 
                                                             : "linear-gradient(to right, #6a11cb, #2575fc)";
}
