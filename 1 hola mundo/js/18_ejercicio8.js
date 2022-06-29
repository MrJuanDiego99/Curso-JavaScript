'use strict'

/*Calculadora que pida 2 numeros por pantalla
1. si metemos uno mal que los velva a pedir
2. que muetre en el cuerpo de la pagina, en un a alerta y por consola
   el resultado de sumar, restar, multiplicar y dividir las dos cifras */

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el primer numero", 0));

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el primer numero", 0));
}

var resultado ="La suma es :"+(numero1+numero2)+"<br/>"
                "La resta es :"+(numero1-numero2)+"<br/>"
                "La multiplicacion es :"+(numero1*numero2)+"<br/>"
                "La divicion es :"+(numero1/numero2)+"<br/>";

var resultadoCMD ="La suma es :"+(numero1+numero2)+"\n"
                "La resta es :"+(numero1-numero2)+"<\n>"
                "La multiplicacion es :"+(numero1*numero2)+"<\n>"
                "La divicion es :"+(numero1/numero2)+"<\n>";

document.write(resultado);
alert(resultadoCMD);
