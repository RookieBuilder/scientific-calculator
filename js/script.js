// script.js
let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function appendDigit(digit) {
    currentInput += digit;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace('^', '**'));
        display.textContent = currentInput;
    } catch (e) {
        display.textContent = 'Error';
    }
}

function calculateFunction(func) {
    let result;
    try {
        let input = parseFloat(currentInput);
        switch (func) {
            case 'sin': result = Math.sin(input); break;
            case 'cos': result = Math.cos(input); break;
            case 'tan': result = Math.tan(input); break;
            case 'log': result = Math.log10(input); break;
            case 'sqrt': result = Math.sqrt(input); break;
            case 'pow':
                let exponent = prompt("Enter exponent value:");
                result = Math.pow(input, exponent);
                break;
        }
        display.textContent = result;
        currentInput = result.toString();
    } catch (e) {
        display.textContent = 'Error';
    }
}
