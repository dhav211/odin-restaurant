/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactButtonPressed: () => (/* binding */ contactButtonPressed),
/* harmony export */   getContactContent: () => (/* binding */ getContactContent)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");



function contactButtonPressed() {
    document.body.style.backgroundImage = `url(${_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    document.body.style.backgroundPosition = "center";

    (0,_content__WEBPACK_IMPORTED_MODULE_1__.setContent)(getContactContent());
}

function getContactContent() {
    const contactContent = [];

    // Hours
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = "Hours";
    contactContent.push(hoursHeader);
    const sunThursHours = document.createElement('p');
    sunThursHours.textContent = "Sunday - Thursday: 11AM - 10PM";
    contactContent.push(sunThursHours);
    const friSatHours = document.createElement('p');
    friSatHours.textContent = "Friday - Saturday: 11AM - 12PM";
    contactContent.push(friSatHours);

    contactContent.push(document.createElement('hr'));

    // Phone
    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = "Call Us";
    contactContent.push(phoneHeader);
    const phoneNumber = document.createElement('a');
    phoneNumber.href = "tel:555-123-5432";
    phoneNumber.textContent = "555-123-5432";
    contactContent.push(phoneNumber);

    contactContent.push(document.createElement('hr'));

    // Location
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = "Our Location";
    contactContent.push(locationHeader);
    const addressLine1 = document.createElement('p');
    addressLine1.textContent = "47894 302nd St";
    contactContent.push(addressLine1);
    const addressLine2 = document.createElement('p');
    addressLine2.textContent = "Alcester, SD 57001";
    contactContent.push(addressLine2);


    return contactContent;
}

/***/ }),

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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHomeContent: () => (/* binding */ getHomeContent),
/* harmony export */   homeButtonPressed: () => (/* binding */ homeButtonPressed)
/* harmony export */ });
/* harmony import */ var _cut_steak_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cut_steak.jpg */ "./src/cut_steak.jpg");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ "./src/content.js");



function homeButtonPressed() {
    document.body.style.backgroundImage = `url(${_cut_steak_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
    document.body.style.backgroundPosition = "center";
    (0,_content__WEBPACK_IMPORTED_MODULE_1__.setContent)(getHomeContent());
}

function getHomeContent() {
    const homeContent = [];
    const experienceHeader = document.createElement('h2');
    experienceHeader.textContent = "Experience the Meat";
    homeContent.push(experienceHeader);

    homeContent.push(document.createElement('hr'));

    const aboutText = document.createElement('p');
    aboutText.textContent = "Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Enim neque volutpat ac tincidunt vitae semper. Tellus orci ac auctor augue mauris. Donec enim diam vulputate ut pharetra. Facilisis mauris sit amet massa vitae. Mattis molestie a iaculis at erat pellentesque adipiscing. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Nulla porttitor massa id neque. Nibh sed pulvinar proin gravida hendrerit lectus a. Ultricies integer quis auctor elit. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Placerat orci nulla pellentesque dignissim enim. Gravida cum sociis natoque penatibus.";
    homeContent.push(aboutText);

    const moreText = document.createElement('p');
    moreText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    homeContent.push(moreText);

    return homeContent;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/cut_steak.jpg":
/*!***************************!*\
  !*** ./src/cut_steak.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d3d895027434578ea05.jpg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "300366ea3036a61ebee2.jpg";

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
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHeader: () => (/* binding */ getHeader)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function getHeader() {
    const header = document.createElement('header');
    const links = document.createElement('nav');
    const logo = document.createElement('h1');

    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.addEventListener("click", _home__WEBPACK_IMPORTED_MODULE_0__.homeButtonPressed);
    menu.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_1__.menuButtonPressed);
    contact.addEventListener("click", _contact__WEBPACK_IMPORTED_MODULE_2__.contactButtonPressed);

    links.classList.add("links");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);

    logo.textContent = "Larry\'s Steakhouse";

    header.appendChild(links);
    header.appendChild(logo);

    return header;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNIOztBQUVoQztBQUNQLGlEQUFpRCw0Q0FBVSxDQUFDO0FBQzVEOztBQUVBLElBQUksb0RBQVU7QUFDZDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHNDO0FBQ0M7O0FBRWhDO0FBQ1AsaURBQWlELDJDQUFRLENBQUM7QUFDMUQ7QUFDQSxJQUFJLG9EQUFVO0FBQ2Q7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjJDO0FBQ0o7O0FBRWhDO0FBQ1AsaURBQWlELDhDQUFVLENBQUM7QUFDNUQ7O0FBRUEsSUFBSSxvREFBVTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQztBQUNBO0FBQ007O0FBRTFDO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsb0RBQWlCO0FBQ3BELG1DQUFtQyxvREFBaUI7QUFDcEQsc0NBQXNDLDBEQUFvQjs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXN0YXVyYW50IGZyb20gJy4vcmVzdGF1cmFudC5qcGcnO1xuaW1wb3J0IHsgc2V0Q29udGVudCB9IGZyb20gJy4vY29udGVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0QnV0dG9uUHJlc3NlZCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtyZXN0YXVyYW50fSlgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcblxuICAgIHNldENvbnRlbnQoZ2V0Q29udGFjdENvbnRlbnQoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250YWN0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IFtdO1xuXG4gICAgLy8gSG91cnNcbiAgICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gICAgY29udGFjdENvbnRlbnQucHVzaChob3Vyc0hlYWRlcik7XG4gICAgY29uc3Qgc3VuVGh1cnNIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdW5UaHVyc0hvdXJzLnRleHRDb250ZW50ID0gXCJTdW5kYXkgLSBUaHVyc2RheTogMTFBTSAtIDEwUE1cIjtcbiAgICBjb250YWN0Q29udGVudC5wdXNoKHN1blRodXJzSG91cnMpO1xuICAgIGNvbnN0IGZyaVNhdEhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZyaVNhdEhvdXJzLnRleHRDb250ZW50ID0gXCJGcmlkYXkgLSBTYXR1cmRheTogMTFBTSAtIDEyUE1cIjtcbiAgICBjb250YWN0Q29udGVudC5wdXNoKGZyaVNhdEhvdXJzKTtcblxuICAgIGNvbnRhY3RDb250ZW50LnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG5cbiAgICAvLyBQaG9uZVxuICAgIGNvbnN0IHBob25lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwaG9uZUhlYWRlci50ZXh0Q29udGVudCA9IFwiQ2FsbCBVc1wiO1xuICAgIGNvbnRhY3RDb250ZW50LnB1c2gocGhvbmVIZWFkZXIpO1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHBob25lTnVtYmVyLmhyZWYgPSBcInRlbDo1NTUtMTIzLTU0MzJcIjtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiNTU1LTEyMy01NDMyXCI7XG4gICAgY29udGFjdENvbnRlbnQucHVzaChwaG9uZU51bWJlcik7XG5cbiAgICBjb250YWN0Q29udGVudC5wdXNoKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuXG4gICAgLy8gTG9jYXRpb25cbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBMb2NhdGlvblwiO1xuICAgIGNvbnRhY3RDb250ZW50LnB1c2gobG9jYXRpb25IZWFkZXIpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzTGluZTEudGV4dENvbnRlbnQgPSBcIjQ3ODk0IDMwMm5kIFN0XCI7XG4gICAgY29udGFjdENvbnRlbnQucHVzaChhZGRyZXNzTGluZTEpO1xuICAgIGNvbnN0IGFkZHJlc3NMaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzTGluZTIudGV4dENvbnRlbnQgPSBcIkFsY2VzdGVyLCBTRCA1NzAwMVwiO1xuICAgIGNvbnRhY3RDb250ZW50LnB1c2goYWRkcmVzc0xpbmUyKTtcblxuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xufSIsImxldCBfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuX2NvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIF9jb250ZW50LnJlcGxhY2VDaGlsZHJlbiguLi5jb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIF9jb250ZW50O1xufSIsImltcG9ydCBjdXRTdGVhayBmcm9tICcuL2N1dF9zdGVhay5qcGcnXG5pbXBvcnQgeyBzZXRDb250ZW50IH0gZnJvbSAnLi9jb250ZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVCdXR0b25QcmVzc2VkKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2N1dFN0ZWFrfSlgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcbiAgICBzZXRDb250ZW50KGdldEhvbWVDb250ZW50KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG9tZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBbXTtcbiAgICBjb25zdCBleHBlcmllbmNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBleHBlcmllbmNlSGVhZGVyLnRleHRDb250ZW50ID0gXCJFeHBlcmllbmNlIHRoZSBNZWF0XCI7XG4gICAgaG9tZUNvbnRlbnQucHVzaChleHBlcmllbmNlSGVhZGVyKTtcblxuICAgIGhvbWVDb250ZW50LnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG5cbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRUZXh0LnRleHRDb250ZW50ID0gXCJUaW5jaWR1bnQgdG9ydG9yIGFsaXF1YW0gbnVsbGEgZmFjaWxpc2kgY3JhcyBmZXJtZW50dW0gb2Rpby4gRW5pbSBuZXF1ZSB2b2x1dHBhdCBhYyB0aW5jaWR1bnQgdml0YWUgc2VtcGVyLiBUZWxsdXMgb3JjaSBhYyBhdWN0b3IgYXVndWUgbWF1cmlzLiBEb25lYyBlbmltIGRpYW0gdnVscHV0YXRlIHV0IHBoYXJldHJhLiBGYWNpbGlzaXMgbWF1cmlzIHNpdCBhbWV0IG1hc3NhIHZpdGFlLiBNYXR0aXMgbW9sZXN0aWUgYSBpYWN1bGlzIGF0IGVyYXQgcGVsbGVudGVzcXVlIGFkaXBpc2NpbmcuIFNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYyBmZXVnaWF0IHNlZCBsZWN0dXMgdmVzdGlidWx1bSBtYXR0aXMuIE51bGxhIHBvcnR0aXRvciBtYXNzYSBpZCBuZXF1ZS4gTmliaCBzZWQgcHVsdmluYXIgcHJvaW4gZ3JhdmlkYSBoZW5kcmVyaXQgbGVjdHVzIGEuIFVsdHJpY2llcyBpbnRlZ2VyIHF1aXMgYXVjdG9yIGVsaXQuIENvbnZhbGxpcyBhIGNyYXMgc2VtcGVyIGF1Y3RvciBuZXF1ZSB2aXRhZSB0ZW1wdXMgcXVhbSBwZWxsZW50ZXNxdWUuIFBsYWNlcmF0IG9yY2kgbnVsbGEgcGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltLiBHcmF2aWRhIGN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMuXCI7XG4gICAgaG9tZUNvbnRlbnQucHVzaChhYm91dFRleHQpO1xuXG4gICAgY29uc3QgbW9yZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbW9yZVRleHQudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIjtcbiAgICBob21lQ29udGVudC5wdXNoKG1vcmVUZXh0KTtcblxuICAgIHJldHVybiBob21lQ29udGVudDtcbn0iLCJpbXBvcnQgc3RlYWtJblBhbiBmcm9tICcuL3N0ZWFrX2luX3Bhbi5qcGcnXG5pbXBvcnQgeyBzZXRDb250ZW50IH0gZnJvbSAnLi9jb250ZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVCdXR0b25QcmVzc2VkKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3N0ZWFrSW5QYW59KWA7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcIjM1JSA1MCVcIjtcblxuICAgIHNldENvbnRlbnQoZ2V0TWVudUNvbnRlbnQoKSk7XG59XG5cbmZ1bmN0aW9uIGdldE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gW107XG5cbiAgICAvLyBBcHBldGl6ZXJzXG4gICAgbWVudUNvbnRlbnQucHVzaChjcmVhdGVNZW51SGVhZGVyKFwiQXBwZXRpemVyc1wiLCBcIlN0YXJ0IHlvdXIgZXhwZXJpZW5jZSBvZmYgcmlnaHQgd2l0aCBtb3V0aC13YXRlcmluZywgaW50ZXJuYXRpb25hbGx5IGluc3BpcmVkIGFwcGV0aXplcnMgYW5kIGRlbGVjdGFibGUgc2lkZXMuIFRoZXNlIGRpc2hlcyBhcmUgcHJlcGFyZWQgdG8gb3JkZXIgd2l0aCBmcmVzaCwgaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLCBhbmQgZ3VhcmFudGVlZCB0byBjb21wbGVtZW50IGFueSBlbnRyw6llLlwiKSk7XG4gICAgY29uc3QgYXBwZXRpemVySXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBldGl6ZXJJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudS1ncmlkXCIpO1xuXG4gICAgYXBwZXRpemVySXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJGUklFRCBDQUxBTUFSSVwiLCBcImxpZ2h0bHkgZnJpZWQsIHdpdGggc3dlZXQgJiBzcGljeSBjaGlsaSBzYXVjZVwiKSk7XG4gICAgYXBwZXRpemVySXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJTSVpaTElORyBDUkFCIENBS0VTXCIsIFwidHdvIGp1bWJvIGx1bXAgY2FrZXMsIGxlbW9uIGJ1dHRlclwiKSk7XG4gICAgYXBwZXRpemVySXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJWRUFMIE9TU08gQlVDTyBSQVZJT0xJXCIsIFwic2FmZnJvbi1pbmZ1c2VkIHBhc3RhLCBzYXV0w6llZCBiYWJ5IHNwaW5hY2gsIHZlYWwgZGVtaS1nbGFjZVwiKSk7XG4gICAgYXBwZXRpemVySXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJNVVNIUk9PTVMgU1RVRkZFRCBXSVRIIENSQUJNRUFUXCIsIFwiYnJvaWxlZCAmIHRvcHBlZCB3aXRoIHJvbWFubyBjaGVlc2VcIikpO1xuICAgIGFwcGV0aXplckl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiU1BJQ1kgU0hSSU1QXCIsIFwic3VjY3VsZW50IGxhcmdlIHNocmltcCwgbGlnaHRseSBmcmllZCBhbmQgdG9zc2VkIGluIHNwaWN5IGNyZWFtIHNhdWNlXCIpKTtcblxuICAgIG1lbnVDb250ZW50LnB1c2goYXBwZXRpemVySXRlbXMpO1xuXG4gICAgLy8gU291cHMgYW5kIHNhbGFkc1xuICAgIG1lbnVDb250ZW50LnB1c2goY3JlYXRlTWVudUhlYWRlcihcIlNvdXBzICYgU2FsYWRzXCIsIFwiT3VyIHNvdXBzIGFuZCBmcmVzaCBzYWxhZHMgYXJlIGEgZ3JlYXQgc3RhcnQgdG8gYSBwZXJmZWN0IGV2ZW5pbmcgYXQgTGFycnkncy4gQWxsIG9mIG91ciBkcmVzc2luZ3MgYXJlIG1hZGUgZnJlc2ggaW4taG91c2UsIHVzaW5nIGV4Y2x1c2l2ZSByZWNpcGVzLlwiKSk7XG4gICAgY29uc3Qgc291cFNhbGFkc0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cFNhbGFkc0l0ZW1zLmNsYXNzTGlzdC5hZGQoXCJtZW51LWdyaWRcIik7XG5cbiAgICBzb3VwU2FsYWRzSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJDQUVTQVIgU0FMQURcIiwgXCJyb21haW5lIGhlYXJ0cywgcGFybWVzYW4gJiByb21hbm8sIGNyZWFteSBjYWVzYXJcIikpO1xuICAgIHNvdXBTYWxhZHNJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkxFVFRVQ0UgV0VER0VcIixcImJhY29uLCB0b21hdG9lcyAmIGJsZXUgY2hlZXNlIG9uIGNyaXNwIGdyZWVuc3NcIikpO1xuICAgIHNvdXBTYWxhZHNJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkxBUlJZJ1MgQ0hPUFBFRCBTQUxBRFwiLFwiYmFjb24sIGVnZywgb2xpdmVzLCBtdXNocm9vbXMsIG9uaW9ucywgYmxldSBjaGVlc2UsIGJhc2lsIGRyZXNzaW5nXCIpKTtcbiAgICBzb3VwU2FsYWRzSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJMQVJSWSBCSVNRVUVcIixcIm5ldyBvcmxlYW5zIHN0eWxlIGNyZWFteSBsb2JzdGVyIGJpc3F1ZVwiKSk7XG5cbiAgICBtZW51Q29udGVudC5wdXNoKHNvdXBTYWxhZHNJdGVtcyk7XG5cbiAgICAvL1N0ZWFrcyBhbmQgY2hvcHNcbiAgICBtZW51Q29udGVudC5wdXNoKGNyZWF0ZU1lbnVIZWFkZXIoXCJTdGVha3MgJiBDaG9wc1wiLCBcIkF0IExhcnJ5J3MsIHlvdXIgbGFzdCBiaXRlIGlzIGp1c3QgYXMgZ29vZCBhcyB5b3VyIGZpcnN0LiBPdXIgcGVyZmVjdGVkIGJyb2lsaW5nIG1ldGhvZCBhbmQgc2Vhc29uaW5nIHRlY2huaXF1ZXMgZW5zdXJlIGVhY2ggY3V0IG9mIFVTREEgUHJpbWUgYmVlZiB3ZSBzZXJ2ZSBhcnJpdmVzIGNvb2tlZCB0byBwZXJmZWN0aW9uIGFuZCBzaXp6bGluZyBvbiBhIDUwMMKwIHBsYXRl4oCUanVzdCB0aGUgd2F5IExhcnJ5IGxpa2VzIGl0LlwiKSk7XG4gICAgY29uc3Qgc3RlYWtzQ2hvcHNJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0ZWFrc0Nob3BzSXRlbXMuY2xhc3NMaXN0LmFkZChcIm1lbnUtZ3JpZFwiKTtcblxuICAgIHN0ZWFrc0Nob3BzSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJSSUJFWUVcIiwgXCIxNiBveiBVU0RBIFByaW1lLCBtYXJibGVkIGZvciBmbGF2b3IgJiBkZWxpY2lvdXNseSBqdWljeVwiKSk7XG4gICAgc3RlYWtzQ2hvcHNJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIlQtQk9ORVwiLCBcImZ1bGwgZmxhdm9yZWQgMjQgb3ogVVNEQSBQcmltZSBjdXRcIikpO1xuICAgIHN0ZWFrc0Nob3BzSXRlbXMuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oXCJUT01BSEFXSyBSSUJFWUVcIiwgXCI0MCBveiBVU0RBIFByaW1lIGJvbmUtaW4gcmliZXllLCB3ZWxsIG1hcmJsZWQgZm9yIHBlYWsgZmxhdm9yXCIpKTtcbiAgICBzdGVha3NDaG9wc0l0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiTEFNQiBDSE9QU1wiLCBcInRocmVlIGV4dHJhIHRoaWNrIG1hcmluYXRlZCBjaG9wcywgd2l0aCBmcmVzaCBtaW50XCIpKTtcbiAgICBzdGVha3NDaG9wc0l0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiTE9CU1RFUiBUQUlMXCIsIFwibm9ydGggYXRsYW50aWMgdGFpbCBzZXJ2ZWQgc2l6emxpbmcgd2l0aCBkcmF3biBidXR0ZXJcIikpO1xuXG4gICAgbWVudUNvbnRlbnQucHVzaChzdGVha3NDaG9wc0l0ZW1zKTtcblxuICAgIC8vIFNpZGVzXG4gICAgbWVudUNvbnRlbnQucHVzaChjcmVhdGVNZW51SGVhZGVyKFwiU2lkZXNcIiwgXCJUaGVzZSBkaXNoZXMgYXJlIHByZXBhcmVkIHRvIG9yZGVyIHdpdGggZnJlc2gsIGhpZ2gtcXVhbGl0eSBpbmdyZWRpZW50cywgYW5kIGd1YXJhbnRlZWQgdG8gY29tcGxlbWVudCBhbnkgZW50csOpZS5cIikpO1xuICAgIGNvbnN0IHNpZGVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVJdGVtcy5jbGFzc0xpc3QuYWRkKFwibWVudS1ncmlkXCIpO1xuXG4gICAgc2lkZUl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiQkFLRUQgUE9UQVRPXCIsIFwib25lIHBvdW5kLCBmdWxseSBsb2FkZWRcIikpO1xuICAgIHNpZGVJdGVtcy5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShcIkdBUkxJQyBNQVNIRUQgUE9UQVRPRVNcIiwgXCJzbW9vdGggYW5kIGNyZWFteSwgd2l0aCBoaW50cyBvZiByb2FzdGVkIGdhcmxpY1wiKSk7XG4gICAgc2lkZUl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiQ1JFTUlOSSBNVVNIUk9PTVNcIiwgXCJwYW4gcm9hc3RlZCwgdmVhbCBkZW1pLWdsYWNlLCBmcmVzaCB0aHltZVwiKSk7XG4gICAgc2lkZUl0ZW1zLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKFwiUk9BU1RFRCBCUlVTU0VMIFNQUk9VVFNcIiwgXCJiYWNvbiwgaG9uZXkgYnV0dGVyXCIpKTtcblxuICAgIG1lbnVDb250ZW50LnB1c2goc2lkZUl0ZW1zKTtcblxuICAgIHJldHVybiBtZW51Q29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUhlYWRlcihoZWFkZXJOYW1lLCBoZWFkZXJEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGhlYWRlck5hbWU7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IHlvdXIgZXhwZXJpZW5jZSBvZmYgcmlnaHQgd2l0aCBtb3V0aC13YXRlcmluZywgaW50ZXJuYXRpb25hbGx5IGluc3BpcmVkIGFwcGV0aXplcnMgYW5kIGRlbGVjdGFibGUgc2lkZXMuIFRoZXNlIGRpc2hlcyBhcmUgcHJlcGFyZWQgdG8gb3JkZXIgd2l0aCBmcmVzaCwgaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLCBhbmQgZ3VhcmFudGVlZCB0byBjb21wbGVtZW50IGFueSBlbnRyw6llLlwiO1xuICAgIGRlc2NyaXB0aW9uLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtTmFtZSwgaXRlbURlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgY29uc3QgbWVudUl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbWVudUl0ZW1IZWFkZXIudGV4dENvbnRlbnQgPSBpdGVtTmFtZTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbURlc2NyaXB0aW9uO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1IZWFkZXIpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtRGVzY3JpcHRpb24pO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBob21lQnV0dG9uUHJlc3NlZCB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnVCdXR0b25QcmVzc2VkIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgY29udGFjdEJ1dHRvblByZXNzZWQgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZUJ1dHRvblByZXNzZWQpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVCdXR0b25QcmVzc2VkKTtcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250YWN0QnV0dG9uUHJlc3NlZCk7XG5cbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKFwibGlua3NcIik7XG5cbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGxpbmtzLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGxpbmtzLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwiTGFycnlcXCdzIFN0ZWFraG91c2VcIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaW5rcyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=