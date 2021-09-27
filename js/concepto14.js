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