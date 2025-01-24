jQuery(document).ready(function ($) {
  $('.custom-gallery-slider').not('.slick-initialized').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true
  });
});