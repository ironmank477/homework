function getSum() {
    let sum = 0

    return function (value) {
        console.log(sum += value);
        return sum
    }
}

const sum = getSum()
sum(4)
sum(6)
sum(10)
sum(7)