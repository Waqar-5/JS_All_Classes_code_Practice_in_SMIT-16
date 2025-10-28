// Base Object (Assignments 1, 5, 4)
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    owner: {
        name: "Ahmed Khan",
        city: "Karachi"
    },
    showDetails: function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year || "N/A"}`;
    }
};

// Output Display Function
function displayOutput(message) {
    document.getElementById("output").textContent = message;
}

// Assignment 1 & 4
function showCar() {
    displayOutput(car.showDetails());
}

// Assignment 2
function addColor() {
    car.color = "Red";
    displayOutput("Color added => " + car.color);
}

// Assignment 2 (Delete)
function deleteYear() {
    delete car.year;
    displayOutput("Property 'year' has been deleted.");
}

// Assignment 5 (Nested)
function showNested() {
    displayOutput(`Owner: ${car.owner.name}, City: ${car.owner.city}`);
}

// Assignment 6 (for..in loop)
function loopProperties() {
    var text = "";
    for (var key in car) {
        text += key + " : " + car[key] + "\n";
    }
    displayOutput(text);
}

// Assignment 8
function countProperties() {
    var count = 0;
    for (var key in car) count++;
    displayOutput("Total Properties: " + count);
}

// Assignment 9
function showKeysArray() {
    var keys = [];
    for (var key in car) keys.push(key);
    displayOutput("Keys: " + keys.join(", "));
}

// Assignment 10
function copyObject() {
    var newCar = {};
    for (var key in car) {
        newCar[key] = car[key];
    }
    displayOutput("Car Object Copied: \n" + JSON.stringify(newCar, null, 2));
}
