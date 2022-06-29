'use strict'

/* programa que 
1. pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y la consola
3. Ordenar y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementostiene el array
6. Busqueda de un valor introducido ´pr el usuario y que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textCustom = "") {
    document.write("<h1Contenido del array" + textCustom + "</h1>")
    document.write("<ul>");
    elementos.forEach((elemento, indice) => {
        document.write("<li>" + elemento + "</li>")
    });
    document.write("</ul>");

}
//Pedir 6 numeros
var numeros = new Array(6);
for (var i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt("Introduce un numero: ", 0));
}

//Mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//Mostrar array en la consola
console.log(numeros);

//Ordenarlo y mostrarlo
numeros.sort();
mostrarArray(numeros, "ordenados");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "Revertido");

//Cuantos elementos tiene un array
document.write("El array tiene: " + numeros.length() + " elementos");

//Busqueda
var busqueda = parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex(numero => 
    numero == busqueda);

if(posicion && posicion != -1){
    document.write("ENCONTRADO");
    document.write("Psosicion de la busqueda: "+ posicion)
}else{
    document.write("NOOOO ENCONTRADO"); 
}


