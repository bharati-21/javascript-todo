todoList.addEventListener('click', handleEditTask);
let todoStatus = 'active';

function handleEditTask(e) {
    if(e.target.classList.contains('fa-edit')) {
        console.log(e.target.parentElement.parentElement.parentElement.parentElement);
        const li = e.target.parentElement.parentElement.parentElement;
        todoList.removeChild(li);
        const todoTask = todoForm.querySelector('.todo-task');

        // If a previous element is already being edited, then add that back to list.
        if(todoTask.value !== "") {
            addTaskToList(todoTask.value, todoStatus);
        }
        
        const todoItem = li.querySelector('.todo-item');
        todoStatus = li.classList.contains('active') ? 'active' : 'completed';
        todoTask.value = todoItem.innerText;
        todoForm.classList.remove('state-new-task');
        todoForm.classList.add('state-edit-task');        
    }

    addNumActiveTasks();
} 
