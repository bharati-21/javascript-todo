todoList.addEventListener('click', handleEditTask);
let todoStatus = 'active';
let prevTask = '';
let editingTaskId = '';

function handleEditTask(e) {
    if(e.target.classList.contains('fa-edit')) {
        const li = e.target.parentElement.parentElement.parentElement;
        todoList.removeChild(li);
        const todoTask = todoForm.querySelector('.todo-task');


        // If a previous element is already being edited, then add that back to list.
        if(todoTask.value !== "") {
            // Halfway editing the task but not clicked "Edit" button
            if(prevTask !== todoTask.value) {
                addEditedTaskToList(prevTask)
            }
            else {
                addEditedTaskToList(todoTask.value);
            }
        }
        
        const todoItem = li.querySelector('.todo-item');
        todoStatus = li.classList.contains('active') ? 'active' : 'completed';
        prevTask = li.innerText.trim();
        editingTaskId = li.getAttribute('data-key');
        todoTask.value = todoItem.innerText;
        todoForm.classList.remove('state-new-task');
        todoForm.classList.add('state-edit-task');        
    }

    addNumActiveTasks();
    checkCurrentFilter();
} 

function addEditedTaskToList(todo, status = todoStatus) {
    const li = `
        <li data-key=${editingTaskId} id=${editingTaskId} class="todo-list-item ${status}">
            <p class="todo-checkbox-item">
                <a class="todo-checkbox-icon">
                    <i class="fas fa-check-circle"></i>
                </a>
                <span class="todo-item">${todo}</span>
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

    console.log(todo)
    editTodo(Number(editingTaskId), todo);
}
