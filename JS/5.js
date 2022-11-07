/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar». */

var resto = 0;
var Letra = "";
do {
    var numero = prompt("Introduce tu dni");
    if (Number(numero) == numero) {
        numero = Number(numero);
        if (numero >= 0 && numero <= 99999999) {
            resto = numero % 23;
            switch (resto) {
                case 0:
                    Letra = "T";
                    break;
                case 1:
                    Letra = "R";
                    break;
                case 2:
                    Letra = "W";
                    break;
                case 3:
                    Letra = "A";
                    break;
                case 4:
                    Letra = "G";
                    break;
                case 5:
                    Letra = "M";
                    break;
                case 6:
                    Letra = "Y";
                    break;
                case 7:
                    Letra = "F";
                    break;
                case 8:
                    Letra = "P";
                    break;
                case 9:
                    Letra = "D";
                    break;
                case 10:
                    Letra = "X";
                    break;
                case 11:
                    Letra = "B";
                    break;
                case 12:
                    Letra = "N";
                    break;
                case 13:
                    Letra = "J";
                    break;
                case 14:
                    Letra = "Z";
                    break;
                case 15:
                    Letra = "S";
                    break;
                case 16:
                    Letra = "Q";
                    break;
                case 17:
                    Letra = "V";
                    break;
                case 18:
                    Letra = "H";
                    break;
                case 19:
                    Letra = "L";
                    break;
                case 20:
                    Letra = "C";
                    break;
                case 21:
                    Letra = "K";
                    break;
                case 22:
                    Letra = "E";
                    break;
                default:
                    alert("Numero erroneo");
            }
        }
        alert("Numero: " + numero + ", Letra: " + Letra);
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined);
