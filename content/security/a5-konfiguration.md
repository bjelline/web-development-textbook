---
title: Sicherheitsrelevante Fehlkonfiguration
order: 50
---

Die OWASP beschreibt dieses Problem allgemein so:

> Sicherheitsrelevante Fehlkonfiguration kann auf jeder Ebene der Anwendung, inkl. Plattform, Web- und Anwendungs-server, Frameworks oder Programmcode vorkommen. Die Zusammenarbeit zwischen Entwicklern und Administratoren ist wichtig, um eine sichere Konfiguration aller Ebenen zu gewährleisten.


In größeren Projekten / Firmen ist eine Arbeitsteilung üblich zwischen
Entwicklung (Development) und Systemadmistration (Operations). 

## Ebenen

Für eine Web-Applikation muss man dabei mindestens folgende Schichte beachten:

* Physikalische Sicherheit (Wer kann den Server ein- und ausschalten, zerlegen,...)
* Virtualisierungs-Schicht
* Betriebssystem, z.B. CentOS, Debian
* Datenbank, z.B. MySQL, MongoDB
* Interpreter, z.B. PHP, Ruby
* Webserver, z.B. Apache
* Framework, z.B. ZEND Framework, Rails
* Fremd-Applikation, z.B. Wordpress, Redmine
* Selbstgeschriebene Applikation

Jeder dieser Schichten gilt es richtig zu konfigurieren
und Sicherheits-Updates einzuspielen.

Wenn es eine Arbeitsteilung zwischen Development und Operations gibt 
ist zu klären wer für welche Schicht zuständig ist.

## Konfiguration + Hardening

Zwei Szenarien:

* Entwicklungs-Rechner: möglichst viele Debug-Möglichkeiten, Bequemlichkeit wichtiger als Sicherheit
* Produktions-Server: Sicherheit wichtiger als Bequemlichkeit, Logging / Monitoring ja, aber nicht öffentlich zugänglich

Dafür gibt es oft schon fertige Konfigurationen, oder Tutorials

* [Suhosin Hardened PHP](http://www.hardened-php.net/)
* [MySQL Hardening](https://www.owasp.org/index.php/OWASP_Backend_Security_Project_MySQL_Hardening)


## Sicherheitsupdates

Keine Software ist sicher, in jeder Software werden Sicherheitsprobleme
entdeckt. Die relevante Fragen sind: werden Sicherheitsprobleme die
bekannt werden möglichst schnell behoben? Und in Folge: Wenn ein Update
zur Verfügung steht, wird es möglichst schnell installiert?

* [Heise Security](http://www.heise.de/security/)

## Meine Verantwortung

An dieser Stelle sollten Sie sich fragen: bei den Webprojekten, an
denen Sie beteiligt waren ... wer ist für welchen Teil der Konfiguration / Updates 
zuständig?  Wo liegt Ihre persönliche Verantwortung?



