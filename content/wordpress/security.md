---
title: Security
order: 40
---
Im Zusammenhang mit Wordpress haben Sie drei verschiedene Usernamen + Passwörter:

1. Server Username und Passwort, für den Upload von Dateien mit SFTP auf den Server
2. Datenbank-Name, Datenbank-Username und Passwort, für die MySQL Datenbank. Diese Datenbank können Sie auch noch für andere Dinge als Wordpress verwenden, in einer Datenbank können viele Tabellen gespeichert weren. 
3. Wordpress-Username und Passwort, dient nur für die Arbeit in Ihrem eigenen Wordpress-Blog.  

Achten Sie bei der Verwendung von Passwörter darauf, dass sie nicht unverschlüsselt über das Internet übertragen werden:

z.B:

* Upload mit SFTP = verschlüsselt
* Upload mit FTP = unverschlüsselt
* Eingabe in einen Webbrowser auf einer URL die mit https:// beginnt = verschlüsselt
* Eingabe in einen Webbrowser auf einer URL die mit http:// beginnt = unverschlüsselt

Besonders wichtig ist diese Vorsichtsmaßnahme wenn Sie in einem W-LAN arbeiten: im W-LAN können alle anderen Computer, die das W-LAN auch benutzen, Ihren Datenverkehr „mithören“. In einer Hochschule mit Informatik-Studiengang sind das Viele!  „Am Kabel“ ist die Abhörgefahr etwas geringer. 


![Abbildung 104: Wordpress Backend ohne https](/images/wordpress-insecure.png)

Hier fragt Wordpress nach dem ersten Usernamen + Passwort (für den Upload auf den Server) weil es nur damit die Automatische Installation des Themes machen kann.  Die Frage nach FTP oder SFTP in der Seite ist irreführend: Der lange Weg von meinem Laptop bis zum Server (der im ersten Schritt übers W-LAN geht) ist unverschlüsselt. Das Verschlüsselte SFTP wird nur am Server selbst verwendet – dort wo niemand etwas abhören könnte:


![Abbildung 105: Verschlüsselte und Unverschlüsselte Verbindungen beim Automatischen Installieren von Themes](/images/wordpress-security-illu.png)

Die Alternative zur automatische Installation ist der Upload der Dateien per SFTP. Dabei wird das Passwort verschlüsselt übertragen.

          
![Abbildung 106: Verschlüsselte Verbindungen beim Upload von Themes mit SFTP](/images/wordpress-security-illu-2.png)


