const user = {
    name: 'Alex',
    age: 25,
    city: 'Kyiv',
    mail: 'user@gmail.com',

    getInfo() {
        return `User: ${user.name},\n Age: ${user.age},\n Live: ${user.city},\n Mail: ${user.mail})`;
    }
}

user.getInfo()
console.log(user.getInfo())