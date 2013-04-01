---
title: DTD
order: 20
---

Eine Dokumenttypdefinition (DTD) wird für SGML und XML verwendet, um 
die Grammatik festzulegen.  Ein XML Dokument das einer DTD entspricht
heisst "gültig" (englisch: "valid").

Die DTD definiert den strukturellen Aufbau des Dokuments: welche Tags es gibt, wie diese verschachtelt werden können,
welche Attribute sie haben.  In frühen Versionen von HTML, wie z.B. HTML 3.2,
wurde diese DTD auch wirklich in der [HTML Spezifikation](http://www.w3.org/TR/REC-html32-19970114#dtd) angegeben.


## Beispiel

DTD haben wieder eine ganz eigene Schreibweise - hier ein
paar Beispiele für Regeln aus einer DTD:

<dtd caption="Beispiele">
<!ELEMENT html (head, body)>
<!ELEMENT hr EMPTY>
<!ELEMENT div (#PCDATA | p | ul | ol | dl | table | pre | hr |
          h1|h2|h3|h4|h5|h6 | blockquote | address | fieldset)*>
          <!ELEMENT dl (dt|dd)+>
<!ATTLIST img
   id     ID       #IMPLIED
   src    CDATA    #REQUIRED
   alt    CDATA    #REQUIRED
   ismap  (ismap)  #IMPLIED
>
</dtd>



