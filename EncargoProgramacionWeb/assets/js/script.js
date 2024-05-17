/*Funcion Lista Peliculas*/
function peliculas(){
    const pelis = {
        async: true,
        crossDomain: true,
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8c62f368e7msh97166192fa74c86p1ce04bjsn3cf4a5254211',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    $.ajax(pelis).done(function (response) {
        console.log(response);
        $.each(response, function(i, item){
            $("#peli").append(
                `<div class='col-3 col-6-medium col-12-small'>
                    <div class='card' style='background-color:rgb(248, 148, 71) ; border:0'>
                        <h5 class='card-title'>${item.rank}) ${item.title}</h5>
                        <img src='${item.image}' class='card-img-top image fit'>
                        <button style="color:white; background-color:black; border:0" type="button" class="btn btn-primary mt-2" data-toggle="modal" data-target="#modal_${item.rank}">
                            Saber Más
                        </button>
                    </div>
                    <div class="modal fade" id="modal_${item.rank}" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">${item.title}</h5>
                                    <button  type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Año de Estreno: ${item.year}<br><br>
                                    Genero: ${item.genre}<br><br>
                                    Calificacion: ${item.rating}<br><br>
                                    Descripción: ${item.description}

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            );
        });
    });
}

/*Funcion Lista Canciones*/
function canciones(){
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2024-05-16',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6610deeff9mshe390d415628123ep1c9189jsn864b3f9eb974',
            'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        $.each(response.chart.entries, function(i, item){
            $("#cancion").append(
                `<div class='col-3 col-6-medium col-12-small' style='background-color:rgb(248, 148, 71)>
                    <div class='card' >
                        <h5 class='card-title'>${item.rank}) ${item.artist}</h5>
                        <img src='${item.cover}' class='card-img-top image fit'>
                        <p>${item.title}</p>
                    </div>
                </div>`
            );
        });
    });
}
/*Validaciones de Inputs de Caracter*/
$("#nombre").on('blur',function(){
    const hasNumber = /\d/;
    if(hasNumber.test($("#nombre").val())){
        alert('Numeros no Permitidos, Ingrese SOLO Caracteres')
        $("#nombre").val('')
    }
})
$("#apellido").on('blur',function(){
    const hasNumber = /\d/;
    if(hasNumber.test($("#apellido").val())){
        alert('Numeros no Permitidos, Ingrese SOLO Caracteres')
        $("#apellido").val('')
    }
})
/*Validacion de Correo*/
$("#envio").click(function(event){
    var nombre = $("#nombre").val().trim();
    var apellido = $("#apellido").val().trim();
    var correo = $("#correo").val().trim();
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Verificar si los campos obligatorios están vacíos
    if (nombre === '' || apellido === '' || correo === '') {
        alert('Todos los campos obligatorios deben ser completados.');
        event.preventDefault();
    } else if (!regexCorreo.test(correo)) {
        // Si el correo electrónico no es válido, mostramos un mensaje de error
        alert('Por favor, introduce un correo electrónico válido.');
        event.preventDefault();
    } else {
        alert('Formulario de Registro Enviado Correctamente!!');
        $("#nombre").val('');
        $("#apellido").val('');
        $("#correo").val('');
        $("#opinion").val('');
        event.preventDefault(); 
    }
});