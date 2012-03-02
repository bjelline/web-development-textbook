---
title: CSS für Layout
order: 20
---

### Text

Die Darstellung einer HTML-Seite durch den Browser erfolgt von oben nach unten, je nach Sprache von links nach rechts oder von rechts nach links. Dabei wird zwischen blockbildenden Tags und nicht-blockbildenden Tags unterschieden. In Abbildung 33 wurden &lt;p&gt; und &lt;em&gt;-Tags verwendet und mit folgendem Stylesheet formatiert:

    p { background-color:#CCCCCC; }
    em { background-color:#FFFF66; }

Bei der Darstellung im Browser kann der nicht-blockbildender Tag em dabei auf mehrere Zeilen verteilt werden und nimmt dann mehrere rechteckige Bereiche ein, der blockbildende Tag p wird immer als ein Rechteck dargestellt:

![Abbildung 33: Darstellung von blockbildenden und nicht-blockbildenden Tags](/images/image128.png)

Ein Bild wird dabei wie ein Wort im Text behandelt, und nicht etwa frei auf der Webseite positioniert.  Wenn Sie das Bild wie in Abbildung 34 mitten in einen Absatz hinein setzen, ergibt das meist ein sehr hässliches Layout. 

![Abbildung 34: Bild mitten im Absatz](/images/image130.png)

Lange konnten Browser keine Wörter trennen und umbrechen, ein langes „Wort“ konnte dadurch die Breite eines Elemets überschreiten. In Abbildung 35 können Sie sehen, wie Microsoft Internet Explorer 7.0 eine lange URL nicht umbricht. 

![Abbildung 35: Darstellung eines Absatzes mit Rahmen und fixer Breite, der lange Wörter enthält, in MSIE 7.0](/images/image132.png)

CSS bietet ab Version 3 verschiedene Möglichkeiten diese Fälle zu behandeln, z.b mit der Eigenschaft `text-overflow` [&rarr;](http://css3clickchart.com/#text-overflow)

Derzeit ist es immer noch notwendig im Text die Soll-Bruchstellen als `&amp;shy;` einzutragen, damit der Browser dann den Zeilenumbruch korrekt durchführen kann. Die Library [hyphenator.js](https://code.google.com/p/hyphenator/) bietet den Umbruch u.a. für englische und deutsche Texte an.

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

Ein Element mit der Eigenschaft `position: absolute` oder `position: relative` bildet für seine untergeordneten Elemente ein neues Koordinationsystem. In folgendem Code definiert das main-div ein neues Koordinatensystem, das navi-div ist also in der linken oberen Ecke des main-div und nicht in der linken oberen Ecke des Browser-Fensters positioniert. 

<htmlcode>
    <div id="main">
        <div id="content">
            <h1>Inhalt</h1>
            <p>Hier ist der Inhalt[. . . ]</p>
        </div>
        <div id="navi">
        [. . . ]
        </div>
    </div>
</htmlcode>


<css>
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
</css>
