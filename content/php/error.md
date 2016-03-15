---
title: Errors + Debugging
order: 100
---

Das Log File
------------

Die Webserver-Software (egal ob apache oder nginx oder ...) schreibt mindestens
zwei Logfiles, oft in einem Ordner `logs` oder `/var/www/logs/apache/`

Wenn das Access Log File im "Common Format" ist enthält es eine Zeile pro HTTP Request, und enthält
die IP-Adresse des Clients, Datum und Uhrzeit, die Request-Zeile, den
Status-Code des Response, die Anzahl der gelieferten Bytes, eventuell
eine Referer URL und den User Agent (= Browser Namen aus dem Request).

<plain caption="access_log">
127.0.0.1 - - [14/Mar/2016:22:11:58 +0100] "GET /_vorlage_wp2/u4/ HTTP/1.1" 500 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0"
127.0.0.1 - - [14/Mar/2016:22:12:00 +0100] "GET /_vorlage_wp2/u4/ HTTP/1.1" 500 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0"
127.0.0.1 - - [14/Mar/2016:22:12:07 +0100] "GET /_vorlage_wp2/u4/ HTTP/1.1" 200 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0"
127.0.0.1 - - [14/Mar/2016:22:18:36 +0100] "GET /_vorlage_wp2/u5/ HTTP/1.1" 200 1232 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0"
127.0.0.1 - - [14/Mar/2016:22:18:36 +0100] "GET /_vorlage_wp2/u5/bootstrap.css HTTP/1.1" 200 95134 "http://wp2.localhost/_vorlage_wp2/u5/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0"
</plain>

Die ersten drei Requests endeten in einer Fehlermeldung (Status 500), es wurden keine Daten ausgeliefert. Die
beiden letzten Requests lieferten 1232 bzw. 95134 Bytes.

Das Error Log enthält nur Einträge für Requests die mit einem
Error enden: 

<plain caption="error_log">
[Mon Mar 14 22:11:58.623697 2016] [:error] [pid 25895] [client 127.0.0.1:52244] PHP Parse error:  parse error in /Users/bjelline/code/Lehre/wp2/abgaben/_vorlage_wp2/u4/index.php on line 13
[Mon Mar 14 22:12:00.559404 2016] [:error] [pid 26261] [client 127.0.0.1:52245] PHP Parse error:  parse error in /Users/bjelline/code/Lehre/wp2/abgaben/_vorlage_wp2/u4/index.php on line 13
[Mon Mar 14 22:12:07.857134 2016] [:error] [pid 25805] [client 127.0.0.1:52247] PHP Warning:  Division by zero in /Users/bjelline/code/Lehre/wp2/abgaben/_vorlage_wp2/u4/index.php on line 13
</plain>

Um diese Dateien im Auge zu behalten eigent sich der Kommandozeilen Befehl `tail`:

<shell>
tail -f error_log
</shell>



Am Produktions-Server haben Sie vielleicht keinen Zugriff auf diese
Log Dateien.


PHP Fehlermeldungen im Browser anzeigen
---------------

Es gibt die Möglichkeit manche Fehlermeldungen auch im Browser anzuzeigen:

<php>
ini_set('display_errors', true);
</php>

Das funktioniert nicht für Fehler die den gesamten PHP Interpreter zum
Absturz bringen. Aber für die Fehlersuche kann es trotzdem sehr hilfreich sein.

Normalerweise ist diese Option nicht auf einem Produktions-Server aktiviert,
sondern nur auf Development oder Staging-Maschinen.

Referenzen
--------

* http://www.php.net/manual/en/function.error-reporting.php
* http://www.php.net/manual/en/errorfunc.configuration.php#ini.display-errors
* http://www.php.net/manual/en/function.error-get-last.php
* http://php.net/manual/en/errorfunc.constants.php
* http://margotskapacs.com/2013/01/configure-debugging-with-phpstorm/
