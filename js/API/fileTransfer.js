// fileTransfer.js
var myTransfer = {
	subido: function(r){
		if(r.response == '1'){
			navigator.notification.alert("Se ha registrado correctamente",function(){
				window.location.href = '#home';
				//Asignar Registro local
			},"Felicidades","Aceptar");
		}
	},
	error: function(err){
		navigator.notification.alert("Error: "+err.code,null,"Error","Aceptar");
},

subir: function(uri,url){
	myTransfer.opciones.fileKey="foto";
	myTransfer.opciones="Amram";
	myTransfer.opciones.mimeType="image/jpeg";
	myTransfer.opciones.params = {value1: 'Text', value2: 'param'};

	myTransfer.ft = new FileTransfer();
	myTransfer.ft.upload(uri,url,myTransfer.subido,myTransfer.error,myTransfer.opciones);
	}
};