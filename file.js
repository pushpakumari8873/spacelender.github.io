//   javascript code for discover section

$(document).ready(function () {
  $(".post-wrapperrr").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $(".next1"),
    prevArrow: $(".prev1"),

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow:1,
        },
      },
    ],
  });
});

// javascript code for sticy navbar

$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass("black");
  }
});
