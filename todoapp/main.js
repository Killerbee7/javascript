
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const button = document.querySelector("#new-task-submit");
const del = document.querySelector(".delete");
const listElement = document.querySelector("#tasks");

let todolist = JSON.parse(localStorage.getItem("todolist")) || [];

form.addEventListener("submit", (e) => {
  const task = input.value;
  e.preventDefault();
  console.log(task);

  if (!task) {
    alert("Please write a task first.");
    return;
  } else {
    todolist.push(task);
    localStorage.setItem("todolist", JSON.stringify(todolist));

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_el_content = document.createElement("div");
    task_el_content.classList.add("content");

    task_el.appendChild(task_el_content);
    listElement.appendChild(task_el);
    task_el_content.innerHTML = task;

    const task_delete = document.createElement("div");
    task_delete.classList.add("action");
    const delButton = document.createElement("button");
    delButton.classList.add("delete");
    delButton.innerHTML = "DELETE";
    task_delete.appendChild(delButton);
    task_el.appendChild(task_delete);
//Delete button
    delButton.addEventListener("click", () => {
      listElement.removeChild(task_el);
      todolist = todolist.filter((e) => e !== task);
      localStorage.setItem("todolist", JSON.stringify(todolist));
    });
  }
  form.reset();
});
// loads to-do list from storage when resfreshed
const reloadTasks = () => {
  let todolist = Array.from(JSON.parse(localStorage.getItem("todolist")));
  todolist.forEach((task) => {
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_el_content = document.createElement("div");
    task_el_content.classList.add("content");

    task_el.appendChild(task_el_content);
    listElement.appendChild(task_el);
    task_el_content.innerHTML = task;

    const task_delete = document.createElement("div");
    task_delete.classList.add("action");
    const delButton = document.createElement("button");
    delButton.classList.add("delete");
    delButton.innerHTML = "DELETE";
    task_delete.appendChild(delButton);
    task_el.appendChild(task_delete);

    delButton.addEventListener("click", () => {
      listElement.removeChild(task_el);
      todolist = todolist.filter((e) => e !== task);
      localStorage.setItem("todolist", JSON.stringify(todolist));
    });
  });
};

window.onload = reloadTasks();
