import {addTask} from "./appLogic";

export default function loadPage(){
    const htmlBody = document.querySelector("body");
    const pageContainer = document.createElement('div');
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
<div class="taskCont">
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
    
    const parentDiv = document.querySelector(".taskCont");
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
    function submitHandler(){
        const taskSubmit = document.querySelector(".form");
        taskSubmit.onsubmit = submitTask;
    }
    

    const submitTask = (event) => {
        event.preventDefault();
        const description = document.getElementById("description").value;
        const date = document.getElementById("dDate").value;
        const list = document.getElementById("list").value;

        addTask(description, date, list);

    }


        




}
