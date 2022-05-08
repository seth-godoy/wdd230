// DISPLAY YEAR
const d = new Date();
const currentYear = d.getFullYear();

document.querySelector('#current-year').textContent = currentYear;

// DISPLAY LAST UPDATE
document.querySelector("#last-update").textContent = document.lastModified;