
function clickNumber(numberButtons) {
    const number = document.getElementById("operation").innerHTML;
    const value = number + numberButtons;
    document.getElementById("operation").innerHTML = value;
};

function clearOperation() {
    document.getElementById("operation").innerHTML = "";
    document.getElementById("result").innerHTML = "";
};

function calculo() {
    const resultado = document.getElementById("operation").innerHTML;
    if(resultado) {
        document.getElementById("result").innerHTML = eval(resultado);
    } else {
        document.getElementById("result").innerHTML = "Digite...";
    };
};






