const arrNumber = [5, 99, 1, 73, 4, 54, 21, 12]

const arrDoubles = arrNumber.filter((item) => {
    return item % 2 === 0
})

console.log(arrDoubles);