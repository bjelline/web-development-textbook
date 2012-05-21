---
title: AJAX Irrwege
order: 40
---

Wie im vorigen Kapitel gelernt ist AJAX die englische Abkürzung für „Asynchrones 
Javascript und XML“. Mit AJAX kann man Webseiten verbessern – man kann sie aber 
auch verschlechtern.

## Schlechte Verwendung von AJAX

Stellen Sie sich vor Sie haben eine Website mit 8 statischen HTML-Seiten, die
durch einfache Links verbunden sind. Wenn man AJAX kennen lernt, kommt man vielleicht
auf die Idee: statt normaler Links verwendet man nur noch `load()`  Was spricht
dafür?

* Man zeigt seine fortgeschrittenen Programmierkenntnisse (und kommt sich ent- sprechend cool vor)
* Das Laden der einzelnen Seite geht schneller, da nur der Inhalt, nicht aber z.B. der HTML `<head>` geladen werden muß. Das spart dutzende Byte.

Nun  surfen wir durch diese Site und beobachten in Firebug welche http-Requests
gemacht werden 

![AJAX statt normaler Links - eine schlechte Idee](/images/ajax-bad.png)

Beim Anklicken des „Links“ wird jeweils ein GET 
Request abgesetzt. Aber: die URL in der Adresszeile des Browsers bleibt immer
gleich.  Keine der „Seiten“ hat eine eigene URL.
Das hat viele Auswirkungen, unter anderem:

* Man kann keinen Link zu einer bestimmten Seite setzen – nur zur „Startseite“
* Man kann kein Lesezeichen (Bookmark, Favoriten) auf eine bestimmte Seite setzen
* Google „sieht“ den Text der einzelnen Seite nicht 

Vergleicht man Vor- und Nachteile sieht man schnell, dass in diesem Fall die
Version ohne AJAX (ganz normale Links) besser wäre.

§
  
Wann ist der Einsatz von AJAX sinnvoll? Wann sollte man darauf verzichten? Um
diese Frage zu beantworten brauchen wir eine Idealvorstellung wie eine Web-Site oder
Web-Applikation funktionieren soll. Ein Prinzip haben wir schon kennen 
gelernt, in diesem Kapitel kommt ein zweites, technischeres dazu:

# Progressive Enhancement / Graceful Degradation
# REST

**Progressive Enhancement** wurde im Kapitel 
[jQuery](/jquery/unobstrusive/) bereits vorgestellt: Eine Webseite sollte
auch im primitivsten Ausgabegerät noch funktionieren, also z.B. ohne Javascript.
Was Javascript an zusätzlichen Features bringt soll nicht auf Kosten der
Grundfunktion geben, sondern nur die vorhandene Funktion erweitern.




9.2.2 REST – Representational State Transfer
Der Begriff “REST” wurde von Roy Fielding 2000 in seiner Dissertation definiert
.
Fielding hat unter anderem an der HTTP-Spezifikation und an WebDAV
mitgearbeitet. In 
seiner Dissertation stellt er grundlegende Überlegungen zur Architektur von
verteilten 
Systemen an. Die Grundfrage könnte man so stellen: das Web ist ein sehr
erfolgreiches 
verteiltes System, viele Hersteller entwickeln dafür Software (Microsoft,
Mozilla, IBM, …) 
und die Zusammenarbeit funktioniert. Es gibt viele Komponenten die erfolgreich
zu-
sammenspielen (Browser, Server, Proxies, Suchmaschinen, Browser-Erweiterungen, 
…). Welche Eigenschaften des Webs führen dazu, dass es zu diesem erfolgreichen
Zu-
sammenspiel kommen kann?
REST ist – nach der Analyse von Fielding – die zugrundeliegende Architektur des
Webs. 
Wenn man versucht, beim Bau einer Web-Applikation die Prinzipien von REST
einzuhal-
ten dann wird diese Applikation sich besonders gut in die vorhandene
Infrastruktur des 
Web (Server, Browser, Proxies, Caches, etc.) einpassen und davon profitieren.
Wenn 
man REST missachtet wird die Infrastruktur nicht funktionieren.
In der REST-Terminologie ist das Web ist eine Ansammlung von „Ressourcen“. In
die-
sem Skriptum wird für Ressourcen auch der Begriff „Dokumente“ verwendet. Wir
gehen 
hier nicht direkt von Fieldings Dissertation aus, sondern von der vereinfachten
Darstel-
lung in Tilkov(2007). Die REST-Prinzipien sind (vereinfacht):
1.  Gib jedem Dokument eine eindeutige URL.
2.  Dokumente sollen Links auf andere Dokumente enthalten.
3.  Verwende die HTTP-Methoden GET, POST, PUT, DELETE;  
Verwende sie ihrer Bedeutung entsprechend.
4.  Ein Dokument kann auf verschiedene Arten repräsentiert werden (kann in ver-
schiedenen Datentypen geliefert werden: HTML, XML, JSON, …).
5.  Zustandslosigkeit = Statelessness.
Im Folgenden finden Sie zu jedem dieser Punkte eine kurze Erklärung. 
9.2.3 Jedes Dokument soll eine eindeutige URL haben
Wenn jedes Dokument eine URL hat, dann ist es verlinkbar, kann in Lesezeichen
ge-
speichert werden, kann von Google gefunden und verlinkt werden, etc.
Wenn Sie eine statische Webseite bauen erzeugen Sie die URLs beim Festlegen der 
Dateinamen. Bei einer PHP-Applikation sind es die Dateinamen und die GET-
Parameter, die die URL ausmachen. In der Datenbank-Applikation, die wir in den
letzten 
Kapiteln gebaut haben, waren die URLs:
http://ich.multimediatechnology.at/mini/index.php 
http://ich.multimediatechnology.at/mini/personen.php  
http://ich.multimediatechnology.at/mini/person.php?pid=1 
http://ich.multimediatechnology.at/mini/person.php?pid=2 
http://ich.multimediatechnology.at/mini/person.php?pid=3
und so weiter. Das ist schon sehr nahe am REST Ideal.
http://ich.multimediatechnology.at/mini/
http://ich.multimediatechnology.at/mini/personen
http://ich.multimediatechnology.at/mini/person/1 
http://ich.multimediatechnology.at/mini/person/2 
http://ich.multimediatechnology.at/mini/person/3 
Diese Schreibweise kann man (auf einem Apache Webserver) mit Hilfe des Rewrite
Mo-
duls konfigurieren. Damit werden die URLs am Server „übersetzt“. Im Konkreten
Beispiel 
müsste man in die Datei .htaccess im Ordner mini schreiben:
RewriteEngine On

RewriteRule ^personen$     personen.php  [L]
RewriteRule ^person/(.*)   person.php?pid=$1  [L]
Umsetzung: die Umstellung auf diese URLs hat Auswirkungen falls sie relative
Links 
verwendet haben, um z.B. auf Stylesheets zu verweisen. Deswegen rate ich von
einer 
nachträglichen Umstellung der URLs ab – das ist sehr viel mehr Arbeit als man
denkt. 
9.2.4 Dokumente sollen Links auf andere Dokument enthalten
Dieses Prinzip haben wir in allen bisher gezeigten Beispielen erfüllt.
Umsetzung: dieses Prinzip müssen Ihre Web-Applikationen auf jeden Fall erfüllen.
9.2.5 HTTP-Methoden GET, POST, PUT, DELETE
Wie sollen diese Methoden verwendet werden? Jede Methode hat eine Bedeutung:
GET
Eine Repräsentation einer Ressource soll geholt werden. Das verändert 
nichts an der Ressource, diese Methode ist also harmlos.
POST
Eine Ressource (die bisher noch keine URL hatte) soll neu erzeugt 
werden. Z.b. könnte ein POST auf /dings/ eine neue Ressource mit der 
URL /dings/17 erzeugen
PUT
Diese Methode dient zum Speichern einer Ressource unter der  ange-
gebenen URL. Diese Methode steht bei normalen Web-Formularen 
aber nicht zur Verfügung. Deswegen wird statt dessen meist ein POST 
auf eine übergeordnete Ressource verwendet. 
DELETE
Diese Methode dient zum Löschen einer Ressource. Auch diese Me-
thode steht bei normalen Web-Formularen nicht zur Verfügung.
Umsetzung: in diesem Semester ist wichtig, dass Sie GET und POST korrekt
einsetzen. 
Erst im Schwerpunkt-Unterricht werden wir die anderen Methoden verwenden. 
9.2.6 Ein Dokument – mehrere Repräsentationen
Ein Dokument kann auf verschiedene Arten repräsentiert werden: z.B. kann die
Darstel-
lung einer Person in HTML, XML und JSON erfolgen. Die HTML-Variante kennen Sie 
schon:
<h1>Details zu einer Person</h1>
<p><img src="http://multimediaart.at/media/profil/edvard_1_2.jpg" />
Herr Edvard Paul Beisteiner hat insgesamt 4 Werke in dieser Datenbank.
Er hat den Usernamen fhs14287.</p>
<ul>
<li><a href='werk/24'>The Thin Red Line</a></li>
<li><a href='werk/50'>Der böse Wolf</a></li>
<li><a href='werk/83'>nimm zwei, schatz</a></li>
<li><a href='werk/303'>the neighbour.</a></li>
</ul>
Dieselbe Person könnte man auch als XML darstellen, z.B. als:
<person>
<image ref='http://multimediaart.at/media/profil/edvard_1_2.jpg' />
<vorname>Edvard</vorname>
<nachname>Beisteiner</nachname>
<username>fhs14287</username>
<werke>
<werk ref='http://ich.multimediatechnology.at/mini/werk/24'>The Thin Red 
Line</werk>
<werk ref='http://ich.multimediatechnology.at/mini/werk/50'>Der böse Wolf</werk>
<werk ref='http://ich.multimediatechnology.at/mini/werk/83'>nimm zwei, 
schatz</werk>
<werk ref='http://ich.multimediatechnology.at/mini/werk/303'>the neigh-
bour.</werk>
</werke>
</person>
Dieselbe Person als JSON:
{"image":"http://multimediaart.at/media/profil/edvard_1_2.jpg",
 "vorname":"Eduard",
 "nachname":"Beisteiner",
 "werk":[
    {"titel":"The Thin Red Line",
     "url":"http://ich.multimediatechnology.at/mini/werk/24"},
    {"titel":"Der böse Wolf",
     "url":"http://ich.multimediatechnology.at/mini/werk/50"},
    {"titel":"nimm zwei, schatz",
     "url":"http://ich.multimediatechnology.at/mini/werk/83"},
    {"titel":"the neighbour.",
     "url":"http://ich.multimediatechnology.at/mini/werk/303"}]}
Besonders praktisch ist das, wenn ich Teile meiner Applikation später
AJAXifizieren will: 
ich kann die schon vorhandenen Ressourcen weiter nutzen, aber einfach die XML-
oder 
JSON-Repräsentation abfragen.
Ob die Repräsentation als Teil der URL, als URL-Parameter oder nur als
http-Header 
spezifiziert werden soll ist umstritten. RESTfull ist eigentlich nur die Abfrage
im http-
Header:
GET /mini/person/3 HTTP/1.1
Host: ich.multimediatechnology.at 
Accept: text/html
Bzw.
GET /mini/person/3 HTTP/1.1
Host: ich.multimediatechnology.at 
Accept: application/xml
Eine beliebte Vereinfachung ist die Verwendung von Endungen in der URL:
http://ich.multimediatechnology.at/mini/person/83.html 
http://ich.multimediatechnology.at/mini/person/83.xml 
http://ich.multimediatechnology.at/mini/person/83.json
Umsetzung: Diesen Aspekt von REST werden wir erst im Schwerpunkt-Unterricht um-
setzen. 
9.2.7 Zustandslosigkeit = Statlessness.
Zustandslosigkeit ist ein sehr wichtiges Prinzip im Web. Was das bedeutet zeigt
man am 
einfachsten an einem Gegenbeispiel: Wenn ich im Katalog der FH-Bibliotek 
(http://alephino.fh-salzburg.ac.at/) nach Büchern suche (hier mit dem Suchwort
„Web“) 
erhalte ich folgende URL:
http://alephino.fh-salzburg.ac.at/alipac/PUETBNRDHSZGNYLBXVFF-00020/find-
simple?C1=(&V1=Web&C2=)&F1=TIT&A1=N&x=0&y=0
Wenn ich diese URL zwei Tage später wieder verwende erhalte ich keine Antwort
mehr, 
sondern die Fehlermeldung:
 
Abbildung 52: Fehlermeldung von ALEPHINO, einer Webapplikation mit zuviel State
Warum ist das so?  Auch zwei Tage später sollte die Ressource „Liste der Bücher
mit 
dem Wort ‚Web’ im Titel“ noch vorhanden sein!
Die Antwort ist: Alephino legt zu viel Wert auf den State – den Zustand der
Session.
Nach dem REST-Prinzip sollte man also den Zustand der Session nur dann
verwenden, 
wenn er unbedingt notwendig ist. Z.B. könnte man denken „Liste meiner
ausgeliehenen 
Bücher“ sei von der Session abhängig. Aber selbst hier könnte man eine fixe URL
ver-
wenden:
http://alephino.fh-salzburg.ac.at/alipac/entlehnte/fhs007
Auf diese URL muß es nun Zugriffsbeschränkungen geben: nur ich und die
Bibliotheka-
rIn darf zugreifen. Alle anderen erhalten keinen Zugriff sondern den Statuscode
403 
Access Denied. Die BibliothekarIn hat aber Zugriff auf alle URLs dieser Form.
Umsetzung: Diesen Aspekt von REST können und sollen Sie voll umsetzten. Verwen-
den Sie nur die php-SESSION um den Zustand der Applikation zu speichern, und
gehen 
Sie möglichst sparsam damit um.
9.3 Daten aus Web-Formularen verarbeiten
9.3.1 Clientseitige Datenprüfung mit AJAX-Nachfrage beim Server
In der Webapplikation soll bei Eingabe eines Usernamens sofort am Server
nachgefragt 
werden ob dieser Username schon in Verwendung ist. Falls ja soll eine
Fehlermeldung 
angezeigt werden:
 
Abbildung 53: Clientseitige Datenprüfung mit AJAX-Nachfrage beim Server
Als Auslöser der Prüfung wird das change-Event des Eingabefeldes verwendet:
$("input[name=uid]").change(function(){
    ...
});
Das Programm am Server ist sehr simpel: der Aufruf erfolgt über die URL
username_free.php?uid=hansi
Die Antwort ist plaintext: entweder 1 für wahr (Username ist frei) oder 0 für
falsch 
(Username schon vergeben).
Die Anfrage vom Client an den Server wird über die get-Funktion von jQuery
gesendet. 
Dabei muß eine Callback-Funktion angegeben werden, die aufgerufen wird sobald
die 
Antwort des Servers vorliegt:
$.get('username_free.php', { 'uid': 'hansi' }, handle_data);
Die Callback-Funktion hat nur ein Argument, über dieses erhält sie die gesamten
Daten 
vom Server:
function handle_data(data) {
   ...
}
Aus diesen Einzelteilen können Sie nun die Applikation bauen.
9.3.2 Autocomplete
Mit dem jQuery-Plugin autocomplete  können Sie für ein Eingabefeld Vorschläge
vom 
Server laden. Das Programm am Server soll einen Parameter q verarbeiten und eine 
Liste in Plaintext ausgeben.
  
Abbildung 54: Mit dem jQuery-Plugin autocomplete werden Vorschläge für die
Eingabe über AJAX geladen
9.4 Quellenverzeichnis
Fielding, Roy(2000): Architectural Styles and the Design of Network-based
Software 
Architectures. Dissertation. University of California/Irvine, USA.
Fielding, Roy / Taylor, Richard(2002): Principled design of the modern Web
architecture. 
In: ACM Transactions on Internet Technology (TOIT), Vol. 2, No. 2, May 2002.
Seite 
115–150.
Tilkov, Stefan(2007): A Brief Introduction to REST. In: InfoQ. 
http://www.infoq.com/articles/rest-introduction. Abgerufen am 24.7.2008.

