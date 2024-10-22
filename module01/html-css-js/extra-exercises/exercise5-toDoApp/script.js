function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const taskDate = document.getElementById('dateInput').value;
    const categoryInput = document.getElementById('categoryInput');
    const taskType = categoryInput.value;

    if (taskText && taskDate && taskType) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const newTask = {
            name: taskText,
            date: taskDate,
            type: taskType
        };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = "";
        document.getElementById('dateInput').value = "";
        categoryInput.value = "";
    }
}

function renderTasks(tasks) {
    const taskTableBody = document.getElementById('taskTableBody');
    taskTableBody.innerHTML = ""; // Clear previous entries

    tasks.forEach(task => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${task.name}</td>
            <td>${task.date}</td>
            <td>${task.type}</td>
        `;
        taskTableBody.appendChild(tr);
    });
}

function searchTasks() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const filteredTasks = tasks.filter(task => {
        return (
            task.name.toLowerCase().includes(searchInput) ||
            task.date.includes(searchInput) ||
            task.type.toLowerCase().includes(searchInput)
        );
    });

    renderTasks(filteredTasks);
}

// Event listeners
document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('searchTaskButton').addEventListener('click', searchTasks);

// Initial render
renderTasks(JSON.parse(localStorage.getItem('tasks')) || []);
