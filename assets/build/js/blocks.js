/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/gutenberg/blocks/heading-with-icon/edit.js":
/*!***********************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-with-icon/edit.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-map */ "./src/js/gutenberg/blocks/heading-with-icon/icons-map.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal Dependencies.
 */


/**
 * WordPress Dependencies.
 */




/**
 * Edit
 *
 * @param {Object} props Props.
 *
 * @return {Object} Content.
 */
var Edit = function Edit(props) {
  var className = props.className,
    attributes = props.attributes,
    setAttributes = props.setAttributes;
  var option = attributes.option,
    content = attributes.content;
  console.warn('option', option);
  var HeadingIcon = (0,_icons_map__WEBPACK_IMPORTED_MODULE_0__.getIconComponent)(option);
  return /*#__PURE__*/React.createElement("div", {
    className: "aquila-icon-heading"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aquila-icon-heading__heading"
  }, /*#__PURE__*/React.createElement(HeadingIcon, null)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h4" // The tag here is the element output and editable in the admin
    ,
    className: className,
    value: content // Any existing content, either from the database or an attribute default
    ,
    onChange: function onChange(contentVal) {
      return setAttributes({
        content: contentVal
      });
    } // Store updated content as a block attribute
    ,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading…', 'aquila') // Display this text before any content has been added by the user
  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block Settings', 'aquila')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select the icon', 'aquila'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Controls icon selection', 'aquila'),
    selected: option,
    options: [{
      label: 'Dos',
      value: 'dos'
    }, {
      label: "Dont's",
      value: 'donts'
    }],
    onChange: function onChange(optionVal) {
      setAttributes({
        option: optionVal
      });
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/js/gutenberg/blocks/heading-with-icon/icons-map.js":
/*!****************************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-with-icon/icons-map.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIconComponent: function() { return /* binding */ getIconComponent; }
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../icons */ "./src/js/icons/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Get icon component.
 *
 * @param {String} option Option.
 *
 * @return {*|SvgCheck} SVG Component.
 */
var getIconComponent = function getIconComponent(option) {
  var IconsMap = {
    dos: _icons__WEBPACK_IMPORTED_MODULE_0__.Check,
    donts: _icons__WEBPACK_IMPORTED_MODULE_0__.Cross
  };
  return !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(option) && option in IconsMap ? IconsMap[option] : IconsMap.dos;
};

/***/ }),

/***/ "./src/js/gutenberg/blocks/heading-with-icon/index.js":
/*!************************************************************!*\
  !*** ./src/js/gutenberg/blocks/heading-with-icon/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-map */ "./src/js/gutenberg/blocks/heading-with-icon/icons-map.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/js/gutenberg/blocks/heading-with-icon/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Heading with Icon block.
 *
 * @package
 */



/**
 * Internal dependencies.
 */


/**
 * WordPress Dependencies.
 */





/**
 * Register block type.
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('aquila-blocks/heading', {
  /**
   * Block title.
   *
   * @type {string}
   */
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading with Icon', 'aquila'),
  /**
   * Block icon.
   *
   * @type {string}
   */
  icon: 'admin-customizer',
  /**
   * Block description.
   *
   * @type {string}
   */
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Heading and select Icons', 'aquila'),
  /**
   * Block category.
   *
   * @type {string}
   */
  category: 'aquila',
  /**
   * Attributes.
   */
  attributes: {
    option: {
      type: 'string',
      default: 'dos'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'h4',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dos', 'aquila')
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * Save function.
   *
   * @param {Object} props Props
   *
   * @return {Object} Content.
   */
  save: function save(props) {
    var _props$attributes = props.attributes,
      option = _props$attributes.option,
      content = _props$attributes.content;
    var HeadingIcon = (0,_icons_map__WEBPACK_IMPORTED_MODULE_0__.getIconComponent)(option);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      className: "aquila-icon-heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("span", {
      className: "aquila-icon-heading__heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(HeadingIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      tagName: "h4",
      value: content
    }));
  }
});

/***/ }),

/***/ "./src/js/icons/Check.js":
/*!*******************************!*\
  !*** ./src/js/icons/Check.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: 20,
    height: 20,
    style: {
      enableBackground: "new 0 0 20 20"
    },
    viewBox: "0 0 417.813 417"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#06ab1c",
    d: "M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0",
    "data-original": "#2196f3"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SvgCheck);

/***/ }),

/***/ "./src/js/icons/Cross.js":
/*!*******************************!*\
  !*** ./src/js/icons/Cross.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCross = function SvgCross(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: 20,
    height: 20,
    style: {
      enableBackground: "new 0 0 20 20"
    },
    viewBox: "0 0 123.05 123.05"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#e30101",
    d: "m121.325 10.925-8.5-8.399c-2.3-2.3-6.1-2.3-8.5 0l-42.4 42.399L18.726 1.726c-2.301-2.301-6.101-2.301-8.5 0l-8.5 8.5c-2.301 2.3-2.301 6.1 0 8.5l43.1 43.1-42.3 42.5c-2.3 2.3-2.3 6.1 0 8.5l8.5 8.5c2.3 2.3 6.1 2.3 8.5 0l42.399-42.4 42.4 42.4c2.3 2.3 6.1 2.3 8.5 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.5l-42.5-42.4 42.4-42.399a6.13 6.13 0 0 0 .1-8.602z",
    "data-original": "#000000"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SvgCross);

/***/ }),

/***/ "./src/js/icons/index.js":
/*!*******************************!*\
  !*** ./src/js/icons/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Check: function() { return /* reexport safe */ _Check__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Cross: function() { return /* reexport safe */ _Cross__WEBPACK_IMPORTED_MODULE_1__["default"]; }
/* harmony export */ });
/* harmony import */ var _Check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Check */ "./src/js/icons/Check.js");
/* harmony import */ var _Cross__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cross */ "./src/js/icons/Cross.js");



/***/ }),

/***/ "./src/sass/blocks.scss":
/*!******************************!*\
  !*** ./src/sass/blocks.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/blocks.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_blocks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/blocks.scss */ "./src/sass/blocks.scss");
/* harmony import */ var _gutenberg_blocks_heading_with_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutenberg/blocks/heading-with-icon */ "./src/js/gutenberg/blocks/heading-with-icon/index.js");


// Blocks


}();
/******/ })()
;
//# sourceMappingURL=blocks.js.map