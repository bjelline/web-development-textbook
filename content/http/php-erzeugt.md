---
title: PHP erzeugt nicht nur HTML
order: 40
---
Ein PHP-Programm gibt normalerweise HTML aus. Entsprechend liefert der PHP-Interpreter einen http-Header „Content-Type: text/html“. Mit dem Befehl header() kann dies verändert werden.

PHP erzeugt CSS
----------------
Eine externes Stylesheet kann auch Output eines PHP-Programmes sein:

<htmlcode caption="Dieses HTML-Dokument referenziert ein Stylesheet das von PHP erzeugt wird">
      <! DOCTYPE html>
      <html>
          <head>
              <link rel="stylesheet" href="style.php">
          </head>
          <body>
              <h1>Überschrift</h1>
              <p>text text text</p>
          </body>
      </html>
</htmlcode>

Ein Stylesheet, das von PHP aus erzeugt wird, hat den Vorteil, dass man Variablen verwenden kann, z.B. für die Definition von Farben, die mehrmals im Stylesheet verwendet werden sollen. In folgendem Beispiel wird einfach das ganze Stylesheet mit einem echo ausgegeben:

      <?php
          $blau = "rgb(0,0,255)";
      echo "
      body { padding: 3em; }
      h1 {   color: $blau; }
      .box {
          background-color: $blau;
      }
      ";
      ?>

Für mehrzeilige Strings gibt es in PHP eine alternative Schreibweise, die hier sehr praktisch wäre:

      <?php
          $blau = "rgb(0,0,255)";
      echo <<<ENDE
      body { padding: 3em; }
      h1 {   color: $blau; }
      .box {
          background-color: $blau;
      }
      ENDE;
      ?>

PHP erzeugt Bild
-----------------
Das PHP-Programm kann auch Bilddaten ausgeben, diese können dann auf die bekannten Arten im Web verwendet werden:

<htmlcode caption="Dieses HTML-Dokument referenziert ein Hintergrundbild das von PHP erzeugt wird">
      <! DOCTYPE html>
      <html>
          <head>
              <style>
                  body {
                      margin-left: 120px;
                      background-image: url(drawbackground.php);
                      background-repeat: repeat-y;
                  }
              </style>
          </head>
          <body>
              <h1>Zufalls-Hintergrund</h1>
              <p>Das verwendete Hintergrundbild wurde von PHP erzeugt:</p>
              <p><img src="drawbackground.php" />
          </body>
      </html>
</htmlcode>

Welches Bildformat verwendet wird (jpg, gif, png, …) wird wieder über den http-Header Content-Type angekündigt. Die Befehle zur Bild-Erzeugung in Manipulation sind unter dem Stichwort „Image Funktions“ in der PHP-Doku zu finden.

      <?php  // Waagrechte Linien zufälliger Länge
          header("Content-type: image/png");

          $max = 100;  // maximale Breite des Bildes
          $im = imagecreate($max, 100);
          $background_color = imagecolorallocate($im, 255, 255, 255);
          $drawing_color    = imagecolorallocate($im, 255, 0, 255);

          imagefill($im, 0, 0, $background_color);
          $y=0;
          while( $y < 100 ) {
              $x = rand(0,$max);
              imageline($im, 0, $y, $x, $y, $drawing_color);
              $y=$y+2;
          }
          
          imagepng($im);  // gibt das Bild aus
          imagedestroy($im);
      ?> 


PHP erzeugt Variablen für Flash
---------------------------------

Wenn PHP als „Backend“ für Flash verwendet wird kommt eine sehr einfache Form der Ausgabe zum Einsatz:  die Variablennamen und Werte werden wie für eine URL encodiert und ausgegeben. So könnte der Output eines Counters so aussehen:

count=25856&amp;date=2.Mai+2008&amp;time=10:15

Unter dem Stichwort „URL Funktionen“ finden Sie in der PHP-Doku die Funktion `http_build_query()` die hier weiterhilft.

PHP erzeugt XML
----------------

Bei der Zusammenarbeit mit Flash kommt auch XML zum Einsatz. Dies ist notwendig wenn komplexe Datenstrukturen übertragen werden sollen. Für eine Flash-Bildergalerie, die alle Bild-Dateien am Server darstellen soll, muss man zum Beispiel die Liste der Bilder übertragen:

      <bilder>
              <bild imageurl="img/DSC_3461.jpg" />
              <bild imageurl="img/DSC_3462.jpg" />
      </bilder>

Das PHP-Programm dazu könnte so aussehen:

      <?php
         header("Content-Type: application/xml");

         $bilder = glob("*.jpg");
         
         echo("<bilder>\n");
         foreach( $bilder as $bild ) {
             echo("<bild imgurl='$bild' />\n");
         
         }
         echo("</bilder>\n");
      ?>

PHP leitet weiter
------------------
Ein PHP-Programm kann den Browser zu einer anderen URL weiterleiten. So kann zum Beispiel die Verarbeitung einer Bestellung (im ersten PHP-Programm) von der Darstellung des Bestellstatus (im zweiten PHP-Programm) getrennt werden:

    <?php
    // hier passieren wichtige Dinge ...
    header("Location: status.php");
    exit; /* fertig, nichts weiter ausgeben! */ 
    ?> 
