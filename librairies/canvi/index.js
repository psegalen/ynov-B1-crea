var canvi = new Canvi({
  openButton: ".menu",
  pushContent: false,
});
canvi.close();

function openLimart() {
  var limart = document.getElementById("limart");
  var archi = document.getElementById("archi");
  var design = document.getElementById("design");
  limart.style.display = "block";
  archi.style.display = "none";
  design.style.display = "none";

  canvi.close();
}

function openArchi() {
  var limart = document.getElementById("limart");
  var archi = document.getElementById("archi");
  var design = document.getElementById("design");
  limart.style.display = "none";
  archi.style.display = "block";
  design.style.display = "none";

  canvi.close();
}

function openDesign() {
  var limart = document.getElementById("limart");
  var archi = document.getElementById("archi");
  var design = document.getElementById("design");
  limart.style.display = "none";
  archi.style.display = "none";
  design.style.display = "block";

  canvi.close();
}
