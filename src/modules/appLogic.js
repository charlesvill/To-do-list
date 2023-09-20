import {changeClass, elementBuilder, amendForm} from './DomManager.js';

let tasksArr = new Array();
let listCollection = new Object();

export function addTask (description, date, list, priority = "Low"){

    const taskIndex = generateTaskIndex();
    const taskCompleted = false;

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

    return taskObj;

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

export function taskObjDist(context, selector){
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
            //dome somthing else
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
    //create an array
    //put in this array all
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