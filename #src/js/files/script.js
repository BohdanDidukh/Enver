import { isMobile } from "./functions.js";

import { flsModules } from "./modules.js";

$(document).ready(function () {
  $('.slider__block').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          appendArrows: $('.slider__buttons'),
          prevArrow: '<button class="slide-arrow prev-arrow"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.10575 0.361659C8.49844 0.754353 8.49844 1.39104 8.10575 1.78373L2.78345 7.10603L8.10575 12.4283C8.49844 12.821 8.49844 13.4577 8.10575 13.8504C7.71305 14.2431 7.07637 14.2431 6.68368 13.8504L0.650345 7.81706C0.257651 7.42437 0.257651 6.78769 0.650345 6.39499L6.68368 0.361659C7.07637 -0.0310348 7.71305 -0.0310348 8.10575 0.361659Z" fill="white"/></svg></button>',
          nextArrow: '<button class="slide-arrow next-arrow"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.661342 13.8498C0.268648 13.4571 0.268648 12.8204 0.661342 12.4277L5.98364 7.1054L0.661341 1.7831C0.268647 1.39041 0.268647 0.753724 0.661341 0.361031C1.05403 -0.0316639 1.69072 -0.0316639 2.08341 0.36103L8.11674 6.39436C8.50944 6.78706 8.50944 7.42374 8.11674 7.81643L2.08341 13.8498C1.69072 14.2425 1.05404 14.2425 0.661342 13.8498Z" fill="white"/></svg></button>',

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          appendArrows: $('.slider__buttons'),
          prevArrow: '<button class="slide-arrow prev-arrow"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.10575 0.361659C8.49844 0.754353 8.49844 1.39104 8.10575 1.78373L2.78345 7.10603L8.10575 12.4283C8.49844 12.821 8.49844 13.4577 8.10575 13.8504C7.71305 14.2431 7.07637 14.2431 6.68368 13.8504L0.650345 7.81706C0.257651 7.42437 0.257651 6.78769 0.650345 6.39499L6.68368 0.361659C7.07637 -0.0310348 7.71305 -0.0310348 8.10575 0.361659Z" fill="white"/></svg></button>',
          nextArrow: '<button class="slide-arrow next-arrow"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.661342 13.8498C0.268648 13.4571 0.268648 12.8204 0.661342 12.4277L5.98364 7.1054L0.661341 1.7831C0.268647 1.39041 0.268647 0.753724 0.661341 0.361031C1.05403 -0.0316639 1.69072 -0.0316639 2.08341 0.36103L8.11674 6.39436C8.50944 6.78706 8.50944 7.42374 8.11674 7.81643L2.08341 13.8498C1.69072 14.2425 1.05404 14.2425 0.661342 13.8498Z" fill="white"/></svg></button>',

        }
      }
    ]
  });
});

$(document).ready(function () {
  $(".menu__body").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });
})


$(document).ready(function () {
  $(".menu__body").on("click", ".menu__item", function () {
    document.documentElement.classList.remove("menu-open");
    document.documentElement.classList.remove("lock");
  });
});