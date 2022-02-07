const screenWidthLimit = window.matchMedia("screen and (min-width: 1025px)");

$(document).ready(function () {
  if (!screenWidthLimit.matches) {
    $(".benefits__first").click(function () {
      $(this).next().slideToggle("slow");
      $(this).children().last().toggleClass("benefits__arrowImg--rotated");
    });
  }
});
