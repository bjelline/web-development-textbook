---
title: AJAX
order: 30
---

Wir kennen schon die Funktionsweise von [HTTP](/http/). Bisher
wurde ein HTTP Request durch eine Handlung der UserIn ausgelöst
(URL eintippen, Link anklicken), oder um Ressourcen nachzuladen
die zu einem HTML-Dokument gehören.

Mit AJAX lernen wir nun eine neue Art kennen, wie HTTP-Request
verwendet werden: Asynchrone Requests.


## Was ist AJAX?

AJAX ist die englische Abkürzung für „Asynchrones Javascript und XML“. In
diesem Kapitel lernen Sie was das genau bedeutet, und dass sich hinter dem X
zum Schluss  auch andere Format verbergen können

Ein Beispiel für die Verwendung von AJAX ist das in Abbildung 50 gezeigte Eingabefeld: 
schon während des Eintippens eines Suchwortes wird eine Anfrage an den Webserver 
geschickt.  Dieser antwortet mit einer Liste von vorgeschlagenen Namen.  Diese Liste 
wird mit Javascript in einer <div> unterhalb des Eingabefelds angezeigt:
 
![Abbildung 50: Vorschläge für die Eingabe werden über AJAX geladen](/images/image375.png)

Mit AJAX wird hier eine HTTP-Anfrage gesendet. Der Unterschied zu einer 
„normalen“ HTTP-Anfrage:  Bei einer „normalen“ HTTP-Anfrage schaltet der Browser auf 
„Warten“, eine neue vollständige Webseite wird geladen und angezeigt.
Asynchron heisst: der Request wird abgesetzt, das Javascript-Programm läuft sofort 
weiter, die UserIn kann weiterhin mit der Webseite interagieren. Erst wenn die Antwort 
des Servers vorliegt wird die normale Darstellung der Seite kurz unterbrochen und ein 
Javascript-Programm fügt die Daten in die Seite ein. 

### Im Javascript Programm

Auf der Ebene des Javascript Programm-Codes sieht der Unterschied zwischen 
synchron und asynchron so aus:

<javascript caption="synchron">
Befehl1();
Befehl2();
Antwort = synchron_laden(url);   // dauert ewig 
Befehl3();                      // viel später
Befehl4();
</javascript>

Bevor `Befehl3` ausgeführt werden kann muss erst die Antwort des Servers vorliegen – 
hier kann also eine Wartezeit von mehreren Sekunden entstehen. 


<javascript caption="asynchron">
function handle_data(Antwort) {  
   ... 
} 
 
Befehl1();
Befehl2();
asynchron_laden(url, handle_data);  // dauert kurz 
Befehl3();                         // kurz darauf
Befehl4();
</javascript>


`Befehl3` kann sofort ausgeführt werden, egal ob und wie schnell der Server antwortet. 
Wenn die Daten vom Server schließlich einlangen wird die Funktion handle_data 
aufgerufen und die Daten zu verarbeiten. Das kann z.B. gleichzeitig mit `Befehl4`
erfolgen.

### HTTP

Betrachten wir nun den Ablauf für ein Textfeld mit Autocomplete-Funktion,
wie in der obigen Abbildung gezeigt. Folgende Abbildung ist ein
[Sequenz Diagramm](http://de.wikipedia.org/wiki/Sequenzdiagramm), die Zeit
läuft von oben nach unten.

Zuerst wird die Webseite mit dem Formular geladen: der Browser schickt die
Anfrage an den Server und erhält eine Antwort. Was immer zuvor im Browser
angezeigt wurde wird - nach Ankunft des HTTP Response - gelöscht, die neue
Seite wird im Browser dargestellt.  Diese Verhalten des Browsers ist uns
schon bekannt.

Nun kommt der neue Teil:  das Eintippten des ersten Buchstabens ins
Eingabefeld löst ein Javascript-Programm aus, das einen AJAX-Request absetzt.
Am Netzwerk ist das ein ganz normaler HTTP Request, für den Server gibt
es keinen Unterschied zu jedem anderen Request.  

Was anders ist, ist das Verhalten des Browsers: Wenn die Daten des Response
einlangen wird **nicht** die Seite gelöscht, sondern es wird eine
Javascript-Funktion in der Seite aufgerufen, die die Daten entgegen nimmt.
Für das Autocomple-Verhalten bestehen die Daten aus einer Liste von Vorschlägen,
die Javascript-Funktion zeigt diese Vorschläge unterhalb des Eingabefeldes an.

![AJAX Ablauf](/images/ajax-sequence-diagram.svg)



### Datenformate - mehr als nur XML

Das X am Ende von AJAX steht für XML – das stimmt aber nicht: die Daten vom Server 
können im XML-Format gesendet werden, aber genauso auch als HTML oder reiner 
Text oder JSON. Man könnte das X in AJAX auch als „X-beliebiges Format“ deuten.
Das wichtigste Javascript-Konstrukt für AJAX ist das XMLHTTPRequestObject., das der 
Javascript-Interpreter des Browsers zur Verfügungs stellt. Leider gibt es bei diesem 
Objekt Unterschiede zwischen den Browsern. Um diese Unannehmlichkeiten zu 
vermeiden, sollte man fertige Libraries verwenden, die die Browser-Unterschiede 
verbergen.

## Simples Javascript Beispiel

Im ersten AJAX Beispiel wird der Output eines PHP-Counters in eine HTML-Seite 
eingebunden. 

<htmlcode caption="Counter einbinden mit Javascript">
<html>
<head>
  <title>AJAX counter</title>
  <style>
      p#counter_zeile { display: none; }
  </style>
</head>
<body>
  <h1>Webseite</h1>

  <p>mit total viel Inhalt</p>

  <p id="counter_zeile">Counter: <span id="counter_zahl">?</span></p>

  <script>
    window.addEventListener('load', loadCounterWithAjax);

    function loadCounterWithAjax() {
      document.getElementById('counter_zeile').style.display = "block";
      var ajax_request = new XMLHttpRequest();
      ajax_request.addEventListener('load', handleCounterData);
      ajax_request.open("GET", "counter_ajax.php");
      ajax_request.send();
      console.log("Request wurde gesendet");
    }

    function handleCounterData() {
      console.log("Response wurde empfangen");
      document.getElementById('counter_zahl').innerHTML = 
        this.responseText;
    }
  </script>
</body>
</html>
</htmlcode>

Für den Fall das Javascript nicht funktioniert wird die ganze Counter-Zeile nicht
angezeigt (display:none als style).  Falls Javascript funktioniert wird die
Zeile eingeblendet.

Das `XMLHttpRequest` Objekt liefert verschiedene Events, hier wird nur für das `load` Event
eine Funktion als Listener angebracht.  Mit der `open` methode wird der HTTP-Request
konfiguriert, aber erst mit `send` wirklich abgeschickt.  Da er Request asynchron erfolgt
geht der Javascript-Interpreter sofort von Zeile 23 in Zeile 24 weiter, und wartet
nicht auf den HTTP-Response.

Erst sehr viel später, wenn der HTTP-Response vorliegt, wird die Funktion
`handleCounterData` aufgerufen. Die Funktion erhält das `XMLHttpRequest` Objekt
in der Variable `this`.

## Simples jQuery Beispiel

jQuery bietet einige Vereinfachungen gegenüber Javascript:
die Funktion `load` erledigt nicht nur den AJAX Request, sondern
auch das Einfügen des Rückgabewerts in eine DOM Node:

<htmlcode caption="Counter einbinden mit Javascript">
  <html>
  <head>
    <title>AJAX counter</title>
    <style>
        p#counter_zeile { display: none; }
    </style>
  </head>
  <body>
    <h1>Webseite</h1>

    <p>total viel Inhalt</p>

    <p id="counter_zeile">Counter: <span id="counter_zahl">?</span></p>

    <script src="jquery.js"></script>
    <script> 
    $(document).ready(function(){ 
        $("p#counter_zeile").show();
        $("#counter_zahl").load("counter_ajax.php");
    });
    </script>
  </body>
  </html>
</htmlcode>

Die ganze Arbeit macht hier jQuery in der Zeile

`$("#counter_zahl").load("counter_ajax.php");`

Das Element mit der ID counter_zahl wird ausgewählt. Mit dem Load-Befehl wird eine 
AJAX-Anfrage an die angegebene URL abgesetzt. Wenn der HTTP-Response
beim Browser ankommt, werden die gelieferten Daten in das ausgewählte Element eingefügt. 
(Die gelieferten Daten sollten also reiner Text oder ein HTML-Fragment sein.)


## jQuery Beispiel mit Callback-Funktion

In diesem Beispiel werden die Daten des Yahoo-Wetterberichts auf mehrere Arten in 
einer Webseite angezeigt. Achtung: Dieses Beispiel benutzt zwar öffentlich zugänglich 
Daten von der Yahoo-Webseite, diese können aber nicht direkt in Javascript geladen 
werden! Wenn man es doch versucht erhält man in Firebug die Fehlermeldung „Access to restricted URI denied“:
 
Man braucht am eigenen Server ein PHP-Programm das die Daten lädt und wiedergibt:

<php caption="backend um von yahoo den Wetterbericht zu laden">
  <?php 
    // Datei getweather.php
    header ("content-type: text/xml");
    $url = "http://weather.yahooapis.com/forecastrss?w=2502265&u=c";
    $xml=file_get_contents( $url );
    if ( $xml == false ) {
        echo "<error>Could not read weather data from yahoo</error>";
    } else {
        echo "$xml";
    }
  ?>
</php>

Der Aufruf der lokalen url `getweather.php` liefert jetzt die gleichen Daten wie die Yahoo 
Wetterseite. Es handelt sich um Daten im XML-Format, hier ein Auszug:

<xml caption="Yahoo Wetterbericht als XML">
  <?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
  <rss version="2.0" xmlns:yweather="http://xml.weather.yahoo.com/ns/rss/1.0"  
                     xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#">
  <channel>
  <description>Yahoo! Weather for San Francisco, CA</description>
  <geo:lat>37.77</geo:lat>
  <geo:long>-122.42</geo:long>
  <pubDate>Mon, 19 Jan 2009 12:56 pm PST</pubDate>
  <yweather:condition  text="Fair"  code="34"  temp="17"  />
  </rss>
<!-- api3.weather.ac4.yahoo.com uncompressed Mon Jan 19 13:23:31 PST 2009 -->
</xml>

Im Tag `<yweater:condition>` ist die Temperatur gespeichert und ein Code der die 
Wetterlage angibt. Unter diesem Code kann man bei Yahoo auch ein Bild zur Wetterlage 
erhalten, z.B: zu den Codes 27, 33, 32 (mostly cloudy at night, fair at night, sunny) die 
URLs

* `http://l.yimg.com/a/i/us/we/52/27.gif`  
* `http://l.yimg.com/a/i/us/we/52/33.gif`  
* `http://l.yimg.com/a/i/us/we/52/34.gif`

und die Bilder

Dies wiederspricht dem 2.REST-Prinzip (siehe nächstes Kapitel): dass nämlich direkt 
URLs angegeben werden sollen, nicht so wie hier ein code, von dem man erst wieder 
wissen muss, wie man ihn interpretiert.

In der Webseite werden die Daten per AJAX geladen, dabei wird eine callback-funktion angegeben:

<javascript>
$.get("getweather.php", handle_the_weather);

function handle_the_weather(data){
   ...
}
</javascript>

Die Callback-Funktion erhält die geladenen Daten als Argument. Wenn die Daten im 
XML oder HTML-Format sind kann man sie wieder mit jQuery behandeln: den Tag 
`<yweather:condition>` auswählen und aus dem Tag die Attribute temp und code aus-
lesen:

<javascript>
  cond =  $("yweather\\:condition", data);
  temp = cond.attr("temp");
  code = cond.attr("code");
</javascript>

Der Code wird zum Anzeigen des Bildes von Yahoo verwendet:

<javascript>
  cond =  $("yweather\\:condition", data);
  $("#dasbild").attr("src", "http://l.yimg.com/a/i/us/we/52/" + code + ".gif");
</javascript>

Die Temperatur wird doppelt verwendet: einmal wird sie einfach angezeigt:

<javascript>
  $("#temp").text( temp + "°" );
</javascript>

  Und zweitens wird je nach Temperatur die Hintergrundfarbe der Webseite passend ge-
  setzt:

<javascript>
  if( temp < 0 ) {
      color="blue";
  } else if ( temp < 10 ) {
      color="green";
  …
  } else {
      color="red";
  }
  $("body").css("background-color",color);
</javascript>

Hier der vollständige Javascript Code:


<javascript>
  $.get("getweather.php", handle_the_weather);

  function handle_the_weather(data){
      var cond, temp, code, color;
      var cond =  $("yweather\\:condition", data);
      temp = cond.attr("temp");
      code = cond.attr("code");
      $("#dasbild").attr("src", "http://l.yimg.com/a/i/us/we/52/" + code + 
  ".gif");
      $("#temp").text( temp + "°" );
      if( temp < 0 ) {
          color="blue";
      } else if ( temp < 10 ) {
          color="green";
      } else if ( temp < 20 ) {
          color="yellow";
      } else if ( temp < 30 ) {
          color="orange";
      } else {
          color="red";
      }
      $("body").css("background-color",color);
  }
</javascript>


