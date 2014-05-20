---
title: Objekte + Prototypen
order: 20
---

Javascript ist eine objektorientierte Sprache. Achtung, hier kommt es leicht zu einem Missverständniss: 
Objektorientierung hat nicht zwingend etwas mit Klassen zu tun, sondern eben mit Objekten.  Und während
z.B. in Java, C++, C#, PHP diese Objekte in Klassen organisiert sind, ist das in Javascript oder .. oder .. nicht der Fall.

Trotzdem gibt es in Javascript Mechanismen wie Vererbung und Komposition.

In diesem Kapitel lernen wir diese Mechanismen kennen.

## Objekt mit Objekten

In folgendem Beispiel hat der Konstruktor `Studiengang` drei Argumente. Als
drittes Argument wird ein Objekt übergeben:

<javascript caption="Objekt mit Objekt">
var hs = {
  name: "FH Salzburg",
  typ: "Fachhochschule",
  seit: 1996
};

function Studiengang(name, seit, hs) {
  this.name = name;
  this.seit = seit;
  this.hs = hs;
}

mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008, hs );
mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011, hs );
</javascript>

§

Da Objekte in Javascript immer Pointer sind, wird in diesem Beispiel also von
beiden Studiengangs-Objekten `mmtb` und `mmtb` auf das gleiche Objekt 
verwiesen:

![Abbildung: Objekt mit Objekt](/images/objekt-mit-objekt.png)

## Objekt und Konstruktor

Jedes Objekt enthält auch einen Verweis auf die Konstruktor-Funktion - falls
keine verwendet wurde auf die Funktion `Object()`.

<javascript caption="Fortsetzung: Konstruktor-Funktionen">
// folgende Ausdrücke sind true:
mmtb.constructor === Studiengang;
hs.constructor === Object;
</javascript>

![Abbildung: Objekt mit Konstruktor](/images/objekt-mit-objekt-und-constructor.png)

Dieser Konstruktor wird auch verwendet, um die Fragen `instanceof` zu beantworten:

<javascript caption="Fortsetzung: Operator instanceof">
mmtb instanceof Studiengang;
hs instanceof Object;
mmtb instanceof Object;
</javascript>

`mmtb` ist auch eine Instanz von `Object`! Es muss also eine Art Vererbungs-Hierarchie
geben, die wir noch nicht kennen, in der `Studiengang` als Kind von `Object` geführt wird.
Wie funktioniert das?  Die Antwort lautet:  mit dem Prototypen.


## Objekt und Konstruktor und Prototyp

Wie im vorigen Kapitel kurz erläutert ist jede Funktion in Javascript auch ein Objekt.
Man kann zur Funktion Attribute speichern.  Es gibt ein Attribut mit einer speziellen Bedeutung
bei einer Konstruktor-Funktion: das Attribut `prototype`: prototype verweist auf ein Objekt,
in dem weitere Methoden und Attribute für alle Objekte die mit diesem Konstruktor erzeugt wurden
gespeichert werden.

<javascript caption="Methoden und Attribute definieren mit dem Prototyp">
// Konstruktor
function Studiengang(name, seit, hs) {
  this.name = name;
  this.seit = seit;
  this.hs = hs;
}
// Zwei Attribute am prototyp des Konstruktors
Studiengang.prototype.min = 2;
Studiengang.prototype.max = 42;
// Eine Methode am prototyp des Konstruktors
Studiengang.prototype.toString = function () {
  return "Studiengang " + this.name + 
    " (seit " + this.seit + 
    " @ " + this.hs.name + ")";
}

mmtb = new Studiengang( "BSc MultiMediaTechnology", 2008, hs );
mmtm = new Studiengang( "MSc MultiMediaTechnology", 2011, hs );

mmtb.toString();  // findet toString Methode des 
            // Prototypen und ruft sie auf

mmtb.min    // findet min Attribut des Prototypen
            // gibt Wert 2 
mmtb.min=5  // speichert Wert 5 im Objekt selbst
mmtb.min    // gibt jetzt Wert 5
mmtm.min    // findet min Attribut des Prototypen, 
            // gibt Wert 2 
</javascript>

[Demo mit Visualisierung](/images/js-vererbung-vis.html)

Wird ein Attribut oder eine Methode an einem Objekt gesucht, und
kann direkt am Objekt nicht gefunden werden, dann durchsucht
der Javascript-Interpreter als nächstes den Prototypen des Konstruktors.

Attribute direkt im Objekt überschreiben die Attribute des Prototypen: im Beispiel
wird das Attribut `min` direkt im Objekt gefunden, hier ist kein Zugriff auf den Protypen nötig.


![Abbildung: Objekt mit Konstruktor](/images/objekt-mit-prototyp.png)

## Vererbung

Eine Konstruktur-Funktion kann von einem Objekt erben, und zwar über den Prototypen:

<javascript caption="Vererbung von Attributen">
  // ----- Pet ---------
  function Pet() {
    this.status = "sleeping";
  }
  Pet.prototype.log = function() {
    console.log("i am " + this.status.get() + 
      ". " + this.word + "!");
  }

  // ----- Mammal ---------
  function Mammal() {
    this.legs = 4;
  }
  Mammal.prototype = new Pet();
  Mammal.prototype.constructor = Mammal;

  // ----- Dog --------
  function Dog( b ) {
    this.breed = b;
    this.word = "wau! ";
  }
  Dog.prototype = new Mammal();
  Dog.prototype.constructor = Dog;

  Dog.prototype.sit = function() {
    this.status.set("sitting");
  }

  d = new Dog("beagle");
  d.word    // direkt im Objekt gespeichert
  d.legs    // im Prototyp von Dog gespeichert 
            // (einem Mammal-Objekt)
  d.status  // im Prototyp von mammal gespeichert 
            // (einem Pet-Objekt)
</javascript>

[Demo in der Console](/images/js-vererbung.html)

Diese Vererbungs-Kette über die Prototypen nenn man auf english "prototype chain". 

Achtung: die Konstruktoren der übergeordenten Objekte werden nur einmal aufgerufen,
das kann zu unerwarteten Effekten führen:

<javascript caption="Vererbung von Attributen">
  // ----- Pet ---------
  function Pet() {
    this.status = new Status();
  }
  // ....
  Mammal.prototype = new Pet();
  // ....
  d1 = new Dog("Beagle");
  d2 = new Dog("Schnauzer");
  
  d1.status === d2.status // es gibt nur ein Status-Objekt 
                          // für alle Mammals!
  d1.hasOwnProperty('status'); // false

  d1.status = new Status('playing');

  d1.status === d2.status      // false
  d1.hasOwnProperty('status'); // true
</javascript>


## Das Wunder des dreibeinigen Hundes

Der Schnauzer hat einen schrecklichen Unfall, und verliert ein Bein:

<javascript caption="Vererbung von Attributen">
d1 = new Dog("Beagle");
d2 = new Dog("Schnauzer");
d2.legs = 3;

console.log(d1.legs); // 4 Beine von Mammal
console.log(d2.legs); // 3 Beine 

d1.hasOwnProperty('legs') // ... false
d2.hasOwnProperty('legs') // ... true
</javascript>

Doch nun geschieht ein Wunder: wenn wir mit `delete` das
Attribut `legs` aus `d2` entfernen hat er wieder 4 Beine - weil
das im prototypen so gespeichert ist.

<javascript caption="Vererbung von Attributen">
delete(d2.legs);

console.log(d2.legs);     // 4 Beine 
d2.hasOwnProperty('legs') // ... false
</javascript>



## Verteifung

Dies war nur ein erster Einstieg in die objektorientierte Programmierung mit Javascript.
Details zu einigen wichtigen Befehlen in der Javascript-Referenz bei Mozilla:

* [instanceof](https://developer.mozilla.org/en/JavaScript/Reference/Operators/instanceof)
