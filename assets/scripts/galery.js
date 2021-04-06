'use strict';

function selectAllImg() {
  $('.portfolio-container__page').css('display', 'block');
}

function landingPageImg() {
  $('.landing').css('display', 'block');
  $('.shop').css('display', 'none');
  $('.blog').css('display', 'none');
}

function shopPageImg() {
  $('.landing').css('display', 'none');
  $('.shop').css('display', 'block');
  $('.blog').css('display', 'none');
}

function blogPageImg() {
  $('.landing').css('display', 'none');
  $('.shop').css('display', 'none');
  $('.blog').css('display', 'block');
}

$(function () {
  $('.zoom').click(function () {
    $('.overlay').addClass('active');
    $('.popup').addClass('active');
    $('.zoom').css('display', 'none');

    var activeImg = $(this).attr('href');
    $(activeImg).fadeIn();
  });

  $('.close').click(function () {
    $('.overlay').removeClass('active');
    $('.popup').removeClass('active');
    $('.full-image').hide();
    $('.zoom').css('display', 'block');
  });

  $(document).on('click', '.overlay', function() {
    $('.overlay').removeClass('active');
    $('.popup').removeClass('active');
    $('.full-image').hide();
    $('.zoom').css('display', 'block');
  });

  $('.overlay').click(function () {
    $('.overlay').removeClass('active');
    $('.popup').removeClass('active');
    $('.full-image').hide();
    $('.zoom').css('display', 'block');
  });
});