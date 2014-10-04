// action.js
var fn = {
	init: function(){
		document.addEventListener('deviceready',fn.device,false);
	},
	device: function(){
		var x = false;
		if(!x)
			window.location.href = '#reg';
		$('#regTake').tap(myCapture.tomarFoto);	
		$('#regSend').tap(fn.registro);
	},
	registro: function(){
		var nombre = $('#regName').val();
		var mail = $('#regMail').val();
		var tel = $('#regTel').val();
		if(nombre != '' && mail != '' && tel != ''){
			//Enviar datos al servidor
			navigator.notification.beep(2);
		}else{
			navigator.notification.alert("Todos los campos son requeridos.",null,'Error','Aceptar');
		}
	}
};
$(fn.init);