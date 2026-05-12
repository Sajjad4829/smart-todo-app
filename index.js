// ── DOM References add
const taskInput      = document.getElementById('taskInput');
const addBtn         = document.getElementById('addBtn');
const addForm        = document.querySelector('.add-form');
const searchInput    = document.getElementById('searchInput');
const filterTabs     = document.querySelectorAll('.filter-tab');
const themeToggle    = document.getElementById('themeToggle');
const clearBtn       = document.getElementById('clearCompleted');

//handle function add

const handleAdd = () => {
  const text = taskInput.value.trim();

  if (!text) {
    shakeForm(addForm); // Visual error feedback
    taskInput.focus();
    return;
  }

  const newTask = createTask(text);
  tasks = addTask(tasks, newTask);   // Spread: returns new array
  saveTasks(tasks);

  taskInput.value = '';
  taskInput.focus();
  render();
};
//  Toggle a task's completed state 
const handleToggle = (id) => {
  tasks = toggleTask(tasks, id);     // Map + spread: returns new array
  saveTasks(tasks);
  render();
};

// Remove a task with exit animation 
const handleDelete = (id, el) => {
  animateRemove(el, () => {
    tasks = removeTask(tasks, id);   // Filter: returns new array
    saveTasks(tasks);
    render();
  });
};