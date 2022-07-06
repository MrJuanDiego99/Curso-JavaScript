'use strict'

//JSON - JavaScript Objet Notation
//variable que tiene varias propiedades

var pelicula = {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: "USA"
};

var peliculas = [
    {titulo: "La verad duele", year: 2015, pais: "Francia"},
    pelicula
]

console.log(peliculas);

var caja_peliculas = document.getElementById("peliculas")
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+ " - " + pelicula[index].year);
    caja_peliculas.append(p);
}

