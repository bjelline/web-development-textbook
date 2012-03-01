---
title: Das erste PHP-Programm
order: 40
---
Beachten Sie, dass das Programm die richtige Dateiendung (.php) haben muss und nicht direkt im Browser angezeigt werden kann:


![Abbildung 125: So funktioniert PHP nicht: ohne Webserver, falsche Dateiendung](/images/image327.png)

Wenn Sie eine PHP-Programm in einer Datei mit der Endung .html oder .htm speichern wird es nicht vom Webserver interpretiert, sondern direkt an den Browser gesandt. Der Browser zeigt den Code aber nicht an, erst mit Ansicht-&gt;Quelltext kann man den Code sehen wie in Abbildung 122 gezeigt.


![Abbildung 126: So funktioniert PHP nicht: falsche Dateiendung](/images/image328.png)

Wenn Sie die richtige Dateiendung verwenden (.php) und die Seite über einen Webserver betrachten (z.B. http://localhost) kann immer noch ein Fehler im PHP-Programm auftreten. Die Fehlermeldung des Interpreters wird dann im Browser angezeigt wie in Abbildung 123 gezeigt.


![Abbildung 127: So funktioniert PHP nicht: Fehler im Programm](/images/image329.png)

Zum Abschluss nun das funktionierende Programm bei einem funktionierenden Testlauf:


![Abbildung 128: So funktioniert PHP: Webserver, richtige Endung, richtiger Programmcode](/images/image330.png)

Mit Ansicht-&gt;Quelltext kann man nun im Browser nur noch den HTML-Code sehen, niemals aber den PHP-Quellcode!

PHP Versionen
--------------
Der Befehl phpinfo() liefert Informationen zur PHP-Installation. In Abbildung 124 sehen Sie z.B. dass PHP in der Version 5.0.5 installiert ist.

Zwischen den verschiedenen PHP-Versionen gibt es eklatante Unterschiede, PHP ist nicht aufwärts-kompatibel. Wenn ihr Webspace-Vermieter auf eine neue PHP-Version umstellt, müssen Sie eventuell den Code Ihres Programmes anpassen.

In der PHP-Dokumentation sind diese Unterschiede bei den einzelnen Befehlen aufgeführt, z.B. bei der Funktion array_fill() ist in der Dokumentation angegeben: 

(PHP 4 >= 4.2.0, PHP 5)
Die Funktion existiert also seit PHP 4 Version 4.2.0 und auch in PHP 5. 

Besonders im Bereich der Objektorientierung (Objekte, Klassen, etc.) gab es große Veränderungen von PHP 4 auf PHP 5. Falls Sie objektorientiert programmieren wollen, sollten Sie auf jeden Fall PHP 5 verwenden!

Wenn Sie Webspace mieten liegt die Entscheidung aber nicht bei Ihnen: viele Webspace-Provider bieten nur veraltete PHP-Versionen an. Das sollten Sie auf jeden Fall klären bevor Sie den Mietvertrag abschließen!

Dokumentation
--------------
Die Dokumentation zu PHP finden Sie auf http://php.net.


![Abbildung 129: Eine Funktion in der Doku auf php. net nachschlagen](/images/image331.png)

Hilfreich sind auch die Kommentare der UserInnen am Ende jeder Doku-Seite. Hier finden Sie oft Erklärungen zu einzelnen Features, die in der Dokumentation ‚vergessen’ wurden, oder Anwendungsbeispiele:


![Abbildung 130: Kommentare von UserInnen in der Doku auf php. Net](/images/image332.png)

Die Dokumentation kann man auch herunterladen und lokal installieren, dann enthält sie aber nicht die Kommentare.

