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

Confeccionar una función a la cual le envíe tres enteros y los muestre ordenados de menor a mayor.


function menorMayor(valorUno, valorDos, valorTres){

}

let numeroUno = parseInt(prompt("Ingrese el primer numero: "));
let numeroDos = parseInt(prompt("Ingrese el segundo numero: "));
let numeroTres = parseInt(prompt("Ingrese el segundo numero: "));

document.write("<br>");
menorMayor(numeroUno,numeroDos,numeroTres);