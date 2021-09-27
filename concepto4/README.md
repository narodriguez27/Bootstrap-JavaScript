Problema numero 3:

Confeccionar un programa que permita cargar el nombre de un usuario y su mail por teclado. Mostrar posteriormente los datos en la página HTML.

Resolucion:

Problema 1.


<!DOCTYPE html>
<html>

<head>
    <title>Ejemplo de JavaScript</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        let usuario;
        let mail;
        usuario = prompt('Ingrese el nombre de usuario:');
        mail = prompt('Ingrese el mail:');
        document.write('Nombre de usuario ingresado:');
        document.write(usuario);
        document.write('<br>');
        document.write('Mail ingresado:');
        document.write(mail);
    </script>

</body>

</html>   