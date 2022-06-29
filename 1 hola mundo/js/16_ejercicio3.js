'use strict'

/*Que nos diga si un numero es par o impar
1. ventana pront
2. validar que el numero sea valido */

var number = parseInt(prompt("Introduce un numero", 0));

while(isNaN(number)){
    parseInt(prompt("Introduce un numero", 0));
}
if (number%2 == 0){
    alert("Es un numero par");
    
}else{
    alert("Es un numero impar");
}