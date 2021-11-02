const todoForm = document.querySelector('#todo-form');

todoForm.addEventListener('submit', addTaskHandler);

todoForm.addEventListener('reset', clearTasks);

function clearTasks(e) {
    e.preventDefault();
    todoList.innerHTML = "";
}
