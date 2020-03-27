function valider() {
  var valeurNom = document.getElementById("nom").value;
  var valeurAge = document.getElementById("age").value;
  var toutEstOk = true;

  if (valeurNom.length == 0) {
    // Le nom n'est pas renseigné !
    document.getElementById("erreur-nom").innerText =
      "Le nom est obligatoire !";
    toutEstOk = false;
  } else {
    document.getElementById("erreur-nom").innerText = "";
  }

  if (valeurAge.length == 0) {
    // L'âge n'est pas renseigné
    document.getElementById("erreur-age").innerText =
      "L'âge est obligatoire !";
    toutEstOk = false;
  } else if (isNaN(valeurAge)) {
    // L'âge n'est pas un nombre
    document.getElementById("erreur-age").innerText =
      "L'âge doit être un nombre !";
    toutEstOk = false;
  } else {
    document.getElementById("erreur-age").innerText = "";
  }

  if (toutEstOk) {
    // Les champs sont ok
    document.getElementById("message").innerText =
      "Bonjour " + valeurNom + ", vous avez " + valeurAge + " ans !";
  }
}
