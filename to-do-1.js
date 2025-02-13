const inputbox=document.getElementById('input-box');
const listcontainer=document.getElementById('list-continer');

function addtask(){
    const task=inputbox.ariaValueMax.trim();
    if(!task){
        alert("please write down a task");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
    <label>
    <input type="checkbox">
    <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
    `;
    listContainer.appendChild(li);
}

