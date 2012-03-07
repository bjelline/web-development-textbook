---
title: Multimedia-Dateien
order: 90
---

Während Texte in Artikeln und Seiten gespeichert werden, müssen Bilde-, Audio-, und Video-Dateien („Attachments“) erst einmal separat hochgeladen werden. Direkt im Editor für Artikel oder Seiten finden Sie den Link zum Uploader:


![Abbildung 109: Menü für den Upload von Datei im Editor](/images/wordpress-media-upload.png)


Die hochgeladenen Dateien werden einen Unter-Ordner von wp-content/uploads hochgeladen, und haben damit euch eine entsprechende URL.  zeigt den relevanten Teil der Ordnerstruktur:


![Abbildung 111: Ordnerstruktur für hochgeladene Attachment-Dateien (Audio, Video)](/images/wordpress-uploads.png)


Bei der genauen Betrachtung dieser Dateien und Ordner erkennen Sie, dass Wordpress unter einem andere (UNIX) User arbeitet als Sie selbst. Meist hat dieser User einen Namen wie „wwwdata“ oder „apache“. Die Zugriffsrechte im upload-Ordner müssen also so gesetzt sein, dass dieser fremde User Dateien speichern darf!

Hinweis: nur die Bilder (z.B. mit FTP) in den richtigen Ordner zu speichern ist nicht ausreichend, es ist auch ein Eintrag in der Datenbank notwendig.  Dieser Eintrag wird gemacht, wenn man den Wordpress Uploader verwendet.

Anschliessend können diese Dateien auf verschiedene Arten im Artikel bzw. in der Seite eingebunden werden. Ein Bild kann als „Artikelbild“ festgelegt werden, und wird dann bei manchen Themes besonders angezeigt.


![Abbildung 112: Verwendung von Bildern in Wordpress](/images/wordpress-bild-einfuegen.png)


