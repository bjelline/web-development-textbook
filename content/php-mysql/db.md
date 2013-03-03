---
title: Datenbank
order: 5
---

MySQL ist die relationale Datenbank, die bei gemietetem Webspace am öftesten angeboten wird. MariaDB ist eine leichtgewichtiger Alternative zu MySQL. Falls Sie noch keine relationale Datenbank auf Ihrem Entwicklungsrechner installiert haben empfehle ich MariaDB.

Hier wird nicht die Funktionsweise einer relationalen Datenbank erklärt (siehe Lehrveranstaltung im 1.Semester), sondern nur die Besonderheiten von MySQL und die für Web-Applikationen wichtigen Aspekte.

MySQL Installation, Wiederholung, Dokumentation
------------------------------------------------
MySQL ist im Paket XAMPP enthalten. (Man könnte die Datenbank auch separat von mysql.com herunterladen und installieren.) In der Standardinstallation ist ein Administrator-Account „root“ ohne Passwort vorhanden. Die MySQL-Shell wird wie folgt gestartet:

    > mysql –u username –p datenbankname
    Welcome to the MySQL monitor. Commands end with ; or \g.

    Your MySQL connection id is 2 to server version: 5.0.27-community-nt


    Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

    mysql>

Auf der Kommandozeile kann man auch ganze Dateien mit SQL-Befehlen auf einen Schlag einspielen: 

    > mysql –u username –p datenbankname < portfolio.sandbox.sql
Show Tables zeigt alle Tabellen in der aktuellen Datenbank:

    mysql> show tables;

    +-----------------------------+
    | Tables_in_portfolio_sandbox |
    +-----------------------------+
    | macht                       | 
    | media                       | 
    | media_werk                  | 
    | person                      | 
    | rollen                      | 
    | student                     | 
    ...
    | werk                        | 
    +-----------------------------+
    16 rows in set (0.00 sec)

Describe zeigt den Aufbau einer bestimmten Tabelle:

    mysql> describe person;

    +------------+--------------+------+-----+---------+----------------+
    | Field      | Type         | Null | Key | Default | Extra          |
    +------------+--------------+------+-----+---------+----------------+
    | pid        | bigint(20)   |      | PRI | NULL    | auto_increment |
    | uid        | varchar(8)   | YES  | MUL | NULL    |                |
    | vorname    | varchar(40)  |      |     |         |                |
    | nachname   | varchar(50)  |      |     |         |                |
    | profil     | text         |      |     |         |                |
    | mail       | varchar(40)  | YES  | MUL | NULL    |                |
    | web        | varchar(200) | YES  |     | NULL    |                |
    | blog       | varchar(200) | YES  |     | NULL    |                |
    | feed       | varchar(200) | YES  |     | NULL    |                |
    | title      | varchar(10)  | YES  |     | NULL    |                |
    | isfemale   | tinyint(4)   |      |     | 0       |                |
    | bildpfad   | varchar(250) | YES  | MUL | NULL    |                |
    | ifshow     | tinyint(4)   |      |     | 0       |                |
    | facebookid | bigint(20)   | YES  |     | NULL    |                |
    +------------+--------------+------+-----+---------+----------------+
    14 rows in set (0.00 sec)

Select und Join funktionieren wie erwartet:

    mysql> select pid,vorname from person limit 1,8;

    +-----+-------------+
    | pid | vorname     |
    +-----+-------------+
    |   2 | Paul        |
    |   3 | Edvard Paul |
    |   4 | Sandra      |
    |   5 | Philipp     |
    |   6 | Antal       |
    |   7 | Sebastian   |
    |   8 | Johannes    |
    |   9 | Ivan        |
    +-----+-------------+
    10 rows in set (0.00 sec)

Die Details zu SQL in MySQL (Abweichungen vom SQL Standard, Erweiterungen) kann man der [Dokumentation](http://dev.mysql.com/) entnehmen.

![Dokumentation von MySQL auf http://dev.mysql.com/](/images/image357.png)

## phpMyAdmin

Ein häufig verwendetes Tool ist der phpMyAdmin, der ein Interface am Web zur Verfügung stellt. 

TODO: Bilder einfügen

![phpMyAdmin](/images/image358.png)

Über phpMyAdmin kann man viele SQL-Abfragen durch Point+Klick formulieren. Das lehrreiche daran: phpMyAdmin zeigt immer das SQL-Statement mit an — auf diese Art kann man einfach SQL lernen. Besonders praktisch ist das beim Anlegen und Verändern von Tabellen. 
Erster Schritt: Name der Tabelle:

![Abbildung 143: Tabelle anlegen mit phpMyAdmin - Name der Tabelle](/images/image359.png)

Zweiter Schritt: Spalten definieren:

![Abbildung 143: Tabelle anlegen mit phpMyAdmin - die Spalten](/images/image360.png)

Dritter Schritt: Tabelle wird angelegt und dazugehörendes SQL-Statement angezeigt:

![Abbildung 143: Tabelle anlegen mit phpMyAdmin - der SQL Befehl](/images/image360.png)

