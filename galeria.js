//Script de la galería

//Al hacer click en una imagen con la clase 'galeria_img'
$('.galeria_img').click(function(e){

    //Obtiene el link de la imagen clickeada
    var img=e.target.src;

    //Construye el modal y lo agrega al final del documento
    var modal=' <div class="modal" id="modal"><img src="'+img+'" class="modal_img"><div class="modal_boton" id="modalboton">X</div>'
    $('body').append(modal);

    //Cuando se hace click en el botón de cerrar, lo elimina
    $('#modalboton').click(function(){
        $('#modal').remove();
    })
});

//Al presionar una tecla en el documento
$(document).keyup(function(e){

    //Si la tecla presionada es la Esc
    if(e.which==27){

        //Elimina el modal
        $('#modal').remove();
    }
})
