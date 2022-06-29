'use strict'
/*VARIABLES
Una variable es un contenedor de informacion
las variables se las define con la palabra reservada var
las variables simpre deben tener un nombre claro*/
var pais = "España";
var continente = "Europa";

//Concatenacion de variables
var pais_continente = pais + ' ' + continente;

//Si quiero cambiar el valor de una variabel solo es necesario escribir el nombre de la variable con el nuevo valor
//ya no hay necesidad de volver a dleclararla como var
pais = "Colombia"

console.log(pais, continente);
alert(pais_continente);