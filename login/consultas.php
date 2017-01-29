<?php 

require '../conexion/conectar.php';
$func= $_REQUEST['func'];
if (is_callable($func)) {
    $func();
}

function login($con){

    $user = $_POST["usuario"];
    $pass = $_POST["contrasena"];

    if (empty($user) || empty($pass)) {
        header("Location: login.php");
        exit();
    }

    $con=conexion();
    $query= "SELECT * FROM login a,usuarios b WHERE a.correo='".$user."' AND b.correo=a.id";
    $resultado = mysqli_query($con, $query);
    $num = mysqli_num_rows($resultado);
    if ($num > 0) {
        $arr_resul=mysqli_fetch_array($resultado, MYSQLI_ASSOC);

        if ($pass==$arr_resul['pass']) {
            session_start();
            $_SESSION['nombre']=$arr_resul['pri_nomb'];
            $_SESSION['correo']=$usuario;

            header("Location: ../contenido.php");
        }
        else{
            header("Location: ../login.php?error=1");
            exit();
        }
    }
    else{
        header("Location: ../login.php?error=0");
            exit();
    }
    mysqli_close($con);
}

function getPais($con){
    header('Content-Type: application/json; charset=utf-8');
    $con=conexion();
    $query= "SELECT * FROM pais ORDER BY nombre";
    $resultado = mysqli_query($con, $query);
    $num = mysqli_num_rows($resultado);
    if ($num>0) {
        $res = "";
        while ($arr_resul=mysqli_fetch_array($resultado, MYSQLI_ASSOC)) {
        $consul[] = array( 'id' => $arr_resul['id'],
                           'nombre' => $arr_resul['nombre'],
                           'codigo' => $arr_resul['codigo']
                         );
    }
    $res = json_encode($consul);
    echo $res;
    }
    else{
        $res = "No hay Registros";
    }

    mysqli_close($con);
}

function getDep($con){
    header('Content-Type: application/json; charset=utf-8');
    $idp= $_REQUEST['idpais'];
    $con=conexion();
    $query= "SELECT * FROM departamento WHERE pais=".$idp." ORDER BY nombre";
    $resultado = mysqli_query($con, $query);
    $num = mysqli_num_rows($resultado);
    if ($num>0) {
        $res = "";
        while ($arr_resul=mysqli_fetch_array($resultado, MYSQLI_ASSOC)) {
        $consul[] = array( 'id' => $arr_resul['id'],
                           'nombre' => $arr_resul['nombre'],
                           'pais' => $arr_resul['pais']
                         );
        }
    $res = json_encode($consul, JSON_UNESCAPED_UNICODE);
    echo $res;
    }
    else{
        $res = "No hay Registros";
    }

    mysqli_close($con);
}

function getCiu($con){
    header('Content-Type: application/json; charset=utf-8');
    $idp= $_REQUEST['idpais'];
    $idd= $_REQUEST['iddepa'];
    $con=conexion();
    $query= "SELECT * FROM ciudad WHERE pais=".$idp." AND departamento=".$idd." ORDER BY nombre";
    $resultado = mysqli_query($con, $query);
    $num = mysqli_num_rows($resultado);
    if ($num>0) {
        $res = "";
        while ($arr_resul=mysqli_fetch_array($resultado, MYSQLI_ASSOC)) {
        $consul[] = array( 'id' => $arr_resul['id'],
                           'nombre' => $arr_resul['nombre'],
                         );
        }
    $res = json_encode($consul, JSON_UNESCAPED_UNICODE);
    print_r($res);
    return ;
    echo $res;
    }
    else{
        $res = "No hay Registros";
    }

    mysqli_close($con);
}

?>
