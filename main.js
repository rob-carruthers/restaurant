/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  const homeDiv = document.createElement(\"div\");\n  homeDiv.textContent = \"1987 is a new eating experience.\";\n\n  return homeDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nconst contentDiv = document.createElement(\"div\");\ncontentDiv.id = \"content\";\n\nconst navItemTitles = [\"Home\", \"Menu\", \"About\", \"Booking\"];\n\nfunction header() {\n  const headerDiv = document.createElement(\"div\");\n  headerDiv.id = \"header\";\n\n  const logo = document.createElement(\"div\");\n  logo.id = \"logo\";\n  logo.textContent = \"1987\";\n  headerDiv.appendChild(logo);\n\n  const navBar = document.createElement(\"div\");\n  navBar.id = \"navBar\";\n  for (const item of navItemTitles) {\n    const navItem = document.createElement(\"div\");\n    navItem.id = \"nav\" + item;\n    navItem.textContent = item;\n    navItem.classList.add(\"navItem\");\n    if (item === \"Home\") {\n      navItem.classList.add(\"activated\");\n    }\n    navItem.addEventListener(\"click\", navigate);\n\n    navBar.appendChild(navItem);\n  }\n  headerDiv.appendChild(navBar);\n\n  document.body.appendChild(headerDiv);\n}\n\nfunction navigate(event) {\n  const navTarget = event.target.id.slice(3);\n  const navItems = document.getElementsByClassName(\"navItem\");\n\n  Array.from(navItems).forEach((item) => item.classList.remove(\"activated\"));\n  event.target.classList.add(\"activated\");\n\n  contentDiv.textContent = \"\";\n\n  switch(navTarget) {\n    case \"Home\":\n      contentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  }\n}\n\nheader();\ndocument.body.appendChild(contentDiv);\ncontentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\n\n//# sourceURL=webpack://restaurant/./src/site.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/site.js");
/******/ 	
/******/ })()
;