// Day Planner with Switch + Fall-through (DRY)
// Commit: Determine day type using switch + fall-through

function dayPlanner(day){
    let type = "";
    switch(day.toLowerCase()) {
        case "saturday":
        case "sunday":
            type = "Weekend"; break;

        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            type = "Weekday";
            break;
        default:
            return "Invalid day!"
    }
    return `It's a ${type}.`;
}
console.log(dayPlanner("Saturday"));  //Output: It's a Weekend.


console.log("************************************");


// // 2️⃣ Example: Activity Suggestion with If-Else + Complex Conditions
// // Commit: Suggest activity based on day + user type
// // Commit: Suggest activity based on day + user type
// function activitySuggestion(dayType, user) {
//     if(dayType === "Weekend" && user === "student") return "Relax and study a bit! 🎉";
//     else if(dayType === "Weekend" && user === "worker") return "Family time! 🏡";
//     else if(dayType === "Weekday" && user === "student") return "Go to classes and finish homework! 📚";
//     else if(dayType === "Weekday" && user === "worker") return "Work hard! 💼";
//     else return "Unknown user type. Enjoy your day!";
// }

// console.log(activitySuggestion("Weekend", "student")); // Output: Relax and study a bit! 🎉

// 2️⃣ Example: Simple Calculator

// Commit: Perform calculation using switch-case

function calculator(a, b, operator){
    let result;
    switch(operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break
        case "/":
            result = b !== 0 ? a / b : "Error";
            break;
            default:
                result = "Invalid operator";
    }
    return result
}
console.log(calculator(8, 2, "*")); // Output: 16


console.log("*******************************************");
// 3️⃣ Example: Color Selector Based on Mood

// Commit: Select color based on mood using switch
function moodColor(mood) {
    let color;
    switch(mood.toLowerCase()) {
        case "happy": color = "yellow"; break;
        case "sad": color = "blue"; break;
        case "angry": color = "red"; break;
        case "relaxed": color = "green"; break;
        default: color = "gray";
    }
    return color;
}

console.log(moodColor("Relaxed")); // Output: green

console.log("*****************************************");
// 4️⃣ Example: Activity Suggestion Based on Day
// Commit: Suggest activity using switch + fall-through for DRY
function activity(day) {
    let suggestion;
    switch(day.toLowerCase()) {
        case "saturday":
        case "sunday":
            suggestion = "Relax or go out! 🎉"; break;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            suggestion = "Work or study hard! 💼"; break;
        default:
            suggestion = "Unknown day";
    }
    return suggestion;
}

console.log(activity("Sunday")); // Output: Relax or go out! 🎉

console.log("************************************************");


// 5️⃣ Example: Grade Checker
// Commit: Check grade using switch + true trick
function gradeChecker(score) {
    let grade;
    switch(true) { // Trick to use ranges in switch
        case (score >= 90): grade = "A+"; break;
        case (score >= 80): grade = "A"; break;
        case (score >= 70): grade = "B"; break;
        case (score >= 60): grade = "C"; break;
        case (score >= 50): grade = "D"; break;
        default: grade = "F";
    }
    return grade;
}

console.log(gradeChecker(85)); // Output: A
