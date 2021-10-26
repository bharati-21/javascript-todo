const btnAddTask = document.querySelector('.btn-add-task');
const inputTask = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');

btnAddTask.addEventListener('click', addTaskToList);

function addTaskToList() {
    console.log('Hello')
    const task = inputTask.value;

    if(task) {
        todoList.innerHTML += `<li>${task}</li>`
    }
}