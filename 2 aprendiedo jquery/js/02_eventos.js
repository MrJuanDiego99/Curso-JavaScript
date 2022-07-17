$(document).ready(function(){

    // MoseOver y MouseOut

    var caja = $("#caja");
    // caja.mouseover(function(){
    //     $(this).css("background", "red");
    // });

    // caja.mouseout(function(){
    //     $(this).css("background", "blue");
    // });

    //Hover

    function cambiaRojo(){
        $(this).css("background", "red");
    }

    function cambiaAzul(){
        $(this).css("background", "blue");
    }

    caja.hover(cambiaRojo, cambiaAzul);

    // Click, Doble click

    caja.click(function(){
        $(this).css("background", "orange")
               .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color","yellow");
    });

    // Focus Blur

    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){ // dentro del elemento
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function(){ // cuado sale del elenento
        $(this).css("border", "2px solid transparent");
        datos.text($(this).val()).show();
    });

    //MouseDown MouseUp

    datos.mousedown(function(){ // Cuando se tiene el click presionado
        $(this).css("border-color", "grey");
    });

    datos.mouseup(function(){ // Cuand se suelta
        $(this).css("border-color", "black");
    });

    // MouseMove

    $(document).mousemove(function(){
        var sigueme = $("#sigueme");
        sigueme.css("left", event.clientX)
        sigueme.css("top", event.clientY)
    });

});