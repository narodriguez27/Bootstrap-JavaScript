function redireccionar() {
    let num = Math.random() *3;
    num = parseInt(num);

    if (num == 0) {
        window.location = "http://www.outlook.com";
    }
    if (num == 1) {
        window.location = "http://www.gmail.com";
    }
     if (num == 2){
        window.location = "http://www.yahoo.com.ar"
    }
}

// screen del objetc windows

function ventanaNueva() {
   
    var ventana = open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight / 2);    
    document.write('Valores de las propiedades del objeto screen:<br>');
    document.write('availHeight :' + screen.availHeight + '<br>');
    document.write('availWidth :' + screen.availWidth + '<br>');
    document.write('height :' + screen.height + '<br>');
    document.write('width :' + screen.width + '<br>');
    document.write('colorDepth :' + screen.colorDepth);
}

// navigator del objetc windows

function cookies() {
   if (navigator.cookieEnabled == true) {
       alert("Cookies cargadas");
   }else{
       alert("Cookies no cargadas");
   }
}