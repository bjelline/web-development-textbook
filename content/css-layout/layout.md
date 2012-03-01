---
title: CSS für Layout
order: 20
---
Die Darstellung einer HTML-Seite durch den Browser erfolgt von oben nach unten, je nach Sprache von links nach rechts oder von rechts nach links. Dabei wird zwischen blockbildenden Tags und nicht-blockbildenden Tags unterschieden (wie in Kapitel 1.4.6 schon erläutert). In Abbildung 33 wurden &lt;p&gt; und &lt;em&gt;-Tags verwendet und mit folgendem Stylesheet formatiert:

    p { background-color:#CCCCCC; }
    em { background-color:#FFFF66; }

Bei der Darstellung im Browser kann der nicht-blockbildender Tag em dabei auf mehrere Zeilen verteilt werden und nimmt dann mehrere rechteckige Bereiche ein, der blockbildende Tag p wird immer als ein Rechteck dargestellt:

![Abbildung 33: Darstellung von blockbildenden und nicht-blockbildenden Tags](/images/image128.png)

Ein Bild wird dabei wie ein Wort im Text behandelt, und nicht etwa frei auf der Webseite positioniert.  Wenn Sie das Bild wie in Abbildung 34 mitten in einen Absatz hinein setzen, ergibt das meist ein sehr hässliches Layout. 

![Abbildung 34: Bild mitten im Absatz](/images/image130.png)

Lange konnten Browser keine Wörter trennen und umbrechen, ein langes „Wort“ konnte dadurch die Breite eines Elemets überschreiten. Verschiedene Browser verhalten sich hier unterschiedlich. In Abbildung 35 können Sie sehen, dass Microsoft Internet Explorer 7.0 URLs nicht umbricht. Firefox 3.0 hingegen tut es schon.

![Abbildung 35: Darstellung eines Absatzes mit Rahmen und fixer Breite, der lange Wörter enthält, in MSIE 7.0](/images/image132.png)

Width und Auto
---------------
Normalerweise nimmt ein Block die maximal zur Verfügung stehende Breite ein. Mit width kann eine Andere Breite eines Blocks definiert werden:

    div#main {  width:500px; }

Je nach box-sizing müssen Sie die Werte von padding, border, margin dazu addieren um den Gesamt-Platzbedarf zu errechnen, oder nicht:

    {
       width: 200px; 
       padding: 10px; 
       border-width: 10px; 
       margin: 32px 0px
    }

Gesamtbreite = 0px + 10px + 10px + 200px + 10px + 10px + 0px = 240px

![Abbildung 36: width im Box-Model mit box-sizing: content-box](/images/image134.png)

Um einen Inhalt zu zentrieren kann margin mit Wert auto verwendet werden, der den zur Verfügung stehenden Platz automatisch gleichmäßig verteilt. 

    div#main {
        width:500px; 
        margin-left:  auto;
        margin-right: auto;
    }

Float
------
Eine Möglichkeit aus der normalen Reihenfolge der Darstellung auszubrechen bietet die Deklaration float mit den Werten left und right. Damit wird ein Element nach links bzw. rechts gesetzt, der Rest des Inhalts „rutscht nach oben“ und wird neben das Element gesetzt („umfließt das Element“). 

In Abbildung 4 sind drei Absätze zu sehen die jeweils als erstes ein Bild enthalten. Im ersten Absatz ist die Darstellung ganz normal – das Bild wird wie ein Wort im Text behandelt. Im zweiten Absatz „floated“ das Bild nach rechts, der Text rutscht links davon nach oben. Im dritten Absatz „floated“ das Bild nach links, der Text rutscht rechts davon nach oben. 

![Abbildung 37: Bilder mit float](/images/image136.png)

Bei Bildern funktioniert float besonders einfach, weil das Bild schon eine fixe Breite hat. Wird ein anderer HTML-Tag mit float versehen muß man auch die Breite des Tags setzen um einen sichtbaren Effekt zu erzielen. In Abbildung 38 soll der zweite Absatz nach rechts gehen. Er hat die ID edvard. 
    
![Abbildung 38: Ein Absatz mit float](/images/image138.png)

Wenn viele Elemente mit float positioniert werden die die gleiche Höhe haben entsteht ein besonders flexibles Layout: in Abbildung 39 werden je nach zur Verfügung stehendem Platz drei oder vier Bilder nebeneinander dargestellt:
  
![Abbildung 39: Zwei Darstellungen der Bildergalerie mit float](/images/image140.png)

Absolute Positionierung
------------------------
Mit der Deklaration position:absolute wird ein Tag aus der normalen Darstellung herausgenommen und über dem restlichen Inhalt der Seite platziert. Mit top und left kann die linke obere Ecke des Elements positioniert werden. (oder mit bottom und right die rechte unter Ecke)

    #navi {
           position: absolute;
           width: 80px;
           top:    0px;
           left:   0px;
    }

In Kombination mit einem Inhalt mit margin-left ergibt das folgendes Layout:
 
![Abbildung 40: Kombination von absoluter Positionierung und margin-left](/images/image142.png)

Die Koordinaten (top und left) beziehen sich normalerweise auf die linke obere Ecke des Browserfenster. 

Ein Tag mit position:absolute oder position:relative bildet für seine untergeordneten Tags ein neues Koordinationsystem. In folgendem Code definiert das main-div ein neues Koordinatensystem, das navi-div ist also in der linken oberen Ecke des main-div und nicht in der linken oberen Ecke des Browser-Fensters positioniert. 

    <div id="main">
        <div id="content">
            <h1>Inhalt</h1>
            <p>Hier ist der Inhalt[. . . ]</p>
        </div>
        <div id="navi">
        [. . . ]
        </div>
    </div>

    #main {
       border: 1px red solid;
       position:relative;
       width: 700px;
       margin: 0px auto;
    } 
    #content {
       margin-left: 120px;
       background-color: #ddd;
    }
    #navi {
       position: absolute;
       width: 80px;
       top:0px;
       left:0px;
    }

Navigationsmenü mit CSS
-----------------------
Wenn man mit CSS ein Navigationsmenü gestaltet dann sollte man von einem HTML-Code ausgehen der auch ohne CSS gut benutzbar bleibt ( „graceful degradation“), und der nur mit CSS umgestaltet wird.

Der Ausgangspunkt für ein Navigationsmenü ist eine Liste mit Links:

    <div class="navi">
       <h3 class="unsichtbar">Seitenauswahl</h3>
       <ul>
          <li><a href="index.html">home</a></li>
          <li><a href="ort.html">ort</a></li>
          <li><a href="typografie/">typografie</a></li>
          <li><a href="bestellung/">bestellung</a></li>
       </ul>
    </div>

Ohne CSS wird die Liste ganz normal dargestellt. Mit CSS kann man daraus ein vertikales Menü machen, dazu wird mit list-style-type:none der Listenpunkt zu einem normalen Tag. 

    .unsichtbar {display:none;}

    div.navi li {
       list-style-type:none;
       margin-bottom:1px; 
       background:#6C6;
       width:6em;
       padding: 0.2em;
    }

    div.navi li a:link {
       text-decoration: none;
       font-weight: bold;
       color: black;
    }

Mit Hilfe von Float kann man das Menü auch horizontal darstellen, dazu muß nur ein float eingefügt und der margin anders gesetzt werden:

    div.navi li {
       float:left;
       list-style-type:none;
       margin-right:1px; 
       background:#6C6;
       width:6em;
       padding: 0.2em; 
    }

    div.navi li a:link {
       text-decoration: none;
       font-weight: bold;
       color: black;
    }

Navigationsmenü wiederverwerten mit PHP
-----------------------------------------
Das Navigationsmenü sollte natürlich in allen Seiten der Site gleich vorhanden sein. Dazu könnte man den Code in alle HTML-Dateien kopieren. Wenn man dann eine neue Seite einfügen will, muss man wiederum alle Seiten editieren.

Deswegen bietet es sich an bei dieser Gelegenheit von einfachem HTML auf PHP umzusteigen. PHP ist eine Programmiersprache am Webserver mit der wir uns im Sommersemester intensiv beschäftigen werden.

Dazu müssen alle HTML-Dateien die Endung .php erhalten, im Navigationsmenü sieht das dann so aus:

    <div id="navi">
       <h3 class="unsichtbar">Seitenauswahl</h3>
       <ul>
          <li><a href="index.php">home</a></li>
          <li><a href="ort.php">ort</a></li>
          <li><a href="typografie/">typografie</a></li>
          <li><a href="bestellung/">bestellung</a></li>
       </ul>
    </div>

Links die auf Ordner verweisen sind hier besonders praktisch: Sie ersetzen die Datei index.html durch index.php, der Link bleibt gleich.

Das Navigationsmenü wird nun in einer separaten Datei gespeichert, z.B. navi.php.  In den einzelnen Seiten wird das Menü dann mit include eingebunden:

    <body>
    <?php include "navi.php" ?>
    <h1>News</h1>

Achtung: Das Einfügen der inkuldierten Datei erfolgt auf dem Server. Der Client erhält das vollständige HTML-Dokument inklusive Navigation, und merkt von der Inkludierung nichts. Mit ANSICHT → SEITENQUELLTEXT ANZEIGEN kann man den PHP-Code nicht sehen. 

![Abbildung 41: Original PHP-Datei am Server und Quelltext-Ansicht im Webbrowser](/images/image145.png)

Damit ist nun das Einfügen eines neuen Menü-Punkts ins Navigationsmenü ganz einfach: nur die Datei navi.php muss editiert werden.

:hover und :focus
------------------
Mit dem Selektor :hover wird eine CSS-Regel nur angewandt wenn die Maus über dem Tag ist. (:focus hat eine ähnliche Bedeutung bei der Steuerung mit der Tastatur.)

    div       { background-color: #ddd; }

    div:hover { background-color: red; }

    Mit Hilfe von Hintergrundbildern kann man so zum Beispiel einen kitschigen 3d-Button darstellen, der beim hovern „hineingedrückt“ wird. 

    div       { background-image: url(button-up.png);   }

    div:hover { background-image: url(button-down.png); }

Beim Laden des zweiten Hintergrundbildes kann es dabei zu einer Verzögerung kommen. Um das zu verhindern kann man die beiden Hintergrundbilder in einer Bilddatei speichern und nur den Bildausschnitt wechseln:

    div {
       height:115px;
       width:240px;
       background-image: url(pix/rolloverButton.gif);
       overflow:hidden;
    }

    div:hover {
       background-position: 0 -120px;
    }

Eine extreme Anwendung dieses Prinzips nennt man CSS-Sprites: dabei werden möglichst viele Bilder in einer Bild-Datei zusammengefaßt. Falls viele kleine Icons verwendet werden, kann das die Darstellung der Webseite erheblich beschleunigen. 

![Abbildung 42: CSS Sprites von Yahoo](/images/image147.png)

So könnte der CSS Code aussehen7:

    .icon{
      display:block;
      padding:8px 0 9px 40px;
      background:url(http://us.i1.yimg.com/pa-icons2.gif) 5px 3px no-repeat;
    }

    #messenger .icon{
       padding-left:31px;
       background-position:2px -497px;
    }
    #music .icon{
       background-position:5px -197px;
    }

Achtung: auf Touch-Geräten wie Tables und Smartphones gibt es kein :hover! Deswegen sollte man :hover nur zur Dekoration, nicht aber für wichtige Funktionen verwenden!

