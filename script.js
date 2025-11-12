let tasks = [];
let taskName = document.getElementById("taskName");
let taskCategory = document.getElementById("taskCategory");
let taskDeadline = document.getElementById("taskDeadline");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click"), function(){
  let name = nameInput.value;
  let category = catInput.value;
  let date = dateInput.value;

  if (name === "" || category === "" || date === "") {
    alert("Please input task");
    return;
}

    for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status !== "Completed" && tasks[i].date < today) {
      tasks[i].status = "Overdue";
    }

    let li = document.createElement("li");
    li.textContent = tasks[i].name + " (" + tasks[i].category + ") - " + tasks[i].date + " - " + tasks[i].status;

    // make a done button
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.onclick = function() {
      tasks[i].status = "Completed";
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTasks();
    };

    li.appendChild(doneBtn);
    taskList.appendChild(li);
  
