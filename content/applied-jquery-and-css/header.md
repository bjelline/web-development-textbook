---
title: Fixe Kopfzeile mit Animation
order: 20
---

<div class="alert"><strong>ToDo</strong> fertig stellen </div>


Beim Scrollen einer Webseite soll der Header fix am oberen
Rand des Fenster bleiben. 

In folgendem Bild sind drei Zustände beim Scrollen
untereinander abgebildet:

![screenshot](/images/pizza-phases.jpg)




## "Fixed Position" mit CSS

<css>
header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  /* ... */
  color: #fff;
  padding: 35px 100px 0;
}
</css>

## Klasse Vorbereiten

<css>
header.shrunk {
  height: 70px;
  background-color: black;
  padding: 0 100px 0;  
}
</css>

## Transition vorbereiten

<css>
header {
  /* ... */

  will-change: background-color;
  will-change: padding;
  
  transition: padding 2s;  
  transition: background-color 2s;  
}
</css>


## Was ist Scrollen? 

<javascript>
  window.pageYOffset
</javascript>

## Scroll Event behandeln


<javascript>
  function set_header() {
    if ( window.pageYOffset >= 120 ) {
      $('header').addClass('shrunk');
    }
    else {
      $('header').removeClass('shrunk');
    }    
  }

  $(window).scroll(set_header);  
</javascript>


