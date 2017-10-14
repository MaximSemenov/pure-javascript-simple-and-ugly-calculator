let calculator = {
    events: {}
},
    collector = "",
    output = document.getElementById("innerOutput"),
    operand1 = document.getElementById('firstOperandInput'),
    operand2 = document.getElementById('secondOperandInput'),
    eq = document.getElementById('equationButton'),
    allOperationButtons = document.getElementsByClassName('operationButton') // захват все кнопок

function resultClick(e) { // функция срабатывает после нажатия кнопки "равно"

    output.textContent += " = " + eval(output.textContent); // пока все еще eval, но я заменю его
    operand2.disabled = true;
    e.target.textContent = "Clear All"; // кнопка равно меняется на Clear - Очистить
    eq.removeEventListener('click', resultClick) // с кнопки равно снимается событие
    eq.addEventListener('click', reset) // навешивается новое событие для очистки полей
};


function changeDisable(buttons, input) { // функция делает поля и элементы неактивными

    for (let i = 0; i < allOperationButtons.length; i++) {

        allOperationButtons[i].disabled = buttons;
    }

    operand2.disabled = input;
};

function reset() { // функкция сброса, чтобы очистить калькулятор и использовать его заново
    // очищаем поля и элементы и активируем или деактивируем
    collector = "";
    operand1.value = "";
    operand1.disabled = false;
    operand2.value = "";
    output.textContent = "";
    eq.textContent = "=" // возвращаем кнопке равно ее знак "равно"
    eq.removeEventListener('click', reset)
    eq.addEventListener('click', resultClick, false); // возвращаем обработчик для равно

};


calculator.events.calcEvent = function (e) { // универсальная функция получает событие от кнопок
    // операций и от импутов и внутри определяет что делать

    let operationCatcher = e.target.textContent; // переменная ззахватывает знак "+", "-" и тп.

    if (e.target.textContent) { // обработка кнопки, потому что input.target.textContent 
        // будет false, а у кнопок true, так как <button>+</button> и button.target.textContent = "+" или "-"
        output.textContent += operationCatcher;
        collector = output.textContent
        operand1.disabled = true;
        changeDisable(true, false); // активируем и деактивируем другие элементы
        return;
    }

    output.textContent = collector + e.target.value; // обработка инпута
    // забираем value с импута и записываем в коллектор и так много раз
    if (e.target.id === "firstOperandInput") { changeDisable(false, true) };

};


// при первой загрузке скрипта, !все что ниже!, это развешивание 
// обработчиков для инпутов и разных кнопок

operand1.addEventListener('input', calculator.events.calcEvent, false);
operand2.addEventListener('input', calculator.events.calcEvent, false);
eq.addEventListener('click', resultClick, false);
for (let i = 0; i < allOperationButtons.length; i++) {
    allOperationButtons[i].addEventListener('click', calculator.events.calcEvent, false);
    allOperationButtons[i].disabled = true;
}





