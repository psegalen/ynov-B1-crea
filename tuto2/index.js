var ratings = {
  hotel_a: 2.8,
  hotel_b: 3.3,
  hotel_c: 1.9,
  hotel_d: 4.3,
  hotel_e: 4.74,
};

var starTotal = 5;

for (var rating in ratings) {
  // 2
  var starPercentage = (ratings[rating] / starTotal) * 100;
  // 3
  var starPercentageRounded =
    Math.round(starPercentage / 10) * 10 + "%";
  // 4
  document.querySelector(
    "." + rating + " .stars-inner"
  ).style.width = starPercentageRounded;
}
