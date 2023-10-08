let mainDisplay = '0';
let secondDisplay = '';
let number1 = 0;
let number2 = 0;
let operation = ''


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

/************************************************************************************* */
function updateDisplay(simble) {
    if (simble === '.' && mainDisplay.includes('.'))
        return;
    if (mainDisplay === '0')
        mainDisplay = simble.toString();
    else
        mainDisplay = mainDisplay + simble;
    document.getElementById('main-numbers-display').value = mainDisplay;

}


function saveNumber(oper) {
    updateSecondDislpay(mainDisplay, oper)

    number1 = Number(mainDisplay);
    mainDisplay = '0';
    operation = oper;
}

function updateSecondDislpay(number, oper) {
    if (secondDisplay.length > 1) {
        if(secondDisplay[secondDisplay.length - 1] === '=')
        {
            secondDisplay = number.toString()+oper; 
            document.getElementById('second-numbers-display').innerHTML = secondDisplay;           
            return;
        }

        if (oper === '=') 
        {
            secondDisplay = secondDisplay + number + oper;
            document.getElementById('second-numbers-display').innerHTML = secondDisplay;
            return;
        }

        if (isNaN(secondDisplay[secondDisplay.length - 1])) {
            secondDisplay = secondDisplay.slice(0, -1) + oper;
            document.getElementById('second-numbers-display').innerHTML = secondDisplay;
            return;
        }
    }
    secondDisplay = secondDisplay + number + oper;
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
    console.log('operation : ', secondDisplay);

}

function calculate() {
    updateSecondDislpay(mainDisplay, '=');
    number2 = Number(mainDisplay);
    let result = operate(operation, number1, number2);
    console.log('result : ', result);
    mainDisplay = result.toString();
    document.getElementById('main-numbers-display').value = mainDisplay;
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
            return division(number1, number2);
        default:
            return 0;
    }
}

/**************************************************************************************************** */
function clearDisplay() {
    mainDisplay = "0";
    document.getElementById('main-numbers-display').value = mainDisplay;
    secondDisplay = "";
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}

function undo() {
    mainDisplay = mainDisplay.slice(0, mainDisplay.length - 1);
    document.getElementById('main-numbers-display').value = mainDisplay;
}