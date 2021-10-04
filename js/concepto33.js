function Suma(valor1, valor2) { // clase
    this.valor1 = valor1;       // atributo
    this.valor2 = valor2;       // atributo
    this.primerValor = function(valor1) { // metodo
        this.valor1 = valor1;
    }
    this.segundoValor = function(valor2) { // metodo
        this.valor2 = valor2;
    }
    this.retornarResultado = function() { // metodo
        return this.valor1 + this.valor2;
    }
}

let suma1;
suma1 = new Suma(5, 10); //clase
document.write('La suma de 5 y 10 es:' + suma1.retornarResultado() + '<br>');
suma1.primerValor(70); // atributo
suma1.segundoValor(30);// atributo
document.write('La suma de 70 y 30 es:' + suma1.retornarResultado() + '<br>');


Plantear una clase persona (que permita cargar por teclado su nombre y edad).
Por otro lado crear una clase empresa que tenga como atributo la edad tope para que una persona pueda ingresar como trabajador en la misma (60 años)
Confeccionar un pequeño programa en JavaScript que defina 3 objetos de la clase persona y 1 de la clase empresa. Mostrar cuántas de esas personas están inhabilidadas para ingresar como trabajadores de acuerdo a la edad tope.



function IngresoPersonal(nombre,edad) {
    this.nombre = nombre = prompt("Ingrese su nombre: ");
    this.edad = edad = parseInt(prompt("Ingrese su edad: "));
}

let ingresoPersonal;
ingresoPersonal = new IngresoPersonal (nombre,edad);
nombre = prompt("Ingrese su nombre: ");
edad = parseInt(prompt("Ingrese su edad: "));

let validarIngreso;
validarIngreso = new ValidarIngreso();

