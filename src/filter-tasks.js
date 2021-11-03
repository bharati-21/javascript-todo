const todoFilters = document.querySelector('.todo-filters');
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
    }
    else if(target.classList.contains('todo-active')) {
        filterActiveTasks();
    }
    else if(target.classList.contains('todo-completed')) {
        filterCompletedTasks();
    }   
}

function filterActiveTasks() {
    const todoList = document.querySelector('.todo-list');
    const tasks = Array.from(todoList.children);

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
    const todoList = document.querySelector('.todo-list');
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
    const todoList = document.querySelector('.todo-list');
    const tasks = Array.from(todoList.children);

    tasks.map(task => {
        task.style.display = 'flex';
    });
}


