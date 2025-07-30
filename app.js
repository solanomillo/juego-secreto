let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(etiqueta, texto){
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto
}


function verificarIntento(){    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);    
    
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos===1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sortearon todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles'); 
    }
    else{
         //si el numero genereado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }   
}

function condicionalesIniciales(){
    //Muestra los valores iniciales
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;  
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Iniciar el número de intentos
    condicionalesIniciales();
    //Deshabilitar el botón juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled','true');    
}


condicionalesIniciales();

