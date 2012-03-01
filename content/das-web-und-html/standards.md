---
title: Drei Standards definieren das Web
order: 20
---

Für diese Lehrbuch ist eine technische Sicht auf das World Wide Web die relevante. 
Das World Wide Web ist also ein verteiltes (Client/Server) Informationssystem, 
das durch folgende drei Standards in der jeweils aktuellen Form definiert wird:

* URL  <!-- XE "URL" -->   (Uniform Resource Locators) nach RFC 1738 - http://www.w3.org/Addressing/rfc1738.txt
* HTTP  <!-- XE "HTTP" -->   (Hypertext Transfer Protocol) nach RFC 2616 - http://www.w3.org/Protocols/rfc2616/rfc2616.html
* HTML  <!-- XE "HTML" -->    <!-- XE "XHTML" -->   (Hypertext Markup Language) http://www.w3.org/TR/html5/

Wir befinden uns gerade im Übergang von XHTML auf HTML 5. Noch gibt es 
keinen endgültigen Standard von HTML 5, sondern nur einen „Draft“ – der wird aber 
schon von den gängigen Browsern umgetzt.  Die entsprechenden Dokumente finden Sie unter den oben angebenen URLs am Webserver 
des World Wide Web Consortiums. 

Rund um diese drei Standards ordnen sich weitere wichtige Begriffe an:

Client/Server
-------------

Das Client  <!-- XE "Client" -->  /Server  <!-- XE "Server" -->   Prinzip ist ein allgemeines Prinzip wie 
Dienste in einem Computernetzwerk aufgebaut sein können: Ein Server ist ein Computer der 
einen bestimmten Dienst anbietet, ein Client ist der „Kunde“, also der Computer der den 
Dienst in Anspruch nimmt.
Nach diesem Prinzip funktionieren Web, E-Mail, FTP:

Client
Server
Web
Webbrowser  <!-- XE "Webbrowser" --> \t 
"Siehe Browser"   – lädt Webseiten vom 
Server und zeigt sie am Bildschirm an
Webserver  <!-- XE "Webserver" -->   – liefert 
auf Anfrage die gespeicherten 
Webseiten
E-Mail
E-Mail  <!-- XE "E-Mail" -->   Programm – lädt 
E-Mails vom Server, zeigt sie an, kann 
neue E-Mails an einen Server schicken 
der sie zustellt, …
Mailserver – speichert E-Mail in 
verschiedenen Postfächern, leitet E-
Mail weiter (an den Server der 
EmpfängerIn)
FTP
FTP  <!-- XE "FTP" -->  -Client – lädt Dateien 
von einem Server runter oder auf einen 
Server rauf
FTP-Server – speichert Dateien
Eine Alternative zu Client/Server ist Peer-zu-Peer  <!-- XE "Peer-zu-Peer" -->  . Dabei sind alle 
beteiligten Computer gleichberechtigt, es gibt keine verschiedenen Rollen. Nach diesem 
Prinzip funktionieren Datei-Tauschbörsen.


Webbrowser
----------

Ein Webbrowser, oder kurz Browser  <!-- XE "Browser" -->  , ist ein Programm, das bei Eingabe 
einer URL über HTTP eine HTML-Webseite laden und anzeigen kann, es ist also der Client 
zum World Wide Web. 
Es gibt sehr viele verschiedene Webbrowser. Abbildung 4 zeigt drei davon: den Browser 
„Mosaic  <!-- XE "Mosaic" -->    <!-- XE "Browser:Mosaic" -->  “, der im Jahre 1993 als zweiter Webbrowser 
mit grafischer Oberflächen stark zur Verbreitung des World Wide Web beigetragen hat,  und 
die Browser Opera  <!-- XE "Opera" -->    <!-- XE "Browser:Opera" -->   und Mozilla  <!-- XE "Mozilla" -->    XE 
"Browser:Mozilla"   in den Versionen, die im Jahre 2004 verwendet wurden. 
 
Abbildung 4: Webbrowser: Mosaic (1993), Opera(2004) und Mozilla(2004), Chrome(2011)
Alle eben erwähnten Browser haben gemeinsam, dass sie auf einem typischen „Büro-
Computer“ eingesetzt werden, einem Computer mit grafischer Oberfläche und einem Farb-
Monitor. 
Es gibt aber auch „exotischere“ Browser. Abbildung 5 zeigt den Browser lynx  <!-- XE "lynx" -->    
<!-- XE "Browser:lynx" -->  , der nur Text darstellt, aber keine Bilder. Daneben sehen Sie eine 
„Braille  <!-- XE "Braille" -->   Ausgabezeile“, ein Gerät, das eine Zeile Text in eine Zeile 
Blindenschrift übersetzt. Mit diesem Webbrowser und diesem Ausgabegerät können Blinde 
im Web surfen. 
    
Abbildung 5: Text-Only Browser lynx und Braille Ausgabegerät
In den letzten Jahren haben mobile Geräte mit Internetzugang stark an Bedeutzung 
zugenommen: Smartphones und Tablets. Abbildung 6 zeigt Browser auf verschiedenen 
mobilen Geräten:
 
Abbildung 6: Browser auf mobilen Geräten: Handys und iPad, 2010

Webseite
--------

Die Dokumente, die im Webbrowser dargestellt werden nennt man Webseiten. Eine 
Webseite  <!-- XE "Webseite" -->    <!-- XE "Seite" -->   ist – technisch gesehen – ein Dokument im HTML-
Format. 

Eine Webseite kann – im Gegensatz zu einer Seite in einem Buch – beliebig lang sein. Ist 
die Seite zu groß / zu lang für das Browser-Fenster, dann erscheint ein Scrollbalken  XE 
"Scrollen"   mit dem man den Rest der Seite erreichen kann, wie in Abbildung 7 gezeigt.

Website
-------

Als Webseite wird also ein Dokument bezeichnet. Verwechseln Sie diesen Begriff nicht mit 
dem englischen Wort Website  <!-- XE "Website" -->  . Eine Website besteht aus mehreren 
Webseiten, die zusammen gehören und untereinander verlinkt sind. Achtung: es gibt kein Wort <strike>Webside</strike>. 

 
Abbildung 7: Ein Browser zeigt eine lange Webseite an

URL
---

Eine URL  <!-- XE "URL" -->   ist die Adresse eines Dokuments am Web oder in einem anderen 
Online-Informationssystem. Ein Beispiel:
https://mediacube.at:80/wiki/index.php/ILV_Webprog_1_-_WS_2011#Ablauf
Diese URL zerfällt in 4 Teile:
https
Übertragungsprotokoll (das „s“ am Ende steht für die 
verschlüsselte Variante von http)
mediacube.at
Domain Name (oder IP-Adresse) des Webservers
80
Port am Server. Wenn es  Port 80 ist kann man :80 
weglassen. 
/wiki/index.php/ILV_W..._2011
Wird vom Webserver interpretiert, meist eine Pfad-
Angabe
Ablauf
Textmarke innerhalb des Dokuments – 
wird vom Browser interpretiert wenn das Dokument 
dargestellt wird
Im Zusammenhang mit Web-Formularen werden wir oft mit URLs zu tun haben die 
Parameter enthalten:
http://www.google.com/search?q=schokolade&ie=utf-8&oe=utf-8
Mit den Zeichen ? & = werden hier Parameter  <!-- XE "Parameter" -->   an die URL angefügt.
HTTP-URLs sind nicht die einzigen URLs, ein Beispiel mit einem anderen 
Übertragungsprotokoll:  
mailto:brigitte.jellinek@fh-salzburg.ac.at


HTTP
----

Das Hypertext Transfer Protocol  <!-- XE "Hypertext Transfer Protocol" -->    <!-- XE "HTTP" -->   ist ein 
relativ simples Protokoll, das immer TCP  <!-- XE "TCP" -->   -Verbindungen verwendet. Alle 
Aktivität wird vom Client (=Browser)initiiert.  In der einfachsten Form sieht HTTP so aus (hier 
am Beispiel der URL http://kurse.horus.at/2006-ss/www-
mm/index.html#literatur):
 
1.	Eine URL wird in den Browser eingetippt, oder ein Link wird im Browser angeklickt
2.	Der Browser analysiert die URL und ermittelt daraus den Domain Namen des 
Webservers (kurse.horus.at), löst diese über DNS zur IP-Adresse auf 
(193.80.109.212)
3.	Der Browser baut eine TCP-Verbindung zu 193.80.109.212, Port 80 auf
4.	Er sendet eine http-Anfrage:  
„GET /2006-ss/www-mm/index.html HTTP/1.0\n\n“
5.	Der Webserver nimmt die Anfrage entgegen und analysiert sie. Meistens interpretiert 
er sie als Aufforderung, eine bestimmte Datei von der Platte zu lesen
6.	Der Webserver schickt die http-Antwort an den Browser, diese besteht aus einem 
Statuscode, z. B. „200 OK\n\n“, gefolgt vom Inhalt der Datei index.html. 
7.	Der Browser nimmt das Dokument in Empfang und stellt es geeignet dar
8.	Der Browser scrollt das Dokument bis zur Textmarke literatur
9.	Der Browser beendet die TCP-Verbindung
Die nächste Anfrage des Clients kann sich an einen anderen Server, oder wieder an 
denselben Server richten. Die nächste Anfrage, die der Server beantwortet, kann vom selben 
Client kommen, oder von einem anderen Client. Keiner der beiden (Client und Server) muß 
speichern mit wem er gerade Daten ausgetauscht hat, um die nächste Anfrage 
durchführen/beantworten zu können. Das Protokoll ist also stateless  <!-- XE "stateless" -->    XE 
"zustandslos"  . Dadurch ist es sehr einfach einen Server zu programmieren. 
Das ist nur die einfachste Version des Protokolls, mit Proxies, Caching und Keep-Alive wird 
es komplizierter. 

