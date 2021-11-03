const todoList = document.querySelector('.todo-list');

let todos = JSON.parse(localStorage.getItem('my-todos')) || [];
let todosActive = JSON.parse(localStorage.getItem('my-active-todos')) || [];
let todosCompleted = JSON.parse(localStorage.getItem('my-completed-todos')) || [];
let todosDeleted = JSON.parse(localStorage.getItem('my-deleted-todos')) || [];

function displayPreviousTodos() {
    if(todos.length!==0) {
        todos.forEach(todo => {
            displayTaskFromStorage(todo.task, todo.id, todo.status);
        })
    }
}

displayPreviousTodos();

function displayTaskFromStorage(task, todoId, todoStatus) {
    const li = `
        <li data-key=${todoId} id=${todoId} class="todo-list-item ${todoStatus}">
            <p class="todo-checkbox-item">
                <a class="todo-checkbox-icon">
                    <i class="fas fa-check-circle"></i>
                </a>
                <span class="todo-item">${task}</span>
            </p>
            <p class="todo-edit-delete-icons">
                <a class="todo-edit-icon">
                    <i class="fas fa-edit"></i>
                </a>
                <a class="todo-delete-icon">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </p>
        </li>
    `;
    todoList.innerHTML += li;
}

function addNewTodo(todoId, todo, todoStatus, todoDate) {
    todos.push({
        id: todoId,
        task: todo,
        status: todoStatus,
        date: todoDate
    })

    if(todoStatus === 'active') {
        todosActive.push(todos[todos.length-1]);
    }

    addTodosToStorage();
    addActiveTodosToStorage();
}


function addNewCompletedTodo(todoId) {
    let todoIndex = 0;
    todosActive.forEach((todo,index) =>{ 
        if(todo.id === todoId) {
            todoIndex = index;
        }
    });
    const completedTodo = todosActive.splice(todoIndex,1);
    completedTodo[0].status = 'completed';
    todosCompleted.push(completedTodo[0]);
    changeStatusInTodo(todoId, 'completed');

    addActiveTodosToStorage();
    addCompletedTodosToStorage();
}

function removeFromCompletedTodo(todoId) {
    let todoIndex = -1;
    todosCompleted.forEach((todo,index) =>{ 
        if(todo.id === todoId) {
            todoIndex = index;
        }
    });
    const completedTodo = todosCompleted.splice(todoIndex,1);
    completedTodo[0].status = 'active';
    todosActive.push(completedTodo[0]);
    changeStatusInTodo(todoId, 'active');

    addActiveTodosToStorage();
    addCompletedTodosToStorage();
} 

function changeStatusInTodo(todoId, status) {
    todos.forEach((todo, index) => {
        if(todo.id === todoId) {
            todos[index].status = status;
        }
    });

    addTodosToStorage();
}

function addNewDeletedTodo(todoId) {
    let todoIndex = -1;
    todos.forEach((todo, index) => {
        if(todo.id === todoId) {
            todoIndex = index;
        }
    });

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    const today = new Date();
    deletedTodo.deletedDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    todosDeleted.push(deletedTodo);

    todoIndex = -1;
    todosActive.forEach((todo, index) => {
        if(todo.id === todoId) {
            todoIndex = index;
        }
    });
    if(todoIndex!==-1) todosActive.splice(todoIndex,1);

    todoIndex = -1;
    todosCompleted.forEach((todo, index) => {
        if(todo.id === todoId) {
            todoIndex = index;
        }
    });
    if(todoIndex!==-1) todosCompleted.splice(todoIndex,1);

    addTodosToStorage();
    addActiveTodosToStorage();
    addCompletedTodosToStorage();
    addDeletedTodosToStorage();
}

function clearTodos() {
    todos.splice(0,todos.length).forEach(todo => {
        const today = new Date();
        todo.deletedDate = `${today.getDay()}-${today.getMonth()+1}-${today.getFullYear()}`
        todosDeleted.push(todo);
    })

    todosActive = [];
    todosCompleted = [];

    addTodosToStorage();
    addActiveTodosToStorage();
    addCompletedTodosToStorage();
    addDeletedTodosToStorage();
}

function editTodo(todoId, task, status=todoStatus) {
    if(status === 'completed') {
        todosCompleted.forEach((todo, index) => {
            if(todo.id === todoId) {
                todos[index].task = task;
            }
        })
    }
    else {
        todosActive.forEach((todo,index) => {
            if(todo.id === todoId) {
                todos[index].task = task;
            }
        })
    }
    todos.forEach((todo, index) => {
        if(todo.id === todoId) {
            todos[index].task = task;
        }
    });

    addTodosToStorage();
    addActiveTodosToStorage();
    addCompletedTodosToStorage();
}

function addTodosToStorage() {
    localStorage.setItem("my-todos", JSON.stringify(todos));
}

function addActiveTodosToStorage() {
    localStorage.setItem("my-active-todos", JSON.stringify(todosActive));
}

function addCompletedTodosToStorage() {
    localStorage.setItem('my-completed-todos', JSON.stringify(todosCompleted));
}

function addDeletedTodosToStorage() {
    localStorage.setItem('my-deleted-todos', JSON.stringify(todosDeleted))
}