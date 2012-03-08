---
title: Rahmenbedingungen für Layout
order: 10
---
Wie in Kapitel 1 beschrieben gibt es viele verschiedene Ausgabegeräte für Webseiten. Für die Gestaltung des Layouts von Webseiten spielt dabei die Bildschirmgröße bzw. die Auflösung eine wichtige Rolle. 

Auflösung
-----------
Zuerst stellt sich die Frage: woher weiß ich, wie hoch die Auflösung am Computer meiner LeserIn ist?  Woher weiß ich, wie viel Platz im Browserfenster zur Verfügung steht?

Die Antwort lautet: ich weiß es nicht, und es gibt keine zuverlässige Methode, mit der man diese Information in jedem Fall herausfinden kann. Es gibt eine Meßmethode mit Hilfe der Programmiersprache Javascript, mit der man die Größe des Browserfensters messen kann – das Ergebnis der Messung ist natürlich dadurch verfälscht, dass Browser ohne Javascript ganz aus der Messung herausfallen. Diese Beschränkung sollten Sie bei den folgenden Überlegungen immer beachten. 

Abbildung 25 zeigt einige derzeit (2011) mögliche Bildschirm-Auflösungen. 

 
![Abbildung 25: einige mögliche Bildschirmauflösungen und Seitenverhältnisse 2011,](/images/image092.png)

basierend auf http://en.wikipedia.org/wiki/Image:Vector_Video_Standards2.svg

Vergleichen Sie die höchsten hier dargestellte Auflösungen mit der geringsten Auflösungen. Da Breite und Höhe (mehr als) verdreifacht sind, steht bei der höchsten Auflösung also (mehr als) die neunfache Fläche zur Verfügung!

Achtung, diese Angaben sind in Pixel – die reale Größe des Ausgabegerätes (24“ Desktop, 13“ Laptop, mobiles Endgerät) ist bei gleicher Pixel-Auflösung sehr unterschiedlich! Mobile Geräte haben eine geringe Auflösung, aber eine höhere Pixeldichte:

|Gerät|Erscheinungsjahr|Pixel|Diagonale Inch|Pixel per Inch|
|+----|+---------------|+----|+-------------|+-------------|
|Altes 19” LCD Display|2008|1280 × 1024|19 in|86 ppi|
|15” Macbook Pro|2007|1440 × 900|15.4 in|110 ppi|
|Sony PSP 7th gen|09/2005|480 × 272|4.3 in |128 ppi|
|Apple IPhone3|06/2009|480 × 320|3.5 in |163 ppi|
|Apple IPhone4|06/2010|960 × 640|3.5 in|326 ppi |
|Apple IPad 3rd gen|03/2011|2048×1536|12 in|264 ppi |
|Amazon Kindle, 3rd gen|11/2007|600 × 800|6 in |167 ppi |
|Google Nexus One |1/2010|800 × 480|3.7 in |254 ppi |
|Android Galaxy Nexus|11/2011|1280 × 720|4.65 in |316 ppi |
{: class="table table-condensed table-bordered" style="width:auto"}

Abbildung 26 zeigt Statistiken über die Bildschirmauflösung von w3schools.org von 2000 bis 2011. In diesem Zeitraum hat sich die Mehrheit langsam von 800x600 (bis 2003) auf 1024x768 (bis 2008) und schließlich auf höhre Auflösungen verschoben. Achtung: Auf Grund des Messverfahrens werden hier wahrscheinlich nur Desktops erfaßt, nicht mobile Geräte.

 
![Abbildung 26: Statistik über die Bildschirmauflösung,](/images/image097.png)

http://www.w3schools.com/browsers/browsers_display.asp

Brutto-Fläche vs. Netto-Fläche
---------------------------------
Von diesen „Brutto-Angaben“ über die Größe der zur Verfügung stehenden Fläche sind nun noch der Platz für den Fensterrahmen des Browsers, für Scrollbalken, Symbolleisten, und eventuell eingeblendete Favoritenleisten abzuziehen, um den „netto“ verbleibenden Raum für die Gestaltung der Webseite zu erhalten. Abbildung 27 zeigt diese Problematik am Beispiel von Firefox. 

 
![Abbildung 27: Platzbedarf von Browser-Elementen: firefox ohne Sidebar, Internet Explorer mit Favoriten](/images/image100.png)

Entwurf für mehrere Auflösungen
----------------------------------
Wie gehen WebdesignerInnen mit den verschiedenen Auflösungen um? Ein paar Varianten:

1.  Ignorieren und für die eigene Bildschirmauflösung entwerfen.  Manchmal in Kombination mit der Beschriftung „best viewed at 1600x1200“

2.  Ignorieren dass es viele Bildschirmauflösungen gibt, und für das Minimum entwerfen. 

3.  Ein Entwurf der für mehrere Auflösungen funktioniert

4.  Zwei oder drei Entwürfe, die den gleichen Inhalt für verschiedene Auflösungen unterschiedlich darstellen.

Dazu ein strenges Urteil:

1) ist völlig inadäquat für das Medium Web. „best viewed“ ist eine Zumutung für alle LeserInnen auf "unpassenden"  Ausgabegeräten. Stellen Sie sich vor, am Eingang eines Gebäudes wäre neben der Treppe ein Schild angebracht „nur benutzbar für Leute die Treppen steigen können“. Das Problem wurde erkannt, und absichtlich nicht gelöst?

2) Zeigt schon ein Minimum an Wissen über das Web, ignoriert aber die gestalterische Herausforderung des Mediums. Weil solch ein Entwurf auf einem Bildschirm mit hoher Auflösung sehr klein auf einer großen leeren Fläche erscheint wird es spöttisch „Briefmarkenlayout“ genannt.

3) +  4)  Nur das verdient wirklich die Bezeichnung „Webdesign“.

Technische Umsetzung 
--------------------

Kleine Unterschiede im vorhandenen Platz kann man durch zentrierung des Inhalts augleichen (siehe auch "Briefmarkenlayout")

![Abbildung 28: Aktuelle Homepage der FH Salzburg (November 2009)](/images/image110.png)


<css caption="fixen Breite und automatischer Seitenabstand ergeben eine Zentierung des Inhalts">
  div#wrap {
    width: 76em;
    margin: 0 auto;
  }
</css>


Große Unterschiede im Platz kann man mit Mediaqueries in CSS behandeln. Die Verwendung von Mediaqueries wurde 2010 in einem Artikel von Ethan Marcotte in "A List Apart" unter dem Begriff "Responsive Webdesign" popularisiert [&rarr;](http://www.alistapart.com/articles/responsive-web-design/). 

![Das erste Beispiel für "Responsive Webdesign": Darstellung der Seite auf verschiedenen Breiten](/images/responsive.png)

Luke Wroblewski schlug schon 2009 unter dem Slogan "Mobile First" vor, zuerst die mobile Version der Website zu gestalten, und davon dann die "größeren" Versionen abzuleiten [&rarr;](http://www.lukew.com/ff/entry.asp?933).


Die technische Umsetzung des verschiedenen Layouts ist relativ einfach: Mediaqueries erlauben eine "Verzweigung" in CSS.

<css caption="CSS mit Mediaqueries: Nur wenn Darstellung am Screen, und Breite kleiner gleich 480 Pixel">
  @media screen and (max-device-width: 480px) {
    .column {
      float: none;
    }
    /* weitere Regeln für kleine Screens */
  }
  /* allgemein gültige Regeln */
</css>

Bilder
-------
Bilder waren lange Zeit ein Grund, warum das Layout von Webseiten nicht flexibel war: weil die Bilder nur für die Darstellung bei einer bestimmten Größe geeigenet waren. Das ist im Jahr 2011 anders.

### Pixel
Als Bildformate für `<img>` Tags in Webseiten werden nur Pixel-Formate von vielen Browsern unterstützt. Diese Formate (jpg, png, gif) sind eigentlich für die Darstellung bei einer bestimmten Größe gedacht. Die Vergrößerte Darstellung von Pixel-Bildern liefert keine guten Ergebnisse:


![Abbildung 29: Ausschnitte aus einem Pixel Bild, vom Browser (Firefox) in 3 Stufen vergrößert dargestellt](/images/image117.png)


Aktuelle Browser sind aber sehr gut bei der verkleinerten Darstellung von Pixel-Bildern. 


![Abbildung 30: Pixel Bild wird vom Browser (Firefox) in 3 Stufen verkleinert dargestellt](/images/image119.png)

### Vektor

Mit dem Format SVG steht auch ein vektor-basiertes Bildformat für das Web zur Verfügung. SVG-Bilder können in beliebiger Größe verwendet werden. Die Einbindung erfolgt mit dem img-Tag: 

    <img src="circle.svg">

![Abbildung: Kreis in SVG-Darstelllung](/images/circle.svg)

SVG-Dateien kann man im Code schreiben oder mit Inkscape, Adobe Illustrator oder anderen Vektor-Programmen erstellen.

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
        "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg xmlns="http://www.w3.org/2000/svg"
         version="1.1" baseProfile="full" width="100%" height="100%"
         preserveAspectRatio="xMinYMin meet" viewBox="0 0 300 300">
        <linearGradient id="orange_red"
            x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"
                style="stop-color:rgb(255,255,0); stop-opacity:1"/>
            <stop offset="100%" style="stop-color:rgb(255,0,0); stop-opacity:1"/>
        </linearGradient>
        <circle id="myCircle" cx="50%" cy="50%" r="100" fill="url(#orange_red)" />
    </svg>

Das Attribut `preserveAspectRatio` im svg-Tag bestimmt wie das Bild auf verschiedenen Größen dargestellt werden soll.

### Canvas

Der canvas-Tag bietet eine Leinwand, auf die mit Javascript in 2D oder 3D gezeichnet werden kann. Ohne Javascript ist er nur eine leere Leinwand, und wird deswegen hier noch nicht behandelt.

Schriftgröße
---------------
Die Schriftgröße im Browser unterliegt nur bedingte der Kontrolle durch HTML und CSS Code. Das „letzte Wort“ hat hier die LeserIn, die die Schrift größer oder kleiner stellen kann. z.B. in MSIE unter Ansicht → Schriftgrad, in Firefox mit der Tastenkombination STRG + oder STRG – 

Je nach Schriftgröße und zur Verfügung stehendem Platz im Browser-Fenster wird der Browser die Absätze geeignet in Zeilen umbrechen, wie in Abbildung 31 gezeigt. 


![Abbildung 31: Darstellung von Text bei verschiedenen Fensterbreiten und Schriftgrößen](/images/zeilenumbruch.png)

Beim Vergrößern und Verkleinern der Schriftgröße verwenden die Browser zwei verschiedene Methoden: entweder die Bilder werden mit der Schrift vergrößert und verkleinert, oder nur der Text wird verändern, die Bilder aber bleiben gleich. Häufiger ist die erste Variante (Default-Einstellung der meisten Browser). Abbildung 32 zeigt das entsprechnde Menü in Firefox. 

