class Task { // Creating a class, an object, as a task
    constructor(year, month, day, type, description) { // The constructor function defines the attributes
        this.id = null;
        this.year = year; // 'this' refers to the specific instance of the class
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
    }

    validateData() {
        for (let key in this) { // a loop to verify each key(this)
            if (this[key] === undefined || this[key] === "") { // verifies if the value is empty
                console.error(`O campo ${key} é obrigatório.`); // if it is, an error message will appear
                return false; // false = the data's not valid
            }
        }
        return true; // if it's not empty, return true (true = valid data)
    }
}

class Database { // creating a class named 'database' to interact with local Storage
    constructor() {
        this.initDatabase(); // constructing a method as part of the class and naming it "initDatabase"
    }

    initDatabase() { // developing what the method will do: start the database
        const id = localStorage.getItem('id'); // captures the value associated to the key 'id'
        if (id === null) { // if the key 'id' is empty...
            localStorage.setItem('id', 0); // define the value of id to 0, starting the count
        }
    }

    loadTasks() { // defining a method to load tasks
        let tasks = []; // starts an empty array of tasks
        let id = localStorage.getItem('id'); // captures the id

        for (let i = 1; i <= id; i++) { // iterates from the first valid task (id=1) to the last one
            try {
                let task = JSON.parse(localStorage.getItem(i)); // try to retrieve the task in the local storage
                tasks.push(task); // adds the retrieved task to the array tasks
            } catch (error) {
                console.error(`Erro ao carregar a tarefa com id ${i}`); // error message just in case
            }
        }
        return tasks; // returns the task list
    }

    createTask(task) { // new method to create new tasks
        let id = this.getNextId(); // catches the next id
        localStorage.setItem(id, JSON.stringify(task)); // stores the task in localStorage, converting it to a JSON string
        localStorage.setItem('id', id.toString()); // updates id in localStorage so it points to the next task
    }

    removeTask(id) {
        let id = localStorage.getItem('id')
        localStorage.removeItem(id); // an easy one: deletes the task associated with the id
        loadTasks()
    }

    searchTasks() { // changed parameter name for clarity
        let year = document.getElementById('year').value; // capturing values from each key
        let month = document.getElementById('month').value;
        let day = document.getElementById('day').value;
        let type = document.getElementById('type').value;
        let description = document.getElementById('description').value;

        let tasks = this.loadTasks(); // make sure to call loadTasks() here
        tasks.forEach((task) => {
            if (
                (year === "" || task.year === year) &&
                (month === "" || task.month === month) &&
                (day === "" || task.day === day) &&
                (type === "" || task.type === type) &&
                (description === "" || task.description.includes(description))
            ) {
                console.log(task);
            }
        });
    }

    getNextId() { // creating a method to get the next id in line
        let currentId = localStorage.getItem('id'); // captures current Id
        return parseInt(currentId) + 1; // returns the current id, converting it to an integer and adding 1, so it's the next Id
    }
}

const database = new Database(); // creating an instance of the Database class

function registerTask() { // creating a function for registering a new task
    let year = document.getElementById('year').value; // capturing values from each key
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let type = document.getElementById('type').value;
    let description = document.getElementById('description').value;

    let task = new Task(year, month, day, type, description); // creates a new task instance

    if (task.validateData()) { // if the data's valid
        database.createTask(task); // saves the task in localStorage
        alert("Tarefa criada com sucesso!"); // success message
    } else {
        alert("Preencha todos os campos."); // error message
    }
}

function loadTasks(tasks = database.loadTasks()) { // tasks is optional here
    let listTasks = document.getElementById('listTasks'); // captures the id listTasks
    listTasks.innerHTML = ""; // cleans previous list

    tasks.forEach((task) => { // iterates through each task
        let row = listTasks.insertRow(); // creates a new table row <tr> for the new task

        row.insertCell(0).innerHTML = `${task.day}/${task.month}/${task.year}`; // defines the first cell of the task list: DD-MM-YYY
        row.insertCell(1).innerHTML = getTaskTypeName(task.type); // the second cell's for the type of task
        row.insertCell(2).innerHTML = task.description; // third cell for the task's description

        let btn = document.createElement('button'); // creates a button
        btn.className = 'btn btn-danger'; // a bootstrap class for the button, btn-danger makes it red
        btn.id = task.id; // links the button to the task id
        btn.innerHTML = 'Deletar'; // what's written inside the button
        btn.onclick = () => { // corrected to 'onclick'
            if (confirm('Você tem certeza que quer excluir esta tarefa?')) { // confirm message
                database.removeTask(task.id); // calls the method for deleting
                loadTasks(); // updates the task list
            }
        };

        row.insertCell(3).append(btn); // the fourth cell will be for the delete button
    });
}

function getTaskTypeName(type) { // function to get the type of task
    switch (type) { // a switch structure for connecting the number to the name
        case '1':
            return 'Studies';
        case '2':
            return 'Work';
        case '3':
            return 'Home';
        case '4':
            return 'Health';
        case '5':
            return 'Family';
        default:
            return 'Unknown';
    }
}

document.addEventListener('DOMContentLoaded', () => { // DOMContentLoaded makes sure the entire page loads before running this part of the code
    if (document.body.contains(document.getElementById('listTasks'))) { // you need to load the page first
        loadTasks();
    }
});
