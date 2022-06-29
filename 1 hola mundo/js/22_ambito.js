'use estrict'

/*Si quiero llamar una variable creada fuera de una funcion puedo hacerlo
pero no puedo llamar afuera una variable que creada dendro de una funcion */

function holaMundo(texto) {
    var hola = "Texto dentro de funcion";

    console.log(texto);
    console.log(numero.toString()); //toString me convierte un number en string
    console.log(hola);
}

var numero = 12;
var texto = "Hola soy variable global";
holaMundo(texto);

