$(document).ready(function(){

    reloadlinks();

    $("#add_button").click(function(){
        $("#menu").append('<li><a href="' + $("#add_link").val() + '"></a></li>'); 
        reloadlinks();
    });

});

function reloadlinks(){  
    $("a").each(function(){  // Selecciono todo lo que tiene etiquea "a"
        var that = $(this);
        var enlace = that.attr("href"); //de esa etiqueta "a" selecciono "href"
        that.text(enlace);
    });
}
