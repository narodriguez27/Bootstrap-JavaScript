
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