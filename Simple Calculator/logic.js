let calculator = {};
calculator.events = {};

var output = document.getElementById("innerOutput");
var collector = "";

calculator.events.calcEvent = function (e) {

    let operation = e.target.textContent;

    if (e.target.textContent) { output.textContent += operation; collector = output.textContent }

    else { output.textContent = collector + e.target.value; }

};

let operand1 = document.getElementById('firstOperandInput');
let operand2 = document.getElementById('secondOperandInput');
let eq = document.getElementById('equationButton');

let add = document.getElementsByClassName('operationButton');


for (let i = 0; i < add.length; i++) {

    add[i].addEventListener('click', calculator.events.calcEvent, false);

}


operand1.addEventListener('input', calculator.events.calcEvent, false);
operand2.addEventListener('input', calculator.events.calcEvent, false)

eq.addEventListener('click', function (e) {

    output.textContent += " = " + eval(output.textContent)
    

}, false)



