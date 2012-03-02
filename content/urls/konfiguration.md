---
title: Konfiguration
order: 20
---

Die Konfiguration des Webservers wird hier am Beispiel von Apache gezeigt. Andere Webserver (z.B: Internet Information Server von Microsoft) verfügen auch über diese Fähigkeiten, werden aber anders konfiguriert.

### Betriebssystem des Webservers
Viele Webserver werden auf einem UNIX-Betriebssystem betrieben. Die UNIX-Dateisysteme unterscheiden bei Datei- und Ordnernamen zwischen Groß- und Kleinschreibung, sind also „case-sensitive“. Der Rechner auf dem Sie Webseiten erstellen läuft wahrscheinlich unter Windows oder MacOS; dort sind die Dateisysteme „case-insensitive“.

Ein Link auf die Datei `bild.JPG` funktioniert unter Windows oder MacOS auch, wenn er `bild.jpg` geschreiben wird.

Liegt die Datei aber dann am (UNIX-)Webserver, so funktioniert der Link nicht mehr! `bild.jpg` und `bild.JPG` sind zwei unterschiedliche Dateien!

### Webspace und Ordner
Im einfachsten Fall wird im Webserver ein Ordner spezifiziert, der als Ausgangspunkt für den Webspace dient.

|URL                      |Pfad im Dateisystem|
|+------------------------|+------------------|
|http://mediacube.at/pix/weg-zur-saline.jpg | /var/www/virthosts/mediacube.at/pix/weg-zur-saline.jpg
{: class="table table-condensed table-bordered" style="width:auto"}

Die Apache-Konfiguration dazu sieht so aus:

    <VirtualHost mediacube.at>
    DocumentRoot /var/www/virthosts/mediacube.at/
    </VirtualHost>

### Standard-Dokument

Endet eine URL auf einen Schrägstrich, dann verweist sie eigentlich auf einen ganzen Ordner, nicht auf eine spezielle Datei. Für diesen Fall kann im Webserver ein Standard-Dokument definiert werden. Auf allen Webservern der FH ist dies die Datei `index.html`.  d.h. wenn eine URL auf einen Ordner verweist, und in diesem Ordner eine Datei mit Namen `index.html`  existiert, dann wird diese Datei geliefert.

|URL                      |Pfad im Dateisystem|
|+------------------------|+------------------|
|http://mediacube.at/     |/var/www/virthosts/mediacube.at/index.html|
|http://mediacube.at/pix/ |/var/www/virthosts/mediacube.at/pix/index.html|
{: class="table table-condensed table-bordered" style="width:auto"}


Die Apache-Konfigurationsanweisung dazu lautet

    DirectoryIndex index.html

Achtung: die Konfiguration ist am Internet Information Server normalerweise anders, dort wir die Datei `default.htm` verwendet!

Was passiert wenn keine Datei mit dem richtigen Namen vorhanden ist? Die zwei Möglichkeiten sehen Sie in Abbildung 43: entweder eine Auflistung der Dateien im Ordner oder eine Fehlermeldung.

![Abbildung 43: Zugriff auf einen Ordner ohne Standard-Dokument (index.html): Auflistung oder Fehlermeldung](/images/apache-directory-index.png)

Die entsprechenden Apache-Konfigurationsanweisung dazu sind:

    Options +Indexes
    Options -Indexes


### Automatischer Webspace für Alle

Auf UNIX-Servern mit vielen Accounts ist es üblich, dass  für jeden Account automatisch ein Webspace exsitert. Dieser Webspace befindet sich innerhalb des Home-Verzeichnisses des jeweiligen Accounts. Z.B. könnte eine Studentin den Username fhs303030 habe und das Home-Verzeichnis /home/store/fhs303030/. Ihr Webspace ist im Unter-Ordner htdocs: 

|URL                      |Pfad im Dateisystem|
|+------------------------|+------------------|
|http://www.users.fh-salzburg.ac.at/~fhs303030/test.html |/home/store/fhs303030/htdocs/test.html|
|http://www.users.fh-salzburg.ac.at/~fhs111111/test.html |/home/store/fhs111111/htdocs/test.html|
{: class="table table-condensed table-bordered" style="width:auto"}

Beachten Sie: für das Formulieren von relativen URLs sind nur die URLs relevant, nicht die Position der Dokumente im Dateisystem! Der Ordnername htdocs wird also nie in einer URL vorkommen.

Der Link von einem User-Webspace zum nächsten funktioniert also so:

    http://www.users.fh-salzburg.ac.at/~fhs303030/test.html   
                                  +    ../~fhs111111/test   =
    http://www.users.fh-salzburg.ac.at/~fhs111111/test

Oder relative zum Webserver:

    http://www.users.fh-salzburg.ac.at/~fhs303030/test.html   
                                 +    /~fhs111111/test   =
    http://www.users.fh-salzburg.ac.at/~fhs111111/test

Die Apache Konfigurationsanweisung lautet:

    UserDir htdocs


