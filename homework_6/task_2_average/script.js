function getAverage(arr) {
    let sum = 0;
    let count = 0;
    let arrFilter = arr.filter(item => !isNaN(item));

    if (arrFilter.length === 0)
        return 0;

    for (const value of arrFilter) {
        sum += value;
        count++;
    }
    return sum / count;
}

let average = getAverage(['apple', 9, 6, 3, [4, 'car', 6], 'string', person = {name: "Alex"}]);
console.log(average);