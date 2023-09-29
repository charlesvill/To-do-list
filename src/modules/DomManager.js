import {
  addTask,
  cycleTaskTix,
  makeListObj,
  taskObjDist,
  parseListCollection,
  updateCurrentContext,
  filterTaskSubmits,
  initializeLogic,
  getListInfo,
  deleteListObj,
  deleteTaskObj,
  listTaskRemover,
} from "./appLogic.js";

const htmlBody = document.querySelector("body");
const pageContainer = document.createElement("div");
pageContainer.className = "pageContainer";
let listContainer;
let contentContainer;

export default function loadPage() {
  console.log("this is a hello world from the dom manager!");
  htmlBody.appendChild(pageContainer);

  pageContainer.innerHTML = `
    <div class="nav">
        <div class="homeLink">
            <div class="siteIcon">
              <img src="./images/clipboard.png" alt="logo">
            </div>
            <h2 class="siteName">Shigoto</h2>
        </div>

        <div class="dateLists">
            <img src="./images/today.png" alt="date icon">
            <button class="todayLink">today</button>
        </div>
        <div class="dateLists">
            <img src="./images/sort.png" alt="Upcoming">
            <button class="upcomingLink">upcoming</button>
        </div>

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

function createNavLinks() {
  const homeBtn = document.querySelector(".homeLink");
  homeBtn.addEventListener("click", (e) => {
    homeView(e);
  });

  const todayBtn = document.querySelector(".todayLink");
  todayBtn.addEventListener("click", (e) => {
    todayView(e);
  });

  const upcomingBtn = document.querySelector(".upcomingLink");
  upcomingBtn.addEventListener("click", (e) => {
    upcomingView(e);
  });
}

function generateTaskLayout(taskHeader = "Home") {
  contentContainer = document.querySelector(".contentContainer");
  contentContainer.innerHTML = "";
  contentContainer.innerHTML = `   <span>${taskHeader}</span>
         <div class="section phigh">

        </div>
        <div class="section pmed">

        </div>
         <div class="section plow">

        </div>
        <button class="addtaskbtn">+</button>
    `;
}
function createTaskForm() {
  contentContainer = document.querySelector(".contentContainer");
  const taskForm = document.createElement("div");
  taskForm.className = "taskFormCont";
  taskForm.innerHTML = `
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
        `;
  contentContainer.appendChild(taskForm);
  const taskSubmit = document.querySelector(".form");
  taskSubmit.onsubmit = submitTask;
  const cancelBtn = document.getElementById("cancelTask");
  cancelBtn.addEventListener("click", (e) => {
    // clear the form come back to this
    e.preventDefault();
    closeTaskForm();
  });
  const addTaskBtn = document.querySelector(".addtaskbtn");
  addTaskBtn.addEventListener("click", () => {
    openTaskForm();
  });
}
function applyColor(e){
  // get reference to the actual color that was chosen from the classlist
  const colorChoice = e.currentTarget.getAttribute("data-color");
  console.log("ther should be some shit happening her. ");
  // set the second class name of color selector to
  const colorSelector = document.getElementById("listColor");
  if (colorSelector.classList.length > 1){
    colorSelector.classList.remove(
      colorSelector.classList[1]);

      colorSelector.classList.add(colorChoice);
  }
  else{
    colorSelector.classList.add(colorChoice);
  }
}

function getTaskColor(listName){
  const list = getListInfo(listName);
  return list.color;
}

function createListForm() {
  listContainer = document.querySelector(".listCont");
  const formContainer = document.createElement("div");
  formContainer.className = "listFormCont";
  listContainer.appendChild(formContainer);
  formContainer.innerHTML = `
                <dialog id="listDialog">
                    <form class="listForm">
                        <label for="listName">List Name</label>
                        <input type="text" name="name"  id="listName">
                        <div class="colorSelector" id="listColor">
                          <img src="./images/pastelGradient.jpeg">
                        </div>
                        <button type="submit" class="listSubmit">add</button><button id="listCancel">cancel</button>
                    </form>
                </dialog>
        `;
  const colorSelectorBtn = document.querySelector(".colorSelector");
  colorSelectorBtn.addEventListener("click", () => {
    colorSelectorBtn.innerHTML = `
            <div class="colorBox">
              <div class="color green" data-color="#4EC33D"></div>
              <div class="color yellow" data-color="#ECF87F"></div>
              <div class="color red" data-color="#C5104F"></div>
              <div class="color orange" data-color="#E86B17"></div>
              <div class="color purple" data-color="#381741"></div>
              <div class="color magenta" data-color="#FF00FF"></div>
            </div>
            `;
    initializeColorSelect();
  }, {once: true});

  function initializeColorSelect(){
    const colorpicker = document.querySelectorAll(".color");
    colorpicker.forEach((element) => {
    element.addEventListener("click", (e)=>{
      applyColor(e);
    });
  }, {once: true});
  }

  const submitListBtn = document.querySelector(".listForm");

  submitListBtn.addEventListener("submit", (e) => {
    submitList(e);
  });
  const cancelListBtn = document.getElementById("listCancel");
  cancelListBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeListForm();
  });
  const addListBtn = document.querySelector(".listbtn");
  addListBtn.addEventListener("click", () => {
    openListForm();
  });
}
function openTaskForm() {
  const taskDialog = document.getElementById("taskDialog");
  taskDialog.showModal();
}
function closeTaskForm() {
  taskDialog.close();
}
function openListForm() {
  const listDialog = document.getElementById("listDialog");
  listDialog.showModal();
}
function closeListForm() {
  listDialog.close();
}
function submitTask(event) {
  event.preventDefault();
  const description = document.getElementById("description").value;
  const date = document.getElementById("dDate").value;
  const priority = document.getElementById("prioritySelect").value;
  const list = document.getElementById("list").value;
  const taskObj = addTask(description, date, list, priority);

  filterTaskSubmits(taskObj);
  closeTaskForm();
}

function submitList(event) {
  event.preventDefault();
  const listName = document.getElementById("listName").value;
  const colorSelector = document.getElementById("listColor");
  let color = "none";
  if(colorSelector.classList.length > 1){
    [ , color] = colorSelector.classList;
  }

  const newList = makeListObj(listName, color);
  elementBuilder(newList);
  closeListForm();
}

export function elementBuilder(obj, taskContext = null) {
  if (obj.type === "list") {
    const listElement = document.createElement("div");
    const form = document.getElementById("list");
    const listTxt = document.createElement("p");
    const listColor = document.createElement("div");
    const removeButton = document.createElement("button");

    listElement.className = "listItem";
    listElement.dataset.name = `${obj.name}`;
    listTxt.className = "listTxt";
    removeButton.className = "rmList";

    listContainer.appendChild(listElement);
    listElement.appendChild(listColor);
    listElement.appendChild(listTxt);
    listElement.appendChild(removeButton);

    listTxt.textContent = obj.name;
    listColor.style.backgroundColor = `${obj.color}`;
    removeButton.style.display = 'none';
    removeButton.textContent = 'x';
    amendForm("add", obj.name, form);

    listElement.addEventListener("click", (e) => {
      projectsView(e);
    });
    listElement.addEventListener("mouseover", ()=>{
      removeButton.style.display = 'inline-block';
    });
    listElement.addEventListener("mouseout", ()=>{
      removeButton.style.display = 'none';
    });
    removeButton.addEventListener("click", (e)=>{
      e.stopPropagation();
      removeList(e);
    })
  } else if (obj.type === "task") {
    let taskContainer;
    switch (obj.priority) {
      case "Low":
        taskContainer = document.querySelector(".plow");
        break;
      case "Medium":
        taskContainer = document.querySelector(".pmed");
        break;
      case "High":
        taskContainer = document.querySelector(".phigh");
        break;
      default:
        console.log("something went wrong with selecting the container div");
    }
    const task = document.createElement("div");
    taskContainer.appendChild(task);

    let taskStatus;
    if (obj.completed === true) {
      taskStatus = "_completed";
    } else {
      taskStatus = "_uncompleted";
    }

    task.className = `task ${taskStatus}`;
    task.dataset.index = `${obj.index}`;

    const checkBox = document.createElement("div");
    const dueDate = document.createElement("span");
    const taskdesc = document.createElement("p");
    const taskColor = document.createElement("div");
    const color = getTaskColor(obj.list);
    const taskRemoveBtn = document.createElement("button");

    checkBox.className = "checkBox";
    taskdesc.className = "taskText";
    taskdesc.textContent = obj.description;
    dueDate.className = "tdueDate";
    dueDate.textContent = obj.f_date;
    taskColor.className = "taskColor";
    taskColor.style.backgroundColor = `${color}`;
    taskRemoveBtn.textContent = 'x';
    taskRemoveBtn.style.display = 'none';

    task.appendChild(checkBox);
    task.appendChild(taskdesc);
    task.appendChild(dueDate);
    task.appendChild(taskColor);
    task.appendChild(taskRemoveBtn);

    task.addEventListener("mouseover", ()=>{
      taskRemoveBtn.style.display = 'inline-block';
    })
    task.addEventListener("mouseout", ()=>{
      taskRemoveBtn.style.display = 'none';
    })
    checkBox.addEventListener("click", (event) => {
      taskclix(event);
    });
    taskRemoveBtn.addEventListener("click", (e)=>{
      removeTask(e);
    })

  } else {
    console.log("someshit went wrong with DomList maker");
  }
}
function removeList(e){
  const list = e.currentTarget.parentElement;
  const lName = list.querySelector("p").textContent;
  console.log(lName);
  console.log(typeof(lName));
  list.remove();
  // updateDroplist good for adding but not for deleting
  updateDroplist("remove", lName);
  // send message to the storage to remove list
  deleteListObj(lName);
  const context = listTaskRemover(lName);
  generateTaskLayout(context);
  taskObjDist(context);
  // send signal to delete all list with the matching name
}
function removeTask(e){
  const task = e.currentTarget.parentElement;
  const {index} = task.dataset;
  task.remove();
  deleteTaskObj(index);


}

function taskclix(event) {
  const parent = event.currentTarget.parentElement;
  const index = parent.getAttribute("data-index");
  cycleTaskTix(index);
}


export function changeClass(index, attribute) {
  const task = document.querySelector(`[data-index='${index}']`);
  task.classList.remove(task.classList[1]);
  task.classList.add(`${attribute}`);
}
function projectsView(e) {
  const projectName = e.currentTarget.dataset.name;
  generateTaskLayout(projectName);
  updateCurrentContext("List", projectName);
  createTaskForm();
  taskObjDist("list", projectName);
  updateDroplist();
}
function todayView() {
  generateTaskLayout("Today");
  updateCurrentContext("Today");
  createTaskForm();
  taskObjDist("today_view");
  updateDroplist();
}
function upcomingView() {
  generateTaskLayout("Upcoming");
  updateCurrentContext("Upcoming");
  createTaskForm();
  taskObjDist("upcoming_view");
  updateDroplist();
}
function homeView() {
  generateTaskLayout("Home");
  updateCurrentContext("Home");
  createTaskForm();
  taskObjDist("home");
  updateDroplist();
}
export function amendForm(command, argument = "none", form) {
  if (command === "add") {
    const listOption = document.createElement("option");
    listOption.dataset.name = argument;
    listOption.textContent = argument;
    form.append(listOption);
  } else {
    alert("something went wrong with the amendForm");
  }
}
function updateDroplist(command = "add", listName = "null") {
  const dropDownCont = document.getElementById("list");
  if(command === "add"){
    parseListCollection(dropDownCont);
  }
  else{
      const dropDownOption = dropDownCont.querySelector(
        `[data-name="${listName}"]`);
      dropDownOption.remove();
  }
}
