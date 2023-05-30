document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('task-input');
    var addTaskButton = document.getElementById('add-task-button');
    var taskList = document.getElementById('task-list');

    function addTask() {
        var taskName = taskInput.value;
        if (taskName !== '') {
            var taskItem = document.createElement('li');
            taskItem.className = 'task-item';
        
            var taskCheckbox = document.createElement('input');
            taskCheckbox.type = 'checkbox';
            taskCheckbox.className = 'task-checkbox';

            var taskNameSpan = document.createElement('span');
            taskNameSpan.className = 'task-name';
            taskNameSpan.textContent = taskName;

            var deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'supprimer';
            deleteButton.addEventListener('click', function() {
                taskItem.parentNode.removeChild(taskItem);
            });

            taskItem.appendChild(taskCheckbox);
            taskItem.appendChild(taskNameSpan);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            taskInput.value = '';
        }
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});



