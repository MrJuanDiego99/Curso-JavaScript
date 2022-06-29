'use strict'

//Transformacion de textos

var num = 444;
var tex1 = "Bienvenido al curso de como ser hombre";
var tex2 = "Hola que hace";

num.toString(); //Convertimos el numero a string
tex1.toUpperCase(); //Convertir texto en a mayusculas
tex1.toLowerCase() //Convertir texto en minusculas

//Calcular longitud de un texto

var nom = "";
nom.length(); //Cuenta cuantas letras tiene un string o cuantos elementos tiene un array

//Concatenar

var textoTotal = tex1+tex2;
var textoTotal = tex1.concat(tex2);

//BUSQUEDAS

//Ver si un a palabra existe dentro de un string

var busqueda = tex1.indexOf("curso"); //sacar la primera coincidencia