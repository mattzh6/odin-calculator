let firstNum = "";
let secondNum = "";
let operator = "";
let decimalPointUsed = false;
let operatorUsed = false;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "ERROR";
    }

    return num1 / num2;
}

function operate(operator, num1, num2) {
    let result = 0;
    
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }

    
}

function addNum(event) {
    const display = document.querySelector(".display");
    if (!operatorUsed) {
        if (firstNum === "0") {
            firstNum = event.target.value;
        }
        else {
            firstNum += event.target.value;
        }
        
        display.innerText = firstNum;
    }
    else {
        if (secondNum === "0") {
            secondNum = event.target.value;
        }
        else {
            secondNum += event.target.value;
        }
        
        display.innerText = secondNum;
    }
}

function clearDisplay(event) {
    const display = document.querySelector(".display");
    display.innerText = "";
    firstNum = "";
    secondNum = "";
    operatorUsed = false;
    decimalPointUsed = false;
}

const numbersListener = document.querySelectorAll(".number");
numbersListener.forEach(button => button.addEventListener("click", addNum));

const clearListener = document.querySelector(".clear");
clearListener.addEventListener("click", clearDisplay);