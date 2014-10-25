//actions.js
var fn = {
    init: function(){
        //document.addEventListener("deviceready", yourCallbackFunction, false); //phonga
        document.addEventListener('deviceready',fn.device,false);
        //$('#regSend').click(); //Producir un click
    },
    device: function(){
        if(!fn.estaRegistrado)
            window.location.href = '#reg';
        $('#regTake').tap(myCapture.tomarFoto);
        $('#regSend').tap(fn.registro);
        $('#showStorage').tap(function(){
            alert(fn.storage.getItem('registro'));
        });
        
        $('#nr1 ul[data-role=listview] li').tap(fn.selectTH);
        $('#nr1 div[data-role=navbar] ul li:eq(1)').tap(fn.nrNext);
        $('#nr2 div[data-role=navbar] ul li:eq(1)').tap(fn.reservar);
        
        document.addEventListener("online",fn.sincronizarReserva,false);
    },
    registro: function(){
        var nombre = $('#regName').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        var foto = $('#regTake').attr('rel');
        if(nombre != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
            //Enviar datos al Servidor.
            fn.enviarRegistro(nombre, mail, tel, foto);
        }else{
            navigator.notification.alert("Todos los campos son requeridos.",null,'Error','Aceptar');
        } 
    },
    enviarRegistro: function(nom, mail, tel, foto){
        $.mobile.loading( 'show' );
        $.ajax({
            type: "POST",
            url: "http://carlos.igitsoft.com/apps/test.php",
            data: {nom:nom,mail:mail,tel:tel}
        }).done(function(respuesta){
            if( respuesta == '1' ){
                myTransfer.subir(foto, "http://carlos.igitsoft.com/apps/test.php");
            }
        });
    },
    enviarReserva: function(th, ha, pr, di){
        $.mobile.loading( 'show' );
        $.ajax({
            type: "POST",
            url: "http://carlos.igitsoft.com/apps/test.php",
            data: {tipo:th,habitaciones:ha,personas:pr,dias:di}
        }).done(function(respuesta){
            if( respuesta == '1' ){
                db.agregarHistorial(th,ha,pr,di);
            }
        });
    },
    storage: window.localStorage,
    estaRegistrado: function(){
        if(fn.storage.getItem('registro') == 1)
            return true;
        else
            return false;
    },
    selectTH: function(){
        if($(this).index()>0){
            $('#nr1 ul[data-role=listview] li a').css('background-color','');
            $(this).find('a').css('background-color','#a9a9a9');
            $('#nr1').attr('th',$(this).index());
        }
    },
    nrNext: function(){
        if($('#nr1').attr('th') != undefined && $('#nr1').attr('th') != ''){
            window.location.href = "#nr2";
        }else{
            alert('Es necesario seleccionar un tipo de habitación');
        }
    },
    reservar: function(){
        var th = $('#nr1').attr('th');
        var ha = $('#nrHab').val();
        var pr = $('#nrPer').val();
        var di = $('#nrDia').val();
        
        if(th != '' && ha != '' && pr != '' && di != ''){
            if(connection.estaConectado()){
                //Enviar Reserva a servidor
                fn.enviarReserva(th,ha,pr,di);
            }else{
                //Guardar los datos hasta conexión
                $.mobile.loading( 'show' );
                db.agregarPendientes(th,ha,pr,di);
            }
        }else{
            alert('Todos los campos son requeridos');
        }
    },
    sincronizarReserva: function(){
        db.leerPendientes();
    }
};
$(fn.init);