const toggle = document.getElementById('toggle');
const active = document.getElementById('active');
const inputArea = document.getElementById('inputArea');
const mainControl = document.getElementById('mainControl');
const copy = document.getElementById('copy');
const area = document.getElementById('area');
inputArea.focus();
toggle.addEventListener('click', () => {
    if (document.querySelector('body').classList.contains('darkMode')) {
        document.querySelector('body').classList.remove('darkMode');
    }
    else {
        document.querySelector('body').classList.add('darkMode');
    }
});
mainControl.addEventListener('click', () => {
    if (inputArea.value === '') {
        return;
    }
    if (mainControl.textContent.includes('Reset')) {
        inputArea.value = '';
        area.style.maxWidth = '';
        inputArea.style.height = ''
        copy.style.display = '';
        mainControl.innerHTML = 'Minify!';
    }
    else {
        area.classList.add('colours');
        let content = inputArea.value.split(' ');
        let contentWithoutSpaces = content.filter((element) => element !== '');
        let arrFormated = contentWithoutSpaces.map((element) => element.replace(/\n/g, ''));
        let formattedContent = arrFormated.map((element) => element+= ' ').join('')
        inputArea.value = formattedContent;
        area.style.maxWidth = '600px';
        inputArea.style.height = '200px'
        copy.style.display = 'block';
        mainControl.innerHTML = 'Reset';
        copy.innerHTML = 'Copy';
        setTimeout(() => {
            area.classList.remove('colours');
        }, 200);
    }
});
copy.addEventListener('click', () => {
    if (copy.textContent.includes('Just copied, all done!')) {
        navigator.clipboard.writeText(inputArea.value);
        copy.innerHTML = 'Really copied, you can check :)';
    }
    else {
        navigator.clipboard.writeText(inputArea.value);
        copy.innerHTML = 'Just copied, all done!';
    }
});