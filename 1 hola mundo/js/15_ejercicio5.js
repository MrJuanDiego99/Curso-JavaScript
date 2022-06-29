'use strict'

/*Mostrar todos los numeros divisores de un numero introduce en pront*/

var numero = parseInt(prompt("Introduce el primer numero", 0));

for(i=1; i<=numero; i++){
    if(numero%i == 0){
        console.log("Divisor: "+i);
    }
}