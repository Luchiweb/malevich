import './styles.css';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'




const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    effect: 'fade',
    speed: 1200,
    loop: true,
    centeredSlides: true,

    autoplay: true,

    fadeEffect: {
        crossFade: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

});

// document.addEventListener("DOMContentLoaded", () => {
//     const tabs = document.querySelectorAll(".tab");
//     const tabContents = document.querySelectorAll(".tab-content");

//     tabs.forEach(tab => {
//         tab.addEventListener("click", () => {
//             const target = document.querySelector(tab.dataset.tabTarget);

//             tabContents.forEach(tc => {
//                 tc.classList.add("hidden");
//             });

//             tabs.forEach(t => {
//                 t.classList.remove("active-tab");
//             });

//             target.classList.remove("hidden");
//             tab.classList.add("active-tab");
//         });
//     });
// })