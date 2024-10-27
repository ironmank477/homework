function randomImg() {

    function randomNumber() {
        const randomNumber = Math.trunc((Math.random() * 9) + 1)
        selImg.src = `img/${randomNumber}.jpg`
        return selImg
    }

    const imgEl = document.querySelector('.img')
    const selImg = document.querySelector('img')

    const button = document.createElement('button')
    button.textContent = 'Random img'
    imgEl.appendChild(button)

    button.addEventListener('click', randomNumber)
}

randomImg()