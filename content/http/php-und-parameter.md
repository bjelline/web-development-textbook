---
title: In PHP Daten aus Web-Formularen verarbeiten
order: 50
---
Der Zusammenhang zwischen Web-Formular, http-Request und den Arrays `$_POST` und `$_GET` in PHP sollte Ihnen schon klar sein.

Daten prüfen
--------------
Die Daten aus einem Web-Formular werden vom PHP-Interpreter verarbeitet, die Codierung aufgelöst und die Daten dann in mehreren superglobalen12 Arrays zur Verfügung gestellt:

$_GET
: Dieses Array enthält die Parameter einer GET-Anfrage. 

$_POST
: Dieses Array enthält die Parameter einer POST-Anfrage. 

$_REQUEST
: Dieses Array kombiniert die Daten aus $_GET und $_COOKIE und $_POST. Besser die spezifischen Arrays verwenden!

$_FILE
: Enthält Daten von hochgeladenen Dateien

Warnhinweis: In frühen PHP Versionen konnte man noch direkt die Variable $nr verwenden um den Wert  aus einem Eingabefeld &lt;input name="nr"&gt; zu lesen — das funktioniert heute nicht mehr! 

Um einen GET-Request zu verarbeiten haben wir bisher ein sehr simples Programm verwendet:

<php>
      <?php
              $anzahl  = $_GET['anzahl'];
              $adresse = $_GET['adresse'];

              echo("<p>Ihre Bestellung über $anzahl Flugzeuge ist eingelangt</p>");
              echo("<p>Die Flugzeuge werden binnen 1 Monat an $adresse geliefert</p>");
      ?>
</php>


Dabei wird aber die Eingabe nicht geprüft. Eine bessere Version des Programmes prüft vorher jede Eingabe und gibt entsprechende Fehlermeldungen aus:

<php>
      <?php
              $anzahl  = $_GET['anzahl'];
              $adresse = $_GET['adresse'];
              $ok = true;        // zeigt ob alle Eingaben ok sind
              $fehler = array(); // sammelt alle Fehlermeldungen
              if( (int) $anzahl != $anzahl or $anzahl < 1) {
                  $ok = false;
                  $fehler[] = "Bitte geben Sie die Anzahl der Flugzeuge ein!";
              }
              if( strlen( $adresse ) < 5 ) {
                  $ok = false;
                  $fehler[] = "Bitte geben Sie die vollständige Lieferadresse an!";
              }
              if ( ! $ok ) {
                  echo("<p>Ihre Bestellung kann derzeit nicht bearbeitet werden:</p>");
                  echo("<ol>");
                  foreach( $fehler as $fehler_text ) {
                      echo("<li>$fehler_text</li>");
                  }
                  echo("</ol>");
                  echo("<p>Bitte gehen Sie zurück und bessern Sie die Bestellung aus.");
              }
              else {
                  echo("<p>Ihre Bestellung über $anzahl Flugzeuge ist eingelangt</p>");
                  echo("<p>Die Flugzeuge werden binnen 1 Monat an $adresse geliefert</p>");
              }
      ?>
</php>
 
