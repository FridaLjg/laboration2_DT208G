interface Todo {
    task: string;
    completed: boolean;
    priority: number;
}

class TodoList {
    todos: Todo[] = []

    //Metod som lägger till nya "todos"
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

    //Metod som markerar todos som klara
    markTodoCompleted(todoIndex: number): void {
        if (this.todos[todoIndex]) {
            this.todos[todoIndex].completed = true;
        }
    }
}

