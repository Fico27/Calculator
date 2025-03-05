
let firstUserInput = 0;
let secondUserInput = 0;
let operation;

const screen = document.querySelector(".screen");


function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}


function operate(num1, num2, operator) {
    let result;
    if(operator === "+"){
      result =  add(num1, num2)
    } else if(operator === "-"){
        result = subtract(num1, num2)
    } else if(operator === "*"){
        result = multiply(num1, num2)
    }else if (operator === "/"){
        result =  divide(num1, num2)
    }
    return result;
}

function addToScreen(value){
    screen.innerHTML += value
}

