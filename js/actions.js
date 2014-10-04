// action.js
var fn = {
	init: function(){
		document.addEventListener('deviceready',fn.device,false);
	},
	device: function(){
		window.location.href = '#reg';
		var x = false;
		if(!x){
			window.location.href = '#reg';
		}
		$('#regSend').click(fn.registro);
	},
	registro: function(){
		var nombre = $('#regName').val();
		var mail = $('#regMail').val();
		var tel = $('#regTel').val();
		if(nombre != '' && mail != '' && tel != ''){
			//Enviar datos al servidor
		}else{
			alert("Todos los campos son requeridos");
		}
	}
};
$(fn.init);