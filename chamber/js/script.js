// Display Date
const datefield = document.querySelector("#current-date");
const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefield.textContent = `${fulldate}`;

// Display year
const currentYear = now.getFullYear();

document.querySelector('#current-year').textContent = currentYear;

// Display last modification
document.querySelector("#last-modif").textContent = document.lastModified;

// Responsive navigation
function toggleMenu() {
    document.getElementById("headerNav").classList.toggle("open");
    document.getElementById("navBtn").classList.toggle("open");
}

const x = document.getElementById('navBtn');
x.onclick = toggleMenu;