// References
const outputText = document.querySelector(".outputNum");
const operationSign = document.querySelector(".operationSign");



// Functions
function clearOutput() {
    outputText.innerHTML = "0";
    operationSign.innerHTML = "";
}
function deleteButton() {
    if (resetValue == true) {
        currentOutput = "0";
        outputText.innerHTML = currentOutput;
        return
    }
    if (outputText.innerHTML == "0") {
        return
    }
    outputText.innerHTML = outputText.innerHTML.slice(0, outputText.innerHTML.length-1);
    if (outputText.innerHTML.length == 0) {
        outputText.innerHTML = "0"
    }
}



var initialValue = 0;
var resetValue = false;
function addNumber(num) {
    currentOutput = outputText.innerHTML;
    if (resetValue == true) {
        currentOutput = "";
        outputText.innerHTML = currentOutput;
        resetValue = false;
    }
    if (outputText.innerHTML == "0") {
        currentOutput = "";
        currentOutput += num;
        outputText.innerHTML = currentOutput;
    } else {
        currentOutput += num;
        outputText.innerHTML = currentOutput;
    }
}
function handleOperationSign(sign) {
    // if (outputText.innerHTML == "0") {
    //     return;
    // }
    // if (resetValue = true) {
    //     return;
    // }
    if (!operationSign.innerHTML) {
        operationSign.innerHTML = sign;
    } else {
        return
    }
    initialValue = outputText.innerHTML;
    resetValue = true;
}
function handleEqual() {
    if (operationSign.innerHTML == "x") {
        outputText.innerHTML = initialValue * outputText.innerHTML;
    }
    if (operationSign.innerHTML == "-") {
        outputText.innerHTML = initialValue - outputText.innerHTML;
    }
    if (operationSign.innerHTML == "+") {
        outputText.innerHTML = parseInt(initialValue) + parseInt(outputText.innerHTML);
    }
    if (operationSign.innerHTML == "/") {
        outputText.innerHTML = initialValue / outputText.innerHTML;
    }
    resetValue = true;
    operationSign.innerHTML = "";
}


function makeOutputNegative() {
    if (outputText.innerHTML[0] == "-") {
        return;
    }
    outputText.innerHTML = "-" + outputText.innerHTML;
}
function makeOutputPositive() {
    if (outputText.innerHTML[0] == "-") {
        outputText.innerHTML = outputText.innerHTML.slice(1, outputText.innerHTML.length)
    }
}


function handleExponent() {
    outputText.innerHTML = outputText.innerHTML * outputText.innerHTML;
}
function handleSquareRoot() {
    outputText.innerHTML = Math.sqrt(outputText.innerHTML);
}

