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
        <div class="section phigh">

        </div>
        <div class="section pmed">

        </div>
         <div class="section plow">

        </div>
        <button class="addtaskbtn">+</button>
    </div>

    `
    buildUI();

}

function buildUI(){

    createTaskForm();
    createListForm();
    const addTaskBtn = document.querySelector(".addtaskbtn");
    addTaskBtn.addEventListener("click", ()=>{
        openTaskForm();
    });
    const addListBtn = document.querySelector(".listbtn");
    addListBtn.addEventListener("click", ()=>{
       openListForm();

    });


}

//cache some of the more important container DOM elements as variables:




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
        cancelBtn.addEventListener("click", ()=>{
            //clear the form come back to this
            closeTaskForm();
        })
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
                        <button type="submit" class="listSubmit">add</  button><button id="listCancel">cancel</button>
                    /form>
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
        cancelListBtn.addEventListener("click", ()=>{
            closeListForm();
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

function submitTask(event){
    event.preventDefault();
    const description = document.getElementById("description").value;
    const date = document.getElementById("dDate").value;
    const priority = document.getElementById("prioritySelect").value;
    const list = document.getElementById("list").value;

    const taskObj = (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(description, date, list, priority);
    elementBuilder(taskObj);
}

function submitList(event){
            event.preventDefault();
            const listName = document.getElementById("listName").value;
            const newList = (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.makeListObj)(listName);
            //there might need to be a function call here to update the available list options on the form for list
            elementBuilder(newList);
}

function elementBuilder(obj){

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
        //add the new list on the dropdown menu of the list form
        const form = document.getElementById("list");
        amendForm("add", obj.name, form);
        listElement.addEventListener("click", (e)=>{
            //insert function to build the view for this specific list
            console.log("you should be viewing the list on the DOM");
            projectsView(e);
        })
        //make the list clickable and trigger the open list view

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
    console.log(`the contents of priority is ${obj.priority}`);
    const task = document.createElement('div');
    taskContainer.appendChild(task);
    task.className = "task";
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
    //needs to display all the current projects for that list in the content container

    //store reference to the content container
    contentContainer = document.querySelector(".contentContainer");
    contentContainer.innerHTML = "";
    const projectCont = document.createElement("div");
    const projectName = e.currentTarget.dataset.name;
    projectCont.className = "projListCont";
    projectCont.innerHTML =
    `
    <span>${projectName}</span>
    <div class="section phigh">

    </div>
    <div class="section pmed">

    </div>
    <div class="section plow">

    </div>
    `;
    //function here to create the add task button but that it goes here in this list instead of giving the option to give a list category.

    //request from applogic all the task objs for that list

    //use elementbuilder to build all the tasks for this element recursively.

    //might need to refactor the buildUI functon to make addTaskBtn a separate function to call for different page layouts
    console.log(`list name is : ${projectName}`);
    //passthrough to applogic the dataset.name for taskObjDist
    (0,_appLogic_js__WEBPACK_IMPORTED_MODULE_0__.taskObjDist)( "list",  projectName);
}
function amendForm(command, argument= "none", form)
{
    if (command === "add")
    {
        //add
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
        console.log("cycle Tasktix in app logic broken lmao ");
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
    //needs to pass back to the DomManager something to tie the obj with the actual link to press
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
            if(currentObj.context === selector)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFEQUFPO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsMERBQVk7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLE1BQU07QUFDcEQ7QUFDQTs7QUFFTztBQUNQLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0EsMEJBQTBCLFVBQVU7QUFDcEMsd0RBQXdELE9BQU8saUJBQWlCLFVBQVU7QUFDMUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0MsWUFBWTtBQUM5QztBQUNBLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdUNEQ7O0FBRTVEO0FBQ0E7QUFDTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFNBQVM7QUFDL0IsbUNBQW1DLFdBQVcsbUNBQW1DLGVBQWU7QUFDaEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQWM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDekdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQStDO0FBQzFCOztBQUVyQjs7QUFFQTtBQUNBLElBQUksa0VBQVE7O0FBRVosQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvRG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYXBwTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGFnZUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDhmcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ZGFya2dyYXk7XG59XG4ubmF2e1xuICAgIGdyaWQtYXJlYToxIC8gMSAvIDIgLyAyO1xuICAgIG1pbi1oZWlnaHQ6ODB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0NjQwMzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcGFkZGluZy10b3A6MnJlbTtcbn1cbi5jb250ZW50Q29udGFpbmVye1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgICBtaW4taGVpZ2h0Ojgwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQkJDNEMyO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG4uc2VjdGlvbntcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmc6M3JlbTtcbiAgICBtYXJnaW46LjNyZW07XG59XG4udGFza3tcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBnYXA6IC41cmVtO1xufVxuLmNoZWNrQm94e1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcbn1cbi5fY29tcGxldGVkID4gLmNoZWNrQm94e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcblxufVxuLl91bmNvbXBsZXRlZCA+IC5jaGVja0JveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDJweCBncmVlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgOGZyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrZ3JheTtcXG59XFxuLm5hdntcXG4gICAgZ3JpZC1hcmVhOjEgLyAxIC8gMiAvIDI7XFxuICAgIG1pbi1oZWlnaHQ6ODB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDY0MDMzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6MnJlbTtcXG59XFxuLmNvbnRlbnRDb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gICAgbWluLWhlaWdodDo4MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0JCQzRDMjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLnNlY3Rpb257XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBwYWRkaW5nOjNyZW07XFxuICAgIG1hcmdpbjouM3JlbTtcXG59XFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG4uY2hlY2tCb3h7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGdyZWVuO1xcbn1cXG4uX2NvbXBsZXRlZCA+IC5jaGVja0JveHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXG59XFxuLl91bmNvbXBsZXRlZCA+IC5jaGVja0JveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHthZGRUYXNrLGN5Y2xlVGFza1RpeCwgbWFrZUxpc3RPYmosIHRhc2tPYmpEaXN0fSBmcm9tIFwiLi9hcHBMb2dpYy5qc1wiO1xuXG52YXIgaHRtbEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbnZhciBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wYWdlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicGFnZUNvbnRhaW5lclwiO1xudmFyIGxpc3RDb250YWluZXI7XG52YXIgY29udGVudENvbnRhaW5lcjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpe1xuXG4gICAgaHRtbEJvZHkuYXBwZW5kQ2hpbGQocGFnZUNvbnRhaW5lcik7XG5cbiAgICBwYWdlQ29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJuYXZcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRvZGF5XCI+dG9kYXk8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVwY29taW5nXCI+dXBjb21pbmc8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdENvbnRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsaXN0YnRuXCI+bGlzdHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24gcGhpZ2hcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24gcG1lZFwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24gcGxvd1wiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkdGFza2J0blwiPis8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIGBcbiAgICBidWlsZFVJKCk7XG5cbn1cblxuZnVuY3Rpb24gYnVpbGRVSSgpe1xuXG4gICAgY3JlYXRlVGFza0Zvcm0oKTtcbiAgICBjcmVhdGVMaXN0Rm9ybSgpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHRhc2tidG5cIik7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgb3BlblRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdGJ0blwiKTtcbiAgICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgIG9wZW5MaXN0Rm9ybSgpO1xuXG4gICAgfSk7XG5cblxufVxuXG4vL2NhY2hlIHNvbWUgb2YgdGhlIG1vcmUgaW1wb3J0YW50IGNvbnRhaW5lciBET00gZWxlbWVudHMgYXMgdmFyaWFibGVzOlxuXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpe1xuICAgICAgICBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50Q29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRm9ybS5jbGFzc05hbWUgPSBcInRhc2tGb3JtQ29udFwiO1xuICAgICAgICB0YXNrRm9ybS5pbm5lckhUTUwgPVxuICAgICAgICBgXG4gICAgICAgICAgICA8ZGlhbG9nIGlkPVwidGFza0RpYWxvZ1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5UYXNrPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2tUZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZERhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkRGF0ZVwiIGlkPVwiZERhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5U2VsZWN0XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eWRyb3BsaXN0XCIgaWQ9XCJwcmlvcml0eVNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsaXN0XCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibGlzdFwiIGlkPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFRhc2tcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2RpYWxvZz5cbiAgICAgICAgYFxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICAgICAgY29uc3QgdGFza1N1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICAgICAgdGFza1N1Ym1pdC5vbnN1Ym1pdCA9IHN1Ym1pdFRhc2s7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsVGFza1wiKTtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgLy9jbGVhciB0aGUgZm9ybSBjb21lIGJhY2sgdG8gdGhpc1xuICAgICAgICAgICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0Rm9ybSgpe1xuICAgICAgICBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Q29udFwiKTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibGlzdEZvcm1Db250XCI7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgICAgIGZvcm1Db250YWluZXIuaW5uZXJIVE1MID1cbiAgICAgICAgYFxuICAgICAgICAgICAgICAgIDxkaWFsb2cgaWQ9XCJsaXN0RGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwibGlzdEZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsaXN0TmFtZVwiPkxpc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiICBpZD1cImxpc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3JTZWxlY3RvclwiIGlkPVwibGlzdENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwibGlzdFN1Ym1pdFwiPmFkZDwvICBidXR0b24+PGJ1dHRvbiBpZD1cImxpc3RDYW5jZWxcIj5jYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgL2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaWFsb2c+XG4gICAgICAgIGBcbiAgICAgICAgY29uc3QgY29sb3JTZWxlY3RvckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3JTZWxlY3RvclwiKTtcbiAgICAgICAgY29sb3JTZWxlY3RvckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGNvbG9yU2VsZWN0b3JCdG4uaW5uZXJIVE1MID1cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvciBncmVlblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIHllbGxvd1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIHJlZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIG9yYW5nZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIHB1cnBsZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yIG1hZ2VudGFcIj48L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbG9ycGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvclwiKTtcbiAgICAgICAgY29sb3JwaWNrZXIuZm9yRWFjaChlbGVtZW50ID0+e1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwbHlDb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdWJtaXRMaXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Rm9ybVwiKTtcblxuICAgICAgICBzdWJtaXRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpPT57XG4gICAgICAgICAgICBzdWJtaXRMaXN0KGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FuY2VsTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdENhbmNlbFwiKTtcbiAgICAgICAgY2FuY2VsTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGNsb3NlTGlzdEZvcm0oKTtcbiAgICAgICAgfSk7XG59XG5mdW5jdGlvbiBvcGVuVGFza0Zvcm0oKXtcblxuICAgIHZhciB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGlhbG9nXCIpO1xuICAgIHRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59XG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCl7XG4gICAgdGFza0RpYWxvZy5jbG9zZSgpO1xufVxuZnVuY3Rpb24gb3Blbkxpc3RGb3JtKCl7XG4gICAgdmFyIGxpc3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3REaWFsb2dcIik7XG4gICAgbGlzdERpYWxvZy5zaG93TW9kYWwoKTtcbn1cbmZ1bmN0aW9uIGNsb3NlTGlzdEZvcm0oKXtcbiAgICBsaXN0RGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImREYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVNlbGVjdFwiKS52YWx1ZTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0XCIpLnZhbHVlO1xuXG4gICAgY29uc3QgdGFza09iaiA9IGFkZFRhc2soZGVzY3JpcHRpb24sIGRhdGUsIGxpc3QsIHByaW9yaXR5KTtcbiAgICBlbGVtZW50QnVpbGRlcih0YXNrT2JqKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0TGlzdChldmVudCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3ROYW1lXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IG1ha2VMaXN0T2JqKGxpc3ROYW1lKTtcbiAgICAgICAgICAgIC8vdGhlcmUgbWlnaHQgbmVlZCB0byBiZSBhIGZ1bmN0aW9uIGNhbGwgaGVyZSB0byB1cGRhdGUgdGhlIGF2YWlsYWJsZSBsaXN0IG9wdGlvbnMgb24gdGhlIGZvcm0gZm9yIGxpc3RcbiAgICAgICAgICAgIGVsZW1lbnRCdWlsZGVyKG5ld0xpc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEJ1aWxkZXIob2JqKXtcblxuICAgaWYob2JqLnR5cGUgPT09IFwibGlzdFwiKVxuICAge1xuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTmFtZSA9IFwibGlzdEl0ZW1cIjtcbiAgICAgICAgbGlzdEVsZW1lbnQuZGF0YXNldC5uYW1lID0gYCR7b2JqLm5hbWV9YDtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGxpc3RUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbGlzdFR4dC5jbGFzc05hbWUgPSBcImxpc3RUeHRcIjtcbiAgICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdFR4dCk7XG4gICAgICAgIGxpc3RUeHQudGV4dENvbnRlbnQgPSBvYmoubmFtZTtcbiAgICAgICAgLy9hZGQgdGhlIG5ldyBsaXN0IG9uIHRoZSBkcm9wZG93biBtZW51IG9mIHRoZSBsaXN0IGZvcm1cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcbiAgICAgICAgYW1lbmRGb3JtKFwiYWRkXCIsIG9iai5uYW1lLCBmb3JtKTtcbiAgICAgICAgbGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+e1xuICAgICAgICAgICAgLy9pbnNlcnQgZnVuY3Rpb24gdG8gYnVpbGQgdGhlIHZpZXcgZm9yIHRoaXMgc3BlY2lmaWMgbGlzdFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3Ugc2hvdWxkIGJlIHZpZXdpbmcgdGhlIGxpc3Qgb24gdGhlIERPTVwiKTtcbiAgICAgICAgICAgIHByb2plY3RzVmlldyhlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy9tYWtlIHRoZSBsaXN0IGNsaWNrYWJsZSBhbmQgdHJpZ2dlciB0aGUgb3BlbiBsaXN0IHZpZXdcblxuICAgfVxuICAgZWxzZSBpZiAob2JqLnR5cGUgPT09IFwidGFza1wiKVxuICAge1xuICAgICAgICAgbGV0IHRhc2tDb250YWluZXI7XG4gICAgICAgIHN3aXRjaChvYmoucHJpb3JpdHkpXG4gICAge1xuICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxvd1wiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG1lZFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdIaWdoJzpcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBoaWdoXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUubG9nKFwic29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBzZWxlY3RpbmcgdGhlIGNvbnRhaW5lciBkaXZcIik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGB0aGUgY29udGVudHMgb2YgcHJpb3JpdHkgaXMgJHtvYmoucHJpb3JpdHl9YCk7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgdGFzay5jbGFzc05hbWUgPSBcInRhc2tcIjtcbiAgICB0YXNrLmRhdGFzZXQuaW5kZXggPSBgJHtvYmouaW5kZXh9YDtcblxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tCb3guY2xhc3NOYW1lID0gXCJjaGVja0JveFwiO1xuICAgIGNvbnN0IHRhc2tkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tkZXNjLmNsYXNzTmFtZSA9IFwidGFza1RleHRcIjtcbiAgICB0YXNrZGVzYy50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZHVlRGF0ZS5jbGFzc05hbWUgPSBcInRkdWVEYXRlXCI7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kYXRlO1xuXG4gICAgdGFzay5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrZGVzYyk7XG4gICAgdGFzay5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChldmVudCk9PntcbiAgICAgICAgdGFza2NsaXgoZXZlbnQpO1xuICAgIH0pO1xuICAgfVxuICAgZWxzZXtcbiAgICBjb25zb2xlLmxvZyhcInNvbWVzaGl0IHdlbnQgd3Jvbmcgd2l0aCBEb21MaXN0IG1ha2VyXCIpO1xuICAgfVxufVxuXG5mdW5jdGlvbiB0YXNrY2xpeChldmVudCl7XG4gICAgY29uc3QgcGFyZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG4gICAvL3Bhc3MgdGhyb3VnaCB0aGUgaW5kZXggdG8gdGhlIGFwcGxvZ2ljIGN5Y2xldGFza3RpeFxuICAgY3ljbGVUYXNrVGl4KGluZGV4KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlDb2xvcihldmVudCl7XG4gICAgY29uc3QgY29sb3IgPSBldmVudC5jdXJyZW50VGFyZ2V0LmVsZW1lbnQuY2xhc3NMaXN0WzFdO1xuICAgIGNvbnNvbGUubG9nKGB0aGUgY29sb3IgdG8gYmUgYXBwbGllZCBpcyAke2NvbG9yfWApO1xuICAgIHJldHVybiBjb2xvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNsYXNzKGluZGV4LCBhdHRyaWJ1dGUpe1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtpbmRleH0nXWApO1xuICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZSh0YXNrLmNsYXNzTGlzdFsxXSk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKGAke2F0dHJpYnV0ZX1gKTtcbiAgICBjb25zb2xlLmxvZyhgdGhlcmUgc2hvdWxkIGJlIGEgY2hlY2tsaXN0IG9mIGluZGV4ICR7aW5kZXh9IGNoYW5naW5nIHRvIGJlICR7YXR0cmlidXRlfWApO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0c1ZpZXcoZSl7XG4gICAgLy9uZWVkcyB0byBkaXNwbGF5IGFsbCB0aGUgY3VycmVudCBwcm9qZWN0cyBmb3IgdGhhdCBsaXN0IGluIHRoZSBjb250ZW50IGNvbnRhaW5lclxuXG4gICAgLy9zdG9yZSByZWZlcmVuY2UgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyXG4gICAgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudENvbnRhaW5lclwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZTtcbiAgICBwcm9qZWN0Q29udC5jbGFzc05hbWUgPSBcInByb2pMaXN0Q29udFwiO1xuICAgIHByb2plY3RDb250LmlubmVySFRNTCA9XG4gICAgYFxuICAgIDxzcGFuPiR7cHJvamVjdE5hbWV9PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uIHBoaWdoXCI+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbiBwbWVkXCI+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbiBwbG93XCI+XG5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIC8vZnVuY3Rpb24gaGVyZSB0byBjcmVhdGUgdGhlIGFkZCB0YXNrIGJ1dHRvbiBidXQgdGhhdCBpdCBnb2VzIGhlcmUgaW4gdGhpcyBsaXN0IGluc3RlYWQgb2YgZ2l2aW5nIHRoZSBvcHRpb24gdG8gZ2l2ZSBhIGxpc3QgY2F0ZWdvcnkuXG5cbiAgICAvL3JlcXVlc3QgZnJvbSBhcHBsb2dpYyBhbGwgdGhlIHRhc2sgb2JqcyBmb3IgdGhhdCBsaXN0XG5cbiAgICAvL3VzZSBlbGVtZW50YnVpbGRlciB0byBidWlsZCBhbGwgdGhlIHRhc2tzIGZvciB0aGlzIGVsZW1lbnQgcmVjdXJzaXZlbHkuXG5cbiAgICAvL21pZ2h0IG5lZWQgdG8gcmVmYWN0b3IgdGhlIGJ1aWxkVUkgZnVuY3RvbiB0byBtYWtlIGFkZFRhc2tCdG4gYSBzZXBhcmF0ZSBmdW5jdGlvbiB0byBjYWxsIGZvciBkaWZmZXJlbnQgcGFnZSBsYXlvdXRzXG4gICAgY29uc29sZS5sb2coYGxpc3QgbmFtZSBpcyA6ICR7cHJvamVjdE5hbWV9YCk7XG4gICAgLy9wYXNzdGhyb3VnaCB0byBhcHBsb2dpYyB0aGUgZGF0YXNldC5uYW1lIGZvciB0YXNrT2JqRGlzdFxuICAgIHRhc2tPYmpEaXN0KCBcImxpc3RcIiwgIHByb2plY3ROYW1lKTtcbn1cbmZ1bmN0aW9uIGFtZW5kRm9ybShjb21tYW5kLCBhcmd1bWVudD0gXCJub25lXCIsIGZvcm0pXG57XG4gICAgaWYgKGNvbW1hbmQgPT09IFwiYWRkXCIpXG4gICAge1xuICAgICAgICAvL2FkZFxuICAgICAgICBjb25zdCBsaXN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbGlzdE9wdGlvbi5kYXRhc2V0Lm5hbWUgPSBhcmd1bWVudDtcbiAgICAgICAgbGlzdE9wdGlvbi50ZXh0Q29udGVudCA9IGFyZ3VtZW50O1xuICAgICAgICBmb3JtLmFwcGVuZChsaXN0T3B0aW9uKTtcblxuICAgIH1cbiAgICBlbHNlIGlmIChjb21tYW5kID09PSBcInJlbW92ZVwiKVxuICAgIHtcbiAgICAgICAgLy9yZW1vdmVcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYWxlcnQoXCJzb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBhbWVuZEZvcm1cIik7XG4gICAgfVxufSIsImltcG9ydCB7Y2hhbmdlQ2xhc3MsIGVsZW1lbnRCdWlsZGVyfSBmcm9tICcuL0RvbU1hbmFnZXIuanMnO1xuXG5sZXQgdGFza3NBcnIgPSBuZXcgQXJyYXkoKTtcbmxldCBsaXN0Q29sbGVjdGlvbiA9IG5ldyBPYmplY3QoKTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrIChkZXNjcmlwdGlvbiwgZGF0ZSwgbGlzdCwgcHJpb3JpdHkgPSBcIkxvd1wiKXtcblxuICAgIGNvbnN0IHRhc2tJbmRleCA9IGdlbmVyYXRlVGFza0luZGV4KCk7XG4gICAgY29uc3QgdGFza0NvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGFza09iaiA9IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGluZGV4OiB0YXNrSW5kZXgsXG4gICAgICAgIGNvbXBsZXRlZDogdGFza0NvbXBsZXRlZCxcbiAgICAgICAgdHlwZTpcInRhc2tcIixcbiAgICB9XG4gICB0YXNrc0Fyci5wdXNoKHRhc2tPYmopO1xuXG4gICAgcmV0dXJuIHRhc2tPYmo7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN5Y2xlVGFza1RpeChpbmRleCl7XG4gICAgLy90YWtlcyB0aGUgaW5kZXggYW5kIGV4dHJhY3RzIHRoZSBvYmogZnJvbSB0aGUgYXJyYXkgYW5kIGdldHMgdGhlIGNoZWNrZWQgc3RhdHVzIGFuZCBzZWVzIGlmIGl0cyBjb21wbGV0ZWQgb3Igbm90XG4gICAgY29uc3Qgb2JqID0gdGFza3NBcnJbaW5kZXhdO1xuICAgIGlmKG9iai5jb21wbGV0ZWQgPT09IHRydWUpe1xuICAgICAgICBvYmouY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNoYW5nZUNsYXNzKGluZGV4LCBcIl91bmNvbXBsZXRlZFwiKTtcbiAgICB9XG4gICAgZWxzZSBpZihvYmouY29tcGxldGVkID09PSBmYWxzZSl7XG4gICAgICAgIG9iai5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhvYmouY29tcGxldGVkKTtcbiAgICAgICAgY2hhbmdlQ2xhc3MoaW5kZXgsIFwiX2NvbXBsZXRlZFwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjeWNsZSBUYXNrdGl4IGluIGFwcCBsb2dpYyBicm9rZW4gbG1hbyBcIik7XG4gICAgfVxuXG4gICAgLy90aGlzIHdpbGwgY2FsbCBhIGZ1bmN0aW9uIHRoYXQgYWRkcyBvYmogdG8gYW4gYXJyYXkgdG8gYmUgZGVsZXRlZCBhdCBhIGNlcnRhaW4gZGF0ZVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGlzdE9iaihsaXN0TmFtZSwgY29sb3IgPSBcIm5vbmVcIil7XG4gICAgY29uc3QgbmV3TGlzdE9iaiA9IHtcbiAgICAgICAgbmFtZSA6IGxpc3ROYW1lLFxuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIHR5cGU6IFwibGlzdFwiLFxuICAgIH1cblxuICAgIGxpc3RDb2xsZWN0aW9uW2Ake2xpc3ROYW1lfWBdID0gbmV3TGlzdE9iajtcbiAgICBjb25zb2xlLmxvZyhgdGhlIG5ldyBvYmogd2FzICR7bmV3TGlzdE9ian0sIGFuZCB0aGUgY29sbGVjdGlvbiBsb29rcyBsaWtlOiAke2xpc3RDb2xsZWN0aW9ufWApO1xuICAgIGNvbnNvbGUubG9nKG5ld0xpc3RPYmopO1xuICAgIGNvbnNvbGUubG9nKGxpc3RDb2xsZWN0aW9uKTtcblxuICAgIHJldHVybiBuZXdMaXN0T2JqO1xuICAgIC8vbmVlZHMgdG8gcGFzcyBiYWNrIHRvIHRoZSBEb21NYW5hZ2VyIHNvbWV0aGluZyB0byB0aWUgdGhlIG9iaiB3aXRoIHRoZSBhY3R1YWwgbGluayB0byBwcmVzc1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhc2tJbmRleCgpe1xuICAgIGNvbnN0IGxlbmd0aCA9IHRhc2tzQXJyLmxlbmd0aDtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBpZiAobGVuZ3RoID09PSAwKXtcbiAgICAgICAgcmV0dXJuIGluZGV4ID0gMDtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIGluZGV4ID0gbGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tPYmpEaXN0KGNvbnRleHQsIHNlbGVjdG9yKXtcbiAgICBzd2l0Y2goY29udGV4dClcbiAgICB7XG4gICAgICAgIGNhc2UgJ2xvYWRfcGFnZSc6XG4gICAgICAgICAgICAvL2RvIHNvbWV0aGluZ1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3aWxsIGJlZ2luIHRvIHNlYXJjaCBmb3IgbWF0Y2hlc1wiKTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b2RheV92aWV3JzpcbiAgICAgICAgICAgIC8vZG9tZSBzb210aGluZyBlbHNlXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndXBjb21pbmdfdmlldyc6XG4gICAgICAgICAgICAvL2RvIHNvbXRoaW5nIGVsc2VcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmxvZyhcInNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGFzayBvYmplY3QgZGlzdHJpYnV0b3JcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGl0ZXJhdG9yKHNlbGVjdG9yKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VycmVudE9iaiA9IHRhc2tzQXJyW2ldO1xuICAgICAgICAgICAgaWYoY3VycmVudE9iai5jb250ZXh0ID09PSBzZWxlY3RvcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL3NlbmQgc2lnbmFsIHRvIGJ1aWxkIHRoYXQgRE9NIEVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlIGhhdmUgYSBoYWlsIG1hcnkhXCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRCdWlsZGVyKGN1cnJlbnRPYmopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9jcmVhdGUgYW4gYXJyYXlcbiAgICAvL3B1dCBpbiB0aGlzIGFycmF5IGFsbFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9tb2R1bGVzL0RvbU1hbmFnZXIuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL2xvYWQgaG9tZSBwYWdlIC0+IHRvZGF5XG5cbnZhciBpbml0aWFsaXplID0gKCgpPT57XG4gICAgbG9hZFBhZ2UoKTtcblxufSkoKTtcblxuXG4vL2ZhY3RvcnkgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgdGhlIGhvbWUgc2NyZWVuXG4vL21vZHVsZSBpbXBvcnQgZm9yIGdlbmVyYXRpbmcgdGhlIHRvZGF5IHBhZ2Vcbi8vZXZlcnl0aGluZyBlbHNlIHdvdWxkIGJlIG1vZHVsZSBpbXBvcnRzIGFzIHdlbGwgc3VjaCBhczogdXBjb21pbmcgYW5kIHByb2plY3RzIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9