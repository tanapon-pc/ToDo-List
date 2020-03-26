let topics = [];
const add = (ev) =>{
    ev.preventDefault();
    let topic = {
        title: document.getElementById('createAddInput').value
    }
    topics.push(topic);
    localStorage.setItem('TodoList', JSON.stringify(topics));
    createTask();
    
}
    document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('addBtn').addEventListener('click', add);
    });

