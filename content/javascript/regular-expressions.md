---
title: Regular Expressions
order: 25
---

Regular Expressions sind eine kleine "Programmiersprache in der Programmiersprache",
eine besondere Schreibweise die es erlaubt in Strings nach Mustern zu suchen
und Ersetzungen vorzunehmen.  

§

Mit Regular Expressions kann man die Welt retten:

![](/images/regex-hero.png)
Basierend auf [http://xkcd.com/208/](http://xkcd.com/208/) von Randall Munroe - verändert und verwendet unter der [CC-BY-NC](http://creativecommons.org/licenses/by-nc/2.5/) Lizenz

§

Regular Expressions sind keine Besonderheit von Javascript. Viele UNIX Kommandozeilen-Befehle
und die meisten Programmiersprachen bieten Regular Expressions an.  Egal ob Sie also mit vi, grep, mod_rewrite,
Javascript, C++ oder Ruby arbeiten, alles was Sie über Regular Expressions lernen
zahlt sich aus!

[Reguläre Ausdrücke](http://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck) sind 
ein Konzept aus der Theoretischen Informatik. Diese ursprünglichen regulären Ausdrücke
bieten nur 3 Operatoren an.  Bei der Umsetzung in diversen UNIX-Tools und Programmiersprachen
wurden mehr und mehr Operatoren eingeführt. Zur unterscheidung nenne ich diese
erweiterten Ausdrücke mit dem englischen Begriff Regular Expressions oder kurz RegEx.



## Verwendung von Regular Expressions

In Javascript gibt es viele verschiedene Schreibweise für Regular Expressions,
wir beginnen mit der Methode `match` des String-Objekts:

<javascript caption="match">
var s = "begreifen";
if( s.match(/greif/) ) {
  console.log("greif gefunden!");
}
</javascript>

Hier wird im String "begreifen" nach dem String "greif" gesucht.
Falls er gefunden wird (ja, wird er), gibt die Match-Methoden einen
Wert zurück, der als wahr gilt.

Für diesen einfachen Fall wird man aber nicht eine RegEx verwenden,
sondern `indexOf`: diese Methode gibt -1 zurück falls der String
nicht gefunden wurde, und die Position der Fundstelle anderfalls.

<javascript caption="match">
var s = "begreifen";
if( s.indexOf('greif') > -1) {
  console.log("greif gefunden!");
}
</javascript>


## Zeichenkette

Die einfachste Regular Expression besteht aus einer
Zeichenkette, nach der "wörtlich" gesucht werden soll.
Falls die Zeichenkette irgendwo im String gefunden wird
ist die Suche erfolgreich:

<javascript>
/hallo/
</javascript>


<patterntester name="hallo" pattern="hallo">
hallo
aber hallo!
die hallobergrenze
halo
Hallo
</patterntester>

## Alternative

Mit dem senkrechten Strich `|`  kann man Alternative definieren, er
entspricht also einem logischen "oder";

<javascript>
/en|sk|zh|us|uk/
</javascript>

<patterntester name="Länder" pattern="en|sk|zh|us|uk">
en
sk
uk
ukulele
esuu
</patterntester>


## RegEx in PHP

<php caption="RegEx Beispiel-Code aus Wordpress Plugins">
# Beispiel Link Suchen
if (preg_match('/^(http)(s?)(:)\/\//',$linky)){ ...

# Beispiel Sprache-Code
if (preg_match ( "/en|sk|zh|us|uk/", $locale_code )){ ...
</php>


<php caption="Suchen mit RegEx in PHP">
preg_match( "/regex/i", "string in dem ich suche") 
</php>


## Verteifung


* [Regular Expressions Guide auf MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions)
