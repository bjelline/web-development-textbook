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

Regular Expressions nennt man of auch Muster (en: patterns), man spricht von
Mustersuche (en: pattern matching). Wenn ein Muster auf ein Zeichenkette zutrifft
sagt man auf Halb-Englisch: "der Pattern matched".

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

## Gruppieren und Merken

Mit runden Klammern kann man Teile der Regular Expression zusammen fassen:

<javascript>
/(de|fr)_(DE|CH)/
</javascript>

<patterntester name="locale" pattern="(de|fr)_(DE|CH)">
de_DE
fr_DE
de_CH
fr_CH
de_AT
it_CH
</patterntester>

Ausserdem stehen die von den Klammern gefundenen Teile des
Strings nach der Auswertung zur Verfügung: die Methode `match`
liefert ein Array als Rückgabewert, an der Stelle 0 ist der
gesamte gefundene String gespeichert, auf 1, 2, 3 der Reihe
nach die gefundnen Gruppen:

<javascript>
locale = "de_CH";
if( match = locale.match(/(de|fr)_(DE|CH)/ ) {
  console.log("gesamt:  " + match[0]);
  console.log("sprache: " + match[1]);
  console.log("land:    " + match[2]);
}
</javascript>

## Verankern

Mit den Zeichen Zirkumflex `^` und Dollar `$` kann die Suche am
Anfang bzw. Ende der Strings verankert werden.

<javascript>
/^Am Anfang war/
/dann leben sie noch heute.$/
/^Ganzer String$/
</javascript>

<patterntester name="countries" pattern="^(en|sk|us|uk)$">
en
sk
uk
ukulele
Maske
schlafen
</patterntester>

## Zeichen-Klassen

Wenn für ein Zeichen im String mehrere Zeichen zur
Auswahl stehen fasst man sie in einer "Zeichen-Klasse" (en: "character class") zusammen:

<javascript>
/[aeiou]/
</javascript>

Achtung!  Eine Erwähnung der Zeichenklasse matched genau ein Zeichen im String, nicht mehrere Zeichen!

<patterntester name="hallos" pattern="hall[oia]">
halli
hallo
halla
halloi
hall
hallö
</patterntester>

## Zeichen-Klasse mit Zeichenbereich

Mit einem Bindestrich `-` innerhalb der Klasse kann
man einen Bereich von Zeichen angeben, die im Zeichensatz hintereinander
stehen.

<javascript>
/[a-f]/
</javascript>


<patterntester name="buchstaben" pattern="[a-z]">
a
b
c
x
y
z
A
.
%
</patterntester>

## Komplement der Zeichen-Klasse

Mit dem Zirkumflex `^` kann man das Komplement der Zeichen-Klasse bilden,
es werden dann alle Zeichen gematched die **nicht** in der eckigen
Klammer erwähnt werden:

<javascript>
/[^aeiou]/
</javascript>


<patterntester name="U-Bahnen" pattern="u[^1234]">
u1
u2
u3
u4
u5
u6
usa
</patterntester>


## Abkürzungen für häufig benutze Zeichenklassen

<javascript>
/\d/      # eine Ziffer, entspricht /[0-9]/
/\D/      # keine Ziffer, entspricht /[^0-9]/
/\w/      # Wort-Zeichen, entspricht /[a-zA-Z0-9_]/
/\W/      # kein Wort-Zeichen, entspricht /[^a-zA-Z0-9_]/
</javascript>


<patterntester name="U-Bahnen" pattern="u\d">
u1
u2
u3
u4
u5
u6
u9
usa
</patterntester>

## Irgend ein Zeichen

Der Punkt `.` steht für ein beliebiges Zeichen.  Achtung, Verwechslungsgefahr:
bei Pfadangaben hat das Fragezeichen `?` diese Funktion!


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

* [Video: Lea Verou Demystifying Regular Expressions](http://www.youtube.com/watch?v=EkluES9Rvak)
* [Regular Expressions Guide auf MDN](https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions)
* [Wikipedia: Regular Expression](http://de.wikipedia.org/wiki/Regular_Expression)
