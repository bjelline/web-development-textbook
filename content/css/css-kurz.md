---
title: Kurzvorstellung von Stylesheets
order: 10
---
Die einfachste Art die visuelle Darstellung einer Webseite zu definieren ist die Einbettung eines Stylsheets. Das Stylesheet definiert für die einzelnen HTML-Tags wie sie dargestellt werden sollen. In Listing 1 werden Formatierungen für die Tags body, p, h1 und h2 vorgenommen, der gezeigte &lt;style&gt;-Tag wird im Head des HTML-Dokument eingebunden:

    <style type="text/css">
    p {
        font-family: Calibri, Helvetica, Arial, sans-serif; 
        font-size: 13px;
    }
    h1,h2 {
        font-family: "Trebuchet MS", Verdana, Arial, sans-serif;
    }
    h1 { font-size: 24px; }
    h2 { font-size: 20px; }
    body { background-color: green; }
    </style>
Listing 1:  Hintergrundfarbe, Schriftfamilie, Schriftgröße mit CSS festlegen

An Hand dieses Beispieles werden nun die ersten Stylesheet-Befehle erklärt. Die Syntax von Stylesheets ist völig anders als die von HTML. 

Schriftart
-----------
Zuerst werden wir die Schriften im Dokument festlegen.  Achtung: Welche Schriften auf dem Endgerät zur Verfügung stehen ist nicht bekannt, deswegen kann man mehrere Schriften angegeben. Diese Liste wird vom Browser von links nach rechts abgearbeitet,die erste Schrift die er findet, verwendet er. (Man kann Schriften auch verlinken - aber das ist mehr ein Thema für MMA).

In Zeile 2 bis 5 werden zwei Anweisungen für Fließtext gegeben (HTML-Tag &lt;p&gt;): die Schriftfamilie in Zeile 3 und die Schriftgröße in Zeile 4. 

In Zeile 3 Vergleichen Sie Zeile 3 mit Zeile 7: Schriftnamen die ein Leerzeichen enthalten müssen in Anführungszeichen gesetzt werden, wie "Trebuchet MS" in Zeile 6. 

Das letzte Wort in Zeile 7 „sans-serif“ ist ein CSS-Kürzel für „irgendeine serifenlose Schrift“. Es empfiehlt sich am Ende einer Schriftliste ein solches Kürzel als Standardwert „wenn alle Stricke reißen“  anzugeben,dabei sind folgende Werte möglich:

sans-serif serif cursive fantasy monospace. 

Schriftgröße
---------------
Die Schriftgrößen-Angabe in Zeile 4 verwendet Pixel als Maßeinheit. Diese Maßeinheit macht bei der Darstellung am Screen,besonders in Kombination mit Pixel-Bildern Sinn. 

Absätze
---------
Wie immer in HTML erfolgt der Zeilenumbruch automatisch. Mit CSS können Sie verschiedene Aspekte des Absatz-Layoutes steuern, einige davon sind in Abbildung 18 gezeigt:


![Abbildung 18: Absatz mit CSS Formatanweisungen: text-indent und line-height](/images/image066.png)

Mit `text-align` können Sie die Ausrichtung des Texts im Absatz festlegen: `left`, `right`, `center` oder `justify` (Blocksatz). Blocksatz wurd am Web bis jetzt wenig verwendet, da die Browser lange keine Silbentrennung durchführten. Dadurch entstanden bei Blocksatz oft häßliche Löcher im Text. Seit dem Jahr 2011 unterstützen erste Browser die Silbentrennung, damit wird `justify` besser verwendbar.

Die erste Zeile des Absatzes kann einen separaten Einzug haben, den Sie mit `text-indent` festlegen. Die Zeilenhöhe wird mit `line-height` festgelegt. Hier ist es sinnvoll für längere Texte einen etwas erhöhten Wert festzulegen (z. B. `1.5em` – d.h.1,5 mal die Breite des Buchstaben M in dieser Schrift) da die Standard-Darstellung der Browser etwas zu eng ist um gut lesbar zu sein. 

CSS erforschen mit Firebug
---------------------------
Sie haben nun einen kurzen Einblick in die Schreibweise und die Möglichkeiten von Stylesheets. Genug um Stylesheets von Webseiten zu lesen um neue Möglichkeiten kennen zu lernen. Beim Lesen und Verstehen von CSS hilft das Firefox Add-On „Firebug“.


![Abbildung 19: Firefox Add-On Firebug](/images/image072.png)

