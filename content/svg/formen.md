---
title: Grundformen in SVG
order: 20
---

Mit den Tags `circle`, `rect`, `ellipse`, `path` und `polygon` werden 
simple geometrische Elemente definiert.

<svg width="700" height="200">
  <g transform="translate(10,30) scale(1.5,1.5)">
    <rect width="66" height="30" x="21" y="32" stroke="#204a87" fill="#204a87" fill-opacity="0.6" stroke-width="2" />
    <text x="21" y="82">Rechteck</text>
    <circle  cx="144" cy="38"  r="18"         stroke="#4e9a06" fill="#4e9a06" fill-opacity="0.6" stroke-width="2" />
    <ellipse cx="170" cy="43" rx="27" ry="15" stroke="#73d216" fill="#73d216" fill-opacity="0.6" stroke-width="2" />
    <text x="122" y="81">Kreis + Ellipse</text>
  </g>
  <g transform="translate(340,-137) scale(1.5,1.5)">
    <path d="M 12,170 C 39,182 43,154 49,142 C 62,114 101,145 101,145"
          fill="#ef2929" fill-opacity="0.62" stroke="#a40000" stroke-width="2"/>
    <path d="M 149,109 L 149,127 L 127,144 L 140,172 L 188,167 L 191,119 L 149,109 z"
          fill="#edd400" fill-opacity="0.59" stroke="#c4a000" stroke-width="2" />
    <text x="35" y="192">Pfad</text>
    <text x="141" y="192">Polygon</text>
  </g>
</svg> 


### Kreis, Ellipse, Rechteck

Das Rechteck wird die Position seiner oberen linken Ecke, seiner Breite und seiner Höhe definiert. Der
Kreis über Mittelpunkt und Radius, die Ellipse über Mittelpunkt und zwei Halbradien.

<htmlcode caption="Kreis und Ellipse">
 <circle  cx="144" cy="38" r="18" 
          stroke="#4e9a06" stroke-width="2" 
          fill="#4e9a06"   fill-opacity="0.6"  />
 <ellipse cx="170" cy="43" rx="27" ry="15" 
          stroke="#73d216" stroke-width="2" 
          fill="#73d216" fill-opacity="0.6" />
</htmlcode>

Viele Attribute kann man alternativ auch über CSS definieren.

<htmlcode caption="Attribute per CSS">
 <circle style="cx: 144px; cy: 38px; r: 18px; stroke: #4e9a06; stroke-width: 2px; fill: #4e9a06; fill-opacity:0.6;"  />
 <ellipse cx="170" cy="43" rx="27" ry="15" 
          style="stroke: #73d216; stroke-width: 2px; fill: #73d216; fill-opacity:0.6;" />
</htmlcode>

### Pfad und Polygon

Für Pfade und Polygone wird eine Kurzschreibweise verwendet, bei der mehrere Punkte in
ein einziges Attribut `d` des Tags geschreiben werden. Ein Pfad besteht aus Befehlen und Koordinaten.
Zwischen den Koordinaten kann man Kommas und beliebigen Whitespace einfügen.

<htmlcode caption="SVG">
    <path d="M 149,109 L 149,127 L 127 144    L 140,172    L 188,167 L 191,119 L 149,109 z"
          fill="#edd400" fill-opacity="0.59" stroke="#c4a000" stroke-width="2" />
</htmlcode>

Wird der Befehl als Großbuchstaben geschrieben, dann werden die Koordinaten
absolut interpretier, bei einem Kleinbuchstaben werden sie relativ interpretiert.
Folgende Befehle erwarten eine fixe Anzahl von Koordinaten:

|Buchstabe | Befehl          | Parameter | Beschreibung                                             |
|:--------:|:----------------|:----------|:---------------------------------------------------------|
| M,m      | MoveTo          | x y       | Gehe zu dem angegebenen Punkt ohne eine Linie zu ziehen  |
| H,h      | HLineTo         | x         | Ziehe eine horizontale Linie zur angegebenen Koordinate  |
| V,v      | VLineTo         | y         | Ziehe eine vertikale Linie zur angegebenen Koordinate    |
| Z,z      | Close Path      |           | Schliesse den Pfad (gehe zurück zum Anfangspunkt)        |
{: class="table table-condensed table-bordered" style="width:auto"}

Folgende Befehle können mehrere Koordinaten auf einmal erhalten. Wie in der EBNF-Schreibweise
wird hier die Wiederholung durch Klammern und ein + dargestellt:

<svg width="700" height="100">
  <path d="M   0,10 l 50,50 50,-50 50,50 50,-50 50,50"                   stroke="red"    stroke-width="2" fill="none" />
  <path d="M 270,35 q 25,-50 50,0  25,50 50,0   q 25,-25 50,0  q 25,25 50,0" stroke="orange" stroke-width="2" fill="none" />
</svg>

<htmlcode caption="Beispiel für LineTo und Quadratic B">
  <path d="M   0 10 l 50,50  50,-50 50,50 50,-50 50,50" />
  <path d="M 270 35 q 25,-50 50,0 25,50 50,0 q 25,-25 50,0 q 25,25 50,0" />
</htmlcode>


| Buchstabe | Befehl          | Parameter | Beschreibung                                             |
|:---------:|:----------------|:----------|:---------------------------------------------------------|
| L,l       | LineTo          | (x y)+    | Ziehe gerade Linie zu den angegebenen Punken              |
| Q,q       | quadratic Bézier curveto | (x1 y1 x y)+    | Kurve zu x,y mit x1,y1 als Stützpunkt der beiden Tangenten |
| C,c       | cubic Bézier curveto | <nobr>(x1 y1 x2 y2 x y)+</nobr> | Kurve zu x,y mit x1,y1 und x2,y2 als Stützpunkte der Tangenten |
{: class="table table-condensed table-bordered" style="width:auto"}

### Text

Mit dem Tag `text` kann Text in SVG gesetzt werden. Das ist
an und für sich noch nicht sehr spannend:

<htmlcode caption="Text in SVG">
    <text x="122" y="81">Kreis + Ellipse</text>
</htmlcode>

Mit dem Tag `textpath` kann der Text entlang eines
beliebigen Pfades gesetzt werden.

<svg width="600" height="200">
  <g transform="scale(0.5,0.5)">
    <defs>
      <path id="my_path"
            d="M 100,200 
               C 200,100 300,  0 400,100
               C 500,200 600,300 700,200
               C 800,100 900,100 900,100" />
    </defs>

    <use xlink:href="#my_path" fill="none" stroke="gray"  />
    <text font-family="Verdana" font-size="42.5" fill="red" >
      <textPath xlink:href="#my_path">
        Es geht hinauf, und hinunter, und wieder...
      </textPath>
    </text>
  </g>
</svg>

