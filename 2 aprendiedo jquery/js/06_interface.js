$(document).ready(function () {
    
    // Permite mover elementos por la pagina
    $(".elemento").draggable(); 

    // Redimensionar elementods de la pagina
    $(".elemento").resizable();

    // Seleccionar elementos
    //$(".lista").selectable();

    // Seleccionar y aordenar elementsos
    $(".lista").sortable(); //no se puede usar al mismo tiempo que selectable

    // Drop
    $("#movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area");
        }
    });

    // Efectos
    $("#mostrar").click(function(){ 
       $(".efectos").toggle("explode");
        
    });
});