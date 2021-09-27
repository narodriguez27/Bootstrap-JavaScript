Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresa el 9999 (no sumar dicho valor, solamente indica que ha finalizado la carga). Imprimir el valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero.
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.
Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo. De cada una de las personas censadas se tiene la siguiente información: número de documento, edad y sexo ('femenino' o 'masculino')
Se pide confeccionar un programa que lea los datos de cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:
 
a)	Cantidad total de personas censadas.
b)	Cantidad de varones.
c)	Cantidad de mujeres.
d)	Cantidad de varones cuya edad varía entre 16 y 65 años.

//Resolucion 1//

let numeroIngresado = 0;
let numeroAcumulado = 0;

do{
    numeroIngresado = parseInt(prompt("Ingresar numero (Para detener el programa ingrese el numero: 9999) : "));
        if (numeroIngresado != 9999){
                 numeroIngresado = numeroIngresado + numeroAcumulado;
        }
} while (numeroIngresado != 9999);

    document.write ("El numero acumulado es: ", numeroAcumulado);
    document.write("<br>");
    if (numeroAcumulado < 0){
        document.write("El numero es menor a 0");
    }else if (numeroAcumulado == 0){
        document.write("El numero es 0");
    }else{
        document.write("El numero es mayor a 0");
    }

    //Resolucion 2//

let numeroDeCuenta;
let nombre;
let saldo = 0;
let saldoAcre = 0;

    do{
        numeroDeCuenta = parseInt(prompt("Ingrese Numero de Cuenta: "));
        if (numeroDeCuenta >=0){
            nombre = prompt("Nombre del Cliente: ");
            saldo = parseFloat(prompt("Saldo Actual: "));
            if (saldo > 0){
                saldoAcre = saldoAcre + saldo;
                document.write(nombre," tiene saldo acreedor");
                document.write("<br>");
            }else if (saldo < 0){
                document.write(nombre," tiene saldo deudor");
                document.write("<br>");
            }else{
                document.write(nombre," tiene saldo nulo");
                document.write("<br>");
            }
        }
    }while (numeroDeCuenta > 0){
        document.write(" La suma total es: ", saldoAcre);
        document.write("<br>");
    }

    //Resolucion 3//

    let totalDePersonas = 0;
    let cantidadVarones = 0;
    let cantidadMujeres = 0;
    let cantidadVaronesTotal = 0;
    let numeroDocumento = 0;
    let edad = 0;
    let sexo;
    let totalVaronesRangoEdad = 0;

    do{
        numeroDocumento = parseInt(prompt("Ingrese numero de documento (para dejar de ingresar presione 0 : "));
        if (numeroDocumento > 0){
        edad = parseInt(prompt("Ingrese su edad: "));
        if (edad >= 16 && edad <= 65){
            totalVaronesRangoEdad = totalVaronesRangoEdad + 1;
        }
        sexo = prompt("Ingrese su sexo: ");
        if (sexo == "femenino"){
            cantidadMujeres = cantidadMujeres +1;
        }else{
            cantidadVarones = cantidadVarones +1;
        }

        cantidadVaronesTotal = totalVaronesRangoEdad+cantidadVarones;
        totalDePersonas = cantidadVaronesTotal + cantidadMujeres;
    }
    }while(numeroDocumento != 0){

        document.write("Cantidad de personas censadas: ",totalDePersonas,"<br>","Cantidad de mujeres en total: ",cantidadMujeres, "<br>", "Cantidad de hombres en total: ",cantidadVaronesTotal,"<br>","Cantidad de varones que varian entre 16 y 65 años: ",totalVaronesRangoEdad );

    }