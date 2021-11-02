const todoList = document.querySelector('.todo-list');

function addTaskHandler(e) {
    e.preventDefault();
    const todoForm = e.target;
    const todoTask = todoForm.querySelector('.todo-task').value;
    addTaskToList(todoTask);
}


function addTaskToList(task) {
    todoList.innerHTML += `
        <li data-key=${generateUUID()} id=${generateUUID()} class="todo-list-item active">
            <p class="todo-checkbox-item">
                <a class="todo-checkbox-icon">
                    <i class="fas fa-check-circle"></i>
                </a>
                <span class="todo-item">
                    ${task}
                </span>
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
    `
}


function generateUUID() {
    const now = Date.now();
    return Math.floor(Math.random() * Math.floor(Math.random() * now));
}
