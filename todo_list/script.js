document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('task-input');
    var addTaskButton = document.getElementById('add-task-button');
    var taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        var taskName = taskInput.value;
        if (taskName !== '') {
            var taskItem = document.createElement('li');
            taskItem.className = 'task-item';
        
            var taskNameSpan = document.createElement('span');
            taskNameSpan.className = 'task-name';
            taskNameSpan.textContent = taskName;

            var deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'supprimer';
            deleteButton.addEventListener('click', function() {
                taskItem.parentNode.removeChild(taskItem);
            });

            taskItem.appendChild(taskNameSpan);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            taskInput.value = '';
        }
    });
});


