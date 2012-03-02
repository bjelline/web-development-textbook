---
title: CSS für Interaktion
order: 27
---

Mit dem Selektor `:hover` wird eine CSS-Regel nur angewandt wenn sich der Maus-Cursor über dem Element befindet. `:focus` hat eine ähnliche Bedeutung bei der Steuerung mit der Tastatur.

Achtung: auf Touch-Geräten wie Tables und Smartphones gibt es kein `:hover`! Deswegen sollte man `:hover` nur zur Dekoration, nicht aber für wichtige Funktionen verwenden!

<css>
  div       { background-color: #ddd; }
  div:hover { background-color: red; }
</css>

Mit Hilfe von Hintergrundbildern kann man so zum Beispiel einen kitschigen 3d-Button darstellen, der beim hovern „hineingedrückt“ wird. 

<css>
  div       { background-image: url(button-up.png);   }
  div:hover { background-image: url(button-down.png); }
</css>

Beim Laden des zweiten Hintergrundbildes kann es dabei zu einer Verzögerung kommen. Um das zu verhindern kann man die beiden Hintergrundbilder in einer Bilddatei speichern und nur den Bildausschnitt wechseln:

<css>
  div {
     height:115px;
     width:240px;
     background-image: url(pix/rolloverButton.gif);
     overflow:hidden;
  }

  div:hover {
     background-position: 0 -120px;
  }
</css>

Eine extreme Anwendung dieses Prinzips nennt man CSS-Sprites: dabei werden möglichst viele Bilder in einer Bild-Datei zusammengefaßt. Falls viele kleine Icons verwendet werden, kann das die Darstellung der Webseite erheblich beschleunigen. 

![Abbildung 42: CSS Sprites von Yahoo](/images/yahoo-spritemap.png)

So könnte der CSS Code aussehen:

<css>
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
</css>


