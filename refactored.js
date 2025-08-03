let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task) {
    tasks.push(task);
    taskInput.value = '';
    displayTasks();
  }
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    taskList.appendChild(li);
  });
}
