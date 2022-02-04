$(document).ready(function () {
  const iconsHoverIn = function () {
    $(this).children().last().prev().addClass("magazine__hovered1--shown");
    $(this).children().last().addClass("magazine__hovered2--shown");
  };

  const iconsHoverOut = function () {
    $(this).children().last().prev().removeClass("magazine__hovered1--shown");
    $(this).children().last().removeClass("magazine__hovered2--shown");
  };

  $(".magazine__hoverWrapper").hover(iconsHoverIn, iconsHoverOut);
});
