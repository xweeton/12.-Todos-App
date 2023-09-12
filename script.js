const tasks = [];

function addTask() {
  let task = prompt("Enter a new task:"); //if.trim(), must 'let', cause of 'mutable'

  //.trim() method = from empty(" ") to null("") string
  task = task.trim();
  if (task.length == 0) { //use .length == 0 to check null
    alert("Please add a task!")  //.trim() method till here
  } else {
    tasks.push(task);
    alert("Task added!");
  }
}

function viewTasks() {
  let taskList = "Tasks:\n";
  for (const task of tasks) {
    taskList += `- ${task}\n `
  }

  alert(taskList);
}