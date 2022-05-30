const displayName = document.getElementById('displayName');
const enterName = document.getElementById('enterName');
const savename = document.getElementById('saveName');
const showName = document.getElementById('showName');

enterName.addEventListener('click', function() {
    let myName = enterName.value;
    enterName.value = '';
    localStorage.setItem('name', myName);
});

showName.addEventListener('click', function() {
    displayName.textContent = localStorage.getItem('name')
})