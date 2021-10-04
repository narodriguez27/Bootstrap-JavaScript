Confeccionar una página que tenga un botón. Cuando se presione dicho botón generar un valor aleatorio entre 0 y 2. Si se genera el 0 llamar al webmail de Outlook, si se genera un 1 llamar a gmail en caso de generarse un 2 llamar a yahoo.
Para generar un valor aleatorio utilizar la función random del objeto Math.
 
let num;
num=Math.random()*3; //se guarda en num un valor comprendido entre 0.00001 y 2.99999
num=parseInt(num);  //guardamos solo la parte entera de la variable num
if (num==0){
    window.location='https://www.outlook.com';
}
.....


Screen del object window:

Confeccionar un programa que al presionar un botón aparezca una ventana que ocupe todo el ancho del monitor y la mitad de su altura.


Navigaton object windowd:

Una vez que se cargue la página mostrar un alert indicando si el navegador tiene activas las cookies.