var body = document.body;
var triggerMenu = document.querySelector(
  ".page-header .trigger-menu"
);

triggerMenu.addEventListener("click", () => {
  body.classList.toggle("menu-open");
});

var nav = document.querySelector(".page-header nav");
var menu = document.querySelector(".page-header .menu");
var scrollUp = "scroll-up";
var scrollDown = "scroll-down";
var lastScroll = 0;

window.addEventListener("scroll", () => {
  var currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (
    currentScroll > lastScroll &&
    !body.classList.contains(scrollDown)
  ) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
