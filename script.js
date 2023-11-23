// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new task element
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button id="complete" onClick="completeTask(this)">Complete</button>
                <button id="delete" onclick="removeTask(this)">Delete</button>
            </div>
        `;

    // Append the task element to the task list
    taskList.appendChild(taskElement);

    // Clear the input field
    taskInput.value = "";
  }
}

// Function to remove a task
function removeTask(button) {
  const taskElement = button.parentElement.parentElement;
  taskList.removeChild(taskElement);
}

// Function to mark a task as complete
function completeTask(button) {
  const taskElement = button.parentElement.parentElement;
  const taskTextElement = taskElement.querySelector("span");

  // Toggle the strikethrough style
  taskTextElement.style.textDecoration =
    taskTextElement.style.textDecoration === "line-through"
      ? "none"
      : "line-through";
}
