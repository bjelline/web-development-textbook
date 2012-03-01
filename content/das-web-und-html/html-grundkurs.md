---
title: HTML Grundkurs
order: 30
---
Wir werden HTML in der Version 5 verwendet. Die wichtigsten HTML-Tags (Links, Bilder, 
Tabellen, Formulare) werden Sie bald auswendig können. Alle Details können Sie Intenet 
nachschlagen. 

HTML hat sich in den ca. 20 Jahren seines Bestehens weit entwickelt. Die Version 5, die wir 
verwenden, ist ein relativ neuer Standard, der aber in den aktuellen Versionen der gägnigen 
Browsern bereits umgesetzt ist. 

In den letzten 10 Jahren wurde auch XHTML neben HTML verwendet. Das X von XHTML 
steht für die Kompatibilität mit XML  <!-- XE "XML" -->  . Die Dateien haben dabei weiterhin die 
Endung .htm oder .html (nur sehr selten oder .xhtm, .xhtml). Im Unterschied zu HTML war 
XHTML strenger in der Schreibweise. Am Web finden Sie sowohl Tutorials zu HTML als 
auch zu XHTML – lassen Sie sich davon nicht verwirren!

HTML-Dateien bestehen aus reinem Text, in unserem Falle entweder aus Text im Format 
ISO 8859-1 (Latin-1)  oder im Format utf-8. Abbildung 8 zeigt wie dieses Format im 
Windows Notpad / Editor gesetzt wird: ISO 8859-1 wird hier als ANSI bezeichnet. 
 
![Abbildung 8: Auswahl des Charactersets „Unicode“  ](/images/image037.jpg)

beim Speichern mit dem Windows Notepad / Editor und dem Mac TextWrangler

Sonderzeichen
-------------

Sonderzeichen in HTML nennt man „character entities  <!-- XE "character entities" -->  “. Sie haben 
die From &entityname; 

Folgende Character Entities müssen Sie verwenden:

|Gewünschtes Zeichen|Character Entity|
|:--------:|:-------:|
| <                 | &amp;lt;  |
| >                 | &amp;gt;  |
| &                 | &amp;amp; |
{: class="table table-condensed table-bordered" style="width:auto"}

Folgende Character Entities können Sie vermeiden, indem Sie das Zeichen selbst im Code 
verwenden:

|Gewünschtes Zeichen|Character Entity|
|:--------:|:-------:|
|Ä                  | &amp;Auml;  |
|ä                  | &amp;auml;  |
|ß                  | &amp;szlig; |
{: class="table table-condensed table-bordered" style="width:auto"}

HTML-Tags
---------

Die gewünschte Formatierung des Textes wird mit HTML-Tag  <!-- XE "Tag" -->  s angegeben

1.  Tags sind zwischen spitzen Klammern eingeschlossen. 
2.  Zu (fast) jedem "Anfangs-Tag" gibt es einen "End-Tag", der sich nur durch den Schrägstrich vom Anfangs-Tag unterscheidet.  Z. B. <p>hier der Absatz</p>. 
3.  Nur in XHTML müssen "alleinstehende" Tags mit einem Schrägstrich am Ende geschrieben werden:  <br /> In HTML5 schreibt man diesen Tag (wieder) als  <br> 
4.  In XHTML werden Tags immer klein geschrieben, bei HTML ist  die Groß- oder Kleinschreibung egal. 


1.4.3	Whitespace 
Sogenannter "whitespace  <!-- XE "whitespace" -->  " - das sind mehrere Leerzeichen, 
Tabulatoren und Zeilenumbrüche hintereinander – wird vom Browser völlig ignoriert. Ob Sie 
also in Ihrer HTML-Datei ein Leerzeichen oder 7 Leerzeilen einfügen macht keinen 
Unterschied. (gar kein Leerzeichen oder ein Leerzeichen macht schon einen Unterschied) 
Die folgenden beiden Dokumente sind also äquivalent:

<htmlcode caption="Nur ein zeilenumbruch; Darstellung gleich wie im nächsten Beispiel">
    <p>Halli 
    Hallo</p>
</htmlcode>

<htmlcode caption="Mehrere zeilenumbrüche; Darstellung gleich wie im vorhgehenden Beispiel">
    <p>
    Halli
    Hallo
    </p>
</htmlcode>

Nur die Tags beeinflussen die Darstellung der Webseite. Sie müssen den Tag <br  <!-- XE "br" -->   
> verwenden um einen Zeilenumbruch  <!-- XE "Zeilenumbruch" -->   auf der Webseite zu erzeugen 
– dies ist aber nur selten sinnvoll, da der Browser einen automatischen Zeilenumbruch 
durchführt. 

Attribute
---------

Manche Tags können Attribute enthalten. Ein Beispiel ist der Tag <img  <!-- XE "img" -->  > der ein 
Bild  <!-- XE "Bild" -->   in die Seite einfügt (Englisch: Image). Die wichtigsten Attribute von <img> 
sind src  <!-- XE "src" -->   (von Source = Quelle) und alt  <!-- XE "alt" -->   (Alternative Darstellung). 

    <img src="neu.gif" alt="Das ist neu!">

Es ist egal, in welcher Reihenfolge Sie die Attribute schreiben:

    <img alt="Das ist neu!" src="neu.gif">

oder

    <img                   alt="Das ist Neu!"  
    src="neu.gif"    
    bli="bla, blo" 
    >

Das Attribut bli, welches nicht zu HTML gehört, also kein Browser kennt, wird wie andere 
unbekannte Attribute einfach ignoriert. 
Der Wert eines Attributes muß in Anführungszeichen geschrieben werden. (in HTML gab es 
eine Ausnahme für Werte die keine Leerzeichen enthalten (wie z. B. Zahlen), diese konnten 
auch ohne Anführungszeichen geschrieben werden, bei XHTML ist das verboten)

    <img alt="Das ist Neu!" src="neu.gif" 
    width=50 height=15>

ACHTUNG: ein häufiger Fehler ist es, das zweite Anführungszeichen zu vergessen:

    <img alt="Das ist neu!" src="neu.gif >

Kompatibilität 
--------------

Jeder Browser (egal ob Chrome, Firefox, Safari, Microsoft Internet Explorer, Opera,...) kann 
jedes HTML-Dokument darstellen. Mit jedem Editor (egal ob Dreamweaver, Frontpage, 
GoLive,... ) kann jedes HTML-Dokument bearbeitet werden. Neue Tags, die z. B. ein 
Browser nicht erkennt, sind zu ignorieren – es gibt keine Fehlermeldungen!

Wenn das W3C in HTML Version 21 beispielsweise den neuen Tag &lt;jump&gt; (hüpfenden Text) 
einführen würde, können Sie diesen Tag auf Ihrer Webseite verwenden. Der Text würde 
jedoch nur in den neuesten Versionen der Browser (die schon die Version 21 kennen) 
hüpfend dargestellt. In älteren Browsern wird der Tag &lt;jump&gt; ignoriert:

<htmlcode caption="Ein Browser der den jump-Tag schon kennt stellt ihn entsprechend dar">
    <p>Dies ist meine erste 
    <jump>supercoole</jump> 
    Webseite!!!! </p>
</htmlcode>

<htmlcode caption="Ein älterer Browser ignoriert den jump-Tag; er liest also">
    <p>Dies ist meine erste supercoole 
    Webseite!!!!</p>
</htmlcode>

Bevor Sie also einen neuen Tag einsetzen, sollten Sie sich darüber klar sein, welche 
Versionen der Browser diesen Tag darstellen und wie viel Prozent Ihres Zielpublikums schon 
eine passende Browser-Version benutzen. Meist können Sie eine Seite so gestalten, dass 
auch mit älteren Browsern der gesamte Inhalt lesbar ist. 


<htmlcode caption="In älteren Browser geht die Information verloren">
    <p>Zu den hüpfenden Terminen 
    sind noch Plätze im Kurs frei: 
    </p> 
    <ul> 
    <li><jump>Montag</jump></li> 
    <li>Dienstag</li> 
    <ul>
</htmlcode>


<htmlcode caption="In allen Browser wird die Information dargestellt">
    <p>Zu den markierten Terminen sind 
    noch Plätze im Kurs frei</p> 
    <ul> 
    <li><jump>Montag *</jump></li> 
    <li>Dienstag</li> 
    </ul>
</htmlcode>

Diese Herangehensweise an Neuerungen nennt man „graceful degradation“ 
<!--XE graceful degradation --> – davon werden Sie noch viel hören.

Hinweis: Der &lt;jump&gt;–Tag ist ein Scherz, den gibt es nicht wirklich, und wird es hoffentlich 
nie geben. 

Text formatieren
----------------

Wir unterscheiden zwischen HTML-Tags die Blöcke definieren, und solchen die das nicht tun. 
Blockbildende Tags beanspruchen immer einen rechteckigen Bereich bei der Ausgabe, nicht 
blockbildende Tags tun das nicht.
 
![Abbildung 9: Darstellung von blockbildenden (grau hinterlegten) und nicht-blockbildenden (rot hinterlegten) Tags](/images/image042.png)

Der em-Tag ist nicht-blockbildend und wird im zweiten Absatz auf zwei Zeilen umgebrochen. 

Blockbildende Tags für Text

<htmlcode caption="Normaler Fließ-Text">
    <p>Text text text, text text. Text 
    text text, text text. Text text 
    text, text text. Text und text text, 
    text text. </p>
</htmlcode>

<htmlcode caption="Zentrierter Text
    <p style="text-align:center;">Text 
    text text, text text. Text text 
    text, text text. Text text text, 
    text text. Text und text text, text 
    text. </p>
</htmlcode>

<htmlcode caption="Überschriften"
    <h1>Überschriftstext</h1>
    <h2>Überschriftstext</h2>
    <h3>Überschriftstext</h3>
</htmlcode>

<htmlcode caption="Bereich mit Navigations-Menü, Links">
    <nav>  
       <a href="index.html">Home</a> 
       .... 
    </nav>
</htmlcode>


<htmlcode caption="Weitere Tags zur Strukturierung der Seite">
    <header> .... </header>
    <footer> .... </footer>
    <aside> .... </aside>
</htmlcode>

<htmlcode caption="Block-Zitat (eingerückt)">
    <blockquote>Alle meine Entchen<br> 
    schwimmen auf dem See</blockquote>
</htmlcode>

Nicht-Blockbildende Tags für Text 

Diese müssen Sie innerhalb eines Blocks verwenden. Diese Formate werden unterschieden 
in logische und physische Elemente. 

Die logischen Tags geben die genaue Darstellung nicht vor. 

|Gewünschte Darstellung|Code|
|:---|:---|
|Sehr stark betonter Text (meist fett)|Eine <strong>wichtige</strong> Sache|
|Betonter Text (meist kursiv)|und eine <em>interessante</em> Sache|
{: class="table table-condensed table-bordered" style="width:auto"}

Physische Tags geben die genaue Darstellung vor. Das sind eigentlich „altmodische 
Tags“,  besonders der font-Tag wurde schon um das Jahr 2000 herum durch Stylesheets 
vollständig ersetzt, und sollte möglichst nicht mehr verwendet werden. (Sie werden ihn aber 
in „alten“ Dokumenten noch finden):


|Gewünschte Darstellung|Code|
|:---|:---|
|Fettgedruckter Text|Eine <b>fette</b> Sache|
|Kursiver Text |und eine <i>schräge</i> Sache|
|Text in einer bestimmten Schriftart |<font face="Arial">Text</font>|
|Text in einer bestimmen Farbe |<font color="red">rot</font>|
|Text in einer bestimmten Schriftart, moderne Schreibweise |<span style="font-family:Arial;">Text</span>|
|Text in einer bestimmen Farbe |<span style="color:red;">rot</span>|
{: class="table table-condensed table-bordered" style="width:auto"}

Bilder
------

Bilder werden in separaten Dateien gespeichert, in der HTML-Datei erfolgt nur ein Verweis 
auf die Bild  <!-- XE "Bild" -->  datei. Als Attribut src  <!-- XE "src" -->   im img-Tag können Sie eine 
absolute oder relative URL angeben:

|Gewünschte Darstellung|Code|
|:---|:---|
|Bild (URL absolut) |<img src="http://www.google.at/intl/de_at/images/logo.gif" alt="Google"> 
|Bild (URL relativ) |<img src="neu.gif">
|Bild mit Ersatztext (enthält wichtige Information) |<img src="10prozent.gif" alt="jetzt 10% verbilligt!">
|Bild ohne Alternativtext (nur Dekoration) |<img src="zierleiste.gif" alt="">
|Bild nach links (Text fließt rechts vorbei) |<img src="neu.gif" style="float:left;" alt="neu">
{: class="table table-condensed table-bordered" style="width:auto"}

Für Blinde, Suchmaschinen, Browser die keine Bilder darstellen können, u.s.w. gibt man für 
jedes Bild einen Alternativtext  <!-- XE "Alternativtext" -->   (Attribut alt  <!-- XE "alt" -->  ) an. Mit dem AddOn 
„Web Developer“ kann man testen wie die Seite mit ALT statt Bildern aussieht. 
Abbildung 10 zeigt die Verwendung dieses Features am Beispiel eines Wetterberichts.
 
 
![Abbildung 10: Wetterbericht mit Bildern und ohne Bilder (nur ALT-Texte)](/images/image044.png)

Als Datenformate für <img>-Bilder werden drei Pixel-Formate von vielen Browsern 
unterstützt, erst seit kurzem auch das Vektor-Format svg:

gif
: Palette von 255 Farben + 1 Transparenz-Farbe (kein Alpha). „animiertes 
Gif“ enthält mehrere Bilder, die der Reihe nach angezeigt werden (Daumenkino). 
Besonders geeignet für Bilder mit klaren Kanten, einfärbigen Flächen, wenigen 
Farben, z. B. Comics, Logos.   <!-- XE "gif" -->  

jpg
: Millionen von Farben, variable Kompression, keine Transparenz. 
Besonders geeignet für Bilder mit Farbverläufen, z. B. Photos.   <!-- XE "jpg" -->  

png
: Nachfolge-Format für gif, mit Alpha-Transparenz.  <!-- XE "png" -->  

svg
: Vektor-Format, das Bild kann beliebig groß oder klein dargestellt werden.  


Ideal wäre, das Format auszuwählen, in dem das Bild nichts an Qualität verliert, und die 
Dateigröße möglichst gering ist. 

Weitere Arten Bilder zu erstellen werden wir später genauer betrachten: Mit dem 
canvas-Tag und Javascript kann man Bilder zeichnen. 


Links
-----

Als Attribut href  <!-- XE "href" -->   des Link  <!-- XE "Link" -->  skönnen Sie eine absolute oder relative 
URL angeben:
Link zu Webseite (absolute URL)
    <a href="http://cnn.com">zu CNN</a>
Link zu Webseite im selben Ordner (relative URL)  <!-- XE "a" -->  
    <a href="seite2.htm">mehr</a>
Link zu E-Mail Adresse
    <a href="mailto:aa@bb.cc">Mail</a>
Bild als Link
    <a href="seite2.htm"><img src="mehr.gif"alt="zur Seite 2"></a>

Gesamt-Struktur einer Webseite
------------------------------

Eine HTML Seite hat ein Grundgerüst.  <!-- XE "Doctype" -->    <!-- XE "head" -->    <!-- XE "body" -->   aus 
DOCTYPE, html, head und body. Der erste Tag ist der DOCTYPE, er gibt die Version von 
HTML an, die verwendet wird. Es folgt der HTML-Tag. Innerhalb des HTML-Tags gibt es erst 
einen HEAD und dann einen BODY-Tag – nicht mehr und nicht weniger.
Hier am Beispiel von HTML5: 

<htmlcode caption="Grundgerüst eines HTML5 Dokuments">
<!DOCTYPE HTML> 
<html>  
<head>  
    <meta charset="utf-8">  
    <title>Eine Webseite</title>  
</head> 
<body> 
    Hier die Tags, die Sie schon kennen  
</body> 
</html>
</htmlcode>

Bei XHTML ist der DOCTYPE sehr viel komplizierter. Der meta-Tag für die Auswahl des 
Charactersets ist ebenfalls komplizierter.

<htmlcode caption="Grundgerüst eines XHTML Dokuments">
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Eine Webseite</title>
</head>
<body>
     Hier die Tags, die Sie schon kennen.
</body>
</html>
</htmlcode>

Achtung: es kann nur einen head und einen body geben, keine Wiederholungen!

Listen
------

Listen  <!-- XE "Liste" -->    <!-- XE "ul" -->    <!-- XE "ol" -->    <!-- XE "li" -->   werden mit zwei verschachtelten Tags 
gebaut: der li-Tag für den einzelnen Listen-Punkt, und der ol- oder ul-Tag für die gesamte 
Liste. 

    <ul> 
        <li>punkti</li> 
        <li>punkti</li> 
    </ul>

    <ol> 
      <li>eins</li> 
      <li>zwei</li> 
      <li>drei</li> 
    </ol>

Tabellen 
--------

Um eine Tabelle  <!-- XE "Tabelle" -->    <!-- XE "table" -->    <!-- XE "tr" -->    <!-- XE "td" -->    <!-- XE "th" -->   zu erzeugen 
müssen Sie die Tags <table>, <tr> (Table Row = Tabellenhzeile) und <td> (Table Data) 
richtig ineinander verschachteln

    <table style="border-collapse:collapse;"> 
      <tr> 
        <td>Freitag</td> 
        <td>Samstag</td> 
        <td>Sonntag</td> 
      </tr> 
      <tr> 
        <td>lernen</td> 
        <td>lernen</td> 
        <td>lange schlafen</td> 
      </tr> 
    </table>

Der Rahmen der Tabelle ist normalerweise unsichtbar, mit einer Zeile CSS wird er hier auf 
sichtbar geschalten. Achtung! Diese Zeile muss innerhalb des <head>-Tags des Dokuments 
gespeichert sein, nicht innerhalb des <body> !

    <style>td {  border:2px #ddd solid; padding: 5px; }</style>

HTML-Tabellen wurden früher in Webseiten für das Layout  <!-- XE "Layout:mit Tabellen" -->   der 
Seite verwendet, diese Tabellenlayouts sind noch auf älteren Webseiten zu finden. Moderne 
Webseiten werden mit CSS-Layouts gestaltet.
Heute verwendet man Tabellen wirklich nur noch zur Darstellung von Tabellen. 

