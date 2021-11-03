function addTaskHandler(e) {
    e.preventDefault();
    const todoForm = e.target;
    const todoTask = todoForm.querySelector('.todo-task');
    const task = todoTask.value;
    if(todoForm.classList.contains('state-new-task')) {
        const [todoId, todoDate] = addTaskToList(task);
        addNewTodo(todoId, task, todoStatus, todoDate);
        addNumActiveTasks();
    }
    else {
        addEditedTaskToList(task, todoStatus);
        todoForm.classList.remove('state-edit-task');
        todoForm.classList.add('state-new-task');
        addNumActiveTasks();
    }
    checkCurrentFilter();
    todoTask.value = "";
}


function addTaskToList(task, todoStatus='active') {
    // if(!todoStatus) todoStatus = 'active';
    const [todoId, todoDate] = generateUUID();
    
    const li = `
        <li data-key=${todoId} id=${todoId} class="todo-list-item ${todoStatus}">
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
    return [todoId, todoDate];
}


function checkCurrentFilter() {
    const activeFilter = todoFilters.querySelector('.active-filter');

    if(activeFilter.classList.contains('todo-completed')) {
        filterCompletedTasks();
    }
    else if(activeFilter.classList.contains('todo-active')) {
        filterActiveTasks();
    }
    else {
        filterAllTasks();
    }
}

function generateUUID() {
    const now = Date.now();
    const today = new Date();
    return [Math.floor(Math.random() * Math.floor(Math.random() * now)), `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`];
}