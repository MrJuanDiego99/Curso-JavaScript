'use strict'

//Timers

//SetInterval = funcion que se ejecuta cada cierto tiempo
var tiempo1 = setInterval(function(){
    console.log("Set interval ejecutando");
}, 3000); //3000 hace referencia a 3 segundos

//SetTimeout = funcion que se ejecuta una vez despues de un tiempo
var tiempo2 = setTimeout(function(){
    console.log("Set time out ejecutado");
}, 3000); //3000 hace referencia a 3 segundos

//Evento ligado al boton STOP para detener el bucle
var parar = document.getElementById("parar");
parar.addEventListener("click", function(){
    alert("Has parado el contador en bucle");
    clearInterval(tiempo1);
})