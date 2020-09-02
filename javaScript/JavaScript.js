const botonAdivinarNumero = document.getElementById("adivina_numero");

let suposicionComputadora = document.getElementById("suposicion_computadora")

let suposicionUsuario = document.getElementById("suposicion_usuario");
let numeroClave = document.getElementById("numero_clave");
let numUser = 0;


function actualizarNumero(operadorId) {

    if (operadorId === "sum" && numUser <= 9) {
        suposicionUsuario.innerText = ++numUser;
    }
    if (operadorId === "res" && numUser >= 1) {
        suposicionUsuario.innerText = --numUser;
    }
}
alert("c1");
const generarGanador = (numeroUser, numeroComputadora, objetivoNumero) => {

    let diferenciaUsuario = Math.abs(objetivoNumero - numeroUser);
    let diferenciaComputadora = Math.abs(objetivoNumero - numeroComputadora);

    if (diferenciaComputadora > diferenciaUsuario) {
        botonAdivinarNumero.innerText = "Ganaste!!!";
    }
    else {
        resutadoComputadora.innerHTML = "La Computadora Gano!!!";
    }
}

alert("d2");
const generarNumero = () => {

    let generarNumeroClave = Math.floor(Math.random() * 10);
    let generarNumeroComputadora = Math.floor(Math.random() * 10);
    let resultadoComputadora = document.getElementById("resultado_computadora");

    suposicionUsuario = document.getElementById("suposicion_usuario");

    numeroClave.innerText = generarNumeroClave;
    suposicionComputadora.innerText = generarNumeroComputadora;

    generarGanador(suposicionUsuario, suposicionComputadora, numeroClave);
}

alert("c3");
botonAdivinarNumero.addEventListener("click", generarNumero);
