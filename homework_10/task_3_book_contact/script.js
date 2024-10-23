const book = {
    contacts: [
        {name: 'Alex', tel: 254435, mail: 'alexr@gmail.com'},
        {name: 'Olga', tel: 364335, mail: 'olga@gmail.com'},
        {name: 'Denys', tel: 924115, mail: 'denys@gmail.com'}
    ],

    getContactName(userName) {
        const user = book.contacts.find(item => item.name === userName)
        if (user) return user

        return `Error! Contact ${userName} not found!`
    },

    addContactName(name, tel, mail) {
        const addContact = {name: name, tel: tel, mail};
        return book.contacts.push(addContact)
    }
}

const findUser = book.getContactName.bind(book)
findUser('Denys')
console.log(findUser('Denys'))

const adduser = book.addContactName.bind(book)
adduser('Jack', 1111, 'jack@gmail.com')

console.log(findUser('Jack'))

console.log(book)