/* 
cordova plugin add org.apache.cordova.dialogs
*/
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
      //Hacer algo cuando el telefono este listo
	    	    
    }
};

app.initialize();

    function alerta(){
             navigator.notification.alert(
                 'Hola soy una alerta.',  // Mensaje que se muestra.
                 alertDismissed,     // funcion callback 
                 'Alerta',          // Titulo de la alerta
                 'Continuar.'      // Texto del button
             );	
    }

function confirm(){
navigator.notification.confirm(
    'Confirmar.',   // Mensaje que se muestra.
     onConfirm,     // funcion callback 
    'Que desea realizar',   // Titulo de la alerta
    ['CONTINUAR','SALIR','OTRO']   // Texto del button
);
	
}

function prompt(){
 navigator.notification.prompt(
    'Texto de alerta',     // Texto de alerta
    onPrompt,               // funcion callback 
    'REGISTRO',            // Titulo de la alerta
    ['CONTINUAR','SALIR'],  // Texto del button
    'PLACEHOLDER'          // PLACEHOLDER
);
}
function beep(){
/*beep sonar segun predefinido por el usuario*/
navigator.notification.beep(2);
document.getElementById("msj").innerHTML = 'Beep 2 times'; 

}
function alertDismissed() {
 document.getElementById("msj").innerHTML = 'alerta cerrada'; 
}

function onConfirm(buttonIndex) {
    document.getElementById("msj").innerHTML = 'Selecciono el button ' + buttonIndex; 
}

function onPrompt(results) {
 document.getElementById("msj").innerHTML ="Selecciono el button " + results.buttonIndex + " e introdujo: " + results.input1; 
}
