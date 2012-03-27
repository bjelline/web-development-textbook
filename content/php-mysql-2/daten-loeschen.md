---
title: Löschen
order: 30
---

Das Löschen könnte so einfach sein: Ein Programm mit namen person_delete.php, das als Parameter die id der Person erhält, die gelöscht werden soll:

<php caption="Skript person_delete.php mit Sicherheitslücke!">
$pid   = $_POST['pid'];
$dbh->query("DELETE FROM person WHERE pid=$pid" );  // NICHT so implementieren!
</php>

Dieses Programm ist anfällig für folgende Attacke. Alyssa P. Hacker (eine fiktive Hackerin) 
benützt nicht das HTML-Formular unserer Applikation, sondern schreibt selbst ein Formular.
In dem Formular setzt sie den Parameter pid auf Wert `9 OR 1=1`.

<htmlcode caption="Formular für die Attacke auf das Skript person_delete.php">
<form method="post" action="person_delete.php" >
    <input type="hidden" value="9 OR 1=1" name="pid"/>
    <input type="submit" value="del all"/>
</form>
</htmlcode>

Das führt dazu, dass folgendes SQL-Statement ausgeführt wird:

<sql>
DELETE FROM person WHERE pid=9 OR 1=1
</sql>

Und dieses Statement löscht nicht einen Datensatz sondern alle Datensätze. Diese Art von Attacke auf eine Web-Applikation nennt man „SQL Injection“.

### SQL Injection verhindern
Dieses Problem kann vermeiden indem man die Eingabe genau überprüft. In diesem Beispiel also: nur wenn es sich bei pid um eine ganze Zahl handelt, darf sie verwendet werde. Das wird hier mit einer Regular Expression (die Sie noch nicht verstehen müssen) überprüft:

<php caption="Eingabeprüfung mit Regular Expression">
if( ! preg_match( '/^\d+$/', $pid ) ) {
    error_log("hack: $pid statt id in person_delete.php.");
    echo("Hack detected. Please stay at you computer until the police arrive.");
    exit;
}
</php>

Der zweite Ansatz ist die Verwendung von „Prepared Statements“ in der Datenbank. Dabei wird der SQL-Interpreter der Datenbank gänzlich umgangen. 

Als erster Schritt wird mit `prepare` ein SQL-Statement mit Fragenzeichen als Platzhalter vorbereitet. Dieses SQL-Statement kann vom Datenbank-Server sofort geparset und compiliert werden. Mit `execute` wird das Statement ausgeführt, dabei werden die Platzhalter durch echte Daten ersetzt.  Das Schöne daran: es wird nie ein SQL-Statement als String gebaut, sondern die einzufügenden Daten werden binär an den Datenbankserver übertragen. Darin enthaltene SQL-Fragement können keinen Schaden anrichten.

<php>
$sth = $dbh->prepare("DELETE FROM person WHERE pid = ?");
$sth->execute(array($pid));
</php>

`execute` kann auch mehrfach ausgeführt werden, das ist effektiver als eine normales query zu wiederholen.

### Authorisierung nicht vergessen!
Wir haben eine Sicherheitslücke geschlossen, aber es bleibt trotzdem noch viel zu tun: Löschen, Einfügen, Bearbeiten soll nur nach dem Login möglich sein!

