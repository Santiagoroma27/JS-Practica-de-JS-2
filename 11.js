/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

var nombre1 = prompt("Persona 1:");

    var edad1 = Number(prompt("Edad 1:"));

    var Persona2 = prompt("Persona 2:");

    var edad2 = Number(prompt("Edad 2:"));

    var Persona3 = prompt("Persona 3:");

    var edad3 = Number(prompt("Edad 3:"));

    var maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        document.write("El más grande de los tres es: " + Persona1);}
    if (maximo == edad2) {
        document.write("El más grande de los tres es: " + Persona2);}
    if (maximo == edad3) {
        document.write("El más grande de los tres es: " + Persona3);}