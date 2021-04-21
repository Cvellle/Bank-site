$(document).ready(function () {
  $(".table__button").click(function () {
    $(this).next().slideToggle("slow");
    $(this).children().last().toggleClass("table__dropImg--rotated");
  });

  $(".table__closeBtn").click(function () {
    $(this).parent().parent().slideToggle("slow");
    $(this)
      .parent()
      .parent()
      .prev()
      .children()
      .last()
      .toggleClass("table__dropImg--rotated");
  });
});
