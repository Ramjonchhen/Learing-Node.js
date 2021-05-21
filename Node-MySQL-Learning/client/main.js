document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:4040/getAll")
    .then((result) => result.json())
    .then((data) => console.log(data));
  loadHTMLTable([]);
});

function loadHTMLTable(data) {
  const table = document.querySelector("table tbody");

  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  }
}
