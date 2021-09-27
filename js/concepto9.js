
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