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

      <?php
              $anzahl  = $_GET['anzahl'];
              $adresse = $_GET['adresse'];

              echo("<p>Ihre Bestellung über $anzahl Flugzeuge ist eingelangt</p>");
              echo("<p>Die Flugzeuge werden binnen 1 Monat an $adresse geliefert</p>");
      ?>
Dabei wird aber die Eingabe nicht geprüft. Eine bessere Version des Programmes prüft vorher jede Eingabe und gibt entsprechende Fehlermeldungen aus:

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
 
Datei Upload
-------------
POST ermöglicht das Senden beliebig langer Daten, und damit das Hochladen von ganzen Dateien. Dabei muss auch noch das enctype Attribut des Form-Tags gesetzt werden:

      <form action="upload.php" method="post" enctype="multipart/form-data">
Neues Bild zum hochladen in den Ordner 

      <a href='upload/'>upload</a>: <input type="file" name="bild">
      <input type="submit" value="hinaufladen">
      </form>
Der Input-Tag mit dem Typ „file“ wird vom Browser als Textfeld plus Button dargestellt. Wird der Button gedrückt dann erscheint ein Datei-Auswahl-Dialog, wie in Abbildung 132 gezeigt.


![Abbildung 136: Webformular mit Datei-Upload](/images/image345.png)

Die Verarbeitung von hochgeladenen Dateien ist wesentlich komplizierter als die Behandlung anderen Requests: Die Dateien werden vom PHP-Interpreter temporär gespeichert. Das PHP-Programm kann die Dateien dann an einen permanenten Speicherort kopieren (falls das die Zugriffsrechte erlauben)

Die Details zu den Hochgeladenen Dateien sind im Array $_FILES gespeichert, in folgendem Beispiel hatte das Eingabefeld den Namen „bild“: 

$_FILES['bild']['name']
: Der Originalname der Datei am Client. 

$_FILES['bild']['type']
: Der „Mime Type“ der Datei – falls der Browser diese Information liefert. Zum Beispiel „image/gif“. Achtung: nicht zuverlässig! 

$_FILES['bild']['size']
: Größe der hochgeladenen Datei in Byte. 

$_FILES['bild']['tmp_name']
: Der Dateiname der temporären Datei. 

$_FILES['bild']['error']
: Fehlercode bei Upload, 0 bedeutet dass kein Fehler aufgetreten ist. Siehe PHP-Doku.

      <?php
      $uploaddir = dirname( $_SERVER["SCRIPT_FILENAME"] ) . "/upload/";

      $filename = basename($_FILES['bild']['name']);
      $ext = substr($filename, -4);

      if( $ext != '.jpg' ) {
         die("ich darf nur jpg-Dateien hochladen, nicht " . substr($filename, -3) );
      }

      $uploadfile = $uploaddir . $filename;

      if (move_uploaded_file($_FILES['bild']['tmp_name'], $uploadfile)) {
          echo "Datei erfolgreich hochgeladen nach <a href='upload/'>upload/</a>\n";
      } else {
          echo "Problem beim Speichern der Datei.\n";
      }

      echo '<pre>debugging info:';
      print_r($_FILES);
      print '</pre>';

      ?>

Achtung: Sie müssen den Ordner upload erstellen und ihm geeignete Zugriffsrechte zuweisen, damit der Webserver (= ein anderer Account) hineinschreiben darf!

