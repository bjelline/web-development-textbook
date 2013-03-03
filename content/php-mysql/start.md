---
title: PHP und MySQL/MariaDB
order: 10
---

Mit der Verwendung einer Datenbank wird der Ablauf noch einmal komplexer:

![Webseite wird von PHP erzeugt, mit DB-Abfrage](/images/php-db.svg)

Ob der Datenbank-Server und der Webserver auf dem selben Computer laufen
oder auf verschiedenen macht für die Programmierung kaum einen Unterschied.


MySQL von PHP aus
------------------
Um von PHP auf die Datenbank zuzugreifen gibt es verschiedene Schnittstellen. Hier werden die „PHP Database Objects“ (PDO) vorgestellt.

### Verbindungsaufbau

So funktioniert der Verbindung-Aufbau (und -Abbau) zur mysql-Datenbank:

<php caption="Verbindungs-Aufbau und Abbau">
    <?
     include "config.php";
     $dbh = new PDO($DSN, $DB_USER, $DB_PASS);
     $dbh->exec('SET CHARACTER SET utf8');
    ?> 
</php> 

Das „Database-Handle“ `$dbh` wird nun im Weiteren für Abfragen verwendet. 

### Datenbank-Zugangsdaten und .gitignore

Achtung: zum Erzeugen des Database Handles brauchen wir noch eine zweite Datei mit den eigentlichen Zugangsdaten. Diese Datei heisst im unserem Beispiel `config.php`:

<php caption="Zugangsdaten für die Datenbank">
    <?php
    $DB_NAME = "portfolio_sandbox"; 
    $DB_USER = "mmtuser"; 
    $DB_PASS = "geheim!";
    $DSN     = "mysql:dbname=$DB_NAME;host=localhost";
    ?>
</php>

Warum zwei Dateien?  Weil dieses zweite Datei niemals, niemals, niemals in git commited werden darf!  Um das zu verhindern, wird die Datei in `.gitignore` eingetragen. Was das bewirkt zeigt der Vorher / Nachher-Vergleich am besten:

    D:\Webprojekte\wp2>git status

    # On branch master
    # Your branch is ahead of 'origin/master' by 2 commits.
    #
    # Untracked files:
    #   (use "git add <file>..." to include in what will be committed)
    #
    #       config.php
    nothing added to commit but untracked files present (use "git add" to track)

Hier erkennt git die datei `config.php` als neue, interessante Datei. Nun tragen wir den Dateinamen `config.php` in die Datei `.gitignore` im Haupt-Ordner der Working Copy ein:

    D:\Webprojekte\wp2>cat .gitignore
    *.bak
    config.php

Damit ist git angewiesen, alle Dateien mit der Endung `.bak` und alle Dateien mit dem Namen `config.php` (egal in welchem Ordner) zu ignorieren. 

    D:\Webprojekte\wp2>git status

    # On branch master
    # Your branch is ahead of 'origin/master' by 2 commits.
    #
    # Changed but not updated:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #       modified:   .gitignore
    #
    no changes added to commit (use "git add" and/or "git commit -a")

Wie man sieht zeigt `git status` nun die Datei `config.php` nicht mehr an. Dafür hat git bemerkt dass die Datei `.gitignore` geändert wurde. Die sollte man ganz normal commiten.

### Anweisung an die Datenbank

Manche SQL-Queries liefern keine Daten retour.
Solche Queries kann man mit der Methode `exec` absetzen:

<php caption="Anweisungen an die Datenbank mit exec">
$dbh = new PDO(…);
dbh->exec("DELETE FROM users");
</php>

Hier werden alle Datensätze aus der Tabelle `users` gelöscht,
es gibt keine Rückmeldung an PHP.

### Abfrage mit Select

Eine Abfrage aus der Datenbank liefert normalerweise eine ganze Tabelle von Daten (mehrere Datensätze). Man braucht also eine Schleife um alle Datensätze abzuarbeiten. Innerhalb der Schleife erhält man den einzelnen Datensatz als Array. 

<php caption="Abfrage der Datenbank mit SELECT">
    $query =$dbh->query(
         "SELECT * FROM person WHERE ifshow=1 ORDER BY RAND() LIMIT 1,10"
    );
    $personen = $query->fetchAll(PDO::FETCH_OBJ);
    foreach($personen as $person) {

          echo "$person->vorname $person->mail</br>\n";
    }
</php>

Die SQL-Anfrage wird hier als String an die query-methode des Datenbankhandler übergeben.  Der Rückgabewert von query ist ein Query-Handle `$query` (ähnlich dem Datenbank-Handle).  Zu diesem Zeitpunkt wurden noch keine Daten von der Datenbank zu PHP übertragen. Das passiert erst in der nächsten Zeile mit der Methode `fetchAll`. Der Rückgabewert von fetchAll ist in diesem Fall ein Array mit Objekten. Dieses Array wird anschließend mit einer foreach-Schleife abgearbeitet. 

## Effizient Arbeiten mit der Datenbank

Ein ganz wichtiges Grundprinzip beim Programmieren mit Datenbanken: Das Filtern und Berechnen der Daten möglichst in der Datenbank erledigen und möglichst wenige Daten zu PHP übermitteln. Folgender Ansatz wäre also ganz schlecht, besonders wenn viele Daten in der Datenbank sind:

<php caption="Ineffiziente Abfrage der Datenbank">
$query =$dbh->query("SELECT * FROM person");
$personen = $query->fetchAll(PDO::FETCH_OBJ);
foreach($personen as $person ) {
  if($person->ifshow) {
    echo "$person->vorname $person->mail</br>\n";
  }
}
</php>

§

Besser wäre, den Filter bereits im SELECT einzubauen:

<php caption="Effiziente Abfrage der Datenbank">
$query =$dbh->query("SELECT * FROM person WHERE ifshow");
$personen = $query->fetchAll(PDO::FETCH_OBJ);
foreach($personen as $person ) {
  echo "$person->vorname $person->mail</br>\n";
}
</php>

§

Die gleichen Überlegungen gelten auch, wenn Datensätze "Seitenweise" angezeigt
werden sollen: hier verwendet man bereits in der Datenbank `LIMIT` um nur
die beötigten Datensätze zu laden.

§

Die Verwendung der richtigen Datentypen in der Datenbank erleichtert die Abfragen:  zum Beipiel zum Speichern eines Datums DATE oder TIMESTAMP verwenden. Das ermöglicht das Sortieren nach Datum und  Berechnungen wie „falls datum nicht älter als 100 Tage alt ist“

<sql>
  select titel,pub_datum from werk 
  where datediff( curdate( ) , pub_datum ) <= 100; 
</sql>

Zeigt Titel und Publikations-Datum aller Werke die in den letzten 100 Tagen publiziert wurden.


