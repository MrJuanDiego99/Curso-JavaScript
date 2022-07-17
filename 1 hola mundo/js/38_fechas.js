'use strict'

var fecha = new Date(); //Aqui estoy gauardando la fecha local

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

var textInfo = `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
    `;

console.log(textInfo);