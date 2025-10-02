// let tasks = [];

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const taskList = document.getElementById("taskList");
// const numbers = document.getElementById("numbers");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const taskText = input.value.trim();

//   if (taskText === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   if (tasks.some(task => task.text === taskText)) {
//     alert("Duplicate task not allowed.");
//     return;
//   }

//   tasks.push({ text: taskText, completed: false });
//   input.value = "";
//   showTasks();
// });

// function showTasks() {
//   taskList.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.className = "taskItem";

//     const taskDiv = document.createElement("div");
//     taskDiv.className = "task";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = task.completed;
//     checkbox.onchange = () => toggleTask(index);

//     const span = document.createElement("span");
//     span.textContent = task.text;
//     if (task.completed) span.classList.add("completed");

//     taskDiv.appendChild(checkbox);
//     taskDiv.appendChild(span);

//     const actionDiv = document.createElement("div");
//     actionDiv.className = "taskActions";

//     const editIcon = document.createElement("i");
//     editIcon.className = "fas fa-edit";
//     editIcon.onclick = () => editTask(index);
//     if (task.completed) {
//       editIcon.classList.add("edit-disabled");
//       checkAllCompleted();
//     }

//     const deleteIcon = document.createElement("i");
//     deleteIcon.className = "fas fa-trash-alt";
//     deleteIcon.onclick = () => deleteTask(index);

//     actionDiv.appendChild(editIcon);
//     actionDiv.appendChild(deleteIcon);

//     li.appendChild(taskDiv);
//     li.appendChild(actionDiv);
//     taskList.appendChild(li);
//   });

//   updateProgress();
// }

// function toggleTask(index) {
//   tasks[index].completed = !tasks[index].completed;
//   showTasks();
// }

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   showTasks();
// }

// function editTask(index) {
//   input.value = tasks[index].text;
//   tasks.splice(index, 1);
//   showTasks();
// }

// function updateProgress() {
//   const total = tasks.length;
//   const done = tasks.filter(task => task.completed).length;
//   numbers.textContent = `${done}/${total}`;
//   const progressBar = document.getElementById("progress");
//   const percentage = total === 0 ? 0 : (done / total) * 100;
//   progressBar.style.width = `${percentage}%`;
// }

// function checkAllCompleted() {
//   const total = tasks.length;
//   const done = tasks.filter(task => task.completed).length;

//   if (total > 0 && total === done) {
//     confetti();
//     const interval = setInterval(confetti, 500);
//     setTimeout(() => {
//       clearInterval(interval);
//     }, 1700);
//   }
// }


// let tasks = [];

// // Selectors
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const taskList = document.getElementById("taskList");
// const numbers = document.getElementById("numbers");

// // Load tasks from localStorage on page load
// window.onload = () => {
//   const savedTasks = localStorage.getItem("tasks");
//   if (savedTasks) {
//     tasks = JSON.parse(savedTasks);
//     showTasks();
//   }
// };

// // Save tasks to localStorage
// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // Add new task
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const taskText = input.value.trim();

//   if (taskText === "") {
//     alert("Please enter a task.");
//     return;
//   }

//   if (tasks.some(task => task.text === taskText)) {
//     alert("Duplicate task not allowed.");
//     return;
//   }

//   tasks.push({ text: taskText, completed: false });
//   input.value = "";
//   saveTasks();
//   showTasks();
// });

// // Show all tasks
// function showTasks() {
//   taskList.innerHTML = "";

//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.className = "taskItem";

//     const taskDiv = document.createElement("div");
//     taskDiv.className = "task";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.checked = task.completed;
//     checkbox.onchange = () => toggleTask(index);

//     const span = document.createElement("span");
//     span.textContent = task.text;
//     if (task.completed) span.classList.add("completed");

//     taskDiv.appendChild(checkbox);
//     taskDiv.appendChild(span);

//     const actionDiv = document.createElement("div");
//     actionDiv.className = "taskActions";

//     const editIcon = document.createElement("i");
//     editIcon.className = "fas fa-edit";
//     editIcon.onclick = () => editTask(index);
//     if (task.completed) {
//       editIcon.classList.add("edit-disabled");
//       checkAllCompleted();
//     }

//     const deleteIcon = document.createElement("i");
//     deleteIcon.className = "fas fa-trash-alt";
//     deleteIcon.onclick = () => deleteTask(index);

//     actionDiv.appendChild(editIcon);
//     actionDiv.appendChild(deleteIcon);

//     li.appendChild(taskDiv);
//     li.appendChild(actionDiv);
//     taskList.appendChild(li);
//   });

//   updateProgress();
// }

// // Toggle task complete/incomplete
// function toggleTask(index) {
//   tasks[index].completed = !tasks[index].completed;
//   saveTasks();
//   showTasks();
// }

// // Delete task
// function deleteTask(index) {
//   tasks.splice(index, 1);
//   saveTasks();
//   showTasks();
// }

// // Edit task
// function editTask(index) {
//   input.value = tasks[index].text;
//   tasks.splice(index, 1);
//   saveTasks();
//   showTasks();
// }

// // Update progress bar
// function updateProgress() {
//   const total = tasks.length;
//   const done = tasks.filter(task => task.completed).length;
//   numbers.textContent = `${done}/${total}`;
//   const progressBar = document.getElementById("progress");
//   const percentage = total === 0 ? 0 : (done / total) * 100;
//   progressBar.style.width = `${percentage}%`;
// }

// // Confetti when all completed
// function checkAllCompleted() {
//   const total = tasks.length;
//   const done = tasks.filter(task => task.completed).length;

//   if (total > 0 && total === done) {
//     confetti();
//     const interval = setInterval(confetti, 500);
//     setTimeout(() => {
//       clearInterval(interval);
//     }, 1700);
//   }
// }


// let notes = [];

// const noteForm = document.getElementById("noteForm");
// const noteTitle = document.getElementById("noteTitle");
// const noteDesc = document.getElementById("noteDesc");
// const noteList = document.getElementById("noteList");

// // Load notes from localStorage
// window.onload = () => {
//   const savedNotes = localStorage.getItem("notes");
//   if (savedNotes) {
//     notes = JSON.parse(savedNotes);
//     showNotes();
//   }
// };

// function saveNotes() {
//   localStorage.setItem("notes", JSON.stringify(notes));
// }

// // Add Note
// noteForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const title = noteTitle.value.trim();
//   const desc = noteDesc.value.trim();

//   if (title === "" && desc === "") {
//     alert("Please write something.");
//     return;
//   }

//   notes.push({ title, desc });
//   saveNotes();
//   noteTitle.value = "";
//   noteDesc.value = "";
//   showNotes();
// });

// // Show Notes
// function showNotes() {
//   noteList.innerHTML = "";
//   notes.forEach((note, index) => {
//     const li = document.createElement("li");
//     li.className = "noteItem";

//     const h3 = document.createElement("h3");
//     h3.textContent = note.title || "Untitled";

//     const p = document.createElement("p");
//     p.textContent = note.desc;

//     const actionDiv = document.createElement("div");
//     actionDiv.className = "noteActions";

//     const editIcon = document.createElement("i");
//     editIcon.className = "fas fa-edit";
//     editIcon.onclick = () => editNote(index);

//     const deleteIcon = document.createElement("i");
//     deleteIcon.className = "fas fa-trash-alt";
//     deleteIcon.onclick = () => deleteNote(index);

//     actionDiv.appendChild(editIcon);
//     actionDiv.appendChild(deleteIcon);

//     li.appendChild(h3);
//     li.appendChild(p);
//     li.appendChild(actionDiv);

//     noteList.appendChild(li);
//   });
// }

// // Delete Note
// function deleteNote(index) {
//   notes.splice(index, 1);
//   saveNotes();
//   showNotes();
// }

// // Edit Note
// function editNote(index) {
//   noteTitle.value = notes[index].title;
//   noteDesc.value = notes[index].desc;
//   notes.splice(index, 1);
//   saveNotes();
//   showNotes();
// }


// ====== TASKS ======
let tasks = [];
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const numbers = document.getElementById("numbers");

// Load saved tasks
window.onload = () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) tasks = JSON.parse(savedTasks);
  showTasks();

  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) notes = JSON.parse(savedNotes);
  showNotes();
};

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return alert("Enter a task");
  if (tasks.some(t => t.text === text)) return alert("Duplicate task not allowed.");
  tasks.push({ text, completed: false });
  taskInput.value = "";
  saveTasks();
  showTasks();
});

function showTasks() {
  taskList.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "taskItem";
    li.innerHTML = `
      <div class="task">
        <input type="checkbox" ${t.completed ? "checked" : ""} onchange="toggleTask(${i})"/>
        <span class="${t.completed ? "completed" : ""}">${t.text}</span>
      </div>
      <div class="taskActions">
        <i class="fas fa-edit ${t.completed ? "edit-disabled" : ""}" onclick="editTask(${i})"></i>
        <i class="fas fa-trash-alt" onclick="deleteTask(${i})"></i>
      </div>
    `;
    taskList.appendChild(li);
  });
  updateProgress();
}

function toggleTask(i) {
  tasks[i].completed = !tasks[i].completed;
  saveTasks();
  showTasks();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  saveTasks();
  showTasks();
}

function editTask(i) {
  taskInput.value = tasks[i].text;
  tasks.splice(i, 1);
  saveTasks();
  showTasks();
}

function updateProgress() {
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;
  numbers.textContent = `${done}/${total}`;
  document.getElementById("progress").style.width =
    total === 0 ? "0%" : `${(done / total) * 100}%`;
}

// ====== NOTES ======
let notes = [];
const noteForm = document.getElementById("noteForm");
const noteTitle = document.getElementById("noteTitle");
const noteDesc = document.getElementById("noteDesc");
const noteList = document.getElementById("noteList");

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = noteTitle.value.trim();
  const desc = noteDesc.value.trim();
  if (!title && !desc) return alert("Write something!");
  notes.push({ title, desc });
  saveNotes();
  noteTitle.value = "";
  noteDesc.value = "";
  showNotes();
});

function showNotes() {
  noteList.innerHTML = "";
  notes.forEach((n, i) => {
    const li = document.createElement("li");
    li.className = "noteItem";
    li.innerHTML = `
      <h3>${n.title || "Untitled"}</h3>
      <p>${n.desc}</p>
      <div class="noteActions">
        <i class="fas fa-edit" onclick="editNote(${i})"></i>
        <i class="fas fa-trash-alt" onclick="deleteNote(${i})"></i>
      </div>
    `;
    noteList.appendChild(li);
  });
}

function deleteNote(i) {
  notes.splice(i, 1);
  saveNotes();
  showNotes();
}

function editNote(i) {
  noteTitle.value = notes[i].title;
  noteDesc.value = notes[i].desc;
  notes.splice(i, 1);
  saveNotes();
  showNotes();
}

// ====== TAB SWITCHING ======
const taskTab = document.getElementById("taskTab");
const noteTab = document.getElementById("noteTab");
const tasksSection = document.getElementById("tasksSection");
const notesSection = document.getElementById("notesSection");

taskTab.addEventListener("click", () => {
  taskTab.classList.add("active");
  noteTab.classList.remove("active");
  tasksSection.style.display = "block";
  notesSection.style.display = "none";
});

noteTab.addEventListener("click", () => {
  noteTab.classList.add("active");
  taskTab.classList.remove("active");
  tasksSection.style.display = "none";
  notesSection.style.display = "block";
});
