todoFilters.addEventListener('click', handleFiltering);

function handleFiltering(e) {
    const target = e.target;
    if(!target.classList.contains('todo-filters')) {
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
}

function filterActiveTasks() {
    const tasks = Array.from(todoList.children);
    todoList.classList.add('filtered-list');
    
    let lastActiveTask = tasks[0];
    tasks.forEach(task => {
        if(!task.classList.contains('active')) {
            task.style.display = 'none';
        }
        else {
            task.style.display = 'flex';
            lastActiveTask = task;

            if(task.classList.contains('border-bottom')) {
                task.classList.remove('border-bottom');
            }
        }
        
    });

    if(lastActiveTask)
    lastActiveTask.classList.add('border-bottom');
}

function filterCompletedTasks() {
    todoList.classList.add('filtered-list');
    const tasks = Array.from(todoList.children);

    let lastCompletedTask = tasks[0];
    tasks.forEach(task => {
        if(task.classList.contains('active')) {
            task.style.display = 'none';
        }
        else {
            task.style.display = 'flex';
            lastCompletedTask = task;
            if(task.classList.contains('border-bottom')) {
                task.classList.remove('border-bottom');
            }
        }
        
    });

    if(lastCompletedTask)
    lastCompletedTask.classList.add('border-bottom');
}

function filterAllTasks() {
    todoList.classList.remove('filtered-list');
    const tasks = Array.from(todoList.children);

    tasks.forEach(task=> {
        task.style.display = 'flex';
        if(task.classList.contains('border-bottom')) {
            task.classList.remove('border-bottom');
        }
    });
}


