Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes y el año)
Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples)
Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en la página la leyenda ' Todos los números son menores a diez'.
Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.

//Resolucion 1//
let dia;
let mes;
let año;

dia = parseInt(prompt("Ingrese el dia: "));
mes = parseInt(prompt("Ingrese el mes: "));
año = parseInt(prompt("Ingrese el año: "));

if (dia == 24 && mes == 12){
    document.write("Es Navidad")
}else{
    document.write("No es Navidad")
}

//Resolucion 2//

let num1;
let num2;
let num3;

num1 = parseInt(prompt("Ingrese primer numero: "));
num2 = parseInt(prompt("Ingrese segundo numero: "));
num3 = parseInt(prompt("Ingrese tercer numero: "));

if(num1 == num2 && num2 == num3 && num1 == num3){
    let resultado;
    resultado = (num1 + num2) * num3; 
    document.write(resultado);
}else{
    document.write("Los numeros no son iguales");
}

//Resolucion 3//
let num1;
let num2;
let num3;

num1 = parseInt(prompt("Ingrese primer numero: "));
num2 = parseInt(prompt("Ingrese segundo numero: "));
num3 = parseInt(prompt("Ingrese tercer numero: "));

if(num1 < 10 && num2 < 10 && num3 < 10){
    document.write("Todos los numeros son menores a 10");
}else{
    document.write("Son mayores a 10");
}

//Resolucion 4//

let x, y;
x = parseInt(prompt('Ingrese coordenada x'));
y = parseInt(prompt('Ingrese coordenada y'));
if (x > 0 && y > 0) {
    document.write('Se encuentra en el primer cuadrante');
} else {
    if (x < 0 && y > 0) {
        document.write('Se encuentra en el segundo cuadrante');
    } else {
        if (x < 0 && y < 0) {
            document.write('Se encuentra en el tercer cuadrante');
        } else {
            if (x > 0 && y < 0) {
                document.write('Se encuentra en el cuarto cuadrante');
            } else {
                document.write('Se encuentra sobre un eje');
            }
        }
    }
}

//Resolucion 5//

let sueldo;
let antiguedad;


sueldo = parseInt(prompt("Ingrese su sueldo: "));
antiguedad = parseInt(prompt("Ingrese su antiguedad: "));

if (sueldo < 500 && antiguedad >= 10){
    document.write("Se le otorga un aumento del 20%");
    document.write("<br>");
    let sueldototal = sueldo + sueldo * 0.20;
    document.write("El sueldo total es:" + sueldototal);

}else if(sueldo < 500 && antiguedad < 10){
    document.write("Se le otorga un aumento del 5%");
    document.write("<br>");
    let sueldototal = sueldo + sueldo * 0.05;
    document.write("El sueldo total es:" + sueldototal);
}else{
    document.write("El sueldo total es:",sueldo);
}