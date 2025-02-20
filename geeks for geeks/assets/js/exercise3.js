// Task Scheduler

const addTask = () => {
  let taskInput = document.getElementById("taskInput").value;
  let taskDate = document.getElementById("taskDate").value;
  if (taskInput === "" || taskDate === "") return;

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  let taskText = document.createElement("span");
  taskText.innerHTML = `${taskInput} - <small>${taskDate}</small>`;

  let completeBtn = document.createElement("button");
  completeBtn.innerText = "True";
  completeBtn.onclick = () => {
    taskText.classList.toggle("completed");
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "false";
  deleteBtn.onclick = () => {
    taskDiv.remove();
  };

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(completeBtn);
  taskDiv.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(taskDiv);

  document.getElementById("taskInput").value = "";
  document.getElementById("taskDate").value = "";
};
