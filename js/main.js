
const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});