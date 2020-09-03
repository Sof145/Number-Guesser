let botonAdivinarNumero = document.getElementById("adivina_numero");
const siguienteRonda = document.getElementById("siguiente_ronda");

let suposicionComputadora = document.getElementById("suposicion_computadora");
let suposicionUsuario = document.getElementById("suposicion_usuario");
let numeroClave = document.getElementById("numero_clave");

let numUser = 0;
let numUserPuntaje = 0;
let numComputadoraPuntaje = 0;


function actualizarNumero(operadorId) {
    
    if (operadorId === "sum" && numUser <= 9) {
        suposicionUsuario.innerText = ++numUser;
    }
    if (operadorId === "res" && numUser >= 1) {
        suposicionUsuario.innerText = --numUser;
    }
}


const generarGanador = (numeroUser, numeroComputadora, objetivoNumero) => {

    let diferenciaUsuario = Math.abs(objetivoNumero - numeroUser);
    let diferenciaComputadora = Math.abs(objetivoNumero - numeroComputadora);

    let resultadoComputadora = document.getElementById("resultado_computadora");
    let puntajeComputadora = document.getElementById("puntaje_computadora");
    let puntajeUsuario = document.getElementById("puntaje_usuario");


    if (diferenciaComputadora > diferenciaUsuario) {

        botonAdivinarNumero.innerText = "Ganaste!!!";
        puntajeUsuario.innerText = "Puntaje: " + ++numUserPuntaje;
        botonAdivinarNumero.style.backgroundColor = "gainsboro";
    }
    else {
        resultadoComputadora.innerText = "La Computadora Gano!!!";
        puntajeComputadora.innerText = "Puntaje" + ++numComputadoraPuntaje;
        botonAdivinarNumero.style.backgroundColor = "gainsboro";
    }
}



const generarNumero = () => {

    let generarNumeroClave = Math.floor(Math.random() * 10);
    let generarNumeroComputadora = Math.floor(Math.random() * 10);

    suposicionUsuario = document.getElementById("suposicion_usuario").innerText;

    
    if (!(document.getElementById("adivina_numero").innerText === "Ganaste!!!" ||
        document.getElementById("resultado_computadora").innerText === "La Computadora Gano!!!")) {

        numeroClave.innerText = "Numero Clave: " + generarNumeroClave;
        suposicionComputadora.innerText = generarNumeroComputadora;

        generarGanador(suposicionUsuario, generarNumeroComputadora, generarNumeroClave);

    }
    else {
        botonAdivinarNumero.style.backgroundColor = "gainsboro";
    }
}


const proximaRonda = () => {
    suposicionUsuario = document.getElementById("suposicion_usuario");
    alert("Proxima ronda");
    alert(suposicionUsuario);
    suposicionUsuario.innerText = 0;
    alert(suposicionUsuario);
}


botonAdivinarNumero.addEventListener("click", generarNumero);
alert("proxima ronda");
siguienteRonda.addEventListener("click", proximaRonda);
alert("proxima ronda");