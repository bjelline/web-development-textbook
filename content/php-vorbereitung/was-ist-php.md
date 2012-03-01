---
title: Was ist PHP? Was passiert am Webserver?
order: 20
---
![Abbildung: So funktioniert PHP](/images/php-sequence-diagram.svg)

PHP ist eine Programmiersprache die oft am Webserver verwendet wird, um Ressourcen dynamisch zu erzeugen. 

Sie ist im Vergleich zu anderen Programmiersprachen wie C++  oder Javascript recht simple  in der Schreibweise und etwas altmodisch. Gerade deswegen eignet sie sich gut für Programmier-EinsteigerInnen. Viele bekannte open source Web-Applikationen sind in PHP geschrieben.

Neben PHP werden viele andere Sprachen am Webserver verwendet. Da der Output dabei immer HTML ist kann der Client nicht erkennen, welche Sprache verwendet wurde. Der Quelltext des Programms wird nie im Browser sichtbar.

Das PHP-Programm wird gestartet um die Anfrage des Browsers zu beantworten. Nachdem diese Aufgabe erfüllt ist, wird das PHP-Programm wieder beendet. Die Laufzeit ist also sehr, sehr kurz! 

Ein sehr einfaches Beispielprogramm in PHP gibt „Hallo Welt“ aus und zeigt (mit dem Befehl phpinfo) viele Informationen über den Webserver und die PHP Installation an:

    <html>
    <body>
          <?php
              echo "Hallo Welt";
              phpinfo();
          ?>
    </body>
    </html>

Um dieses Programm zu testen, brauchen Sie einen Browser und einen Webserver. 

