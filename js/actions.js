//actions.js
var fn = {
    init: function(){
        //document.addEventListener("deviceready", yourCallbackFunction, false); //phonga
        document.addEventListener('deviceready',fn.device,false);
        //$('#regSend').click(); //Producir un click
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
        var foto = $('#regTake').attr('rel');
        if(nombre != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
            //Enviar datos al Servidor.
            fn.enviarRegistro(nombre, mail, tel, foto);
        }else{
            navigator.notification.alert("Todos los campos son requeridos.",null,'Error','Aceptar');
        } 
    },
    enviarRegistro: function(nom, mail, tel, foto){
        $.ajax({
            type: "POST",
            url: "http://carlos.igitsoft.com/apps/test.php",
            data: {nom:nom,mail:mail,tel:tel}
        }).done(function(respuesta){
            if( respuesta == '1' ){
                myTransfer.subir(foto, "http://carlos.igitsoft.com/apps/test.php");
            }
        });
    }
};
$(fn.init);