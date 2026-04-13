interface Todo {
    task: string;
    completed: boolean;
    priority: number;
}

class TodoList implements Todo {
    task: string;
    completed: boolean;
    priority: number;

    constructor(task: string, completed: boolean, priority: number) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }

    test(): void {
        console.log(`Test om vi kan se ${this.task} och ${this.completed} samt ${this.priority}`);
    }
}

const t = new TodoList("Handla mat", true, 2);

t.test();