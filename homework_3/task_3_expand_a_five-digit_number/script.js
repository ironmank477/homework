const inputNumber = 10369

let numberOne = Math.floor( inputNumber / 10000 % 10)
let numberTwo = Math.floor( inputNumber / 1000 % 10)
let numberThree = Math.floor( inputNumber / 100 % 10)
let numberFour = Math.floor( inputNumber / 10 % 10)
let numberFive = Math.floor( inputNumber  % 10)

console.log(`Розкладено за цифрами:  ${numberOne} ${numberTwo} ${numberThree} ${numberFour} ${numberFive}`)

