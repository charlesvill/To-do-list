/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    width: 100vw;
    font-size: 14px;
}

.pageContainer{
    display: grid;
    grid-template: 1fr/ 1fr 8fr;
    padding-left: 10rem;
    padding-right: 10rem;
    background-color:darkgray;
}
.nav{
    grid-area:1 / 1 / 2 / 2;
    min-height:80vh;
    background-color:#464033;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding: 1rem;
    padding-top:2rem;
}
.contentContainer{
    grid-area: 1 / 2 / 2 / 3;
    min-height:80vh;
    display: flex;
    flex-direction:column;
    background-color:#BBC4C2;
    padding: 2rem;
}
.section{
    height: 10%;
    background-color:white;
    padding:3rem;
    margin:.3rem;
}
.task{
    display:flex;
    align-items: center;
    align-content: space-between;
    justify-content: flex-start;
    gap: .5rem;
}
.checkBox{
    width: 1rem;
    height: 1rem;
    border: solid 2px green;
}
._completed > .checkBox{
    border: none;
    background-color: green;

}
._uncompleted > .checkBox{
    background-color: white;
    border: solid 2px green;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,uBAAuB;IACvB,eAAe;IACf,wBAAwB;IACxB,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,wBAAwB;IACxB,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,wBAAwB;IACxB,aAAa;AACjB;AACA;IACI,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,2BAA2B;IAC3B,UAAU;AACd;AACA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,uBAAuB;;AAE3B;AACA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B","sourcesContent":["body{\n    width: 100vw;\n    font-size: 14px;\n}\n\n.pageContainer{\n    display: grid;\n    grid-template: 1fr/ 1fr 8fr;\n    padding-left: 10rem;\n    padding-right: 10rem;\n    background-color:darkgray;\n}\n.nav{\n    grid-area:1 / 1 / 2 / 2;\n    min-height:80vh;\n    background-color:#464033;\n    display: flex;\n    flex-direction:column;\n    justify-content: space-between;\n    padding: 1rem;\n    padding-top:2rem;\n}\n.contentContainer{\n    grid-area: 1 / 2 / 2 / 3;\n    min-height:80vh;\n    display: flex;\n    flex-direction:column;\n    background-color:#BBC4C2;\n    padding: 2rem;\n}\n.section{\n    height: 10%;\n    background-color:white;\n    padding:3rem;\n    margin:.3rem;\n}\n.task{\n    display:flex;\n    align-items: center;\n    align-content: space-between;\n    justify-content: flex-start;\n    gap: .5rem;\n}\n.checkBox{\n    width: 1rem;\n    height: 1rem;\n    border: solid 2px green;\n}\n._completed > .checkBox{\n    border: none;\n    background-color: green;\n\n}\n._uncompleted > .checkBox{\n    background-color: white;\n    border: solid 2px green;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/DomManager.js":
/*!***********************************!*\
  !*** ./src/modules/DomManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   amendForm: () => (/* binding */ amendForm),
/* harmony export */   changeClass: () => (/* binding */ changeClass),
/* harmony export */   "default": () => (/* binding */ loadPage),
/* harmony export */   elementBuilder: () => (/* binding */ elementBuilder)
/* harmony export */ });
/* harmony import */ var _appLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appLogic.js */ "./src/modules/appLogic.js");


var htmlBody = document.querySelector("body");
var pageContainer = document.createElement('div');
pageContainer.className = "pageContainer";
var listContainer;
var contentContainer;
var currContext = "home";

function loadPage(){

    htmlBody.appendChild(pageContainer);

    pageContainer.innerHTML =
    `
    <div class="nav">
        <button class="today">today</button>
        <button class="upcoming">upcoming</button>

        <div class="listCont">
            <button class="listbtn">lists</button>
        </div>
    </div>
    <div class="contentContainer">

    </div>
    `;
    //insert function here to fill the content container and append;
    generateTaskLayout();
    createTaskForm();
    createListForm();
}

function generateTaskLayout(taskHeader = "Home"){
    contentContainer = document.querySelector(".contentContainer");
    contentContainer.innerHTML = "";
    contentContainer.innerHTML =
    `   <span>${taskHeader}</span>
         <div class="section phigh">

        </div>
        <div class="section pmed">

        </div>
         <div class="section plow">

        </div>
        <button class="addtaskbtn">+</button>
    `;
}
function createTaskForm(){
        contentContainer = document.querySelector(".contentContainer");
        const taskForm = document.createElement('div');
        taskForm.className = "taskFormCont";
        taskForm.innerHTML =
        `
            <dialog id="taskDialog">
                <form class="form">
                    <label for="description">Task</label>
                    <input type="text" name="taskText" id="description">
                    <label for="dDate">Due Date</label>
                    <input type="date" name="dDate" id="dDate">
                    <label for="prioritySelect">Priority</label>
                    <select name="prioritydroplist" id="prioritySelect">
                        <option selected>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <label for="list"></label>
                    <select name="list" id="list">
                        <option selected>None</option>
                    </select>
                    <button type="submit">Add</button>
                    <button id="cancelTask">Cancel</button>
                </form>
            </dialog>
        `
        contentContainer.appendChild(taskForm);
        const taskSubmit = document.querySelector(".form");
        taskSubmit.onsubmit = submitTask;
        const cancelBtn = document.getElementById("cancelTask");
        cancelBtn.addEventListener("click", (e)=>{
            //clear the form come back to this
            e.preventDefault();
            closeTaskForm();
        })
        const addTaskBtn = document.querySelector(".addtaskbtn");
        addTaskBtn.addEventListener("click", ()=>{
            openTaskForm();
        });
    }

function createListForm(){
        listContainer = document.querySelector(".listCont");
        const formContainer = document.createElement('div');
        formContainer.className = "listFormCont";
        listContainer.appendChild(formContainer);
        formContainer.innerHTML =
        `
                <dialog id="listDialog">
                    <form class="listForm">
                        <label for="listName">List Name</label>
                        <input type="text" name="name"  id="listName">
                        <div class="colorSelector" id="listColor">
                        </div>
                        <button type="submit" class="listSubmit">add</button><button id="listCancel">cancel</button>
                    </form>
                </dialog>
        `
        const colorSelectorBtn = document.querySelector(".colorSelector");
        colorSelectorBtn.addEventListener("click", ()=>{
            colorSelectorBtn.innerHTML =
            `
            <div class="color green"></div>
            <div class="color yellow"></div>
            <div class="color red"></div>
            <div class="color orange"></div>
            <div class="color purple"></div>
            <div class="color magenta"></div>
            `
        });
        const colorpicker = document.querySelectorAll(".color");
        colorpicker.forEach(element =>{
            element.addEventListener("click", applyColor);
        });
        const submitListBtn = document.querySelector(".listForm");

        submitListBtn.addEventListener("submit", (e)=>{
            submitList(e);
        });
        const cancelListBtn = document.getElementById("listCancel");
        cancelListBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            closeListForm();
        });
        const addListBtn = document.querySelector(".listbtn");
        addListBtn.addEventListener("click", ()=>{
        openListForm();
    });
}
function openTaskForm(){
    var taskDialog = document.getElementById("taskDialog");
    taskDialog.showModal();
}
function closeTaskForm(){
    taskDialog.close();
}
function openListForm(){
    var listDialog = document.getElementById("listDialog");
    listDialog.showModal();
}
function closeListForm(){
    listDialog.close();
}
function updateCurrContext(context){
    currContext = context;
}
function filterTaskSubmits(list){
    if (currContext !== "home"){
        if(list == currContext){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return true;
    }
}

function submitTask(event){
    event.preventDefault();
    const description = document.getElementById("description").value;
    const date = document.getElementById("dDate").value;
    const priority = document.getElementById("prioritySelect").value;
    const list = document.getElementById("list").value;
    const taskObj = (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(description, date, list, priority);

    if(filterTaskSubmits(list)){
        elementBuilder(taskObj);
    }
    closeTaskForm();
}

function submitList(event){
    event.preventDefault();
    const listName = document.getElementById("listName").value;
    const newList = (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.makeListObj)(listName);
    elementBuilder(newList);
    closeListForm();
}

function elementBuilder(obj, taskContext = null){
   if(obj.type === "list")
   {
        const listElement = document.createElement("div");
        listElement.className = "listItem";
        listElement.dataset.name = `${obj.name}`;
        listContainer.appendChild(listElement);
        const listTxt = document.createElement("p");
        listTxt.className = "listTxt";
        listElement.appendChild(listTxt);
        listTxt.textContent = obj.name;
        const form = document.getElementById("list");
        amendForm("add", obj.name, form);
        listElement.addEventListener("click", (e)=>{
            projectsView(e);
        })
   }
   else if (obj.type === "task")
   {
        let taskContainer;
        switch(obj.priority)
    {
        case 'Low':
            taskContainer = document.querySelector(".plow");
            break;
        case 'Medium':
            taskContainer = document.querySelector(".pmed");
            break;
        case 'High':
            taskContainer = document.querySelector(".phigh");
            break;
        default: console.log("something went wrong with selecting the container div");
    }
    const task = document.createElement('div');
    taskContainer.appendChild(task);

    let taskStatus;
    if(obj.completed === true){
         taskStatus = "_completed";
    }
    else{
         taskStatus = "_uncompleted";
    }

    task.className = `task ${taskStatus}`;
    task.dataset.index = `${obj.index}`;
    const checkBox = document.createElement('div');
    checkBox.className = "checkBox";
    const taskdesc = document.createElement('p');
    taskdesc.className = "taskText";
    taskdesc.textContent = obj.description;
    const dueDate = document.createElement("span");
    dueDate.className = "tdueDate";
    dueDate.textContent = obj.date;

    task.appendChild(checkBox);
    task.appendChild(taskdesc);
    task.appendChild(dueDate);

    checkBox.addEventListener("click",(event)=>{
        taskclix(event);
    });
   }
   else{
    console.log("someshit went wrong with DomList maker");
   }
}

function taskclix(event){
    const parent = event.currentTarget.parentElement;
    const index = parent.getAttribute("data-index");
   //pass through the index to the applogic cycletasktix
   (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.cycleTaskTix)(index);
}

function applyColor(event){
    const color = event.currentTarget.element.classList[1];
    console.log(`the color to be applied is ${color}`);
    return color;
}

function changeClass(index, attribute){
    const task = document.querySelector(`[data-index='${index}']`);
    task.classList.remove(task.classList[1]);
    task.classList.add(`${attribute}`);
    console.log(`there should be a checklist of index ${index} changing to be ${attribute}`);
}
function projectsView(e){
    const projectName = e.currentTarget.dataset.name;
    generateTaskLayout(projectName);
    updateCurrContext(projectName);
    createTaskForm();
    console.log(`list name is : ${projectName}`);
    (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.taskObjDist)( "list",  projectName);
    updateDroplist();
}
function amendForm(command, argument= "none", form)
{
    if (command === "add")
    {
        const listOption = document.createElement("option");
        listOption.dataset.name = argument;
        listOption.textContent = argument;
        form.append(listOption);
    }
    else if (command === "remove")
    {
        //remove
    }
    else{
        alert("something went wrong with the amendForm");
    }
}
function updateDroplist(){
    //maybe this could take in argument the context so it can also provide what the pre selected option is...
    const dropDownCont = document.getElementById("list");
    (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.parseListCollection)(dropDownCont);

}



/***/ }),

/***/ "./src/modules/appLogic.js":
/*!*********************************!*\
  !*** ./src/modules/appLogic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   cycleTaskTix: () => (/* binding */ cycleTaskTix),
/* harmony export */   makeListObj: () => (/* binding */ makeListObj),
/* harmony export */   parseListCollection: () => (/* binding */ parseListCollection),
/* harmony export */   taskObjDist: () => (/* binding */ taskObjDist)
/* harmony export */ });
/* harmony import */ var _DomManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManager.js */ "./src/modules/DomManager.js");


let tasksArr = new Array();
let listCollection = new Object();

function addTask (description, date, list, priority = "Low"){

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

function cycleTaskTix(index){
    //takes the index and extracts the obj from the array and gets the checked status and sees if its completed or not
    const obj = tasksArr[index];
    if(obj.completed === true){
        obj.completed = false;
        (0,_DomManager_js__WEBPACK_IMPORTED_MODULE_0__.changeClass)(index, "_uncompleted");
    }
    else if(obj.completed === false){
        obj.completed = true;
        console.log(obj.completed);
        (0,_DomManager_js__WEBPACK_IMPORTED_MODULE_0__.changeClass)(index, "_completed");
    }
    else{
        console.log("cycle Tasktix in app logic broken lmao");
    }

    //this will call a function that adds obj to an array to be deleted at a certain date

}

function makeListObj(listName, color = "none"){
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

function taskObjDist(context, selector){
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
                (0,_DomManager_js__WEBPACK_IMPORTED_MODULE_0__.elementBuilder)(currentObj);
            }

        }
    }
    //create an array
    //put in this array all
}
function parseListCollection(domElement = null){
    //if there is something specific, then it can take the argument and search and return that specifically, if not, it will return one individually until getting through all of them.
    if(domElement !== null){
        for (const name in listCollection)
        {
            (0,_DomManager_js__WEBPACK_IMPORTED_MODULE_0__.amendForm)("add", name, domElement);
        }
    }


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBVztBQUMvQjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsV0FBVztBQUN4Qyw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDBEQUFZO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7O0FBRU87QUFDUCx3REFBd0QsTUFBTTtBQUM5RDtBQUNBLDBCQUEwQixVQUFVO0FBQ3BDLHdEQUF3RCxPQUFPLGlCQUFpQixVQUFVO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQW1COztBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlR1RTs7QUFFdkU7QUFDQTs7QUFFTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0IsbUNBQW1DLFdBQVcsbUNBQW1DLGVBQWU7QUFDaEc7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBYztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQVM7QUFDckI7QUFDQTs7O0FBR0E7Ozs7OztVQ3RIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0ErQztBQUMxQjs7QUFFckI7O0FBRUE7QUFDQSxJQUFJLGtFQUFROztBQUVaLENBQUM7OztBQUdEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2FwcExvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHl7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBhZ2VDb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciA4ZnI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtncmF5O1xufVxuLm5hdntcbiAgICBncmlkLWFyZWE6MSAvIDEgLyAyIC8gMjtcbiAgICBtaW4taGVpZ2h0Ojgwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDY0MDMzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBhZGRpbmctdG9wOjJyZW07XG59XG4uY29udGVudENvbnRhaW5lcntcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gICAgbWluLWhlaWdodDo4MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0JCQzRDMjtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuLnNlY3Rpb257XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjNyZW07XG4gICAgbWFyZ2luOi4zcmVtO1xufVxuLnRhc2t7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAuNXJlbTtcbn1cbi5jaGVja0JveHtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYm9yZGVyOiBzb2xpZCAycHggZ3JlZW47XG59XG4uX2NvbXBsZXRlZCA+IC5jaGVja0JveHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cbn1cbi5fdW5jb21wbGV0ZWQgPiAuY2hlY2tCb3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggZ3JlZW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnBhZ2VDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDhmcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ZGFya2dyYXk7XFxufVxcbi5uYXZ7XFxuICAgIGdyaWQtYXJlYToxIC8gMSAvIDIgLyAyO1xcbiAgICBtaW4taGVpZ2h0Ojgwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ2NDAzMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOjJyZW07XFxufVxcbi5jb250ZW50Q29udGFpbmVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICAgIG1pbi1oZWlnaHQ6ODB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCQkM0QzI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcbi5zZWN0aW9ue1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgcGFkZGluZzozcmVtO1xcbiAgICBtYXJnaW46LjNyZW07XFxufVxcbi50YXNre1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuLmNoZWNrQm94e1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcXG59XFxuLl9jb21wbGV0ZWQgPiAuY2hlY2tCb3h7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFxufVxcbi5fdW5jb21wbGV0ZWQgPiAuY2hlY2tCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7YWRkVGFzayxjeWNsZVRhc2tUaXgsIG1ha2VMaXN0T2JqLCB0YXNrT2JqRGlzdCwgcGFyc2VMaXN0Q29sbGVjdGlvbn0gZnJvbSBcIi4vYXBwTG9naWMuanNcIjtcblxudmFyIGh0bWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG52YXIgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGFnZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInBhZ2VDb250YWluZXJcIjtcbnZhciBsaXN0Q29udGFpbmVyO1xudmFyIGNvbnRlbnRDb250YWluZXI7XG52YXIgY3VyckNvbnRleHQgPSBcImhvbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFBhZ2UoKXtcblxuICAgIGh0bWxCb2R5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xuXG4gICAgcGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwibmF2XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b2RheVwiPnRvZGF5PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ1cGNvbWluZ1wiPnVwY29taW5nPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RDb250XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibGlzdGJ0blwiPmxpc3RzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50Q29udGFpbmVyXCI+XG5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIC8vaW5zZXJ0IGZ1bmN0aW9uIGhlcmUgdG8gZmlsbCB0aGUgY29udGVudCBjb250YWluZXIgYW5kIGFwcGVuZDtcbiAgICBnZW5lcmF0ZVRhc2tMYXlvdXQoKTtcbiAgICBjcmVhdGVUYXNrRm9ybSgpO1xuICAgIGNyZWF0ZUxpc3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0xheW91dCh0YXNrSGVhZGVyID0gXCJIb21lXCIpe1xuICAgIGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRDb250YWluZXJcIik7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgICAgPHNwYW4+JHt0YXNrSGVhZGVyfTwvc3Bhbj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHBoaWdoXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHBtZWRcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHBsb3dcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZHRhc2tidG5cIj4rPC9idXR0b24+XG4gICAgYDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCl7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRDb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTmFtZSA9IFwidGFza0Zvcm1Db250XCI7XG4gICAgICAgIHRhc2tGb3JtLmlubmVySFRNTCA9XG4gICAgICAgIGBcbiAgICAgICAgICAgIDxkaWFsb2cgaWQ9XCJ0YXNrRGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPlRhc2s8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFza1RleHRcIiBpZD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkRGF0ZVwiPkR1ZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImREYXRlXCIgaWQ9XCJkRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlTZWxlY3RcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5ZHJvcGxpc3RcIiBpZD1cInByaW9yaXR5U2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxpc3RcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJsaXN0XCIgaWQ9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsVGFza1wiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGlhbG9nPlxuICAgICAgICBgXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICAgICAgICBjb25zdCB0YXNrU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgICAgICB0YXNrU3VibWl0Lm9uc3VibWl0ID0gc3VibWl0VGFzaztcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxUYXNrXCIpO1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgLy9jbGVhciB0aGUgZm9ybSBjb21lIGJhY2sgdG8gdGhpc1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGR0YXNrYnRuXCIpO1xuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgb3BlblRhc2tGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdEZvcm0oKXtcbiAgICAgICAgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdENvbnRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImxpc3RGb3JtQ29udFwiO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgIGBcbiAgICAgICAgICAgICAgICA8ZGlhbG9nIGlkPVwibGlzdERpYWxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImxpc3RGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGlzdE5hbWVcIj5MaXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAgaWQ9XCJsaXN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yU2VsZWN0b3JcIiBpZD1cImxpc3RDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImxpc3RTdWJtaXRcIj5hZGQ8L2J1dHRvbj48YnV0dG9uIGlkPVwibGlzdENhbmNlbFwiPmNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaWFsb2c+XG4gICAgICAgIGBcbiAgICAgICAgY29uc3QgY29sb3JTZWxlY3RvckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3JTZWxlY3RvclwiKTtcbiAgICAgICAgY29sb3JTZWxlY3RvckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0b3JCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvciBncmVlblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIHllbGxvd1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIHJlZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIG9yYW5nZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIHB1cnBsZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIG1hZ2VudGFcIj48L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbG9ycGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvclwiKTtcbiAgICAgICAgY29sb3JwaWNrZXIuZm9yRWFjaChlbGVtZW50ID0+e1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwbHlDb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJtaXRMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Rm9ybVwiKTtcblxuICAgICAgICBzdWJtaXRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpPT57XG4gICAgICAgICAgICBzdWJtaXRMaXN0KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FuY2VsTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdENhbmNlbFwiKTtcbiAgICAgICAgY2FuY2VsTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUxpc3RGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0YnRuXCIpO1xuICAgICAgICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBvcGVuTGlzdEZvcm0oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpe1xuICAgIHZhciB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGlhbG9nXCIpO1xuICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59XG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCl7XG4gICAgdGFza0RpYWxvZy5jbG9zZSgpO1xufVxuZnVuY3Rpb24gb3Blbkxpc3RGb3JtKCl7XG4gICAgdmFyIGxpc3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3REaWFsb2dcIik7XG4gICAgbGlzdERpYWxvZy5zaG93TW9kYWwoKTtcbn1cbmZ1bmN0aW9uIGNsb3NlTGlzdEZvcm0oKXtcbiAgICBsaXN0RGlhbG9nLmNsb3NlKCk7XG59XG5mdW5jdGlvbiB1cGRhdGVDdXJyQ29udGV4dChjb250ZXh0KXtcbiAgICBjdXJyQ29udGV4dCA9IGNvbnRleHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXJUYXNrU3VibWl0cyhsaXN0KXtcbiAgICBpZiAoY3VyckNvbnRleHQgIT09IFwiaG9tZVwiKXtcbiAgICAgICAgaWYobGlzdCA9PSBjdXJyQ29udGV4dCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3VibWl0VGFzayhldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZERhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5U2VsZWN0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIikudmFsdWU7XG4gICAgY29uc3QgdGFza09iaiA9IGFkZFRhc2soZGVzY3JpcHRpb24sIGRhdGUsIGxpc3QsIHByaW9yaXR5KTtcblxuICAgIGlmKGZpbHRlclRhc2tTdWJtaXRzKGxpc3QpKXtcbiAgICAgICAgZWxlbWVudEJ1aWxkZXIodGFza09iaik7XG4gICAgfVxuICAgIGNsb3NlVGFza0Zvcm0oKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0TGlzdChldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdE5hbWVcIikudmFsdWU7XG4gICAgY29uc3QgbmV3TGlzdCA9IG1ha2VMaXN0T2JqKGxpc3ROYW1lKTtcbiAgICBlbGVtZW50QnVpbGRlcihuZXdMaXN0KTtcbiAgICBjbG9zZUxpc3RGb3JtKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50QnVpbGRlcihvYmosIHRhc2tDb250ZXh0ID0gbnVsbCl7XG4gICBpZihvYmoudHlwZSA9PT0gXCJsaXN0XCIpXG4gICB7XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGlzdEVsZW1lbnQuY2xhc3NOYW1lID0gXCJsaXN0SXRlbVwiO1xuICAgICAgICBsaXN0RWxlbWVudC5kYXRhc2V0Lm5hbWUgPSBgJHtvYmoubmFtZX1gO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgICAgICAgY29uc3QgbGlzdFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsaXN0VHh0LmNsYXNzTmFtZSA9IFwibGlzdFR4dFwiO1xuICAgICAgICBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChsaXN0VHh0KTtcbiAgICAgICAgbGlzdFR4dC50ZXh0Q29udGVudCA9IG9iai5uYW1lO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpO1xuICAgICAgICBhbWVuZEZvcm0oXCJhZGRcIiwgb2JqLm5hbWUsIGZvcm0pO1xuICAgICAgICBsaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT57XG4gICAgICAgICAgICBwcm9qZWN0c1ZpZXcoZSk7XG4gICAgICAgIH0pXG4gICB9XG4gICBlbHNlIGlmIChvYmoudHlwZSA9PT0gXCJ0YXNrXCIpXG4gICB7XG4gICAgICAgIGxldCB0YXNrQ29udGFpbmVyO1xuICAgICAgICBzd2l0Y2gob2JqLnByaW9yaXR5KVxuICAgIHtcbiAgICAgICAgY2FzZSAnTG93JzpcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsb3dcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBtZWRcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waGlnaFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggc2VsZWN0aW5nIHRoZSBjb250YWluZXIgZGl2XCIpO1xuICAgIH1cbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgIGxldCB0YXNrU3RhdHVzO1xuICAgIGlmKG9iai5jb21wbGV0ZWQgPT09IHRydWUpe1xuICAgICAgICAgdGFza1N0YXR1cyA9IFwiX2NvbXBsZXRlZFwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICAgdGFza1N0YXR1cyA9IFwiX3VuY29tcGxldGVkXCI7XG4gICAgfVxuXG4gICAgdGFzay5jbGFzc05hbWUgPSBgdGFzayAke3Rhc2tTdGF0dXN9YDtcbiAgICB0YXNrLmRhdGFzZXQuaW5kZXggPSBgJHtvYmouaW5kZXh9YDtcbiAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrQm94LmNsYXNzTmFtZSA9IFwiY2hlY2tCb3hcIjtcbiAgICBjb25zdCB0YXNrZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrZGVzYy5jbGFzc05hbWUgPSBcInRhc2tUZXh0XCI7XG4gICAgdGFza2Rlc2MudGV4dENvbnRlbnQgPSBvYmouZGVzY3JpcHRpb247XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGR1ZURhdGUuY2xhc3NOYW1lID0gXCJ0ZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmouZGF0ZTtcblxuICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza2Rlc2MpO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpPT57XG4gICAgICAgIHRhc2tjbGl4KGV2ZW50KTtcbiAgICB9KTtcbiAgIH1cbiAgIGVsc2V7XG4gICAgY29uc29sZS5sb2coXCJzb21lc2hpdCB3ZW50IHdyb25nIHdpdGggRG9tTGlzdCBtYWtlclwiKTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gdGFza2NsaXgoZXZlbnQpe1xuICAgIGNvbnN0IHBhcmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBpbmRleCA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuICAgLy9wYXNzIHRocm91Z2ggdGhlIGluZGV4IHRvIHRoZSBhcHBsb2dpYyBjeWNsZXRhc2t0aXhcbiAgIGN5Y2xlVGFza1RpeChpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q29sb3IoZXZlbnQpe1xuICAgIGNvbnN0IGNvbG9yID0gZXZlbnQuY3VycmVudFRhcmdldC5lbGVtZW50LmNsYXNzTGlzdFsxXTtcbiAgICBjb25zb2xlLmxvZyhgdGhlIGNvbG9yIHRvIGJlIGFwcGxpZWQgaXMgJHtjb2xvcn1gKTtcbiAgICByZXR1cm4gY29sb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDbGFzcyhpbmRleCwgYXR0cmlidXRlKXtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5yZW1vdmUodGFzay5jbGFzc0xpc3RbMV0pO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChgJHthdHRyaWJ1dGV9YCk7XG4gICAgY29uc29sZS5sb2coYHRoZXJlIHNob3VsZCBiZSBhIGNoZWNrbGlzdCBvZiBpbmRleCAke2luZGV4fSBjaGFuZ2luZyB0byBiZSAke2F0dHJpYnV0ZX1gKTtcbn1cbmZ1bmN0aW9uIHByb2plY3RzVmlldyhlKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWU7XG4gICAgZ2VuZXJhdGVUYXNrTGF5b3V0KHByb2plY3ROYW1lKTtcbiAgICB1cGRhdGVDdXJyQ29udGV4dChwcm9qZWN0TmFtZSk7XG4gICAgY3JlYXRlVGFza0Zvcm0oKTtcbiAgICBjb25zb2xlLmxvZyhgbGlzdCBuYW1lIGlzIDogJHtwcm9qZWN0TmFtZX1gKTtcbiAgICB0YXNrT2JqRGlzdCggXCJsaXN0XCIsICBwcm9qZWN0TmFtZSk7XG4gICAgdXBkYXRlRHJvcGxpc3QoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbWVuZEZvcm0oY29tbWFuZCwgYXJndW1lbnQ9IFwibm9uZVwiLCBmb3JtKVxue1xuICAgIGlmIChjb21tYW5kID09PSBcImFkZFwiKVxuICAgIHtcbiAgICAgICAgY29uc3QgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGxpc3RPcHRpb24uZGF0YXNldC5uYW1lID0gYXJndW1lbnQ7XG4gICAgICAgIGxpc3RPcHRpb24udGV4dENvbnRlbnQgPSBhcmd1bWVudDtcbiAgICAgICAgZm9ybS5hcHBlbmQobGlzdE9wdGlvbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbW1hbmQgPT09IFwicmVtb3ZlXCIpXG4gICAge1xuICAgICAgICAvL3JlbW92ZVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBhbGVydChcInNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIGFtZW5kRm9ybVwiKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVEcm9wbGlzdCgpe1xuICAgIC8vbWF5YmUgdGhpcyBjb3VsZCB0YWtlIGluIGFyZ3VtZW50IHRoZSBjb250ZXh0IHNvIGl0IGNhbiBhbHNvIHByb3ZpZGUgd2hhdCB0aGUgcHJlIHNlbGVjdGVkIG9wdGlvbiBpcy4uLlxuICAgIGNvbnN0IGRyb3BEb3duQ29udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcbiAgICBwYXJzZUxpc3RDb2xsZWN0aW9uKGRyb3BEb3duQ29udCk7XG5cbn1cblxuIiwiaW1wb3J0IHtjaGFuZ2VDbGFzcywgZWxlbWVudEJ1aWxkZXIsIGFtZW5kRm9ybX0gZnJvbSAnLi9Eb21NYW5hZ2VyLmpzJztcblxubGV0IHRhc2tzQXJyID0gbmV3IEFycmF5KCk7XG5sZXQgbGlzdENvbGxlY3Rpb24gPSBuZXcgT2JqZWN0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrIChkZXNjcmlwdGlvbiwgZGF0ZSwgbGlzdCwgcHJpb3JpdHkgPSBcIkxvd1wiKXtcblxuICAgIGNvbnN0IHRhc2tJbmRleCA9IGdlbmVyYXRlVGFza0luZGV4KCk7XG4gICAgY29uc3QgdGFza0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGFza09iaiA9IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGluZGV4OiB0YXNrSW5kZXgsXG4gICAgICAgIGNvbXBsZXRlZDogdGFza0NvbXBsZXRlZCxcbiAgICAgICAgdHlwZTpcInRhc2tcIixcbiAgICB9XG4gICB0YXNrc0Fyci5wdXNoKHRhc2tPYmopO1xuXG4gICAgcmV0dXJuIHRhc2tPYmo7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN5Y2xlVGFza1RpeChpbmRleCl7XG4gICAgLy90YWtlcyB0aGUgaW5kZXggYW5kIGV4dHJhY3RzIHRoZSBvYmogZnJvbSB0aGUgYXJyYXkgYW5kIGdldHMgdGhlIGNoZWNrZWQgc3RhdHVzIGFuZCBzZWVzIGlmIGl0cyBjb21wbGV0ZWQgb3Igbm90XG4gICAgY29uc3Qgb2JqID0gdGFza3NBcnJbaW5kZXhdO1xuICAgIGlmKG9iai5jb21wbGV0ZWQgPT09IHRydWUpe1xuICAgICAgICBvYmouY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNoYW5nZUNsYXNzKGluZGV4LCBcIl91bmNvbXBsZXRlZFwiKTtcbiAgICB9XG4gICAgZWxzZSBpZihvYmouY29tcGxldGVkID09PSBmYWxzZSl7XG4gICAgICAgIG9iai5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhvYmouY29tcGxldGVkKTtcbiAgICAgICAgY2hhbmdlQ2xhc3MoaW5kZXgsIFwiX2NvbXBsZXRlZFwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjeWNsZSBUYXNrdGl4IGluIGFwcCBsb2dpYyBicm9rZW4gbG1hb1wiKTtcbiAgICB9XG5cbiAgICAvL3RoaXMgd2lsbCBjYWxsIGEgZnVuY3Rpb24gdGhhdCBhZGRzIG9iaiB0byBhbiBhcnJheSB0byBiZSBkZWxldGVkIGF0IGEgY2VydGFpbiBkYXRlXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMaXN0T2JqKGxpc3ROYW1lLCBjb2xvciA9IFwibm9uZVwiKXtcbiAgICBjb25zdCBuZXdMaXN0T2JqID0ge1xuICAgICAgICBuYW1lIDogbGlzdE5hbWUsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgdHlwZTogXCJsaXN0XCIsXG4gICAgfVxuXG4gICAgbGlzdENvbGxlY3Rpb25bYCR7bGlzdE5hbWV9YF0gPSBuZXdMaXN0T2JqO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgbmV3IG9iaiB3YXMgJHtuZXdMaXN0T2JqfSwgYW5kIHRoZSBjb2xsZWN0aW9uIGxvb2tzIGxpa2U6ICR7bGlzdENvbGxlY3Rpb259YCk7XG4gICAgY29uc29sZS5sb2cobmV3TGlzdE9iaik7XG4gICAgY29uc29sZS5sb2cobGlzdENvbGxlY3Rpb24pO1xuXG4gICAgcmV0dXJuIG5ld0xpc3RPYmo7XG4gICAgLy93aGF0IGFyZSB3ZSBkb2luZyB3aXRoIHRoaXMgbGlzdCBjb2xsZWN0aW9uPyB0aGVyZSBuZWVkcyB0byBiZSBhIG1lYW5pbmdmdWwgcmVhc29uICBmb3IgdGhpcyB0byBleGlzdC4uXG5cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrSW5kZXgoKXtcbiAgICBjb25zdCBsZW5ndGggPSB0YXNrc0Fyci5sZW5ndGg7XG4gICAgbGV0IGluZGV4O1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHJldHVybiBpbmRleCA9IDA7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybiBpbmRleCA9IGxlbmd0aDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrT2JqRGlzdChjb250ZXh0LCBzZWxlY3Rvcil7XG4gICAgc3dpdGNoKGNvbnRleHQpXG4gICAge1xuICAgICAgICBjYXNlICdsb2FkX3BhZ2UnOlxuICAgICAgICAgICAgLy9kbyBzb21ldGhpbmdcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaXN0JzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2lsbCBiZWdpbiB0byBzZWFyY2ggZm9yIG1hdGNoZXNcIik7XG4gICAgICAgICAgICBpdGVyYXRvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9kYXlfdmlldyc6XG4gICAgICAgICAgICAvL2RvbWUgc29tdGhpbmcgZWxzZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwY29taW5nX3ZpZXcnOlxuICAgICAgICAgICAgLy9kbyBzb210aGluZyBlbHNlXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRhc2sgb2JqZWN0IGRpc3RyaWJ1dG9yXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpdGVyYXRvcihzZWxlY3Rvcil7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0Fyci5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRPYmogPSB0YXNrc0FycltpXTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRPYmpbYCR7Y29udGV4dH1gXSA9PT0gc2VsZWN0b3IpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy9zZW5kIHNpZ25hbCB0byBidWlsZCB0aGF0IERPTSBFbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZSBoYXZlIGEgaGFpbCBtYXJ5IVwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50QnVpbGRlcihjdXJyZW50T2JqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIC8vY3JlYXRlIGFuIGFycmF5XG4gICAgLy9wdXQgaW4gdGhpcyBhcnJheSBhbGxcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpc3RDb2xsZWN0aW9uKGRvbUVsZW1lbnQgPSBudWxsKXtcbiAgICAvL2lmIHRoZXJlIGlzIHNvbWV0aGluZyBzcGVjaWZpYywgdGhlbiBpdCBjYW4gdGFrZSB0aGUgYXJndW1lbnQgYW5kIHNlYXJjaCBhbmQgcmV0dXJuIHRoYXQgc3BlY2lmaWNhbGx5LCBpZiBub3QsIGl0IHdpbGwgcmV0dXJuIG9uZSBpbmRpdmlkdWFsbHkgdW50aWwgZ2V0dGluZyB0aHJvdWdoIGFsbCBvZiB0aGVtLlxuICAgIGlmKGRvbUVsZW1lbnQgIT09IG51bGwpe1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gbGlzdENvbGxlY3Rpb24pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFtZW5kRm9ybShcImFkZFwiLCBuYW1lLCBkb21FbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL21vZHVsZXMvRG9tTWFuYWdlci5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vbG9hZCBob21lIHBhZ2UgLT4gdG9kYXlcblxudmFyIGluaXRpYWxpemUgPSAoKCk9PntcbiAgICBsb2FkUGFnZSgpO1xuXG59KSgpO1xuXG5cbi8vZmFjdG9yeSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyB0aGUgaG9tZSBzY3JlZW5cbi8vbW9kdWxlIGltcG9ydCBmb3IgZ2VuZXJhdGluZyB0aGUgdG9kYXkgcGFnZVxuLy9ldmVyeXRoaW5nIGVsc2Ugd291bGQgYmUgbW9kdWxlIGltcG9ydHMgYXMgd2VsbCBzdWNoIGFzOiB1cGNvbWluZyBhbmQgcHJvamVjdHMgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=