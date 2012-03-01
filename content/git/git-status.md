---
title: Status von Git abfragen
order: 40
---
Mit dem Befehl git status kann man den aktuellen Zustand des lokalen Repositories und der working copy abfragen. Bevor man mit der Arbeit beginnt ist die working copy clean:

      D:\Webprojekte\wp2>git status
# On branch master
nothing to commit (working directory clean)

Wenn ich nun zwei Dateien verändere zeigt mir git status das genau an:

      D:\Webprojekte\wp2>git status
      # On branch master
      #
      # Changed but not updated:
      #   (use "git add <file>..." to update what will be committed)
      #   (use "git checkout -- <file>..." to discard changes in working directory)
      #
      #       modified:   bestellung.php
      #       modified:   form.html
      #
      no changes added to commit (use "git add" and/or "git commit -a")

Nach dem git add werden die beiden Dateien als gestaged angezeit:

      D:\Webprojekte\wp2>git status
      # On branch master
      #
      # Changes to be committed:
      #   (use "git reset HEAD <file>..." to unstage)
      #
      #       modified:   bestellung.php
      #       modified:   form.html
      #

Nach dem Commit ist die working copy wieder clean. 


Mit git log kann man die alten Commits anzeigen:

      D:\Webprojekte\wp2>git log
      commit d01a7db9b741b14dfb95dc810b4c002122565560
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Mar 23 17:07:44 2011 +0100

          von get auf post umgestellt - wir sind restful!

      commit 409ef21529e863499bf745531c79e33d6766cf47
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Mar 23 17:04:11 2011 +0100

          bestellung funktioniert jetzt

      commit 5ce70fd6a71aba84b839aa3424af1b4a9f0bcf41
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Mar 9 14:01:45 2011 +0100

          bestellformular da, bestellung geht noch nicht

für git log gibt es viele verschiedene optionen, die verschiedene Details anzeigen, z.B. --numstat zeitgt die Anzahl der hinzugefügten und gelöschten Zeilen in jeder veränderten Datei

      D:\Webprojekte\wp2>git log –numstat
      commit d01a7db9b741b14dfb95dc810b4c002122565560
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Mar 23 17:07:44 2011 +0100

          von get auf post umgestellt - wir sind restful!

      17      5       bestellung.php
      10      7       form.html







