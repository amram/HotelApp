//network-info.js
var connection = {
	estaConectado: function(){
		if(nsvigator.connection.type != Connection.NONE)
			return true;
		else
			return false;
	}
}