$(document).ready(function () {
  const $box = $("#mobileDiv > div");
  let a = false;
  let b = false;
  const startAt = $(window).height() / 2.5;

  $(window).scroll(function () {
    if ($(window).scrollTop() > startAt) {
      a = true;

      if (a !== b) {
        $(".special__article").addClass("special__article--visible");
      }
      b = true;
    }
  });
});
