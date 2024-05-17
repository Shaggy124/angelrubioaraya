    function subirDatos(){
        const settings = {
            async: true,
            crossDomain: true,
            url: 'https://yahoo-weather5.p.rapidapi.com/weather?location=puntaarenas&format=json&u=c',
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c174a3fd0fmshf7c546246cb01f3p1cafacjsn3f2ca870abe7',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
            };
        
            $.ajax(settings).done(function (response) {
                console.log(response);
                console.log(response.forecasts);
                
                const forecast = response.forecasts;
                
                forecast.forEach(function(item){
                    const day = item.day;
                    const tempHigh = item.high;
                    const tempMin = item.low;
                    const estado = item.text;
                    $("#clima").append("<h1> Dia: "+day+" - Temperatura Maxima: "+tempHigh+"°C - Temperatura Minima: "+tempMin+"°C Estado: "+estado+"</h1>")
        
                });
               
            });
    }
    