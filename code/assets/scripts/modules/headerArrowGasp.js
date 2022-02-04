$(document).ready(function () {
  const screenWidthLimit = window.matchMedia("screen and (min-width: 1025px)");

  if (screenWidthLimit.matches) {
    const iconsHoverIn = function () {
      TweenMax.to($(this).find(".header__mobArrow"), 0.3, {
        rotationX: "-180",
      });
    };
    const iconsHoverOut = function () {
      TweenMax.to($(this).find(".header__mobArrow"), 0.3, {
        rotationX: 0,
      });
    };
    $(".header__dropDownDiv").hover(iconsHoverIn, iconsHoverOut);
  }
});
