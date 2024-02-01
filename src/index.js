import './main.css';
import './styles.css';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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

var modal = document.getElementById("myModal");
var modalBody = document.getElementById("modalBody");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.className = "hidden";
    document.body.classList.remove('overflow-y-hidden');
}

document.querySelectorAll(".modal-trigger").forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        var targetId = this.getAttribute('data-modal-target');
        var content = document.getElementById(targetId).innerHTML;
        openModal(content);
    });
});

function openModal(content) {
    document.body.classList.add('overflow-y-hidden');
    modalBody.innerHTML = content;
    modal.className = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        document.body.classList.remove('overflow-y-hidden');
        modal.className = "hidden";
    }
}
