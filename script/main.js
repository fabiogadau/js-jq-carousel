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

  prevArrow.click( function() {
    if (img4.hasClass('active')) {
      img4.removeClass('active');
      img4.prev().addClass('active');
    }
    else if (img3.hasClass('active')) {
      img3.removeClass('active');
      img3.prev().addClass('active');
    }
    else if (img2.hasClass('active')) {
      img2.removeClass('active');
      img2.prev().addClass('active');
    }
    else if (img1.hasClass('active')) {
      img1.removeClass('active');
      last.addClass('active');
    }
  });

  nextArrow.click( function() {
    if (img1.hasClass('active')) {
      img1.removeClass('active');
      img1.next().addClass('active');
    }
    else if (img2.hasClass('active')) {
      img2.removeClass('active');
      img2.next().addClass('active');
    }
    else if (img3.hasClass('active')) {
      img3.removeClass('active');
      img3.next().addClass('active');
    }
    else if (img4.hasClass('active')) {
      img4.removeClass('active');
      first.addClass('active');
    }
  });

});
