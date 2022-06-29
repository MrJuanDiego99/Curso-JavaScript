'use strict'

/*Funciones
Una funcion es una agrupacion reutilizable de un conjunto de instrucciones*/

//Con return la funcion devuelve algo
//Defino la funcion
function calculadora1() {
    //instrucciones que se vana  ejecutar
    console.log("Hola soy la calculadora");
    return "Hola soy la calculadora ofocial";
}

//Invocar o llamar la funcion
calculadora1();

//Parametros de una funcion
function calculadora(numero1, numero2) {
    return(numero1+numero2);
}

//Invocar o llamar la funcion lo que esta entre parentesis son los valores que recivira la funcion
console.log(calculadora(12,2));

//Parametros pcionales
function calculadora2(numero1, numero2, mostrar=false) {
    if (mostrar=false) {
        console.log(numero1+numero2);
    }else{
        document.write(numero1-numero2);
    }
}

calculadora2(5,3);
calculadora2(5,3,true);


