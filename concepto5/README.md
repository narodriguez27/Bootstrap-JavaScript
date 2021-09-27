
Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por cuatro)
Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del tercero y el cuarto.
Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.
Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)

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

