const displayName = document.getElementById('displayName');
const enterName = document.getElementById('enterName');
const saveName = document.getElementById('saveName');
const showName = document.getElementById('showName');

saveName.addEventListener('click', function() {
    const myName = enterName.value;
    enterName.value = '';
    localStorage.setItem('name', myName);
    enterName.focus()
});

showName.addEventListener('click', function() {
    displayName.textContent = localStorage.getItem('name')
})