const todoList = document.querySelector('.todo-list');

function addTaskHandler(e) {
    e.preventDefault();
    const todoForm = e.target;
    const todoTask = todoForm.querySelector('.todo-task');
    const task = todoTask.value;
    if(todoForm.classList.contains('state-new-task')) {
        addTaskToList(task);
        addNumActiveTasks();
    }
    else {
        addTaskToList(task, todoStatus);
        todoForm.classList.remove('state-edit-task');
        todoForm.classList.add('state-new-task');
        addNumActiveTasks();
    }
    todoTask.value = "";
}


function addTaskToList(task, todoStatus) {
    if(!todoStatus) todoStatus = 'active';
    const li = `
        <li data-key=${generateUUID()} id=${generateUUID()} class="todo-list-item ${todoStatus}">
            <p class="todo-checkbox-item">
                <a class="todo-checkbox-icon">
                    <i class="fas fa-check-circle"></i>
                </a>
                <span class="todo-item">${task}</span>
            </p>
            <p class="todo-edit-delete-icons">
                <a class="todo-edit-icon">
                    <i class="fas fa-edit"></i>
                </a>
                <a class="todo-delete-icon">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </p>
        </li>
    `;
    todoList.innerHTML += li;
}


function generateUUID() {
    const now = Date.now();
    return Math.floor(Math.random() * Math.floor(Math.random() * now));
}
