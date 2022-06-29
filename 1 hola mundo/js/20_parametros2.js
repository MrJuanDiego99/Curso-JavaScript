'use strict'

//Parametros REST y SPREAD

//REST
//Poniendo 3 puntos antes de un parametro me guarda los valores que llegan de mas en un array
function lsitadoFRutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta1: "+fruta1);
    console.log("Fruta2: "+fruta2);
}

lsitadoFRutas("Naranja", "Mandarina", "Sandia", "Pera", "Melosn");

//SPREAD
//Si paso como parametro un array y quiero que me lo lea valor por valor le pongo 3 puntos antes
var frutas = ["Naranja","Piña"]
lsitadoFRutas(...frutas, "Sandia", "Pera", "Melosn")