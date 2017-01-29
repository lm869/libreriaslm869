<?php 
session_start();

 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="jquery-3.1.1.min.js"></script>
    <script>
        $(document).ready(function() {
        var user="<?php echo $_SESSION['nombre']; ?>";
        var email="<?php echo $_SESSION['correo']; ?>";
        document.getElementById("nom_user").append(user);
        }); 
    </script>
</head>
<body>
    Bienvenido <div id="nom_user"></div>
</body>
</html>

