let mainDisplay = '0';
let secondDisplay = '0';
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
    secondDisplay=mainDisplay;
    document.getElementById('main-numbers-display').value = mainDisplay;
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
}


function saveNumber(oper) {
    if(isNaN(secondDisplay[secondDisplay.length-1]))
      secondDisplay[secondDisplay.length-1]=oper;
    else
       secondDisplay=secondDisplay+oper;
    document.getElementById('second-numbers-display').innerHTML = secondDisplay;
    number1 = Number(mainDisplay);
    mainDisplay = '0'
    operation = oper;
}

function calculate() {
    number2 = Number(mainDisplay);
    let result = operate(operation, number1, number2);
    console.log('result : ',result);
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
}

function undo() {
    mainDisplay = mainDisplay.slice(0, mainDisplay.length - 1);
    document.getElementById('main-numbers-display').value = mainDisplay;
}