---
title: Formulardaten Prüfen mit jQuery
order: 50
---
In Kapitel 4.5.6 (Seite 85) haben Sie gelernt wie Sie mit Javascript die Daten eines Webformulars prüfen können bevor das Formular abgesendet wird. Mit jQuery können wir dieses Programm noch verfeinern: Jeweils beim betroffenen Eingabefeld wird direkt eine Fehlermeldung angezeigt:

<htmlcode>
  <script src="jquery-1.2.3.min.js"></script>
  <script>

    $(document).ready(function(){
          $("form").submit(function(){
              var ok = true;
             var $i = null;
              
              $("span.error").remove();

              $i = $("input[name=liefername]");
              if($i.val() == "") {
                  $i.after('<span class="error">den Empfänger angeben</span>');
                   ok = false;
              } 

              $i = $("input[name=adresse]");
              if($i.val() == "") {
                  $i.after('<span class="error">Lieferadresse angeben</span>');
                  ok = false;
              }

              return ok;
          });
    });

  </script>
  </head>
  <body>
  <form action = "bestell.php">

  <label>Empfänger: <input type="text" name="liefername"> </label>
  <label>Adresse: <input type="text" name="adresse"> </label>
  <label>Telefon/Handy: <input type="text" name="tel"> </label>

  <input name="" type="submit">
  </form>
</htmlcode>

