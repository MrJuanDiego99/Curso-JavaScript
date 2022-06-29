'use strict'

//switch
var edad = 18;
var imprime = "";

//Dependiendo de la entrada busca a que caso se relaciona y ejecuta lo que pongamos para ese case
switch(edad){
    case 18:
        imprime = "acabas de cumplir la mayoria de edad";
    case 25:
        imprime = "Ya eres un adulto";
    case 40:
        imprime = "Crisis de los 40";
}
console.log(imprime);