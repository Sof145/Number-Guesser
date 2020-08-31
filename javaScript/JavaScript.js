const botonAdivinarNumero = document.getElementById("boton_adivinar_numero");
const sumar = document.getElementById("sum");
const suposicionNumero = document.getElementById("suposicion_numero");
const restar = document.getElementById("res");

let numUser = 0;

function actualizarNumero(operadorId) {

    if (operadorId === "sum" && numUser <= 9) {
        document.getElementById("suposicion_numero").innerText = ++numUser;
    }
    if (operadorId === "res" && numUser >= 1) {
        document.getElementById("suposicion_numero").innerText = --numUser;
    }
}

