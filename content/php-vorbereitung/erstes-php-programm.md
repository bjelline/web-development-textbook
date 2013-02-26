---
title: Das erste PHP-Programm
order: 40
---

Während das Schreiben und Testen von HTML-Seiten sehr einfach war,
erforder das Schreiben und Testen von PHP einige Schritte mehr.
Hier eine Schritt- für Schritt Auflistung, was alles schief gehen kann:

§

Das Programm muss die richtige Dateiendung (.php) haben. Es kann nicht direkt im
Browser angezeigt werden, sondern muss über den Webserver aufgerufen weden. In
folgendem Beispiel ist beides falsch:

![Abbildung 125: So funktioniert PHP nicht: ohne Webserver, falsche Dateiendung](/images/image327.png)

Tipp:  wenn die URL mit **file:///** beginnt, öffnet der Browser die Datei
direkt vom Filesystem, es ist keine Webserver involviert.  Dann kann PHP nicht
funktionieren!

§

Wenn Sie eine PHP-Programm in einer Datei mit der Endung .html oder .htm
speichern, und über den Webserver aufrufen, wird es trotzdem nicht vom Webserver 
interpretiert, sondern direkt an den Browser gesandt. 

Der Browser zeigt den PHP-Teil des Code aber nicht an, 
erst mit Ansicht-&gt;Quelltext kann man den Code sehen wie in Abbildung 122 gezeigt.


![Abbildung 126: So funktioniert PHP nicht: falsche Dateiendung](/images/image328.png)

§

Wenn Sie die richtige Dateiendung verwenden (.php) und die Seite über einen Webserver 
betrachten (z.B. http://localhost) kann immer noch ein Fehler im PHP-Programm auftreten. 
Die Fehlermeldung des Interpreters wird dann im Browser angezeigt wie in Abbildung 123 gezeigt.

![Abbildung 127: So funktioniert PHP nicht: Fehler im Programm](/images/image329.png)

§

Zum Abschluss nun das funktionierende Programm bei einem funktionierenden
Testlauf: richtige Datei-Endung, richtiger Beginn der URL mit
**http://localhost/**, und keine Fehler im Programm:


![Abbildung 128: So funktioniert PHP: Webserver, richtige Endung, richtiger Programmcode](/images/image330.png)

Mit Ansicht-&gt;Quelltext kann man nun im Browser nur noch den HTML-Code sehen, niemals aber den PHP-Quellcode!

PHP Versionen
--------------
Der Befehl phpinfo() liefert Informationen zur PHP-Installation. In der letzten Abbildung sehen 
Sie z.B. dass PHP in der Version 5.0.5 verwendet wird.

Zwischen den verschiedenen PHP-Versionen gibt es eklatante Unterschiede, 
verschiedene PHP-Versionen sind **nicht** **kompatibel**. 
Wenn ihr Webspace-Vermieter auf eine 
neue PHP-Version umstellt, müssen Sie eventuell den Code Ihres Programmes
anpassen!

In der PHP-Dokumentation sind diese Unterschiede bei den einzelnen Befehlen 
aufgeführt, z.B. bei der Funktion array_fill() ist in der Dokumentation angegeben: 

(PHP 4 >= 4.2.0, PHP 5)
Die Funktion existiert also seit PHP 4 Version 4.2.0 und auch in PHP 5. 

§

Besonders im Bereich der Objektorientierung (Objekte, Klassen, etc.) 
gab es große Veränderungen von PHP 4 auf PHP 5. Falls Sie objektorientiert 
programmieren wollen, sollten Sie auf jeden Fall PHP 5 verwenden!

Wenn Sie Webspace mieten liegt die Entscheidung aber nicht bei Ihnen: 
wenn Ihr Webspace-Provider nur einen veraltete PHP-Interpreter anbietet
können Sie das nicht änder!
Das sollten Sie auf jeden Fall klären bevor Sie den Mietvertrag abschließen.

Dokumentation
--------------
Die Dokumentation zu PHP finden Sie auf http://php.net.

![Abbildung 129: Eine Funktion in der Doku auf php. net nachschlagen](/images/image331.png)

§

Hilfreich sind auch die Kommentare der UserInnen am Ende jeder Doku-Seite. Hier finden Sie oft Erklärungen zu einzelnen Features, die in der Dokumentation ‚vergessen’ wurden, oder Anwendungsbeispiele:

![Abbildung 130: Kommentare von UserInnen in der Doku auf php. Net](/images/image332.png)

Die Dokumentation kann man auch herunterladen und lokal installieren, dann enthält sie aber nicht die Kommentare.

