Confeccionar una página que muestre tres checkbox que permitan seleccionar los deportes que practica el usuario (Fútbol, Básket, Tenis) Mostrar al presionar un botón los deportes que eligió.

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Resolucion 1 -->
    <form>
        <input type="checkbox"  id="a">Futbol <br>
        <input type="checkbox"  id="b">Basket <br>
        <input type="checkbox"  id="c">Tenis <br>
        <input type="button" onclick="mostrarDeportes()" value="Mostrar Deporte">
    </form>



    <script src="js/concepto27.js"></script>
</body>
</html>