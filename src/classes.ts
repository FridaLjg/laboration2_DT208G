interface Todo {
    task: string;
    completed: boolean;
    priority: number;
}

class TodoList {
    todos: Todo[] = [];

    //Ladda sparade todos från localStorage
    storageKey: string;

    constructor(storageKey = "todos") {
        this.storageKey = storageKey;
        this.todos = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage(): void {
        const storedItems = localStorage.getItem(this.storageKey);
        
        if (storedItems) {
            this.todos = JSON.parse(storedItems);
        }
    }

    //Metod som lägger till nya "todos"
    addTodo(task: string, priority: number): boolean {
        if (task.trim().length === 0) {
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

    //Metod som hämtar hela listan av todos
    getTodos(): Todo[] {
        return this.todos;
    }

    //Metod somn sparar todos till localStorage
    saveToLocalStorage(): void {
        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.todos)
        );
    }

}

