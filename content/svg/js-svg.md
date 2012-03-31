---
title: Javascript und SVG
order: 40
---

Die SVG-Element sind (fast) ganz normale Nodes im DOM,
und können mit den üblichen Javascript-Befehlen erzeugt,
eingefügt und manipuliert werden.


Einen wichtiger Unterschied gibt es  beim Erzeugen einer Node:

<javascript>
  var svg = document.getElementById('display');
  circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", 10);
  circle.setAttribute("cy", 10);
  circle.setAttribute("r", 10);
  svg.appendChild( circle );  

  var container = document.getElementById('container');
  div = document.createElement("div");
  container.appendChild( div );
</javascript>


<div class="alert"><a class="close" data-dismiss="alert">×</a><strong>ToDo</strong> hier fehlt noch Text. u.a. zu Javascript und den transformas, als Beispiel wie man die anderen JS-APIS benutzt</div>
