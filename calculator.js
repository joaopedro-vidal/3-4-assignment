let mainDisplay = '0';
let secondDisplay = '';
let stack = [];
let operation = '';
let numberEntred = false;
let operationsSimbile = ['+', '-', '*', '/']


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

function updateDisplay(simble) 
{
    if (simble === '.' && mainDisplay.includes('.'))
        return;
    if (!numberEntred) 
    {
        mainDisplay = simble.toString();
        numberEntred = true;
    }
    else
        mainDisplay = mainDisplay + simble;
    document.getElementById('main-numbers-display').value = mainDisplay;
}

function pushNumberToSecondDislpay(number) 
{
    secondDisplay = secondDisplay + number;
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}

function pushOperationToSecondDislpay(operation) 
{
    if (secondDisplay.length > 1) 
    {
        if (secondDisplay[secondDisplay.length - 1] === '=') 
        {
            secondDisplay = mainDisplay.toString() + operation;
            document.getElementById('second-numbers-display').innerHTML = secondDisplay;
            return;
        }
    }
    secondDisplay = secondDisplay + operation;
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}

function clearDisplay() 
{
    stack = [];
    mainDisplay = "0";
    document.getElementById('main-numbers-display').value = mainDisplay;
    secondDisplay = "";
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}

function undo() 
{
    mainDisplay = mainDisplay.slice(0, mainDisplay.length - 1);
    document.getElementById('main-numbers-display').value = mainDisplay;
}

/**********************************************  Calculation Functions *********************************************************** */

function calculate(oper) 
{
    if (numberEntred) 
    {
        stack.push(Number(mainDisplay));
        pushNumberToSecondDislpay(mainDisplay);
        numberEntred = false;
    }
    pushOperationToSecondDislpay(oper);
    evaluate();
    if (operationsSimbile.includes(oper))
        operation = oper;
}

function evaluate() 
{
    if (stack.length > 1) 
    {
        let number2 = stack.pop();
        let number1 = stack.pop();
        let result = operate(operation, number1, number2);
        stack.push(result);
        console.log('result : ', result);
        if (result % 1 > 0)
            result = result.toFixed(2);
        mainDisplay = result.toString();
        document.getElementById('main-numbers-display').value = mainDisplay;
    }
}

function operate(operation, number1, number2) 
{
    switch (operation) {
        case '+':
            return sum(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiplication(number1, number2);
        case '/':
            return division(number1, number2);
        default:
            return 0;
    }
}

/**********************************************  Keyboard Support *********************************************************** */

window.addEventListener("keydown", e => {
    console.log("key code : ", e.code)
    switch (e.code) {
        case "Numpad1": updateDisplay(1);
            break;
        case "Numpad2": updateDisplay(2);
            break;
        case "Numpad3": updateDisplay(3);
            break;
        case "Numpad4": updateDisplay(4);
            break;
        case "Numpad5": updateDisplay(5);
            break;
        case "Numpad6": updateDisplay(6);
            break;
        case "Numpad7": updateDisplay(7);
            break;
        case "Numpad8": updateDisplay(8);
            break;
        case "Numpad9": updateDisplay(9);
            break;
        case "Numpad0": updateDisplay(0);
            break;

        case "NumpadAdd": saveNumber('+');
            break;
        case "NumpadSubtract": saveNumber('-');
            break;
        case "NumpadMultiply": saveNumber('*');
            break;
        case "NumpadDivide": saveNumber('/');
            break;
        case "NumpadEnter": calculate();
            break;

        default: break;

    }
})