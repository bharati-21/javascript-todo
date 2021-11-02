const todos = []

function addTodos(taskID, task, todoCompleted, todoDate) {
    todos.push({
        id: taskID,
        task: task,
        isCompleted: todoCompleted,
        date: todoDate
    })
}
