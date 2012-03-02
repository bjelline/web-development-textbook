---
title: Absolute und relative URLs
order: 10
---
URLs werden in CSS und HTML an vielen Stellen verwendet: bei Links und Bilder, beim Verweis auf externe Stylesheets, externe Javascript-Dateien, etc.  An all diesen Stellen können Sie URLs in den hier beschriebenen Schreibweisen verwenden.

Die „absolute“ und „relative“ Schreibweise wurde von den Pfadangaben im UNIX-Dateisystem übernommen; auch die Pfadangaben von DOS/Windows und von CD-ROMs funktionieren ähnlich.
Nehmen wir an, in der Datei `http://mediacube.at/pix/weg.html` seien folgende drei URLs enthalten:

absolut
: beginnt mit Protokoll `http://mediacube.at/pix/weg-zur-saline.jpg`

relativ zum Webserver
: beginnt mit einem Schrägstrich (Slash) `/pix/weg-zur-saline.jpg`

relativ zur Datei
: `weg-zur-saline.jpg`

Bei den relativen URLs muss man die URL des enthaltenden Dokuments und die relative URLs zusammen—addieren, um zu einer absoluten URL zu kommen.

    http://mediacube.at/pix/weg.html   
                 +     /pix/weg-zur-saline.jpg  = 
    http://mediacube.at/pix/weg-zur-saline.jpg  

und

    http://mediacube.at/pix/weg.html   +     weg-zur-saline.jpg  = 
    http://mediacube.at/pix/weg-zur-saline.jpg  

Mit einer anderen Ausgangs-URL ist das Ergebnis natürlich anders:

    http://multimediatechnology.at/2008/09/22/weg.html 
                            +     /pix/weg-zur-saline.jpg  = 
    http://multimediatechnology.at/pix/weg-zur-saline.jpg  

und:

    http://multimediatechnology.at/2008/09/22/weg.html  
                                        +     weg-zur-saline.jpg  = 
    http://multimediatechnology.at/2008/09/22/weg-zur-saline.jpg  

Relativen URLs können selbst wieder Ordnernamen enthalten:

    http://multimediatechnology.at/showcase-2008.html 
                                +  2008/07/31/mmt-auf-facebook.html  = 
    http://multimediatechnology.at/2008/07/31/mmt-auf-facebook.html  

Zwei Punkte als Ordnernamen bedeuten dabei: „raus aus dem aktuellen Ordner“:

    http://multimediatechnology.at/2008/04/17/rattenscharfes-computergame.html 
                                        +     ../../mmt-auf-facebook.html  = 
    http://multimediatechnology.at/2008/07/31/mmt-auf-facebook.html  

Dieser Schreibweise erlaubt auch sehr umständliche Formulierungen:

    http://multimediatechnology.at/2008/04/17/rattenscharfes-computergame.html 
    +     ../../05/../04/17/rattenscharfes-computergame.html  = 
    http://multimediatechnology.at/2008/04/17/rattenscharfs-computergame.html  

All diese Berechnungen finden im Webbrowser statt, und sind völlig unabhängig davon, wie der Webserver die URL interpretiert. So könnte z.B die letzten URL „in Wirklichkeit“ gar nicht auf Ordner mit Namen 2008, 04, 17 verweisen, sondern eine Datenbanksuche nach „2008-04-17“ nach sich ziehen – das ist Sache des Servers.

