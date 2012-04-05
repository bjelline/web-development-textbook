---
title: DOM
order: 30
---

Lesen aus dem DOM 
-------------------
Die wichstigsten Befehle zur Manipulation des DOM finden Sie in selfhtml unter „document“ und „node“. Ein Node ist ein Knoten DOM-Baum, entspricht also einem HTML-Tag oder einem Stück Text. Die Attribute des HTML-Tags sind über getAttribute / setAttribute / … zugänglich und manipulierbar.

Hier eine Liste der wichtigen Objekte, Methoden, Eigenschaften für die DOM:

<javascript>
  document.getElementById() 
  document.getElementsByTagName() 
  document.createElement()
  document.querySelectorAll()   (liefert Array)
  document.querySelector()      (liefert 1 Node)

  node.parentNode   (liefert 1 Node)
  node.childNodes   (liefert Array von Nodes)
  node.firstChild
  node.lastChild
  node.previousSibling
  node.nextSibling
  node.data
  node.attributes
  node.innerHTML


  node.getElementById() 
  node.getElementsByTagName() 
  node.getElementsByClassName() 

  node.appendChild()
  node.cloneNode()
  node.getAttribute()
  node.setAttribute()
  node.hasChildNodes()
  node.insertBefore()
  node.removeAttribute()
  node.removeChild()
  node.replaceChild()
</javascript>


Ein simples Beispiel: ein bestimmter Tag wird über die ID ausgewählt und sein Style-Attribut gesetzt:

<javascript>
  d = document.getElementById("person_25“);
  d.setAttribute("style", "display:none");
</javascript>

Diese beiden Zeilen könnten auch zu einer kombiniert werden:

<javascript>
  document.getElementById("person_25“).setAttribute("style", "display:none");
</javascript>

Achtung: Falls der Tag schon ein Style-Attribute hatte wurde dieses überschrieben.  Der Wert des Attributes ist ein einfacher String.

Man kann CSS-Selektoren verwenden um Element auszuwählen, und zwar mit der Methode `document.querySelectorAll()`:

<javascript>
  inputs = document.querySelectorAll("input");

  i=0;

  while(i &lt; inputs.length) {

      console.log("input mit name " + inputs[i].name );
      i++;
  }
</javascript>

Den eigentlichen Text der HTML-Seite kann man als data eines Text-Nodes auslesen.

<htmlcode>
  <span id="v_25" class="vorname">Benjamin</span>
</htmlcode>

Das erste und einzige Kind des Span ist ein Text-Node:

<javascript>
  vn = document.getElementById("v_25").firstChild.data;
</javascript>

oder – etwas kürzer – über die Eigenschaft textContent:

<javascript>
  vn = document.getElementById("v_25").textContent;
</javascript>

`textContent` funktioniert auch bei Nodes die noch weitere verschachtelte Tags enthalten und extrahiert immer den gesamten Text aus allen “Blättern” des DOM-Baums.

Manipulation des DOM 
----------------------
Noch einmal eine Liste der wichtigen Objekte, Methoden, Eigenschaften die für das Erzeugen, Zerstören oder Verändern des DOM notwendig sind:

<javascript>
  document.createElement()

  node.innerHTML

  node.appendChild()
  node.cloneNode()
  node.insertBefore()
  node.removeChild()
  node.replaceChild()

  node.setAttribute()
  node.removeAttribute()
</javascript>


Das Einfügen eines ganz neuen Elements in die Webseite ist am einfachsten mit der Eigenschaft `innerHTML`:

<javascript>
  document.querySelector("body").innerHTML = "<p>Alles <b>ganz</b> neu</p>“;
</javascript>

Mit `cloneNode` kann man einen ganzen Teil-Baum duplizieren, und wo anders wieder einfügen. So kann man z.B. in einem Pizza-Bestell-Formular die Eingabeelement für eine Pizza in einer div zusammenfassen:

<htmlcode>
  <div class="pizza">
    <p>
      <select name="pizzatype[]">
        <option>Magaritha</option>
        <option>Vegetarian</option>
        <option>Quattro Staggione</option>
      </select>
      <br />
      <label>add Garlic  <select name="addgarlic[]">
          <option>no</option><option>yes</option>
      </select></label>
      <label>add Cheese <select name="addcheese[]">
          <option>no</option><option>yes</option>
      </select></label>
      <label>anything else?<input type="text" name="comment[]"  /></label>
    </p>
  </div>
</htmlcode>

Dieses div kann man dann clonen, falls man mehrere Pizzen braucht:

<javascript>
  var first_pizza = document.querySelector("div.pizza");
  var new_pizza = first_pizza.cloneNode(true);
  first_pizza.insertBefore(new_pizza, null);
</javascript>

Einfügen von Event Handlern
-----------------------------
Wir haben im Kapitel 4.5.5 schon gesehen, wie Event-Handler direkt im HTML definiert werden können:

<htmlcode>
  <input value="0" name="in"  onchange="hier Javascript">
</htmlcode>

Mit der Methode addEventListener kann das auch von Javascript aus erfolgen. Hier wieder am Beispiel des Pizza-Bestellformulars: mit einem kleinen „x“ in der rechten obere Ecke soll man eine Pizza löschen können.


![Abbildung 59: Pizza löschen mit Klick auf das x in der rechten oberen Ecke](/images/image265.png)

Im HTML-Code fügen wir dafür einen span-Tag ein:

<htmlcode>
 <div class="pizza">
    <p>
      <span class="removethis">x</span>
      <select name="pizzatype[]">…</select>
      …
    </p>
  </div>
</htmlcode>

Im Javascript-Code können wir nun das Event an den span-Tag binden. Dafür müssen wir erst eine Funktion definieren, die aufgerufen werden soll, hier heisst die funktion removeMe. Mit addEventListener können wir dann die Funktion als zuständig für das click-event am span.removthis definieren.

<javascript>
  function removeMe(e){
     var me = e.target;
     var my_pizza = me.parentNode.parentNode;
     my_pizza.parentNode.removeChild( my_pizza ); 
  }
  document.querySelector(".removethis").addEventListener("click", removeMe, false); 
</javascript>

