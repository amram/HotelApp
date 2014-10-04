//capture.js
var myCapture = {
	tomarFoto: function(){
		navigator.device.capture.captureImage(myCapture.fotoTomada,myCapture.fotoError);
	},
	fotoTomada: function(fotos){
		var path = fotos[0].fullPath;
		$('#regTake').attr('rel',path);
		$('#foto').html('<img src="'+path+'" style="width:100%;">');
	},
	fotoError: function(err){
		navigator.notification.alert('Error: '+ err.code,null,'Error','Aceptar');
	}
};