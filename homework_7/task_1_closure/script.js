function getSum() {
    let sum = 0

    return function (value) {
        sum += value
        console.log(sum);
        return sum
    }
}

const sum = getSum()
sum(4)
sum(6)
sum(10)
sum(7)