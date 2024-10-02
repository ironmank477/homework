const number = +prompt("Введіть тризначне число:", '');

let numberOne = Math.floor(number / 100 % 10)
let numberTwo = Math.floor(number / 10 % 10)
let numberThree = Math.floor(number % 10)

console.log(`${numberOne} ${numberTwo} ${numberThree}`);

if (numberOne === numberTwo && numberTwo === numberThree) {
    console.log(`Так, всі цифри однакові`);
} else if (numberOne === numberThree || numberTwo === numberThree || numberOne === numberTwo) {
    console.log(`Е серед цифр однакові цифри`)
} else {
    console.log("Всі цифри різні")
}
