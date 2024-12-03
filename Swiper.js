const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  breakpoints: {
    1119: {
      slidesPerColumn: 2,
      autoHeight: true,
      loop: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
