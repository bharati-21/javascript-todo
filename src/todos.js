let todos = []
let todosActive = [];
let todosCompleted = [];
let todosDeleted = [];

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
}

function removeFromCompletedTodo(todoId) {
    let todoIndex = 0;
    todosCompleted.forEach((todo,index) =>{ 
        if(todo.id === todoId) {
            todoIndex = index;
        }
    });
    const completedTodo = todosCompleted.splice(todoIndex,1);
    completedTodo[0].status = 'active';
    todosActive.push(completedTodo[0]);
    changeStatusInTodo(todoId, 'active');
} 

function changeStatusInTodo(todoId, status) {
    todos.forEach((todo, index) => {
        if(todo.id === todoId) {
            todos[index].status = status;
        }
    })
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
}

function clearTodos() {
    todos.splice(0,todos.length).forEach(todo => {
        const today = new Date();
        todo.deletedDate = `${today.getDay()}-${today.getMonth()+1}-${today.getFullYear()}`
        todosDeleted.push(todo);
    })

    todosActive = [];
    todosCompleted = [];
}

function editTodo(todoId, task, status=todoStatus) {
    console.log(task);
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
    })
}

