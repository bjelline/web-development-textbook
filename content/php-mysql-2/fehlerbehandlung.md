---
title: Fehlerbehandlung
order: 50
---

Wir haben bisher keinerlei Rücksicht darauf genommen, dass ein Fehler auftreten
könnte.  Zum Beispiel könnte beim Einfügen in die Datenbank ein Constraint verletzt werden
und das Einfügen fehlschlagen. Wie behandelt man diesen Fall in PHP?


## Exceptions in PHP

Folgende Beschreibung ist aus dem [PHP Handbuch](http://www.php.net/manual/de/language.exceptions.php) übernommen:

PHP 5 hat ein Exceptionmodell ähnlich dem anderer Programmiersprachen. Eine Exception kann in PHP 
geworfen (`throw`) und abgefangen (`catch`) werden. Um das Fangen potentieller Exceptions zu 
ermöglichen, wird der jeweilige Code mit einem `try`-Block umschlossen. 

Jeder `try`-Block muss mindestens einen zugehörigen `catch` Block besitzen. 
Mehrere `catch`-Blöcke können verwendet werden, um verschiedene Klassen von Exceptions abzufangen. 
Die normale Programmausführung (wenn keine Exception innerhalb des `try`-Blockes geworfen wird 
oder keine zur Klasse der geworfenen Exception passendes `catch` vorhanden ist) 
wird nach dem letzten `catch`-Block fortgesetzt. 
Exceptions können innerhalb eines `catch`-Blockes geworfen (oder weitergeworfen) werden.

Wenn eine Exception geworfen wird, wird der Programmcode der auslösenden Anweisung nicht ausgeführt, 
und PHP versucht, den ersten passenden `catch`-Block zu finden. Falls eine Exception gar
nicht abgefangen wird, wird ein fataler Fehler mit einer "Uncaught Exception ..."-Nachricht ausgegeben

<php caption="Beispiel für Exception-Handling in PHP: Division durch Null">
  <?php
  function inverse($x) {
      if ($x == 0) {
         throw new Exception('Division durch Null.');
      }
      return 1 / $x;
  }

  try {
      echo inverse(5) . "\n";
      echo inverse(0) . "\n";
  } catch (Exception $e) {
      echo 'Exception abgefangen: ',  $e->getMessage(), "\n";
  }

  // output:
  // 0.2
  // Exception abgefangen: Division durch Null
  ?>
</php>


## Verwendung von Exceptions für die Datenbank

In folgendem Beispiel soll ein Datensatz (plus abhängige Daten) dargestellt werden.
Dabei könnte schon beim Verbindungsaufbau mit der Datenbank ein Fehler auftreten,
oder bei einzelnen Abfragen.

<php caption="Datenbank-Abfrage mit Exception Handling als Fehlerbehandlung">
   $get_pid   = $_GET['pid'];
   try{
      include "config.php";

      if( ! $DB_NAME ) throw (new Exception( "Datenbank-Verbindung ist nicht konfiguriert. Bitte die Datei config.php anlegen!" ));

      $dbh = new PDO("mysql:dbname=$DB_NAME", $DB_USER, $DB_PASS);
      $dbh->exec('SET CHARACTER SET utf8') ;

      $sth  = $dbh->prepare( "SELECT * FROM `users` WHERE id=?" );
      $sth->setFetchMode(PDO::FETCH_OBJ);
      $sth->execute(array($get_pid));
      $p = $sth->fetch();

      // wirklich nicht in der Datenbank
      if( $p === false )          throw (new Exception( "Konnte Person Nr. $get_pid in der Datenbank nicht finden." ));

      // Profil verborgen
      if( !$p->profile_visible  ) throw (new Exception( "Konnte Person Nr. $get_pid in der Datenbank nicht finden." ));

      $sth  = $dbh->prepare( " .... " );
      $sth->execute(array($get_pid));
      $projects = $sth->fetchAll(PDO::FETCH_OBJ);

    } catch( Exception $e ) {
      include "header.php";
      echo "<h1>Error</h1>" ;
      echo "<p>" . $e->getMessage() . "</p>";
      include "footer.php";
      exit;
    }

/* hier folgt die normale Ausgabe der Seite */
</php>

In diesem Beispiel erfolgt die ganze Arbeit mit der Datenbank
bevor die Ausgabe beginnt.  Im `catch`-Block wird eine Webseite
erzeugt, die gar nichts mit der "normalen" Ausgabe der Seite zu
tun hat.


## Transaktionen und Rollback

Sie kennen Transaktionen auf Ebene von SQL, hier am Beispiel von MySQL gezeigt.
(siehe das [MySQL Referenz Handbuch](http://dev.mysql.com/doc/refman/5.1/de/commit.html))

<sql caption="Beispiel für eine Transaktion in MySQL, die zwei Einfüge-Operationen zusammenfasst">
START TRANSACTION;
INSERT INTO staff (id, first, last) VALUES (42, 'Alyssa', 'Hacker');
INSERT INTO salarychange (id, amount, changedate) VALUES (42, 50000, NOW());
COMMIT;
</sql>

<sql caption="Beispiel für eine Transaktion in MySQL und zurück-gerollt wird">
START TRANSACTION;
INSERT INTO staff (id, first, last) VALUES (42, 'Alyssa', 'Hacker');
INSERT INTO salarychange (id, amount, changedate) VALUES (42, 50000, NOW());
ROLLBACK;
-- nichts ist passiert!
</sql>


Die Datenbankschnittstelle `PDO` bietet für den Umgang mit Transaktionen die 
Methoden `beginTransaction`, `commit` und `rollback` an.

Und einen besonderen Service: Wenn die Datenbank-Verbindung
geschlossen wird obwohl noch eine Transaktion offen ist, dann löst PDO selbst
das Rollback aus.

<php caption="Beispiel für Transaktion mit Fehlerbehandlung">
try {
  $dbh->beginTransaction();
  $dbh->exec("INSERT INTO staff (id, first, last) VALUES (42, 'Alyssa', 'Hacker')");
  $dbh->exec("INSERT INTO salarychange (id, amount, changedate) VALUES (42, 50000, NOW())");
  $dbh->commit();
  
} catch (Exception $e) {
  $dbh->rollBack();
  echo "Error: " . $e->getMessage();
}
</php>

Bei einem realen Beispiel würde man nicht die `exec` Methode verwenden,
sondern wahrscheinlich prepared Statements. Aber die generelle Vorgehensweise
bleibt gleich.

## Exceptions in Javascript

Die Verwendung und Schreibweise ist in Javascript so ähnelich, dass es sich
gar nicht lohnt näher darauf einzugehen. Siehe [Rauschmayer(2012): Ausnahmebehandlung in JavaScript in mag.js Nr.1](http://www.magjs.de/2012-01/rauschmayer/rauschmayer.html)

