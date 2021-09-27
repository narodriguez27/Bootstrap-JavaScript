
//Resolucion 1//
let num1;
let num2;
let num3;

num1 = parseInt(prompt("Ingrese numero 1: "));
num2 = parseInt(prompt("Ingrese numero 2: "));
num3 = parseInt(prompt("Ingrese numero 3: "));

if (num1 > num2){
    document.write("El numero mayor es: ", num1);
}else if (num2 > num3){
    document.write("El numero mayor es: ", num2);
}else{
    document.write("El numero mayor es: ", num3);
}

//Resolucion 2//

let num1

num1 =parseInt(prompt("Ingrese numero: "));

if (num1 >= 1) {
    document.write("Numero es positivo");
}else if (num1 == 0) {
    document.write("El numero es cero")
}else{
    document.write("El numero es negativo");
}

//Resolucion 3//

let num1;

num1 = parseInt(prompt("Ingrese numero: "));


if (num1 < 10){
    document.write("El numero es de una cifra");
}else if (num1 < 100){
    document.write("El numero es de dos cifras");
}else{
    document.write("El numero es de tres cifras");
}

//Resolucion 4//

let nombre;
nombre = prompt('Ingrese el nombre del postulante');
let cantpreguntas;
cantpreguntas = parseInt(prompt('Cantidad de preguntas del test'));
let cantcorrectas;
cantcorrectas = parseInt(prompt('Cantidad de preguntas correctas'));
let porcentaje;
porcentaje = cantcorrectas / cantpreguntas * 100;
if (porcentaje >= 90) {
    document.write('Nivel superior');
} else {
    if (porcentaje >= 75) {
    document.write('Nivel medio');
} else {
    if (porcentaje >= 50) {
            document.write('Nivel regular');
} else {
        document.write('Fuera de nivel');
        }
    }
}