var couleur = 15;
var enTrainDeDescendre = true;

function changerCouleur(indiceCouleur) {
  var indiceCouleurHexa = indiceCouleur.toString(16);
  document.body.style.backgroundColor =
    "#" + indiceCouleurHexa + indiceCouleurHexa + indiceCouleurHexa;
}

function algorithme() {
  if (enTrainDeDescendre) {
    couleur--;
    if (couleur == 0) {
      enTrainDeDescendre = false;
    }
  } else {
    couleur++;
    if (couleur == 15) {
      enTrainDeDescendre = true;
    }
  }
  changerCouleur(couleur);
}

setInterval(algorithme, 35);
