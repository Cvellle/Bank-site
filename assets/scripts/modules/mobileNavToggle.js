function mobileNavToggle() {
  const menuIcon = document.querySelector(".header__hamburgerBtn");
  const navigation = document.querySelector(".header__navButtons");
  const navBtn1 = document.querySelector(".header__dropDownDiv");
  const dropdown = document.querySelector(".header__dropdown");
  const dropdownToggle = document.querySelector(".transparent");
  const closeBtn = document.querySelector(".header__close");
  const mobArrow = document.querySelector(".header__mobArrow");
  const navButtons = document.querySelectorAll(".header__navBtn--toggle");
  const screenWidthLimit = window.matchMedia("screen and (min-width: 1025px)");

  if (!screenWidthLimit.matches) {
    const toggleNav = (e) => {
      navigation.classList.toggle("header__navButtons--mobileVisible");
      menuIcon.classList.toggle("header__hamburgerBtn--mobileVisible");
      closeBtn.classList.toggle("header__close--visible");
    };

    const toggleDropdown = (e) => {
      dropdown.classList.toggle("header__dropdown--visible");
      mobArrow.classList.toggle("header__mobArrow--rotated");
      navBtn1.firstElementChild.classList.toggle("header__navBtn--activeBtn");
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
    navBtn1.addEventListener("mouseenter", showDropdown);
    navBtn1.addEventListener("mouseleave", hideDropdown);
    dropdown.addEventListener("mouseenter", showDropdown);
    dropdown.addEventListener("mouseleave", hideDropdown);
    dropdownToggle.addEventListener("mouseenter", showDropdown);
    dropdownToggle.addEventListener("mouseleave", hideDropdown);
  }
}

window.addEventListener("load", mobileNavToggle);
