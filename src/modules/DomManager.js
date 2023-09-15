import {addTask,cycleTaskTix} from "./appLogic";

const htmlBody = document.querySelector("body");
const pageContainer = document.createElement('div');
pageContainer.className = "pageContainer";

export default function loadPage(){

    htmlBody.appendChild(pageContainer);

    pageContainer.innerHTML =
    `
    <div class="nav">
    <button class="today">today</button>
    <button class="upcoming">upcoming</button>
    <button class="listbtn">lists</button>
    <div class="listCont">

    </div>
</div>
<div class="contentContainer">
    <div class="phigh">

    </div>
    <div class="pmed">

    </div>
    <div class="plow">

    </div>
    <button class="addtaskbtn">+</button>
</div>

    `
    buildUI();

}

function buildUI(){

const parentDiv = document.querySelector(".contentContainer");
const addTaskBtn = document.querySelector(".addtaskbtn");
    addTaskBtn.addEventListener("click", openTaskForm);

    function openTaskForm(){

        const taskForm = document.createElement('div');
        taskForm.className = "taskFormCont";
        taskForm.innerHTML =
        `
        <form class="form">
            <label for="description">Task</label>
            <input type="text" name="taskText" id="description">
            <label for="dDate">Due Date</label>
            <input type="date" name="dDate" id="dDate">
            <label for="prioritySelect">Priority</label>
            <select name="prioritydroplist" id="prioritySelect">
                <option selected>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <label for="list"></label>
            <select name="list" id="list">
                <option selected>None</option>
            </select>
            <button type="submit">Add</button>
            <button class="cancelAdd">Cancel</button>
        </form>
        `
        parentDiv.appendChild(taskForm);
        submitHandler();
    }
}


function submitHandler(){
    const taskSubmit = document.querySelector(".form");
    taskSubmit.onsubmit = submitTask;
}


function submitTask(event){
    event.preventDefault();
    const description = document.getElementById("description").value;
    const date = document.getElementById("dDate").value;
    const priority = document.getElementById("prioritySelect").value;
    const list = document.getElementById("list").value;

    const taskObj = addTask(description, date, list, priority);
    elementBuilder(taskObj);
    //invoke method to build the task from the taskobj
}

function elementBuilder(obj){

    let taskContainer;

    switch(obj.priority)
    {
        case 'Low':
            taskContainer = document.querySelector(".plow");
            break;
        case 'Medium':
            taskContainer = document.querySelector(".pmed");
            break;
        case 'High':
            taskContainer = document.querySelector(".phigh");
            break;
        default: console.log("something went wrong with selecting the container div");

    }
console.log(`the contents of priority is ${obj.priority}`);
    const task = document.createElement('div');
    taskContainer.appendChild(task);
    task.className = "task";
    task.dataset.index = `${obj.index}`;

    const checkBox = document.createElement('div');
    checkBox.className = "checkBox";
    const taskdesc = document.createElement('p');
    taskdesc.className = "taskText";
    taskdesc.textContent = obj.description;
    const dueDate = document.createElement("span");
    dueDate.className = "tdueDate";
    dueDate.textContent = obj.date;

    task.appendChild(checkBox);
    task.appendChild(taskdesc);
    task.appendChild(dueDate);

    checkBox.addEventListener("click",taskclix);
}

function taskclix(event){
    const parent = event.currentTarget.parentElement;
    const index = parent.getAttribute("data-index");
   //pass through the index to the applogic cycletasktix
   cycleTaskTix(index);
}

export function changeClass(index, attribute){
    const task = document.querySelector(`[data-index='${index}']`);
    task.classList.remove(task.classList[1]);
    task.classList.add(`${attribute}`);
    console.log(`there should be a checklist of index ${index} changing to be ${attribute}`);
}