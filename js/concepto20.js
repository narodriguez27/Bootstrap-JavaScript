
//Resolucion 1//

function ingresoElementos(nuevaArray) {
    for (let f = 0; f < nuevaArray.length; f++) { 
    let numeroIngresado = parseInt(prompt("Ingrese numero:"));
        nuevaArray[f] = numeroIngresado;
    }
}
        
function valorAcumuladoElementos(nuevaArray) {
    let valorAcumuladoVector = 0;
    for(let f = 0; f < nuevaArray.length; f++){
        valorAcumuladoVector = valorAcumuladoVector + nuevaArray[f];
    }
    document.write(valorAcumuladoVector, "<br>");
}
function valorAcumuladoMayores36(nuevaArray) {
    let valorAcumuladoMayoresA36 = 0;
    for (let f = 0; f < nuevaArray.length; f++) {
        if (nuevaArray[f] > 36){
            valorAcumuladoMayoresA36++;
        }
    }
    document.write("Los valores acumulados mayores a 36 son: ",valorAcumuladoMayoresA36, "<br>");
}
function valorAcumuladoMayores50(nuevaArray) {
    let valorAcumuladoMayoresA50 = 0;
    for (let f = 0; f < nuevaArray.length; f++) {
        if (nuevaArray[f] > 50){
            valorAcumuladoMayoresA50++;
        }
    }
    document.write("Los valores acumulados mayores a 50 son: ",valorAcumuladoMayoresA50, "<br>");
}

let nuevaArray = new Array(8);
ingresoElementos(nuevaArray);
valorAcumuladoElementos(nuevaArray);
valorAcumuladoMayores36(nuevaArray);
valorAcumuladoMayores50(nuevaArray);

//Resolucion 2//


function solicitarNumeroVector(vectorUno,vectorDos) {
    for (let f = 0; f < vectorUno.length; f++) {
        let primerNumero = parseInt(prompt("Ingrese numero del primer vector"));
        vectorUno[f] = primerNumero;
    }
    for (let f = 0; f < vectorDos.length; f++) {
        let segundoNumero = parseInt(prompt("Ingrese numero del segundo vector"));
        vectorDos[f] = segundoNumero;
    }
}

function sumarVectores(vectorUno,vectorDos,sumaVectoresUnoDos) {
   for (let f = 0; f < sumaVectoresUnoDos.length; f++) {
        sumaVectoresUnoDos[f] = vectorUno[f] + vectorDos[f]   
   }
}

function resultadoSumaVectores(sumaVectoresUnoDos) {
    for (let f = 0; f < sumaVectoresUnoDos.length; f++) {
       document.write("La suma de los vectores es: ",sumaVectoresUnoDos[f],"<br>");
        
    }
}

let vectorUno = new Array (3);
let vectorDos = new Array (3);
let sumaVectoresUnoDos = new Array (3);
solicitarNumeroVector(vectorUno,vectorDos);
sumarVectores(vectorUno,vectorDos,sumaVectoresUnoDos);
resultadoSumaVectores(sumaVectoresUnoDos);