/*14- Realiza un script que pida una cadenaDeTexto de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

var CadenaDeTexto = prompt("Introduce una Cadena de texto:");
    var text = CadenaDeTexto.length;   
    var caracter;
    var i;
    for (i = 0; i < text; i++) {
	caracter = CadenaDeTexto.charAt(i);  
	if (i == text - 1) {
		document.write(caracter);
	}
	else {
		document.write(caracter + "-");
	}
    }