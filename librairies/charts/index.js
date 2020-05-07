var ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Résultat net (en M€)",
        data: [2.5, 3.2, 3.3, 4.5, 7.5, 7.9],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
    ],
  },
  options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } },
});
