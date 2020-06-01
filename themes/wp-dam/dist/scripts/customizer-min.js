/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/admin-customizer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/admin-customizer.js":
/*!************************************!*\
  !*** ./src/js/admin-customizer.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_admin_customizer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/admin-customizer.scss */ \"./src/scss/admin-customizer.scss\");\n\nvar $ = jQuery;\n$(document).ready(function () {\n  if (!$(\"input[name='is_artist_or_project_select_type']:checked\").val()) {\n    $('#tag-name').prop('disabled', true);\n    $('.term-project_type-wrap').hide();\n    $('.term-project_yearyear_select-wrap').hide();\n  } else {\n    $('#tag-name').prop('disabled', false);\n  }\n\n  $(\"input[name='is_artist_or_project_select_type']\").click(function () {\n    if (!$(\"#tag-name\").prop('disabled', false)) {\n      $('#tag-name').prop('disabled', false);\n    }\n\n    if ($(\"input[value='is_artist_or_project_project']:checked\").val()) {\n      $('.term-project_type-wrap').show().addClass(\"form-required\");\n      $('.term-project_yearyear_select-wrap').show().addClass(\"form-required\");\n    }\n\n    if ($(\"input[value='is_artist_or_project_artist']:checked\").val()) {\n      $('.term-project_type-wrap').hide();\n      $('.term-project_yearyear_select-wrap').hide();\n    }\n  });\n\n  if (!$(\"input[name='format']:checked\").val()) {\n    $('#add-asset').hide();\n    $('#postimagediv').hide();\n  } else {\n    var initial_selection = $(\"input[name='format']:checked\").val();\n\n    if (initial_selection === 'format_image') {\n      $('#add-asset').hide();\n      $('#postimagediv').show();\n    } else {\n      $('#postimagediv').hide();\n      $('#add-asset').show();\n      $('#add-asset tbody tr').first().show();\n\n      if (initial_selection === 'format_link') {\n        $('#add-asset tbody tr').first().hide();\n      }\n    }\n  }\n\n  $(\"input[name='format']\").change(function () {\n    var selection = $(\"input[name='format']:checked\").val();\n\n    if (selection === 'format_image') {\n      $('#add-asset').hide();\n      $('#postimagediv').show();\n    } else {\n      $('#postimagediv').hide();\n      $('#add-asset').show();\n      $('#add-asset tbody tr').first().show();\n\n      if (selection === 'format_link') {\n        $('#add-asset tbody tr').first().hide();\n      }\n    }\n  });\n}); //Creates slug from the Name\n\n$(document).ready(function () {\n  (function ($) {\n    $.fn.slugfromtitle = function (options) {\n      var $target = this;\n      var $source = options.source ? $(options.source) : false;\n      var $prefix = options.prefix ? options.prefix + \"-\" : \"\";\n      var $suffix = options.suffix ? \"-\" + options.suffix : \"\";\n      var $readonly = options.readonly || false;\n      var disableSource = null;\n\n      if ($source && $readonly === true) {\n        $target.attr('readonly', true);\n      }\n\n      if ($target.val()) {\n        disableSource = true;\n      }\n\n      var createSlug = function createSlug(str) {\n        str = str.toLowerCase();\n        var map = {\n          \" \": \"-\",\n          \"æ\": \"ae\",\n          \"á\": \"a\",\n          \"ð\": \"d\",\n          \"é\": \"e\",\n          \"í\": \"i\",\n          \"ó\": \"o\",\n          \"ú\": \"u\",\n          \"ö\": \"o\",\n          \"þ\": \"th\",\n          \"ø\": \"o\",\n          \"å\": \"a\",\n          \"/\": \"-\",\n          \"_\": \"-\"\n        };\n\n        for (var k in map) {\n          if (typeof map[k] !== 'function') str = str.replace(new RegExp(k, 'g'), map[k]);\n        } // return and remove invalid chars and colapse dashes\n\n\n        return str.replace(/[^a-z0-9 -]/g, '').replace(/-+/g, '-');\n      };\n\n      if ($source) {\n        $source.on('keyup change', function () {\n          if ($target.val() && disableSource === true) {\n            return;\n          }\n\n          disableSource = false;\n          var slug = createSlug($prefix + $(this).val() + $suffix);\n          $target.val(slug);\n        });\n      }\n\n      $target.on('keyup change', function () {\n        if (disableSource === false) {\n          disableSource = true;\n        }\n\n        var slug = createSlug($(this).val());\n        $target.val(slug);\n      });\n    };\n  })(jQuery);\n\n  $('#tag-slug').slugfromtitle({\n    source: '#tag-name',\n    readonly: true\n  });\n});\n\n//# sourceURL=webpack:///./src/js/admin-customizer.js?");

/***/ }),

/***/ "./src/scss/admin-customizer.scss":
/*!****************************************!*\
  !*** ./src/scss/admin-customizer.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"../css/admin-customizer.css\");\n\n//# sourceURL=webpack:///./src/scss/admin-customizer.scss?");

/***/ })

/******/ });