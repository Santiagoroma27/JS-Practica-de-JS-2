/* Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado. */ 


var vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var texto = prompt("Introduce un texto");
var PosicionDeVocal = 0;
var detener = false;
for (var i = 0; i < textomin.length; i++) {
    for (var Z = 0; Z < vocales.length; Z++) {
        if (vocales[Z] == textomin.charAt(i)) {
            PosicionDeVocal = i;
            detener = true;
            break;
        }
    }
    if (detener) {
        break;
    }
}
document.write("La 1era vocal está en la posición nº " + PosicionDeVocal);

/*Googlear el método para poner en minusculas*/
