
//Resolucion 1

function calcularCuboNumero() {
let numeroIngresadoHtml = document.getElementById("numeroIngresado").value;
 numeroIngresadoHtml = parseInt(numeroIngresadoHtml);
 let cubo = numeroIngresadoHtml * numeroIngresadoHtml * numeroIngresadoHtml;
    alert(cubo);
}

//Resolucion 2

function mostrarMayor() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    if (num1 > num2) {
        alert('El mayor es ' + num1);
    } else {
        alert('El mayor es ' + num2);
    }
}

//Resolucion 3

function concatenar() {
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    document.getElementById('resultado').value = nom + ape;
}
