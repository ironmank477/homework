function getProductNumbersCurry(num1) {
    return function (num2) {
        return num1 * num2
    }
}

console.log(getProductNumbersCurry(2)(5))