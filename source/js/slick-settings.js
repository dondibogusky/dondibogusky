$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
    infinite: true,
    mobileFirst: true,
    lazyLoad: 'ondemand',
    speed: 300,
    variableWidth: false,
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
    ]
  });
});
