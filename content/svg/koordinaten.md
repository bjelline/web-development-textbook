---
title: Koordinaten und Transformationen
order: 30
---

Koordinaten in SVG werden als reelle Zahlen angegeben,
nicht als Ganzzahlen!  Es ist ein wirkliches Vektorformat.

Das ursprüngliche Koordinatensystem beginnt in der linken oberen Ecke,
die X-Achse zeigt nach rechts, die Y-Achse nach unten.  Mit dem `g` Tag
können Elemente gruppiert werden. Dabei kann man auch ein neues
lokales Koordinatensystem definieren.


<svg width="700" height="200">
  <defs>
      <marker id="pointy"
        viewBox="0 0 10 10" refX="0" refY="5" 
        markerUnits="strokeWidth" markerWidth="4" markerHeight="3"
        orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" />
      </marker>
  </defs>
  <g transform="translate(10,10)">
    <path d="M 0 0 L 200 0" stroke="black" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <path d="M 0 0 L 0 100" stroke="black" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <text x="215" y="5" font-family="Verdana" font-size="15" fill="black" >x</text>
    <text x="-5" y="125" font-family="Verdana" font-size="15" fill="black" >y</text>
  </g>
  <g transform="rotate(-5) translate(50,30)" stroke="blue" >
    <path d="M 0 0 L 100 0" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <path d="M 0 0 L 0 100" stroke-width="2" stroke-linecap="square" marker-end="url(#pointy)" />
    <text x="115" y="5" font-family="Verdana" font-size="15" fill="black" >x</text>
    <text x="-5" y="125" font-family="Verdana" font-size="15" fill="black" >y</text>
  </g>
</svg> 

<htmlcode caption="Gruppe mit lokalem Koordinatensystem">
  <g transform="rotate(-5) translate(50,30)" stroke="blue" >
    ...
  </g>
</htmlcode>

<div class="alert"><a class="close" data-dismiss="alert">×</a><strong>ToDo</strong> hier fehlt noch Text zu den verschiedenen Transformationen und der Transformations-Matrix.</div>


