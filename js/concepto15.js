
//Resolucion 1//

let contador = 0;

for (let x = 0; x < 3; x++ ){
    let base = 0;
    let altura = 0;     
    let superficie = 0;
    base = parseInt(prompt("Ingrese Base: "));
    altura = parseInt(prompt("Ingrese Altura: "));
    superficie = (base * altura)/2;
    if (superficie > 12){
        contador ++;
    }
    document.write("La base del triango  es: ",base);
    document.write("<br>");
    document.write("La altura del triango  es: ",altura);
    document.write("<br>");
    document.write("La superficie del triango  es: ",superficie);
    document.write("<br>");
}

document.write("La canidada de triangulos cuya superficie es mayor a 12 es: ", contador)

//Resolucion 2//

let sumatoria = 0;

for ( y = 0; y < 10; y++ ){
    let num = parseInt(prompt("Ingrese numeros : "));
    if (y >= 5){
        sumatoria = sumatoria + num;
    }
}

document.write("La suma de los ultimos 5 numeros es: ",sumatoria);


//Resolucion 3//


for (let g = 1; g <= 10; g++){
    let tabla = 5;
    tabla = tabla * g;
    document.write("La taba del 5 es: ",tabla);
    document.write("<br>");

}

//Resolucion 4//


let numeroIngresado = parseInt(prompt("Ingrese numero: "));
let contador = numeroIngresado
for (let h = 1; h <= 12; h++){
    document.write("Los primero 12 terminos del grupo ingresado es : ",contador);
    document.write("<br>");
    contador = contador + numeroIngresado;
}

//Resolucion 5//

let equilatero = 0;
let isosceles = 0;
let escaleno = 0;

for (let x = 1; x <= 4; x++){
    let ladoUno = parseInt(prompt("Ingrese el primer lado del triangulo: "));
    let ladoDos = parseInt(prompt("Ingrese el segundo lado del triangulo: "));
    let ladoTres = parseInt(prompt("Ingrese el tercero lado del triangulo: "));

    if (ladoUno == ladoDos && ladoUno == ladoTres ){
        document.write("Triangulo Equilatero");
        document.write("<br>");
        equilatero ++
    }else if (ladoUno == ladoDos || ladoUno == ladoTres || ladoDos == ladoTres){
        document.write("Triangulo Isósceles");
        document.write("<br>");
        isosceles++
    }else{
    document.write("Triangulo Escaleno");
    document.write("<br>");
    escaleno++;
    }
}
    document.write ("La cantidad de triangulos equilateros son: ",equilatero);
    document.write("<br>");
    document.write ("La cantidad de triangulos isosceles son: ",isosceles);
    document.write("<br>");
    document.write ("La cantidad de triangulos escaleno son: ",escaleno);
    document.write("<br>");
    if (equilatero < isosceles && equilatero < escaleno){
        document.write("Hay menos cantidad de los triangulos equilateros");
    }else if(isosceles < equilatero){
        document.write("Hay menos cantidad de los triangulos isosceles");
    }else{
        document.write("Hay menos cantidad de los triangulos escaleno");
    }

//Resolucion 6//

let cuad1 = 0;
let cuad2 = 0;
let cuad3 = 0;
let cuad4 = 0;
let cant = parseInt(prompt('Cuantos puntos procesará:'));
cant = parseInt(cant);
    for (let f = 1; f <= cant; f++) {
    let x = parseInt(prompt('Ingrese coordenada x:'));
    let y = parseInt(prompt('Ingrese coordenada y:'));
     if (x > 0 && y > 0) {
     cuad1++;
    } else {
        if (x < 0 && y > 0) {
            cuad2++;
    } else {
        if (x < 0 && y < 0) {
           cuad3++;
    } else {
        if (x > 0 && y < 0) {
           cuad4++;
                        }
                    }
                }
            }
        }

 //Resolucion 7//


let valoresNegativos = 0;
let valoresPositivos = 0;
let valoresMultiplos = 0;
let valoresPares = 0;

for (let x = 1; x <= 10; x++){
    let numeroIngresado = parseInt(prompt("Ingrese los numeros"));
    if (numeroIngresado < 0){
        valoresNegativos++
    }else if (numeroIngresado >= 0){
        valoresPositivos++
    }else if (numeroIngresado % 15==0 && numeroIngresado != 0){
        valoresMultiplos++
    }else if (numeroIngresado % 2 ==0){
        valoresPares = valoresPares + numeroIngresado;
    }
}

document.write("La cantidad de valores negativos son: ", valoresNegativos);
document.write("<br>");
document.write("La cantidad de valores positivos son: ", valoresPositivos);
document.write("<br>");
document.write("La cantidad de valores multiplos de 15 son: ", valoresMultiplos);
document.write("<br>");
document.write("La cantidad de valores pares ingresados son: ", valoresPares);

//Resolucion 8//

let promedioMañana = 0;
let promedioTarde = 0;
let promedioNoche = 0;
let sumaPromedioMañana = 0;
for (let x = 1; x <= 5; x++){
    let edades = parseInt(prompt("Ingrese edad del turno Mañana: "));
    sumaPromedioMañana = sumaPromedioMañana + edades;
}
let sumaPromedioTarde = 0;
for (let x = 1; x <= 6; x++){
    let edades = parseInt(prompt("Ingrese edad del turno Tarde: "));
    sumaPromedioTarde = sumaPromedioTarde + edades;
}
let sumaPromedioNoche = 0;
for (let x = 1; x <= 11; x++){
    let edades = parseInt(prompt("Ingrese edad del turno Noche: "));
    sumaPromedioNoche = sumaPromedioNoche + edades;
}

promedioMañana = sumaPromedioMañana/5;
document.write("El Promedio de edades del turno Mañana es: ",promedioMañana);
document.write("<br>");
promedioTarde = sumaPromedioTarde/6;
document.write("El Promedio de edades del turno Tarde es: ",promedioTarde);
document.write("<br>");
promedioNoche = sumaPromedioNoche/11;
document.write("El Promedio de edades del turno Noche es: ",promedioNoche);
document.write("<br>");

if(promedioMañana > promedioTarde && promedioMañana > promedioNoche ){
    document.write("El Turno Mañana tiene el promedio mas alto");
}else if(promedioTarde > promedioMañana && promedioTarde > promedioNoche){
    document.write("El Turno Tarde tiene el promedio mas alto");
}else{
    document.write("El Turno Noche tiene el promedio mas alto");
}
