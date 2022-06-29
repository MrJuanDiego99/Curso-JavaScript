'use strict'

//Operadores
var n1 = 7;
var n2 = 12;

var operacion = n1 + n2; //las operaciones que existen son las que se conocen en matematicas (+, -, /, *) y % que muestra el residuo de una divicion 
alert("El resultado de la operacion es; "+ operacion) //El + tambien sirve para concatenar

//Tipos de datos 
var numero_entero = 44;            //Entero
var cadena_texto = "Hola que ta";  //Cadena
var verdader_falso = true;         //Boleano (True o false)

var numero_falso = "33.4";
Number(numero_falso); //Funcion que me convierte un numero string en number

//Con typeof puedo saber de que tipo es una variabe
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdader_falso);
console.log(typeof numero_falso);