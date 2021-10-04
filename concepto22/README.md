Ingresar una serie de nombres por teclado hasta que se cargue la palabra Fin, y mostrar cuántos nombres se ingresaron.
Igual al anterior, pero que termine la aplicación sin contemplar mayúsculas ni minúsculas. Es decir que para salir se pueda teclear fin, Fin o FIN.
Realizar la búsqueda de un string clave en un string fuente. Se deberá ingresar una frase o texto (fuente) y luego la clave a buscar. En caso de encontrarla, imprimir la posición, de lo contrario una leyenda que indique que no está.
Ingresar una palabra o texto por teclado y determinar si es o no una palabra palíndromo. (Palabra que se lee de igual manera de adelante hacia atrás, que de atrás hacia delante)
Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique si el String tiene cargado el carácter @.
Cargar un String por teclado e implementar las siguientes funciones:
a) Imprimir la primera mitad de los caracteres de la cadena.
b) Imprimir el último carácter.
c) Imprimirlo en forma inversa.
d) Imprimir cada carácter del String separado con un guión.
e) Imprimir la cantidad de vocales almacenadas.
Codifique un programa que permita cargar una oración por teclado, luego mostrar cada palabra ingresada en una línea distinta.
Por ejemplo si cargo:
	La mañana está fría.
Debe aparecer:
La
mañana
está
fría.



//Resolucion 1//

function nombresIngresados() {
    let name;
    let acumuladorNombres = 0;
    do {
        name = prompt("Ingrese nombre: ");
        acumuladorNombres++;
    } while (name !=="Fin");
    acumuladorNombres --;
    document.write("La cantidad de nombres ingresados fueron: ",acumuladorNombres);
}

    nombresIngresados();    
    
 //Resolucion 2//

 function nombresIngresados() {
    let name;
    let acumuladorNombres = 0;
    do {
        name = prompt("Ingrese nombre: ");
        acumuladorNombres++;
    } while (name !=="Fin" && name !=="fin" && name !=="FIN")
    acumuladorNombres --;
    document.write("La cantidad de nombres ingresados fueron: ",acumuladorNombres);
}

    nombresIngresados();  

//Resolucion 3//

function palabraClave() {
    let frase = prompt("Ingrese la frase: ");
    let clave = prompt("Ingrese la palabra: ")
    document.write("La frase ingresada fue: ",frase,"<br>");
    if (frase.indexOf(clave) != -1) {
        document.write("Y la posicion en donde se encuentra la palabra ",clave," es: ",frase.indexOf(clave));
    }else{
        document.write("La palabra ",clave," no fue encontrada");
    }

}

palabraClave();

//Resolucion 4//

function palabraPalindromo(){
    let ingresaTexto = prompt("Ingrese texto o palabra para saber si palíndroma");
    let cantidad = 0;
    for (let f = 0; f < ingresaTexto.length; f++) {
        if (ingresaTexto.charAt(f) == ingresaTexto.charAt(ingresaTexto.length -1 -f)) {
            cantidad++;
        }
        
    }
    if (cantidad == ingresaTexto.length) {
        document.write(ingresaTexto," se lee igual en ambas direcciones");
    }else{
        document.write(ingresaTexto," no se lee igual en ambas direcciones");
    }
}

palabraPalindromo();

//Resolucion 5//


function validarEmail(correo) {
    let contador = 0;
    for (let f = 0; f < correo.length; f++) {
         if (correo.charAt(f) == "@") {
            contador++;
         }
    }
    if (contador != 0) {
        document.write("El email ingresado",correo," contiene el @");
    }else{
        document.write("El email ingresado ",correo," no contiene el @");

    }
}

let correo = prompt("Ingrese su correo:");
validarEmail(correo);

//Resolucion 6//


function imprimirPrimerMitad(texto) {
    document.write("El texto ingresado fue: ",texto);
    document.write("<br>");
    document.write("La primera mitad es: ");
    for (let f = 0; f < texto.length/2; f++) {
        document.write(texto.charAt(f));
    }  
    document.write("<br>");
}
function ultimoCaracter(texto) {
    document.write("El ultimo caracter es: ",texto.charAt(texto.length -1));
    document.write("<br>");
}
function formaInversa(texto) {
    document.write("El texto ingresado de formar inversa es: ");
    for (let f = 0; f < texto.length; f++) {
        document.write(texto.charAt(texto.length - f - 1));
    }
    document.write("<br>");
}
function vocalesAlmacenadas(texto) {
    let cant = 0;
    for (let f = 0; f < texto.length; f++) {
     if (texto.charAt(f) == 'a' ||
         texto.charAt(f) == 'e' ||
         texto.charAt(f) == 'i' ||
         texto.charAt(f) == 'o' ||
         texto.charAt(f) == 'u' ||
         texto.charAt(f) == 'A' ||
         texto.charAt(f) == 'E' ||
         texto.charAt(f) == 'I' ||
         texto.charAt(f) == 'O' ||
         texto.charAt(f) == 'U') {
            cant++;
     }
    }
   document.write('Cantidad de vocales:' + cant);
}
let texto = prompt("Ingrese texto: ")
imprimirPrimerMitad(texto);
ultimoCaracter(texto);
formaInversa(texto);
vocalesAlmacenadas(texto);

//Resolucion 7//
let frase = prompt('Ingrese una frase:');
for (let f = 0; f < frase.length; f++) {
    if (frase.charAt(f) == ' ') {
        document.write('<br>');
    } else {
        document.write(frase.charAt(f));
    }
}

