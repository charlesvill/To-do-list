/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DomManager.js":
/*!***********************************!*\
  !*** ./src/modules/DomManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _appLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic */ "./src/modules/appLogic.js");


function loadPage(){
    const htmlBody = document.querySelector("body");
    const pageContainer = document.createElement('div');
    htmlBody.appendChild(pageContainer);

    pageContainer.innerHTML = 
    `
    <div class="nav">
    <button class="today">today</button>
    <button class="upcoming">upcoming</button>
    <button class="listbtn">lists</button>
    <div class="listCont">

    </div>
</div>
<div class="taskCont">
    <div class="phigh">

    </div>
    <div class="pmed">

    </div>
    <div class="plow">
        
    </div>
    <button class="addtaskbtn">+</button>
</div>
    
    `
    buildUI();
    
}

function buildUI(){
    
    const parentDiv = document.querySelector(".taskCont");
    const addTaskBtn = document.querySelector(".addtaskbtn");
    addTaskBtn.addEventListener("click", openTaskForm);


    function openTaskForm(){
        
        const taskForm = document.createElement('div');
        taskForm.className("taskFormCont");
        taskForm.innerHTML = 
        `
        <form class="form">
            <label for="description">Task</label>
            <input type="text" name="taskText" id="description">
            <label for="dDate">Due Date</label>
            <input type="date" name="dDate" id="dDate">
            <label for="list"></label>
            <select name="list" id="list">
                <option selected>None</option>
            </select>
            <button type="submit">Add</button>
            <button class="cancelAdd">Cancel</button>
        </form>
        `
        parentDiv.appendChild(taskForm);
    }

    const formSubmit = document.querySelector("form");
    formSubmit.addEventListener("submit", submitTask);

    function submitTask(){
        const description = document.getElementById("description").value;
        const date = document.getElementById("dDate").value;
        const list = document.getElementById("list").value;

        (0,_appLogic__WEBPACK_IMPORTED_MODULE_0__.addTask)(description, date, list);

    }


        




}


/***/ }),

/***/ "./src/modules/appLogic.js":
/*!*********************************!*\
  !*** ./src/modules/appLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask)
/* harmony export */ });
function addTask (description, date, list){
    
    console.log(description);
    console.log(date);
    console.log(list);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DomManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DomManager.js */ "./src/modules/DomManager.js");


//load home page -> today

var initialize = (()=>{
    (0,_modules_DomManager_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();


//factory function for generating the home screen
//module import for generating the today page
//everything else would be module imports as well such as: upcoming and projects 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGtEQUFPOztBQUVmOzs7QUFHQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DOztBQUVBO0FBQ0EsSUFBSSxrRUFBUTs7QUFFWixDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsaUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvRG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthZGRUYXNrfSBmcm9tIFwiLi9hcHBMb2dpY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpe1xuICAgIGNvbnN0IGh0bWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGh0bWxCb2R5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xuXG4gICAgcGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cIm5hdlwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJ0b2RheVwiPnRvZGF5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInVwY29taW5nXCI+dXBjb21pbmc8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibGlzdGJ0blwiPmxpc3RzPC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cImxpc3RDb250XCI+XG5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInRhc2tDb250XCI+XG4gICAgPGRpdiBjbGFzcz1cInBoaWdoXCI+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG1lZFwiPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBsb3dcIj5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZHRhc2tidG5cIj4rPC9idXR0b24+XG48L2Rpdj5cbiAgICBcbiAgICBgXG4gICAgYnVpbGRVSSgpO1xuICAgIFxufVxuXG5mdW5jdGlvbiBidWlsZFVJKCl7XG4gICAgXG4gICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQ29udFwiKTtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGR0YXNrYnRuXCIpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5UYXNrRm9ybSk7XG5cblxuICAgIGZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NOYW1lKFwidGFza0Zvcm1Db250XCIpO1xuICAgICAgICB0YXNrRm9ybS5pbm5lckhUTUwgPSBcbiAgICAgICAgYFxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPlRhc2s8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tUZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImREYXRlXCI+RHVlIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImREYXRlXCIgaWQ9XCJkRGF0ZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxpc3RcIj48L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibGlzdFwiIGlkPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWxBZGRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICBgXG4gICAgICAgIHBhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRUYXNrKTtcblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFRhc2soKXtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKS52YWx1ZTtcblxuICAgICAgICBhZGRUYXNrKGRlc2NyaXB0aW9uLCBkYXRlLCBsaXN0KTtcblxuICAgIH1cblxuXG4gICAgICAgIFxuXG5cblxuXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkVGFzayAoZGVzY3JpcHRpb24sIGRhdGUsIGxpc3Qpe1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGRlc2NyaXB0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhkYXRlKTtcbiAgICBjb25zb2xlLmxvZyhsaXN0KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL21vZHVsZXMvRG9tTWFuYWdlci5qc1wiO1xuXG4vL2xvYWQgaG9tZSBwYWdlIC0+IHRvZGF5XG5cbnZhciBpbml0aWFsaXplID0gKCgpPT57XG4gICAgbG9hZFBhZ2UoKTtcblxufSkoKTtcblxuXG4vL2ZhY3RvcnkgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgdGhlIGhvbWUgc2NyZWVuXG4vL21vZHVsZSBpbXBvcnQgZm9yIGdlbmVyYXRpbmcgdGhlIHRvZGF5IHBhZ2Vcbi8vZXZlcnl0aGluZyBlbHNlIHdvdWxkIGJlIG1vZHVsZSBpbXBvcnRzIGFzIHdlbGwgc3VjaCBhczogdXBjb21pbmcgYW5kIHByb2plY3RzICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==