interface Todo {
    task: string;
    completed: boolean;
    priority: number;
}

class TodoList {
    todos: Todo[] = []

    addTodo(task: string, priority: number): boolean {
        if(task.trim().length === 0) {
            return false;
        }

    this.todos.push({
        task,
        completed: false,
        priority,
    })

    return true;
    }
}

