const buttonAdd = document.querySelector('.add');
const ulBlock = document.querySelector('.list');


function addTask() {
    const value = document.querySelector('input').value;
    const liElement = document.createElement('li');
    const buttonElement = document.createElement('button');

    if (value === '') {
        alert('Введіть задання!')
    } else {
        liElement.textContent = value;
        buttonElement.classList.add('delete');
        buttonElement.textContent = 'Видалити'
        ulBlock.appendChild(liElement);
        liElement.appendChild(buttonElement);
    }

    addRemoveListeners()
}

function removeTask(event) {
    const btn = event.target;
    const taskItem = btn.parentElement;
    ulBlock.removeChild(taskItem);
}

function addRemoveListeners() {
    const buttonDelete = document.querySelectorAll('.delete');
    buttonDelete.forEach(btn => btn.addEventListener('click', removeTask));
}


buttonAdd.addEventListener('click', addTask)
addRemoveListeners()