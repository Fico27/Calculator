
let firstUserInput = 0;
let secondUserInput = 0;
let indexOfOperator;
let operation = '';
let result;
let memory;
const answer = document.querySelector(".answer")
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
    if (secondNum === 0) {
        return "The void waits for you"
    } else return firstNum / secondNum;

}


function operate(num1, num2, operator) {

    // if (operation === '') {



    // } else {

    if (operator === "+") {
        result = add(num1, num2)
    } else if (operator === "-") {
        result = subtract(num1, num2)
    } else if (operator === "*") {
        result = multiply(num1, num2)
    } else if (operator === "/") {
        result = divide(num1, num2)
    }

    screen.innerHTML = ''
    answer.innerHTML = `${result}`
    memory = result
    // firstUserInput = result

    // console.log(firstUserInput)
    // console.log(operation)
    // console.log(secondUserInput)
    console.log(result)
    operation = ''
    console.log(result)
    // }
}

function addToScreen(value) {
    answer.innerHTML = ''
    if (result === memory) {
        // screen.innerHTML = '';
        result = 0;
    } else {
        memory = 0;
    }
    screen.innerHTML += value
}

function addToScreenOperation(value) {
    answer.innerHTML = ''
    firstUserInput = parseInt(screen.innerHTML)
    operation = value;

    const operators = ["+", "-", "*", "/"];
    const lastChar = screen.innerHTML.slice(-1);

    if (operators.includes(lastChar)) {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }

    screen.innerHTML += value;
    indexOfOperator = screen.innerHTML.length - 1


}

function deleteScreen() {
    screen.innerHTML = '';
    answer.innerHTML = '';
    result = 0;
}
function clearLast() {
    screen.innerHTML = screen.innerHTML.slice(0, -1)
    answer.innerHTML = '';
}

function getSecondNumber() {

    if (memory) {
        firstUserInput = memory
    } 
        dirtySecondUserInput = screen.innerHTML.slice(indexOfOperator + 1, screen.innerHTML.length)
        secondUserInput = parseInt(dirtySecondUserInput)
        operate(firstUserInput, secondUserInput, operation)
    
}
