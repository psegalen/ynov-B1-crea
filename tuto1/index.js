var toggleBtn = document.querySelector(".toggle-btn");
var info = document.querySelector(".info");
var less = document.querySelector(".less");
var more = document.querySelector(".more");

// initial height
var infoHeight = info.offsetHeight;
info.style.height = 0;

toggleBtn.addEventListener("click", function () {
  this.disabled = true;

  more.classList.toggle("show");
  more.classList.toggle("hide");
  less.classList.toggle("show");
  less.classList.toggle("hide");

  var infoNewHeight = info.offsetHeight;
  if (infoNewHeight == 0) {
    info.style.height = infoHeight + "px";
  } else {
    info.style.height = 0;
  }

  setTimeout(() => {
    this.disabled = false;
  }, 500);
});

window.addEventListener("resize", () => {
  info.style.removeProperty("height");
  infoHeight = info.offsetHeight;
  if (more.classList.contains("hide")) {
    info.style.height = `${infoHeight}px`;
  } else {
    info.style.height = 0;
  }
});
