// Define characters as objects
const hero1 = { name: "Flash", power: "super speed" };
const hero2 = { name: "Superman", power: "super strength" };
const hero3 = { name: "Wonder Woman", power: "combat skill" };

// Define actions as a function
function performAction(actionType, extra) {
    // 'this' will dynamically refer to the hero we pass via call()
    let message = "";

    if(actionType === "run") {
        message = `${this.name} runs using ${this.power}!`;
    } else if(actionType === "fly") {
        message = `${this.name} flies gracefully using ${this.power}!`;
    } else if(actionType === "fight") {
        message = `${this.name} fights fiercely using ${this.power}!`;
    } else {
        message = `${this.name} is chilling!`;
    }

    if(extra) {
        message += ` Bonus: ${extra}`;
    }

    document.getElementById("result").textContent = message;
}

// Button click event
document.getElementById("perform").addEventListener("click", () => {
    const heroSelect = document.getElementById("character").value;
    const actionSelect = document.getElementById("action").value;

    // Map selection to hero object
    const heroMap = {
        hero1, hero2, hero3
    };

    const hero = heroMap[heroSelect];

    // Call performAction with dynamic 'this' using call()
    performAction.call(hero, actionSelect, "Stay Awesome!"); 
});
