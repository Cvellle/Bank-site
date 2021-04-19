function mobileNavToggle() {
  const menuIcon = document.querySelector(".header__hamburgerBtn");
  const navigation = document.querySelector(".header__navButtons");
  const navBtn1 = document.querySelector(".header__navBtn--1");
  const dropdown = document.querySelector(".header__dropdown");
  const navButtons = document.querySelectorAll(".header__navBtn");
  const screenWidthLimit = window.matchMedia("screen and (min-width: 1025px)");

  if (!screenWidthLimit.matches) {
    const toggleNav = (e) => {
      navigation.classList.toggle("header__navButtons--mobileVisible");
      menuIcon.classList.toggle("header__hamburgerBtn--mobileVisible");
      e.target.previousElementSibling.classList.toggle(
        "header__close--visible"
      );
    };

    const toggleDropdown = () => {
      dropdown.classList.toggle("header__dropdown--visible");
    };

    [...navButtons]
      .slice(1)
      .forEach((el) => el.addEventListener("click", toggleNav));
    menuIcon.addEventListener("click", toggleNav);
    navBtn1.addEventListener("click", toggleDropdown);
  } else {
    const showDropdown = () => {
      dropdown.classList.add("header__dropdown--visible");
    };
    const hideDropdown = (e) => {
      if (dropdown.classList.contains("header__dropdown--visible")) {
        dropdown.classList.remove("header__dropdown--visible");
      }
    };
    navBtn1.parentNode.addEventListener("mouseenter", showDropdown);
    navBtn1.parentNode.addEventListener("mouseleave", hideDropdown);
  }
}

window.addEventListener("load", mobileNavToggle);
