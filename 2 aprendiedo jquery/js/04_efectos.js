$(document).ready(function(){

    $("#mostrar").hide(); // hide para ocultar

    $("#mostrar").click(function(){ 
        $(this).hide();
        $("#ocultar").show(); // show para mostrar
        $("#caja").show("slow"); 
        $("#caja2").fadeIn("slow");
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show(); 
        $("#caja").hide("slow"); // con fast hace un efecto
        $("#caja2").fadeOut("slow"); // Ccon fade in/out hace otro efecto
    });

    $("#animar").click(function(){ 
        $("#caja3").animate({marginLeft: "500px",
                             fontSize: "40px",
                             height: "110px"}, "slow")
                    .animate({borderRadius: "900px",
                              marginTop: "80px"}, "slow")
                    .animate({borderRadius: "0px",
                              marginLeft: "0px"}, "slow");
    });
});