import './style.css'
import { TodoList } from './classes.ts';
import type { Todo } from './classes.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class=container>
<h1>Att göra</h1>

<table>
  <thead id="table-heading">
    <tr>
      <th>Uppgift</th>
      <th>Färdig?</th>
      <th>Prioritet</th>
      <th>Ta bort</th>
    </tr>
  </thead>

  <tbody id="todo-list"></tbody>
</table>

<h2>Lägg till Uppgift</h2>

  <form id="todo-form">
    <label for="task">Uppgift</label>
    <input id="task" placeholder="Handla..."/><br>
    <div id="task-error" class="error"></div><br>
    <label for="priority">Prioritet</label>
    <input id="priority" placeholder="1, 2, 3, 4, 5"/><br>
    <div id="priority-error" class="error"></div><br>
    <button type="submit">Lägg till uppgift</button>
    <br>
  </form>
</div>
`

const todoList = new TodoList();

const form = document.querySelector<HTMLFormElement>('#todo-form')!;
const taskInput = document.querySelector<HTMLInputElement>('#task')!;
const priorityInput = document.querySelector<HTMLInputElement>('#priority')!;
const taskerror = document.querySelector<HTMLDivElement>('#task-error')!;
const priorityerror = document.querySelector<HTMLDivElement>('#priority-error')!;
const todoTable = document.querySelector<HTMLTableSectionElement>('#todo-list')

function createTodoRow(todo: Todo, index: number): void {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${todo.task}</td>
    <td><input type="checkbox" ${todo.completed ? 'checked' : ''}></td>
    <td>${todo.priority}</td>
    <td><button class="delete-button">Radera</button></td>
    `;

  //Markera som klar
  const checkbox = row.querySelector<HTMLInputElement>('input[type="checkbox"]');

  checkbox?.addEventListener('change', () => {
    todoList.markTodoCompleted(index);
  });

  //Raderaknapp
  const deleteButton = row.querySelector<HTMLButtonElement>('.delete-button');

  deleteButton?.addEventListener('click', () => {
    todoList.removeTodo(index);
    row.remove();
  });

  todoTable?.appendChild(row);
}

todoList.getTodos().forEach((todo, index) => {
  createTodoRow(todo, index);
});


//Händelselyssnare
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task: string = taskInput.value;
  const priority: number = Number(priorityInput.value);

  taskerror.textContent = '';
  priorityerror.textContent = '';

  if (task.trim().length === 0) {
    taskerror.textContent = 'Du måste skriva en uppgift.';
  }

  if (priority < 1 || priority > 5) {
    priorityerror.textContent =
      'Prioritet måste vara mellan 1 och 5.';
    return;
  }

  if (taskerror.textContent !== '' || priorityerror.textContent !== '') {
    return;
  }

  todoList.addTodo(task, priority);

  const index = todoList.getTodos().length - 1;
  const newTodo = todoList.getTodos()[index];

  createTodoRow(newTodo, index);

  //Rensa formulär
  taskInput.value = '';
  priorityInput.value = '';
});