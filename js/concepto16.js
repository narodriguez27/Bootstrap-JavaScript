
//Resolucion 1//

function numerosEnteros(){
    let numeroUno = parseInt(prompt("Ingrese primer numero entero: "));
    let numeroDos = parseInt(prompt("Ingrese segundo numero tiene que ser mayor al primero: "));
    for (let x = numeroUno; x <= numeroDos; x++){
        document.write(x);
        document.write("<br>");
    }
 }

numerosEnteros();