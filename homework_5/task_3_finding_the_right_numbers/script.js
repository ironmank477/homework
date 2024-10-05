const value = +prompt('Please enter a number:', '');
let res = ''

for (let i = 1; i <= 100; i++) {
    if (i * i > value) continue
        res += `${i} `
}

console.log(`${res}`)