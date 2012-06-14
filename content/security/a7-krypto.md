---
title: Kryptografisch unsichere Speicherung
order: 70
---

Die OWASP beschreibt dieses Problem allgemein so:

> Fehlende Verschlüsselung vertraulicher Daten ist die häufigste Schwachstelle, gefolgt von unsicherer Schlüsselerzeugung, der Speicherung statischer Schlüssel und die Nutzung schwacher Algorithmen. Schwache Hashwerte ohne Salt kommen zum Passwortschutz oft vor. Ein eingeschränkter Zugriff lässt externe Angreifer solche Probleme i.d.R. nicht leicht entdecken. Den nötigen Zugriff müssen sie vorher auf andere Weise erlangen.


## Passwörter vermeiden

Es gibt mehrere Alternativen zum Speichern von Passwörtern.

Mit OAuth oder OpenID kann man die Authentisierung einem anderen Anbieter
überlassen.  Für die BenutzerInnen meiner Site heisst es dann nicht "erfinde ein
Passwort", sondern "Login with Facebook".

Beispiele:

* [Facebook Authentication](https://developers.facebook.com/docs/authentication/)
* [Twitter Authentication](https://dev.twitter.com/docs/auth/oauth/single-user-with-examples)
* [Google Authentication](https://developers.google.com/accounts/docs/OAuth2)

Eine Alternative die nicht mit einem Social Network verknüpft ist, 
ist BrowserId von Mozilla. Dabei dient die E-Mail Adresse zur Identifikation.

* [BrowserId](https://browserid.org/)

## Passwörter Speichern

Wenn man BenutzerInnen auffordert Usernamen + Passwort zu erfinden, 
muss man damit rechnen dass Passwörter wiederverwendet werden.  Es geht
also bei der Sicherheit von Passwörtern nicht nur um meine eigene
Web-Applikation, die Passwörter die ich sicher halte oder verliere gelten
wahrscheinlich auch für andere, wichtigere Services!

Level 0: unverschlüsselt Speichern. Diese Variante hat den scheinbaren
"Vorteil", dass man den BenutzerInnen "vergessen Passwörter" wiedergeben kann.
Diese Variante ist auf jeden fall zu vermeiden!

Level 1: Passwörter Hashen und speichern. Diese Variante ist marginal besser.
Hier ist ein Angriff mit "Rainbow Tables" möglich: Lange Listen von gängigen
Passwörtern und den dazugehörigen Hash-Werten.

Level 2: gesalzene Passwörter, stärkere Hashes.  Das ist der aktuelle Stand der
Technik.

[Bachfeld(2011): Cracker-Bremse - Passwörter unknackbar speichern. In c't 13/2011](http://www.heise.de/security/artikel/Passwoerter-unknackbar-speichern-1253931.html?view=print)

Bachfeld verweist auf die PHP Library [PHPpass](http://www.openwall.com/phpass/)


