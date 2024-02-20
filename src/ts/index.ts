// Handle interactions with the menu button.
// import { mobileNav } from './modules/mobile-nav.js';
// mobileNav();

// Handle interactions with the close tagline button.
import { tagline } from './modules/tagline';
tagline();

// Import Swiper.
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
