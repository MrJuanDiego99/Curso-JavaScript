'use strict'

/*Tabla de multiplicar de un numero por pantalla */

var numero = parseInt(prompt("De que numero quieres la tabla)", 1));

for (var i=1; i<=10; i++) {
    document.write(i+ " x "+numero+ " = "+ (numero*i)+"<br/>");
    
}