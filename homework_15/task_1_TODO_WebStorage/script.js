"use strict";

const form = document.querySelector('.js--form');
const inputValue = document.querySelector('.js--form__input');

const ulBlock = document.querySelector('.js--todos-wrapper');

const liElement = document.querySelectorAll('li');
liElement.forEach((el) => {
    el.classList.remove('todo-item--checked');
})

let tasks = []

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.forEach(task => {
    const liElement = document.createElement('li');

    task.done ? liElement.classList.add('todo-item', 'todo-item--checked') : liElement.classList.add('todo-item') && itemCompleted.checked;

    liElement.setAttribute('id', `${task.id}`)

    const itemCompleted = document.createElement('input');
    itemCompleted.type = 'checkbox';
    itemCompleted.setAttribute('data-action', 'done');
    liElement.appendChild(itemCompleted);

    const spanElement = document.createElement("span")
    spanElement.classList.add('todo-item__description')
    spanElement.textContent = task.text;
    liElement.appendChild(spanElement);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('todo-item__delete')
    buttonElement.textContent = 'Видалити';
    liElement.appendChild(buttonElement);

    ulBlock.appendChild(liElement);
})

form.addEventListener('submit', createTask)

ulBlock.addEventListener('click', deleteTask)

ulBlock.addEventListener('click', doneTask)

function createTask(event) {
    event.preventDefault();

    const taskText = inputValue.value;

    const newTask = {
        id: new Date().getTime(),
        text: taskText,
        done: false,
    }

    tasks.push(newTask);

    console.log(tasks)

    const liElement = document.createElement('li');

    newTask.done ? liElement.classList.add('todo-item', 'todo-item--checked') : liElement.classList.add('todo-item');

    liElement.setAttribute('id', `${newTask.id}`)

    const itemCompleted = document.createElement('input');
    itemCompleted.type = 'checkbox';
    itemCompleted.setAttribute('data-action', 'done');
    liElement.appendChild(itemCompleted);

    const spanElement = document.createElement("span")
    spanElement.classList.add('todo-item__description')
    spanElement.textContent = newTask.text;
    liElement.appendChild(spanElement);

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('todo-item__delete')
    buttonElement.textContent = 'Видалити';
    liElement.appendChild(buttonElement);

    ulBlock.appendChild(liElement);

    form.reset()
    inputValue.focus();

    saveToLocalStorage()
}


function deleteTask(event) {
    if (event.target.classList.contains('todo-item__delete')) {
        const parenNode = event.target.closest('li')

        const id = +parenNode.id
        tasks = tasks.filter(task => task.id !== id)

        saveToLocalStorage()

        parenNode.remove()
    }
}

function doneTask(event) {

    if (event.target.dataset.action !== 'done') return

    const parentNode = event.target.closest('li')

    const id = +parentNode.id
    const task = tasks.find(task => task.id === id)
    task.done = !task.done

    saveToLocalStorage()

    parentNode.classList.toggle('todo-item--checked')
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}