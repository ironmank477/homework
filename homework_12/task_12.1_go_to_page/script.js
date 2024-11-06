const linkButton = document.querySelector('#link')
const backButton = document.querySelector('#back')

linkButton.addEventListener('click', (event) => {
    const inputLink = prompt("Введіть посилання:")
    location.href = inputLink
})

backButton.addEventListener('click', () => {
    location.href = 'https://ru.wikipedia.org/wiki/Test'
})