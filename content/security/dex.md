---
title: Web Security
---
Die Sicherheit von Web Applikationen ist ein komplexes Thema.
Die OWASP gibt dazu regelmäßig Empfehlungen heraus.  Die [OWASP Top 10 von 2010](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
sind die Grundlage für dieses Kapitel. Wir werden es speziell auf PHP, MySQL, Apache anwenden.

Zehn Problemfelder die sie kennen sollten:

* A1 - Injection 
* A2 – Cross-Site Scripting (XSS)
* A3 - Fehler in Authentifizierung und Session Management
* A4 - Unsichere direkte Objekt-referenzen
* A5 – Cross-Site Request Forgery (CSRF)
* A6 – Sicherheits-relevante Fehlkonfiguration
* A7 - Kryptografisch unsichere Speicherung
* A8 - Mangelhafter URL-Zugriffsschutz
* A9 - Unzureichende Absicherung der Transportschicht
* A10 - Ungeprüfte Um- und Weiterleitungen

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
