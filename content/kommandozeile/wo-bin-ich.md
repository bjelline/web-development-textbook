---
title: Wo bin ich
order: 30
---

Sie öffnen die Kommandozeile je nach Betriebssystem Unterschiedlich:

* Windows: ....
* Mac OS X: Terminal
* Linux: xterm

So sieht das Terminal auf Mac OS X aus:

![Abbildung: Terminal auf Mac OS X](/images/terminal.png)

Im Terminal läuft eine **Shell**.  Das ist der eigentliche Kommando-Interpreter,
der Ihre Eingaben verarbeitet wird.  In der Abbildung oben ist das die shell **bash**.

Die eine Zeile Text die Sie sofort sehen ist die **Eingabeaufforderung** (english: **prompt**).
Nun können Sie Ihren ersten Befehl eintippen:

![Abbildung: Terminal mit eingetipptem Kommando](/images/terminal-pwd.png)

In dieser Abbildung ist die Eingabe gelb markiert.  Die Antwort der Shell ist blau markiert.

Das Kommando **pwd** steht für "print working directory", also "gib das Arbeitsverzeichnis aus".
Die Ausgabe ist also der **Pfad** des Arbeitsverzeichnisses.
In menschliche Sprache übersetzt lautet dieser Dialog ungefähr: 

* Frage an die Shell: "wo bin ich gerade?" 
* Antwort: "du bis im Ordner **Users** im Unter-Ordner **bjelline**"

Zu diesem Befehl gibt es keine Entsprechung in der grafischen Oberfläche
des Betriebssystems.  Um z.B. im Finder auf Mac OS X heraus zu finden
welcher Ordner aktuell angezeigt wird genügt ein Blick auf die Titelzeile, 
wo der Pfad angezeigt wird.  In der Abbildung unten ist das **/Users/bjelline**.

![Abbildung: Finder zeigt Arbeitsverzeichnis](/images/shell-pwd.png)

### Pfade

Im Kapitel über [Absolute und relative URLs](/urls/absolut-relativ/) haben
Sie schon gesehen wie absolute und relative URLs interpretiert werden.
Pfadangaben im Dateisystem sind sogar etwas einfacher.

Unter Mac OS X und UNIX werden die Teile eines Pfades mit einem "Slash" / getrennt.
Das Dateisystem hat einen "Hauptordner" in dem alle weiteren Ordner
und Dateien zu finden sind, er wird "root" (also "die Wurzel") genannt.  
Eine Absolute Pfadangabe beginnt mit einem Slash und bezieht sich auf diesen Hauptordner.

Der Pfad

    /Users/bjelline

ist also eine Datei oder ein Ordner namens **bjelline**, der sich in einem Ordner **Users** befindet,
der sich im Root-Ordner befindet.  Ein relativer Pfad beginnt nicht mit einem Slash.  


Unter Windows ist das Trennzeichen ein Backslash **\\**. 
Es kann mehrere **Laufwerke** geben, die mit Buchstaben
bezeichnet werden (z.B. **c:**) und die jeweils einen eigenen Root-Ordner
enthalten.  Ein absoluter Pfad beginnt mit der Laufwerksangabe:

    c:\Users\bjelline

ist eine ist also eine Datei oder ein Ordner namens **bjelline**, der sich in einem Ordner **Users** befindet,
der sich im Root-Ordner des Laufwerks **C** befindet.  Ein relativer Pfad beginnt 
nicht mit einem Laufwerk.


### Die Oberfläche lügt!

Sowohl der Windows Explorer als auch der Mac OS X Finder stellen das Dateisystem
nicht wahrheitsgemäß dar.  Sie übersetzen einige Namen:  

    Mac OS X:
    echter Pfad:            /Users/bjelline/Music/
    Darstellung im Finder:  /Users/bjelline/Musik/
    echter Pfad:            /Users/bjelline/Sites/
    Darstellung im Finder:  /Users/bjelline/Websites/


Für die Programmierung ist immer der wirklich Pfad relevant, der auf der Kommandozeile angezeigt wird.

### Dateien und Ordner auflisten

Der Finder (bzw. Windows Explorer) beantwortet auch die Frage welche Dateien
und Ordner sich im aktuellen Ordner befinden.  Auf der Kommandozeile fragen
Sie diese Information mit dem Befehl **ls** ab:

<shell caption="Dateien und Ordner auflisten">
bash-3.2$ ls 
Desktop  Documents  Downloads  Dropbox  Library  Movies  Music  Pictures  Public
</shell>

In der einfachen Version erhält man wirklich nur die Namen der Dateien und Ordner,
so wie in dieser Darstellung im Finder:

![Abbildung: Dateien und Ordner auflisten mit ls](/images/shell-ls.png)

Viele Kommandozeilen-Befehle kann man mit "Optionen" abwandeln.  Eine Option
wird nach dem Namen des Befehls eingegeben, und beginnt meist mit einem Minus.
Die Option **-l** zum Befehl **ls** führt dazu, dass mehr Informationen angezeigt werden:


<shell caption="Dateien und Ordner auflisten mit Details">
bash-3.2$ ls -l
total 0
drwx------ 2 bjelline staff 68 Mär  1 20:21 Desktop
drwx------ 2 bjelline staff 68 Mär  1 20:21 Documents
drwx------ 2 bjelline staff 68 Mär  1 20:21 Downloads
drwx------ 2 bjelline staff 68 Mär  1 20:21 Dropbox
drwx------ 2 bjelline staff 68 Mär  1 20:21 Library
drwx------ 2 bjelline staff 68 Mär  1 20:21 Movies
drwx------ 2 bjelline staff 68 Mär  1 20:21 Music
drwx------ 2 bjelline staff 68 Mär  1 20:21 Pictures
drwxr-xr-x 2 bjelline staff 68 Mär  2 09:18 Public
</shell>

Das erste Zeichen zeigt an ob es sich um eine Datei ("-") oder einen Ordner ("d") handelt.
Hier sind es nur Ordner. Danach folgen Informationen über Zugriffsrechte, und das Datum der
letzten Änderung. Die Zugriffsrechte von UNIX werde in einem [eigenem Kapitel](/kommandozeile/zugriffsrechte/)
behandelt.

![Abbildung: Dateien und Ordner auflisten mit ls](/images/shell-ls-l.png)
 
Mit der Option **-a** zum Befehl **ls** werden auch "versteckte Dateien" angezeigt.
Das sind unter UNIX Dateien und Ordner deren Namen mit einem Punkt beginnen.
Zwei gibt es immer: **.** verweist auf den aktuellen Ordner selbst, **..** verweist
auf den übergeordneten Ordner.  In folgendem Beispiel werden auch noch drei
weitere Dateien angezeigt:


<shell caption="Dateien und Ordner auflisten inklusive geheimer Dateien">
bash-3.2$ ls -la
total 12
drwxr-xr-x   14 bjelline staff  476 Mär  2 09:29 .
drwxr-xr-x+ 232 bjelline staff 7888 Mär  2 09:29 ..
-rw-------    1 bjelline staff    3 Mär  2 09:19 .CFUserTextEncoding
-rw-------    1 bjelline staff   11 Mär  2 09:28 .bash_history
-rw-------    1 bjelline staff   80 Mär  2 09:29 .bash_profile
drwx------    2 bjelline staff   68 Mär  1 20:21 Desktop
drwx------    2 bjelline staff   68 Mär  1 20:21 Documents
drwx------    2 bjelline staff   68 Mär  1 20:21 Downloads
drwx------    2 bjelline staff   68 Mär  1 20:21 Dropbox
drwx------    2 bjelline staff   68 Mär  1 20:21 Library
drwx------    2 bjelline staff   68 Mär  1 20:21 Movies
drwx------    2 bjelline staff   68 Mär  1 20:21 Music
drwx------    2 bjelline staff   68 Mär  1 20:21 Pictures
drwxr-xr-x    2 bjelline staff   68 Mär  2 09:18 Public
</shell>

![Abbildung: Dateien und Ordner auflisten mit ls](/images/shell-ls-la.png)
