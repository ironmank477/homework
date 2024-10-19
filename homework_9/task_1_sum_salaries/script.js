const company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    },
}

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((previousValue, currentValue) => previousValue + currentValue.salary, 0);
    } else {
        let sum = 0;
        for (const departmentElement of Object.values(department)) {
            sum += sumSalaries(departmentElement);
        }
        return sum;
    }
}

sumSalaries(company);

console.log('Sum of all user salaries:', sumSalaries(company));