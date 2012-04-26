---
title: Authentifizierung und Session-Management
order: 30
---

Rund um Authentifizierung und Session-Management treten viele Probleme auf.

## Keine Information in Fehlermeldungen preisgeben

Authentisierung kann aus vielen Gründen fehl schlagen: 
* der Username existiert gar nicht
* dieser Account ist gesperrt
* das Passwort passt nicht

Egal was die Gründe sind: die Rückmeldung an die UserIn muss immer genau gleich ausfallen:

  "Login Fehlgeschlagen - Falscher Username oder Falsches Passwort"

Warum? Die Information, ob ein bestimmter Username im System exisitiert ist wertvoll! Es
ist ja bereits die Hälfte der nötigen Information für ein Login. Deswegen soll man die Existenz
von Usernamen genau so geheim halten wie die Passwörter.

## Session ID wie Passwort schützen

Das Protokoll HTTP ist stateless.  Wenn man trotzdem UserInnen Authentifizieren
will, dann muss bei jedem Request eine Authentifizierende Information, zum Beispiel eine Session-ID,
mitgeschickt werden.  Dies geschieht zum Beispiel in einem Cookie.  Wenn es gelingt diese Information abzuhören und wieder
zu verwenden, dann erhält man den gleichen Zugang wie die eigentliche UserIn.

Deswegen ist es notwendig jeden Request über SSL/TLS zu verschlüsseln!

Nicht nur Passwörter, sondern auch Session Ids sind überall vor dem Abhören zu schützen - auch in Logfiles.

## Nicht selbst implementieren

Es ist sehr schwierig, ein sicheres Authentifizierungs- und Session-Management zu implementieren. Man sollte nicht auf eigene Lösungen setzen - Diese haben dann oft Fehler bei Abmeldung und Passwortmanagement, bei der Wiedererkennung der BenutzerInnen, bei Timeouts, Sicherheitsabfragen usw. Das Auffinden dieser Fehler kann sehr schwierig sein, besonders wenn es sich um individuelle Implementierungen handelt.

PHP liefert bereits ein fertiges Session-System.

## Neue Session wenn bei Login / Logout / neuen Rechten

Bei der "Session Fixation" Attacke versucht die HackerIn eine Session-ID für eine andere BenutzerIn  der
attackierten Site vorzugeben.  Wenn das gelingt, und sich die andere BenutzerIn später einloggt, kann die HackerIn
mit der bekannten Session ID die Session der anderen BenutzerIn (inklusive Rechte) übernehmen.

Um diese Art der Attacke zu vermeiden muss man beim Login und Logout jeweils eine neue Session starten.

In PHP geht das mit den befehlen:

<php caption="neue Session starten nach erfolgreichem Login">
  session_start();
  session_regenerate_id();
  session_destroy();
  unset($_SESSION);
  session_start();
</php>

## Mehr

Siehe [Authentication Cheat Sheet](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet)

Siehe [Session Management Cheat Sheet](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet)
