//3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp


 var texto = "";
do {
    var CadenasDeTextos = prompt("Introduce tu texto");
    if (texto == " ") {
        texto = texto + CadenasDeTextos;
    }
 else {
        texto = texto + "-" + CadenasDeTextos;
}
} while (confirm("Desea seguir?"));
document.write(texto);
