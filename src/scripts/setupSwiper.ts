import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

/**
 * Swiperの初期化
 */
export const setupSwiper = () => {
  const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 24,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Pagination, Autoplay, Navigation],
  });
};
