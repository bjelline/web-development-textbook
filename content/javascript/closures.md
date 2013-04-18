---
title: Funktionen und Closures
order: 15
---

Javascript baut nicht nur auf die Traditionen der
objektorientierten Programmierung auf, sondern auch
auf die der Funktionalen Programmierung[&rarr;](http://de.wikipedia.org/wiki/Funktionale_Programmierung).

In diesem Kapitel lernen wir die Besonderheiten
von Funktionen in Javascript kennen, darunter
auch Closures [&rarr;](http://de.wikipedia.org/wiki/Closure).

## Funktionen und Sichtbarkeit von Variablen

In einer Funktion in Javascript sind lokale und globale
Variablen sichtbar.  Da Funktionen auch innerhalb von
Funktionen definiert werden können sind in folgendem Code
die Variablen a, b und c in der innern Funktion f sichtbar

<javascript caption="Sichtbarkeit von a, b, c in Funktionen">
  var a = 1;
  function g( x ) {
    var b = 2;
    var s = "Ein String aus g ... ";
    function f( y ) {
      var c = 3;
      return "die Werte sind " + [a,b,c,x,y].join(", ");
    }
    return s + f( x );
  }

  g(10);
  // rückgabewert: "Ein String aus g ... die Werte sind 1, 2, 3, 10, 10"
  console.log(a);  // 1
  console.log(b);  // ReferenceError: b is not defined
  console.log(c);  // ReferenceError: c is not defined
  console.log(x);  // ReferenceError: x is not defined
  console.log(y);  // ReferenceError: y is not defined
</javascript>

§

Eine Besonderheit von Javascript ist das "Hochziehen" (hoisting): Alle
Variablen-Deklarationen mit `var` werden an den Anfang der jeweiligen Funktion 
vor-verlegt.  Folgender Code ist also gleichbedeutent:

<javascript caption="Sichtbarkeit von a, b, c in Funktionen">
  function g( x ) {
    var s = "Ein String aus g ... ";
    function f( y ) {
      var c = 3;
      return "die Werte sind " + [a,b,c,x,y].join(", ");
    }
    var b = 2; // var b wird hochgezogen zum Beginn von g()
               // die Initialisierung b = 2 bleibt hier!
    return s + f( x );
  }

  g(10);
  // rückgabewert: "Ein String aus g ... die Werte sind 1, 2, 3, 10, 10"
</javascript>


## Funktionen und Lebenszeit von Variablen

Nach dem Aufruf einer Funktion verschwinden ihre lokalen Variablen,
bei einem neuen Aufruf sind die vorhergehenden Werte nicht mehr vorhanden:

<javascript caption="Lebenszeit einer Variable in einer Funktionen">
  function g( x ) {
    var b;
    console.log("beim Einstieg in g ist b = " + b );
    b = x;
    console.log("beim Ausstieg aus g ist b = " + b );
  }
  g(10);
  g(20);

  // output:
  // beim Einstieg in g ist b = undefined
  // beim Ausstieg aus g ist b = 10
  // beim Einstieg in g ist b = undefined
  // beim Ausstieg aus g ist b = 20
</javascript>

§

Die Lebenszeit einer Variable kann aber verlängert werden, wenn sie in einer
inneren Funktion verwendet wird. Das nennt man eine Closure (deutsch: "Funktionsabschluss").

<javascript caption="Closure verlängert die Lebenszeit einer Variable in einer Funktionen">
  function g( x ) {
    var b = x;
    return function() {
      console.log("ich bin eine Funktion und verwende b = " + b );
    }
  }
  f = g(10);
  f();
  // output: ich bin eine Funktion und verwende b = 10
  h = g(20);
  h();
  // output: ich bin eine Funktion und verwende b = 20
  f();
  // output: ich bin eine Funktion und verwende b = 10
</javascript>

Die Funktion f hat also immer noch zugriff auf die "alte" Variable b!

§

Closure kann man zum Beispiel verwenden um einen Countdown zu erzeugen:

<javascript caption="Erzeuge eine Countdown-Funktion">
  function create_countdown( max ) {
    var i = max+1;
    return function() {
      i--;
      return i;
    }
  } 
  top10 = create_countdown(10);
  while( i = top10() ) {
    console.log("und auf Platz " + i + " .... ");
  }
</javascript>


