function valider() {
  var valeurNom = document.getElementById("nom").value;
  var valeurAge = document.getElementById("age").value;
  if (valeurNom.length == 0 || valeurAge.length == 0) {
    // le nom ou l'âge n'est pas renseigné
    alert("Les champs Nom et Age sont obligatoires !");
  } else if (isNaN(valeurAge)) {
    // l'âge n'est pas un nombre
    alert("L'âge doit être un nombre !");
  } else {
    // les champs sont ok
    document.getElementById("message").innerText =
      "Bonjour " + valeurNom + ", vous avez " + valeurAge + " ans !";
  }
}
