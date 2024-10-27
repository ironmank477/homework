const blockText = document.querySelector('.text')
const colorButton = document.querySelector('.button')

colorButton.addEventListener('click', () => {
    blockText.classList.toggle('red')
})