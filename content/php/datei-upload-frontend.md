---
title: Datei Upload - Frontend
order: 65
---

## Frontend

Im "Frontend" gab es in den letzten Jahren einige Verbesserungen beim
Datei-Upload: in modernen Browsern kann man Dateien mit
"Drag-and-Drop" in den Browser befördern, und erst in einem
zweiten Schritt hochladen:

![Neu im Frontend: Drag and Drop in den Browser](/images/drag-and-drop-upload.gif)


### Drag-and-Drop entgegen nehmen

Wählen Sie einen Tag in der Webseite aus, der die Dateien entgegen nehmen
soll. (Es könnte auch der ganze Body sein).   Für diesen Tag müssen
die Events "dragenter", "dragover" und "drop" behandelt werden:

<javascript>
dropbox.addEventListener("dragenter", ignore_all, false);
dropbox.addEventListener("dragover", ignore_all, false);
dropbox.addEventListener("drop", handle_drop, false);

function ignore_all(e) {
    e.stopPropagation();
    e.preventDefault();
}

function handle_drop(e) {
    e.stopPropagation();
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
}
</javascript>

### Thumbnails darstellen

<javascript>
img.src = window.URL.createObjectURL(file);
</javascript>

### HTTP Request senden


<javascript>
var xhr = new XMLHttpRequest();
xhr.open("POST", "upload.php", true);
xhr.addEventListener("load", handle_load);
xhr.send();
</javascript>

wie mit dem Formular:

<javascript>
var xhr = new XMLHttpRequest();
var fd = new FormData();

xhr.open("POST", "upload.php", true);
xhr.responseType = "document";
xhr.addEventListener("load", handle_load);
fd.append('pic', file);
xhr.send(fd);
</javascript>

### Antwort des Servers behandeln

<javascript>
function handle_load(evt) {
    var response_doc = this.responseXML;
    ....
    if( this.status == 200 ) {
        ...
    } else {
        ....
        dropbox.removeChild(img);
    }
}
</javascript>



