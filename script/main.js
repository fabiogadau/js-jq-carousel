/*
* CREARE UNO SLIDER DI IMMAGINI
*/
$(document).ready( function() {

  // Referenze
  var prevArrow = $('.prev-arrow');
  var nextArrow = $('.next-arrow');
  
  var img1 = $('.img1');
  var img2 = $('.img2');
  var img3 = $('.img3');
  var img4 = $('.img4');
  var first = $('.first');
  var last = $('.last');
  
  var dot1 = $('.dot1');
  var dot2 = $('.dot2');
  var dot3 = $('.dot3');
  var dot4 = $('.dot4');
  var firstDot = $('.first-dot');
  var lastDot = $('.last-dot');

 // Invoco le funzioni
 // Click freccia sinistra
  prevArrow.click( function() {
    back()
  });

  // Click freccia destra
  nextArrow.click( function() {
    go()
  });

  // Click tasto sinistra
  function keyLeft() {
    back()
  };

  // Click tasto destra
  function keyRight() {
    go()
  };

  // Funzioni
  // Funzione per tornare indietro
  function back(){
    if (img4.hasClass('active')) {
      img4.removeClass('active');
      img4.prev().addClass('active');
      dot4.removeClass('dot-active').prev().addClass('dot-active');
    }
    else if (img3.hasClass('active')) {
      img3.removeClass('active');
      img3.prev().addClass('active');
      dot3.removeClass('dot-active').prev().addClass('dot-active');
    }
    else if (img2.hasClass('active')) {
      img2.removeClass('active');
      img2.prev().addClass('active');
      dot2.removeClass('dot-active').prev().addClass('dot-active');
    }
    else if (img1.hasClass('active')) {
      img1.removeClass('active');
      last.addClass('active');
      dot1.removeClass('dot-active');
      lastDot.addClass('dot-active');
    }
  };

  // Funzione per andare avanti
  function go(){
    if (img1.hasClass('active')) {
      img1.removeClass('active');
      img1.next().addClass('active');
      dot1.removeClass('dot-active').next().addClass('dot-active');
    }
    else if (img2.hasClass('active')) {
      img2.removeClass('active');
      img2.next().addClass('active');
      dot2.removeClass('dot-active').next().addClass('dot-active');
    }
    else if (img3.hasClass('active')) {
      img3.removeClass('active');
      img3.next().addClass('active');
      dot3.removeClass('dot-active').next().addClass('dot-active');
    }
    else if (img4.hasClass('active')) {
      img4.removeClass('active');
      first.addClass('active');
      dot4.removeClass('dot-active');
      firstDot.addClass('dot-active');
    }
  };

  // Funzione per tastiera
  $(document).keydown( function(event) {
    switch (event.keyCode) {
      case 37:
        keyLeft()
        break
      case 39:
        keyRight()
        break
    };
  });

});
