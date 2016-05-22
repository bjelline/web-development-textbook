---
title: Prototypen + Vererbung
order: 25
---


## Vererbung

Eine Konstruktur-Funktion kann von einem Objekt erben, und zwar über den Prototypen:

<javascript caption="Vererbung von Attributen">
  // ----- Pet ---------
  function Pet() {
    this.status = "sleeping";
  }
  Pet.prototype.log = function() {
    console.log("i am " + this.status + 
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
    this.word = "wau";
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

[Demo mit Visualisierung](/images/js-vererbung-vis.html)

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



## Vererbung in Klassen Schreibweise



<javascript caption="Vererbung von Attributen">
class Pet {
  constructor() {
    this.status = "sleeping";
  }
  log() {
    console.log("i am " + this.status + 
      ". " + this.word + "!");
  }
}

class Mammal extends Pet {
  constructor() {
    super();
    this.legs = 4;
  }
}

class Dog extends Mammal {
  constructor (b) {
    super();
    this.breed = b;
    this.word = "wau";
  }
  sit() {
    this.status = "sitting";
  }
}


d = new Dog("beagle");
d.word    // direkt im Objekt gespeichert
d.legs    // im Prototyp von Dog gespeichert 
          // (einem Mammal-Objekt)
d.status  // im Prototyp von mammal gespeichert 
          // (einem Pet-Objekt)
</javascript>


