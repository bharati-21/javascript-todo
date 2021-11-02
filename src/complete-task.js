todoList.addEventListener('click', handleCompleteTask);

function handleCompleteTask(e) {
    if(e.target.classList.contains('fa-check-circle')) {
        const liParent = e.target.parentElement.parentElement.parentElement;
        if(liParent.classList.contains('active')) {
            liParent.classList.remove('active');
            liParent.classList.add('completed');
        }
        else {
            liParent.classList.remove('completed');
            liParent.classList.add('active');
        }
    }
    addNumActiveTasks();
} 