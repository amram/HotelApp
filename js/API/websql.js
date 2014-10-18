// websql.js
var db = {
	crearDB: function(){
		var obj = window.openDatabase("hotel", "1.0", "Hotel Demo", 200000);
		return obj;
	},
	agregarPendientes: function(th,ha,pr,di){
		db.th = th;
		db.ha = ha;
		db.pr = pr;
		db.di = di;
		db.crearDB.transaction(db.tablaPendientes,db.error,db.exitoPendientes);
	},
	tablaPendientes: function(tx){
		tx.executeSQL("CREATE TABLE IF NOT EXISTS pendientes (id unique, th, ha, pr, di)");
		 tx.executeSql("INSERT INTO pendientes(th, ha, pr, di) VALUES ('"+db.th+"', '"+db.ha+"', '"+db.pr+"', '"+db.di+"')");
	},
	exitoPendientes: function(){
		navigator.notification.alert('Reserva en espera de conexión',null,'Guardado','Aceptar');
	},
	error: function(err){
		alert('Error: '+err.code);
	}
}
