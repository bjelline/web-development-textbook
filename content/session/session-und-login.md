---
title: Session und Login
order: 20
---

Ohne "state" ist jeder HTTP Request ein isoliertes Ereignis.
Mit der Einführung von Cookies, und damit von state, können
wir nun erkennen, dass mehere Requests zusammen gehören,
von derselben Person ausgelöst wurden. Wir nennen diese Folge
von Requests dann eine "Session".

Session
--------
PHP hilft beim Erkennen und Verwenden von Sessions:

Mit dem Befehle  `session_start()` wird 

* …beim ersten Aufruf automatisch ein Cookie gesetzt. Wenn danach im Array `$_SESSION` Daten gespeichert werden, sorgt PHP dafür dass die Daten am Server permanent gespeichert werden und damit beim nächsten Programmaufruf wieder zur Verfügung stehen.
* …bei jedem weiteren Aufruf die Session an Hand des Cookies wieder identifiziert, und die Daten wieder ins `$_SESSION`-Array geladen.
Für unsere Applikation werden wir das verwenden, um den Usernamen des angemeldeten Users zu speichern. `session_start()` wird in `functions.php` ausgeführt, also bei jedem Aufruf einer der Seiten der Applikation. Die Applikation zeigt direkt in der Navigationsleiste die Login/Logout-Möglichkeit und den Namen des eingeloggten Users an:


![Abbildung 146: Anzeige des Usernamens und Login/Logout-Möglichkeit](/images/image364.png)

§

Das Login-Formular (Dateiname `login.php`) sieht ganz einfach aus und sendet die Daten mit POST wieder an `login.php`:

![Abbildung 147: Login-Formular der Applikation](/images/image365.png)

Username und Passwort werden überprüft, falls Sie passen wird der Username in der Session gespeichert. Mit dem Befehl `header("Location: index.php")` wird der Browser dann automatisch an die Hauptseite weitergeleitet. 

<php caption="Überprüfung von username und passwort">
if ( strlen($username) > 0  and check_login( $username, $passwort ) ) {
    $_SESSION['USER'] = $username;
    header("Location: index.php");
    exit;
}
</php>

Nach dem gelungen Login kann man jede beliebige Seite der Applikation aufrufen, immer wird im Array `$_SESSION` der Username gespeichert sein. So kann er z.B. in der Navigations-Leiste angezeigt werden.

Das Logout erfolgt ebenfalls mit der Methode POST:

<htmlcode>
  <form action="logout.php" method="post">
      <input type="submit" value="Logout" />
  </form>
</htmlcode>

§

Das Logout ist etwas umständlich zu Programmieren: das Cookie, das von PHP gesetzt wurde, muß man nun selbst löschen. Dazu wird das „Ablaufdatum“ des Cookies auf ein Datum in der Vergangenheit gesetzt, dann wird der Browser es löschen.

<php>
// Löschen aller Session-Variablen.
$_SESSION = array();

// Löscht das Session-Cookie.
if (isset($_COOKIE[session_name()])) {
  setcookie(
    session_name(),  // Cookie-Name war gleich Name der Session 
    '',             // Cookie-Daten. Achtung! Leerer String hier hilft nicht!
    time()-42000,  // Ablaufdatum in der Vergangenheit. Erst das löscht!
    '/'           // Wirkungsbereich des Cookies: der ganze Server
   );
}
session_destroy();
header("Location: index.php")
</php>

§

Achtung: das Setzen und Löschen der Session-Cookies dauert immer einen Request länger als gedacht! Deswegen ist eine Weiterleitung mit `Location:` sinnvoll. 

Achtung: die Weiterleitung funktioniert nur, wenn noch keine Ausgabe erfolgt ist, also vor dem Laden der header-include-Datei. Hier am Beispiel von login:

<php>
<?php
    $pagetitle = "Login";
    include "functions.php";

    $username = $_POST['username'];
    $passwort = $_POST['passwort'];

    if ( strlen($username) > 0  and check_login( $username, $passwort ) ) {
        $_SESSION['USER'] = $username;	
        header("Location: index.php");
        exit;
    } 

    include "header.php";
</php>

§

Hier noch mal die Dateien:


|Titel | Dateiname |  Method/Parameter       | Beschreibung          |
|+-----|+----------|+------------------------|+----------------------|
|Login | login.php | GET                     |  Zeigt Login-Formular |
|Login | login.php | POST username, passwort |  Prüft Login + setzt Session. → Leitet weiter an index.php |
|Logout| logout.php|POST                     |  Löscht die Session. Leitet weiter an index.php |
{: class="table table-condensed table-bordered" style="width:auto"}


Eine Weiterleitung nach der Behandlung eines POST-Requests ist allgemein sinnvoll.


![Abbildung 148: Login mit einer Weiterleitung](/images/image366.png)

