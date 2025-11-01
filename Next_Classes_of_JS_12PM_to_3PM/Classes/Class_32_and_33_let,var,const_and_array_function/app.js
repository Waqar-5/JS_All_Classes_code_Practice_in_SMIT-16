var btn1 = document.getElementById("btn1");
var varPara = document.getElementById("var");


btn1.addEventListener("click", function(){
     if (varPara.innerText === ""){
    var myVar = `
📝 Function-scoped (limited to the function)
♻️ Can be redeclared in the same scope
✏️ Can be updated/reassigned
📌 Hoisted (initialized with undefined)
🚫 No block scope
🌐 Global object property if declared globally
⚠️ Can lead to bugs due to hoisting
🕰️ Legacy usage; prefer let/const
    `;

    varPara.innerText = myVar;


     } else {
        varPara.innerText = "";
     }
   
})


var btn2 = document.getElementById("btn2");
var varPara2 = document.getElementById("let");

btn2.addEventListener("click", function() {
    if (varPara2.innerText === ""){
    var letPoints = `
🔹 Block-scoped (limited to block, loop, or if-statement)
❌ Cannot be redeclared in the same scope
✏️ Can be updated/reassigned
⚠️ Hoisted but not initialized (Temporal Dead Zone)
🚫 Helps prevent accidental global variables
🛡️ Safer than var for avoiding bugs
🚀 Modern JavaScript prefers let over var
💡 Works well with loops and closures
    `;

    varPara2.innerText = letPoints;
    } else {
        varPara2.innerText = "";
    }
});



var btn3 = document.getElementById("btn3");
var varPara3 = document.getElementById("const");

btn3.addEventListener("click", function() {
    if (varPara3.innerText === ""){
    var myConstPoints = `
🔹 Block-scoped (limited to block, loop, or if-statement)
❌ Cannot be redeclared in the same scope
🔒 Cannot be updated/reassigned once initialized
⚠️ Must be initialized during declaration
💎 Good for constants and fixed values
🛡️ Helps avoid bugs due to reassignment
🧩 Works with objects and arrays, but their properties/elements can change
🚀 Modern JavaScript prefers const over var/let for safety
    `;

    varPara3.innerText = myConstPoints;
    } else {
        varPara3.innerText = "";
    }
});
