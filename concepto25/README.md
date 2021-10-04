Disponer dos campos de texto tipo password. Cuando se presione un botón mostrar si las dos claves ingresadas son iguales o no (es muy común solicitar al operador el ingreso de dos veces de su clave para validar si las escribió correctamente, esto se hace cuando se crea una password para el ingreso a un sitio o para el cambio de una existente).
Tener en cuenta que podemos emplear el operador == para ver si dos string son iguales.

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
        <label for="">Ingrese Contraseña</label>
        <input type="password" name="" id="pw1">
        <label for="">Repetir Contraseña</label>
        <input type="password" name="" id="pw2">
        <input type="button" onclick="validarPassword()" value="Iniciar">
    </form>


    <script src="js/concepto25.js"></script>
</body>
</html>