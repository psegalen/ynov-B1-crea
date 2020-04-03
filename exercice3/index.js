var heights = {
  html: 0,
  css: 0,
  javascript: 0
};
var intervals = {
  html: null,
  css: null,
  javascript: null
};

function ouvrirHTML() {
  inverserVisibilite("html");
}

function ouvrirCSS() {
  inverserVisibilite("css");
}

function ouvrirJS() {
  inverserVisibilite("javascript");
}

function inverserVisibilite(suffixId) {
  var div = document.getElementById("texte-" + suffixId);
  if (div.style.height == "0px") {
    // commencer à augmenter heights[suffixId]
    intervals[suffixId] = setInterval(function() {
      heights[suffixId] += 10;
      div.style.height = heights[suffixId] + "px";
      if (heights[suffixId] == 160) {
        clearInterval(intervals[suffixId]);
      }
    }, 20);
  } else {
    // commencer à diminuer heights[suffixId]
    intervals[suffixId] = setInterval(function() {
      heights[suffixId] -= 10;
      div.style.height = heights[suffixId] + "px";
      if (heights[suffixId] == 0) {
        clearInterval(intervals[suffixId]);
      }
    }, 10);
  }

  var icon = document.getElementById("fleche-" + suffixId);
  if (icon.classList.contains("fa-caret-right")) {
    icon.classList.remove("fa-caret-right");
    icon.classList.add("fa-caret-down");
  } else {
    icon.classList.remove("fa-caret-down");
    icon.classList.add("fa-caret-right");
  }
}
