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

function canciones(){
    const musica = {
        async: true,
        crossDomain: true,
        url: 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100?week=2024-05-16',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c174a3fd0fmshf7c546246cb01f3p1cafacjsn3f2ca870abe7',
            'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
        }
    };

    $.ajax(musica).done(function (response) {
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
