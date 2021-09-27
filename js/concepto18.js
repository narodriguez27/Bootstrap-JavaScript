
//Resolucion 1//

function retornarMayor(valorUno, valorDos, valorTres) {
    if(valorUno > valorDos && valorUno > valorTres){
        return valorUno;
    }else if (valorDos > valorTres){
        return valorDos;
    }else{
        return valorTres;
    }
}

let numeroUno = parseInt(prompt("Ingrese valor numero uno: "));
let numeroDos = parseInt(prompt("Ingrese valor numero dos: "));
let numeroTres = parseInt(prompt("Ingrese valor numero tres: "));
document.write("Los valores ingresados son: ",numeroUno," ",numeroDos," ",numeroTres);
document.write("<br>");
retornarMayor(numeroUno,numeroDos,numeroTres);
let mayor = retornarMayor(numeroUno,numeroDos,numeroTres);
document.write("El numero mayor es: ",mayor);

//Resolucion 2//

function perimetro(valorUno) {
    return valorUno*4;
}

let numeroUno = parseInt(prompt("Ingrese el lado del cuadrado para saber su perimetro: "));
document.write("El numero ingresado para calcular el perimetro del cuadrado es : ",numeroUno);
document.write("<br>");
perimetro(numeroUno);
let calcularPerimetro = perimetro(numeroUno);
document.write("El perimetro del cuadrado es: ",calcularPerimetro);

//Resolucion 3//

function retonarDigitos(valorUno) {
    if (valorUno < 10){
        return "El valor es de un digito";
    }else
    if (valorUno < 100) {
        return "El valor es de dos digito";
    }else
    if (valorUno < 1000){
        return "El valor es de tres digito";
    }else
    if (valorUno < 10000){
        return "El valor es de cuatro digito";
    }
    if (valorUno < 100000){
        return "El valor es de cinco digito";
    }else
        return "Solo se puede ingresar hasta 5 digitos"

}

let numeroUno = parseInt(prompt("Ingrese su numero hasta 5 digitos"));
document.write("El numero ingresado es: ",numeroUno);
document.write("<br>");
retonarDigitos(numeroUno);
let digitos = retonarDigitos(numeroUno);
document.write(digitos);

//Resolucion 4//

function retonarPromedio(valorUno, valorDos, valorTres) {
    let suma = 0;
    suma = valorUno + valorDos + valorTres;
    return suma/3;
}

let numeroUno = parseInt(prompt("Ingrese valor numero uno: "));
let numeroDos = parseInt(prompt("Ingrese valor numero dos: "));
let numeroTres = parseInt(prompt("Ingrese valor numero tres: "));
document.write("Los valores ingresados son: ",numeroUno," ",numeroDos," ",numeroTres);
document.write("<br>");
retonarPromedio(numeroUno,numeroDos,numeroTres);
let calcularPromedio = retonarPromedio(numeroUno,numeroDos,numeroTres);
document.write("El promedio es: ",calcularPromedio);

//Resolucion 4//

function retornarSuma(valorUno, valorDos, valorTres, valorCuatro, valorCinco) {
    let suma = 0;
    suma = valorUno + valorDos + valorTres + valorCuatro + valorCinco;
    return suma;
}

let numeroUno = parseInt(prompt("Ingrese valor numero uno: "));
let numeroDos = parseInt(prompt("Ingrese valor numero dos: "));
let numeroTres = parseInt(prompt("Ingrese valor numero tres: "));
let numeroCuatro = parseInt(prompt("Ingrese valor numero cuatro: "));
let numeroCinco = parseInt(prompt("Ingrese valor numero cinco: "));
document.write("Los valores ingresados son: ",numeroUno," ",numeroDos," ",numeroTres," ",numeroCuatro," ",numeroCinco);
document.write("<br>");
retornarSuma(numeroUno,numeroDos,numeroTres,numeroCuatro,numeroCinco);
let calcularSuma = retornarSuma(numeroUno,numeroDos,numeroTres,numeroCuatro,numeroCinco);
document.write("La suma de los valores es: ",calcularSuma);