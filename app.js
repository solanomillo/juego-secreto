let numero_secreto = 0;
console.log(numero_secreto);
let intentos = 0;
let lista_numeros_sorteados = []
let numero_maximo = 10;


function asigmar_texto_elemento(elemento, texto){
    let elemento_html = document.querySelector(elemento);
    elemento_html.innerHTML = texto;
    return;
}

function verificar_intento(){
    let numero_usuario = parseInt(document.getElementById("valor_usuario").value);

    if(numero_usuario ===numero_secreto){
        asigmar_texto_elemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(numero_usuario > numero_secreto){
            asigmar_texto_elemento("p","El número secreto es menor");            
        }
        else{
            asigmar_texto_elemento("p","El número secreto es mayor")
        }
        intentos++;
        limpiar_caja();
    }
    return;
}

function limpiar_caja() {
    document.querySelector("#valor_usuario").value = "";  
    
}

function generar_numero_secreto() {
    let numero_generado = Math.floor(Math.random()*numero_maximo)+1;
    // si ya sorteamos todos los números
    if(lista_numeros_sorteados.length == numero_maximo){
        asigmar_texto_elemento("p","Ya se sortearon todos los números posibles");
    }
    else{
        // si el numero generado esta incluido en la lista
        if (lista_numeros_sorteados.includes(numero_generado)) {
            return generar_numero_secreto()        
        }
        else{
            lista_numeros_sorteados.push(numero_generado);
            return numero_generado;
        }        
    }    
}

function condiciones_iniciales() {
    asigmar_texto_elemento("h1","Juego del Número Secreto");
    asigmar_texto_elemento("p",`Indica un número del 1 al ${numero_maximo}`);
    numero_secreto = generar_numero_secreto()
    intentos = 1;
}


function reiniciar_juego() {
    // limpiar caja
    limpiar_caja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condiciones_iniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "True");  
    
}

condiciones_iniciales()


