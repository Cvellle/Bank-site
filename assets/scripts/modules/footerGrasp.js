$(document).ready(function () {
  const $box = $("#mobileDiv");

  let a = false;
  let b = false;

  $(window).scroll(function () {
    if (
      $(window).scrollTop() >
      $(".footer").offset().top + $(window).height() / 10
    ) {
      a = true;

      if (a !== b) {
        TweenLite.fromTo(
          $box,
          2,
          { y: "+=0" },
          {
            y: 0,
            ease: Power4.easeInOut,
            duration: 2,
          }
        );
      }
      b = true;
    }
  });
});
