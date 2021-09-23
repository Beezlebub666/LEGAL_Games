<!--Das Skript stellt eine Verbindung zur Datenbank her-->
<?php
$server = "localhost"; //Verbindet sich mit localhost; Später würde hier eine IP Adresse stehen
$username = "root";    //Username for phpMyAdmin
$password = "nAsPh3PjvMFbNt58";    //Password for phpMyAdmin
$dbname = "Forum";     // Der Name der Datenbank, die geöffnet werden soll

//kreiert eine Datenbank Verbindungsinstanz
$conn = new mysqli($server, $username, $password, $dbname); //Verbindet sich mit der Datenbank mit den Variablen von oben
?>