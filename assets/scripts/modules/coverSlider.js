window.addEventListener("load", mainScreen);

function mainScreen() {
  //QUERIES
  let i = 0;
  const slides = document.querySelectorAll(".mainScreen__carouselItem");
  const indicators = document.querySelectorAll(".indicator");
  indicators[0].style.background = "white";

  //PREV AND NEXT FUNCTIONS
  function prevCarouselItem() {
    slides[i].className = "hide";
    if (i == 0) {
      i = Number(slides.length);
      indicators[0].style.background = "rgb(148, 148, 148)";
    }
    i -= 1;
    slides[i].className = "hide show";
    //change active indicator
    indicators[i].style.background = "white";
    indicators[i + 1].style.background = "rgb(148, 148, 148)";
  }

  function nextCarouselItem() {
    slides[i].className = "hide";
    i += 1;
    if (i >= Number(slides.length)) {
      i = 0;
      indicators[i + 2].style.background = "rgb(148, 148, 148)";
    }
    slides[i].className = "hide show";
    //change active indicator
    indicators[i].style.background = "white";
    indicators[i - 1].style.background = "rgb(148, 148, 148)";
  }

  // ADD EVENT LISTENERS
  const prev = document.querySelector(".leftArrow");
  const next = document.querySelector(".rightArrow");
  prev.addEventListener("click", prevCarouselItem);
  next.addEventListener("click", nextCarouselItem);

  // INDICATORS FUNCTION
  function changeByIndicaror(e) {
    e.stopPropagation();
    let previous = i;
    slides[i].className = "hide";
    i = Number(e.target.dataset.num);
    slides[i].className = "hide show";
    //change active indicator
    indicators[previous].style.background = "gray";
    indicators[i].style.background = "white";
  }

  indicators.forEach((el) => el.addEventListener("click", changeByIndicaror));
  setInterval(nextCarouselItem, 5000);
}
