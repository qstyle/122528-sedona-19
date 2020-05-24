const DISPLAY_NONE = "display-none";

const menu = document.querySelector(".page-nav__wrapper");
const closeButton = document.querySelector(".page-nav__button--on");
const openButton = document.querySelector(".page-nav__button--off");

openButton.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.remove(DISPLAY_NONE);
  closeButton.classList.remove(DISPLAY_NONE);
  openButton.classList.add(DISPLAY_NONE);
});

closeButton.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.add(DISPLAY_NONE);
  closeButton.classList.add(DISPLAY_NONE);
  openButton.classList.remove(DISPLAY_NONE);
});
