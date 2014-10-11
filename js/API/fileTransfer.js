//fileTransfer.js
var myTransfer = {
    subido: function(r){
        if(r.response == '1'){
            $.mobile.loading( 'hide' );
            navigator.notification.alert("Se ha registrado correctamente",function(){
                window.location.href = '#home';
                fn.storage.setItem('registro',1);//Guarda localmente un dato
            },"Felicidades","Aceptar");
        }
    },
    error: function(err){
        navigator.notification.alert("Error: "+err.code,null,"Error","Aceptar");
    },
    subir: function(uri,url){
        myTransfer.opciones = new FileUploadOptions();
        myTransfer.opciones.fileKey = "foto";
        myTransfer.opciones.fileName = "Amram";
        myTransfer.opciones.mimeType = "image/jpeg";
        myTransfer.opciones.params = {value1: 'Text',value2: 'param'};
        
        myTransfer.ft = new FileTransfer();
        myTransfer.ft.upload(uri,url,myTransfer.subido,myTransfer.error,myTransfer.opciones);
    }
};