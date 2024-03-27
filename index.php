<?php
require("controllers/controller.php"); //affichage des pages selon la requête donc require

if (isset($_GET["delete"]) && !empty($_GET["delete"])) {
    DeleteBookByName();
}
else if (isset($_GET["page"]) && !empty($_GET["page"])) {

    $page = htmlspecialchars($_GET["page"]);

    if ($page == "home") {
        DisplayHome();
    } 
    
    else if ($page == "books") {
        DisplayBooks();
    }

    else if ($page == "modif") {
        DisplayModif();
    }

    else if ($page == "add") {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            AddBook();
        } else {
            DisplayAjouter();
        }
} 
else {
    DisplayHome();
}
}