'use strict'

/*Funciones anonimas
Funcion que no tiene nombre*/


function sumame(num1, num2, sumaymuestra, sumapordos) {
    var sumar = num1+num2;
    sumaymuestra(sumar);
    sumapordos(sumar);
}

//aqui estarian las funciones aninimas
/*A la funcion principal sumame le estoy mandando 2 numeros y dos funciones anonimas
*/
sumame(5,7,function(dato) {
    console.log("La suma es: "+dato);
},
function (dato) {
    console.log("La suma por dos es: "+(dato*2));
    
});

//Funcion flecha
/*en las funciones anonimas se puede quitar la palabra funcion y simplemente se escribe
el parametro que va a recivir y una flecha seguda del bloque de instrucciones */
sumame(5,7,dato => {
    console.log("La suma es: "+dato);
},
dato => {
    console.log("La suma por dos es: "+(dato*2));
    
});
