'use strict'

//Condicional IF

var edad1 = 30;
var edad2 = 12;

/*si pasa lo que esta entre parentesis que ejecute lo que esta entre llaves
Si edad1 es mayor que edad2 imprimir "Edad uno es mayor que edad dos" si no (else)
imprimir "La edad uno no es mayor que la edad dos"*/
if(edad1>edad2){
    console.log("Edad uno es mayor que edad dos");
}else{
    console.log("La edad uno no es mayor que la edad dos");
}

/*
OPERADORES RELACIONALES
Mayor >
Menor <
Mayor o igual >=
Menor o igual <=
Igual ==
Distinto != 
*/

var edad = 18;
var nombre = "Juan Jojoa";

if(edad>=18){
    //Es mayor de edad
    console.log(nombre+" tiene"+edad+" años, es mayor de edad");
    if(edad<=33){
        console.log("Todavia eres milenial");
    }else if(edad>=70){
        console.log("Eres anciano");
    }
}else{
    //Es menor de edad
    console.log(nombre+" tiene"+edad+" años, es Menor de edad");
}

/*
OPERADORES LOGICOS
AND(Y): &&
OR(0): ||
Negacion: !
*/

var year=2018;

//Negacion
if (year!=2016){ //si el año no es 2016
    console.log("El año no es 2016");
}

//AND
if (year>=2016 && year<=2020){ //si el año es mayor o igual al 2016 Y el año es menor o igual al 2000
    console.log("estamos en la era actual");
}

//OR
if (year==2008 || year==2018){ //si el año es igual al 2008 O el año es igual al 2018
    console.log("El año acaba en 8");
}