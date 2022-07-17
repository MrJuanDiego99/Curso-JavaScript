'use strict'

//Fetch (ajax) y peticiones a servicios / apis rest

var usuarios = [];
var div_usuarios = document.getElementById("usuarios");
var div_janet = document.getElementById("janet");

getUsuarios()
    .then(data => data.json()) //Capturamos el data convirtiendolo a json
    .then(users => { //guardamos los datos recogidos en la variable usuarios
        //usuarios = users.data; 
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJanet(user.data)

        return getInfo();
    })
    .then(data =>{
        console.log(data);
    });

function getUsuarios(){
    return fetch("https://reqres.in/api/users?page=2"); //AQUI RECIBE UN LINK QUE TIENE LOS DATOS
}

function getJanet(){
    return fetch ("https://reqres.in/api/users/2");
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i)=>{
        let nombre = document.createElement("h2");
        nombre.innerHTML = i + " "+ user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre)
    });
}

function getInfo(){ //Como crear una promesa
    var estudiante = {
        nombre: "Juan",
        apellidos: "Jojoa",
        url: "juan@gmail.com"
    };

    return new Promise((resolve, reject)=>{
        var estudiante_string = JSON.stringify(estudiante);
        if (typeof estudiante_string != "string") {
            return reject("error");
        }else{
            return resolve(estudiante_string);
        }
    })
}

function mostrarJanet(user){
        let nombre = document.createElement("h3");
        let avatar = document.createElement("img")
        nombre.innerHTML = + " "+ user.first_name + " " + user.last_name;
        avatar.src = user.avatar

        div_janet.appendChild(nombre)
        div_janet.appendChild(avatar)
}
