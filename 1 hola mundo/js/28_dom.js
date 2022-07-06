'use strict'

//DOM - Document object Model
//Permite editar lo elementos

function cambiacolor(color){
    caja.style.background = color

}

//Conseguir elementos con un ID concreto
var caja = document.getElementById("micaja");

caja.innerHTML = "¡TEXTO DESDE JS!"; //Se edita el texto que tiene la caja desde el JS
caja.style.color = "white";
caja.style.padding = "20px";
caja.style.background = "red";

//Conseguir elementos por su etiqueta
var todoslosdiv = document.getElementsByTagName("div");
console.log(todoslosdiv);

//Conseguir elementos por su clase css
var divrojos = document.getElementsByClassName("rojo");


var div;
for(div in divrojos){
    if(divrojos[div].className == "rojo"){
        divrojos[div].style.background = "green";
    }
}


//cambiacolor("green");