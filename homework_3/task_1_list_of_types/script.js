const num = 34
const name = 'Oleg'
const isLogin = false
let age
const variable = null
const bigInt = 542556823425476n
const uniqueId = Symbol('Id')

const arr = []

let car ={
    brand: 'BMW',
    date: 2000,
    byCar: function (){
        console.log('By the car ' + this.brand)
    }
}

console.log('Примітивні типи даних:')
console.log('Тип ' + typeof num)
console.log('Тип ' + typeof name)
console.log('Тип ' + typeof isLogin)
console.log('Тип ' + typeof age)
console.log('Тип ' +  variable)
console.log('Тип ' + typeof bigInt)
console.log('Тип ' + typeof uniqueId)

console.log('Обьекти:')
console.log('Масиви ' + typeof arr)
console.log('Function, також належать до обьекту')
console.log('Обьекти ' + typeof car)
