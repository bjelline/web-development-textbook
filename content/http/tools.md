---
title: Werkzeuge
order: 33
---

Wie kann man HTTP untersuchen? 


HTTP abhören
--------------
Wie können Sie HTTP beobachten?  Mit einem allgemeinen
**Netzwerk-Sniffer** wie [Wireshark](http://www.wireshark.org/) oder mit Browser-AddOns
wie [Live HTTP Headers](https://addons.mozilla.org/en-US/firefox/addon/live-http-headers/)
oder [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/?src=search). 

### Wireshark

Mit Wireshark können Sie den gesamten Netzverkehr abhören, der für Ihren
Computer sichtbar ist.  Das sind nicht nur Pakete die HTTP betreffen, sondern
auch noch viele andere. 


![Netzverkehr abhören mit Wireshark](/images/wireshark-fullscreen.png)

Die einzelnen Pakete kann man von Wireshark wieder
zusammesetzen lassen: mit einem "Rechtsklick" auf ein bestimmtes Paket und
der Auswahl des Menüpunktes "Follow TCP Stream".

![Ein HTTP Request + Response, abgehört mit Wireshark](/images/wireshark-http.png)

### Firebug

Firebug kann nur den Verkehr zwischen Browser und Webservern abhören, also weniger als Wireshark.
Aber: Firebug kann auch HTTPS-Verbindungen abhören, die er selbst aufgebaut hat.  Wireshark
würde hier nur die Verschlüsselten Daten sehen.

Firebug zeigt mehrere Requests auf einmal an, nämlich alle die zur selben "Seite" gehören.
In dieser Ansicht kann man gut sehen in welcher Reihenfolge die Requests erfolgen und wie
lange die Beantwortung jeweils dauert:

![Darstellung von HTTP-Requests im Netzwerk-Panel von FireBug](/images/firebug-network.png)

Um Details eines Requests zu sehen muss man ihn "aufklappen".  Achtung: hier sieht
man zuerst die Header des **Response** und dann erst die Header des **Request**.

![Darstellung von einem HTTP-Request im Netzwerk-Panel von FireBug](/images/firebug-network-detail.png)

Um Request und Response genauer zu studieren ist es oft hilfreich die Daten
in einen Text-Editor zu kopieren:

![Darstellung von einem HTTP-Request im Netzwerk-Panel von FireBug](/images/firebug-network-copy.png)

