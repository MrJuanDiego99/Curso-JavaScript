'use strict'

/*  Programa que pida dos numeros y diga cual es el mayor, el menos
y si son iguales
PLUS: si los numeros no son un mueros o son menores o iguales a 0, nos los vuelva a pedir*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){
    var numero1 = parseInt(prompt("Introduce el primer numero", 0));
    var numero2 = parseInt(prompt("Introduce el segundo numero", 0));
} //Este while es la solucion al PLUS

if(numero1==numero2){
    alert("Los numeros son iguales");
}else if(numero1>numero2){
    alert("El numero mayor es "+numero1);
    alert("El numero menor es "+numero2);
}else if(numero1<numero2){
    alert("El numero mayor es "+numero2)
    alert("El numero menor es "+numero1);
}else{
    alert("INTRODUCE NUMEROS CORRECTOS")
}

