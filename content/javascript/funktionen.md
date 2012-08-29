---
title: Funktionen und this
order: 10
---


## Funktionen definieren und aufrufen 

Sie kennen schon mehrere Arten eine Funktion in Javascript zu definieren:

<javascript caption="Funktionen definieren">
  function r1( s, x ) {
    var result = "";
    while( x ) {
      result += s;
      x--;
    }
    return result;
  }

  r2 = function ( s, x ) {
    var result = "";
    while( x ) {
      result += s;
      x--;
    }
    return result;
  }
</javascript>

§

Wir haben auch schon die JSON-Schreibweise von Arrays und Objekten kennen gelernt.
Kombiniert mit der zweiten Schreibweise für Funktionen können wir so Funktionen als
Teile von Objekten oder Arrays definieren:

<javascript caption="Funktionen in JSON">
  var objekt = {
    prop1 : "string",
    prop2 : 42,
    method1 : function () {  console.log( "method 1" ) }
  }
</javascript>

§

Es gibt auch mehrere Arten eine (schon definierte) Funktion aufzurufen: neben
der klassischen Version mit den runden Klammern gibt es noch die beiden Methoden
`call` und `apply`:

<javascript caption="Funktion aufrufen">
  repeat("hallo ", 10);
  repeat.call(null, "hallo ", 10);
  repeat.apply(null, [  "hallo ", 10 ]  );
</javascript>

## Eine Funktion ist ein Objekt

Jede Funktion in Javascript ist auch ein Objekt. Sie kann Attribute haben,
die man mit der ganz normalen Schreibweise setzten kann:

<javascript caption="Funktion mit einem Attribut">
  function repeat( s, x ) {
    var result = "";
    while( x ) {
      result += s;
      if( repeat.sep && x > 1 ) result += repeat.sep;
      x--;
    }
    console.log(result);
    return result;
  } 

  repeat("x", 3);
  // rückgabewert ist "xxx";

  repeat.sep = ", ";
  repeat("x", 3);
  // rückgabewert ist "x, x, x";
</javascript>


## Was ist this?

Die Variable `this` hat eine besondere Bedeutung in Javascript Funktionen.
Wird eine Funktion ganz normal im Browser aufgerufen, dann verweist `this` auf das `window` Objekt:

<javascript caption="this in einer normalen Funktion">
  function f() {
    console.log("this = " + this);
  }

  f();

  // output auf der Console:
  // this = [object Window]
</javascript>

§

Wird eine Funktion als Methode eines Objekts aufgerufen, dann verweist `this` auf das Objekt:

<javascript caption="this in einer Methode">
  var objekt = {
    prop1 : "string",
    prop2 : 42,
    f : function () {  
      console.log( "this = " + this ) 
      console.log( "this.prop2 = " + this.prop2 ) 
    }
  }

  objekt.f();

  // output auf der Console:
  // this = [object Object]
  // this.prop2 = 42
</javascript>

§

Eigentlich ist der erste Fall ein Spezialfall dieses zweiten Falles: wird eine Funktion ohne Objekt aufgerufen `f()`,
dann nimmt Javascript ein implizites Objekt an:

<javascript caption="this in einer normalen Funktion (explizite schreibweise)">
  window.f = function() {
    console.log("this = " + this);
  }

  window.f();

  // output auf der Console:
  // this = [object Window]
</javascript>

§

Nun macht auch das erste Argument der Funktionen `call` und `apply` Sinn: das erste
Argument gibt das Objekt an, auf dem die Methode aufgerufen werden soll: 

<javascript caption="Verschiedene Arten eine Methode aufzurufen">
  objekt.f("hallo ", 10);
  objekt.f.call(objekt, "hallo ", 10);
  objekt.f.apply(objekt, [  "hallo ", 10 ]  );
</javascript>

§

Bei Event-Handlern wird `this` anders gesetzt:

<javascript caption="this im Event Handler">
  document.getElementById("the_button").addEventListener("click", f);

  // bei klick auf den Button
  // output in der Console:
  // this = [object HTMLInputElement]
</javascript>

Der Event Handler wird also als Methode auf dem jeweils betroffenen
HTML-Element aufgerufen. `this` zeigt in diesem Fall also auf den Button.

§

Die Funktion erhält aber noch mehr Informationen zum Event,
und zwar als Argument:

<javascript caption="this und event im Event Handler">
  function f( ev ) {
    console.log("this = " + this);
    console.log("ev = " + ev);
  }
 
  document.getElementById("the_button").addEventListener("click", f);

  // bei klick auf den Button
  // output in der Console:
  // this = [object HTMLInputElement]
  // ev = [object MouseEvent]
</javascript>

§

Das Event-Objekt beinhaltet Informationen wie z.B. die Koordinaten
an denen geklickt wurde, ob dazu noch Shift, Alt und/oder Ctrl gedrückt wurden,
und noch einmal einen Verweis auf den Button.  Hier ein Screenshot aus Chrome der 
die Eigenschaften des MouseEvents zeigt:

![Abbildung: Details des MouseEvents, angezeigt in der Console von Chrome](/images/chrome-mouse-event.png)

§

Es gibt noch eine besondere Art eine Funktion in Javascript aufzurufen: mit `new`.
Damit wird die Funktion als Konstruktor für ein Objekt verwendet. Es ist üblich
Konstruktur-Funktionen mit großen Anfangsbuchstaben zu benennen. 

<javascript caption="Objekte mit einer Konstruktor-Funktion">
  function Studiengang(name, seit) {
    this.name = name;
    this.seit = seit;
  }

  mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008 );
  mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011 );
</javascript>

Innerhalb der Konstruktur-Funktion `Studiengang` ist bereits
ein neues Objekt vorhanden, und über `this` zugänglich. Dieses
Objekt ist auch automatisch Rückgabewert der Funktion.

