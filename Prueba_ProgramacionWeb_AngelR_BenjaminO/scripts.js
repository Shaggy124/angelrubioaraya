// Esperar a que se cargue todo el contenido de la página
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la referencia al elemento de imagen del logo de carga
    var logoCarga = document.getElementById("logoCarga");

    // Array de URLs de imágenes personalizadas para el logo de carga
    var imagenesPersonalizadas = [
        "https://geekytheory.com/content/images/2015/02/loading.gif",
        // Agrega más URLs según sea necesario
    ];

    // Elegir aleatoriamente una imagen personalizada del array
    var indiceAleatorio = Math.floor(Math.random() * imagenesPersonalizadas.length);
    var urlImagenPersonalizada = imagenesPersonalizadas[indiceAleatorio];

    // Cambiar la fuente de la imagen del logo de carga
    logoCarga.src = urlImagenPersonalizada;
});
