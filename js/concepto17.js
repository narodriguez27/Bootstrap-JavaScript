//Resolucion 1//

function menorEnteros(valorUno, valorDos, valorTres){
        if(valorUno < valorDos && valorUno < valorTres){
            document.write("El menor de los tres valores es : ",valorUno);
            document.write("<br>");
        }else if(valorDos < valorTres){
            document.write("El menor de los tres valores es : ",valorDos);
            document.write("<br>");
        }else{
            document.write("El menor de los tres valores es : ",valorTres);
            document.write("<br>");
        }
}

let numeroUno = parseInt(prompt("Ingrese el primer numero: "));
let numeroDos = parseInt(prompt("Ingrese el segundo numero: "));
let numeroTres = parseInt(prompt("Ingrese el segundo numero: "));
document.write("Los tres valores ingresados son: ",numeroUno,"-",numeroDos,"-",numeroTres);
document.write("<br>");
menorEnteros(numeroUno,numeroDos,numeroTres);

//Resolucion 2//

function menorMayor(valorUno, valorDos, valorTres){
    if (valorUno < valorDos && valorUno < valorTres) {
        document.write(valorUno + ' ');
        if (valorDos < valorTres) {
            document.write(valorDos + ' ' + valorTres);
        } else {
            document.write(valorTres + ' ' + valorDos);
        }
    } else {
        if (valorDos < valorTres) {
            document.write(valorDos + ' ');
            if (valorUno < valorTres) {
                document.write(valorUno + ' ' + valorTres);
            } else {
                document.write(valorTres + ' ' + valorUno);
            }
        } else {
            document.write(valorTres + ' ');
            if (valorUno < valorDos) {
                document.write(valorUno + ' ' + valorDos);
            } else {
                document.write(valorDos + ' ' + valorUno);
            }
        }
    }
}

let numeroUno = parseInt(prompt("Ingrese el primer numero: "));
let numeroDos = parseInt(prompt("Ingrese el segundo numero: "));
let numeroTres = parseInt(prompt("Ingrese el segundo numero: "));
document.write('Los tres valores ingresados son ' + numeroUno + ' ' + numeroDos + ' ' + numeroTres + '<br>');
document.write('Los valores ordenados de menor a mayor son: ');
document.write("<br>");
menorMayor(numeroUno,numeroDos,numeroTres);