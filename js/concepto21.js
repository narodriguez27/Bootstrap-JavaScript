
//Resolucion 1//

function potenciaNumero(valorUno) {
    let potencia =  Math.pow(valorUno,3);
    document.write("La potencia del numero ingresado: ",valorUno," es: ",potencia);		
}

let valorUno = parseInt(prompt("Ingrese un numero para saber la potencia"));
potenciaNumero(valorUno);

//Resolucion 2//

function raizNumero(valorUno) {
    let raizDelNumero = Math.sqrt(valorUno);
    document.write("La raiz cuadrada del numero ingresado: ",valorUno," es: ",raizDelNumero);	
}

let valorUno = parseInt(prompt("Ingrese valor para saber la raiz cuadrada:"));
raizNumero(valorUno);

//RESOLUCION EXAMEN//

/*
Dada una lista de números y un número singular,
necesitamos crear una función que verifique si esa lista contiene 2 números que suman ese número singular.

*/


function sumValidator(list, number) {



const testList = [1, 7, 4, 2, 8];

document.write("Test 1: ", sumValidator(testList, 10) ? "Pass" : "Fail");
console.log("Test 2: ", !sumValidator(testList, 13) ? "Pass" : "Fail");
console.log("Test 3: ", !sumValidator(testList, 4) ? "Pass" : "Fail");