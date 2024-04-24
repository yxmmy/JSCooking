<?php
function DbConnexion() //connexion à la bdd
{
    try 
    {
        $db = new PDO('mysql:host=localhost;dbname=cookingmama;charset=utf8', 'root', '');
        return $db;
    } 
    catch (Exception $e) 
    {
        Echo('Erreur: impossible de se connecter à la base de donnée.' . $e->getMessage());
    }
} 