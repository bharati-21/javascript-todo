todoList.addEventListener('click', handleCompleteTask);

function handleCompleteTask(e) {
    if(e.target.classList.contains('fa-check-circle')) {
        const li = e.target.parentElement.parentElement.parentElement;
        if(li.classList.contains('active')) {
            li.classList.remove('active');
            li.classList.add('completed');
            addNewCompletedTodo(Number(li.getAttribute('data-key')));
            
        }
        else {
            li.classList.remove('completed');
            li.classList.add('active');

            removeFromCompletedTodo(li.getAttribute('data-key'))
        }
        checkCurrentFilter();
        addNumActiveTasks();
    }
    else {
        e.preventDefault();
    }
    
} 