let historyDisplay = document.getElementById('history');
let resultDisplay = document.getElementById('result');
let calculator = document.querySelector('.calculator');
let toggleBtn = document.getElementById('toggle-size-btn');
let currentInput = '';
let history = '';

function appendNumber(number) {
    currentInput += number;
    resultDisplay.innerText = currentInput;
}

function appendOperation(operation) {
    if (currentInput === '') return;
    history += currentInput + ' ' + operation + ' ';
    historyDisplay.innerText = history;
    currentInput = '';
    resultDisplay.innerText = operation;
}

function clearDisplay() {
    currentInput = '';
    history = '';
    historyDisplay.innerText = '';
    resultDisplay.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    resultDisplay.innerText = currentInput || '0';
}

function compute() {
    if (currentInput === '') return;
    history += currentInput;
    historyDisplay.innerText = history;
    try {
        resultDisplay.innerText = eval(history);
    } catch {
        resultDisplay.innerText = 'Error';
    }
    history = '';
    currentInput = '';
}

function toggleSize() {
    if (calculator.classList.contains('full-page')) {
        calculator.classList.remove('full-page');
        calculator.classList.add('reduced-size');
        toggleBtn.innerText = 'Maximize Size';
    } else {
        calculator.classList.remove('reduced-size');
        calculator.classList.add('full-page');
        toggleBtn.innerText = 'Reduce Size';
    }
}
//// script.js

let memory = 0; // Variable to store memory value

function clearAll() {
    document.getElementById('result').textContent = '0';
    document.getElementById('history').textContent = '';
    memory = 0; // Optionally clear memory
}

function deleteLast() {
    let currentText = document.getElementById('result').textContent;
    if (currentText.length > 1) {
        document.getElementById('result').textContent = currentText.slice(0, -1) || '0';
    } else {
        document.getElementById('result').textContent = '0';
    }
}

function appendNumber(num) {
    let currentText = document.getElementById('result').textContent;
    if (currentText === '0') {
        document.getElementById('result').textContent = num;
    } else {
        document.getElementById('result').textContent += num;
    }
}

function appendOperation(op) {
    let currentText = document.getElementById('result').textContent;
    if (currentText !== '0') {
        document.getElementById('history').textContent += currentText + ' ' + op + ' ';
        document.getElementById('result').textContent = '0';
    }
}

function compute() {
    let expression = document.getElementById('history').textContent + document.getElementById('result').textContent;
    try {
        let result = eval(expression);
        document.getElementById('result').textContent = result;
        document.getElementById('history').textContent = '';
    } catch {
        document.getElementById('result').textContent = 'Error';
    }
}

function square() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        document.getElementById('result').textContent = current * current;
    }
}

function cube() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        document.getElementById('result').textContent = current * current * current;
    }
}

function half() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        document.getElementById('result').textContent = current / 2;
    }
}

function percent() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        document.getElementById('result').textContent = current / 100;
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById('result').textContent = memory;
}

function memoryAdd() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        memory += current;
    }
}

function memorySubtract() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        memory -= current;
    }
}

function toggleSize() {
    document.querySelector('.calculator').classList.toggle('full-page');
}
//let memory = 0; // Variable to store the memory value

function memoryClear() {
    memory = 0;
    updateMemoryDisplay();
}

function memoryRecall() {
    document.getElementById('result').textContent = memory;
}

function memoryStore() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        memory = current;
    }
    updateMemoryDisplay();
}

function memoryAdd() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (!isNaN(current)) {
        memory += current;
    }
    updateMemoryDisplay();
}

function updateMemoryDisplay() {
    // Optionally update the memory display if your UI shows it
    const memoryIndicator = document.getElementById('memory-indicator');
    if (memory !== 0) {
        memoryIndicator.textContent = 'M';
    } else {
        memoryIndicator.textContent = '';
    }
}
//New functions for squaring, cubing, and halving

function square() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) ** 2).toString();
    resultDisplay.innerText = currentInput;
}

function cube() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) ** 3).toString();
    resultDisplay.innerText = currentInput;
}

function half() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) / 2).toString();
    resultDisplay.innerText = currentInput;
}
// script.js

// Other existing functions...

function percent() {
    let current = parseFloat(document.getElementById('result').textContent);
    if (current) {
        let percentValue = current / 100;
        document.getElementById('result').textContent = percentValue;
    }
}

