[23:34, 15/6/2026] B.Ushaswini: let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const priority = document.getElementById("taskPriority").value;

    if (title.trim() === "") {
        alert("Please enter a task title");
        return;
    }

    const task = {
        id: Date.now(),
        title,
        description,
        priority,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    displayTasks();

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
}

function displayTasks() {
    const taskList = document.get…
[23:49, 15/6/2026] B.Ushaswini: let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const priority = document.getElementById("taskPriority").value;

    if (title.trim() === "") {
        alert("Please enter a task title");
        return;
    }

    const task = {
        id: Date.now(),
        title,
        description,
        priority,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    displayTasks();

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
}

function displayTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const taskCard = document.createElement("div");

        taskCard.className =
            task.completed
                ? "task-card completed"
                : "task-card";

        taskCard.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p class="priority">Priority: ${task.priority}</p>

            <div class="actions">
                <button
                    class="complete-btn"
                    onclick="toggleComplete(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
        `;

        taskList.appendChild(taskCard);
    });
}

function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    saveTasks();
    displayTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}