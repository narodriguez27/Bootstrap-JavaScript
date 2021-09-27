Enuciado:

Realizar un programa que muestre su nombre y su edad en una página HTML.
Emplear el comando write del objeto document para imprimir.
Tener en cuenta que si queremos que cada dato quede en una fila distinta de la página debemos insertar la etiqueta HTML <br> (salto de linea en HTML), es decir debemos disponer: document.write('<br>')

Solucion:

Problema 1.

<!DOCTYPE html>
<html>
<head>
  <title>Ejemplo de JavaScript</title>
  <meta charset="UTF-8">
</head>
<body>

<script>
  document.write('Diego Martinez');
  document.write('<br>');
  document.write('44');
</script>

</body>
</html>