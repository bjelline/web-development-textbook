---
title: Stil + Tipps
order: 50
---

Dieses Kapitel richtet sich speziell an Personen mit wenig Programmier-Erfahrung.
Viele hier erwähnten Punkte sind nicht spezifisch für Javascascript.

## Menschenfreundliche Programmierung

Aus Sicht des Javascript Interpreters gibt es viele, viele Arten dasselbe
Programm zu schreiben - der Javascript-Interpreter wird es immer gleich verstehen.
Aus Sicht eines Menschen, der das Programm liest, sind manche Versionen leichter
verständlich und manche weniger leicht.

Besonders deutlich wird das beim Vergleich der folgenden beiden Programme:

<javascript caption="Countdown mit Closures - menschenfreundliche Version">
 function create_countdown( max ) {
    var i = max+1;
    return function() {
      i--;
      return i;
    }
  } 
  var top10 = create_countdown(10);
  var i;
  while( i = top10() ) {
    console.log("und auf Platz " + i + " .... ");
  }
</javascript>

<javascript caption="Countdown mit Closures - andere Version">
  function create_countdown(b){var a=b+1;return function(){a--;return a}}
  for(var top10=create_countdown(10),i;i=top10();)console.log("und auf Platz "+i+" .... ");
</javascript>

## Refactoring

Manchmal schafft man es, auf Anhieb ein schönes, lesbares, funktionierendes Programm zu schreiben.
Aber das ist eher der Ausnahmefall.

Ein Programm wieder und wieder zu verändert, bis es endlich funktionert, nennt man **Debugging**.
Oft ist hier Schluss - das Programm funktioniert ja schliesslich! Aber auch wenn die Funktionalität
fertig gestellt ist kann man das Programm weiter bessern: besser lesbar, besser veränderbar, besser wartbar.

Eine Veränderung am Programm, die die Funktionalität unverändert lässt, und andere Aspekte
des Programmes verbessert, nennt man **Refactoring**. Dabei geht man in kleinen Schritten vor:
zum Beispiel in einem Schritt einen Variablennamen verändern, im nächsten Schritt Code in
eine Funktion zusammen fassen, im nächsten Schritt einen Funktionsnamen ändern, ... nach jedem
einzelnen Schritt ist das Programm wieder funktionstüchtig.

Wenn man ein Versionskontrollsystem verwendet kann man nach jedem Schritt ein commit mit einer
passenden log-message machen.


## Variablen

Der Name einer Variable soll Auskunft über ihre Bedeutung, ihre Rolle im Programm geben. 

Aus der Mathematik wurde Konventionen übernommen, z.B. dass i,j,k als Zähler für Schleifen
verwendet werden; x,y,z für Koordinaten. Diese Konvention muss man nicht einhalten,
aber man sollte nicht gegen sie arbeiten:

<javascript caption="Kurze Variablennamen und Konventionen aus der Mathematik">
// gegen die Konvention          //     // mit der Konvention
var x=0;                         //     var i=0;
var i,k;                         //     var x,y;
while( x < 10 ) {                //     while( i < 10 ) {
  i = rand(0,100);               //       x = rand(0,100);
  k = rand(0,200);               //       y = rand(0,200);
  drawStarAt( i,k );             //       drawStarAt( x,y );
  x++;                           //       i++;
}                                //     }
</javascript>


## Fixe Werte durch Variablen ersetzen.

Nebenbemerkung: In Javascript gibt es keine Konstanten im Sinne von C/C++/Java: Der Wert jeder Variable kann
im Lauf des Programms verändert werden.  

<div class="alert"><strong>ToDo</strong> mehr Beispiele</div>

## Quellen

Dieses Kapitel beschreibt u.a. einen Teil der Coding Conventions von Douglas Crockford.

* [Code Conventions for the JavaScript Programming Language](https://developer.mozilla.org/en/JavaScript/Reference/Operators/instanceof)
* [Crockford, Douglas(2008): Javascript, the good parts. O'Reilly.](http://www.amazon.de/JavaScript-Parts-Working-Shallow-Grain/dp/0596517742/)
* [Crockford, Douglas(2008): Das Beste an JavaScript. O'Reilly.](http://www.amazon.de/Das-Beste-JavaScript-Douglas-Crockford/dp/3897218763/)

Das Beispiel für nicht-lesbaren Code wurde mit dem Google Closure Compiler erzeugt.
(achtung: "Closure" ist hier ein Eigenname - ein sehr verwirrender Eigenname. Stellen
Sie sich vor man würde ein Auto nach einem Bauteil benennen, z.B. 'Opel Kurbelwell', 'VW Fensterheber', 'Fiat Zündkerze'.)

* [Google Closure Compiler](http://closure-compiler.appspot.com/home)
