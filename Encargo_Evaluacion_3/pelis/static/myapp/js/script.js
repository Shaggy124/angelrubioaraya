/*Validaciones de Inputs de Caracter*/
/*$("#nombre").on('blur',function(){
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
})*/
$("#correo").on('blur',function(){
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test("#correo")) {
    // Si el correo electrónico no es válido, mostramos un mensaje de error
    alert('Por favor, introduce un correo electrónico válido.');
    }
})

$("#repcontrasenia").on('blur',function(){
    if ($("#repcontrasenia").val() != $("#contrasenia").val()) {
        alert('Repita Contraseña Correctamente!');
        $("#repcontrasenia").val('');
}})



/*Validacion de Correo*/
$("#envio").click(function(event){
    var usuario = $("#usuario").val().trim();
    var contrasenia = $("#contrasenia").val().trim();
    var repcontrasenia = $("#repcontrasenia").val().trim();
    var correo = $("#correo").val().trim();
    // Verificar si los campos obligatorios están vacíos
    if (usuario === '' || contrasenia === '' || correo === '' || repcontrasenia === '') {
        alert('Todos los campos deben ser completados.');
        event.preventDefault();
    } else if ($("#contrasenia").val() != $("#repcontrasenia").val()) {
            alert('Contraseña y Repetir Contraseña No Coinciden!');
            $("#contrasenia").val('');
            $("#repcontrasenia").val('');
    } else {
        alert('Formulario de Registro Enviado Correctamente!!');
        $("#usuario").val('');
        $("#contrasenia").val('');
        $("#repcontrasenia").val('');
        $("#correo").val('');
        event.preventDefault(); 
    }
});