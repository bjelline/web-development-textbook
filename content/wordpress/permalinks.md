---
title: Permalinks
order: 130
---

Ein Grundprinzip des Webs lautet: URLs verändern sich nicht - siehe [Berners-Lee](http://www.w3.org/Provider/Style/URI.html).

In Wordpress erhalten Beiträge und Seiten bei Ihrer Erstellung eine
fixe URL - genannt "Permalink" - die sich nie wieder ändert.
Auf der Homepage werden immer die neuesten Beiträge angezeigt, jeder
dort angezeigt Anreisser ist aber bereits mit dem vollen Beitrag
unter seiner endgültigen URL verlinkt.

Permalinks konfigurieren
-------------------

Im Backend unter Einstellung &rarr; Permalinks kann man die Form der
URLs konfigurieren.

![Permalinks konfigurieren](/images/wordpress-permalinks.png)

Betrachten wir die Form "Tag und Name" näher:

   `http://mozartchor.at/2013/02/28/Beispielbeitrag/`

Hier scheint es eine Ordnerstruktur aus Jahr, Monat, Tag und
Titel des Beitrags zu geben.  Wenn der Beitrag einen längeren
Titel hat werden Sonderzeichen entfernt und Leerzeichen durch 
Minus-Zeichen ersetzt:

* Beitragstitel = Bericht über das Probenwochenende in Brixen
* Permalink = http://mozartchor.at/2013/02/28/bericht-uber-das-probenwochenende-in-brixen

Diese Form des Permalinks ist nicht nur gut lesbar, sondern
bringt eventuell positive Effekte bei Suchmaschinen: Wird bei
einer Suchmaschine nach dem Wort "Brixen" gesucht, dann werden
jede Suchergebnisse zuerst angezeigt, bei denen das Wort besonders
prominent vorkommt: also im Titel der Seite, als Überschrift, oder
in der URL.

mod_rewrite
-----------

Normalerweise entspricht die URL einfach der
Ordnerstruktur und dem Dateinamen im Filesystem des Webservers.
Im Fall von Wordpress wäre das also einfach `index.php` als
Dateiname des PHP-Programmes.

Um die Verwendung von anderen URLs zu ermöglichen
muss man den Webserver Apache entsprechend um-konfiguriere.
Dazu ist das Apache Modul `mod_rewrite` notwendig, das
aber meist schon installiert ist.

§

Wordpress braucht folgende Konfiguration in der Datei `.htaccess`:

    <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.php$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.php [L]
    </IfModule>

Diese Konfiguration bewirkt:

* falls die Datei index.php direkt angefordert wird, wird sie aufgerufen
* falls ein Dateiname oder ein Ordnername direkt angefordert wird, wird das normal von Apache behandelt
* in allen anderen Fällen wird auch index.php aufgerufen - die Information über die genaue URL steht dem Programm aber zur Verfügung

Wordpress liest die Information über die volle URL aus, und interpretiert
sie wie unter Einstellung &rarr; Permalinks festgelegt.

