$(document).ready(function () {
  const $box = $("#mobileDiv > div");
  let a = false;
  let b = false;
  const startAt = $(".footer").offset().top + $(window).height() / 10;

  $(window).scroll(function () {
    if ($(window).scrollTop() > startAt) {
      a = true;

      if (a !== b) {
        TweenLite.fromTo(
          $box,
          1.5,
          { y: "+=0" },
          {
            y: 0,
            ease: Power4.easeInOut,
          }
        );
      }
      b = true;
    }
  });
});
