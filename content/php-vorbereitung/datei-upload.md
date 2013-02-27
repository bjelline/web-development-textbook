---
title: Datei Upload
order: 60
---
POST ermöglicht das Senden beliebig langer Daten, und damit das Hochladen von ganzen Dateien. Dabei muss auch noch das enctype Attribut des Form-Tags gesetzt werden:

<php>
      <form action="upload.php" method="post" enctype="multipart/form-data">
Neues Bild zum hochladen in den Ordner 

      <a href='upload/'>upload</a>: <input type="file" name="bild">
      <input type="submit" value="hinaufladen">
      </form>
</php>

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

<php>
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
</php>

Achtung: Sie müssen den Ordner upload erstellen und ihm geeignete Zugriffsrechte zuweisen, damit der Webserver (= ein anderer Account) hineinschreiben darf!

