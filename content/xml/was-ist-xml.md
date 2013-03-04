---
title: Was ist XML
order: 10
---

## Geschichte der Auszeichnungssprachen

Tim Berners-Lee hat HTML nicht "aus dem Nichts" erfunden. Er basierte
die Sprache auf SGML (Standard Generalized Markup Language). 

SGML ist eine Metasprache, mit deren Hilfe man verschiedene Auszeichnungssprachen 
(englisch: Markup Languages) definieren kann. SGML war damals (1990) bereits ein ISO-Standard.

Um ein gültiges  Dokument (engl. valid document) in SGML zu beschreiben, wird die Dokumenttypdefinition verwendet (DTD), 
die den strukturellen Aufbau von Dokumenten beschreibt.  In frühen Versionen von HTML, wie z.B. HTML 3.2,
wurde diese DTD auch wirklich in der [HTML Spezifikation](http://www.w3.org/TR/REC-html32-19970114#dtd) angegeben.

Im Jahr 1998 veröffentlichte das World Wide Web Consortium [XML](http://www.w3.org/TR/xml/), eine neue
Meta-Sprache, als Teilmenge von SGML.  Sprachen auf Basis von XML sind
zum Beispiel RSS, SVG, oder XHTML.

![SGML, HTML, XML und XHTML - eine Sprach-Familie](/images/SGML.svg)

Mit HTML5 hat sich HTML von diesem Stammbaum emanzipiert: HTML5 ist
nicht mehr eine Sprache, sondern zuerst das DOM als "in memory representation" im Browesr,
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

<br clear="left">

## RSS

RSS ist ein Format um die Daten eines Blogs maschienenlesbar anzubieten.
Wo bietet z.B. der Wordpress Blog `http://multimediatechnology.at/` 
unter der URL `http://multimediatechnology.at/feed/` die gleichen Inhalte
wie die Homepage des Blogs im RSS Format an.

TODO: RSS Code

    <rss example here>

RSS ist ein Beispiel für XML.


## MathML

MathML ist eine Markup Language zur Darstellung von Mathematischen Formeln.
Es wird von ... Browsern unterstütz.


<math xmlns="http://www.w3.org/1998/Math/MathML" style="float:left;">
    <mrow>
      <mrow>
        <msubsup>
          <mo maxsize="1">∫</mo>
          <mrow>
            <mi _moz-math-font-style="italic">x</mi>
            <mo>=</mo>
            <mi _moz-math-font-style="italic">a</mi>
          </mrow>
          <mrow>
            <mi _moz-math-font-style="italic">x</mi>
            <mo>=</mo>
            <mi _moz-math-font-style="italic">b</mi>
          </mrow>
        </msubsup>
        <mrow>
          <mi _moz-math-font-style="italic">f</mi>
          <mo stretchy="false">(</mo>
          <mi _moz-math-font-style="italic">x</mi>
          <mo stretchy="false">)</mo>
          <mi _moz-math-font-style="italic">d</mi>
          <mi _moz-math-font-style="italic">x</mi>
        </mrow>
      </mrow>
    </mrow>
</math>


<br clear="left">
