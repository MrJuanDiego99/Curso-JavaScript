//Comprobamos si el documento esta listo

$(document).ready(function(){
    console.log("Estamos listos..")

    //Selector de id
    $("#rojo").css("background", "red") // el signo de $ hacer referencia a jQuery y el # a id
              .css("color", "white");

    var amarillo = $("#amarillo");
    amarillo.css("background", "yellow")

    $("#verde").css("background", "green")
               .css("color", "white");

    //Selectores de Clase
    var mi_clase = $(".zebra").css("padding", "3px"); // el . hace referencia a clase
    
    $(".sin_border").click(function(){
        console.log("click dado");
        $(this).addClass("zebra");
    });

    //Selectores de etiqueta
    var parrafos = $("p").css("cursor", "pointer");

    parrafos.click(function(){
        var t = $(this);
        if(!t.hasClass("grande")){
            t.addClass("grande");
        }else{
            t.removeClass("grande");
        }
    });

    //Selectores de atributos
    $('[title="Google"]').css("background", "#ccc"); // Usando [] se selcciona atributos
    $('[title="Facebook"]').css("background", "#ccc");
    
    //Otros
    var busqueda = $("#caja").find(".resaltado"); // Con find busco en #caja todos los elementoc con clase .reslatado

});