document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const taskDateInput = document.getElementById('task-date');
    const taskTimeInput = document.getElementById('task-time');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Add task
    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        const taskDate = taskDateInput.value;
        const taskTime = taskTimeInput.value;

        if (taskText !== '' && taskDate !== '' && taskTime !== '') {
            addTask(taskText, taskDate, taskTime);
            newTaskInput.value = '';
            taskDateInput.value = '';
            taskTimeInput.value = '';
        }
    });

    // Add task with 'Enter' key
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = newTaskInput.value.trim();
            const taskDate = taskDateInput.value;
            const taskTime = taskTimeInput.value;

            if (taskText !== '' && taskDate !== '' && taskTime !== '') {
                addTask(taskText, taskDate, taskTime);
                newTaskInput.value = '';
                taskDateInput.value = '';
                taskTimeInput.value = '';
            }
        }
    });

    // Add a task to the list
    function addTask(taskText, taskDate, taskTime) {
        const li = document.createElement('li');
        const taskDetails = document.createElement('span');
        taskDetails.textContent = ${taskText} (Due: ${taskDate} at ${taskTime});
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(taskDetails);
        li.appendChild(deleteButton);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
    }
});
