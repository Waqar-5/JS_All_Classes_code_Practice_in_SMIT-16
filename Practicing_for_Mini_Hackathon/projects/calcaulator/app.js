const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');

let currentInput = '';

// Add number/operator
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentInput += btn.getAttribute('data-value');
        display.value = currentInput;
    });
});

// Evaluate result
equalsBtn.addEventListener('click', () => {
    try {
        // Use eval carefully for simple calculator
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch {
        display.value = 'Error';
        currentInput = '';
    }
});

// Clear all
clearBtn.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
});

// Delete last character
deleteBtn.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
});
