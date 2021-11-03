todoFilters.addEventListener('click', handleFiltering);

function handleFiltering(e) {
    const target = e.target;
    Array.from(todoFilters.children).forEach(childNode => {
        if(childNode === target) {
            childNode.classList.add('active-filter');
        }
        else {
            if(childNode.classList.contains('active-filter')) {
                childNode.classList.remove('active-filter');
            }
        }
    })

    if(target.classList.contains('todo-all')) {
        filterAllTasks();
        todoFilters.className = "todo-filters text-align-right todo-all-filter";
    }
    else if(target.classList.contains('todo-active')) {
        filterActiveTasks();
        todoFilters.className = "todo-filters text-align-right todo-active-filter";
    }
    else if(target.classList.contains('todo-completed')) {
        filterCompletedTasks();
        todoFilters.className = "todo-filters text-align-right todo-completed-filter";
    } 
    
    addEmptyListMessage();
}

function filterActiveTasks() {
    const tasks = Array.from(todoList.children);
    todoList.classList.add('filtered-list');
    
    tasks.map(task => {
        if(!task.classList.contains('active')) {
            task.style.display = 'none';
        }
        else {
            task.style.display = 'flex';
        }
    });
}

function filterCompletedTasks() {
    todoList.classList.add('filtered-list');
    const tasks = Array.from(todoList.children);

    tasks.map(task => {
        if(task.classList.contains('active')) {
            task.style.display = 'none';
        }
        else {
            task.style.display = 'flex';
        }
    });
}

function filterAllTasks() {
    todoList.classList.remove('filtered-list');
    const tasks = Array.from(todoList.children);

    tasks.map(task=> {
        task.style.display = 'flex';
    });
}


