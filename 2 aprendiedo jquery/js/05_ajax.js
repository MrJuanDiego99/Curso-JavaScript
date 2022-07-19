$(document).ready(function () {
    
    //metodo LOAD
    //permite hacer una peticion por GET e incrustarla en un div

    // $("#datos").load("https://reqres.in/");

    //metodo GET y POST

    $.get("https://reqres.in/api/users",{page: 3},function(response){
        response.data.forEach(element=> {
            $("#datos").append("<p>"+element.first_name+"  "+element.last_name+"</p>");
            
        });
    });

    $("#form").submit(function(e){ 
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };

        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);

        });    
    });

    

});