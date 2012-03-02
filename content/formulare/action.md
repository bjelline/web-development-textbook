---
title: Daten absenden
order: 20
---

Was passiert, wenn Sie ein Formular ausfüllen und auf den Absende-Button drücken? Meist werden Sie an den Webserver zur weiteren Verarbeitung geschickt. Diese action wird direkt im &lt;form&gt;-Tag angegeben.


      <form action="http://multimediatechnology.at/~fhs666/pizza/bestellung.php">

Daten an E-Mail senden
-----------------------

Wenn Sie kein Möglichkeit haben, am Webserver zu programmieren, bleibt als Alternative, die Daten direkt per E-Mail zu senden. So sieht der entsprechende HTML-Code des Formulars aus:


      <form action="mailto:ich@priv.at" method="POST" enctype="text/plain">

Achtung: diese Art die Daten zu senden ist sehr fehleranfällig: hierfür muß am Client-Computer nicht nur der Browser funktionieren, sondern auch das E-Mail Programm. Das E-Mail Programm muß richtig konfiguriert sein. Das ist auf vielen Computern am Internet nicht der Fall, oft werden die Daten also nicht erfolgreich versandt sondern gehen verloren.

              
![Abbildung 48: Formular per E-Mail oder über den Webserver senden](/images/image225.png)


Deswegen sollten Sie diese Methode nicht verwenden, sondern immer über den Webserver senden!


Daten senden mit Methode GET
-----------------------------

Wird im Form-Tag als Action eine URL mit http angegeben dann werden die Daten an den Webserver gesendet. Dabei gibt es zwei Methoden: GET und POST. GET ist die einfachere. 

In Abbildung 49 sehen Sie ein (leicht vereinfachtes) Bestellformular für Flugzeuge das die Methode GET verwendet.


![Abbildung 49: Formular mit Methode GET](/images/image230.png)


Wenn die UserIn auf „Bestellung absenden“ drückt, baut der Browser aus der action und den Namen und Werten der einzelnen Eingabefelder eine URL zusammen, die dann aufgerufen wird wie in Abbildung 50 gezeigt.


![Abbildung 50: URL einer GET-Anfrage](/images/image232.png)


Die komplette URL lautet im Beispiel:

      http://localhost/php/test.php?anzahl=4&adresse=Jakob+Haringer+Str.1%0D%0A5020+Salzburg

Die URL wird zusammengestellt aus:

* der Action (aus dem form-Tag)
* ? (einem Fragezeichen )
* für alle Eingabefelder, getrennt durch & (kaufmännisches Und):
    * Name des Eingabefeldes
    * = (Gleich Zeichen)
    * Eingegebener / angeklickter Wert

Falls dabei Sonderzeichen vorkommen  (z.B. Leerzeichen, Zeilenumbrüche, Umlaute, Fragezeichen, kaufmännisches Und) werden diese wie folgt encodiert: Statt Leerzeichen wird ein + oder %20 gesetzt, bei allen anderen Zeichen wird ein % gefolgt von der Hexadezimaldarstellung des ASCII-Code gesetzt  (siehe rfc 2396). Diese Codierung nennt man URL-Encoding.


URL als Programm-Schnittstelle
-------------------------------

Das Webformular ist nicht notwendig, um eine GET-Anfrage zu erzeugen. Wenn Sie z.B. das Eingabe-Formular von Google analysieren werden Sie herausfinden, dass die Anfrage mit dem Suchwort „Schokolade“ so aussieht:


    http://www.google.com/search?q=Schokolade

Sie können diese URL einfach direkt in den Browser eintippen, ohne das Eingabeformular von Google zu verwenden. Sie können diese URL in den Lesezeichen/Favoriten Ihres Browsers speichern oder in einem Link verwenden:


    <a href="http://www.google.com/search?q=schokolade">Suche nach Schokolade</a>

Gerade bei Suchmaschinen wird diese Möglichkeit oft genutzt: z.B. durch die Suchfelder, die in den Browsern eingebaut sind:


![Abbildung 51: Suchfeld von Firefox](/images/image237.png)


Wenn Sie eine Web-Applikation erstellen müssen Sie auch darauf gefasst sein, dass die UserInnen nicht nur ihre Web-Formulare verwenden, sondern auch URLs konstruieren und aufrufen. Die URL (und nicht das Formular) ist also eine öffentliche Schnittstelle zu Ihrem Programm!

Ein lehrreiches Beispiel aus der Frühzeit des Web: es gab einst Webshops, die den Preis der Waren als verstecktes Eingabefeld im Formular speicherten:

<htmlcode caption="Airbus Bestell-Formular">
<form action="order.php" method="GET">
        Anzahl: <input name="anzahl"> <br>
        Adresse: <textarea name="adresse"></textarea><br>
        Preis: 1.000.000 DM  
        <input type="hidden" name="preis" value="1000000">
        <input type="submit" value="Bestellung absenden">
</form>
</htmlcode>

Das gibt der KundIn die Chance ein „Gegenangebot“ zu senden (als „pricing attack“ bekannt):


      http://happyshop.com/order.php?anzahl=4&adresse=Urstein+Süd+.1&preis=10

Wenn nun das Programm `order.php` einfach den Preis aus der URL übernimmt und auf die Rechnung schreibt, wird der Airbus recht günstig (für die KundIn) verkauft.

Merke: Alle Eingaben die eine Web-Applikation erhält sind mit extremer Skepsis zu betrachten! 


