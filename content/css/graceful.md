---
title: Graceful Degradation
order: 30
---
Der englische Begriff ‚graceful degradation’ könnte man als „allmähliche Funktionsminderung“ übersetzen, er bedeutet ungefähr: „funktioniert auch ohne … gut.“

Das dahinter stehende Prinzip lautet: für die verschiedenen Ausgabemedien sollen nicht verschiedene Versionen einer Webseite erstellt werden, sondern alle Ausgabemedien werden mit einem Dokument bedient. 

Wenn der Browser Javascript, Flash, CSS unterstützt, dann soll die Website besonders schön, interaktiv, praktisch sein. Wenn der Browser etwas nicht unterstützt, dann soll die Website immer noch lesbar und benutzbar bleiben. 

 Schlechtes Beispiel: Bild als Überschrift

Als Überschrift einer Seite soll nicht blos ein Text sondern eine komplexe Grafik angezeigt werden:

    <img src="mmtlogo-400.png">

Das sieht zwar wie eine Überschrift aus – wenn das Bild geladen wird – die Information ist aber für eine Suchmaschine oder ein Braille-Ausgabegerät nicht lesbar. 

Besser wäre:

    <h1><img src="mmtlogo-400.png" alt="MultiMediaTechnology"></h1>

In manchen Situation hat man aber nur folgenden Code im HTML, und will das Bild nur über CSS darstellen:

    <h1>MultiMediaTechnology</h1>

Ein Beispiel für so eine Situation ist z.B: ein Wordpress Theme. In der H1 wird er Titel des Blogs angezeit, die Gestaltung der Darstellung erfolgt nur mit CSS.

 Gutes Beispiel: Image Replacement

Der Text wird normal im HTML-Code eingegeben. Es wird aber auch ein Bild in der richtigen Schriftart erstellt.  Bei CSS-fähigen Browsern wird der Text versteckt und das Bild angezeigt. Browser ohne CSS und Suchmaschinen verwenden einfach den Text:

    <style>
    h1#bildStattText {

       /* schiebt den "echten text" extrem weit nach links */
       text-indent:-10000px;
       overflow:hidden;
       background: url(mmtlogo-400.png);
       /* hoehe und breite der grafik angeben! */
       height:140px;
       width:400px;
    }
    </style>

    <h1 id="bildStattText">MultiMediaTechnology</h1>

Das Bild kann ausgetauscht werden indem man das Stylesheet ändert, ohne Eingriff in den HTML-Code.

Schlechtes Beispiel: Navigationsmenü mit Bildern

Ein Navigationsmenü wird mit Tabellen und Bildern aufgebaut:

    <table cellspacing="1">
       <tr>
          <td><a href="home.html"><img src="1.gif" /></a></td>
          <td><a href="news.html"><img src="2.gif" /></a></td>
          <td><a href="portfotdo.html"><img src="3.gif" /></a></td>
          <td><a href="contact.html"><img src="4.gif" /></a></td>
       </tr>
    </table>

Wieder gilt: die Information ist für eine Suchmaschine oder ein Braille Ausgabegerät nicht lesbar. Für diese „Kunden“ wären Links mit normalen Texten besser. 

     <ul>
        <li><a href="home.html">home</a></li>
        <li><a href="news.html">news</a></li>
        <li><a href="portfolio.html">portfolio</a></li>
        <li><a href="contact.html">contact</a></li>
     </ul>

Im nächsten Kapitel lernen Sie eine Methode kennen wie Sie aus dieser Liste ein horizontales Menü machen. 

