
function getStrReplace(str, arr) {
    const strArr = str.toLocaleLowerCase().split('');

    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (strArr[i] === arr[j]) {
                strArr.splice(i, 1);
                i--
            }
        }
    }
    return strArr.join('');
}

const newStr = getStrReplace('Hello World', ['l', 'd']);
console.log(newStr);
