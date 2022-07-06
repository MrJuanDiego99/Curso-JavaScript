'use strict'

var formulario = document.getElementById("formp");

formulario.addEventListener("submit", function(){
    var pelicula = document.getElementById("addpelicula").value;
    localStorage.setItem(pelicula, pelicula);
})

var ul = document.getElementById("list");
for(var i in localStorage){
    if(typeof localStorage[i] == "string"){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}
