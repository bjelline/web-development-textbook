---
title: 2d Canvas
order: 30
---


Der `canvas` Tag kann auf zwei Arten verwendet werden: für 2d und 3d Grafik.
Als 2d Grafik ist der Canvas einfach ein Rechteck aus Pixeln, auf das
man mit Javascript zeichnen und Bilder einkopieren kann:

![Bild](/images/2d-canvas.png)

Das Koordinatensystem des Canvas beginnt links oben.


## Canvas und Javascript

<javascript>
var w = 250,
    h = 250;
var my_canvas = document.getElementById("c");
var my_context = my_canvas.getContext("2d");

my_canvas.width = w;
my_canvas.height = h;
my_context.strokeStyle = "#4a4";
</javascript>

## Text setzen

<javascript>
my_context.font = "bold 12px sans-serif";
my_context.fillText("hier bin ich", 30, 50);
</javascript>

## Linien Zeichnen


<javascript>
my_context.moveTo(0,20);
my_context.lineTo(w,20);

for (var x = 0; x <= w; x += 25) {
    my_context.moveTo(w / 2, h / 2);
    my_context.lineTo(x, h);
}
my_context.stroke();
</javascript>

[fertiges bild](https://jsfiddle.net/bjelline/Gu83s/)

## Library

Aufbauend auf den Canvas gibt es viele Libraries, z.B:

* [Library Isomer](http://jdan.github.io/isomer/)

## Tutorials

* [Dive into Canvas](http://diveintohtml5.info/canvas.html)
