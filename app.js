let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);
let numeroMaximo = 10;

let listaNumerosSorteados = [] ;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeusuario));
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeusuario);
    //console.log(numeroSecreto);
    //console.log(numeroDeusuario === numeroSecreto);
    //console.log(intentos);
    if (numeroDeusuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez'  : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeusuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            if (numeroDeusuario < numeroSecreto){
                asignarTextoElemento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarcaja();
            //el limpiar caja sirve para borrar el registro que hace el console.log en el navegador
        }
    }
    return;
}
function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';
    
    //valorCaja.value ='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

    }else {
    //si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}   
function condicionesIniciales() {
    asignarTextoElemento ('h1','Juego del numero secreto!');
    asignarTextoElemento ('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 ;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarcaja();
    //indicar mensaje de intervaalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
}

condicionesIniciales();