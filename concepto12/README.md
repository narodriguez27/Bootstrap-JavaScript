Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado).
Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc.


//Resolucion 1//

let x;
let serie;
serie = 11;
x = 1;
while (x <= 25){
    document.write(x);
    document.write('<br>');
    x = x + 1;
    serie = serie +11;
}

//Resolucion 2//

let multriplos;
multriplos = 8;

while (multriplos <= 500){
    document.write(multriplos);
    document.write('<br>');
    multriplos = multriplos + 8;
}

let multiplo8;
multiplo8 = 8;
while (multiplo8 <= 500) {
    document.write(multiplo8);
    document.write('<br>');
    multiplo8 = multiplo8 + 8;
}
