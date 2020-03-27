function valider() {
  var valeurNom = document.getElementById("nom").value;
  var valeurAge = document.getElementById("age").value;

  document.getElementById("message").innerText =
    "Bonjour " + valeurNom + ", vous avez " + valeurAge + " ans !";
}

function validerNom() {
  var valeurNom = document.getElementById("nom").value;
  if (valeurNom.length == 0) {
    document.getElementById("erreur-nom").innerText =
      "Le nom est obligatoire !";
  } else {
    document.getElementById("erreur-nom").innerText = "";
    var valeurAge = document.getElementById("age").value;
    if (valeurAge.length > 0 && !isNaN(valeurAge)) {
      // tout est ok, il faut activer le bouton !
      document
        .getElementById("bouton-valider")
        .removeAttribute("disabled");
    }
  }
}

function validerAge() {
  var valeurAge = document.getElementById("age").value;
  if (valeurAge.length == 0) {
    document.getElementById("erreur-age").innerText =
      "L'âge est obligatoire !";
  } else if (isNaN(valeurAge)) {
    document.getElementById("erreur-age").innerText =
      "L'âge doit être un nombre !";
  } else {
    document.getElementById("erreur-age").innerText = "";
    var valeurNom = document.getElementById("nom").value;
    if (valeurNom.length > 0) {
      // tout est ok, il faut activer le bouton !
      document
        .getElementById("bouton-valider")
        .removeAttribute("disabled");
    }
  }
}
