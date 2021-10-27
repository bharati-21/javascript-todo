const btnAddTask = document.querySelector('.btn-add-task');
const btnClearTasks = document.querySelector('.btn-clear-tasks');
const inputTask = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');
const todoEmptyMessage = document.querySelector('.todo-empty-message');
numPendingTasks = document.querySelector('.num-pending-tasks');

btnAddTask.addEventListener('click', addTaskToList);
btnClearTasks.addEventListener('click', clearTasks);

checkNumTasks();

function addTaskToList() {
    const task = inputTask.value;

    if(task) {
        todoList.innerHTML += `<li>${task}</li>`
    }
    else {
        alert('Enter a task!');
    }
    checkNumTasks();
}

function clearTasks() {
    todoList.innerHTML = "";
    checkNumTasks();
}

function checkNumTasks()  {
    const numTotalTasks = todoList.children.length;
    if(numTotalTasks === 0) {
        toggleClearTasksButton(true);
    }
    else {
        toggleClearTasksButton(false);
    }
    console.log(numTotalTasks)
    updateNumPendingTasks(numTotalTasks);
}

function toggleClearTasksButton(toggleFlag) {
    btnClearTasks.disabled = toggleFlag;
}

function updateNumPendingTasks(numTotalTasks) {
    numPendingTasks.innerHTML = numTotalTasks;
}