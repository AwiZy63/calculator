
/*

all-clear -> remove-all
operator -> operateur
calculator-keys -> calculator-buttons
*/

/*

    <div class="calculator">
      <input type="text" class="calculator-screen" value="" disabled />

      <div class="calculator-buttons">
        <button type="button" class="operateur" value="+">+</button>
        <button type="button" class="operateur" value="-">-</button>
        <button type="button" class="operateur" value="*">&times;</button>
        <button type="button" class="operateur" value="/">&divide;</button>

        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>

        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>

        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>

        <button type="button" value="0">0</button>
        <button type="button" class="decimal" value=".">.</button>
        <button type="button" class="remove-all" value="remove-all">AC</button>

        <button type="button" class="equal-sign operateur" value="=">=</button>
      </div>
    </div>

*/

class Calculator {
    constructor() {
        let calcButtons = document.createElement("div");
        calcButtons.className = "calc-buttons";

    }
};


/*
const calculatorInWork = {
    displayValue: '0',
    firstOperateur: null,
    waitingForSecondOperateur: false,
    operateur: null,
};

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperateur } = calculatorInWork;

    if (waitingForSecondOperateur === true) {
        calculatorInWork.displayValue = digit;
        calculatorInWork.waitingForSecondOperateur = false;
    } else {
        calculatorInWork.displayValue =
            displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    if (calculatorInWork.waitingForSecondOperateur === true) {
        calculatorInWork.displayValue = '0.';
        calculatorInWork.waitingForSecondOperateur = false;
        return;
    }

    if (!calculatorInWork.displayValue.includes(dot)) {
        calculatorInWork.displayValue += dot;
    }
}

function operateurManip(nextOperator) {
    const { firstOperateur, displayValue, operateur } = calculatorInWork;
    const inputValue = parseFloat(displayValue);

    if (operateur && calculatorInWork.waitingForSecondOperateur) {
        calculatorInWork.operateur = nextOperator;
        return;
    }

    if (firstOperateur == null && !isNaN(inputValue)) {
        calculatorInWork.firstOperateur = inputValue;
    } else if (operateur) {
        const currentValue = firstOperateur || 0;
        const result = calculate(currentValue, inputValue, operateur);

        calculatorInWork.displayValue = String(result);
        calculatorInWork.firstOperateur = result;
    }

    calculatorInWork.waitingForSecondOperateur = true;
    calculatorInWork.operateur = nextOperator;
}

function calculate(firstOperateur, SecondOperateur, operateur) {
    if (operateur === '+') {
        return firstOperateur + SecondOperateur;
    } else if (operateur === '-') {
        return firstOperateur - SecondOperateur;
    } else if (operateur === '*') {
        return firstOperateur * SecondOperateur;
    } else if (operateur === '/') {
        return firstOperateur / SecondOperateur;
    }

    return SecondOperateur;
}

function resetCalculator() {
    calculatorInWork.displayValue = '0';
    calculatorInWork.firstOperateur = null;
    calculatorInWork.waitingForSecondOperateur = false;
    calculatorInWork.operateur = null;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculatorInWork.displayValue;
}

updateDisplay();

const buttons = document.querySelector('.calculator-buttons');
buttons.addEventListener('click', event => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operateur')) {
        operateurManip(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('remove-all')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

*/
export default Calculator;
