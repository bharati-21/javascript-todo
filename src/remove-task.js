todoList.addEventListener('click', removeTaskHandler);

function removeTaskHandler(e) {
    if(e.target.classList.contains('fa-trash-alt')) {
        const li = e.target.parentElement.parentElement.parentElement;
        todoList.removeChild(li);
        addNewDeletedTodo(Number(li.getAttribute('data-key')));
        addNumActiveTasks();
        checkCurrentFilter();
    }
    else {
        e.preventDefault();
    }
    
} 