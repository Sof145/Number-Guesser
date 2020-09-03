let botonAdivinarNumero = document.getElementById("adivina_numero");
const siguienteRonda = document.getElementById("siguiente_ronda");

let suposicionComputadora = document.getElementById("suposicion_computadora");
let suposicionUsuario = document.getElementById("suposicion_usuario");
let numeroClave = document.getElementById("numero_clave");
let resultadoComputadora = document.getElementById("resultado_computadora");

let numUser = 0;
let numUserPuntaje = 0;
let numComputadoraPuntaje = 0;
let numRonda = 1;


function actualizarNumero(operadorId) {

    if (operadorId === "sum" && numUser <= 9) {
        suposicionUsuario.value = ++numUser;
    }
    if (operadorId === "res" && numUser >= 1) {
        suposicionUsuario.value = --numUser;
    }
}


const generarGanador = (numeroUser, numeroComputadora, objetivoNumero) => {

    let diferenciaUsuario = Math.abs(objetivoNumero - numeroUser);
    let diferenciaComputadora = Math.abs(objetivoNumero - numeroComputadora);

    let puntajeComputadora = document.getElementById("puntaje_computadora");
    let puntajeUsuario = document.getElementById("puntaje_usuario");


    if (diferenciaComputadora > diferenciaUsuario) {

        botonAdivinarNumero.innerText = "Ganaste!!!";
        puntajeUsuario.innerText = "Puntaje: " + ++numUserPuntaje;
    }
    else if (diferenciaUsuario === diferenciaComputadora) {

        botonAdivinarNumero.innerText = "Empate!!!";
        resultadoComputadora.innerText = "Empate!!!";
    }
    else {
        resultadoComputadora.innerText = "La Computadora Gano!!!";
        puntajeComputadora.innerText = "Puntaje: " + ++numComputadoraPuntaje;
    }

    botonAdivinarNumero.style.backgroundColor = "gainsboro";
    siguienteRonda.style.backgroundColor = "lightblue";

    suposicionUsuario = document.getElementById("suposicion_usuario");
    suposicionUsuario.disabled = "true";
}



const generarNumero = () => {

    let generarNumeroClave = Math.floor(Math.random() * 10);
    let generarNumeroComputadora = 5;

    suposicionUsuario = document.getElementById("suposicion_usuario").value;

 
    if (!(document.getElementById("adivina_numero").innerText === "Ganaste!!!" ||
        document.getElementById("resultado_computadora").innerText === "La Computadora Gano!!!") &&
        suposicionUsuario<=10) {

        numeroClave.innerText = "Numero Clave: " + generarNumeroClave;
        suposicionComputadora.innerText = generarNumeroComputadora;

        generarGanador(suposicionUsuario, generarNumeroComputadora, generarNumeroClave);

    }
    
}


const proximaRonda = () => {

    if (document.getElementById("adivina_numero").innerText === "Ganaste!!!" ||
        document.getElementById("resultado_computadora").innerText === "La Computadora Gano!!!" ||
        document.getElementById("resultado_computadora").innerText === "Empate!!!") {

        let ronda = document.getElementById("ronda");

        suposicionUsuario = document.getElementById("suposicion_usuario");
        numeroClave.innerText = "Numero clave: " + 0;
        ronda.innerText = "Ronda: " + ++numRonda;
        suposicionUsuario.value = 0;
        suposicionUsuario.disabled = "false";

        alert(suposicionUsuario.disabled);

        if (botonAdivinarNumero.innerText === "Ganaste!!!") {
            botonAdivinarNumero.innerText = "Adivina el numero";
            botonAdivinarNumero.style.backgroundColor = "lightblue";
        }
        else {
            resultadoComputadora.innerText = "";
            botonAdivinarNumero.style.backgroundColor = "lightblue";
        }

        siguienteRonda.style.backgroundColor = "rgb(242, 244, 246)"
    }
}


botonAdivinarNumero.addEventListener("click", generarNumero);
siguienteRonda.addEventListener("click", proximaRonda);