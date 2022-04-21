// DISPLAY YEAR
const d = new Date();
const currentYear = d.getFullYear();

document.querySelector('#current-year').textContent = currentYear;

// DISPLAY LAST UPDATE
let lastUpdate = document.lastModified;

document.querySelector("#last-update").textContent = lastUpdate;