const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 20,
  autoHeight: true,
});

ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [7.839483397658993, 98.30119763555001],
    zoom: 15,
  });
}
