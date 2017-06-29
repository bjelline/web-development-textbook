---
title: CSS Selektoren im Detail
order: 30
---

Im Kapitel [CSS Selektoren](/css/basic-selectors/) haben Sie CSS schon
einige Selektoren
kennengelernt. In der CSS 2.1 Spezifikation werden u.a. 
folgende Schreibweisen für Selektoren beschrieben:

|Name|Muster |Beschreibung|
|+---|+------|+-----------|
|Universal selector|*|Stimmt mit jedem Element überein.|
|Type selectors|E|Stimmt mit jedem E-Element überein|
|Grouping|E, F, G|Stimmt mit jedem E-, sowie jedem F-, sowie jedem G-Element überein. E, F und G könnten auch komplexere Selektoren sein!|
|Descendant selectors|E F|Stimmt mit jedem F-Element überein, das ein Nachfahre eines E-Elements ist, also z.B. `<E>bla <div> <F>hier</F> </div> </E>`.|
|Child selectors|E > F|Stimmt mit allen F-Elementen überein, die Kindelemente eines Elements E sind, also z.B. `<E>bla <span>bla</span> <F>hier</F> </E>` .|
|The link pseudo-classes|:link :visited|Stimmt mit Links überein, deren Ziel noch nicht besucht wurde (`:link`), oder deren Ziel bereits besucht wurde (`:visited`).|
|The dynamic pseudo-classes|:active :hover :focus|Stimmt während bestimmter Interaktionen überein: auswahl, Maus-Cursor,....|
|Adjacent selectors|E + F|Stimmt mit jedem F-Element überein, dem unmittelbar ein Element E vorausgeht, also `<E>dies</E> <F>das</F>`|
|Class selectors|E.warning|(Nur in HTML, nicht in XML) Stimmt mit jedem E-Element überein, dessen CLASS gleich „mwarning“ ist.|
|ID selectors|E#myid|Stimmt mit jedem E-Element überein, dessen ID gleich „myid“ ist.|
{: class="table table-condensed table-bordered" style="width:auto"}

Mit CSS3 kommen u.a. folgende Selektoren dazu:

|Name|Muster  / Beispiel|Beschreibung|
|+---|+------|+-----------|
|Attribute Selector: Begins with|E\[attr^="stringl"\] a\[href^="mailto:"\]|Stimmt mit jedem Element überein, bei dem der Wert des Attributs mit dem geforderten String beginnt.|
|The Target pseudo-class|:target|Stimmt mit dem Element überein, dessen ID mit dem Anker in der URL übereinstimmt. Z.B. bei URL http://at.at/index.html#kontakt stimmt  :target mit &lt;div id="kontakt"&gt; überein|
|The UI element states pseudo-classes|:enabled :disabled :checked|Diese Selektoren beziehen sich auf mögliche Zustände von Eingabefeldern – die werden aber erst im nächsten Kapitel erklärt. |
|Root pseudo-class|:root|Stimmt mit der Wurzel des DOM überein, immer <html>|
|:nth-child() pseudo-class |:first-child :nth-child(13) :nth-child(odd) :nth-child(even) :nth-child(3n+1) :last-child|Zählt die Geschwister des Elements, stimmt mit dem Element überein wenn die Zahl bestimmte Bedingungen erfüllt: erstes Kind, 13.Kind, ungerade Zahl, gerade Zahl, ….(auch Moduleo 3, 4, n)… letztes.|
|:nth-of-type() pseudo-class |img:nth-of-type(odd) { float: right; } img:nth-of-type(even) { float: left; } |Zählt die Elemente dieses Typs, die bis zu dieser Stelle in der DOM vorkamen, …. Im Beispiel also die geraden / ungeraden Bilder.|
Empty pseudo-class|:empty |Element ist ganz leer – enthält weder Kinder-Knoten noch Text.|
|Pseudo-Element|E::first-letter E::first-line p::first-letter |Achtung: mit diesem Pseudo-Element kann man etwas aus HTML herausholen, was nicht explizit drinnen ist: Obwohl im Abstz der erste Buchstabe nicht extra in einen Tag eingeschlossen ist kann man ihn mit p::first-letter auswählen.|
{: class="table table-condensed table-bordered" style="width:auto"}


Child Selector
---------

Wir kennen schon den Descendant Selector, der beliebige Nachfahren auswählt.
Der Child Selector ist auf direkte Kinder beschränkt.

<css>
  li > a { color: yellow; }
</css>


![Document Object Model und Selektor](/images/selector-child.png)

Pseudo Classes
---------

Wir haben im Zusammenhang mit Links schon die Pseudo Classes `:link` und
`:visited` kennengelernt, und im Zusammenhang mit Interaktion `:hover` und
`:focus`.

Es gibt noch eine Hand voll weiterer Pseudo Classes:

* `:first-child` selektiert ein Element nur, wenn es das erste Kind seiner Eltern-Node ist
* `:first-letter`  selektiert nur den ersten Buchstaben!  Das funktioniert auch,
  wenn der Buchstabe gar kein eigener Node im DOM ist!
* `:first-word`  selektiert das erste Wort.  Das funktioniert auch,
  wenn das Wort      gar keine eigenen Node in der DOM ist!
* `::selection` der aktuell ausgewählte Bereich, siehe [css-tricks](http://css-tricks.com/examples/DifferentSelectionColors/)
* `:nth-child(odd)` wählt jedes zweite Element aus - 1,3,5,...
* `:nth-child(even)` wählt jedes zweite Element aus - 2,4,6,...



<css>
  li:first-child { color: yellow; }
</css>


![Document Object Model und Selektor](/images/selector-firstchild.png)


Adjacent selector
---------

Dieser Selector wählt das direkte Geschwister-Node aus.

<css>
  p + h1 { color: yellow; }
  li + li { color: yellow; }
</css>


![Document Object Model und Selektor](/images/selector-adj.png)



Kombinationen von Selektoren
---------

Wenn man mehrere Selektoren kombiniert hat das Komma die geringste Präzedenz:

<css>
  p, div a { color: yellow; }
</css>


![Document Object Model und Selektor](/images/selector-precedence.png)


CSS Selektoren Üben
-------


* [flukeout - css üben mit japanischem essen](http://flukeout.github.io/)


