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
        console.log(arr);
        console.log(typeof(arr));
        localStorage.setItem('tasksArr', JSON.stringify(tasksObj));
    }
    function deleteFromTasksArr(){

    }
    function syncTaskChanges(tasksArr){
        const taskObj = JSON.parse(localStorage.getItem('tasksArr'));
        taskObj.array = tasksArr;
        console.log(taskObj.array);
        localStorage.setItem('tasksArr', JSON.stringify(taskObj));

    }
    function addToListCollection(obj){
        const list = retrieveListCollection();
        list[`${obj.name}`] = obj;
        console.log(list);
        localStorage.setItem('listCollection', JSON.stringify(list));
    }
    function deleteFromListCollection(){

    }
    //method to pull the list collection obj
    //method to update the tasks array push to it
    //method to delete an obj from the tasks arr
    //method to update the listCollection
    //methd to delete a member from the listCollection
    //method to check if there is present storage, create one if not
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
        console.log(localStorage.getItem('listCollection'));
        console.log(localStorage.getItem('tasksArr'));
    }

    return {localStoragePresent, buildLocalStorageData, addToListCollection, retrieveListCollection, retrieveTasksArr, addToTasksArr, syncTaskChanges}
}