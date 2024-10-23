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

function renderTasks(tasks, index) {
    const taskTableBody = document.getElementById('taskTableBody');
    taskTableBody.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const tr = document.createElement('tr');
        tr.id = `taskRow${index}`; 
        tr.innerHTML = `
            <td>${task.name}</td>
            <td>${task.date}</td>
            <td>${task.type}</td>
            <td><input type="checkbox" ${task.done ? 'checked' : ''}></td>
            <td>
                <button class="btn btn-sm btn-warning" id="editTaskButton${index}" onclick="editTask(${index})">Edit</button>
                <button class="btn btn-sm btn-warning" onclick="deleteTask(${index})">Delete</button>
            </td>
        `;

        const checkbox = tr.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            task.done = checkbox.checked;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        });
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

    searchInput.value = "";
}

let currentEditIndex = null;

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];


    const row = document.getElementById(`taskRow${index}`);

    row.cells[0].innerHTML = `<input type="text" class="form-control" value="${task.name}" />`;
    row.cells[1].innerHTML = `<input type="date" class="form-control" value="${task.date}" />`;
    row.cells[2].innerHTML = `
        <select class="form-control">
            <option value="Work" ${task.type === "Work" ? "selected" : ""}>Work</option>
            <option value="Studies" ${task.type === "Studies" ? "selected" : ""}>Studies</option>
            <option value="Chores" ${task.type === "Chores" ? "selected" : ""}>Chores</option>
        </select>
    `;


    const saveButton = document.createElement('button');
    saveButton.className = "btn btn-sm btn-success";
    saveButton.innerText = "Save";
    
    saveButton.onclick = function () {

        task.name = row.cells[0].querySelector('input').value.trim();
        task.date = row.cells[1].querySelector('input').value;
        task.type = row.cells[2].querySelector('select').value;

        tasks[index] = task; 
        localStorage.setItem('tasks', JSON.stringify(tasks)); 

        renderTasks(tasks); 
    };


    row.cells[3].innerHTML = '';
    row.cells[3].appendChild(saveButton);
}

function deleteTask(index) {
    if(confirm("Are you sure you'd like to delete this task?")) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks(tasks);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    document.getElementById('addTaskButton').addEventListener('click', addTask);
    document.getElementById('searchTaskButton').addEventListener('click', searchTasks);
    renderTasks(savedTasks);
})