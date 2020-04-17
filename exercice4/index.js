// Début script note sous forme d'étoiles

var listeStarsInner = document.querySelectorAll(".stars-inner");

for (var i = 0; i < listeStarsInner.length; i++) {
  var starsInner = listeStarsInner[i];

  var starPercentage = starsInner.innerText * 10;

  starsInner.style.width = starPercentage + "%";
}

// Début script cacher / montrer fiches

var hauteurFiches = 0;

var listeFilmFiche = document.querySelectorAll(".film-fiche");

for (var i = 0; i < listeFilmFiche.length; i++) {
  var filmFiche = listeFilmFiche[i];

  if (hauteurFiches == 0) {
    hauteurFiches = filmFiche.offsetHeight;
  }

  filmFiche.style.height = 0;
}

var listeTitres = document.querySelectorAll(".film-titre");

for (var i = 0; i < listeTitres.length; i++) {
  var titre = listeTitres[i];

  titre.addEventListener("click", function (e) {
    var parent = e.target.parentElement;

    var ficheCorrespondante = parent.querySelector(".film-fiche");

    if (ficheCorrespondante.offsetHeight == 0) {
      ficheCorrespondante.style.height = hauteurFiches + "px";
    } else {
      ficheCorrespondante.style.height = 0;
    }
  });
}

// Début script header

var body = document.body;
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

function toutCacher() {
  for (var i = 0; i < listeFilmFiche.length; i++) {
    var filmFiche = listeFilmFiche[i];
    filmFiche.style.height = 0;
  }
}

function toutMontrer() {
  for (var i = 0; i < listeFilmFiche.length; i++) {
    var filmFiche = listeFilmFiche[i];
    filmFiche.style.height = hauteurFiches + "px";
  }
}
