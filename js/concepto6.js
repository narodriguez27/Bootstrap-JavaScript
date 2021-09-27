
//Resolucion 1//

let nota1;
let nota2;
let nota3;

nota1 =  parseInt(prompt ("Ingrese primer nota"));
nota2 =  parseInt(prompt ("Ingrese segunda nota"));
nota3 =  parseInt(prompt ("Ingrese tercera nota"));

let sumaNota
sumaNota =  nota1 + nota2 + nota3;
let promedio
promedio= sumaNota/3;

if (promedio >= 7){
    document.write("Promocionado");
}else{
    document.write("No promociono");
}

//Resolucion 2//

let clave1;
let clave2;

clave1 = prompt ("Ingrese primera clave: ");
clave2 = prompt ("Ingrese segunda clave: ");

if (clave1 == clave2){
    document.write("Las claves coinciden");
}else{
    document.write("Clave erronea");
}
