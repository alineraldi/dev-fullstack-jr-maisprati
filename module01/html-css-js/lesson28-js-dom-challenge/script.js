let userInput = document.querySelector('input[name="name"]');
let addTask = document.getElementById('addTask');

addTask.addEventListener('click', () => {
    const task = userInput.value;

    if (task) {
        let taskList = document.getElementById('taskList');
        let listItem = document.createElement('li');
        listItem.textContent = task;

        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        let editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.addEventListener('click', () => {
            let inputEdit = document.createElement('input');
            inputEdit.type = 'text';
            inputEdit.value = listItem.childNodes[0].textContent;

            listItem.textContent = '';
            listItem.appendChild(inputEdit);

            let saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.addEventListener('click', () => {
                listItem.textContent = inputEdit.value;
                listItem.appendChild(removeButton);
                listItem.appendChild(editButton);
            });

            listItem.appendChild(saveButton);
        });

        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        userInput.value = '';
    }
});
