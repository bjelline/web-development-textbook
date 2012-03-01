---
title: Apache
order: 30
---
Apache ist ein freier Webserver. Das Apache-Projekt startete 1995 um statt NCSA Webserver, der schon durch viele Patches verbessert wurde, einen neuen Webserver von Grund auf zu programmieren. Der Name leitet sich aber noch von „a patchy webserver“ ab6.

Im Gegensatz zu anderen freien Software Projekten waren in der Apache Group von Anfang an Programmierer aus großen Firmen vertreten, und zwar im offiziellen Auftrag dieser Firmen.

Apachefriends und XAMPP
------------------------
Die „apachefriends“ bieten den Webserver Apache in einem Paket mit der Programmiersprache PHP und der Datenbank MySQL für Windows an. Dieses Gesamtpaket heißt dann XAMPP. Eine sehr freundliche Installations-Anleitung ist auch dabei.


![Abbildung 122: Webseite von apachefriends.org, download von XAMPP](/images/image324.png)

Die Alternative zur Distribution XAMPP wäre, jeden Teil einzeln zu besorgen: Apache von httpd.apache.org, PHP von php.net, und MySQL von MySQL.com herunter laden, die drei Pakete separat installieren, und dann versuchen, sie richtig zu kombinieren. Das ist viel mehr Arbeit.

Apache und MySQL starten
-------------------------
Wenn die Installation von Apache und MySQL auf Windows funktioniert hat, findet man nicht – wie bei anderen Programmen – einen Eintrag im Programm-Menü. Weder Apache noch PHP noch MySQL haben eine grafische Oberfläche. Apache und MySQL sind „Server“, die man starten muss.

Man kann Apache und MySQL auf zwei Arten starten: als Windows-Dienst oder über das in  Abbildung 119 gezeigte XAMPP Control Panel. 


![Abbildung 123: XAMPP Control Panel zum Starten und Stoppen von Apache](/images/image325.png)

Apache als Windows-Dienst
--------------------------
Man findet unter Systemsteuerung -&gt; Verwaltung -&gt; Dienste eine Liste aller installierten Dienste und kann diese starten und anhalten.


![Abbildung 124: Dienste von Windows: MySQL und Apache2 sind schon gestartet](/images/image326.png)

Webserver stoppen
------------------
Egal wie man Apache gestartet hat: erst mit einem Browser kann man die Funktionstüchtigkeit des Webservers wirklich testen. Als URL verwendet man http://localhost/. 


Achtung: Apache und MySQL brauchen viel Hauptspeicher: Apache ca. 40 MB, MySQL fast 400 MB. Wer gleichzeitig mit vielen anderen Programmen arbeitet und nur wenig Hauptspeicher im Computer hat, sollte also MySQL und Apache nach Gebrauch wieder beenden. 

