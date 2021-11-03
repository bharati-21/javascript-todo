const todoDate = document.querySelector('.todo-date');
const todoActive = document.querySelector('.todo-num-tasks');
const todoFilters = document.querySelector('.todo-filters');


const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday']

const today = new Date();
let activeTasks = todosActive.length;
let completedTasks = todosCompleted.length;

todoDate.innerText = `${days[today.getDay()]}, ${month[today.getMonth()]} ${today.getDate()}`;
todoActive.innerText = activeTasks + ' Active Tasks';
addNumActiveTasks();


function addNumActiveTasks() {
    calculateNumTasks();
    todoActive.innerText = `${activeTasks} Active ${activeTasks === 1 ? 'Task' : 'Tasks'}`;
}

function calculateNumTasks() {
    const children = Array.from(todoList.children);
    let currentActiveTasks = 0;
    let currentCompletedTasks = 0;
    children.forEach(child => {
        currentActiveTasks += child.classList.contains('active') ? 1: 0;
        currentCompletedTasks += child.classList.contains('completed') ? 1: 0;
    })
    activeTasks = currentActiveTasks;
    completedTasks = currentCompletedTasks;
    addEmptyListMessage();
}

function addEmptyListMessage() {
    const listContainer = document.querySelector('.list-container');
    const todoEmptyMessage = document.querySelector('.todo-empty-message');

    if(todoFilters.classList.contains('todo-completed-filter')) {
        if(completedTasks === 0) {
            todoEmptyMessage.innerText = 'No Completed Tasks!';
            listContainer.style.display = 'none';
            todoEmptyMessage.style.display = 'block';
        }
        else {
            listContainer.style.display = 'block';
            todoEmptyMessage.style.display = 'none';
        }

    }
    else if(todoFilters.classList.contains('todo-active-filter')){ 
        if(activeTasks === 0) {
            todoEmptyMessage.innerText = 'No Active Tasks!';
            listContainer.style.display = 'none';
            todoEmptyMessage.style.display = 'block';
        }
        else {
            listContainer.style.display = 'block';
            todoEmptyMessage.style.display = 'none';
        }

    }
    else {
        if(activeTasks === 0 && completedTasks === 0) {
            todoEmptyMessage.innerText = 'No Tasks!';
            listContainer.style.display = 'none';
            todoEmptyMessage.style.display = 'block';
        }
        else {
            listContainer.style.display = 'block';
            todoEmptyMessage.style.display = 'none';
        }

    }
    
}



