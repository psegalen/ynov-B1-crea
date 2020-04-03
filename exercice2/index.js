var couleur = 15;
var enTrainDeDescendre = true;
var dominante = 0;

function changerCouleur(indiceCouleur) {
  var indiceCouleurHexa = indiceCouleur.toString(16);
  var bgColor = "";
  if (dominante % 4 == 0) {
    // première dominante : blanc
    bgColor =
      "#" + indiceCouleurHexa + indiceCouleurHexa + indiceCouleurHexa;
  } else if (dominante % 4 == 1) {
    // seconde dominante : rouge
    bgColor = "#" + indiceCouleurHexa + "00";
  } else if (dominante % 4 == 2) {
    // troisième dominante : vert
    bgColor = "#0" + indiceCouleurHexa + "0";
  } else {
    // quatrième dominante : bleu
    bgColor = "#00" + indiceCouleurHexa;
  }
  document.body.style.backgroundColor = bgColor;
}

function algorithme() {
  if (enTrainDeDescendre) {
    couleur--;
    if (couleur == 0) {
      enTrainDeDescendre = false;
      dominante++;
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
