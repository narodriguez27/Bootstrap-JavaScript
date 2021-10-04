
function validarPassword() {
    let passwordUno = document.getElementById("pw1").value;
    let passwordDos = document.getElementById("pw2").value;

    if (passwordUno == passwordDos) {
        alert("Password Correcta");
    }else{
        alert("Password Incorrecta")
    }
}