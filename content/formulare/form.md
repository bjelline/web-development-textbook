---
title: Formulare
order: 10
---
Mit Ihren bisherigen Kenntnissen können Sie schon Webseiten mit einfachen Interaktions-Möglichkeiten gestalten: mit Links ermöglichen Sie der LeserIn die Navigation durch das Web. Formulare ermöglichen mehr Interaktion – aber immer noch in einem sehr strengen, sehr strukturierten Rahmen. Abbildung 44 zeigt zwei typische Anwendungsgebiete für Web-Formulare: das Eingabeformular der Suchmaschine Google und ein Bestellformular.
 
![Abbildung 44: Formulare in Webseiten](/images/image173.png)

Mit den  HTML-Tags `form`, `input /`, `textarea`, `option`, `select` werden Formulare aufgebaut. Hier ein einfaches Beispiel:

<htmlcode caption="Einfaches Formular">
    <form method="get" action="bestellung.php">
      Bitte schicken Sie den Newsletter an die E-Mail Adresse:
      <input type="text"   name="email">
      <input type="submit" value="Ja, ich will!">
    </form>
</htmlcode>

Der `form`-Tag ist „unsichtbar“ und dient nur dazu, die anderen Eingabefelder zu bündeln. Im action-Attribut des `form`-tag wird angegeben, an welche URL die Daten zur Verarbeitung geschickt werden. 

Im Browser sieht das oben gezeigte Formular so aus:


![Abbildung 45: Darstellung eines Web-Formulars im Browser](/images/image176.png)

Eingabefelder
--------------
Innerhalb des  `form`-Tag bauen Sie das Formular aus verschiedenen Eingabeelementen und den „normalen“ HTML-Tags auf. Tabelle 2 zeigt die verschiedenen Arten von Text-Eingabefeldern.



|Textfeld                 |&lt;input type="text" name="mail">|<input type="text" name="mail">|
|Textfeld mit default-Wert|&lt;input type="text" name="hochschule" value="FH Salzburg">       |<input type="text" name="hochschule" value="FH Salzburg">       |
|Passwort-Feld:           |&lt;input type="password" name="meinpasswort"> |<input type="password" name="meinpasswort"> |
|mehrzeiliges Textfeld    |&lt;textarea name="zitat"> In a hole in the ground there lived a Hobbit.  </textarea>|<textarea name="zitat"> In a hole in the ground there lived a Hobbit.  </textarea>|
{: class="table table-condensed table-bordered" style="width:auto"}


Für einzelne Fragen die mit Ja oder Nein zu beantworten sind wird das Eingabe-Element „checkbox“ verwendet

<htmlcode caption="Checkbox für Ja/Nein Frage">
<input type="checkbox" name="schlag"> mit Schlagobers
</htmlcode>

![screenshot](/images/image186.png)

Für Fragen, bei denen eine von mehreren vorgegebenen Antworten möglich sein soll gibt es verschiedene Eingabeelemente.


<htmlcode caption="Radiobuttons">
    <input type="radio" name="size" value="XL"> XL
    <input type="radio" name="size" value="L">   L
    <input type="radio" name="size" value="M">   M
    <input type="radio" name="size" value="S" checked> S
</htmlcode>

![screenshot](/images/image188.png)

<htmlcode caption="Menü mit select und option">
    <select name="size2">
          <option>XL</option>
          <option selected>L</option>
          <option>M</option>
          <option>S</option>
    </select>
</htmlcode>

![screenshot](/images/image190.png)

<htmlcode caption="Menü mit „leer“- Auswahl">
    <select name="size3">
          <option>---Bitte Auswählen---</option>
          <option>XL</option>
          <option>L</option>
          <option>M</option>
          <option>S</option>
    </select>
</htmlcode>

![screenshot](/images/image192.png)

<htmlcode caption="Liste - ermöglicht Mehrfach-Auswahl">
    <select name="html" size="4" multiple="multiple">
          <option>im Code</option>
          <option>Dreamweaver</option>
          <option>GoLive</option>
          <option>Frontpage</option>
    </select>
</htmlcode>

![screenshot](/images/image194.png)

Radiobuttons, die zu einer Frage gehören, müssen den selben Namen tragen. der Wert ist unterschiedlich (im Code: Attribut name ist gleich, value unterschiedlich).  Nur bei einer Liste besteht die Möglichkeit mehrere Antworten auszuwählen. Für alle Eingabefelder gibt: falls auch "keine Antwort" möglich sein soll müssen Sie dafür eine eigene Option einbauen.

### Absenden

Jedes Formular braucht einen Absende-Button

<htmlcode caption="Absende-Button">
<input type="submit" value="drück mich!">
</htmlcode>

![screenshot](/images/image196.png)

Neben dem Absende-Button gibt es noch andere Methoden wie ein Formular „abgesendet“ werden kann: Falls das Formular nur ein einziges Text-Eingabefeld hat, kann man in diesem Feld auf ENTER drücken um das Formular zu senden. Wenn das Formular ein Bild-Feld enthält (siehe unten) veranlasst ein Klick auf das Bild das Einsenden. 

### Zurücksetzen? Nein Danke!

<htmlcode caption="Zurück: bitte nicht verwenden">
<input type="reset"  value="Zurücksetzen">
</htmlcode>

![screenshot](/images/image198.png)

Den Zurücksetzen Button sollten Sie nur sehr selten einsetzen. Warum? Denken Sie an Ihre eigene Erfahrung mit Web-Formularen zurück: Wie oft haben Sie auf einen Zurücksetzen Button gedrückt und dann gedacht „super, alles gelöscht, genau das wollte ich“, und wie oft haben Sie auf einen Zurücksetzen Button gedrückt und dann gedacht „Mist, das war ja gar nicht der Absende-Button, jetzt muss ich alles noch mal tippen.“

### Label

Bisher haben wir nur die Eingabefelder selbst betrachtet. „Rundherum“ verwendet man auch alle bisher gelernten HTML-Elemente. So wäre es z.B. möglich, die Beschriftung einfach als Text neben das Eingabefeld zu stellen:

<htmlcode caption="Formularfeld ohne Label">
<p>E-Mail:<input type="text" name="mail" placeholder="ihre e-mail"></p>
</htmlcode>

Damit ist aber nicht erkennbar, welche Beschriftung (vorher, nachher, weiter oben, weiter unten) zu welchem Eingabefeld gehört. Dass dieser Zusammenhang klar ist (auch für screen reader etc) stellt man mit dem `label`-Tag sicher:

<htmlcode caption="Formularfeld mit Label">
<p><label>E-Mail:<input type="text" name="mail" placeholder="ihre e-mail"></label></p>
</htmlcode>

Falls der Beschriftungs-Tag weiter entfernt ist kann der label auf die ID des Eingabefeldes verweisen:

<htmlcode caption="Formularfeld mit entferntem Label">
<label for="mail">E-Mail:</label> 
....
<input type="text" name="mail" id="mail" placeholder="e-mail adresse">
</htmlcode>

### Weitere Eingabefelder

Noch mehr Eingabefelder, die eher selten gebraucht werden.


|Unsichtbares = Verstecktes Feld |&lt;input type="hidden" name="webseite" value="www.students">
|Button ohne Auftrag, für Javascript-Programme|&lt;input type="button" value="Extrafenster" onclick="...">
|Bildfeld, liefert angeklickte x+y Koordinaten.|&lt;input type="image" name="position" src="austria.gif">
|Datei-Upload, funktioniert nur wenn die Formular-Daten mit Methode POST und speziellem enctype an den Webserver geschickt werden|Wählen Sie ein Bild aus: &lt;input type="file" name="bilddatei">
{: class="table table-condensed table-bordered" style="width:auto"}


<htmlcode caption="Visuelle Zusammenfassung mehrer Felder: fieldset + legend">
<fieldset> 
<legend>Kreditkarte</legend>
     <input name="nr" /><br>
     <input type="radio" name="kk" 
            value="Master" /> Master 
     <input type="radio" name="kk" 
            value="Visa" /> Visa <br>
</fieldset>
</htmlcode>



Aus diesen Eingabeelementen ist jedes Web-Formular aufgebaut. Die Problematik der Formulare liegt nicht in der Kenntnis der Eingabefelder, sondern im Entwurf der Interaktionsmöglichkeiten.
