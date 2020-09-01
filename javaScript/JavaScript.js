const botonAdivinarNumero = document.getElementById("adivina_numero");
const sumar = document.getElementById("sum");
const restar = document.getElementById("res");

let suposicionComputadora = document.getElementById("suposicion_computadora");
let suposicionUsuario = document.getElementById("suposicion_usuario");
let numeroClave = Math.floor(Math.random() * 10);
let numUser = 0;
let numeroComputadora = Math.floor(Math.random() * 10);


function actualizarNumero(operadorId) {

    if (operadorId === "sum" && numUser <= 9) {
        suposicionUsuario.innerText = ++numUser;
    }
    if (operadorId === "res" && numUser >= 1) {
        suposicionUsuario.innerText = --numUser;
    }
}

function nombreFuncion() {

    suposicionComputadora.innerText = numeroComputadora;
}

botonAdivinarNumero.addEventListener("click", nombreFuncion);
