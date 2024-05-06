document.getElementById("btnConsultarClima").addEventListener("click", function() {
    // Llamada a la API para obtener el clima de Punta Arenas para los próximos 10 días
    fetch("https://api.boostr.cl/weather/SCCI.json")
    .then(response => response.json())
    .then(data => {
        // Mostrar el resultado en la página
        mostrarClima(data);
    })
    .catch(error => {
        console.error("Ha ocurrido un error:", error);
    });
});

function mostrarClima(data) {
    // Mostrar los datos del clima en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = `
        <h2>Clima en Punta Arenas para los próximos 10 días:</h2>
        <ul>
            <li>Día 1: ${data.dia1}</li>
            <li>Día 2: ${data.dia2}</li>
            <!-- Continuar con los demás días -->
        </ul>
    `;
}
