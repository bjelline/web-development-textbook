---
title: Web-Applikation mit Schreibrecht
order: 20
---

In diesem Kapitel werden wir die Web-Applikation weiter entwickeln:
Daten werden nicht nur angezeigt, sondern auch gelöscht und editiert.

Hier der Plan für die einzelnen Seiten dieser Applikation:

| Titel           | Dateiname       |  Methode / Parameter |  Beschreibung                                |
| Person löschen  | person_delete.php |  POST id            |  Löscht die Person mit der angegeben id.    |
| Person einfügen | person_new.php  |  GET                 |  Zeigt Eingabeformular für eine neue Person  |
| Person einfügen | person_new.php  | POST firstname,surname,title,email,isfemale,profile_visible,description | Legt eine neue Person an. |
| Person bearbeiten | person_edit.php | GET id |  Zeigt Bearbeitungs-Formuar an |
| Person bearbeiten | person_edit.php | POST id,firstname,surname,title,email,isfemale,profile_visible,description|  Speichert neue Daten zur Person id |
{: class="table table-condensed table-bordered" style="width:auto"}

Bei der Implementierung dieser Applikation lernen wir Schritt für Schritt verschiedene Sicherheitprobleme kennen.
