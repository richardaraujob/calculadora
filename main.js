const operation = document.querySelector("#operation");
const result = document.querySelector("#result");
let history = {};

function restore() {
    operation.innerHTML = history.operation;
    result.innerHTML = history.result;
};

function clickButton(btn) {
    operation.innerHTML += btn;
};

function clearOperation() {
    operation.innerHTML = '';
    result.innerHTML = '';
};

function calc() {
    if(operation.textContent) {
        result.innerHTML = eval(operation.innerHTML);
        history.operation = operation.innerHTML;
        history.result = result.innerHTML;
        document.querySelector("#history").disabled = false;
    } else {
        result.innerHTML = "Digite...";
    };
};

function backSpace() {
    const backspace = operation.innerHTML;
    operation.innerHTML = backspace.substring(0, backspace.length - 1);
};

const check = document.getElementById("check");

check.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.querySelector("#calculator").classList.toggle("light");
    document.querySelector("#container-buttons").classList.toggle("light");
    document.querySelector("#operation").classList.toggle("light");
    document.querySelector("#result").classList.toggle("light");
    document.querySelector(".label").classList.toggle("light");
    document.querySelector(".ball").classList.toggle("light");

    document.querySelectorAll(".button").forEach(function(button) { 
        button.classList.toggle("light");
    });
} );
