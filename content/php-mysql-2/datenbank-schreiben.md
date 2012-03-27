---
title: Web-Applikation mit Schreibrecht
order: 20
---

In diesem Kapitel werden wir die Web-Applikation weiter entwickeln,
so dass Sie Daten nicht nur anzeigen, sondern auch löschen und editieren kann.

Hier der Plan für die einzelnen Seiten dieser Applikation:

| Titel           | Dateiname       |  Methode / Parameter |  Beschreibung                                |
| Person löschen  | person_delete.php |  POST pid            |  Löscht die Person mit der angegeben pid.    |
| Person einfügen | person_new.php  |  GET                 |  Zeigt Eingabeformular für eine neue Person  |
| Person einfügen | person_new.php  | POST uid,vorname,nachname, profil,mail,web, blog,feed,title, isfemale,ifshow | Legt eine neue Person an. |
| Person bearbeiten | person_edit.php | GET pid |  Zeigt Bearbeitungs-Formuar an |
| Person bearbeiten | person_edit.php | POST pid, vorname, nachname, profil |  Speichert neue Daten zur Person pid |
{: class="table table-condensed table-bordered" style="width:auto"}

Bei der Implementierung dieser Applikation lernen wir Schritt für Schritt verschiedene Sicherheitprobleme kennen.
