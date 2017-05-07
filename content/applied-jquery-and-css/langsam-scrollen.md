---
title: Langsam Scrollen
order: 25
---

<div class="alert"><strong>ToDo</strong> fertig stellen </div>


Wenn ein "interner" Link, ein Link zu einer Textmarke
in derselben Seite, angeklickt wird, dann soll das Fenster
langsam zur Zielposition scrollen. 


## Interne Links mit Hash

    <nav>
      <li><a href="#hero">Home</a></li>
      <li><a href="#menu">Speisekarte</a></li>
      <li><a href="#order">Online Bestellen</a></li>
      <li><a href="#guest">Gästebuch</a></li>
      <li><a href="#newsletter">Newsletter</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </nav>
    ....
    <section id="order">
    ....
    <footer id="contact">


## Normalen Link verhindern

<javascript>
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash; // z.B. '#order'

      ...
    }
  }); 
</javascript>


## Position der Textmarke errechnen

<javascript>
$(hash).offset().top
</javascript>


## Animation des Fensters 

<javascript>
   $("html,body").animate({scrollTop: pos}, 800);
</javascript>




