---
title: Was ist SVG
order: 10
---

## Geschichte der Auszeichnungssprachen

Tim Berners-Lee hat HTML nicht "aus dem Nichts" erfunden. Er basierte
die Sprache auf SGML (Standard Generalized Markup Language). 

SGML ist eine Metasprache, mit deren Hilfe man verschiedene Auszeichnungssprachen 
(englisch: Markup Languages) definieren kann. SGML ist ein ISO-Standard: ISO 8879:1986 Information Processing — Text and Office Systems — Standard Generalized Markup Language (SGML) und  ist in der Europäischen Norm EN 28879:1990 und der DIN EN 28879:1991 beschrieben.

Um ein gültiges (engl. valid) Dokument in SGML zu beschreiben, wird die Dokumenttypdefinition verwendet (DTD), 
die den strukturellen Aufbau von Dokumenten beschreibt.  In frühen Versionen von HTML, wie z.B. HTML 3.2,
wurde diese DTD auch wirklich in der [HTML Skezifikation](http://www.w3.org/TR/REC-html32-19970114#dtd) angegeben.

Im Jahr 1998 veröffentlichte das World Wide Web Consortium [XML](http://www.w3.org/TR/xml/), eine neue
Meta-Sprache, als Teilmenge von SGML.  Sprachen auf Basis von XML sind
zum Beispiel RSS, SVG, oder XHTML.

![SGML, HTML, XML und XHTML - eine Sprach-Familie](/images/SGML.png)

Mit HTML5 hat sich HTML von diesem Stammbaum emanzipiert: HTML5 ist
nicht mehr eine Sprache, sondern zuerst das DOM als "in momory representation" im Browesr,
und einige APIS für das DOM. Ausgehend davon werden zwei Darstellungsweisen
definiert: HTML und XML.  


## SVG

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

<htmlcode caption="Einbindung von SVG in HTML">
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


