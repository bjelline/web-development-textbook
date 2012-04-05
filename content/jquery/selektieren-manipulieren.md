---
title: Selektieren und Manipulieren mit jQuery
order: 30
---
jQuery verwendet die Schreibweise der CSS-Selektoren um Nodes des DOM auszuwählen:

<javascript>
  $("a")        /* alle A-Tags ... als jQuery objekte */
  $("h1")       /* alle Überschriften h1 ... als jQuery objekte */
  $("p.extra")  /* alle p-tags mit klasse extra ... als jQuery objekte  */
</javascript>
    
jQuery definiert noch ein paar zusätzliche Selektoren, die es in CSS (noch) nicht gibt:

<javascript>
  $("tr:even")                 /* Alle geraden Zeilen der Tabelle */
  $("p:contains('Warnung')")   /* Absätze die die Zeichenkette Warnung enthalten */
  $(":checkbox")               /* Alle input-Tags vom typ checkbox */
</javascript>

Die Selektion allein verändert die Webseite noch nicht. Dafür bietet jQuery eine Reihe von Manipulations-Funktionen an. Diese können direkt an die Selektions-Funktion geschreiben werden: die Selektions-Funktion gibt ein Objekt mit entsprechenden Methoden zurück:

<javascript>
  $("a").addClass("wichtig"); /* alle A-Tags erhalten die Klasse wichtig */
  $("h1").append(":");        /* in Überschriften h1 wird ein Doppelpunkt angefügt */
  $("h1").prepend("Titel:");  /*  --||-- wird vorne ‚titel:’ eingefügt */
  $("p.extra").hide();        /* alle p-tags mit klasse extra werden versteckt */
</javascript>

Hinweis: hier versteckt sich eine Schleife: der Selektor liefert ein ganzes Array von Objekten, die Manipulations-Funktion wird für jedes Objekt aufgerufen.

