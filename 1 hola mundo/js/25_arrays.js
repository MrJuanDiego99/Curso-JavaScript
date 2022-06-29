'use strict'

//Arrays, arreglos Matrices

var nombres = ["Juan", "carlos", "Nelson"];

var lenguajes = new Array("PHP","JS","Go","Java") //Array definido como objeto

console.log(nombres); //Aqui me muestra todos los datos del array
console.log(nombres[2]); // aqui me muestra el elemeto numero 2 de array (comienza desde cero)

console.log(nombres.length); // me indica cuantos datos tiene el array

/*
var elemento = parseInt(prompt("Que elemto del array quieres?", 0));
if (elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que: " + nombres.length);
}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}
*/

//Mostrar todos los elemtos de un arrray por pantalla

document.write("<h1>Lenguajes de progrmacion<h2>");
document.write("<ul>");

//Forma 1 ciclo
for (var i = 0; i < lenguajes.length;  i++){
    document.write("<li>" + lenguajes[i] + "</li>")
}

//Forma 2 forEach
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>" + indice + " - " + elemento + "</li>")
})

//Forma 3 for in
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>")
}

document.write("</ul>");

//BUSQUEDAS

var busqueda = lenguajes.find(lenguaje => 
    lenguaje == "PHP");

var busqueda2 = lenguajes.findIndex(lenguaje => 
    lenguaje == "JS");
    
console.log(busqueda);
console.log(busqueda2);