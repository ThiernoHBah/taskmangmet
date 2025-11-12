let tasks = [];
let taskName = document.getElementById("taskName");
let taskCategory = document.getElementById("taskCategory");
let taskDeadline = document.getElementById("taskDeadline");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

// load saved tasks
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  showTasks();
}

// when add button clicked
addTaskBtn.addEventListener("click", function() {
  let name = taskName.value;
  let category = taskCategory.value;
  let date = taskDeadline.value;

  if (name === "" || category === "" || date === "") {
    alert("Please input task");
    return;
  }

  let task = {
    name: name,
    category: category,
    date: date,
    status: "In Progress"
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showTasks();

  // clear boxes
  taskName.value = "";
  taskCategory.value = "";
  taskDeadline.value = "";
});

function showTasks() {
  taskList.innerHTML = "";

  let today = new Date().toISOString().split("T")[0];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status !== "Completed" && tasks[i].date < today) {
      tasks[i].status = "Overdue";
    }

    let li = document.createElement("li");
    li.textContent = tasks[i].name + " (" + tasks[i].category + ") - " + tasks[i].date + " - " + tasks[i].status + " ";

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = function() {
      tasks[i].status = "Completed";
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTasks();
    };

    li.appendChild(doneBtn);
    taskList.appendChild(li);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}