'use strict'

var form = document.getElementById("form");

form.addEventListener("submit", function(){
    var nombre = document.getElementById("txtnom").value;
    var apellido = document.getElementById("txtape").value;
    var edad = document.getElementById("txteda").value;

    var p_nom = document.getElementById("p_nom");
    var p_ape = document.getElementById("p_ape");
    var p_num = document.getElementById("p_num");

    p_nom.innerHTML = nombre;
    p_ape.innerHTML = apellido;
    p_num.innerHTML = edad;
})