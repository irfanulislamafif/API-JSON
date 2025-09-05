const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};
/**
 *
 * {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
 */

const displayTodo = (todos) => {
  //  1.
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    console.log(todo);
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class='todo-card'>
    <p> ${
      todo.completed == true
        ? `<i class="fa-solid fa-square-check"></i>`
        : ` <i class="fa-regular fa-square-check"></i>`
    }</p>
    <h4>${todo.title}</h4>

    </div>
    `;
    todoContainer.append(todoCard);
  });
};
loadTodo();
// task: user, comments
