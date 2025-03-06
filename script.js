
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

console.log(`${num1} num1`)
console.log(`${num2} num2`)

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
    // firstUserInput = `${result}`;
    operation = ''

}

function addToScreen(value) {
    answer.innerHTML = ''
    if (result === memory) {
        // screen.innerHTML = '';
        result = ``;
    } else {
        // memory = ``;
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
    memory = 0;
}
function clearLast() {
    screen.innerHTML = screen.innerHTML.slice(0, -1)
    answer.innerHTML = '';
}

function getSecondNumber() {

    
    if (memory) {
        firstUserInput = memory
        result = 0;
    } 
        dirtySecondUserInput = screen.innerHTML.slice(indexOfOperator + 1, screen.innerHTML.length)
        secondUserInput = parseInt(dirtySecondUserInput)

            console.log(`${firstUserInput} First user input`)
            console.log(`${secondUserInput} Second user input`)
        operate(firstUserInput, secondUserInput, operation)

    
}


// Left off checking what values are on first user input and second user input. After subracting it shows the correct second user input. What leads to NaN result??
