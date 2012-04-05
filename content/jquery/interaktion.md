---
title: Interaktion mit jQuery
order: 40
---
jQuery bietet eine etwas kürzere Schriebweise statt addEventListener an. Z.B. die Methode click: als Argument wird nur eine Funktion übergeben, die aufgerufen werden soll wenn das Event feuert. Hier kommen meist anonyme Funktionen zum Einsatz:

<javascript>
  $("h1").click(function() {
      alert("ein h1 wurde geklickt");
  });
</javascript>

Innerhalb der Funktion steht die Variable this zu Verfügung um den angeklickten Tag als jQuery Objekt zu erhalten:

<javascript>
  $("h1").click(function() {
      $(this).hide();   /* versteckt den angeklickten h1 tag */
  });
</javascript>

Dazu ein vollständiges Beispiel: zu mehreren Überschriften gibt es Text, der bei Klick auf die Überschrift versteckt bzw. angezeigt werden soll:

<htmlcode>
  <h2 class="more">Vertiefendes Studium</h2>
  <div class="extra">
  <p>Das Schwerpunktstudium Vertiefung ermöglicht den Erwerb hoch spezialisierter Qualifikationen in einer gestalterischen Fachdisziplin. </p></div> 
  <h2 class="more">Steuerung</h2>
  <div class="extra">
  <p>Das Schwerpunktstudium Steuerung zielt auf die Ausbildung von Führungskräften der Kreativwirtschaft.</p> 
  </div>
</htmlcode>

Dazu das vollständige Javascript-Programm mit jQuery:

<htmlcode>
  <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
  <script> 
  $(document).ready(function(){ 
      $(".extra").hide();
      $(".more").click(function(){
          $(this).next(".extra").toggle();
      });
  }); 
  </script>
</htmlcode>

`this`  ist innerhalb der Funktion der angeklickte Tag. Mit dem jQuery-Befehl `next()` wird nach dem nächsten Tag im HTML-Code gesucht, hier nach dem nächsten Tag mit der Klasse extra. Auf den gefundenen Tag wird der befehl `toggle()` angewandt, der zwishcen sichtbar und unsichtbar hin und her schlatet (er setzt dafür die CSS Eigenschaft `display:none`)

