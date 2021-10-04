

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

