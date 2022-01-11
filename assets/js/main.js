$(document).ready(function() {
 
  $('.burger-icon').click((e) => {
    $('.main-nav-mobile-container').addClass('active');
  });

  $('.close-icon').click((e) => {
    $('.main-nav-mobile-container').removeClass('active');
  });

  let mobileNavExpand1 = false;
  $('.nav-mobile-body ul .expand-menu.exp1 a').click(() => {
    mobileNavExpand1 = !mobileNavExpand1;
    if(!mobileNavExpand1) {
      $('.nav-mobile-body ul .expand-menu ul').removeClass('active')
    } else {
      $('.nav-mobile-body ul .expand-menu ul').addClass('active');
    }
  });

  $('.right-layanan-banner .button-ckb-1').click((event) => {
    $('html, body').animate({
      scrollTop: $('.target-scroll').offset().top - 29
    }, 1500);
  });

  $(window).scroll(function() {
    const scrollTopWindow = $(this).scrollTop();
    const getElement = $('.target-scroll');
    const getDetailBlogContainer = $('.detail-blog-container');

    if (scrollTopWindow >= getElement.offset().top) {
      $('.header-container').find('div:first').removeClass('header-inner');
      $('.header-container').find('div:first').addClass('header-inner-new');

      $('.header-container').find('div:first')
        .children('.top-nav').children('.top-nav-inner').children('.social-media-container')
        .empty();

      $('.header-container').find('div:first')
        .children('.top-nav').children('.top-nav-inner').children('.social-media-container')
        .append(`<img src="assets/image/icon-facebook-dark.svg" alt="">
        <img src="assets/image/icon-instagram-dark.svg" alt="">
        <img src="assets/image/icon-linkedin-dark.svg" alt="">`);

      $('.nav-section-mobile > .burger-icon').attr('src', 'assets/image/burger-icon-right-dark.png');

      if(getDetailBlogContainer) { $('.new-artice-container').addClass('sticky-article'); }
      
    } else {
      $('.header-container').find('div:first').removeClass('header-inner-new');
      $('.header-container').find('div:first').addClass('header-inner');

      $('.header-container').find('div:first')
      .children('.top-nav').children('.top-nav-inner').children('.social-media-container')
      .empty();

      $('.header-container').find('div:first')
      .children('.top-nav').children('.top-nav-inner').children('.social-media-container')
      .append(`<img src="assets/image/icon-facebook.svg" alt="">
      <img src="assets/image/icon-instagram.svg" alt="">
      <img src="assets/image/icon-linkedin.svg" alt="">`);

      $('.nav-section-mobile > .burger-icon').attr('src', 'assets/image/burger-icon-right-light.png');

      if(getDetailBlogContainer) { $('.new-artice-container').removeClass('sticky-article'); }
    }
  });

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });

});