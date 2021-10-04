function clearname(control) {
    control.value = '';
}
function verificarEntrada(control) {
        alert('ingreso:' + control.value);
    }

    function caracter(control) {
        if (control.value.length < 7 || control.value.length > 20) {
            alert("asd");
        }
    }
function pintar(objeto,col) {
    objeto.style.backgroundColor = col;
}

function cargarPagina(){
    alert("LA PAGINA ESTA CARGADA.");
}