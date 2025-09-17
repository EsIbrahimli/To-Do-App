
const form = document.querySelector('.form');
const taskInput = document.getElementById('taskInput');
const taskList = document.querySelector('.taskList');



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if(taskText !== ''){
        const listItem = document.createElement('li');
        listItem.className = 'taskItem';
        listItem.innerHTML = `${taskText} <button class="deleteButton">Delete</button>`;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});


taskList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('deleteButton')){
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }
});