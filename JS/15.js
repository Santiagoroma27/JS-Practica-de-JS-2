/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

var cadena = prompt("Introduce una cadena de texto:");
var text = cadena.length;    
cadena = cadena.toUpperCase();  
var car;
var contador = 0;
var i;
for (i = 0; i < text; i++) {
    car = cadena.charAt(i);
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");

/* DEMORA UNA BANDA!!*/