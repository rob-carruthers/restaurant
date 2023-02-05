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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createHome() {\n  const homeDiv = document.createElement(\"div\");\n  homeDiv.textContent = \"1987 is a new eating experience.\";\n\n  return homeDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuItems = [\n  {\n    name: \"Olive & Anchovy Tapenade\",\n    price: 7,\n    description: \"Served with marinated garlic cloves.\",\n  },\n  {\n    name: \"Charred Baby Artichoke Salad\",\n    price: 12,\n    description:\n      \"Quick-charred Argentinian artichoke hearts served with a fig and aniseed balsamic dressing.\",\n  },\n  {\n    name: \"Springbok Biltong Board\",\n    price: 14,\n    description:\n      \"Hand-prepared Botswanan springbok spiced and cured in the traditional manner.\",\n  },\n  { name: \"break\" },\n  {\n    name: \"Gorgonzola & Ajwain Mezzelune\",\n    price: 23,\n    description:\n      \"Freshly prepared filled pasta, always hand-made on the day, filled with vibrant Gorgonzola imported from Lombardia.\",\n  },\n  {\n    name: \"Salmon Loin Tartare\",\n    price: 27,\n    description:\n      \"Line-caught salmon diced, served as a tartare with beetroot, caraway, and potato accompanied by a Dijon dressing.\",\n  },\n  {\n    name: \"Flash-burnt Ox Fillet\",\n    price: 38,\n    description:\n      \"Experience a crisp charred outer, smooth marbling, and a perfect rare mouthfeel all at once with our extreme high-heat cooking technique. Served with one-week fries and port jus.\",\n  },\n  { name: \"break\" },\n  {\n    name: \"Artisan Afrikaans Cheeseboard\",\n    price: 27,\n    description: \"A selection of luxury cheeses imported direct from South Africa.\"\n  },\n  { name: \"break\" },\n  {\n    name: \"Whiskey & Crystallised Orange Panna Cotta\",\n    price: 15,\n    description: \"A delicate panna cotta prepared with single-malt whiskey and bittered crystallised orange.\"\n  },\n  {\n    name: \"Black Chocolate & Lychee Wafer\",\n    price: 17,\n    description: \"Experience an intense and distilled Peruvian dark chocolate balanced with a fragrant lychee syrup, served on a sugared wafer.\"\n  },\n  { name: \"break\" },\n  {\n    name: \"Coffee & Truffles\",\n    price: 12,\n    description: \"Black coffee served short with a range of sweet truffles.\"\n  }\n];\n\nfunction createMenu() {\n  const menuDiv = document.createElement(\"div\");\n  menuDiv.id = \"menuDiv\";\n\n  const menuList = document.createElement(\"div\");\n  menuList.id = \"menuList\";\n\n  const title = document.createElement(\"div\");\n  title.textContent = \"Tasting Menu\";\n  title.classList.add(\"title\");\n\n  const subHeader = document.createElement(\"div\");\n  subHeader.classList.add(\"subHeader\");\n  subHeader.textContent =\n    \"Our tasting menu is served both à la carte and as a set to share (recommended).\";\n\n  menuDiv.appendChild(title);\n  menuDiv.appendChild(subHeader);\n\n  for (const item of menuItems) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menuItem\");\n    if (item.name === \"break\") {\n      menuItem.innerHTML = \"<hr>\";\n    } else {\n      const menuItemHeader = document.createElement(\"div\");\n      menuItemHeader.classList.add(\"menuItemHeader\");\n      const name = document.createElement(\"div\");\n      name.class = \"menuItemName\";\n      name.textContent = item.name;\n      menuItemHeader.appendChild(name);\n\n      const price = document.createElement(\"div\");\n      price.class = \"menuItemPrice\";\n      price.textContent = item.price;\n      menuItemHeader.appendChild(price);\n\n      const description = document.createElement(\"div\");\n      description.classList.add(\"menuItemDescription\");\n      description.textContent = item.description;\n      menuItem.appendChild(menuItemHeader);\n      menuItem.appendChild(description);\n    }\n    menuList.appendChild(menuItem);\n  }\n\n  menuDiv.appendChild(menuList);\n\n  return menuDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nconst contentDiv = document.createElement(\"div\");\ncontentDiv.id = \"content\";\n\nconst navItemTitles = [\"Home\", \"Menu\", \"About\", \"Booking\"];\n\nfunction header() {\n  const headerDiv = document.createElement(\"div\");\n  headerDiv.id = \"header\";\n\n  const logo = document.createElement(\"div\");\n  logo.id = \"logo\";\n  logo.textContent = \"1987\";\n  headerDiv.appendChild(logo);\n\n  const navBar = document.createElement(\"div\");\n  navBar.id = \"navBar\";\n  for (const item of navItemTitles) {\n    const navItem = document.createElement(\"div\");\n    navItem.id = \"nav\" + item;\n    navItem.textContent = item;\n    navItem.classList.add(\"navItem\");\n    if (item === \"Home\") {\n      navItem.classList.add(\"activated\");\n    }\n    navItem.addEventListener(\"click\", navigate);\n\n    navBar.appendChild(navItem);\n  }\n  headerDiv.appendChild(navBar);\n\n  document.body.appendChild(headerDiv);\n}\n\nfunction navigate(event) {\n  const navTarget = event.target.id.slice(3);\n  const navItems = document.getElementsByClassName(\"navItem\");\n\n  Array.from(navItems).forEach((item) => item.classList.remove(\"activated\"));\n  event.target.classList.add(\"activated\");\n\n  contentDiv.textContent = \"\";\n  let content = [];\n\n  switch (navTarget) {\n    case \"Home\":\n      contentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n      break;\n    case \"Menu\":\n      contentDiv.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n      break;\n  }\n}\n\nheader();\ndocument.body.appendChild(contentDiv);\ncontentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n//# sourceURL=webpack://restaurant/./src/site.js?");

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