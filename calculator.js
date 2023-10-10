let mainDisplay = '0';
let secondDisplay = '';
let stack = [];
let operation = '';
let numberEntred = false;
let operationsSimbol = ['+', '-', '*', '/']


function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

/**********************************************  Display Finctions *********************************************************** */

function updateDisplay(simbol) {
    if (simbol === '.' && mainDisplay.includes('.'))
        return;
    if (!numberEntred) {
        mainDisplay = simbol.toString();
        numberEntred = true;
    }
    else
        mainDisplay = mainDisplay + simbol;
    document.getElementById('main-numbers-display').value = mainDisplay;
}

function pushNumberToSecondDislpay(number) {
    secondDisplay = secondDisplay + number;
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}

function pushOperationToSecondDislpay(oper) {
    if (secondDisplay.length > 0) {
        if (isNaN(secondDisplay[secondDisplay.length - 1])) {
            secondDisplay = secondDisplay.slice(0, -1) + oper;
        }
        else
            if (secondDisplay[secondDisplay.length - 1] === '=') {
                secondDisplay = mainDisplay.toString() + oper;
            }
            else
                secondDisplay = secondDisplay + oper;
    }
    else
        if (oper === "-") {
            mainDisplay = oper;
            numberEntred = true;
            document.getElementById('main-numbers-display').value = mainDisplay;
            return
        }
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}

function clearDisplay() {
    stack = [];
    mainDisplay = "";
    document.getElementById('main-numbers-display').value = mainDisplay;
    secondDisplay = "";
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}

function undo() {
    if (mainDisplay.length > 0) 
    {
        mainDisplay = mainDisplay.slice(0, mainDisplay.length - 1);
        document.getElementById('main-numbers-display').value = mainDisplay;
    }
}

/**********************************************  Calculation Functions *********************************************************** */

function calculate(oper) {
    if (numberEntred) {
        stack.push(Number(mainDisplay));
        pushNumberToSecondDislpay(mainDisplay);
        numberEntred = false;
    }
    pushOperationToSecondDislpay(oper);
    evaluate();
    if (operationsSimbol.includes(oper))
        operation = oper;
}

function evaluate() {
    if (stack.length > 1) {
        let number2 = stack.pop();
        let number1 = stack.pop();
        let result = operate(operation, number1, number2);
        if (result != "error") {
            stack.push(result);
            console.log('result : ', result);
            if (Math.abs(result) % 1 > 0)
                result = result.toFixed(2);
            mainDisplay = result.toString();
            document.getElementById('main-numbers-display').value = mainDisplay;
        }
        else document.getElementById('main-numbers-display').value = "error";
    }
}

function operate(operation, number1, number2) {
    switch (operation) {
        case '+':
            return sum(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiplication(number1, number2);
        case '/':
            {
                if (number2 == 0) {
                    clearDisplay();
                    return "error";
                }
                return division(number1, number2);
            }
        default:
            return 0;
    }
}

/**********************************************  Keyboard Support *********************************************************** */

window.addEventListener("keydown", e => 
{
    let key = e.key;
    if (key === '.' || !isNaN(key))
        updateDisplay(key);
    else
        if (isNaN(key)) {
            if (operationsSimbol.includes(key))
                calculate(key);
            else if (key === "Enter")
                calculate('=');
            else if (key === "Delete")
                clearDisplay();
            else if (key === "Backspace")
                undo();
        }

})