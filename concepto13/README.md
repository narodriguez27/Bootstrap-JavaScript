Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.
Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.
En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado)
Mostrar los múltiplos de 10 hasta el valor 1500.
Debe aparecer en pantalla 10 - 20 -30 etc.
Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.
Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
Emplear el operador "%" en la condición de la estructura condicional.
	if (valor%2==0)
El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.

//Resolucion 1//

let notasMayor;
let notaMenor;
let x;

notasMayor = 0;
notasMenor = 0;
x = 0;

while (x < 10){
  let nota;
  nota = parseInt(prompt("Ingrese Nota: "));
  if (nota >=7){
      notasMayor = notasMayor +1;
  }else{
    notasMenor = notasMenor +1;
  }
  x = x + 1;
}
document.write("Las notas mayores son: ", notasMayor);
document.write("<br>")
document.write("Las notas menores son: ",notasMenor);


//Resolucion 2//

let x;
let suma;
suma = 0;
x = 0;
while (x < 5){
    let altura;
    altura = parseInt(prompt("Ingrese su altura"));
    suma = suma + altura;
    x = x + 1;
}
let promedio = suma/5;
document.write("El promedio de la altura de las 5 personas es: ", promedio);


//Resolucion 3//

    let sueldos; 
    let entreCien;
    let mesDeTrecientos;
    let totalPagar;
    let x;
    x = 0;
    entreCien = 0;
    mesDeTrecientos = 0;
    totalPagar = 0;

    while (x < 5){
        sueldos = parseInt(prompt("Ingrese sueldo: "));
        if (sueldos <= 300 && sueldos >= 100){
            entreCien = entreCien + 1;
        }else{
            mesDeTrecientos = mesDeTrecientos + 1;

        }
        x = x +1;     
        totalPagar = totalPagar + sueldos;
    }


    document.write ("Los empleados que cobran entre 100 y 300 son: ", entreCien, " y los que cobran mas de 300 son : ", mesDeTrecientos);
    document.write ("<br>");
    document.write ("La empresa paga un total de: ", totalPagar);

    //Resolucion 4//


	let acumulador;
    let x; 
    x = 0;
    acumulador = 0;

    while (x < 20){
        acumulador = acumulador + 5;
        x = x + 1;
                document.write ("El termino numero: ", x, " es : ", acumulador);

        document.write("<br>");
    }
    
    //Resolucion 5//

    let x;
    x = 0;

    while (x < 1500){
        x = x + 10;
        document.write("Los multiplos de 10 son: ", x);
        document.write("<br>");
    }

    //Resolucion 6//


    let listaUno = 0;
    let listaDos = 0;
    let x = 0;
    let numeroIngresado;

    while (x < 3){
        numeroIngresado = parseInt(prompt("Ingrese Valor de la primera lista: "));
        listaUno = listaUno + numeroIngresado;
        x = x + 1
    }
     x = 0; // Para iniciar un nuevo bucle, debemos volver a iniciarlizar el acumulador//
    while (x < 3){
        numeroIngresado = parseInt(prompt("Ingrese Valor de la Segunda lista: "));
        listaDos = listaDos + numeroIngresado;
        x = x + 1
    }
        if (listaUno > listaDos){
            document.write("La lista mayor es la 1 con: ",listaUno);
        }else if (listaUno < listaDos){
            document.write("La lista mayor es la 2 con: ",listaDos);
        }else{
            document.write("Ambas listas son iguales");
        }

 //Resolucion 7//

let numerosEnteros = 0;
let numerosImpares = 0;
let numerosIngresados;
let x = 0;

while ( x < 5){
    numerosIngresados = parseInt(prompt("Ingrese Numero: "));
    if (numeroIngresado %2==0){
        numerosEnteros = numerosEnteros + 1;
    }else{
        numerosImpares = numerosImpares + 1;
    }
    x = x +1;
}

document.write ("Los numeros pares son: ",numerosEnteros);
document.write ("<br>");
document.write ("Los numeros impares son: ",numerosImpares);