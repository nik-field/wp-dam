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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_admin_customizer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/admin-customizer.scss */ "./src/scss/admin-customizer.scss");

var $ = jQuery;
$(document).ready(function () {
  if (!$("input[name='is_artist_or_project_select_type']:checked").val()) {
    $('#tag-name').prop('disabled', true);
    $('.term-project_type-wrap').hide();
    $('.term-project_yearyear_select-wrap').hide();
  } else {
    $('#tag-name').prop('disabled', false);
  }

  $("input[name='is_artist_or_project_select_type']").click(function () {
    if (!$("#tag-name").prop('disabled', false)) {
      $('#tag-name').prop('disabled', false);
    }

    if ($("input[value='is_artist_or_project_project']:checked").val()) {
      $('.term-project_type-wrap').show().addClass("form-required");
      $('.term-project_yearyear_select-wrap').show().addClass("form-required");
    }

    if ($("input[value='is_artist_or_project_artist']:checked").val()) {
      $('.term-project_type-wrap').hide();
      $('.term-project_yearyear_select-wrap').hide();
    }
  });

  if (!$("input[name='format']:checked").val()) {
    $('#add-asset').hide();
    $('#postimagediv').hide();
  } else {
    var initial_selection = $("input[name='format']:checked").val();

    if (initial_selection === 'format_image') {
      $('#add-asset').hide();
      $('#postimagediv').show();
    } else {
      $('#postimagediv').hide();
      $('#add-asset').show();
      $('#add-asset tbody tr').first().show();

      if (initial_selection === 'format_link') {
        $('#add-asset tbody tr').first().hide();
      }
    }
  }

  $("input[name='format']").change(function () {
    var selection = $("input[name='format']:checked").val();

    if (selection === 'format_image') {
      $('#add-asset').hide();
      $('#postimagediv').show();
    } else {
      $('#postimagediv').hide();
      $('#add-asset').show();
      $('#add-asset tbody tr').first().show();

      if (selection === 'format_link') {
        $('#add-asset tbody tr').first().hide();
      }
    }
  });
}); //Creates slug from the Name

$(document).ready(function () {
  (function ($) {
    $.fn.slugfromtitle = function (options) {
      var $target = this;
      var $source = options.source ? $(options.source) : false;
      var $prefix = options.prefix ? options.prefix + "-" : "";
      var $suffix = options.suffix ? "-" + options.suffix : "";
      var $readonly = options.readonly || false;
      var disableSource = null;

      if ($source && $readonly === true) {
        $target.attr('readonly', true);
      }

      if ($target.val()) {
        disableSource = true;
      }

      var createSlug = function createSlug(str) {
        str = str.toLowerCase();
        var map = {
          " ": "-",
          "æ": "ae",
          "á": "a",
          "ð": "d",
          "é": "e",
          "í": "i",
          "ó": "o",
          "ú": "u",
          "ö": "o",
          "þ": "th",
          "ø": "o",
          "å": "a",
          "/": "-",
          "_": "-"
        };

        for (var k in map) {
          if (typeof map[k] !== 'function') str = str.replace(new RegExp(k, 'g'), map[k]);
        } // return and remove invalid chars and colapse dashes


        return str.replace(/[^a-z0-9 -]/g, '').replace(/-+/g, '-');
      };

      if ($source) {
        $source.on('keyup change', function () {
          if ($target.val() && disableSource === true) {
            return;
          }

          disableSource = false;
          var slug = createSlug($prefix + $(this).val() + $suffix);
          $target.val(slug);
        });
      }

      $target.on('keyup change', function () {
        if (disableSource === false) {
          disableSource = true;
        }

        var slug = createSlug($(this).val());
        $target.val(slug);
      });
    };
  })(jQuery);

  $('#tag-slug').slugfromtitle({
    source: '#tag-name',
    readonly: true
  });
});

/***/ }),

/***/ "./src/scss/admin-customizer.scss":
/*!****************************************!*\
  !*** ./src/scss/admin-customizer.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "../css/admin-customizer.css");

/***/ })

/******/ });
//# sourceMappingURL=customizer-min.js.map