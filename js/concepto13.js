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