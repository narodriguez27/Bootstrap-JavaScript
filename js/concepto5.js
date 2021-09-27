
//Resolucion 1//
let lado;
lado = prompt ("Ingrese el lado del cuadrado: ");
let perimetro;
perimetro = parseInt(lado)*4;
document.write("El Perimetro del cuadrado es: ");
document.write(perimetro);

//Resolucion 2//
let num1;
let num2;
let num3;
let num4;

num1 = prompt ("Ingrese el primer numero: ");
num2 = prompt ("Ingrese el segundo numero: ");
num3 = prompt ("Ingrese el tercer numero: ");
num4 = prompt ("Ingrese el cuarto numero");

let suma;
suma = parseInt (num1) + parseInt(num2);
let producto;
producto = parseInt (num3) * parseInt(num4);

document.write("La suma de los dos primeros numeros es: ");
document.write(suma);
document.write("<br>")
document.write("El producto de los dos ultimos numeros es: ");
document.write(producto);

//Resolucion 3//

let num1;
let num2;
let num3;
let num4;

num1 = prompt ("Ingrese el primer numero: ");
num2 = prompt ("Ingrese el segundo numero: ");
num3 = prompt ("Ingrese el tercer numero: ");
num4 = prompt ("Ingrese el cuarto numero");

let suma;
suma = parseInt (num1) + parseInt(num2) + parseInt (num3) + parseInt(num4);
let producto;
producto =  parseInt (num1) * parseInt(num2) * parseInt(num3) * parseInt(num4);

document.write("La suma de los  numeros es: ");
document.write(suma);
document.write("<br>")
document.write("El producto de los  numeros es: ");
document.write(producto);

//Resolucion 4//

let precio;
let cantidad;
precio = prompt ("Ingrese el precio del producto: ");
cantidad = prompt ("Ingrese la cantidad del producto: ");
let resu;
resu = parseInt (precio) * parseInt (cantidad);
document.write("El total a abonar es: ");
document.write(resu);