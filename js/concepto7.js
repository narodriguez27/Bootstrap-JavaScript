

//Resolucion 1//
let num1;
let num2;

num1 = parseInt(prompt("Ingrese primer numero: "));
num2 = parseInt(prompt("Ingrese segundo numero: "));

if (num1 > num2){
    let suma, diferencia;
    suma = (num1) + (num2);
    diferencia = (num1) - (num2);
    document.write("La suma es: ", suma, " y la diferencia es: ",diferencia);
}else{
    let producto, division;
    producto = (num1) * (num2);
    division = (num1)/(num2);
    document.write("el producto es: ", producto, " y la division es: ",division);
}

//Resolucion 2//

let nota1;
let nota2;
let nota3;
let notaSuma;
let notaFinal;
nota1 = parseInt(prompt("Ingrese nota 1: "));
nota2 = parseInt(prompt("Ingrese nota 2: "));
nota3 = parseInt(prompt("Ingrese nota 3: "));

notaSuma = nota1 + nota2 + nota3;
notaFinal = notaSuma/3;

if (notaFinal >= 4){
    document.write("Regular");
}else{
    document.write("Reprobado");
}

//Resolucion 3//

let num1;
num1 = parseInt(prompt("Ingrese numero"));

if (num1 < 10){
    document.write("El numero es de 1 digito");
}else{
    document.write("el numero es de 2 digitos");
}
