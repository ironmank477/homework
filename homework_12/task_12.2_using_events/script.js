const blockButton = document.querySelector('.buttons');

blockButton.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        return alert(`Клікнуто на кнопці: ${target.textContent}`);
    }
})