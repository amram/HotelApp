<?php
	if(isset($_POST['nom']) && isset($_POST['mail']) && isset($_POST['tel']) ){
		echo "1";
	}else{
	if(isset($_FILES['foto'])){
		$ruta_destino='fotos/';
		if(move_uploaded_file($_FILES['foto']['tmp_name'], $ruta_destino.$_FILES['foto']['name'].'.jpg'))
			echo 1;
		else{
			echo 0;
		}
	}else{
			echo "Error 404: not found";
		}
	}
	
	
?>