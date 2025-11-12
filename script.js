let tasks = [];
let taskName = document.getElementById("taskName");
let taskCategory = document.getElementById("taskCategory");
let taskDeadline = document.getElementById("taskDeadline");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
  let name = nameInput.value;
  let category = catInput.value;
  let date = dateInput.value;

  if (name === "" || category === "" || date === "") {
    alert("Please input tasks here");
    return;
  }