const operators = document.querySelectorAll('[data-button="operator"]');
const numbers = document.querySelectorAll('[data-button="number"]');
const equal = document.querySelector('[data-button="equal"]');
const allClear = document.querySelector('[data-button="ac"]');
const del = document.querySelector('[data-button="del"]');
const display = document.querySelector('#display');

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        const currentOperand = display.querySelector('[data-display="current-operand"]');
        const previousOperand = display.querySelector('[data-display="previous-operand"]');

        if (e.target.value === "+" || e.target.value === '-') {
            if (currentOperand.textContent === '') showNumberOnDisplay(e.target.value);
            else {
                previousOperand.textContent += `${currentOperand.textContent} ${e.target.value}`;
                currentOperand.textContent = '';
            }

        }
    });
});

numbers.forEach(number => {
    number.addEventListener('click', e => {
        showNumberOnDisplay(e.target.value);
    })
})

function showNumberOnDisplay (value) {
    const currentOperand = display.querySelector('[data-display="current-operand"]');
    if (currentOperand.textContent !== '') currentOperand.textContent += value;
    else currentOperand.textContent = value;

}