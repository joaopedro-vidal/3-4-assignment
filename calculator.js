var displayNumber = '';
var result = 0;
var operator = 0;


function updateDisplay(newNumber) {
    displayNumber = document.getElementById('numbers-display').value;
    if (displayNumber != '' || isNaN(newNumber)) {
        document.getElementById('numbers-display').value = displayNumber + newNumber;
    } else {
        document.getElementById('numbers-display').value = newNumber;
    }
}
function clearDisplay() {
    displayNumber = "";
    operator = 0;
    result = 0;
    document.getElementById('numbers-display').value = displayNumber;
}
function saveNumber(simble) {
    displayNumber = document.getElementById('numbers-display').value;
    if (operator == 0 && displayNumber != "") {
        document.getElementById('numbers-display').value = displayNumber + simble;
    } else if (operator == 0 && displayNumber == "" && simble == "-") {
        document.getElementById('numbers-display').value = simble;
    } else {
        operate();
        displayNumber = document.getElementById('numbers-display').value;
        document.getElementById('numbers-display').value = displayNumber + simble;
    }
    operator++;
}
function operate() {
    displayNumber = document.getElementById('numbers-display').value;
    result = eval(displayNumber);
    document.getElementById('numbers-display').value = result;
    operator = 0;
}


function undo() {
    displayNumber = document.getElementById('numbers-display').value;
    let value=displayNumber.charAt(displayNumber.length - 1); // get the last char
    if(value=="+" || value=="-" || value=="/" || value=="*"  ){
        operator = 0;
    }
    document.getElementById('numbers-display').value = displayNumber.slice(0, -1); // Remove the last character
}