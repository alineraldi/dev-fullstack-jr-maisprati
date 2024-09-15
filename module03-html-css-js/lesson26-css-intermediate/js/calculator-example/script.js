function insert(value) {
    let screen = document.calculator.screen;

    if (screen.value.length < 14) {
        if (isOperator(value) && isOperator(screen.value[screen.value.length - 1])) {
            return;
        }
    }

    screen.value += value;
}

function clearScreen() {
    document.calculator.screen.value = "";
}

function deleteLast() {
    let screen = document.calculator.screen;
    screen.value = screen.value.slice(0, -1);
}

function calculateTotal() {
    let screen = document.calculator.screen;
    const expression = screen.value;

    if (expression && !isOperator(expression[expression.length - 1])) {
        try {
            let result = evaluateExpression(expression);
            screen.value = result;
        } catch (error) {
            alert("Invalid expression");
            clearScreen();
        }
    }
}

function isOperator(char) {
    return ['+', '-', '/', '*'].includes(char);
}

function evaluateExpression(expression) {
    return eval(expression);
}
