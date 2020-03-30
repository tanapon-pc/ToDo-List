let topics = [];
const add = (ev) => {
    ev.preventDefault();
    let topic = {
        title: document.getElementById('createTaskInput').value
    }
    topics.push(topic);
    localStorage.setItem('TodoList', JSON.stringify(topics));
    createTask();
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addBtn').addEventListener('click', add);
});

var deleteTask = function () {
    //! Edit 
    let parentEl = this.parentNode;
    parentEl.parentNode.removeChild(parentEl);   //remove ul >> li
    let value = localStorage.getItem('TodoList', JSON.stringify(topics));
    let obj = JSON.parse(value);
    var a = obj.splice(obj.indexOf(1), 1);
    //console.log(a);
    localStorage.setItem("TodoList", JSON.stringify(obj));
}
var MaskAddDone = function () {
    let parentEl = this.parentNode;
    let pEl = parentEl.getElementsByClassName('todoName')[0];
    // console.log(pEl);
    if (this.checked) {
        pEl.classList.add('done');
    } else {
        pEl.classList.remove('done');
    }
}
var switchToEditMode = function () {
    var parentEl = this.parentNode;
    var pEl = parentEl.getElementsByClassName('todoName')[0];
    var inputEl = parentEl.getElementsByClassName('editInput')[0];
    inputEl.value = pEl.innerHTML;
    parentEl.classList.add('edit-mode');
}
var saveTask = function () {
    var parentEl = this.parentNode;
    var pEl = parentEl.getElementsByClassName('todoName')[0];
    var inputEl = parentEl.getElementsByClassName('editInput')[0];

    parentEl.classList.remove('edit-mode');
    if (inputEl.value.trim() == '') {
        return;
    }

    pEl.innerHTML = inputEl.value.trim();
    //parentEl.classList.remove('edit-mode');

}


function createTask() {
    let inputEl = document.getElementById('createTaskInput');
    let todoName = inputEl.value.trim();

    if (todoName == '') {
        alert("Please input put your Activities!");
        return;
    }
 

    let p = document.createElement('p');
    p.classList.add('todoName');
    p.innerHTML = todoName;

    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.classList.add('editInput');


    let editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerHTML = 'Edit';
    editBtn.onclick = switchToEditMode;


    let saveBtn = document.createElement('button');
    saveBtn.classList.add('saveBtn');
    saveBtn.innerHTML = 'Save';
    saveBtn.onclick = saveTask;

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = deleteTask;



    let itemEl = document.createElement('li');
    itemEl.classList.add('todoItem');

  
    itemEl.appendChild(p);
    itemEl.appendChild(editInput);
    itemEl.appendChild(editBtn);
    itemEl.appendChild(saveBtn);
    itemEl.appendChild(deleteBtn);


    let parentListEl = document.getElementById('List');
    parentListEl.appendChild(itemEl);

    inputEl.value = '';


}