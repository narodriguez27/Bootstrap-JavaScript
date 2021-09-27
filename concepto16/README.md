Confeccionar una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
4 5 6 7 8 9 10  


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