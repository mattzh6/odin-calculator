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

    return result;
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

function clearDisplay() {
    const display = document.querySelector(".display");
    display.innerText = "";
    firstNum = "0";
    secondNum = "";
    operatorUsed = false;
    decimalPointUsed = false;
}

function useOperator(event) {

    let currOperator = event.target.value;
    
    if (!operatorUsed && currOperator !== "=") {
        operatorUsed = true;
        operator = currOperator;
    }
    
    
    if (operatorUsed && secondNum) {
        const result = operate(operator, parseInt(firstNum), parseInt(secondNum));
        const display = document.querySelector(".display");
        if (result === "ERROR") {
            display.innerText = "Don't divide by 0";
            firstNum = "";
            secondNum = "";
            operatorUsed = false;
            decimalPointUsed = false;
        }
        else {
            display.innerText = result;
            firstNum = result;
            operatorUsed = false;
            operator = "";
            secondNum = "";
            decimalPointUsed = false;
        }

    }
    
    
}

const numbersListener = document.querySelectorAll(".number");
numbersListener.forEach(button => button.addEventListener("click", addNum));

const clearListener = document.querySelector(".clear");
clearListener.addEventListener("click", clearDisplay);

const operatorListener = document.querySelectorAll(".operator");
operatorListener.forEach(button => button.addEventListener("click", useOperator));


