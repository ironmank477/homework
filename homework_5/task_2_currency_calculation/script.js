const dollarCosts = 26
let res = 0

for (let i = 10; i <= 100; i += 10) {
    res += `Вартість ${i} - ${i * dollarCosts} \n`
}
console.log(res)