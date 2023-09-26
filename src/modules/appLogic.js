import {changeClass, elementBuilder, amendForm} from './DomManager.js';
import {format, differenceInCalendarDays, isThisWeek, compareAsc} from 'date-fns';
import Storage from './Storage.js';

let currContext = "Home";
let list;
const storage = Storage();

export function initializeLogic(){
    if(!storage.localStoragePresent()){
    console.log("we have no local storage!");
    storage.buildLocalStorageData();

}
else{
    console.log("we already have local storage data!");
    popListfromStorage();
    popTasksfromStorage();
}
}

function popListfromStorage(){
    const list = storage.retrieveListCollection();
    for (const elements in list)
    {
        elementBuilder(list[elements])
    }
}
function popTasksfromStorage(){
    taskObjDist('home');
}

export function addTask (description, date, list, priority = "Low"){
    const taskIndex = generateTaskIndex();
    const taskCompleted = false;
    let formattedDate;
    if(date !== ""){
        formattedDate = dateFormatting(date);
    }
    const taskObj = {
        description: description,
        date: date,
        f_date: formattedDate,
        list: list,
        priority: priority,
        index: taskIndex,
        completed: taskCompleted,
        type:"task",
    }
    storage.addToTasksArr(taskObj);
    return taskObj;
}

function dateFormatting(date){
    const currentDate = new Date();
    const currentDateNoTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
    );

    const inputDate = new Date(`${date}T00:00`);
    const inputDateNoTime = new Date(
        inputDate.getFullYear(),
        inputDate.getMonth(),
        inputDate.getDate()
    )

    const daysTillDue = differenceInCalendarDays(inputDateNoTime, currentDateNoTime);

    if(daysTillDue > 1){
        if(isThisWeek(new Date(date))){
            return date = format(new Date(inputDateNoTime), 'eeee');
        }else{
            return date = format(new Date(inputDateNoTime), 'MM/dd/yy');
        }
    }
    else{
        if(daysTillDue == 0){
            return date = "Today";
        }
        else{
            return date = "Tomorrow";
        }
    }
}

export function updateCurrentContext(context, currList = null){
    currContext = context;
    list = currList;
}
export function filterTaskSubmits(obj){
    switch(currContext)
    {
        case 'Home':
            elementBuilder(obj);
            break;
        case 'List':
            if(list === obj.list){
                elementBuilder(obj);
            }
            break;
        case 'Today':
            if(obj.f_date === 'Today'){
                elementBuilder(obj);
            }
            break;
        case 'Upcoming':
            if(obj.f_date !== 'Today'){
                elementBuilder(obj);
            }
            break;
    }
}

export function cycleTaskTix(index){
    const tasksArr = storage.retrieveTasksArr();
    const obj = tasksArr[index];
    if(obj.completed === true){
        obj.completed = false;
        storage.syncTaskChanges(tasksArr);
        changeClass(index, "_uncompleted");
    }
    else if(obj.completed === false){
        obj.completed = true;
        storage.syncTaskChanges(tasksArr);
        changeClass(index, "_completed");
    }
    else{
        console.log("cycle Tasktix in app logic broken lmao");
    }
}

export function makeListObj(listName, color = "none"){
    const newListObj = {
        name : listName,
        color: color,
        type: "list",
    }

    storage.addToListCollection(newListObj);
    return newListObj;
}

function generateTaskIndex(){
    const tasksArr = storage.retrieveTasksArr();
    const length = tasksArr.length;

    if (length === 0){
        return 0;
    }
    else{
        return length;
    }
}

export function taskObjDist(context, selector = null){
    const tasksArr = storage.retrieveTasksArr();

    switch(context)
    {
        case 'home':
            iterator();
            break;
        case 'list':
            iterator();
            break;
        case 'today_view':
            todayIterator();
            break;
        case 'upcoming_view':
            upcomingIterator();
            break;
        default: console.log("something went wrong with task object distributor");
    }

    function iterator(){
        for(let i = 0; i < tasksArr.length; i++)
        {
            let currentObj = tasksArr[i];

            if(selector === null)
            {
                elementBuilder(currentObj);
            }
            else if(currentObj[`${context}`] === selector)
            {
                elementBuilder(currentObj);
            }
        }
    }
    function todayIterator(){
        for(let i = 0; i < tasksArr.length; i++)
        {
            let currentObj = tasksArr[i];
            if(currentObj.f_date === ""){
                continue;
            }

            if( currentObj.f_date === 'Today')
            {
                elementBuilder(currentObj);
            }
            else{
                console.log(`this task was not today: ${currentObj.date}`);
            }

        }
    }
    function upcomingIterator(){
        const sortedArr = tasksSortByDate();
        for(let i = 0; i < tasksArr.length; i++)
        {
            let currentObj = sortedArr[i];
            if(currentObj.date === ""){
                continue;
            }
            else if( currentObj.f_date === 'Today')
            {
                console.log(`this task was not today: ${currentObj.date}`);
            }
            else
            {
                elementBuilder(currentObj);
            }
        }
    }
}



export function tasksSortByDate(){
    let changes;
    let sortArr = new Array();
    sortArr = storage.retrieveTasksArr();
    let tempArr = new Array();
    let noDateArr = new Array();

    //check the array for any empty dates
    for(let i = 0; i < sortArr.length; i++)
    {
        if(sortArr[i].date === ''){
            noDateArr.push(sortArr[i]);
            sortArr.splice(i, 1);
        }
    }

    while (changes !== 0){

        changes = 0;

        for(let i = 0; i < sortArr.length - 1; i++)
        {
            let date_a = new Date(`${sortArr[i].date}T00:00`);
            let date_b = new Date(`${sortArr[i+1].date}T00:00`);

            if(compareAsc(date_a, date_b) === 1){
                //if a is later than b then a & b switch
                tempArr[i] = sortArr[i + 1];
                tempArr[i+1] = sortArr[i];
                sortArr[i] = tempArr[i];
                sortArr[i+1] = tempArr[i+1];
                changes++;
            }
        }
    }
    return noDateArr.concat(sortArr);
}
export function parseListCollection(domElement = null){
    if(domElement !== null){
        const listCollection = storage.retrieveListCollection();
        for (const name in listCollection)
        {
            amendForm("add", name, domElement);
        }
    }
}