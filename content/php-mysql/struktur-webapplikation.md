---
title: Struktur einer Web-Applikation
order: 15
---
Am Beispiel einer  Mini-Applikation lernen Sie nun den typischen Aufbau einer solchen Applikation kennen. Die fertige Applikation soll Werke und Personen aus einem Gemeinschafts-Portfolio anzeigen:

![Abbildung 144: Homepage der Mini-Applikation](/images/dbapp-home.png)

Die folgende Tabelle zeigt alle (geplanten) Seiten der Applikation im Überblick. Zu jeder Seite wird der Titel angeführt (wird auf der Seite angezeigt), der Dateiname der PHP-Datei (wichtig für die Verlinkung), eventuell notwendige Parameter und eine Beschreibung was die Seite anzeigt.

|Titel|Dateiname|Parameter|Beschreibung|
|+----|+--------|+--------|+-----------|
|Home |`index.php`|         |Zeigt Gesamtzahl der Personen und Werke an.| 
|Personen|`personen.php`|   |Zeigt 10 zufällig ausgewählt Personen an, mit Links zu  person.php|
|Details zu einer Person|`person.php`|pid (Schlüssel der Person)| Zeigt Details zu einer bestimmten Person an: Anzahl der Werke und Username|
|Werke| `werke.php`|        |Zeigt 10 zufällig ausgewählt Werke an, mit Links zu werk.php| 
|Details zu einem Werk| `werk.php`|wid (Schlüssel des Werks)| Zeigt Details zu einer bestimmten Werk an: Titel, Datum der Publikation, eventuell eine Liste der Beteiligten Personen und ihrer Rollen|
{: class="table table-condensed table-bordered" style="width:auto"}

Jede einzelne Seite ist mit Hilfe von includes aufgebaut. Dabei werden immer die Dateien functions.php (mit der Datenbank-Verbindung) header.php und footer.php inkluidert.

<php>
<?
  $pagetitle = "Titel der Seite";
  include "functions.php";

  // hier passiert die eigentliche Arbeit
  
  include "header.php";
  // und hier die Ausgabe
  include "footer.php";
?>
</php>

Verlinkung
----------

In der Datei personen.php wird zu jeder Person ein passender Link zu person.php angezeigt:

<php>
<li>
  <b><?= $person->firstname ?> <?= $person->surname?></b>
  <a href="person.php?pid=<?= $person->id ?>">mehr</a>
</li>
</php>

Achtung: diese Verlinkung schützt nicht davor, dass jemand einfach eine URL mit ganz andere pid „von Hand“ eingibt!

`http://meinedomain.at/person.php?pid=666`

Der Zugriffsschutz ist also ein eigenes Thema, das auch in `person.php` wieder behandelt werden muss.

Datensätze suchen
-------------------
In der Datei `psuche.php` wird ein Formular zur Suche nach Vornamen angezeigt:

<htmlcode>
<form action="psuche.php" method="get">
  Suche nach einer Person mit dem Vornamen <input name="suchwort"> 
  <input type="submit">
</form>
</htmlcode>

