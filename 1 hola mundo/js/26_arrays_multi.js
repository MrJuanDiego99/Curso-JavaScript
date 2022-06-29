'use strict'

//arrays dentro de otros arrays

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad duele","La vida","Gran torino"];

peliculas.sort(); //Me ordena el array de alfabeticamente
peliculas.reverse(); //le da la vuelta al array

var cine = [categorias, peliculas];

console.log(cine[0][1]); //Estoy buscandoel dato ([1]) dentro del array de categotias ([0])


peliculas.push("Batman"); //Añadir datos a un array
peliculas.pop; //Elimina el ultimo elemto de un array

//Borrar un dato especifico de un array
var indice = peliculas.indexOf("Gran torino")

if (indice > -1) {
    peliculas.splice(indice, 1);
}

//convertir un array en cadena de texto
var cadena =  peliculas.join();
console.log(peliculas);

//Convertir un STRING a un array
var cadena = "texto1, texto2, texto3, texto4";
var cadena_array = cadena.split(", ") //cada que encuentre un (, ) me guarda los datos como valor del array
console.log(cadena_array);