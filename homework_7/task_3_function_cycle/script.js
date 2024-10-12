function getNumber() {
    let counter = 1
    let number = 0

    while (counter < 11) {
        let value = prompt("Enter a value:", '')

        if (value !== null && value !== '' && value <= 100) {
            number = value
            counter++

        } else if (value > 100) {
            number = value
            counter = 11
        } else break
    }

    return function () {
        console.log(`Value: ${number}`)
        return number
    }
}

const res = getNumber()
res()