---
title: Web Security
intro: Sie erhalten einen Einblick in die Sicherheits-Probleme von Web-Applikationen.
---
Die Sicherheit von Web Applikationen ist ein komplexes Thema.
Die OWASP gibt dazu regelmäßig Empfehlungen heraus.  Die [OWASP Top 10 von 2013](https://www.owasp.org/index.php/Top_10_2013-Top_10)
sind die Grundlage für dieses Kapitel. Wir werden es speziell auf PHP, MySQL, Apache anwenden.

Zehn Problemfelder die sie kennen sollten:

* A1 - Injection 
* A2 - Fehler in Authentifizierung und Session Management
* A3 – Cross-Site Scripting (XSS)
* A4 - Unsichere direkte Objektreferenzen
* A5 - Sicherheitsrelevante Fehlkonfiguration
* A6 - Verlust der Vertraulichkeit sensibler Daten
* A7 - Fehlerhafte Autorisierung auf  Anwendungsebene
* A8 – Cross-Site Request Forgery (CSRF)
* A9 - Nutzung von Komponenten mit bekannten Schwachstelle
* A10 - Ungeprüfte Um- und Weiterleitungen

Was Sie können sollten

* Sie können SQL-Injection Probleme erkennen und mittels prepared Statements vermeiden
* Sie können XSS Probleme erkennen und durch geeignetes Escapen oder Säubern des Outputs vermeiden
* Sie können eine Authentisierung mit Passwort und Cookie in PHP implementieren, und dabei Session Fixation vermeiden
* Sie können CSRF Probleme erkennen und durch Verwendung eines CSRF Tokens vermeiden
* Sie können die Apache-Konfiguration überprüfen und Sicherheitsprobleme erkennen
* Sie können Sicherheitsproblem beim Speichern von Passwörter und sensitiven Daten erkennen und  vermeiden
* Sie können erkennen, wenn eine Applikation den Zugriffsschutz nicht konsequent für jede URL überprüft, und das Problem beheben
* Sie können erkennen wann SSL verwendet werden sollte
* Sie können Sicherheitsprobleme bei der Weiterleitung an externe Seiten erkennen und vermeiden


Quellen

* [OWASP Top 10, 2013, deutsche version](https://www.owasp.org/images/4/42/OWASP_Top_10_2013_DE_Version_1_0.pdf)
