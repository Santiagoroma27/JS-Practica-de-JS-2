/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

var NumRep = prompt ("Introduce un número");
if (Number(NumRep) == NumRep) {
   
    if (NumRep > 0 && NumRep <= 50) {
        var rep,i;
      
        for (i = 0; i <=NumRep; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert ("El número ingresado no es válido");
    }
} 
else {
    alert ("No has ingresado un numero");
}