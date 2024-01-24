let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoELemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoELemento("p", `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoELemento('p', "el numero secreto es menor")
        }else{
            asignarTextoELemento('p', "el numero secreto es mayor")
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario"); //id del input que usamos
    valorCaja.value = '';
    return
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoELemento('p','Ya se sortearon todos los números posibles');

    } else{
        //si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
    
    
}

function condicionesIniciales(){
    asignarTextoELemento("h1", "Juego del número secreto");
    asignarTextoELemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje al inicio de los valores
    condicionesIniciales();
    //generar el nuevo numero aleatorio
    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled', 'true');
    //inicializar el número de intentos
}
condicionesIniciales();
