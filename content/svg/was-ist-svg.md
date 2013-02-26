---
title: Was ist SVG
order: 10
---

<svg width="200" height="200" style="float:left;">
    <circle cx="100" cy="100" r="80"                 stroke="black" stroke-width="2" fill="#4e9a06" />
    <rect    x="80"   y="100" width="90" height="90" stroke="black" stroke-width="2" fill="#204a87" />
</svg>

Scalable Vector Graphics (SVG, engl. „skalierbare Vektorgrafik“) ist die vom 
World Wide Web Consortium (W3C) empfohlene Spezifikation zur Beschreibung 
zweidimensionaler Vektorgrafiken. SVG ist ein Beispiel für XML. 

SVG wurde erstmals im September 2001 veröffentlicht, die aktuelle Version
ist [Version 1.2](http://www.w3.org/TR/SVG11/), die seit Dezember 2008 vom W3C empfohlen wird, aktuell.

SVG hat eine lange und wechselvolle Geschichte hinter sich: es wurde bereits im Jahr 2001 veröffentlicht.
Für die Darstellung im Browser war aber damals die Installation eines Plugins notwendig. 
Aber erst seit 2005 (Firefox, Opera), 2006 (Webkit) bzw. 2011 (Internet Explorer) wird SVG
im Browser nativ dargestellt.

<htmlcode caption="Einbindung von SVG in HTML (Inline-SVG)">
  <svg width="200" height="200" style="float:left;">
    <circle cx="100" cy="100" r="80"                 stroke="black" stroke-width="2" fill="#4e9a06" />
    <rect    x="80"   y="100" width="90" height="90" stroke="black" stroke-width="2" fill="#204a87" />
  </svg>
</htmlcode>

Mit SVG kann man zweidimensional zeichnen, die grafischen Objekte werden
- wie bei HTML - in einem DOM gespeichert und können Manipuliert werden. Zur
Darstellung im Browser werden sie mit dem [Painters Algorithm](http://de.wikipedia.org/wiki/Painter%27s_Algorithmus) gezeichnet:
"spätere" Objekte übermalen "frühere" Objekte. Deswegen überdeckt das blaue Rechteck
im Beispiel den grünen Kreis.

Inline SVG wird heute von den aktuellen Browsersn unterstütz, siehe
[can i use](http://caniuse.com/#feat=svg-html5)
