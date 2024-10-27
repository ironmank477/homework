const divElement = document.querySelector('div');
const table = document.createElement('table')
divElement.appendChild(table)

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr')
    table.appendChild(row)

    for (let j = 1; j <= 10; j++) {
        const td = document.createElement('td');
        row.appendChild(td)

        const rez = i * j;
        td.textContent = `${rez}`
    }
}