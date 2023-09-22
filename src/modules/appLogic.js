import {changeClass, elementBuilder, amendForm} from './DomManager.js';
import {format, formatRelative, differenceInCalendarDays, isThisWeek, compareAsc} from 'date-fns';

let tasksArr = new Array();
let listCollection = new Object();
let currContext = "Home";
let list;

export function addTask (description, date, list, priority = "Low"){
    const taskIndex = generateTaskIndex();
    const taskCompleted = false;
    let formattedDate;
    console.log(`date being input is: ${date}`);
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
   tasksArr.push(taskObj);
console.log(date);
    return taskObj;

}

function dateFormatting(date){
    //first determine the number of days away from current to determine what method will be applied.
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

    console.log(`current date is: ${currentDateNoTime}`);
    console.log(`input date is ${inputDateNoTime}`);
    console.log(daysTillDue);
    if(daysTillDue > 1){
        if(isThisWeek(new Date(date))){
            return date = format(new Date(inputDateNoTime), 'eeee');
        }else{
            return date = format(new Date(inputDateNoTime), 'MM/dd/yy');
        }
        //if the date is beyond

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
            console.log(`list: ${list} and obj.list is : ${obj.list}`)
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
            //
            break;
    }
}

export function cycleTaskTix(index){
    //takes the index and extracts the obj from the array and gets the checked status and sees if its completed or not
    const obj = tasksArr[index];
    if(obj.completed === true){
        obj.completed = false;
        changeClass(index, "_uncompleted");
    }
    else if(obj.completed === false){
        obj.completed = true;
        console.log(obj.completed);
        changeClass(index, "_completed");
    }
    else{
        console.log("cycle Tasktix in app logic broken lmao");
    }

    //this will call a function that adds obj to an array to be deleted at a certain date

}

export function makeListObj(listName, color = "none"){
    const newListObj = {
        name : listName,
        color: color,
        type: "list",
    }

    listCollection[`${listName}`] = newListObj;
    console.log(`the new obj was ${newListObj}, and the collection looks like: ${listCollection}`);
    console.log(newListObj);
    console.log(listCollection);

    return newListObj;
    //what are we doing with this list collection? there needs to be a meaningful reason  for this to exist..

}

function generateTaskIndex(){
    const length = tasksArr.length;
    let index;

    if (length === 0){
        return index = 0;
    }
    else{
        return index = length;
    }
}

export function taskObjDist(context, selector = null){
    switch(context)
    {
        case 'home':
            //take off the filters and pass through all the objects
            iterator();
            break;
        case 'list':
            console.log("will begin to search for matches");
            iterator();
            break;
        case 'today_view':
            todayIterator();
            break;
        case 'upcoming_view':
            upcomingIterator();
            // the dates in the array will need to be sorted
            //also could I have used filter for adding the specific task views
            break;
        default: console.log("something went wrong with task object distributor");
    }
    function iterator(){
        for(let i = 0; i < tasksArr.length; i++)
        {
            let currentObj = tasksArr[i];

            if(selector = null){
                elementBuilder(currentObj);
            }
            else(currentObj[`${context}`] === selector)
            {
                //send signal to build that DOM Element
                console.log("we have a hail mary!");
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
                //send signal to build that DOM Element
                console.log("we have a hail mary!");
                elementBuilder(currentObj);
            }
            else{
                console.log(`this task was not today: ${currentObj.date}`);
            }

        }
    }
    function upcomingIterator(){
        const sortedArr = taskSortByDate();
        for(let i = 0; i < tasksArr.length; i++)
        {
            let currentObj = sortedArr[i];
            if(currentObj.date === ""){
                continue;
            }
            else if( currentObj.f_date === 'Today')
            {
                console.log(`this task was not today: ${curentObj.date}`);
            }
            else
            {
                 //send signal to build that DOM Element
                console.log("we have a hail mary!");
                elementBuilder(currentObj);
            }
        }
    }
}


export function taskSortByDate(){
    //should be immutable
    //takes the current array of obj and makes a copy of it sorted
    let changes;
    let sortArr = new Array();
    sortArr = tasksArr;
    let tempArr = new Array();

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
    return sortArr;
}
export function parseListCollection(domElement = null){
    //if there is something specific, then it can take the argument and search and return that specifically, if not, it will return one individually until getting through all of them.
    if(domElement !== null){
        for (const name in listCollection)
        {
            amendForm("add", name, domElement);
        }
    }


}