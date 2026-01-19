// 1️⃣ Function in Variable
function greet(name) {
    return `Hello, ${name}!`;
}
const greetVar = greet;

document.getElementById("varBtn").addEventListener("click", () => {
    document.getElementById("varOutput").textContent = greetVar("Waqar");
});

// 2️⃣ Functions in Array
const operations = [
    function(a, b){ return a + b; },
    function(a, b){ return a - b; },
    function(a, b){ return a * b; }
];

document.getElementById("arrayBtn").addEventListener("click", () => {
    const results = operations.map((fn) => fn(5,3));
    document.getElementById("arrayOutput").textContent = `Results: ${results.join(", ")}`;
});

// 3️⃣ Functions in Object
const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b
};

document.getElementById("objBtn").addEventListener("click", () => {
    const resAdd = calculator.add(10,5);
    const resMul = calculator.multiply(4,2);
    document.getElementById("objOutput").textContent = `Add: ${resAdd}, Multiply: ${resMul}`;
});

// 4️⃣ Return Function from Function
function multiplier(factor){
    return function(number){
        return number * factor;
    };
}

document.getElementById("returnBtn").addEventListener("click", () => {
    const double = multiplier(2);
    const triple = multiplier(3);
    document.getElementById("returnOutput").textContent = `Double 5: ${double(5)}, Triple 4: ${triple(4)}`;
});

// 5️⃣ Pass Function as Argument
function executeOperation(a, b, operation){
    return operation(a,b);
}

document.getElementById("callbackBtn").addEventListener("click", () => {
    const result = executeOperation(7,3,calculator.subtract);
    document.getElementById("callbackOutput").textContent = `Subtract Result: ${result}`;
});
