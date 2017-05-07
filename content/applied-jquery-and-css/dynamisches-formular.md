---
title: Dynamisches Formular
order: 40
---

<div class="alert"><strong>ToDo</strong> fertig stellen </div>

Für die Bestellung von drei Pizzen müssen
erst drei Zeilen zum Formular hinzu gefügt werden:

![dynamic pizza form](dynamic-pizza-form.png)

## Dynamisches Formular planen

Das Hinzufügen von zusätzlichen Zeilen bzw. Eingabeelementen
kann man mit jQuery gut umsetzen. 

![](/images/dynamic-pizza-form.png)


Achtung: die Eingabefelder
brauchen eindeutige Namen.

    <li class="a_pizza">
      <p>Pizza Sicilia</p>
        <div class="flex-inner">
          <label><input name="hot[2]" type="checkbox"> Scharf</label>
          <label><input name="cheese[2]" type="checkbox"> mit extra Käse</label>
          <label>für <input name="fuer[2]" placeholder="Christian" type="text"></label>
          <input name="pizza[2]" value="Pizza Sicilia" type="hidden">
      </div></li>
    <li class="a_pizza">
      <p>Pizza Margherita</p>
        <div class="flex-inner">
          <label><input name="hot[1]" type="checkbox"> Scharf</label>
          <label><input name="cheese[1]" type="checkbox"> mit extra Käse</label>
          <label>für <input name="fuer[1]" placeholder="Christian" type="text"></label>
          <input name="pizza[1]" value="Pizza Margherita" type="hidden">
      </div>
    </li>      

Wenn PHP die Daten entgegen nimmt speichert
es sie gleich in Arrays:

<php>
Array
(
    [pizza] => Array
        (
            [2] => Pizza ai Spinaci
            [1] => Pizza Salami
        )
    [fuer] => Array
        (
            [2] => Brigitte
            [1] => Gerlinde
        )
    [hot] => Array
        (
            [1] => on
        )
    [cheese] => Array
        (
            [2] => on
        )
)  
</php>


## Wert aus dem select-Tag auslesen

<javascript>
  $('#add_next_pizza').on('click', function( event ){
    event.preventDefault();
    let pizza_type = $('#next_pizza').val();
    // ....
  });  
</javascript>


## HTML einfügen

<javascript>
  // this verweist auf den angeklickten button
  // Suche unter seinen Vorfahren den nächsten `li`-Tag
  let $li = $(this).parents('li');

  let template = `<li class='a_pizza'>
     <p>${pizza_type}</p>
     ...
     </li>`;

  $li.after(template);
</javascript>

## Vertiefung

* [Homepage von Selectator](http://opensource.faroemedia.com/selectator/)


