'use strict'
//Pruebas con let y var 

//Pruebas con var
var numero = 40; //VAR ES UNA VARIABLE GLOBAL se actualiza para tdo el codigo
console.log(numero); //valor 40

if(true){
    numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con let
var texto = "Juan"
console.log(texto); //valor juan

if(true){
    let texto = "Jojoa" //LET CREA UNA VARIABLE con alcance limitado, en este caso solo se actualiza para el ciclo if, al salir del ciclo el valor vuelve a ser el origial
    console.log(texto); //valor jojoa
}

console.log(texto); //valor juan