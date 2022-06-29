'use strict'

/*Bucle while*/

var year = 2018;

while(year<2051){
    //Ejecuta esto
    console.log("Estamos en el año "+ year);
    if(year==2000){
        break; //Corta el bucle evaluando una condicion
    }
    year++;
}

//Do while
var years = 20;
do{
    alert("Solo cuado sea diferente a 20");
    years++;
}while(years>25)