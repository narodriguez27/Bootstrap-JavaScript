Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre dicho valor elevado al cubo (emplear la función alert).
Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor.
Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos en un tercer text (Tener en cuenta que podemos modificar la propiedad value de un objeto TEXT cuando ocurre un evento)



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <!-- Resolucion 1 -->
    <h2>Calcular la potencia de un valor al cubo</h2>
    <form action="">
        <input type="text" value="" id="numeroIngresado">
        <input type="button" onclick="calcularCuboNumero()" value="Calcular" id="calcularCubo">
    </form>
    <!-- Resolucion 2 -->
    <h2>Calcular mayor de dos numeros</h2>
    <form action="">
        <label for="">Numero Uno</label>
        <input type="text" name="" id="num1">
        <label for="">Numero Dos</label>
        <input type="text" name="" id="num2">
        <input type="button" onclick="mostrarMayor()" value="Calcular" id="calcularMayor">
    </form>
    <h2>concatenar nombre y apellido</h2>
    <!-- Resolucion 3 -->
    <form>
        <p>Ingrese nombre:<input type="text" id="nombre"></p>
        <p>Ingrese apellido:<input type="text" id="apellido"></p>
        <p><input type="button" value="Concatenar datos ingresados" onclick="concatenar()"></p>
        <p><input type="text" id="resultado"></p>
    </form>

    <script src="js/concepto24.js"></script>



</body>
</html>


