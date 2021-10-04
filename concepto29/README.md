Confeccionar una página de visitas a un sitio, solicitar ingresar el nombre de una persona, su mail y los comentarios (TEXTAREA). Mostrar luego llamando a la función alert los datos ingresados.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="">
        <label for="">Ingrese nombre:</label>
        <input type="text" name="nombre" id="nombreIngresado">
        <label for="">Ingrese email:</label>
        <input type="text" name="email" id="emailIngresado"> <br>
        <textarea name="" cols="80" rows="10" id="textoIngresado"></textarea> <br>
        <input type="button" value="Ingresar" onclick="mostrarDatos()">
    </form>

    <script src="js/concepto29.js"></script>
</body>
</html>