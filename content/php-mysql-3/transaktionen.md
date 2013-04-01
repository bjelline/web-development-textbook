---
title: Transaktionen
order: 40
---



Transaktionen auf Ebene von SQL, hier am Beispiel von MySQL gezeigt.
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

