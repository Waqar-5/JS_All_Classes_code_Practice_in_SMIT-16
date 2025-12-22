
    // ===============================
    // 1️⃣ Basic Calculator Functions
    // ===============================
    const add = (a,b) => a+b;
    const subtract = (a,b) => a-b;
    const multiply = (a,b) => a*b;
    const divide = (a,b) => b !== 0 ? a/b : 'Cannot divide by zero';

    function calculate(op) {
      const a = Number(document.getElementById('num1').value);
      const b = Number(document.getElementById('num2').value);
      let result;
      switch(op){
        case 'add': result = add(a,b); break;
        case 'subtract': result = subtract(a,b); break;
        case 'multiply': result = multiply(a,b); break;
        case 'divide': result = divide(a,b); break;
      }
      document.getElementById('calcOutput').innerText = `Result: ${result}`;
    }

    // ===============================
    // 2️⃣ Array Operations
    // ===============================
    function performArrayOps(){
      const input = document.getElementById('arrayInput').value;
      const arr = input.split(',').map(Number);
      const doubled = arr.map(n => n*2);
      const evens = arr.filter(n => n%2===0);
      const sum = arr.reduce((acc,n)=>acc+n,0);
      document.getElementById('arrayOutput').innerHTML = `
        Original Array: [${arr}] <br>
        Doubled: [${doubled}] <br>
        Evens: [${evens}] <br>
        Sum: ${sum}
      `;
    }

    // ===============================
    // 3️⃣ Lexical 'this' Explorer
    // ===============================
    const team = {
      name: "Developers",
      members: ["Ali", "Sara", "Zaib"],
      showTeam: function() {
        return this.members.map(member => `${member} is in ${this.name}`).join('<br>');
      }
    }
    function lexicalThisDemo(){
      document.getElementById('thisOutput').innerHTML = team.showTeam();
    }

    // ===============================
    // 4️⃣ Nested Arrow Functions
    // ===============================
    const multiplyNested = a => b => a*b;
    function nestedArrow(){
      const a = Number(document.getElementById('curryNum1').value);
      const b = Number(document.getElementById('curryNum2').value);
      const result = multiplyNested(a)(b);
      document.getElementById('curryOutput').innerText = `Result: ${result}`;
    }

    // ===============================
    // 5️⃣ Rest Parameters Demo
    // ===============================
    const sumAll = (...nums) => nums.reduce((acc,n)=>acc+n,0);
    function restDemo(){
      const input = document.getElementById('restInput').value;
      const nums = input.split(',').map(Number);
      const result = sumAll(...nums);
      document.getElementById('restOutput').innerText = `Sum: ${result}`;
    }
 