console.log("hello world");

function add(a, b){
    console.log("add function called");
    return a + b;
}
function subtract(a, b){
    console.log("subtract function called");
    return a - b;
}
function multiply(a, b){
    console.log("multiply function called");
    return a * b;
}
function divide(a, b){
    console.log("divide function called");
    return a / b;
}

function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) {
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult());
    setResult(result);
}
function del() {
    setResult(0);
}