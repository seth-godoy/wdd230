const enterName = document.getElementById('enterName');
const saveName = document.getElementById('saveName');
const showName = document.getElementById('showName')

saveName.addEventListener('click', function() {

    if (enterName.value != '') {
        let myName = enterName.value;
        enterName.value = "";

        localStorage.setItem('name', myName)
        showName.textContent = localStorage.getItem('name')

        enterName.focus()
    }

});