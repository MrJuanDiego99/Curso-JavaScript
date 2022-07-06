'use strict'

//Eventos del raton

//var boton = document.getElementById("boton")

function cambiarcolor() {
    var bg = boton.style.background;
    if(bg == "blue"){
        boton.style.background = "green";
    }else{
        boton.style.background = "blue";
    }
}

var boton = document.getElementById("boton");

//CLICK

//Se puede crear el evento desde el js para no tener que llamar funciones js desde el html
boton.addEventListener("click", function(){
    cambiarcolor();
    this.style.border = "10px solid black" //Se puede usar this para trabajar sobre el objeto que lo contenga
});

//MOUSE OVER
boton.addEventListener("mouseover", function(){
    boton.style.background = "#ccc";
});

//MOUSE OUT
boton.addEventListener("mouseout", function(){
    boton.style.background = "yellow";
});


//-------------------------
var input = document.getElementById("campo_nombre");

//FOCUS
input.addEventListener("focus", function(){
    console.log("[focus] estas dentro del input")
});

//BLUR
input.addEventListener("blur", function(){
    console.log("[blur] estas fuera del input")
});

//KEYDOWN
input.addEventListener("keydown", function(event){
    console.log("[keydown] Pulsando esta tecla "+ String.fromCharCode(event.keyCode))
});

//KEYPRESS
input.addEventListener("keypress", function(event){
    console.log("[keypress] Tecla presionada "+ String.fromCharCode(event.keyCode))
});

//KEYUP
input.addEventListener("keyup", function(event){
    console.log("[keyup] tec "+ String.fromCharCode(event.keyCode))
});