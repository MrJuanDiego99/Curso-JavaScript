'use strict'

/*Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultao*/

var sum = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero>=0){
        sum = sum+numero;
        contador++
    }

}while(numero>=0)

alert ("la suma de todos los numeros es "+sum);
alert("la media de todos lo numeors es: "+ (sum/contador));