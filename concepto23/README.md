Crear un formulario con tres botones con las leyendas "1", "2" y "3". Mostrar un mensaje indicando qué botón se presionó.

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
        <input type="button" onclick="presion1()" value="1" id="btn">
        <input type="button" onclick="presion2()" value="2" id="btn">
        <input type="button" onclick="presion3()" value="3" id="btn">
    </form>

    <script>
                function presion1() {
            alert('Se presionó el botón 1');
        }

        function presion2() {
            alert('Se presionó el botón 2');
        }

        function presion3() {
            alert('Se presionó el botón 3');
        }
    </script>
</body>
</html>