const favchap = document.getElementById('favchap');
const addchap = document.getElementById('addchap');
const listchap = document.getElementById('listchap');

addchap.addEventListener('click', function() {

    if (favchap.value != '') {
        const chap = favchap.value;
        favchap.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = chap;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        listchap.appendChild(listItem);

        listBtn.addEventListener('click', function () {
            listchap.removeChild(listItem);
        });

        favchap.focus();
    };

});