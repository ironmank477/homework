const value = +prompt("Pleas enter a number:", '');
let res = ''


switch (true) {
    case (value % 10 === 4 || value % 10 === 6 || value % 10 === 8 || value % 10 === 0 || value === 21 || value === 27 || value === 33 || value === 39):
        res = `${value}`
        console.log(`Число:${res} не просте`)
        break;
    case (value === 2 || value === 5 || value % 10 === 1 || value % 10 === 3 || value % 10 === 7 || value % 10 === 9):
        res = `${value}`
        console.log(`Число:${res} просте`)
        break;
    case (value % 10 === 2 || value % 10 === 5):
        res = `${value}`
        console.log(`Число:${res} НЕ просте`)
        break;
    default:
        console.log(`Введено число: ${res}`)
}

