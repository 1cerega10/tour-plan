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
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", cloesModal);

  function openModal() {
    let modalOverlay = $(".modal__overlay ");
    let modalDialog = $(".modal__dialog");
    let modalBody = $("body");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    modalBody.addClass("overflow");
  }
  function cloesModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    let modalBody = $("body");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    modalBody.removeClass("overflow");
    $(document).on("keyup", function (event) {
      if (event.keyCode == 27) {
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        modalBody.removeClass("overflow");
      }
    });
  }
  document.querySelector('.modal-dialog__close').addEventListener('click', modalClose)
  document.querySelector(".modal__overlay").addEventListener("click", modalClose);
  document.addEventListener('keyup', e => {
    if (e.code == 'Escape') modalClose()
  });
  function modalClose() {
    document.querySelector(".modal__overlay").classList.remove('.modal__overlay--active');
    document.querySelector(".modal-dialog").classList.remove(".modal-dialog--active");
    document.querySelector('body').classList.remove('overflow-hedden');
  }


});
