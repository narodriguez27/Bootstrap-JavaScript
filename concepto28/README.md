Confeccionar una página que muestre dos objetos de la clase RADIO solicitando que seleccione si es mayor de 18 años o no. Al presionar un botón mostrar un alert indicando si puede ingresar al sitio o no.

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
    <form action="">
        <input type="radio" name="edades" id="edadMayor">+18
        <input type="radio" name="edades" id="edadMenor">-18
        <input type="button" value="Ingresar" onclick="mayorEdad()">
    </form>
    <script src="js/concepto28.js"></script>
</body>
</html>