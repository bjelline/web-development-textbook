---
title: CSS Selektoren im Detail
order: 30
---
Das Document Object Model (DOM) ist ein allgemeines Modell wie ein Dokument (HTML oder auch ein XML) als Baum (im mathematische Sinne) angesehen werden kann. Mit dieser Vorstellung ergeben sich neue Fachwörter:

Die Tags werden als Elemente bezeichnet. So ist in folgendem Beispiel das erste li-Element innerhalb des ol-Elements. Das li Element enthält wiederum ein a Element, und dieses einen Text „erster Link“. 

    <html>
    <body>
        <p>Navigation</p>
        <h1>Überschrift</h1>
        <div class="intro">
          <h2>Dies und Das</h2>
          <ol>
            <li><a href="#bla">erster Link</a></li>
            <li><a href="#bla">zweiter Link</a></li>
          </ol>
        </div> ...

Aus der Mathematik (Graphentheorie) ergeben sich die Fachwörter für dei Teile des Baums: Ein Elemente werden als Nodes oder Knoten bezeichnet. Für die Beziehungen zwischen Nodes werden die Begriffe Eltern, Kind, Nachkommen, Vorfahren verwedent: `h1` ist ein Kind von `body`, „Überschrift“ ist das erste Kind von `h1`. „Überschrift“ ist damit ein Nachkomme von `body`.

Damit haben wir das Vokabular um auch kompliziertere CSS-Selektoren zu verstehen.

In Kapitel 2.2.2 haben Sie CSS Selektoren für Klassen und IDs kennen gelernt. In der CSS 2.1 Spezifikation werden u.a. folgende Schreibweisen für Selektoren beschrieben8:

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
|Attribute Selector: Begins with|E[attr^="string"] a[href^="mailto:"]|Stimmt mit jedem Element überein, bei dem der Wert des Attributs mit dem geforderten String beginnt.|
|The Target pseudo-class|:target|Stimmt mit dem Element überein, dessen ID mit dem Anker in der URL übereinstimmt. Z.B. bei URL http://at.at/index.html#kontakt stimmt  :target mit &lt;div id="kontakt"&gt; überein|
|The UI element states pseudo-classes|:enabled :disabled :checked|Diese Selektoren beziehen sich auf mögliche Zustände von Eingabefeldern – die werden aber erst im nächsten Kapitel erklärt. |
|Root pseudo-class|:root|Stimmt mit der Wurzel des DOM überein, immer <html>|
|:nth-child() pseudo-class |:first-child :nth-child(13) :nth-child(odd) :nth-child(even) :nth-child(3n+1) :last-child|Zählt die Geschwister des Elements, stimmt mit dem Element überein wenn die Zahl bestimmte Bedingungen erfüllt: erstes Geschwister, 13., ungerade Zahl, gerade Zahl, ….(auch Moduleo 3, 4, n)… letztes.|
|:nth-of-type() pseudo-class |img:nth-of-type(odd) { float: right; } img:nth-of-type(even) { float: left; } |Zählt die Elemente dieses Typs, die bis zu dieser Stelle in der DOM vorkamen, …. Im Beispiel also die geraden / ungeraden Bilder.|
Empty pseudo-class|:empty |Element ist ganz leer – enthält weder Kinder-Knoten noch Text.|
|Pseudo-Element|E::first-letter E::first-line p::first-letter |Achtung: mit diesem Pseudo-Element kann man etwas aus HTML herausholen, was nicht explizit drinnen ist: Obwohl im Abstz der erste Buchstabe nicht extra in einen Tag eingeschlossen ist kann man ihn mit p::first-letter auswählen.|
{: class="table table-condensed table-bordered" style="width:auto"}

