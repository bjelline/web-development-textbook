---
title: Unobstrusive Javascript
order: 10
---

In Zusammenhang mit jQuery werden die Fachbegriffe „graceful degradation“, „progressive enhancement“  und „unobstrusive“ verwendet. Dahinter verbergen sich zwei verwandte, aber verschiedene Konzepte:

## graceful und progressive

Die Library jQuery unterstützt das Prinzip der „graceful degradation“ – auch ohne Javascript sind Webseiten mit jQuery immer noch gut verwendbar. Dieses Prinzip wird auch „progressive enhancement“ genannt, und bezieht sich nicht nur auf Javascript, sondern auch auf andere „Zusatz-Technologien“ wie z.B. Flash.

Die Idee ist dabei immer die Gleich: man baut die Webseite zuerst ohne Javascript, und fügt dann Javascript hinzu (ohne die Verwendbarkeit ohne Javscript zu zerstören). Der Inhalt (Content) der Webseite bleibt auch ohne Javascript zugänglich.


![Abbildung 60: Die Rolle von Content, Darstellung und Programmierung (Unobstrusive Javascript)](/images/image267.png)

Von dieser Herangehensweise profitieren nicht nur Blinde, Menschen mit veralteten Browsern oder exotischen Ausgabegeräte. Auch für Suchmaschinen wie Google oder andere Programme die die Information aus den Webseiten weiter verarbeiten ist dieses Prinzip hilfreich.

Um zu testen, ob das wirkliche funktioniert kann man ganz einfach mit dem Firefox-AddOn QuickJava testen. Wie in Abbildung 61 gezeigt kann Javascript mit einem Klick deaktiviert werden.


![Abbildung 61: Javascript deaktivieren mit QuickJava in Firefox](/images/image269.png)

## unobstrusive

Bei der Verwendung von jQuery bleibt der HTML-Code „javascript-frei“: jQuery wird nur an einer Stelle, im Head des Dokuments eingebaut. Das nennt man „unobstrusive Javascript“.

<htmlcode>
  <script type = "text/javscript" 
            src  = "http://code.jquery.com/jquery-latest.js"></script>
  <script>
  $(document).ready(function(){ 
        // Javascript code here 
  }); 
  </script>
  </head>
  <body>
        <!--  plain html here, no onclick or onload or ... -->
  </body>
</htmlcode>

Die URL http://code.jquery.com/jquery-latest.js kann man für alle Webseiten die online sind verwenden: hinter code.jquery.com steht nicht nur ein Server, sondern der Amazon Simple Storage Services (s3). Nur wenn man offline Entwickeln will muss man die Library wirklich herunterladen.

## Ein Beispiel: Inner Links

### Version 1

In einer langen Webseite sind mehrere Anker-Punkte gesetzt, über ein
Navigationsmenü mit `position:fixed` kann man diese Ankerpunkte ansteuern.
Das ist völlig problemloses HTML

<htmlcode caption="webseite mit Anker-Punkten, fixe Navigation">
<div id="navigation">
  <a href="#s0">Thema 0</a> 
  <a href="#s1">Thema 1</a> 
  ...
</div>  
<section id="s0">
  <h2>Thema 0</h1> 
  <p>bla bla ...</p>
</section>
<section id="s1">
  <h2>Thema 1</h1> 
  <p>bla bla ...</p>
</section>
...
__|__
#navigation {
  position: fixed;
  z-index: 10;
  bottom: -1px;
}









</htmlcode>

### Version 2

In einem Versuch die Seite zu verbessern ersetzen wir nun die 
Links durch den Aufruf einer Javascript-Funktion:

<htmlcode caption="Version 2">
<div id="navigation">
  <a onClick="scrollToMe('#s0')">Thema 0</a> 
  <a onClick="scrollToMe('#s1')">Thema 1</a> 
  ...
</div>    
</htmlcode>

Die Javsacript-Funktion verwendet jQuery und die übergebene
ID um den Ziel des Links ausfindig zu machen, und dann die
jQuery Methode `offset` um die Position des Ziels im Dokument
zu berechnen.  

Mit der jQuery-Methode `animate` wird dann eine Animation erzeugt:
binnen 800 Millisekunden wird die Seite durch setzen von `scrollTop`
von der aktuellen Scrollposition in die Scrollposition gebracht, 
die das Ziel ganz oben im Fenster anzeigt.

Mit `return false` wird die "normale" Funktion des Links deaktiviert.

<javascript caption="Javascript für Version 1">
function scrollToMe(id) {
  var top  = $(id).offset().top;
  $('body').animate({ scrollTop: top }, 800);
  return false;
}
</javascript>

§

Diese Version ist kein Beispiel für gutes Javascript:
in manchen Browsern funktioniert das Scrollen der Seite mit `scrollTop` nicht.

Mit dieser Version haben wir

* die klassischen Links zerstört
* für manche javascript-fähige Browser eine Animation eingefügt
* für manche javascript-fähige Browser keine Animation eingefügt

Wir haben dabei beide Prinzipien gebrochen

* kein progressive enhancement: Links funktionieren nicht mehr
* kein unobstrusive javascript: Javascript-Code direkt in HTML-Attributen

### Version 3

Im nächsten Versuch werden wir jQuery verwenden, um unobstrusive zu 
programmieren:

Die Navigation wird wieder zurück-gestellt auf normale HTML-Links:

<htmlcode caption="Version 3">
<div id="navigation">
  <a href="#s0">Thema 0</a>
  <a href="#s1">Thema 1</a>
  ...
</div>
</htmlcode>

Die Funktion `scrollToMe` wird als Eventhandler implementiert:
sie erwartet ein Event als Argument und die angeklickte Node
in der Variablen `this`.  Ausserdem verwendet die Funktion
die jQuery-Methode `preventDefault` um das "normale" Verhalten
des Links zu unterbinden.

In der letzten Zeile wird an alle Links in der Navigation
die Funktion `scrollToMe` als Eventhandler für `click` angefügt.

<javascript caption="Version 3">
$(document).ready( function () {

  function scrollToMe(event) {
    var link = $(this).attr('href'),
        top  = $(link).offset().top;
    $('body').animate({
      scrollTop: top
    }, 800);
    event.preventDefault();
  }

  $('#navigation a').on('click', scrollToMe);
});
</javascript>

§

Diese Variante funktioniert schon besser:

* die klassischen Links funktionier für Browser ohne Javascript
* für manche javascript-fähige Browser eine Animation eingefügt
* für manche javascript-fähige Browser ist die Animation immer noch kaputt

Wir haben damit schon ein Prinzip eingehalten, und sind
beim anderen Prinzipien auf halben weg

* teilweise progressive enhancement: 
** Links funktionieren für Browser ohne Javascript
** in der Javascript-Variante bleibt die URL immer gleich
* unobstrusive javascript: erfüllt



### Version 4

Im nächsten Schritt werden wir sicher stellen, dass die Animation
nur in solchen Browsern verwendet wird, wo sie auch funktioniert.

Achtung: hier gibt es einen falschen und einen richtigen Ansatz:

# Browser Detection: Unterscheidung nach Namen, Versionsnummer, Betriebssystem des Browsers 
# Feature Detection: Unterscheidung nach genau der Fähigkeit, die ich verwenden will

Die erste Variante funktioniert nicht: die Selbstoffenbarung der Browser
kann falsch sein, ich kenne nicht alle Browser und ihre Fähigkeiten.
Siehe auch
[Zakas(2009): Feature detection is not browser detection. In NCZOnline.](http://www.nczonline.net/blog/2009/12/29/feature-detection-is-not-browser-detection/)


Die Funktion `scrollToMe` bleibt unverändert.
Wir testen ob die Funktion scrollTop wirklich den Wert
von scrollTop verändern kann. Wenn das funktioniert wird
die globale Variable `can_scroll` auf `true` gesetzt, 
andernfalls auf `false`.

<javascript caption="Version 4">
// try out scrollTop,
// set global Flag can_scroll
var old_scrolltop = $('body').scrollTop();
$('body').scrollTop(10);
window.can_scroll = ( $('body').scrollTop() > 0 );
$('body').scrollTop(old_scrolltop);

if ( window.can_scroll ) $('#navigation a').on('click', scrollToMe);
</javascript>

Diese Herangehensweise - Feature Detection, dann Flags setzen,
die im weiteren Code verwendet werden können - wird von der Library
[modernizr](http://modernizr.com/) für eine lange Liste von Features
angeboten.

§

In ganz seltenen Fällen muss man doch Browser Detection machen.
Eine Gute Library dafür ist [HTML5 please](http://api.html5please.com/).
Damit kann man eine Liste von Features angeben die erfüllt sein
müssen damit die Seite funktioniert.  Ist das nicht der Fall, dann
wird eine entsprechende Meldung angezeigt

![HTML5 please Fehlermeldung](/images/html5please.png)

§

Diese Variante behebt das Problem mit nicht-funktionierenden
Javascript-Browsern:

* die klassischen Links funktionier für Browser ohne Javascript
* die klassische Version wird auch für "animations-unfähige" Javascript Browser verwendet
* für manche javascript-fähige Browser funktioniert die Animation

Es bleibt aber noch in Problem:

* teilweise progressive enhancement: 
** in der Javascript-Variante bleibt die URL immer gleich
* unobstrusive javascript: erfüllt



### Version 5

In der klassischen Version ändert sich beim navigieren zwischen den
Ankern jeweils die URL im Browser.  Wenn ich ein Ziel an-navigiere,
und dann die URL kopiere um einen Link zu setzen / mir eine Bookmark setze,
dann verweist die URL die ich verwende wirklich wieder genauf auf das Ziel.

Dieses Verhalten ist erstrebenswert, wird aber von der "animierten" Version
derzeit nicht geliefert.

Diese "navigierbarkeit" ist auch ein klassisches Problem von AJAX-Applikationen,
die Lösung die wir hier entwickeln funktioniert auch dort:

In die Funktion `scrollToMe` wird eine Zeile eingefügt.
Mit dem History-Objekt kann man den Browser von Javascript aus "navigieren":
mit `history.back()` zum Beispiel einen Schritt zurück gehen.

Mit `history.pushState()` kann man zu einer neuen Seite navigieren,
sie wird dabei an die History angefügt - das ist das "normale" Verhalten
des Browsers.

Eine Alternative ist `history.replaceState()` - dabei wird die aktuelle Seite
ersetzt, die Browser-History wird nicht länger.  

Beide Methoden erwarten drei Argumente - ein Objekt und zwei Strings - 
aber nur das letzte Argument wird derzeit benutzt. Es ist ein String mit der
URL die geladen werden soll.

<javascript caption="Version 4">
function scrollToMe(event) {
  var link = $(this).attr('href');
  ...
  window.history.pushState( {}, "Thema " + link, link);
}
</javascript>

§

Mit dieser Variante haben wir  für die Javascript-Browser
alle Funktionalität der einfachen HTML-Version wiederhergestellt.
Und zusätzlich gibt es eventuell noch eine schöne Animation.

Damit sind beide Prinzipien voll erfüllt:

* progressive enhancement - alle Browser erhalten die maximal mögliche Funktionalität
* unobstrusive javascript - kein Javascript-Code im HTML



