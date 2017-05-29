---
title: Module
order: 45
---

Wie kann man Javascript-Code in größere Einheiten
organisieren?  Wo doch die Sprache keine Unterstütztung
für Namespaces oder Kapselung bietet?

Eine Lösung für diese Fragestellung ist der Modul-Pattern,
hier beschrieben nach [Stefanov(2010): Javascript Patterns](http://shop.oreilly.com/product/9780596806767.do), Kapitel 5.
Siehe auch [Osmani(2012): Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript).

## Viele Skripte, ein Namensraum

Häuft werden in einer Webseite Javascript-Programm aus
verschiedenen Quellen kombiniert.  Die Webseite
enthält z.B. 

* Javascript der Website selbst, zu Prüfung von Formulardaten und für Animationen
* für Zugriffs-Statistiken, z.B. [Google Analytics](http://support.google.com/googleanalytics/bin/answer.py?hl=en&answer=174090)
* für das Teilen von Inhalten auf Sozialen Netzwerkden, z.B. [Facebook-Like-Button](https://developers.connect.facebook.com/docs/reference/plugins/like/)
* für Feedback zu Webseite z.B. [UserVoice](http://uservoice.com)
* für Kommentare auf der Webseite, z.B.  [Disqus](http://docs.disqus.com/developers/universal/)
* für das Einbinden einer Landkarte, z.B. mit [Leaflet](http://leafletjs.com/) oder [Openlayers](http://openlayers.org/)

Mit ein bisschen Copy-und-Paste kann man die verschiedenen
Programme schnell in die eigene Webseite einbauen. All diese
Programme laufen dann im selben Javascript Interpreter ab,
und benutzen einen gemeinsamen globalen Namensraum.

## Namensraum imitieren

Um einen Namensraum zu imitieren kann man ein Objekt in Javascript verwenden.

Die linke Version erzeugt 5 globale Namen. Oder, um genauer zu sein: sie
erzeugt 3 Eigenschaften und 2 Methoden des `window`-Objekts. Würde ein
anderes Programm ebenfalls ein Funktion `f()` definieren, so würde
die spätere Definition erhalten bleiben.

In der rechten Version wird nur ein globaler Name angelegt: `APP`.
Alle weiteren Namen sind dann in diesem Objekt versteckt. Würde
ein anderes Programm in der Webseite auch eine Funktion `f()` definieren
dann wäre das kein Problem mehr.

<javascript caption="Ein globales Namensraum-Objekt statt vieler globalen Variablen">
// globale Variabeln 

var KONSTANTE = 3.141;
var variable = 3;
function Ding(){
  return this;
}
function f(x){
  return 2*x;
}

var objekt = new Ding();
__|__
// ein Namensraum-Objekt
var APP = {}
APP.KONSTANTE = 3.141;
APP.variable = 3;
APP.Ding = function() {
  return this;
}
APP.f = function(x) {
  return 2*x;
}

APP.objekt = new APP.Ding();
</javascript>

## Nachteile des Objekts als Namensraum

Wenn man modernes Javascript (z.B. ES6) oder ES5 mit "use strict" verwendet,
dann erhält man Fehlermeldungen beim Zugriff auf nicht deklarierte Variablen.

Das Objekt als Namensraum kann das nicht bieten: ein nicht existierendes Attribut des Objekt
liefert einfach den Wert `undefined`, aber keinen Fehler:

![Kein Error im namensraum](/images/js-namensraum.png)


## Namensräume anlegen

Namensräume können auch verschachtelt werden:

<javascript caption="Verschachtelte Namensräume">
var GAME =  GAME || {};
GAME.Player = ...
GAME.Master = ...
</javascript>

§

Die erste Zeile enthält eine Vorsichtsmaßnahme: Falls
`GAME` schon definiert wäre, dann wird die alten Definition
nicht überschrieben.  Dabei macht man sich die
[Kurzschulssauswertung](http://de.wikipedia.org/wiki/Kurzschlussauswertung)
des Oder-Operators zu nutze.

Folgender Code zeigt eine alternative Schreibweise
für diese Zuweisung:

<javascript caption="Schreibweisen für Default-Wert">
var GAME = GAME || {};





__|__
var GAME;
if( GAME ) {
  // GAME = GAME;
} else {
  GAME = {};
}
</javascript>


## Sofort ausgewertete Funktionen

Eine andere Methode um den globalen Namensraum sauber zu halten
sind die sogenannten "sofort augewerteten Funktionen" ("immediately invoked funktion" oder "immediate function").

Dabei wird eine Funktion definiert und sofort - und nur einmal - aufgerufen.
Nur der Rückgabewert wird ein einer globalen Variable `g` gespeichert.

Beachten sie dabei die Klammern rund um die Funktions-Definition:

<javascript caption="Schreibweise für sofort ausgewertete Funktionen">
var g = (function(){
  return 42;
})();
</javascript>

§

Hier eine komplexere Version. Die vielen Variablen und Funktionen die innerhalb
der sofort ausgewertete Funktion definiert sind, bleiben unsichtbar. Sie
sind "von aussen" nicht zugänglich.

<javascript caption="sofort ausgwertete Funktion">
var g = (function(){
  var a,b,c;
  function d(x) {
    return 2*x;
  }
  function Ding(v) {
    this.value = v;
  }

  a = 10;
  b = d( a );
  c = new Ding(b);

  return a;
})();
</javascript>


## Module

Namensräume und sofort augewertete Funktionen werden verwendet um
sogenannte Module zu bauen. Das Modul bündelt alle Namen unter
einem Namensraum und bietet die Möglichkeit von privaten und
öffentlichen Eigenschaften und Funktionen.

In diesem Beispiel ist das Modul ein Objekt:


<javascript caption="Schreibweise für ein Modul: ein Objekt">
var APP = (function(){
  var a,b,f;      // private 
  var c,d,g;      // öffentlich
  f = function() {  
    // private Funktion
  };
  g = function() {  
    // öffentliche Funktion
  };
  return {
    c: c,
    d: d,  
    g: g
  };
})();
</javascript>


## Siehe Auch


* [Stefanov(2010): Javascript Patterns](http://shop.oreilly.com/product/9780596806767.do), Kapitel 5.
* [Osmani(2012): Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
* [Wikipedia: Immediately-invoked function](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
