$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
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

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    spaceBetween: 20,
    autoHeight: true,
  });

  let menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".navbar__buttom").classList.toggle("navbar__buttom--active");
    document.querySelector("body").classList.toggle("lock");
  });

  let modalButton = $("[data-toggle=modal]");
  modalButton.on("click", openModal);
    function openModal() {
      let modalOverlay = $(".modal__overlay");
      let modaDialog = $(".modal__dialog");
      modalOverlay.addClass(".modal__overlay--visible");
      modalDialog.addClass(".modal__dialog--visible");
    }
    uflbyf
});
