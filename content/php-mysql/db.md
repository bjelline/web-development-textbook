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
    +------------------------------------------+
    | Tables_in_portfolio_playground           |
    +------------------------------------------+
    | agegroups                                | 
    | agegroups_studycourses_departments_users | 
    | assets                                   | 
    | departments                              | 
    | projects                                 | 
    | projects_roles_users                     | 
    | projects_tags                            | 
    | roles                                    | 
    | studycourses                             | 
    | tags                                     | 
    | urls                                     | 
    | users                                    | 
    +------------------------------------------+
    12 rows in set (0.00 sec)


Describe zeigt den Aufbau einer bestimmten Tabelle:

    mysql> describe users;
    +-----------------+--------------+------+-----+---------+----------------+
    | Field           | Type         | Null | Key | Default | Extra          |
    +-----------------+--------------+------+-----+---------+----------------+
    | id              | int(11)      | NO   | PRI | NULL    | auto_increment | 
    | firstname       | varchar(255) | YES  |     | NULL    |                | 
    | surname         | varchar(255) | YES  |     | NULL    |                | 
    | title           | varchar(255) | YES  |     | NULL    |                | 
    | email           | varchar(255) | YES  | UNI | NULL    |                | 
    | isfemale        | tinyint(1)   | YES  |     | NULL    |                | 
    | profile_visible | tinyint(1)   | YES  |     | NULL    |                | 
    | type            | varchar(255) | YES  | MUL | NULL    |                | 
    | is_admin        | int(11)      | YES  |     | 0       |                | 
    | description     | text         | YES  |     | NULL    |                | 
    | slug            | varchar(255) | YES  | UNI | NULL    |                | 
    | avatar          | varchar(255) | YES  |     | NULL    |                | 
    +-----------------+--------------+------+-----+---------+----------------+
    12 rows in set (0.00 sec)


Select und Join funktionieren wie erwartet:

    mysql> select id,firstname from users limit 1,8;
    +----+-----------+
    | id | firstname |
    +----+-----------+
    |  2 | Lea       | 
    |  3 | Stefan    | 
    |  4 | Karin     | 
    |  5 | Katharina | 
    |  6 | Julia     | 
    |  7 | Gianni    | 
    |  8 | Josef     | 
    |  9 | Michael   | 
    +----+-----------+
    8 rows in set (0.01 sec)

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

