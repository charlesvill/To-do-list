export default function Storage(){
    //method to pull the tasks array
    function retrieveTasksArr(){
        const obj = JSON.parse(localStorage.getItem('tasksArr'));
        return obj.array;
    }
    function retrieveTasksObj(){
        return JSON.parse(localStorage.getItem('tasksArr'));
    }
    function retrieveListCollection(){
        return JSON.parse(localStorage.getItem('listCollection'));
    }
    function addToTasksArr(obj){
        const tasksObj = retrieveTasksObj();
        const arr = tasksObj.array;
        arr.push(obj);
        localStorage.setItem('tasksArr', JSON.stringify(tasksObj));
    }
    function deleteFromTasksArr(){

    }
    function syncTaskChanges(tasksArr){
        const taskObj = JSON.parse(localStorage.getItem('tasksArr'));
        taskObj.array = tasksArr;
        localStorage.setItem('tasksArr', JSON.stringify(taskObj));
    }
    function addToListCollection(obj){
        const list = retrieveListCollection();
        list[`${obj.name}`] = obj;
        localStorage.setItem('listCollection', JSON.stringify(list));
    }
    function deleteFromListCollection(){
        //will get called on a task click and should remove from the local storage.
        //on a refresh the item should no longer be there
    }
    function localStoragePresent(){
        if(!localStorage.getItem('listCollection') &&
            !localStorage.getItem('tasksArr'))
            {
                return false;
            }
            else{
                return true;
            }
    }

    function buildLocalStorageData(){
        const taskObj = {
            array: []
        }
        localStorage.setItem('listCollection', JSON.stringify(new Object()));
        localStorage.setItem('tasksArr', JSON.stringify(taskObj));
    }

    return {localStoragePresent, buildLocalStorageData, addToListCollection, retrieveListCollection, retrieveTasksArr, addToTasksArr, syncTaskChanges}
}