$(document).ready(function () {
  $(".js-hamburger").click(function () {
    $(".header-navigation").slideToggle();
  });

  // Accordion
  $(".accordion-list > li > .answer").hide();
  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

  // Testimonial Slider
  $("#testimonialSlider").owlCarousel({
    loop: true,
    margin: 20,
    slideBy: 3,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
}); // End Ready Function

// Scroll to Top
$(".scrollToTop").hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $(".header").addClass("fixed");
    $(".scrollToTop").fadeIn();
  } else {
    $(".header").removeClass("fixed");
    $(".scrollToTop").fadeOut();
  }
});
$(function () {
  $(".scrollToTop").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 300);
    return false;
  });
});

// Set top margin to body as per header height
jQuery(window).resize(function () {
  var header_height = jQuery(".header").outerHeight();
  jQuery("body").css("margin-top", header_height + "px");
});

jQuery(document).ready(function () {
  var header_height = jQuery(".header").outerHeight();
  jQuery("body").css("margin-top", header_height + "px");
});

// Set top to header-navigation as per header height
jQuery(window).resize(function () {
  if ($(window).width() <= 767) {
    var header_height = jQuery(".header").outerHeight();
    jQuery(".header-navigation").css("top", header_height + "px");
  }
});

jQuery(document).ready(function () {
  if ($(window).width() <= 767) {
    var header_height = jQuery(".header").outerHeight();
    jQuery(".header-navigation").css("top", header_height + "px");
  }
});

// Mobile Menu
jQuery(document).ready(function () {
  $(".header .dropdown").click(function () {
    $(this).find(".dropdown-menu").slideToggle();
  });
});

// Section Linking
$(".section-link").on("click", function (e) {
  e.preventDefault();

  var header_height = jQuery(".header").outerHeight();

  var self = $(this);
  target = self.data("target");
  subject = $('[data-section-name="' + target + '"]');
  offset = subject.offset().top - header_height + 30;

  $("html, body").animate(
    {
      scrollTop: offset,
    },
    500
  );
});
