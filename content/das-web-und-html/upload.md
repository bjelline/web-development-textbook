---
title: Upload und Tools
order: 40
---

Der HTML-Code ist fertig, aber damit ist die Arbeit noch lange nicht vorbei.

Validator  
---------

<!-- XE "Validator" -->  
Um Fehler im HTML-Code zu finden reicht ein Webbrowser nicht aus. Wie oben beschrieben 
sind Webbrowser sehr tolerant, was kaputten Code  <!-- XE "Code" -->   betrifft. Eine strenge 
Prüfung  <!-- XE "Prüfung:von HTML Code" -->   des HTML-Codes macht der Validator des W3C: . 
http://validator.w3.org/
 
![Abbildung 11:  Der HTML-Validator des World Wide Web Consortiums](/images/image050.png)


Die Fehlermeldungen des Validators muss man sorgfältig lesen, von oben nach unten 
durcharbeiten und reparieren. Mit etwas Glück repariert man das erste Problem und viele 
Folge-Fehler fallen damit auch weg.
 
![Abbildung 12:  Fehlermeldung des Validators](/images/image052.png)

Die Fehlermeldung in Abbildung 12 geht auf einen Tippfehler zurück: der schließende Tag 
wurde falsch geschreiben. Wenn der Code dem HTML-Standard entspricht erscheint eine 
Erfolgsmeldung:
 
![Abbildung 13:   Erfolgsmeldung des Validators](/images/image053.png)

Upload  
------

<!-- XE "Upload" -->  
Die fertige Webseite muss auf einem Webserver veröffentlicht werden. In der FH steht Ihnen 
zwei Webserver zur Verfügung: www.users.fh-salzburg.ac.at und 
multimediatechnology.at. Zweiteren werden wir in dieser Lehrveranstlatung verwenden.
Um die Daten vom eigenen Computer auf den Webserver zu laden gibt es verschiedene 
Methoden, die wichtigsten sind FTP  <!-- XE "FTP" -->  , WebDAV  <!-- XE "WebDAV" -->  , SFTP  XE 
"SFTP"  . 

Bei jeder Upload-
Methode brauchen Sie folgende Informationen: den Namen des Servers, Usernamen, 
Passwort, in welchen Ordner Sie die Daten speichern, unter welcher URL die Daten im Web 
sichtbar sind.

Ein hypothetisches Beispiel: Auf dem Server meinhoster.at ist auch ihre
Domain meinefirma.at untergebracht. Die Konfiguration ist wahrscheinlich so ähnlich:

* Name des SFTP- Servers: meinhoster.at
* Port für SFTP 4711
* Username + Passwort
* Ordner bei Upload public_html/
* URL http://meinefirma.at

Ein paar Programme zum Upload, die Sie selbst installieren können

* Secure File Transfer Client  <!-- XE "Secure File Transfer Client" -->  : nur für SFTP, nur auf Windows.
* FireFox  <!-- XE "FireFTP" -->    <!-- XE "Firefox AddOn:FireFTP" -->  : AddOn von Firefox, freie Software, können Sie selbst installieren, auf Windows und Mac.
* Dreamweaver  <!-- XE "Dreamweaver" -->  :  Upload ist nach der Definition einer „Site“ mög- lich, auf Windows und Mac.

Achten Sie beim Upload darauf, dass die Ordnerstruktur  <!-- XE "Ordnerstruktur" -->   und die relative 
Position der Dateien beibehalten wird; nur dann funktionieren die relativen Links!  XE "re-
lativer Link"    <!-- XE "Link:relativ" -->  

Dreamweaver und FireFTP bieten Hilfe beim Erhalt der Struktur. In Abbildung 14 wurde recht 
(am lokalen Computer) eine Datei ausgewählt und dann der Button „Datei 
bereitstellen“ gedrückt. Dreamweaver beachtet, dass die Datei lokal im Ordner html-ue1 
liegt, und lädt Sie in den entsprechenden Ordner am Webserver hoch.
 
![Abbildung 14: Site-Fenster von Dreamweaver – Upload einer Datei automatisch in den richtigen Ordner](/images/dreamweaver-upload.png)

Abbildung 15 zeigt, was Sie nicht tun sollten: die Datei mit Drag-and-Drop in den falschen 
Ordner am Webserver hinaufladen.  Dann funktionieren die relativen Links nicht mehr.
 
![Abbildung 15:  Upload mit Dreamweaver in den falschen Ordner](/images/dreamweaver-upload-falsch.png)
Bevor Sie FTP im Dreamweaver Site-Fenster benutzen können müssen Sie 
(Unter SITE → SITES VERWALTEN → BEARBEITEN → ERWEITERT → REMOTE-INFORMATIONEN) die richtige 
Konfiguration eintragen, wie in Abbildung 16 gezeigt.
  
![Abbildung 16: Bearbeiten der FTP-Information in Dreamweaver](/images/dreamweaver-upload-config.png)

![Abbildung 17: Dateien-Fenster in Dreamweaver: Umschalten zwischen 2 Ansichten + Upload](/images/image064.png)

Die anderen erwähnten Programme funktionieren sehr ähnlich.

