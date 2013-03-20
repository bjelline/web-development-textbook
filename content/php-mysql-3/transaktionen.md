---
title: Transaktionen
order: 50
---

## Transaktionen und Rollback

Sie kennen Transaktionen auf Ebene von SQL, hier am Beispiel von MySQL gezeigt.
(siehe das [MySQL Referenz Handbuch](http://dev.mysql.com/doc/refman/5.1/de/commit.html))

<sql caption="Beispiel für eine Transaktion in MySQL, die zwei Einfüge-Operationen zusammenfasst">
START TRANSACTION;
INSERT INTO staff (id, first, last) 
  VALUES (42, 'Alyssa', 'Hacker');
INSERT INTO salarychange (id, amount, changedate) 
  VALUES (42, 50000, NOW());
COMMIT;
</sql>

<sql caption="Beispiel für eine Transaktion in MySQL und zurück-gerollt wird">
START TRANSACTION;
INSERT INTO staff (id, first, last) 
  VALUES (42, 'Alyssa', 'Hacker');
INSERT INTO salarychange (id, amount, changedate) 
  VALUES (42, 50000, NOW());
ROLLBACK;
-- nichts ist passiert!
</sql>

§

Die Datenbankschnittstelle `PDO` bietet für den Umgang mit Transaktionen die
Methoden `beginTransaction`, `commit` und `rollback` an.  Wenn die
Datenbank-Verbindung unerwartet geschlossen wird obwohl noch eine Transaktion
offen ist, dann löst PDO selbst das Rollback aus.

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

