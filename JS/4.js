//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

var suma = 0;
do {
    var Numero = prompt("Ingrese un número");
    if (Number(Numero) == Numero) {
       Numero = Number(Numero);
        suma = suma + Numero;
    }
    else {
        if (Numero != undefined) {
            alert(Numero + " No es un número.");
        }
    }
} while (Numero != undefined);
document.write(suma);
