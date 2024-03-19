const task_btn = document.getElementById('task-button');

task_btn.addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('user').value.trim();
    const section = document.getElementById('sub-page');
    
    if (!taskInput) {
        alert("Please add a task.");
        return;
    }
    
    const container = document.createElement('div');
    const heading = document.createElement('p');
    const completeBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    
    container.className = 'container';
    completeBtn.className = 'complete-button';
    deleteBtn.className = 'delete-button';
    editBtn.className = 'edit-button';
    heading.className = 'task-heading';
    
    deleteBtn.addEventListener('click', deleteTask);
    editBtn.addEventListener('click', editTask);
    completeBtn.addEventListener('click', completeTask);
    
    heading.textContent = taskInput;
    completeBtn.textContent = 'Completed';
    deleteBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';
    section.appendChild(container);
    container.appendChild(heading);
    container.appendChild(editBtn);
    container.appendChild(completeBtn);
    container.appendChild(deleteBtn);
}

function deleteTask(event) {
    const container = event.target.closest('.container');
    if (!container) {
        console.error("Container not found.");
        return;
    }
    container.remove();
}

function editTask(event) {
    const container = event.target.closest('.container');
    if (!container) {
        console.error("Container not found.");
        return;
    }
    const heading = container.querySelector('.task-heading');
    
    const editInput = document.createElement('input');
    const saveBtn = document.createElement('button');
    
    editInput.className = 'edit-input';
    saveBtn.className = 'save-button';
    editInput.placeholder = 'Edit Your Task Here';
    saveBtn.textContent = 'Save';
    
    saveBtn.addEventListener('click', () => {
        const editedTaskValue = editInput.value.trim();
        if (!editedTaskValue) {
            alert("Please edit the task.");
            return;
        }
        heading.textContent = editedTaskValue;
        container.removeChild(editInput);
        container.removeChild(saveBtn);
    });
    
    container.appendChild(editInput);
    container.appendChild(saveBtn);
}

function completeTask(event) {
    const heading = event.target.closest('.container').querySelector('.task-heading');
    heading.style.textDecoration = 'line-through';
}
