// Validación de formulario de contacto

function validarForm() {
    //Valida el nombre
    if (document.formulario.nombre.value=="") {
        alert("El campo 'nombre' es obligatorio")
        document.formulario.nombre.focus()
        return false;
    }

    //Valida el apellido
    if (document.formulario.apellido.value=="") {
        alert("El campo 'apellido' es obligatorio")
        document.formulario.apellido.focus()
        return false;
    }

    //Valida el mail
    var ck_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    valor = document.getElementById("email").value;
    if(!(ck_email.test(valor))) {
        alert("El campo 'email' debe tener una dirección válida")
        document.formulario.email.focus()
        return false;
    }

    //Envia el formulario
    alert("Muchas gracias por su mensaje");
    document.formulario.submit();

}
