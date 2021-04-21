window.addEventListener("load", mainScreen);

function mainScreen() {
  let i = 0;
  const slides = document.querySelectorAll(".mainScreen__carouselItem");
  const indicators = [...document.querySelectorAll(".indicator")];

  //PREVIOUS AND NEXT FUNCTIONS
  function prevCarouselItem() {
    slides[i].className = "hide";
    if (i == 0) {
      i = Number(slides.length);
      indicators[0].classList = "indicator";
    }
    i -= 1;
    slides[i].className = "hide show";
    indicators[i].classList.add("mainIndicatorActive");
    indicators[i + 1].classList.remove("mainIndicatorActive");
  }

  function nextCarouselItem() {
    slides[i].className = "hide";
    i += 1;
    if (i >= Number(3)) {
      i = 0;
      slides[i].className = "hide show";
      indicators[i + 2].classList.remove("mainIndicatorActive");
      indicators[i].classList.add("mainIndicatorActive");
    } else {
      slides[i].className = "hide show";
      indicators[i].classList.add("mainIndicatorActive");
      indicators[i - 1].classList.remove("mainIndicatorActive");
    }
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
    indicators[previous].classList.remove("mainIndicatorActive");
    indicators[i].classList.add("mainIndicatorActive");
  }

  indicators.forEach((el) => el.addEventListener("click", changeByIndicaror));
  setInterval(nextCarouselItem, 5000);
}
