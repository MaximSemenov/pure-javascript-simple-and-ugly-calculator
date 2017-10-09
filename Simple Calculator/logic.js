let output = document.getElementById("innerOutput"),
    collector = "",
    calculator = {
        events: {}
    },
    operand1 = document.getElementById('firstOperandInput'),
    operand2 = document.getElementById('secondOperandInput'),
    eq = document.getElementById('equationButton'),
    add = document.getElementsByClassName('operationButton'),
    resultClick = function (e) {
        output.textContent += " = " + eval(output.textContent)
    };

calculator.events.calcEvent = function (e) {
    let operation = e.target.textContent;

    if (e.target.textContent) { 
        output.textContent += operation; 
        collector = output.textContent 
        return;
    }

    output.textContent = collector + e.target.value; 
};

operand1.addEventListener('input', calculator.events.calcEvent, false);
operand2.addEventListener('input', calculator.events.calcEvent, false)



for (let i = 0; i < add.length; i++) {    
    add[i].addEventListener('click', calculator.events.calcEvent, false);
}


eq.addEventListener('click', resultClick, false);



