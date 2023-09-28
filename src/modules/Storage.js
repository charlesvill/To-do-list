export default function Storage() {
  // method to pull the tasks array
  function retrieveTasksArr() {
    const obj = JSON.parse(localStorage.getItem("tasksArr"));
    return obj.array;
  }
  function retrieveTasksObj() {
    return JSON.parse(localStorage.getItem("tasksArr"));
  }
  function retrieveListCollection() {
    return JSON.parse(localStorage.getItem("listCollection"));
  }
  function addToTasksArr(obj) {
    const tasksObj = retrieveTasksObj();
    const arr = tasksObj.array;
    arr.push(obj);
    localStorage.setItem("tasksArr", JSON.stringify(tasksObj));
  }
  function syncTaskChanges(tasksArr) {
    const taskObj = retrieveTasksObj;
    taskObj.array = tasksArr;
    localStorage.setItem("tasksArr", JSON.stringify(taskObj));
  }
  function syncListChanges(listCollection){
    localStorage.setItem("listCollection", JSON.stringify(listCollection));
  }
  function rmTasksArr(taskIndex){
    const tasksArr = retrieveTasksArr();
    tasksArr.splice(taskIndex, 1);
    // make sure to sync the changes
    syncTaskChanges(tasksArr);
  }

  function addToListCollection(obj) {
    const list = retrieveListCollection();
    list[`${obj.name}`] = obj;
    localStorage.setItem("listCollection", JSON.stringify(list));
  }
  function rmListCollection(listName) {
    const list = retrieveListCollection();
    delete list[listName];
    // make sure to sync changes
    syncListChanges(list);
  }
  function localStoragePresent() {
    if (
      !localStorage.getItem("listCollection") &&
      !localStorage.getItem("tasksArr")
    ) {
      return false;
    }
      return true;
  }

  function buildLocalStorageData() {
    const taskObj = {
      array: [],
    };
    localStorage.setItem("listCollection", JSON.stringify(new Object()));
    localStorage.setItem("tasksArr", JSON.stringify(taskObj));
  }

  return {
    localStoragePresent,
    buildLocalStorageData,
    addToListCollection,
    retrieveListCollection,
    retrieveTasksArr,
    addToTasksArr,
    syncTaskChanges,
    rmListCollection,
    rmTasksArr,

  };
}
