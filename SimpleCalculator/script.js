const display = document.getElementById("display");

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

// Number buttons
const numberButtons = document.querySelectorAll(".btn.number");
// numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         if (shouldResetDisplay) {
//             display.value = "";
//             shouldResetDisplay = false;
//         }
//         display.value += button.textContent;
//     });
// });
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (shouldResetDisplay) {
            display.value = "";
            shouldResetDisplay = false;
        }
        display.value += button.textContent;
    });
});

// Clear button
// document.getElementById("clear").addEventListener("click", () => {
//     display.value = "";
//     firstOperand = null;
//     secondOperand = null;
//     currentOperator = null;
// });
document.getElementById("clear").addEventListener("click", function() {
    display.value = "";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
});

// Operator buttons (+, −, ×, ÷)
const operatorButtons = document.querySelectorAll(".btn.operator");
const operatorMap = {
    "÷": "/",
    "×": "*",
    "−": "-",
    "+": "+"
};

// operatorButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         firstOperand = parseFloat(display.value);
//         currentOperator = operatorMap[button.textContent];
//         shouldResetDisplay = true;
//     });
// });
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        firstOperand = parseFloat(display.value);
        currentOperator = operatorMap[button.textContent];
        shouldResetDisplay = true;
    });
});

// Equals button
// document.getElementById("equals").addEventListener("click", () => {
//     if (currentOperator === null || shouldResetDisplay) return;
//
//     secondOperand = parseFloat(display.value);
//     let result = operate(firstOperand, secondOperand, currentOperator);
//
//     display.value = result;
//     firstOperand = result;  // allows chaining (e.g. 5 + 3 = 8, then + 2 = 10)
//     currentOperator = null;
// });
document.getElementById("equals").addEventListener("click", function() {
    if (currentOperator === null || shouldResetDisplay) return;

    secondOperand = parseFloat(display.value);
    let result = operate(firstOperand, secondOperand, currentOperator);

    display.value = result;
    firstOperand = result;  // allows chaining (e.g. 5 + 3 = 8, then + 2 = 10)
    currentOperator = null;
});

// Math operation function
function operate(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Error"; // avoid /0
        default: return null;
    }
}
