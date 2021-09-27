Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'.

//Resolucion 1//

let num1;
let num2;
let num3;

num1 = parseInt(prompt("Ingresar numero 1: "));
num2 = parseInt(prompt("Ingresar numero 2: "));
num3 = parseInt(prompt("Ingresar numero 3: "));

if (num1 < 10 || num2 < 10 || num3 < 10){
    document.write("Alguno de los numeros es menor a diez");
}