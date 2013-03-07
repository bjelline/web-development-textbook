---
title: Lesen aus der Datenbank
order: 20
---

Für die Applikation müssen wir nun auf verschiedene
Arten Daten aus der Datenbank lesen:

Viele Datensätze aus der Datenbank lesen
------------------------------------------
In der Datei personen.php finden Sie ein Beispiel für die Auflistung von mehreren Datensätzen:

<php caption="personen.php">
$query = $dbh->query("SELECT * FROM users WHERE profile_visible ORDER BY RAND() LIMIT 1,10");
$personen = $query->fetchAll(PDO::FETCH_OBJ);
</php>

Das Ergebnis ist ein Array von Objekten in der Variable $personen. Hier der Output von print_r($personen):

<php caption="Output von print_r($personen)">
Array
(
  [0] => stdClass Object
      (
          [id] => 422
          [firstname] => Hubert jun.
          [surname] => Hoelzl
          [email] => hhoelzl.mmt-b2008@fh-salzburg.ac.at
          [isfemale] => 0
          [profile_visible] => 1
          [created_at] => 2011-06-01 09:54:16
          [updated_at] => 2011-06-01 17:14:58
          [avatar] => 
          [fullname] => Hubert jun. Hoelzl
      )
  [1] => stdClass Object
      (
          [id] => 313
          [firstname] => Marcel
          [surname] => Uekermann
          [email] => muekermann.mma-b2007@fh-salzburg.ac.at
          [isfemale] => 0
          [profile_visible] => 1
          [created_at] => 2011-06-01 09:54:12
          [updated_at] => 2011-06-01 09:54:12
          [avatar] => 
          [fullname] => Marcel Uekermann
      )
  ...
)
</php>

Einzelne Daten aus der Datenbank lesen
---------------------------------------
In der Datei `home.php` finden Sie zwei Beispiele für das Lesen einzelner Daten. Mit der SQL-Funktion COUNT() wir die Anzahl der Werke in der Datenbank bestimmt. 

<php caption="Beispiel aus home.php">
$ergebnis = $dbh->query( 
 "SELECT COUNT(*) AS anzahl FROM users WHERE profile_visible" )->fetch();
$anz_personen = $ergebnis['anzahl'];
</php>

Einen bestimmten Datensatz lesen
---------------------------------
Wenn Sie die Datei `person.php` mit einem Parameter aufrufen person.php?id=586 soll eine bestimmte Person aus der Datenbank angezeigt werden. Dafür wird der Parameter aus dem `$_GET` – Array ausgelesen und sicher gestellt, dass es sich wirklich um eine Zahl handelt.

In der Datenbank sind Personen, deren Profil nicht angezeigt werden soll, mit `profile_visible=0` gekennzeichnet. Im SQL-Statement wird sicher gestellt, dass nur sichtbare Personen angezeigt werden. Das Ergebnis der Abfrage kann also sein, dass keine Person gefunden wurde – entweder weil unter diesem Schlüssel gar keine gespeichert ist, oder weil `profile_visible=0` ist. In diesem Fall gibt fetch kein Objekt sondern der Wert FALSE zurück.

<php caption="Beispiel aus home.php">
$id = $_GET['id'];  // SICHERHEITSPROBEM - behandeln wir später noch!
$stm = $dbh->query ( "SELECT * FROM users WHERE profile_visible AND id=$id" );
$person = $stm->fetch(PDO::FETCH_OBJ);
if( $person === FALSE ) {
  die("<p>Konnte keine passenden Daten aus der Datenbank lesen.</p>");
}
</php>

Die Darstellung der einzelnen Person ist damit noch nicht fertig programmiert: der Username wird zwar angezeigt, aber nicht die Anzahl der Werke der Person. 

<php>
if( $person->isfemale ) {
    $anrede = "Frau";
    $ersie = "Sie";
} else {
    $anrede = "Herr";
    $ersie = "Er";
}

// ====================== Ausgabe ===================
include "header.php";
?>
<p> 
  <?= $anrede ?>
  <?= $person->firstname ?>
  <?= $person->surname ?>
  hat insgesamt x Werke in dieser Datenbank.
  <?= $ersie ?> hat den Usernamen <?= $person->uid ?>.
</p>
</php>

In der Datei personen.php wird zu jeder Person ein passender Link zu person.php angezeigt:

<php>
<li>
  <b><?= $person->firstname ?> <?= $person->surname?></b>
  <a href="person.php?id=<?= $person->id ?>">mehr</a>
</li>
</php>

Achtung: diese Verlinkung schützt nicht davor, dass jemand einfach eine URL mit ganz andere id „von Hand“ eingibt!

`http://meinedomain.at/person.php?id=666`

Der Zugriffsschutz ist also ein eigenes Thema, das auch in `person.php` wieder behandelt werden muss.

Datensätze suchen
-------------------
In der Datei `psuche.php` wird ein Formular zur Suche nach Vornamen angezeigt:

<php>
<form action="psuche.php" method="get">
  Suche nach einer Person mit dem Vornamen <input name="suchwort"> 
  <input type="submit">
</form>
</php>

Die eigentliche Suche geschieht über das WHERE-Statement  in SQL:

<php>
... WHERE ifshow=1 AND vorname LIKE '$suchwort'
</php>

Wir werden uns später noch genauer mit der Sicherheitsproblematik von SQL-Statements befassen, die teilweise aus User-Input entstehen. Noch ignorieren wir die Problematik und schreiben einfach:

<php>
if( $suchwort ) {
  $personen = $dbh->query (
    "SELECT * FROM users WHERE profile_visible=1 AND firstname LIKE '$suchwort' "
    )->fetchAll(PDO::FETCH_OBJ);
  $found = count($personen);
}
....
if ( $suchwort ) : ?>

  <p>Suche nach '<?= $suchwort ?>' hat <?= $found ?> Ergebnisse geliefert:</p>
  <ol>
  <?php foreach ($personen as $person) : ?>
    <li>
      <b><?=$person->firstname ?>   <?= $person->surname ?></b>
      <a href="person.php?id=<?= $person->id ?>">mehr</a>
    </li>
  <?php endforeach ; ?>
  </ol>
<? endif ?>
</php>

Achtung: hier verwenden wir die count-Funktion von PHP um die Datensätze zu zählen. Wenn wir alle Datensätze brauchen ist das auch legitim. Wenn wir nur die Anzahl der Datensätze bräuchten würden wir ein `COUNT` in SQL verwenden, das wäre viel effizienter.

