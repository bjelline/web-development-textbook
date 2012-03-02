---
title: Formular und PHP
order: 30
---

Die Daten aus einem Web-Formular werden vom PHP-Interpreter verarbeitet, die URL-Codierung aufgelöst und die Daten dann in mehreren superglobalen Arrays zur Verfügung gestellt.  Das Array `$_GET` enthält die Parameter einer GET-Anfrage. 

„Superglobal“ bedeutet, dass das Array in jedem Teil des PHP-Programmes sichtbar ist. Ein Array in PHP kann nicht nur Integers als Index haben (z.B. `$a[0]`) sondern auch Strings (z.B. `$a['salzburg']`)

Um die Bestellung aus dem Formular zu verarbeiten, könnte folgendes Programm verwendet werden:

<php caption="Programm zur Verarbeitung der Daten aus dem Bestell-Formular">
<?php
    $anzahl  = $_GET['anzahl'];
    $adresse = $_GET['adresse'];

    echo("<p>Ihre Bestellung über $anzahl Flugzeuge ist eingelangt</p>");
    echo("<p>Die Flugzeuge werden binnen 1 Monat an $adresse geliefert</p>");
?>
</php>

Dabei wird aber die Eingabe noch gar nicht geprüft.  In dieser minimalen Version des Bestellprogramms senden wir die Daten einfach vom Server per E-Mail weiter:

<php caption="PHP-Befehl zum Versenden einer E-Mail">
mail(  
         "ich@fh-salzburg.ac.at",                                // To:
         "Bestellung von $anzahl Flugzeugen",                    // Subject:
         "Lieferung von $anzahl Flugzeugen an Adresse $adresse"  // Text der E-Mail
);
</php>


