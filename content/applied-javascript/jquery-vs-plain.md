---
title: jQuery und reines Javascript
order: 10
---

Im ersten Teil des Buches, in den Kapiteln [Formular und Javascript](/formulare/javascript/),
[Javascript DOM](/javascript-dom/) und [jQuery](/jQuery/) wurde Javascript und jQuery bereits vorgestellt.

Nun wollen wir dieselben Themen nocheinmal genauer betrachten.


## das jQuery Objekt

Alle Funktionen die wir hier disskutieren werden geben immer
ein jQuery Objekt zurück, dass eine Liste von Nodes anhalten
kann.  Manchmal ist diese Liste leer, manchmal enthält sie nur ein
Element, manchmal mehrere.  

Wenn man mit einem jQuery Objekt arbeitet muss man sich also
bewusst sein, arbeitet man immer in der Mehrzahl, nie in der Einzahl.

Um die jQuery Objekte besser von anderen Javascript Variablen 
unterscheiden zu können werden wir ihre Variablennamen immer mit
einem Dollar beginnen.

<javascript caption="von jQuery zu DOM und umgekehrt: Eine Node">
// von jQuery nach Javascript

// Eine Node mit ID auswählen 
$q = $("#idname");

// DOM-Node extrahieren:
node = $q.get(0);
node = $q[0];
§
// von Javascript zu jQuery

// Eine Node nach ID auswählen 
node = document.getElementById("id");

// jQuery Objekt konstruieren
$q = $(node);

</javascript>

§

Wenn mehrere Nodes gefunden werden muss das in jQuery nicht
besonders behandelt werden, in reinem Javascript schon:

<javascript caption="von jQuery zu DOM und umgekehrt: mehrere Nodes">
// Nodes mit CSS-Selektor auswählen
$q = $(".class");


// wie viele sind es?
if( $q.length > 1 ) {
  console.log("mehrere");
}

// extrahieren
var i=0, arr=Array();
while( i < $q.length ) {
  arr[i] = $q.get(i);
}
§
// Nodes mit CSS-Selektor auswählen
arr = document
        .querySelectorAll("class");

// wie viele sind es?
if( node_array.length > 1 ) {
  console.log("mehrere");
}

// in jQuery-Objekt
$q = $(node_array);



</javascript>

## Selektieren

Wie wählt man Nodes aus der DOM aus?

<javascript caption="DOM Selektieren">
// plain Javascript

// Eine Node nach ID auswählen
node = document.getElementById("id");

// Erste Node mit CSS-Selektor auswählen
node = document.querySelector("h2");


// Alle Nodes mit CSS-Selektor auswählen
arr = document.querySelectorAll("h2");
§
// jQuery 

// Eine Node nach ID auswählen 
$q = $("id");

// Erste Node mit CSS-Selektor auswählen
$q = $("h2:first");
$q = $("h2").first();

// Alle Nodes mit CSS-Selektor auswählen
$q = $("h2");
</javascript>


## Traversieren

Wie wandert man durch den DOM-Baum?

<javascript caption="DOM Traversieren">
// plain Javascript

// hinauf zur Eltern-Node
p = node.parentNode;

// Kinder sind im Array children
var i = 0;
while( i < node.children.length ) {
  node.children[0];
}





§
// jQuery 

// hinauf zur Eltern-Node (Mehrzahl!)
$p = $q.parent();

// Kinder 
$c = $q.children();
$c = $q.children(':selected');

// Nachfahren
$n = $q.find();
$n = $q.find(':selected');

// Geschwister
$n = $q.next('p');
</javascript>

## Attribute

Wie liest man Attribute aus, wie setzt man sie?

<javascript caption="Attribute lesen und setzen">
// plain Javascript
// todo
§
// jQuery 
// todo
</javascript>


## Einfügen

Wie fügt man eine Node in die DOM ein?

<javascript caption="Node in die DOM einfügen">
// plain Javascript

// Text einfügen
t = document.createTextNode("Hello"); 
node.appendChild(t);

// Tag einfügen
l = document.createElement("a"); 
l.setAttribute('href', 'page.html');
l.appendChild(t);
node.appendChild(t);


// hack
node.innerHTML = 
  "<a href='page.html'>Hallo</a>";


§
// jQuery 

// Text einfügen
$n.append("Hallo");


// Tag einfügen
$l = $(
  "<a href='page.html'>Hallo</a>"
);
$n.append($l);


// oder
$l = $("<a>")
       .attr('href', 'page.html')
       .text('Hallo');
$n.append($l);
</javascript>

## Clonen

Wie kopiert oder verschiebt man eine vorhandene Node?

<javascript caption="Node clonen">
// plain Javascript
// todo
§
// jQuery 
// todo
</javascript>



## Event-Listener

Wie fügt man einen Event-Handler ein?

<javascript caption="Events">
// plain Javascript
node.addEventListener("click", f);
§
// jQuery 
$n.on("click", f);
</javascript>


