// Demonstration of localStorage
const displayName = document.getElementById('displayName');
const enterName = document.getElementById('enterName');
const saveName = document.getElementById('saveName');
const showName = document.getElementById('showName');
const deleteName = document.getElementById('deleteName');

saveName.addEventListener('click', function() {
    let myName = enterName.value;
    enterName.value = '';
    localStorage.setItem('name', myName);
    enterName.focus()
});

showName.addEventListener('click', function() {
    displayName.textContent = localStorage.getItem('name')
})

deleteName.addEventListener('click', function() {
    localStorage.clear()
})