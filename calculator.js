// Function to get input values and parse them as floats, defaulting to 0 if empty
function getInputs() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Function to display the result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Implement Arithmetic Functions:

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
        return "Cannot divide by zero!"; // Handle division by zero
    }
    return num1 / num2;
}

// Attach Event Listeners:

document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = add(number1, number2);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = subtract(number1, number2);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = multiply(number1, number2);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getInputs();
    const result = divide(number1, number2);
    displayResult(result);
});