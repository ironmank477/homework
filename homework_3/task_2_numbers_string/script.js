let stringArr = []

while (stringArr.length < 3) {
    let value = prompt("Enter a string:", '')
    if (value !== null && value !== '') {
        stringArr.push(value)
    }
}

console.log(`Input string:\n ${stringArr[0]},\n ${stringArr[1]},\n ${stringArr[2]}`)