---
title: Session und Login
order: 10
---
Bis jetzt war jeder Zugriff auf die Webapplikation unabhängig von jedem anderen Zugriff: die PHP-Applikation weiß nicht, ob 10 verschiedene Leute die Homepage abrufen oder ob eine Person die Seite 10mal lädt.

Das ist eine Grundeigenschaft von HTTP: es ist „stateless“ (zustandslos).  Das Gegenteil davon wäre „statefull“ (zustandsbehaftet).

Also kann man mit HTTP alleine – wie wir es bisher kennen – kein „Login“ schaffen. Um zu wissen, dass der User Bob eingeloggt ist müsste er ja „wiedererkannt“ werden. Genau das macht den „state“ aus.

Cookies
--------
Um das zu ermöglichen wurde das HTTP-Protokoll um die sogenannten „Cookies“ erweitert: Ein Cookie besteht aus bis zu 4096 Bytes Daten, die der Webbrowser lokal speichert, und bei jedem Zugriff auf den Webserver wieder mitsendet. Der Browser sendet nie ein Cookie an einen anderen Webserver als den von dem er es erhalten hat. Er kann aber viele verschiedene Cookies von verschiedenen Servern speichern (In einem Cookie-Jar).


![Abbildung 145: Cookie wird gesetzt und bei jedem weiteren Request gesendet](/images/image363.png)


An Hand dieses Cookies kann eine Webapplikation einen bestimmten User wiedererkennen. Cookies können als Teil des HTTP-Protocols (nur) vom Server gesetzt werden. Dabei wird der Name des Cookies angegeben, der Wert der gespeichert werden soll, und der Gültigkeitsbereich und Zeitraum:

<javascript>
Set-Cookie: style=gelb
Set-Cookie: style=gelb; path=/admin/
Set-Cookie: style=gelb; expires=Tue, 29-Mar-2015 19:30:42 GMT; path=/admin/
</javascript>

Die einzige Art ein Cookie zu löschen ist ein Cookie mit gleichem Namen und Ablaufdatum in der Vergangenheit zu setzen:


<javascript>
Set-Cookie: style=wurscht; expires=Tue, 29-Mar-2005 19:30:42 GMT; path=/admin/
</javascript>

### Cookies in PHP


In PHP finden Sie die bereits gesetzten Cookies, die vom Browser zurückgesendet wurden im Array $_COOKIES (und — zusammen mit GET und POST-Parametern — in $_REQUEST). Neue Cookies können Sie mit setcookie() setzen. 


### Cookies in Javascript


Im Client können Cookies mit Javascript gelesen und geschrieben werden. Dies funktioniert über eine Zuweisung an die Eigenschaft document.cookie.

Achtung: beim lesenden Zugriff auf diese Eigenschaft enthält man einen String mit allen Cookies die gerade gültig sind. 

Zum Setzen von neuen Cookies wird auf die Eigenschaft zugewiesen. Zum Setzen mehrere Cookies wird wiederholt zugewiesen — das hat aber (noch) keinen Einfluß auf den Wert den man aus document.cookie auslesen kann:

<javascript>
alert(document.cookie);  // Zeigt die gültigen Cookies

document.cookie = "farbe:grün";
document.cookie = "anzahl: 3";
document.cookie = "passwort: total super geheimes aber recht langes passwort";
alert(document.cookie);  // Zeigt immer noch die ALTEN Cookies !!!
</javascript>

Erst wenn ein neuer Request an den Server erfolgt, werden die neu gesetzten Cookies mit gesendet: erst wenn die Antwort wieder dargestellt wird, sind die neuen Cookies in Javascript über document.cookie lesbar!

Session
--------
PHP kann das Setzen des Cookies automatisch erledigen, und geht sogar noch einen Schritt weiter:

Mit dem Befehle  session_start() wird 

* …beim ersten Aufruf automatisch ein Cookie gesetzt. Wenn danach Daten im Array $_SESSION Daten gespeichert werden, sorgt PHP dafür dass die Daten am Server permanent gespeichert werden und damit beim nächsten Programmaufruf wieder zur Verfügung stehen.
* …bei jedem weiteren Aufruf die Session an Hand des Cookies wieder identifiziert, und die Daten wieder ins $_SESSION-Array geladen.
Für unsere Applikation werden wir das verwenden, um den Usernamen des angemeldeten Users zu speichern. session_start() wird in functions.php ausgeführt, also bei jedem Aufruf einer der Seiten der Applikation. Die Applikation zeigt direkt in der Navigationsleiste die Login/Logout-Möglichkeit und den Namen des eingeloggten Users an:


![Abbildung 146: Anzeige des Usernamens und Login/Logout-Möglichkeit](/images/image364.png)

Das Login-Formular (Dateiname `login.php`) sieht ganz einfach aus und sendet die Daten mit POST wieder an `login.php`:

![Abbildung 147: Login-Formular der Applikation](/images/image365.png)

Username und Passwort werden überprüft, falls Sie passen wird der Username in der Session gespeichert. Mit dem Befehl header("Location: index.php") wird der Browser dann automatisch an die Hauptseite weitergeleitet. 

<php caption="Überprüfung von username und passwort">
if ( strlen($username) > 0  and check_login( $username, $passwort ) ) {
    $_SESSION['USER'] = $username;
    header("Location: index.php");
    exit;
}
</php>

Nach dem gelungen Login kann man jede beliebige Seite der Applikation aufrufen, immer wird im Array `$_SESSION` der Username gespeichert sein. So kann er z.B. in der Navigation angezeigt werden wie in Abbildung 142 gezeigt.

Das Logout erfolgt ebenfalls mit der Methode POST:

<htmlcode>
  <form action="logout.php" method="post">
      <input type="submit" value="Logout" />
  </form>
</htmlcode>

Das Logout ist etwas umständlich zu Programmieren: das Cookie, das von PHP gesetzt wurde, muß man nun selbst löschen. Dazu wird das „Ablaufdatum“ des Cookies auf ein Datum in der Vergangenheit gesetzt, dann wird der Browser es löschen.

<php>
  // Löschen aller Session-Variablen.
  $_SESSION = array();

  // Löscht das Session-Cookie.
  if (isset($_COOKIE[session_name()])) {
    setcookie(
         session_name(),  // Cookie-Name war gleich Name der Session 
         '',             // Cookie-Daten. Achtung! Leerer String hier hilft nicht!
         time()-42000,  // Ablaufdatum in der Vergangenheit. Erst das führt zur Löschung!
         '/'           // Wirkungsbereich des Cookies: der ganze Server
     );
  }
  session_destroy();
  header("Location: index.php")
</php>

Achtung: das Setzen und Löschen der Session-Cookies dauert immer einen Request länger als gedacht! Deswegen ist eine Weiterleitung wie hier mit Location: sinnvoll. 

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

Hier noch mal die Dateien:


|Titel | Dateiname |  Method/Parameter       | Beschreibung          |
|+-----|+----------|+------------------------|+----------------------|
|Login | login.php | GET                     |  Zeigt Login-Formular |
|Login | login.php | POST username, passwort |  Prüft Login + setzt Session. → Leitet weiter an index.php |
|Logout| logout.php|POST                     |  Löscht die Session. Leitet weiter an index.php |
{: class="table table-condensed table-bordered" style="width:auto"}


Eine Weiterleitung nach der Behandlung eines POST-Requests ist allgemein sinnvoll.


![Abbildung 148: Login mit einer Weiterleitung](/images/image366.png)

