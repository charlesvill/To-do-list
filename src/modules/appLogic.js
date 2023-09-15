import {changeClass} from './DomManager.js';

let tasksArr = new Array();

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
        console.log("cycle Tasktix in app logic broken lmao ");
    }

    //this will call a function that adds obj to an array to be deleted at a certain date

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