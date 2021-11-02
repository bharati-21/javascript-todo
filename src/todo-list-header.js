const todoDate = document.querySelector('.todo-date');
const todoActive = document.querySelector('.todo-num-active-tasks');

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday']

const today = new Date();
todoDate.innerText = `${days[today.getDay()]}, ${month[today.getMonth()]} ${today.getDate()}`;

todoActive.innerText = "0 Tasks";

function addNumActiveTasks() {
    const activeTasks = calculateNumTasks();
    todoActive.innerText = `${activeTasks} ${activeTasks === 1 ? 'Task' : 'Tasks'}`;
}

function calculateNumTasks() {
    let activeTasks = 0;
    const children = Array.from(todoList.children);
    children.forEach(child => {
        activeTasks += child.classList.contains('active') ? 1: 0;
    })
    return activeTasks;
}