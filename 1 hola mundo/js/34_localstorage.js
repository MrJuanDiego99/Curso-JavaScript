'use stric'

//localstorage

//Comprobar si el localstorage existe
if (typeof(Storage) !== 'undefined'){
    console.log("LocalStorage disponible");
}else{
    console.log("INCOMPATIBLE con LocalStorabe ")
}

//Como guardar datos en el localstorage
localStorage.setItem("titulo", "Curso de java");

//Recuperar elementos
localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
    nombre: "Juan",
    email: "jj@gmail.com",
    web: "juan_diego_j"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usurario"))
console.log(userjs);

//Borrar un elemento particular
localStorage.removeItem("usuario");

//limpiar todo el local storage
localStorage.clear();