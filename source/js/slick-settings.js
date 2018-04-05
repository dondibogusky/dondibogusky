$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
    easing: 'swing',
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    mobileFirst: true,
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 542,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    speed: 250
  });
});
