<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="../materialize/css/materialize.min.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	 <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
	<div id="login" class="container">
		<div class="row">
		<div class="col s12" id="cont_ses">
		<h1 class="center-align">Iniciar Sesion</h1>
		</div>
		<div class="center-align col s6 offset-s3">
				<a href="registro.php" class="orange-text text-darken-2">Registrate</a><br>
				<a href="" class="orange-text text-darken-2">¿Olvidaste la contraseña?</a>
			</div>
		</div>
	</div>
	<div id="error"></div>
<script src="../jquery-3.1.1.min.js"></script>
<script src="../materialize/js/materialize.min.js"></script>
<script src="../lm_lib/forms/lm_forms.js"></script>
<script src="js/login.js"></script>
<?php 
if (isset($_GET['error'])) {
	$logueo = $_GET['error'];
	if ($logueo==0) {
		echo "<script>msg_modal('ERROR','No estas Registrado');</script>";
	}
	if ($logueo==1) {
		echo "<script>msg_modal('ERROR','Su contraseña es incorrecta');</script>";
	}
	if ($logueo==2) {
		echo "<script>msg_modal('ERROR','Su usuario es incorrecto');</script>";
	}
}
 ?>
</body>
</html>