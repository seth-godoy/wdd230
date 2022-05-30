// Store HTML elements in variables
const displayName = document.getElementById('displayName');
const enterName = document.getElementById('enterName');
const saveName = document.getElementById('saveName');
const showName = document.getElementById('showName');
const deleteName = document.getElementById('deleteName');

// Click event on Save Name button to store name in Storage
saveName.addEventListener('click', function() {
    let myName = enterName.value;
    enterName.value = '';
    localStorage.setItem('name', myName);
    enterName.focus();
});

// Click event on Show Name button to show the stored name
showName.addEventListener('click', function() {
    displayName.textContent = localStorage.getItem('name');
});

// Click event on Delete Name button to delete all data in Storage
deleteName.addEventListener('click', function() {
    localStorage.clear();
});