---
title: Navigationsmenü
order: 25
---

Wenn man mit CSS ein Navigationsmenü gestaltet dann sollte man von einem HTML-Code ausgehen der auch ohne CSS gut benutzbar bleibt ( „graceful degradation“), und der nur mit CSS umgestaltet wird.

Der Ausgangspunkt für ein Navigationsmenü ist eine Liste mit Links:

    <div class="navi">
       <h3 class="unsichtbar">Seitenauswahl</h3>
       <ul>
          <li><a href="index.html">home</a></li>
          <li><a href="ort.html">ort</a></li>
          <li><a href="typografie/">typografie</a></li>
          <li><a href="bestellung/">bestellung</a></li>
       </ul>
    </div>

Ohne CSS wird die Liste ganz normal dargestellt. Mit CSS kann man daraus ein vertikales Menü machen, dazu wird mit list-style-type:none der Listenpunkt zu einem normalen Tag. 

    .unsichtbar {display:none;}

    div.navi li {
       list-style-type:none;
       margin-bottom:1px; 
       background:#6C6;
       width:6em;
       padding: 0.2em;
    }

    div.navi li a:link {
       text-decoration: none;
       font-weight: bold;
       color: black;
    }

Mit Hilfe von Float kann man das Menü auch horizontal darstellen, dazu muß nur ein float eingefügt und der margin anders gesetzt werden:

    div.navi li {
       float:left;
       list-style-type:none;
       margin-right:1px; 
       background:#6C6;
       width:6em;
       padding: 0.2em; 
    }

    div.navi li a:link {
       text-decoration: none;
       font-weight: bold;
       color: black;
    }

Navigationsmenü wiederverwerten mit PHP
-----------------------------------------
Das Navigationsmenü sollte natürlich in allen Seiten der Site gleich vorhanden sein. Dazu könnte man den Code in alle HTML-Dateien kopieren. Wenn man dann eine neue Seite einfügen will, muss man wiederum alle Seiten editieren.

Deswegen bietet es sich an bei dieser Gelegenheit von einfachem HTML auf PHP umzusteigen. PHP ist eine Programmiersprache am Webserver mit der wir uns im Sommersemester intensiv beschäftigen werden.

Dazu müssen alle HTML-Dateien die Endung .php erhalten, im Navigationsmenü sieht das dann so aus:

    <div id="navi">
       <h3 class="unsichtbar">Seitenauswahl</h3>
       <ul>
          <li><a href="index.php">home</a></li>
          <li><a href="ort.php">ort</a></li>
          <li><a href="typografie/">typografie</a></li>
          <li><a href="bestellung/">bestellung</a></li>
       </ul>
    </div>

Links die auf Ordner verweisen sind hier besonders praktisch: Sie ersetzen die Datei index.html durch index.php, der Link bleibt gleich.

Das Navigationsmenü wird nun in einer separaten Datei gespeichert, z.B. navi.php.  In den einzelnen Seiten wird das Menü dann mit include eingebunden:

    <body>
    <?php include "navi.php" ?>
    <h1>News</h1>

Achtung: Das Einfügen der inkuldierten Datei erfolgt auf dem Server. Der Client erhält das vollständige HTML-Dokument inklusive Navigation, und merkt von der Inkludierung nichts. Mit ANSICHT → SEITENQUELLTEXT ANZEIGEN kann man den PHP-Code nicht sehen. 

![Abbildung 41: Original PHP-Datei am Server und Quelltext-Ansicht im Webbrowser](/images/image145.png)

Damit ist nun das Einfügen eines neuen Menü-Punkts ins Navigationsmenü ganz einfach: nur die Datei navi.php muss editiert werden.

