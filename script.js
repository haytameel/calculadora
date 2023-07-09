//Guardo lo que haya escrito el usuario
const display = document.querySelector(".display");

// Guardo el numero que haya pulsado el usuario
const buttons = document.querySelectorAll("button");

const specialCharacters = ["+", "-", "*", "/", "%", "="];

let output = "";

const calculate = (valor) => {
    if (valor === "=" && output !== "") {
        //cuando se seleccione %
        output = eval(output.toString().replace("%", "/100"));
    }
    else if (valor === "AC") {
        output = "";
    }
    else if (valor === "DEL") {
        output = output.toString().slice(0, -1); //quitar el ultimo caracter
    }
    else {
        if (valor === "" && specialCharacters.includes(valor)) return;

        output += valor;
    }

    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", e => calculate(e.target.dataset.value));
});


