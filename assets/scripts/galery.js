'use strict';

/*
function allImg() {
  var allImg = document.getElementsByClassName('portfolio-container__page');
  allImg.className.add = 'close'
}*/

function selectAllImg() {
  $('.portfolio-container__page').css('display', 'block');
}

function landingPageImg() {
  $('.landing').css('display', 'none');
}

function shopPageImg() {
  $('.shop').css('display', 'none');
}

function blogPageImg() {
  $('.blog').css('display', 'none');
}