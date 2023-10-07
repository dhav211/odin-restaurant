/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContent: () => (/* binding */ getContent),
/* harmony export */   setContent: () => (/* binding */ setContent)
/* harmony export */ });
let _content = document.createElement('div');
_content.id = "content";

function setContent(content) {
    _content.replaceChildren(...content);
}

function getContent() {
    return _content;
}

/***/ }),

/***/ "./src/steak_in_pan.jpg":
/*!******************************!*\
  !*** ./src/steak_in_pan.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d46d1cb382570a6c0f9.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuButtonPressed: () => (/* binding */ menuButtonPressed)
/* harmony export */ });
/* harmony import */ var _steak_in_pan_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./steak_in_pan.jpg */ "./src/steak_in_pan.jpg");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");



function menuButtonPressed() {
    document.body.style.backgroundImage = `url(${_steak_in_pan_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    document.body.style.backgroundPosition = "35% 50%";

    (0,_content__WEBPACK_IMPORTED_MODULE_1__.setContent)(getMenuContent());
}

function getMenuContent() {
    const menuContent = [];

    // Appetizers
    menuContent.push(createMenuHeader("Appetizers", "Start your experience off right with mouth-watering, internationally inspired appetizers and delectable sides. These dishes are prepared to order with fresh, high-quality ingredients, and guaranteed to complement any entrée."));
    const appetizerItems = document.createElement('div');
    appetizerItems.classList.add("menu-grid");

    appetizerItems.appendChild(createMenuItem("FRIED CALAMARI", "lightly fried, with sweet & spicy chili sauce"));
    appetizerItems.appendChild(createMenuItem("SIZZLING CRAB CAKES", "two jumbo lump cakes, lemon butter"));
    appetizerItems.appendChild(createMenuItem("VEAL OSSO BUCO RAVIOLI", "saffron-infused pasta, sautéed baby spinach, veal demi-glace"));
    appetizerItems.appendChild(createMenuItem("MUSHROOMS STUFFED WITH CRABMEAT", "broiled & topped with romano cheese"));
    appetizerItems.appendChild(createMenuItem("SPICY SHRIMP", "succulent large shrimp, lightly fried and tossed in spicy cream sauce"));

    menuContent.push(appetizerItems);

    // Soups and salads
    menuContent.push(createMenuHeader("Soups & Salads", "Our soups and fresh salads are a great start to a perfect evening at Larry's. All of our dressings are made fresh in-house, using exclusive recipes."));
    const soupSaladsItems = document.createElement('div');
    soupSaladsItems.classList.add("menu-grid");

    soupSaladsItems.appendChild(createMenuItem("CAESAR SALAD", "romaine hearts, parmesan & romano, creamy caesar"));
    soupSaladsItems.appendChild(createMenuItem("LETTUCE WEDGE","bacon, tomatoes & bleu cheese on crisp greenss"));
    soupSaladsItems.appendChild(createMenuItem("LARRY'S CHOPPED SALAD","bacon, egg, olives, mushrooms, onions, bleu cheese, basil dressing"));
    soupSaladsItems.appendChild(createMenuItem("LARRY BISQUE","new orleans style creamy lobster bisque"));

    menuContent.push(soupSaladsItems);

    //Steaks and chops
    menuContent.push(createMenuHeader("Steaks & Chops", "At Larry's, your last bite is just as good as your first. Our perfected broiling method and seasoning techniques ensure each cut of USDA Prime beef we serve arrives cooked to perfection and sizzling on a 500° plate—just the way Larry likes it."));
    const steaksChopsItems = document.createElement('div');
    steaksChopsItems.classList.add("menu-grid");

    steaksChopsItems.appendChild(createMenuItem("RIBEYE", "16 oz USDA Prime, marbled for flavor & deliciously juicy"));
    steaksChopsItems.appendChild(createMenuItem("T-BONE", "full flavored 24 oz USDA Prime cut"));
    steaksChopsItems.appendChild(createMenuItem("TOMAHAWK RIBEYE", "40 oz USDA Prime bone-in ribeye, well marbled for peak flavor"));
    steaksChopsItems.appendChild(createMenuItem("LAMB CHOPS", "three extra thick marinated chops, with fresh mint"));
    steaksChopsItems.appendChild(createMenuItem("LOBSTER TAIL", "north atlantic tail served sizzling with drawn butter"));

    menuContent.push(steaksChopsItems);

    // Sides
    menuContent.push(createMenuHeader("Sides", "These dishes are prepared to order with fresh, high-quality ingredients, and guaranteed to complement any entrée."));
    const sideItems = document.createElement('div');
    sideItems.classList.add("menu-grid");

    sideItems.appendChild(createMenuItem("BAKED POTATO", "one pound, fully loaded"));
    sideItems.appendChild(createMenuItem("GARLIC MASHED POTATOES", "smooth and creamy, with hints of roasted garlic"));
    sideItems.appendChild(createMenuItem("CREMINI MUSHROOMS", "pan roasted, veal demi-glace, fresh thyme"));
    sideItems.appendChild(createMenuItem("ROASTED BRUSSEL SPROUTS", "bacon, honey butter"));

    menuContent.push(sideItems);

    return menuContent;
}

function createMenuHeader(headerName, headerDescription) {
    const header = document.createElement('div');

    const name = document.createElement('h2');
    name.textContent = headerName;
    header.appendChild(name);

    const divider = document.createElement('hr');
    header.appendChild(divider);

    const description = document.createElement('p');
    description.textContent = "Start your experience off right with mouth-watering, internationally inspired appetizers and delectable sides. These dishes are prepared to order with fresh, high-quality ingredients, and guaranteed to complement any entrée.";
    description.style.fontStyle = "italic";
    header.appendChild(description);
    
    return header;
}

function createMenuItem(itemName, itemDescription) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const menuItemHeader = document.createElement("h2");
    const menuItemDescription = document.createElement("p");

    menuItemHeader.textContent = itemName;
    menuItemDescription.textContent = itemDescription;

    menuItem.appendChild(menuItemHeader);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjJDO0FBQ0o7O0FBRWhDO0FBQ1AsaURBQWlELDhDQUFVLENBQUM7QUFDNUQ7O0FBRUEsSUFBSSxvREFBVTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IF9jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5fY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50KSB7XG4gICAgX2NvbnRlbnQucmVwbGFjZUNoaWxkcmVuKC4uLmNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gX2NvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdGVha0luUGFuIGZyb20gJy4vc3RlYWtfaW5fcGFuLmpwZydcbmltcG9ydCB7IHNldENvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVudUJ1dHRvblByZXNzZWQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c3RlYWtJblBhbn0pYDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiMzUlIDUwJVwiO1xuXG4gICAgc2V0Q29udGVudChnZXRNZW51Q29udGVudCgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBbXTtcblxuICAgIC8vIEFwcGV0aXplcnNcbiAgICBtZW51Q29udGVudC5wdXNoKGNyZWF0ZU1lbnVIZWFkZXIoXCJBcHBldGl6ZXJzXCIsIFwiU3RhcnQgeW91ciBleHBlcmllbmNlIG9mZiByaWdodCB3aXRoIG1vdXRoLXdhdGVyaW5nLCBpbnRlcm5hdGlvbmFsbHkgaW5zcGlyZWQgYXBwZXRpemVycyBhbmQgZGVsZWN0YWJsZSBzaWRlcy4gVGhlc2UgZGlzaGVzIGFyZSBwcmVwYXJlZCB0byBvcmRlciB3aXRoIGZyZXNoLCBoaWdoLXF1YWxpdHkgaW5ncmVkaWVudHMsIGFuZCBndWFyYW50ZWVkIHRvIGNvbXBsZW1lbnQgYW55IGVudHLDqWUuXCIpKTtcbiAgICBjb25zdCBhcHBldGl6ZXJJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFwcGV0aXplckl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWdyaWRcIik7XG5cbiAgICBhcHBldGl6ZXJJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkZSSUVEIENBTEFNQVJJXCIsIFwibGlnaHRseSBmcmllZCwgd2l0aCBzd2VldCAmIHNwaWN5IGNoaWxpIHNhdWNlXCIpKTtcbiAgICBhcHBldGl6ZXJJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIlNJWlpMSU5HIENSQUIgQ0FLRVNcIiwgXCJ0d28ganVtYm8gbHVtcCBjYWtlcywgbGVtb24gYnV0dGVyXCIpKTtcbiAgICBhcHBldGl6ZXJJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIlZFQUwgT1NTTyBCVUNPIFJBVklPTElcIiwgXCJzYWZmcm9uLWluZnVzZWQgcGFzdGEsIHNhdXTDqWVkIGJhYnkgc3BpbmFjaCwgdmVhbCBkZW1pLWdsYWNlXCIpKTtcbiAgICBhcHBldGl6ZXJJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIk1VU0hST09NUyBTVFVGRkVEIFdJVEggQ1JBQk1FQVRcIiwgXCJicm9pbGVkICYgdG9wcGVkIHdpdGggcm9tYW5vIGNoZWVzZVwiKSk7XG4gICAgYXBwZXRpemVySXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJTUElDWSBTSFJJTVBcIiwgXCJzdWNjdWxlbnQgbGFyZ2Ugc2hyaW1wLCBsaWdodGx5IGZyaWVkIGFuZCB0b3NzZWQgaW4gc3BpY3kgY3JlYW0gc2F1Y2VcIikpO1xuXG4gICAgbWVudUNvbnRlbnQucHVzaChhcHBldGl6ZXJJdGVtcyk7XG5cbiAgICAvLyBTb3VwcyBhbmQgc2FsYWRzXG4gICAgbWVudUNvbnRlbnQucHVzaChjcmVhdGVNZW51SGVhZGVyKFwiU291cHMgJiBTYWxhZHNcIiwgXCJPdXIgc291cHMgYW5kIGZyZXNoIHNhbGFkcyBhcmUgYSBncmVhdCBzdGFydCB0byBhIHBlcmZlY3QgZXZlbmluZyBhdCBMYXJyeSdzLiBBbGwgb2Ygb3VyIGRyZXNzaW5ncyBhcmUgbWFkZSBmcmVzaCBpbi1ob3VzZSwgdXNpbmcgZXhjbHVzaXZlIHJlY2lwZXMuXCIpKTtcbiAgICBjb25zdCBzb3VwU2FsYWRzSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb3VwU2FsYWRzSXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtZ3JpZFwiKTtcblxuICAgIHNvdXBTYWxhZHNJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkNBRVNBUiBTQUxBRFwiLCBcInJvbWFpbmUgaGVhcnRzLCBwYXJtZXNhbiAmIHJvbWFubywgY3JlYW15IGNhZXNhclwiKSk7XG4gICAgc291cFNhbGFkc0l0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiTEVUVFVDRSBXRURHRVwiLFwiYmFjb24sIHRvbWF0b2VzICYgYmxldSBjaGVlc2Ugb24gY3Jpc3AgZ3JlZW5zc1wiKSk7XG4gICAgc291cFNhbGFkc0l0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiTEFSUlknUyBDSE9QUEVEIFNBTEFEXCIsXCJiYWNvbiwgZWdnLCBvbGl2ZXMsIG11c2hyb29tcywgb25pb25zLCBibGV1IGNoZWVzZSwgYmFzaWwgZHJlc3NpbmdcIikpO1xuICAgIHNvdXBTYWxhZHNJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkxBUlJZIEJJU1FVRVwiLFwibmV3IG9ybGVhbnMgc3R5bGUgY3JlYW15IGxvYnN0ZXIgYmlzcXVlXCIpKTtcblxuICAgIG1lbnVDb250ZW50LnB1c2goc291cFNhbGFkc0l0ZW1zKTtcblxuICAgIC8vU3RlYWtzIGFuZCBjaG9wc1xuICAgIG1lbnVDb250ZW50LnB1c2goY3JlYXRlTWVudUhlYWRlcihcIlN0ZWFrcyAmIENob3BzXCIsIFwiQXQgTGFycnkncywgeW91ciBsYXN0IGJpdGUgaXMganVzdCBhcyBnb29kIGFzIHlvdXIgZmlyc3QuIE91ciBwZXJmZWN0ZWQgYnJvaWxpbmcgbWV0aG9kIGFuZCBzZWFzb25pbmcgdGVjaG5pcXVlcyBlbnN1cmUgZWFjaCBjdXQgb2YgVVNEQSBQcmltZSBiZWVmIHdlIHNlcnZlIGFycml2ZXMgY29va2VkIHRvIHBlcmZlY3Rpb24gYW5kIHNpenpsaW5nIG9uIGEgNTAwwrAgcGxhdGXigJRqdXN0IHRoZSB3YXkgTGFycnkgbGlrZXMgaXQuXCIpKTtcbiAgICBjb25zdCBzdGVha3NDaG9wc0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RlYWtzQ2hvcHNJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudS1ncmlkXCIpO1xuXG4gICAgc3RlYWtzQ2hvcHNJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIlJJQkVZRVwiLCBcIjE2IG96IFVTREEgUHJpbWUsIG1hcmJsZWQgZm9yIGZsYXZvciAmIGRlbGljaW91c2x5IGp1aWN5XCIpKTtcbiAgICBzdGVha3NDaG9wc0l0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiVC1CT05FXCIsIFwiZnVsbCBmbGF2b3JlZCAyNCBveiBVU0RBIFByaW1lIGN1dFwiKSk7XG4gICAgc3RlYWtzQ2hvcHNJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIlRPTUFIQVdLIFJJQkVZRVwiLCBcIjQwIG96IFVTREEgUHJpbWUgYm9uZS1pbiByaWJleWUsIHdlbGwgbWFyYmxlZCBmb3IgcGVhayBmbGF2b3JcIikpO1xuICAgIHN0ZWFrc0Nob3BzSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJMQU1CIENIT1BTXCIsIFwidGhyZWUgZXh0cmEgdGhpY2sgbWFyaW5hdGVkIGNob3BzLCB3aXRoIGZyZXNoIG1pbnRcIikpO1xuICAgIHN0ZWFrc0Nob3BzSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJMT0JTVEVSIFRBSUxcIiwgXCJub3J0aCBhdGxhbnRpYyB0YWlsIHNlcnZlZCBzaXp6bGluZyB3aXRoIGRyYXduIGJ1dHRlclwiKSk7XG5cbiAgICBtZW51Q29udGVudC5wdXNoKHN0ZWFrc0Nob3BzSXRlbXMpO1xuXG4gICAgLy8gU2lkZXNcbiAgICBtZW51Q29udGVudC5wdXNoKGNyZWF0ZU1lbnVIZWFkZXIoXCJTaWRlc1wiLCBcIlRoZXNlIGRpc2hlcyBhcmUgcHJlcGFyZWQgdG8gb3JkZXIgd2l0aCBmcmVzaCwgaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLCBhbmQgZ3VhcmFudGVlZCB0byBjb21wbGVtZW50IGFueSBlbnRyw6llLlwiKSk7XG4gICAgY29uc3Qgc2lkZUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZUl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWdyaWRcIik7XG5cbiAgICBzaWRlSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJCQUtFRCBQT1RBVE9cIiwgXCJvbmUgcG91bmQsIGZ1bGx5IGxvYWRlZFwiKSk7XG4gICAgc2lkZUl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiR0FSTElDIE1BU0hFRCBQT1RBVE9FU1wiLCBcInNtb290aCBhbmQgY3JlYW15LCB3aXRoIGhpbnRzIG9mIHJvYXN0ZWQgZ2FybGljXCIpKTtcbiAgICBzaWRlSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJDUkVNSU5JIE1VU0hST09NU1wiLCBcInBhbiByb2FzdGVkLCB2ZWFsIGRlbWktZ2xhY2UsIGZyZXNoIHRoeW1lXCIpKTtcbiAgICBzaWRlSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJST0FTVEVEIEJSVVNTRUwgU1BST1VUU1wiLCBcImJhY29uLCBob25leSBidXR0ZXJcIikpO1xuXG4gICAgbWVudUNvbnRlbnQucHVzaChzaWRlSXRlbXMpO1xuXG4gICAgcmV0dXJuIG1lbnVDb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SGVhZGVyKGhlYWRlck5hbWUsIGhlYWRlckRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gaGVhZGVyTmFtZTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgeW91ciBleHBlcmllbmNlIG9mZiByaWdodCB3aXRoIG1vdXRoLXdhdGVyaW5nLCBpbnRlcm5hdGlvbmFsbHkgaW5zcGlyZWQgYXBwZXRpemVycyBhbmQgZGVsZWN0YWJsZSBzaWRlcy4gVGhlc2UgZGlzaGVzIGFyZSBwcmVwYXJlZCB0byBvcmRlciB3aXRoIGZyZXNoLCBoaWdoLXF1YWxpdHkgaW5ncmVkaWVudHMsIGFuZCBndWFyYW50ZWVkIHRvIGNvbXBsZW1lbnQgYW55IGVudHLDqWUuXCI7XG4gICAgZGVzY3JpcHRpb24uc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIFxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGl0ZW1OYW1lLCBpdGVtRGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBjb25zdCBtZW51SXRlbUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBtZW51SXRlbUhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW1OYW1lO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtRGVzY3JpcHRpb247XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUhlYWRlcik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9