"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
}); // swiper js

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
