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
  function removeListTasks(listName){
    const tasksArr = retrieveTasksArr();
    const filterArr = tasksArr.filter((obj) => obj.list !== listName);
    syncTaskChanges(filterArr);
  }
  function syncTaskChanges(tasksArr) {
    const taskObj = retrieveTasksObj();
    const newIndexArr = tasksArr.map((obj, objIndex) =>
      // Create a new object with the updated index
      ({ ...obj, index: objIndex })
    );
    console.log(newIndexArr);
    taskObj.array = newIndexArr;
    console.log(taskObj.array);
    console.log(taskObj);
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
    removeListTasks,

  };
}
