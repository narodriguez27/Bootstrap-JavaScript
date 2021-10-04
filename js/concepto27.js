
function mostrarDeportes() {
    let deportes = "";
    if (document.getElementById("a").checked) {
        deportes = deportes + ' Futbol ';
    }
    if (document.getElementById("b").checked) {
        deportes = deportes + ' Basket ';
    }
    if (document.getElementById("c").checked) {
        deportes = deportes + ' Tenis';
    }
    alert("Los deportes practicados son: " + deportes);
}
