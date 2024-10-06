const value = +prompt("Pleas enter a number:", '');
let res = ''
let count = 0

for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
        res += `${i} `;
        count++
    }
}
if (count === 2) {
    console.log(`${res} Просте`)
} else {
    console.log(`Не просте ${res}  дільників: ${count}`)
}