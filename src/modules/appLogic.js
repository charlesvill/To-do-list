import {changeClass, elementBuilder, amendForm} from './DomManager.js';
import {format, formatRelative, differenceInCalendarDays, isThisWeek} from 'date-fns';

let tasksArr = new Array();
let listCollection = new Object();
let currContext = "Home";
let list;

export function addTask (description, date, list, priority = "Low"){
    const taskIndex = generateTaskIndex();
    const taskCompleted = false;
    console.log(`date being input is: ${date}`);
    date = dateFormatting(date);
    const taskObj = {
        description: description,
        date: date,
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
            if(obj.date === 'Today'){
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
        case 'load_page':
            //do something
            break;
        case 'list':
            console.log("will begin to search for matches");
            iterator(selector);
            break;
        case 'today_view':
            //sets context to date to look at the dates in obj
            //call the today iterator and parse today's date in the form of 'yyyy-mm-dd'
            //iterator will trigger the element builder if the dates are same

            todayIterator();
            break;
        case 'upcoming_view':
            //do somthing else
            break;
        default: console.log("something went wrong with task object distributor");
    }
    function iterator(selector){
        for(let i = 0; i < tasksArr.length; i++)
        {
            let currentObj = tasksArr[i];
            if(currentObj[`${context}`] === selector)
            {
                //send signal to build that DOM Element
                console.log("we have a hail mary!");
                elementBuilder(currentObj);
            }

        }
    }
    function todayIterator(){
        //if date === '', skip that one
        //call function for getting today's date in ISO standard form
        for(let i = 0; i < tasksArr.length; i++)
        {
            let currentObj = tasksArr[i];
            let objDateValue = currentObj.date;
            if(objDateValue === ""){
                continue;
            }

            console.log(`the objDateValue is: ${objDateValue}`);
            if( objDateValue === 'Today')
            {
                //send signal to build that DOM Element
                console.log("we have a hail mary!");
                elementBuilder(currentObj);
            }
            else{
                console.log(`this task was not today: ${objDateValue}`);
            }

        }
    }
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