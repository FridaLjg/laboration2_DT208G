import './style.css'
import './classes.ts'
import { TodoList } from './classes.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class=container>
<h1>Att göra</h1>

<table>
  <thead id="table-heading">
    <tr>
      <th>Uppgift</th>
      <th>Färdig?</th>
      <th>Prioritet</th>
    </tr>
  </thead>

  <tbody id="todo-list"></tbody>
</table>

<h2>Lägg till Uppgift</h2>

  <form id="todo-form">
    <label for="task">Uppgift</label>
    <input id="task" placeholder="Handla..."/><br>
    <label for="priority">Prioritet</label>
    <input id="priority" placeholder="1, 2, 3, 4, 5?"/><br>
    <button type="submit">Lägg till uppgift</button>
    <br>
    <div id="error"></div>
  </form>
</div>
`

const todoList = new TodoList();

const form = document.querySelector<HTMLFormElement>('#todo-form')!;
const taskInput = document.querySelector<HTMLInputElement>('#task')!;
const priorityInput = document.querySelector<HTMLInputElement>('#priority')!;
const errormessage = document.querySelector<HTMLDivElement>('#error')!;

//Händelselyssnare
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task: string = taskInput.value;
  const priority: number = Number(priorityInput.value);

  const success = todoList.addTodo(task, priority);
  if (success === false) {
    errormessage.textContent = 'Du måste fylla i alla textfält!';
    return;
  }
});



