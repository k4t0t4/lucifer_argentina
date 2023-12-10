//Script de la trivia

let cont_ayudas_global = 3; //Variable contador de ayudas

let puntos = 0; //Puntos totales

//Función que gestiona las ayudas
function ayuda(pregunta) {

    //Chequea si hay ayudas disponibles
    if (cont_ayudas_global > 0) {

         //Deshabilita opciones dependiendo de la pregunta
        switch (pregunta) {
            case 1:
                document.getElementById("P1R1").disabled = true;
                document.getElementById("P1R1").checked = false;
                document.getElementById("ayuda1").disabled = true;

                break;

            case 2:
                document.getElementById("P2R3").disabled = true;
                document.getElementById("P2R3").checked = false;
                document.getElementById("ayuda2").disabled = true;

                break;

            case 3:

                document.getElementById("P3R2").disabled = true;
                document.getElementById("P3R2").checked = false;
                document.getElementById("ayuda3").disabled = true;

                break;

            case 4:

                document.getElementById("P4R2").disabled = true;
                document.getElementById("P4R2").checked = false;
                document.getElementById("ayuda4").disabled = true;

                break;

            case 5:

                document.getElementById("P5R2").disabled = true;
                document.getElementById("P5R2").checked = false;
                document.getElementById("ayuda5").disabled = true;

                break;

            case 6:

                document.getElementById("P6R3").disabled = true;
                document.getElementById("P6R3").checked = false;
                document.getElementById("ayuda6").disabled = true;

                break;

            case 7:

                document.getElementById("P7R3").disabled = true;
                document.getElementById("P7R3").checked = false;
                document.getElementById("ayuda7").disabled = true;

                break;

            case 8:

                document.getElementById("P8R4").disabled = true;
                document.getElementById("P8R4").checked = false;
                document.getElementById("ayuda8").disabled = true;

                break;

            case 9:

                document.getElementById("P9R2").disabled = true;
                document.getElementById("P9R2").checked = false;
                document.getElementById("ayuda9").disabled = true;

                break;

            case 10:

                document.getElementById("P10R2").disabled = true;
                document.getElementById("P10R2").checked = false;
                document.getElementById("ayuda10").disabled = true;

                break;
        }
        //Le resta al contador de ayudas
        cont_ayudas_global--;
    } else {
        //Mensaje en caso de que no hayan más ayudas
        alert('No te quedan más ayudas');
    }
    //Muestra la cantidad de ayudas disponibles
    console.log('Ayudas: ' + cont_ayudas_global);
}

//Función que verifica respuestas y calcula puntos
function enviarRespuestas() {

    //Arrays con respuestas correctas y ayudas asociadas
    let correctas = ["P1R3", "P2R2", "P3R4", "P4R1", "P5R3", "P6R4", "P7R1", "P8R2", "P9R3", "P10R4"]; 
    let ayudas = ["ayuda1", "ayuda2", "ayuda3", "ayuda4", "ayuda5", "ayuda6", "ayuda7", "ayuda8", "ayuda9", "ayuda10"]; 
    //Variable para sumar puntos dependiendo del uso de ayudas
    let sumarPuntos;

    //Chequea respuestas correctas
    for (let i = 0; i < 10; i++) {
        if (document.getElementById(correctas[i]).checked == true) {
            sumarPuntos = 10;
            //Chequea si se usó la ayuda
            if (document.getElementById(ayudas[i]).disabled == true) {
                sumarPuntos = 7;
            }
            //Suma puntos dependiendo de si se usaron ayudas
            puntos += sumarPuntos;
        }
    }

    console.log('Puntos: ' + puntos);

    //Muestra resultado en pantalla
    document.getElementById("resultado").innerHTML = "Obtuviste " + puntos + " puntos totales";
    document.getElementById('envioForm').disabled = true;

}