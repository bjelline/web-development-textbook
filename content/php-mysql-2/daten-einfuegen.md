---
title: Einfügen
order: 35
---

Hier das einfachste Programm, das ein neues Werk speichert:

<php caption="Einfügen von Daten in die Datenbank - mit Sicherheitsproblem!">
$t = $_POST['title'];
$dbh->query( "INSERT INTO projects (title) VALUES ('$t')" );
</php>

Das funktioniert für viele Eingaben, aber was passiert wenn ein Werk den Titel „That’s it“ haben soll? Dann wird folgendes SQL-Statement ausgeführt:

<sql>
INSERT INTO projects (titel) VALUES ('That's it')
</sql>

Das kann nicht funktionieren, das einfache Anführungszeichen beendet den String und es bleibt `s it` übrig. Die Fehlermeldung von MySQL lautet:

<plain>
#1064 - You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 's it')' at line 1
</plain>

Für dieses Problem gibt es in PHP eine **einfache** und **falsche** Lösung:

Normalerweise verändert PHP automatisch alle Daten die über GET, POST  und Cookies hereinkommen: vor alle Anführungszeichen wird ein Backslash eingefügt.  Aus „That's it“ wird also automatisch „That\\'s it“ , das SQL-Statement funktioniert wieder:

<sql>
INSERT INTO werk (titel) VALUES ('That\'s it')
</sql>

Diese Automatik ist unter dem Namen `magic_quotes` bekannt und kann in der Apache- oder PHP-Konfiguration abgeschalten werden. Sie sollten das immer ausschalten!

<code caption="In der Apache Konfiguration: magic quotes abschalten">
php_flag magic_quotes_gpc off
</code>

Mit folgendem Programm können Sie testen ob auf dem Server magic quotes ein- oder ausgeschalten sind:

<php caption="Testen ob magic quotes eingeschalten sind">
echo( (get_magic_quotes_gpc() ? "mit magic quotes" : "ohne magic quotes") );
echo("<pre>");
print_r($_POST);
echo("</pre>");
</php>

In Wirklichkeit kann man Sie nicht ganz abschalten, wie man in der PHP Doku nachlesen kann[&rarr;](http://at.php.net/manual/de/security.magicquotes.disabling.php). Das Problem betrifft allerdings nur Array-Parameter.

Wenn die magic quotes abgeschalten sind, kann man das SQL-Problem besser lösen: mit prepared Statements. 

<php caption="Einfügen von Daten in die Datenbank mit prepared statements">
$sth = $dbh->prepare(
  "INSERT INTO users
    (id,  firstname,surname,email,profile_visible,created_at,updated_at,slug)
      VALUES
    (NULL,        ?,      ?,    ?,              ?,     NOW(),     NOW(),   ?)");

$sth->execute(
        array(
          $_POST['firstname'],
          $_POST['surname'],
          $_POST['email'],
          $_POST['profile_visible'],
          str_replace(" ", "-", $_POST['firstname'] . " " .  $_POST['surname'])
        )
); 

// noch ohne Fehlerbehandlung
</php>

Beim Einfügen in die Users-Tabelle kann es leicht zu Problemen kommen:  die Tabelle verlangt zum Beispiel in unter email einen eindeutigen Eintrag, wenn man hier einfach nichts eingibt gibt das einen Fehler.

So weit sollten Sie es nicht kommen lasse: Sie sollten die Eingaben aus dem Webformular schon vor dem INSERT prüfen und dann ausführliche, vollständige, deutsche Fehlermeldungen ausgeben.

![Abbildung 149: Fehlermeldung der Datenbank vs. selbst gestaltete Fehlermeldung](/images/image367.png)

Falls das Einfügen der Daten funktioniert hat und in der Tabelle ein autoincrement-Feld als Primärschlüssel vorhanden ist, kann man den Wert des Schlüssels im neuen Datensatz auslesen und weiter verwenden:

      $pid = $dbh->lastInsertId(); 
      header("Location: person.php?pid=$pid");

Auch hier ist eine Weiterleitung direkt nach dem POST-Request sinnvoll: nach dem Einfügen des Datensatzes wird direkt auf die Anzeige des neuen Datensatzes weitergeleitet. Falls man danach auf „Reload“ drückt wird der Datensatz neu angezeigt, aber keinesfalls ein zweites Mal eingefügt.

