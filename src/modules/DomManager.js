import {addTask,cycleTaskTix, makeListObj, taskObjDist, parseListCollection, updateCurrentContext, filterTaskSubmits, taskSortByDate, initializeLogic} from "./appLogic.js";

var htmlBody = document.querySelector("body");
var pageContainer = document.createElement('div');
pageContainer.className = "pageContainer";
var listContainer;
var contentContainer;

export default function loadPage(){
    console.log("this is a hello world from the dom manager!");
    htmlBody.appendChild(pageContainer);

    pageContainer.innerHTML =
    `
    <div class="nav">
        <div class="homeLink">
            <div class="siteIcon">T</div>
            <h2 class="siteName">Get-It-Done</h2>
        </div>
        <button class="todayLink">today</button>
        <button class="upcomingLink">upcoming</button>

        <div class="listCont">
            <button class="listbtn">lists</button>
        </div>
    </div>
    <div class="contentContainer">

    </div>
    `;
    createNavLinks();
    generateTaskLayout();
    createTaskForm();
    createListForm();
    updateCurrentContext("Home");
    initializeLogic();
}

function createNavLinks(){
    const homeBtn = document.querySelector(".homeLink");
    homeBtn.addEventListener("click", (e)=>{
        homeView(e);
    });

    const todayBtn = document.querySelector(".todayLink");
    todayBtn.addEventListener("click", (e)=>{
        todayView(e);
    });

    const upcomingBtn = document.querySelector(".upcomingLink");
    upcomingBtn.addEventListener("click", (e)=>{
        upcomingView(e);
    });
}

function generateTaskLayout(taskHeader = "Home"){
    contentContainer = document.querySelector(".contentContainer");
    contentContainer.innerHTML = "";
    contentContainer.innerHTML =
    `   <span>${taskHeader}</span>
         <div class="section phigh">

        </div>
        <div class="section pmed">

        </div>
         <div class="section plow">

        </div>
        <button class="addtaskbtn">+</button>
    `;
}
function createTaskForm(){
        contentContainer = document.querySelector(".contentContainer");
        const taskForm = document.createElement('div');
        taskForm.className = "taskFormCont";
        taskForm.innerHTML =
        `
            <dialog id="taskDialog">
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
                    <button id="cancelTask">Cancel</button>
                </form>
            </dialog>
        `
        contentContainer.appendChild(taskForm);
        const taskSubmit = document.querySelector(".form");
        taskSubmit.onsubmit = submitTask;
        const cancelBtn = document.getElementById("cancelTask");
        cancelBtn.addEventListener("click", (e)=>{
            //clear the form come back to this
            e.preventDefault();
            closeTaskForm();
        })
        const addTaskBtn = document.querySelector(".addtaskbtn");
        addTaskBtn.addEventListener("click", ()=>{
            openTaskForm();
        });
    }

function createListForm(){
        listContainer = document.querySelector(".listCont");
        const formContainer = document.createElement('div');
        formContainer.className = "listFormCont";
        listContainer.appendChild(formContainer);
        formContainer.innerHTML =
        `
                <dialog id="listDialog">
                    <form class="listForm">
                        <label for="listName">List Name</label>
                        <input type="text" name="name"  id="listName">
                        <div class="colorSelector" id="listColor">
                        </div>
                        <button type="submit" class="listSubmit">add</button><button id="listCancel">cancel</button>
                    </form>
                </dialog>
        `
        const colorSelectorBtn = document.querySelector(".colorSelector");
        colorSelectorBtn.addEventListener("click", ()=>{
            colorSelectorBtn.innerHTML =
            `
            <div class="color green"></div>
            <div class="color yellow"></div>
            <div class="color red"></div>
            <div class="color orange"></div>
            <div class="color purple"></div>
            <div class="color magenta"></div>
            `
        });
        const colorpicker = document.querySelectorAll(".color");
        colorpicker.forEach(element =>{
            element.addEventListener("click", applyColor);
        });
        const submitListBtn = document.querySelector(".listForm");

        submitListBtn.addEventListener("submit", (e)=>{
            submitList(e);
        });
        const cancelListBtn = document.getElementById("listCancel");
        cancelListBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            closeListForm();
        });
        const addListBtn = document.querySelector(".listbtn");
        addListBtn.addEventListener("click", ()=>{
        openListForm();
    });
}
function openTaskForm(){
    var taskDialog = document.getElementById("taskDialog");
    taskDialog.showModal();
}
function closeTaskForm(){
    taskDialog.close();
}
function openListForm(){
    var listDialog = document.getElementById("listDialog");
    listDialog.showModal();
}
function closeListForm(){
    listDialog.close();
}
function submitTask(event){
    event.preventDefault();
    const description = document.getElementById("description").value;
    const date = document.getElementById("dDate").value;
    const priority = document.getElementById("prioritySelect").value;
    const list = document.getElementById("list").value;
    const taskObj = addTask(description, date, list, priority);

    filterTaskSubmits(taskObj);
    closeTaskForm();
}

function submitList(event){
    event.preventDefault();
    const listName = document.getElementById("listName").value;
    const newList = makeListObj(listName);
    elementBuilder(newList);
    closeListForm();
}

export function elementBuilder(obj, taskContext = null){
   if(obj.type === "list")
   {
        const listElement = document.createElement("div");
        listElement.className = "listItem";
        listElement.dataset.name = `${obj.name}`;
        listContainer.appendChild(listElement);
        const listTxt = document.createElement("p");
        listTxt.className = "listTxt";
        listElement.appendChild(listTxt);
        listTxt.textContent = obj.name;
        const form = document.getElementById("list");
        amendForm("add", obj.name, form);
        listElement.addEventListener("click", (e)=>{
            projectsView(e);
        })
   }
   else if (obj.type === "task")
   {
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
    const task = document.createElement('div');
    taskContainer.appendChild(task);

    let taskStatus;
    if(obj.completed === true){
         taskStatus = "_completed";
    }
    else{
         taskStatus = "_uncompleted";
    }

    task.className = `task ${taskStatus}`;
    task.dataset.index = `${obj.index}`;
    const checkBox = document.createElement('div');
    checkBox.className = "checkBox";
    const taskdesc = document.createElement('p');
    taskdesc.className = "taskText";
    taskdesc.textContent = obj.description;
    const dueDate = document.createElement("span");
    dueDate.className = "tdueDate";
    dueDate.textContent = obj.f_date;
    task.appendChild(checkBox);
    task.appendChild(taskdesc);
    task.appendChild(dueDate);

    checkBox.addEventListener("click",(event)=>{
        taskclix(event);
    });
   }
   else{
    console.log("someshit went wrong with DomList maker");
   }
}

function taskclix(event){
    const parent = event.currentTarget.parentElement;
    const index = parent.getAttribute("data-index");
   cycleTaskTix(index);
}

function applyColor(event){
    const color = event.currentTarget.element.classList[1];
    return color;
}

export function changeClass(index, attribute){
    const task = document.querySelector(`[data-index='${index}']`);
    task.classList.remove(task.classList[1]);
    task.classList.add(`${attribute}`);
}
function projectsView(e){
    const projectName = e.currentTarget.dataset.name;
    generateTaskLayout(projectName);
    updateCurrentContext("List", projectName);
    createTaskForm();
    taskObjDist( "list",  projectName);
    updateDroplist();
}
function todayView(e){
    generateTaskLayout("Today");
    updateCurrentContext("Today");
    createTaskForm();
    taskObjDist("today_view");
    updateDroplist();
}
function upcomingView(e){
    generateTaskLayout("Upcoming");
    updateCurrentContext("Upcoming");
    createTaskForm();
    taskObjDist("upcoming_view");
    updateDroplist();
}
function homeView(e){
    generateTaskLayout("Home");
    updateCurrentContext("Home");
    createTaskForm();
    taskObjDist("home");
    updateDroplist();
}
export function amendForm(command, argument= "none", form)
{
    if (command === "add")
    {
        const listOption = document.createElement("option");
        listOption.dataset.name = argument;
        listOption.textContent = argument;
        form.append(listOption);
    }
    else{
        alert("something went wrong with the amendForm");
    }
}
function updateDroplist(){
    const dropDownCont = document.getElementById("list");
    parseListCollection(dropDownCont);
}

