---
title: Syntax von CSS
order: 20
---

Ein Beispiel

<css caption="Die Datei fh.css">
h1,h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: lightblue;
}
body {
  margin-left: 150px;
  background-color: white;
} 
p {
  text-align: justify;
}
</css>

Eine Stylesheet-Regel („Rule“)  besteht aus einem Selektor gefolgt von einer geschwungenen Klammer die eine oder mehrere Deklarationen enthalten kann. 

Der einfachste Selektor besteht aus dem Namen eines einzelnen HTML-Tags. Sie können auch mehrere Elemente durch ein Komma trennen. In diesem Falle werden für alle Elemente die selben Style -Angaben definiert, (siehe h1,h2 in obigem Beispiel). 

Sie können beliebig Zeilenumbrüche und Whitespace einfügen, beides wird ignoriert. 

### Style für mehrere Seiten

Die Seiten einer gesamten Website haben meist ein einheitliches Aussehen. Dies können Sie erreichen, wenn Sie für jede Webseite dieselbe CSS Datei verwenden. Dazu müssen Sie in jede HTML-Datei die CSS Datei mittels folgender Anweisung einbinden:

<htmlcode>
<link rel="stylesheet" href="mystyle.css">
</htmlcode>

Diese Zeile sollte innerhalb des head Bereiches der HTML-Datei stehen (da sonst die Darstellung der Seite verzögert werden kann). `mysyle.css` könnte etwa so aussehen wie im vorigen Beispiel. 

### Style für eine Seite

Wenn Sie einen Style  nur auf einer einzigen Webseite verwenden, können Sie die Style-Angaben direkt in die HTML-Datei schreiben, und zwar innerhalb des head Bereiches. 

<htmlcode>
<style>
  h1,h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: lightblue
  }
</style>
</htmlcode>

### Style für einen Tag

Style Angaben können auch direkt in einen einzelnen HTML-Tag geschrieben werden. In diesem Fall gilt die Angabe nur für diesen ganz speziellen Tag. 

Um einen style für einen einzelnen Tag zu definieren, müssen Sie innerhalb des Tags das Attribut style verwenden. 

<htmlcode>
<h1 style="color:red; text-align:center;">Rote, zentrierte Überschrift</h1>
</htmlcode>

### Gültigkeitsbereich einer Style Angabe

Sie können innerhalb einer HTML-Datei sowohl eine externe Style Sheet Datei verwenden (eingebunden durch eine entsprechende Anweisung im head Bereich) als auch eine lokale Definition im head Bereich angeben, als auch spezielle Angaben für einzelne Tags erstellen. 

Was passiert nun, wenn die verschiedenen Style-Deklarationen sich widersprechen? Die Angaben bei einem einzelnen Tag haben immer Vorrang. Danach folgen die lokalen Angabe im head Bereich und erst zum Schluß die externe Datei. „Je näher beim Tag desto stärker wirkt es.“

Klassen, IDs, SPANs und DIVs
-----------------------------
Wenn Sie mit den Style-Angaben den p-Tag umformatieren, betrifft das alle p-Tags in der Webseite. Oft möchten Sie aber ein oder zwei Absätze anders formatieren als die anderen Absätze. Zu diesem Zweck können Sie sich im Stylesheet noch weitere Formatvorlagen - sogenannte "Klassen" - definieren:

<css>
.wichtig { color: red; }
</css>

Diesen Klassen können Sie eigene Namen geben (hier „wichtig“), vor dem Klassennamen steht immer ein Punkt. Jedem normalen HTML-Tag können Sie nun diese Klasse zuweisen. Dies geschieht mit dem Attribut class. 

<htmlcode>
<p>Eine <b class="wichtig">ganz wichtige</b> Meldung</p>
<p class="wichtig">Ein ganz wichtiger Absatz</p>
<p>Ein ganz normaler Absatz</p>
</htmlcode>

Zur „normalen“ Wirkung des HTML-Tags kommt nun die Formatierung durch die Klasse hinzu: der Text „ganz wichtige“ und „Ein ganz wichtiger Absatz“ ist in diesem Beispiel also rot. Eine Klasse kann also mehrmals in einem Dokument verwendet werden. Ein Tag kann mehrere Klassen erhalten, diese werden durch Leerzeichen getrennt im class-Attribut angeführt.

<htmlcode>
<p class="wichtig eilmeldung">Ein wichtiger Absatz als Eilmeldung</p>
</htmlcode>

Zur eindeutigen Kennzeichnung von Tags wird das Attribut id verwendet:

<htmlcode>
<p>Eine <b class="wichtig">ganz wichtige</b> Meldung</p>
<p class="wichtig">Ein ganz wichtiger Absatz</p>
<p id="impressum">Das einzige Impressum dieser Seite</p>
</htmlcode>

Auf diese eindeutigen IDs kann in CSS mit der Raute (englisch: „hash sign“) referenziert werden:

<css>
#impressum { background-color: #DDD; }
</css>

Sowohl Klassen als auch IDs können mit Tags kombiniert werden um einen komplexen Selektor zu bilden, aber das macht nur bei Klassen wirklich Sinn:

<css>
.wichtig { font-size: 20px; }     /* alle Tags mit der Klasse wichtig     */
p.wichtig { color: red;    }     /* nur der Tag p mit der Klasse wichtig */

b.wichtig { color: yellow; }    /* nur der Tag b mit der Klasse wichtig */

#impressum { background-color:#ddd; }   /* nur der Tag mit der id #impressum */
p#impressum { background-color:#ddd; } /* == nur der p-Tag mit der id #impressum */

b#impressum { background-color:#ddd; }   /* nix! */
</css>

Die Firefox-Erweiterung Firebug zeigt Tags, Klassen und IDs in dieser Schreibweise an:

Es wird öfter vorkommen, dass Sie einem Bereich eine bestimmte Klasse zuweisen möchten, ohne dass ein passender Tag vorhanden ist. Hier können Sie die  beiden Tags &lt;span&gt; und &lt;div&gt; verwenden, die beide selber kaum Eigenschaft aufweisen. &lt;span&gt; eignet sich für die Verwendung in Fließtext, &lt;div&gt; ist ein blockbildender Tag.

<htmlcode>
<p>Es gibt hier ganz <span class="wichtig">besonders interessante</span> Meldungen.</p>
</htmlcode>

Die Worte „besonders interessante“ erscheinen rot. 

Maßeinheiten in Stylesheets
-----------------------------

Für Längen- und Größen-Angaben gibt es mehrere Maßeinheiten: vw (Hundertstel der Viewport-Breite), vh (Hunderstel der Viewport-Höhe), px (Pixel) , em (=Breite des Buchstaben M) , ex (Höhe des Buchstaben X),  % (Prozent), cm (Zentimeter), in (Inch).   Einige davon sind relativ (em = relativ zur Schriftgröße, px = relativ zur Pixel-Größe am aktuellen Ausgabemedium), andere absolut (Centimeter, Inch). Die absoluten Angaben kann man derzeit nur bei der Ausgabe auf Papier sinnvoll verwenden.  [Demo](/images/css-masse.html)

Farbangaben können auf mehrere Arten erfolgen: mit einigen Farbwörtern (red, green,…) oder mit der Angabe von rot-, grün- und blau-Anteil (jeweils Werte von 0 bis 255) in verschiedenen Schreibweisen: Dezimal `rgb(16,0,255)`, hexadezimal `#10F` oder zweistellig hexadezimal `#1000FF`. Mit CSS3 ist auch die Angabe eines Alpha-Wertes möglich: Hier ein Braun-Ton der nur zu 20% deckend ist, und zu 80% den darunter liegenden Content bzw. das Hintergrundbild durchscheinen lässt: `rgba(153, 134, 117, 0.2);`

Tool-Tipp: Mit dem Firefox AddOn Colorzilla kann man die Farben einer Webseite auslesen und in verschiedenen Schreibweisen kopieren:

![Abbildung 20: Colorzilla Pipette zum auslesen einer Farbe und Colorzilla Menü zum kopieren des Codes](/images/image073.png)

Wird in einem Stylesheet auf eine URL verwiesen (z.B. auf die URL eines Hintergrundbildes), dann kommt die Schreibweise `url(http://absolute.com/bild.gif)` oder `url(relativ/bild.gif)` zum Einsatz. Achtung: die relative URL bezieht sich auf das Stylesheet (nicht die HTML-Datei in der es verwendet wird).

