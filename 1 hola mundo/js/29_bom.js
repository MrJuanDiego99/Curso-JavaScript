'use strict'

//BOM - Browser Object Model

function getBom(){
    console.log(window.innerHeight); //Permite ver que altura tiene la ventana
    console.log(window.innerWidth); //Permite ver que ancho tiene la ventana
}

function redirec(){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url, "", "width=400, heigth=300");
}
getBom();
