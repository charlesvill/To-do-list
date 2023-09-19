import {addTask,cycleTaskTix, makeListObj, taskObjDist} from "./appLogic.js";

var htmlBody = document.querySelector("body");
var pageContainer = document.createElement('div');
pageContainer.className = "pageContainer";
var listContainer;
var contentContainer;


export default function loadPage(){

    htmlBody.appendChild(pageContainer);

    pageContainer.innerHTML =
    `
    <div class="nav">
        <button class="today">today</button>
        <button class="upcoming">upcoming</button>

        <div class="listCont">
            <button class="listbtn">lists</button>
        </div>
    </div>
    <div class="contentContainer">
        <div class="section phigh">

        </div>
        <div class="section pmed">

        </div>
         <div class="section plow">

        </div>
        <button class="addtaskbtn">+</button>
    </div>

    `
    buildUI();

}

function buildUI(){

    createTaskForm();
    createListForm();
    const addTaskBtn = document.querySelector(".addtaskbtn");
    addTaskBtn.addEventListener("click", ()=>{
        openTaskForm();
    });
    const addListBtn = document.querySelector(".listbtn");
    addListBtn.addEventListener("click", ()=>{
       openListForm();

    });


}

//cache some of the more important container DOM elements as variables:




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
                    /form>
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
    elementBuilder(taskObj);
    closeTaskForm();
}

function submitList(event){
            event.preventDefault();
            const listName = document.getElementById("listName").value;
            const newList = makeListObj(listName);
            //there might need to be a function call here to update the available list options on the form for list
            elementBuilder(newList);
            closeListForm();
}

export function elementBuilder(obj){

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
        //add the new list on the dropdown menu of the list form
        const form = document.getElementById("list");
        amendForm("add", obj.name, form);
        listElement.addEventListener("click", (e)=>{
            //insert function to build the view for this specific list
            console.log("you should be viewing the list on the DOM");
            projectsView(e);
        })
        //make the list clickable and trigger the open list view

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
   //pass through the index to the applogic cycletasktix
   cycleTaskTix(index);
}

function applyColor(event){
    const color = event.currentTarget.element.classList[1];
    console.log(`the color to be applied is ${color}`);
    return color;
}

export function changeClass(index, attribute){
    const task = document.querySelector(`[data-index='${index}']`);
    task.classList.remove(task.classList[1]);
    task.classList.add(`${attribute}`);
    console.log(`there should be a checklist of index ${index} changing to be ${attribute}`);
}

function projectsView(e){
    //needs to display all the current projects for that list in the content container

    //store reference to the content container
    contentContainer = document.querySelector(".contentContainer");
    contentContainer.innerHTML = "";
    const projectCont = document.createElement("div");
    const projectName = e.currentTarget.dataset.name;
    projectCont.className = "projListCont";
    projectCont.innerHTML =
    `
    <span>${projectName}</span>
    <div class="section phigh">

    </div>
    <div class="section pmed">

    </div>
    <div class="section plow">

    </div>
    `;
    //function here to create the add task button but that it goes here in this list instead of giving the option to give a list category.

    //request from applogic all the task objs for that list

    //use elementbuilder to build all the tasks for this element recursively.

    //might need to refactor the buildUI functon to make addTaskBtn a separate function to call for different page layouts
    console.log(`list name is : ${projectName}`);
    //passthrough to applogic the dataset.name for taskObjDist
    taskObjDist( "list",  projectName);
}
function amendForm(command, argument= "none", form)
{
    if (command === "add")
    {
        //add
        const listOption = document.createElement("option");
        listOption.dataset.name = argument;
        listOption.textContent = argument;
        form.append(listOption);

    }
    else if (command === "remove")
    {
        //remove
    }
    else{
        alert("something went wrong with the amendForm");
    }
}