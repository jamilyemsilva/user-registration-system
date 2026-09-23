<?php
$usuario = "";
$senha = "";
if(isset($_POST["txt_usuario"])){
    $usuario = $_POST["txt_usuario"];
}
if(isset($_POST["pwd_senha"])){
    $senha = $_POST["pwd_senha"];
}
if((($usuario=="ADMIN")&&($senha=="ADMIN")) || (($usuario=="cadastro")&&($senha =="CDSP03"))){
session_start();
$_SESSION["ses_logado"] ="S";
header("location: menu.php");
} else {
    print("Usuário/Senha não existe...");
       header("location:index.php");
}
?>