Solicitar el ingreso alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página.

//Resolucion 1//

let objeto;
objeto = prompt("Ingrese alguna de estas palabras para traducirlas al ingles: casa, mesa, perro, gato");

switch (objeto){
    case "casa":
        document.write("House");
        break;
        case "mesa":
        document.write("Tabble");
        break;
        case "perro":
        document.write("Dog");
        break;
        case "gato":
        document.write("Cat");
        break;
        default:
            document.write("Debe ingresar una palabra correcta");
}