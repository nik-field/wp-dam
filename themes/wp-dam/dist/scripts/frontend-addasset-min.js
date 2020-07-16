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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/admin-frontend-addasset.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() { return MDCFoundation; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCFoundation);

/***/ }),

/***/ "./node_modules/@material/dialog/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/component.js ***!
  \****************************************************/
/*! exports provided: MDCDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialog", function() { return MDCDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/focus-trap */ "./node_modules/@material/dom/focus-trap.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/dialog/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/@material/dialog/util.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var strings = _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDialogFoundation"].strings;

var MDCDialog =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDialog, _super);

  function MDCDialog() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCDialog.prototype, "isOpen", {
    get: function get() {
      return this.foundation_.isOpen();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "escapeKeyAction", {
    get: function get() {
      return this.foundation_.getEscapeKeyAction();
    },
    set: function set(action) {
      this.foundation_.setEscapeKeyAction(action);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "scrimClickAction", {
    get: function get() {
      return this.foundation_.getScrimClickAction();
    },
    set: function set(action) {
      this.foundation_.setScrimClickAction(action);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialog.prototype, "autoStackButtons", {
    get: function get() {
      return this.foundation_.getAutoStackButtons();
    },
    set: function set(autoStack) {
      this.foundation_.setAutoStackButtons(autoStack);
    },
    enumerable: true,
    configurable: true
  });

  MDCDialog.attachTo = function (root) {
    return new MDCDialog(root);
  };

  MDCDialog.prototype.initialize = function (focusTrapFactory) {
    var e_1, _a;

    if (focusTrapFactory === void 0) {
      focusTrapFactory = function focusTrapFactory(el, focusOptions) {
        return new _material_dom_focus_trap__WEBPACK_IMPORTED_MODULE_2__["FocusTrap"](el, focusOptions);
      };
    }

    var container = this.root_.querySelector(strings.CONTAINER_SELECTOR);

    if (!container) {
      throw new Error("Dialog component requires a " + strings.CONTAINER_SELECTOR + " container element");
    }

    this.container_ = container;
    this.content_ = this.root_.querySelector(strings.CONTENT_SELECTOR);
    this.buttons_ = [].slice.call(this.root_.querySelectorAll(strings.BUTTON_SELECTOR));
    this.defaultButton_ = this.root_.querySelector("[" + strings.BUTTON_DEFAULT_ATTRIBUTE + "]");
    this.focusTrapFactory_ = focusTrapFactory;
    this.buttonRipples_ = [];

    try {
      for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.buttons_), _c = _b.next(); !_c.done; _c = _b.next()) {
        var buttonEl = _c.value;
        this.buttonRipples_.push(new _material_ripple_component__WEBPACK_IMPORTED_MODULE_4__["MDCRipple"](buttonEl));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  MDCDialog.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.focusTrap_ = _util__WEBPACK_IMPORTED_MODULE_6__["createFocusTrapInstance"](this.container_, this.focusTrapFactory_, this.getInitialFocusEl_() || undefined);
    this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_);
    this.handleKeydown_ = this.foundation_.handleKeydown.bind(this.foundation_);
    this.handleDocumentKeydown_ = this.foundation_.handleDocumentKeydown.bind(this.foundation_);
    this.handleLayout_ = this.layout.bind(this);
    var LAYOUT_EVENTS = ['resize', 'orientationchange'];

    this.handleOpening_ = function () {
      LAYOUT_EVENTS.forEach(function (evtType) {
        return window.addEventListener(evtType, _this.handleLayout_);
      });
      document.addEventListener('keydown', _this.handleDocumentKeydown_);
    };

    this.handleClosing_ = function () {
      LAYOUT_EVENTS.forEach(function (evtType) {
        return window.removeEventListener(evtType, _this.handleLayout_);
      });
      document.removeEventListener('keydown', _this.handleDocumentKeydown_);
    };

    this.listen('click', this.handleClick_);
    this.listen('keydown', this.handleKeydown_);
    this.listen(strings.OPENING_EVENT, this.handleOpening_);
    this.listen(strings.CLOSING_EVENT, this.handleClosing_);
  };

  MDCDialog.prototype.destroy = function () {
    this.unlisten('click', this.handleClick_);
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(strings.OPENING_EVENT, this.handleOpening_);
    this.unlisten(strings.CLOSING_EVENT, this.handleClosing_);
    this.handleClosing_();
    this.buttonRipples_.forEach(function (ripple) {
      return ripple.destroy();
    });

    _super.prototype.destroy.call(this);
  };

  MDCDialog.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCDialog.prototype.open = function () {
    this.foundation_.open();
  };

  MDCDialog.prototype.close = function (action) {
    if (action === void 0) {
      action = '';
    }

    this.foundation_.close(action);
  };

  MDCDialog.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addBodyClass: function addBodyClass(className) {
        return document.body.classList.add(className);
      },
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      areButtonsStacked: function areButtonsStacked() {
        return _util__WEBPACK_IMPORTED_MODULE_6__["areTopsMisaligned"](_this.buttons_);
      },
      clickDefaultButton: function clickDefaultButton() {
        return _this.defaultButton_ && _this.defaultButton_.click();
      },
      eventTargetMatches: function eventTargetMatches(target, selector) {
        return target ? Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(target, selector) : false;
      },
      getActionFromEvent: function getActionFromEvent(evt) {
        if (!evt.target) {
          return '';
        }

        var element = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["closest"])(evt.target, "[" + strings.ACTION_ATTRIBUTE + "]");
        return element && element.getAttribute(strings.ACTION_ATTRIBUTE);
      },
      getInitialFocusEl: function getInitialFocusEl() {
        return _this.getInitialFocusEl_();
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      isContentScrollable: function isContentScrollable() {
        return _util__WEBPACK_IMPORTED_MODULE_6__["isScrollable"](_this.content_);
      },
      notifyClosed: function notifyClosed(action) {
        return _this.emit(strings.CLOSED_EVENT, action ? {
          action: action
        } : {});
      },
      notifyClosing: function notifyClosing(action) {
        return _this.emit(strings.CLOSING_EVENT, action ? {
          action: action
        } : {});
      },
      notifyOpened: function notifyOpened() {
        return _this.emit(strings.OPENED_EVENT, {});
      },
      notifyOpening: function notifyOpening() {
        return _this.emit(strings.OPENING_EVENT, {});
      },
      releaseFocus: function releaseFocus() {
        return _this.focusTrap_.releaseFocus();
      },
      removeBodyClass: function removeBodyClass(className) {
        return document.body.classList.remove(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      reverseButtons: function reverseButtons() {
        _this.buttons_.reverse();

        _this.buttons_.forEach(function (button) {
          button.parentElement.appendChild(button);
        });
      },
      trapFocus: function trapFocus() {
        return _this.focusTrap_.trapFocus();
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDialogFoundation"](adapter);
  };

  MDCDialog.prototype.getInitialFocusEl_ = function () {
    return document.querySelector("[" + strings.INITIAL_FOCUS_ATTRIBUTE + "]");
  };

  return MDCDialog;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/dialog/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/dialog/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  CLOSING: 'mdc-dialog--closing',
  OPEN: 'mdc-dialog--open',
  OPENING: 'mdc-dialog--opening',
  SCROLLABLE: 'mdc-dialog--scrollable',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  STACKED: 'mdc-dialog--stacked'
};
var strings = {
  ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
  BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
  BUTTON_SELECTOR: '.mdc-dialog__button',
  CLOSED_EVENT: 'MDCDialog:closed',
  CLOSE_ACTION: 'close',
  CLOSING_EVENT: 'MDCDialog:closing',
  CONTAINER_SELECTOR: '.mdc-dialog__container',
  CONTENT_SELECTOR: '.mdc-dialog__content',
  DESTROY_ACTION: 'destroy',
  INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
  OPENED_EVENT: 'MDCDialog:opened',
  OPENING_EVENT: 'MDCDialog:opening',
  SCRIM_SELECTOR: '.mdc-dialog__scrim',
  SUPPRESS_DEFAULT_PRESS_SELECTOR: ['textarea', '.mdc-menu .mdc-list-item'].join(', '),
  SURFACE_SELECTOR: '.mdc-dialog__surface'
};
var numbers = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};

/***/ }),

/***/ "./node_modules/@material/dialog/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/dialog/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCDialogFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return MDCDialogFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCDialogFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDialogFoundation, _super);

  function MDCDialogFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDialogFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.animationFrame_ = 0;
    _this.animationTimer_ = 0;
    _this.layoutFrame_ = 0;
    _this.escapeKeyAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.scrimClickAction_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSE_ACTION;
    _this.autoStackButtons_ = true;
    _this.areButtonsStacked_ = false;
    return _this;
  }

  Object.defineProperty(MDCDialogFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addBodyClass: function addBodyClass() {
          return undefined;
        },
        addClass: function addClass() {
          return undefined;
        },
        areButtonsStacked: function areButtonsStacked() {
          return false;
        },
        clickDefaultButton: function clickDefaultButton() {
          return undefined;
        },
        eventTargetMatches: function eventTargetMatches() {
          return false;
        },
        getActionFromEvent: function getActionFromEvent() {
          return '';
        },
        getInitialFocusEl: function getInitialFocusEl() {
          return null;
        },
        hasClass: function hasClass() {
          return false;
        },
        isContentScrollable: function isContentScrollable() {
          return false;
        },
        notifyClosed: function notifyClosed() {
          return undefined;
        },
        notifyClosing: function notifyClosing() {
          return undefined;
        },
        notifyOpened: function notifyOpened() {
          return undefined;
        },
        notifyOpening: function notifyOpening() {
          return undefined;
        },
        releaseFocus: function releaseFocus() {
          return undefined;
        },
        removeBodyClass: function removeBodyClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        reverseButtons: function reverseButtons() {
          return undefined;
        },
        trapFocus: function trapFocus() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCDialogFoundation.prototype.init = function () {
    if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED)) {
      this.setAutoStackButtons(false);
    }
  };

  MDCDialogFoundation.prototype.destroy = function () {
    if (this.isOpen_) {
      this.close(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].DESTROY_ACTION);
    }

    if (this.animationTimer_) {
      clearTimeout(this.animationTimer_);
      this.handleAnimationTimerEnd_();
    }

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
      this.layoutFrame_ = 0;
    }
  };

  MDCDialogFoundation.prototype.open = function () {
    var _this = this;

    this.isOpen_ = true;
    this.adapter_.notifyOpening();
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING); // Wait a frame once display is no longer "none", to establish basis for animation

    this.runNextAnimationFrame_(function () {
      _this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);

      _this.adapter_.addBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);

      _this.layout();

      _this.animationTimer_ = setTimeout(function () {
        _this.handleAnimationTimerEnd_();

        _this.adapter_.trapFocus(_this.adapter_.getInitialFocusEl());

        _this.adapter_.notifyOpened();
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_OPEN_TIME_MS);
    });
  };

  MDCDialogFoundation.prototype.close = function (action) {
    var _this = this;

    if (action === void 0) {
      action = '';
    }

    if (!this.isOpen_) {
      // Avoid redundant close calls (and events), e.g. from keydown on elements that inherently emit click
      return;
    }

    this.isOpen_ = false;
    this.adapter_.notifyClosing(action);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPEN);
    this.adapter_.removeBodyClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLL_LOCK);
    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = 0;
    clearTimeout(this.animationTimer_);
    this.animationTimer_ = setTimeout(function () {
      _this.adapter_.releaseFocus();

      _this.handleAnimationTimerEnd_();

      _this.adapter_.notifyClosed(action);
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DIALOG_ANIMATION_CLOSE_TIME_MS);
  };

  MDCDialogFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
    return this.escapeKeyAction_;
  };

  MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
    this.escapeKeyAction_ = action;
  };

  MDCDialogFoundation.prototype.getScrimClickAction = function () {
    return this.scrimClickAction_;
  };

  MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
    this.scrimClickAction_ = action;
  };

  MDCDialogFoundation.prototype.getAutoStackButtons = function () {
    return this.autoStackButtons_;
  };

  MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
    this.autoStackButtons_ = autoStack;
  };

  MDCDialogFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };
  /** Handles click on the dialog root element. */


  MDCDialogFoundation.prototype.handleClick = function (evt) {
    var isScrim = this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SCRIM_SELECTOR); // Check for scrim click first since it doesn't require querying ancestors.

    if (isScrim && this.scrimClickAction_ !== '') {
      this.close(this.scrimClickAction_);
    } else {
      var action = this.adapter_.getActionFromEvent(evt);

      if (action) {
        this.close(action);
      }
    }
  };
  /** Handles keydown on the dialog root element. */


  MDCDialogFoundation.prototype.handleKeydown = function (evt) {
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;

    if (!isEnter) {
      return;
    }

    var action = this.adapter_.getActionFromEvent(evt);

    if (action) {
      // Action button callback is handled in `handleClick`,
      // since space/enter keydowns on buttons trigger click events.
      return;
    }

    var isDefault = !this.adapter_.eventTargetMatches(evt.target, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].SUPPRESS_DEFAULT_PRESS_SELECTOR);

    if (isEnter && isDefault) {
      this.adapter_.clickDefaultButton();
    }
  };
  /** Handles keydown on the document. */


  MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
    var isEscape = evt.key === 'Escape' || evt.keyCode === 27;

    if (isEscape && this.escapeKeyAction_ !== '') {
      this.close(this.escapeKeyAction_);
    }
  };

  MDCDialogFoundation.prototype.layoutInternal_ = function () {
    if (this.autoStackButtons_) {
      this.detectStackedButtons_();
    }

    this.detectScrollableContent_();
  };

  MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function () {
    this.animationTimer_ = 0;
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].OPENING);
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CLOSING);
  };
  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */


  MDCDialogFoundation.prototype.runNextAnimationFrame_ = function (callback) {
    var _this = this;

    cancelAnimationFrame(this.animationFrame_);
    this.animationFrame_ = requestAnimationFrame(function () {
      _this.animationFrame_ = 0;
      clearTimeout(_this.animationTimer_);
      _this.animationTimer_ = setTimeout(callback, 0);
    });
  };

  MDCDialogFoundation.prototype.detectStackedButtons_ = function () {
    // Remove the class first to let us measure the buttons' natural positions.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    var areButtonsStacked = this.adapter_.areButtonsStacked();

    if (areButtonsStacked) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].STACKED);
    }

    if (areButtonsStacked !== this.areButtonsStacked_) {
      this.adapter_.reverseButtons();
      this.areButtonsStacked_ = areButtonsStacked;
    }
  };

  MDCDialogFoundation.prototype.detectScrollableContent_ = function () {
    // Remove the class first to let us measure the natural height of the content.
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);

    if (this.adapter_.isContentScrollable()) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SCROLLABLE);
    }
  };

  return MDCDialogFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCDialogFoundation);

/***/ }),

/***/ "./node_modules/@material/dialog/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dialog/index.js ***!
  \************************************************/
/*! exports provided: util, MDCDialog, cssClasses, strings, numbers, MDCDialogFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@material/dialog/util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/@material/dialog/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDialog", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["MDCDialog"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/dialog/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/dialog/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCDialogFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/***/ }),

/***/ "./node_modules/@material/dialog/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/dialog/util.js ***!
  \***********************************************/
/*! exports provided: createFocusTrapInstance, isScrollable, areTopsMisaligned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrapInstance", function() { return createFocusTrapInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrollable", function() { return isScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areTopsMisaligned", function() { return areTopsMisaligned; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
  return focusTrapFactory(surfaceEl, {
    initialFocusEl: initialFocusEl
  });
}
function isScrollable(el) {
  return el ? el.scrollHeight > el.offsetHeight : false;
}
function areTopsMisaligned(els) {
  var tops = new Set();
  [].forEach.call(els, function (el) {
    return tops.add(el.offsetTop);
  });
  return tops.size > 1;
}

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/*! exports provided: applyPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  return supportsPassiveOption(globalObj) ? {
    passive: true
  } : false;
}

function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  } // See
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


  var passiveSupported = false;

  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }

    };

    var handler = function handler() {};

    globalObj.document.addEventListener('test', handler, options);
    globalObj.document.removeEventListener('test', handler, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}

/***/ }),

/***/ "./node_modules/@material/dom/focus-trap.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/dom/focus-trap.js ***!
  \**************************************************/
/*! exports provided: FocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */

var FocusTrap =
/** @class */
function () {
  function FocusTrap(root, options) {
    if (options === void 0) {
      options = {};
    }

    this.root = root;
    this.options = options; // Previously focused element before trapping focus.

    this.elFocusedBeforeTrapFocus = null;
  }
  /**
   * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
   * otherwises sets initial focus to the first focusable child element.
   */


  FocusTrap.prototype.trapFocus = function () {
    var focusableEls = this.getFocusableElements(this.root);

    if (focusableEls.length === 0) {
      throw new Error('FocusTrap: Element must have at least one focusable child.');
    }

    this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.wrapTabFocus(this.root, focusableEls);

    if (!this.options.skipInitialFocus) {
      this.focusInitialElement(focusableEls, this.options.initialFocusEl);
    }
  };
  /**
   * Releases focus from `root`. Also restores focus to the previously focused
   * element.
   */


  FocusTrap.prototype.releaseFocus = function () {
    [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS)).forEach(function (sentinelEl) {
      sentinelEl.parentElement.removeChild(sentinelEl);
    });

    if (this.elFocusedBeforeTrapFocus) {
      this.elFocusedBeforeTrapFocus.focus();
    }
  };
  /**
   * Wraps tab focus within `el` by adding two hidden sentinel divs which are
   * used to mark the beginning and the end of the tabbable region. When
   * focused, these sentinel elements redirect focus to the first/last
   * children elements of the tabbable region, ensuring that focus is trapped
   * within that region.
   */


  FocusTrap.prototype.wrapTabFocus = function (el, focusableEls) {
    var sentinelStart = this.createSentinel();
    var sentinelEnd = this.createSentinel();
    sentinelStart.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[focusableEls.length - 1].focus();
      }
    });
    sentinelEnd.addEventListener('focus', function () {
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      }
    });
    el.insertBefore(sentinelStart, el.children[0]);
    el.appendChild(sentinelEnd);
  };
  /**
   * Focuses on `initialFocusEl` if defined and a child of the root element.
   * Otherwise, focuses on the first focusable child element of the root.
   */


  FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
    var focusIndex = 0;

    if (initialFocusEl) {
      focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
    }

    focusableEls[focusIndex].focus();
  };

  FocusTrap.prototype.getFocusableElements = function (root) {
    var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
    return focusableEls.filter(function (el) {
      var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' || el.getAttribute('disabled') != null || el.getAttribute('hidden') != null || el.getAttribute('aria-hidden') === 'true';
      var isTabbableAndVisible = el.tabIndex >= 0 && el.getBoundingClientRect().width > 0 && !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
      var isProgrammaticallyHidden = false;

      if (isTabbableAndVisible) {
        var style = getComputedStyle(el);
        isProgrammaticallyHidden = style.display === 'none' || style.visibility === 'hidden';
      }

      return isTabbableAndVisible && !isProgrammaticallyHidden;
    });
  };

  FocusTrap.prototype.createSentinel = function () {
    var sentinel = document.createElement('div');
    sentinel.setAttribute('tabindex', '0'); // Don't announce in screen readers.

    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.classList.add(FOCUS_SENTINEL_CLASS);
    return sentinel;
  };

  return FocusTrap;
}();



/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/*! exports provided: closest, matches, estimateScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateScrollWidth", function() { return estimateScrollWidth; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */

function estimateScrollWidth(element) {
  // Check the offsetParent. If the element inherits display: none from any
  // parent, the offsetParent property will be null (see
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
  // This check ensures we only clone the node when necessary.
  var htmlEl = element;

  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }

  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}

/***/ }),

/***/ "./node_modules/@material/floating-label/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/component.js ***!
  \************************************************************/
/*! exports provided: MDCFloatingLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function() { return MDCFloatingLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/floating-label/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCFloatingLabel =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabel, _super);

  function MDCFloatingLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFloatingLabel.attachTo = function (root) {
    return new MDCFloatingLabel(root);
  };
  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */


  MDCFloatingLabel.prototype.shake = function (shouldShake) {
    this.foundation_.shake(shouldShake);
  };
  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */


  MDCFloatingLabel.prototype["float"] = function (shouldFloat) {
    this.foundation_["float"](shouldFloat);
  };

  MDCFloatingLabel.prototype.getWidth = function () {
    return this.foundation_.getWidth();
  };

  MDCFloatingLabel.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      getWidth: function getWidth() {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["estimateScrollWidth"])(_this.root_);
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCFloatingLabelFoundation"](adapter);
  };

  return MDCFloatingLabel;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/floating-label/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/constants.js ***!
  \************************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};

/***/ }),

/***/ "./node_modules/@material/floating-label/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/floating-label/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCFloatingLabelFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function() { return MDCFloatingLabelFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/floating-label/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCFloatingLabelFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCFloatingLabelFoundation, _super);

  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };

    return _this;
  }

  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        getWidth: function getWidth() {
          return 0;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };
  /**
   * Returns the width of the label element.
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter_.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */


  MDCFloatingLabelFoundation.prototype["float"] = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _a.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCFloatingLabelFoundation);

/***/ }),

/***/ "./node_modules/@material/line-ripple/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/component.js ***!
  \*********************************************************/
/*! exports provided: MDCLineRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function() { return MDCLineRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/line-ripple/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCLineRipple =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRipple, _super);

  function MDCLineRipple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLineRipple.attachTo = function (root) {
    return new MDCLineRipple(root);
  };
  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function () {
    this.foundation_.activate();
  };
  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */


  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  MDCLineRipple.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCLineRippleFoundation"](adapter);
  };

  return MDCLineRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/*! exports provided: cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};


/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCLineRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function() { return MDCLineRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/line-ripple/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCLineRippleFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCLineRippleFoundation, _super);

  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setStyle: function setStyle() {
          return undefined;
        },
        registerEventHandler: function registerEventHandler() {
          return undefined;
        },
        deregisterEventHandler: function deregisterEventHandler() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
  };

  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
  };

  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
  };

  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCLineRippleFoundation);

/***/ }),

/***/ "./node_modules/@material/list/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/component.js ***!
  \**************************************************/
/*! exports provided: MDCList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCList", function() { return MDCList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/list/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCList =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCList, _super);

  function MDCList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(MDCList.prototype, "vertical", {
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "listElements", {
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll("." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "wrapFocus", {
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "singleSelection", {
    set: function set(isSingleSelectionList) {
      this.foundation_.setSingleSelection(isSingleSelectionList);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCList.prototype, "selectedIndex", {
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    },
    enumerable: true,
    configurable: true
  });

  MDCList.attachTo = function (root) {
    return new MDCList(root);
  };

  MDCList.prototype.initialSyncWithDOM = function () {
    this.handleClick_ = this.handleClickEvent_.bind(this);
    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
    this.listen('keydown', this.handleKeydown_);
    this.listen('click', this.handleClick_);
    this.listen('focusin', this.focusInEventListener_);
    this.listen('focusout', this.focusOutEventListener_);
    this.layout();
    this.initializeListType();
  };

  MDCList.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten('click', this.handleClick_);
    this.unlisten('focusin', this.focusInEventListener_);
    this.unlisten('focusout', this.focusOutEventListener_);
  };

  MDCList.prototype.layout = function () {
    var direction = this.root_.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ORIENTATION);
    this.vertical = direction !== _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ORIENTATION_HORIZONTAL; // List items need to have at least tabindex=-1 to be focusable.

    [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (el) {
      el.setAttribute('tabindex', '-1');
    }); // Child button/a elements are not tabbable until the list item is focused.

    [].slice.call(this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].FOCUSABLE_CHILD_ELEMENTS)).forEach(function (el) {
      return el.setAttribute('tabindex', '-1');
    });
    this.foundation_.layout();
  };
  /**
   * Initialize selectedIndex value based on pre-selected checkbox list items, single selection or radio.
   */


  MDCList.prototype.initializeListType = function () {
    var _this = this;

    var checkboxListItems = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_ROLE_CHECKBOX_SELECTOR);
    var singleSelectedListItem = this.root_.querySelector("\n      ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_SELECTED_CLASS + "\n    ");
    var radioSelectedListItem = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_CHECKED_RADIO_SELECTOR);

    if (checkboxListItems.length) {
      var preselectedItems = this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_CHECKED_CHECKBOX_SELECTOR);
      this.selectedIndex = [].map.call(preselectedItems, function (listItem) {
        return _this.listElements.indexOf(listItem);
      });
    } else if (singleSelectedListItem) {
      if (singleSelectedListItem.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS)) {
        this.foundation_.setUseActivatedClass(true);
      }

      this.singleSelection = true;
      this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
    } else if (radioSelectedListItem) {
      this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
    }
  };
  /**
   * Updates the list item at itemIndex to the desired isEnabled state.
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCList.prototype.setEnabled = function (itemIndex, isEnabled) {
    this.foundation_.setEnabled(itemIndex, isEnabled);
  };

  MDCList.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClassForElementIndex: function addClassForElementIndex(index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.add(className);
        }
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = _this.listElements[index];

        if (element) {
          element.focus();
        }
      },
      getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
        return _this.listElements[index].getAttribute(attr);
      },
      getFocusedElementIndex: function getFocusedElementIndex() {
        return _this.listElements.indexOf(document.activeElement);
      },
      getListItemCount: function getListItemCount() {
        return _this.listElements.length;
      },
      hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_SELECTOR);
      },
      hasRadioAtIndex: function hasRadioAtIndex(index) {
        var listItem = _this.listElements[index];
        return !!listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].RADIO_SELECTOR);
      },
      isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_SELECTOR);
        return toggleEl.checked;
      },
      isFocusInsideList: function isFocusInsideList() {
        return _this.root_.contains(document.activeElement);
      },
      isRootFocused: function isRootFocused() {
        return document.activeElement === _this.root_;
      },
      listItemAtIndexHasClass: function listItemAtIndexHasClass(index, className) {
        return _this.listElements[index].classList.contains(className);
      },
      notifyAction: function notifyAction(index) {
        _this.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ACTION_EVENT, {
          index: index
        },
        /** shouldBubble */
        true);
      },
      removeClassForElementIndex: function removeClassForElementIndex(index, className) {
        var element = _this.listElements[index];

        if (element) {
          element.classList.remove(className);
        }
      },
      setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
        var element = _this.listElements[index];

        if (element) {
          element.setAttribute(attr, value);
        }
      },
      setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
        var listItem = _this.listElements[index];
        var toggleEl = listItem.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_RADIO_SELECTOR);
        toggleEl.checked = isChecked;
        var event = document.createEvent('Event');
        event.initEvent('change', true, true);
        toggleEl.dispatchEvent(event);
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = _this.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
        listItemChildren.forEach(function (el) {
          return el.setAttribute('tabindex', tabIndexValue);
        });
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"](adapter);
  };
  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */


  MDCList.prototype.getListItemIndex_ = function (evt) {
    var eventTarget = evt.target;
    var nearestParent = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(eventTarget, "." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS + ", ." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].ROOT); // Get the index of the element if it is a list item.

    if (nearestParent && Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(nearestParent, "." + _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS)) {
      return this.listElements.indexOf(nearestParent);
    }

    return -1;
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusInEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusIn(evt, index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleFocusOutEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusOut(evt, index);
  };
  /**
   * Used to figure out which element was focused when keydown event occurred before sending the event to the
   * foundation.
   */


  MDCList.prototype.handleKeydownEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target;
    this.foundation_.handleKeydown(evt, target.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].LIST_ITEM_CLASS), index);
  };
  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   */


  MDCList.prototype.handleClickEvent_ = function (evt) {
    var index = this.getListItemIndex_(evt);
    var target = evt.target; // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.

    var toggleCheckbox = !Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["matches"])(target, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].CHECKBOX_RADIO_SELECTOR);
    this.foundation_.handleClick(index, toggleCheckbox);
  };

  return MDCList;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/list/constants.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/list/constants.js ***!
  \**************************************************/
/*! exports provided: strings, cssClasses, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  ROOT: 'mdc-list'
};
var strings = {
  ACTION_EVENT: 'MDCList:action',
  ARIA_CHECKED: 'aria-checked',
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: 'aria-current',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: 'aria-selected',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled)\n  ",
  RADIO_SELECTOR: 'input[type="radio"]'
};
var numbers = {
  UNSET_INDEX: -1
};


/***/ }),

/***/ "./node_modules/@material/list/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/list/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCListFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCListFoundation", function() { return MDCListFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/list/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

function isNumberArray(selectedIndex) {
  return selectedIndex instanceof Array;
}

var MDCListFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCListFoundation, _super);

  function MDCListFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCListFoundation.defaultAdapter, adapter)) || this;

    _this.wrapFocus_ = false;
    _this.isVertical_ = true;
    _this.isSingleSelectionList_ = false;
    _this.selectedIndex_ = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX;
    _this.focusedItemIndex_ = _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX;
    _this.useActivatedClass_ = false;
    _this.ariaCurrentAttrValue_ = null;
    _this.isCheckboxList_ = false;
    _this.isRadioList_ = false;
    return _this;
  }

  Object.defineProperty(MDCListFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCListFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClassForElementIndex: function addClassForElementIndex() {
          return undefined;
        },
        focusItemAtIndex: function focusItemAtIndex() {
          return undefined;
        },
        getAttributeForElementIndex: function getAttributeForElementIndex() {
          return null;
        },
        getFocusedElementIndex: function getFocusedElementIndex() {
          return 0;
        },
        getListItemCount: function getListItemCount() {
          return 0;
        },
        hasCheckboxAtIndex: function hasCheckboxAtIndex() {
          return false;
        },
        hasRadioAtIndex: function hasRadioAtIndex() {
          return false;
        },
        isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
          return false;
        },
        isFocusInsideList: function isFocusInsideList() {
          return false;
        },
        isRootFocused: function isRootFocused() {
          return false;
        },
        listItemAtIndexHasClass: function listItemAtIndexHasClass() {
          return false;
        },
        notifyAction: function notifyAction() {
          return undefined;
        },
        removeClassForElementIndex: function removeClassForElementIndex() {
          return undefined;
        },
        setAttributeForElementIndex: function setAttributeForElementIndex() {
          return undefined;
        },
        setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
          return undefined;
        },
        setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCListFoundation.prototype.layout = function () {
    if (this.adapter_.getListItemCount() === 0) {
      return;
    }

    if (this.adapter_.hasCheckboxAtIndex(0)) {
      this.isCheckboxList_ = true;
    } else if (this.adapter_.hasRadioAtIndex(0)) {
      this.isRadioList_ = true;
    }
  };
  /**
   * Sets the private wrapFocus_ variable.
   */


  MDCListFoundation.prototype.setWrapFocus = function (value) {
    this.wrapFocus_ = value;
  };
  /**
   * Sets the isVertical_ private variable.
   */


  MDCListFoundation.prototype.setVerticalOrientation = function (value) {
    this.isVertical_ = value;
  };
  /**
   * Sets the isSingleSelectionList_ private variable.
   */


  MDCListFoundation.prototype.setSingleSelection = function (value) {
    this.isSingleSelectionList_ = value;
  };
  /**
   * Sets the useActivatedClass_ private variable.
   */


  MDCListFoundation.prototype.setUseActivatedClass = function (useActivated) {
    this.useActivatedClass_ = useActivated;
  };

  MDCListFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCListFoundation.prototype.setSelectedIndex = function (index) {
    if (!this.isIndexValid_(index)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.setCheckboxAtIndex_(index);
    } else if (this.isRadioList_) {
      this.setRadioAtIndex_(index);
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  };
  /**
   * Focus in handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusIn = function (_, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '0');
    }
  };
  /**
   * Focus out handler for the list items.
   */


  MDCListFoundation.prototype.handleFocusOut = function (_, listItemIndex) {
    var _this = this;

    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, '-1');
    }
    /**
     * Between Focusout & Focusin some browsers do not have focus on any element. Setting a delay to wait till the focus
     * is moved to next element.
     */


    setTimeout(function () {
      if (!_this.adapter_.isFocusInsideList()) {
        _this.setTabindexToFirstSelectedItem_();
      }
    }, 0);
  };
  /**
   * Key handler for the list.
   */


  MDCListFoundation.prototype.handleKeydown = function (evt, isRootListItem, listItemIndex) {
    var isArrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
    var isArrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
    var isArrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
    var isArrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
    var isHome = evt.key === 'Home' || evt.keyCode === 36;
    var isEnd = evt.key === 'End' || evt.keyCode === 35;
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
    var isSpace = evt.key === 'Space' || evt.keyCode === 32;

    if (this.adapter_.isRootFocused()) {
      if (isArrowUp || isEnd) {
        evt.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        evt.preventDefault();
        this.focusFirstElement();
      }

      return;
    }

    var currentIndex = this.adapter_.getFocusedElementIndex();

    if (currentIndex === -1) {
      currentIndex = listItemIndex;

      if (currentIndex < 0) {
        // If this event doesn't have a mdc-list-item ancestor from the
        // current list (not from a sublist), return early.
        return;
      }
    }

    var nextIndex;

    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent_(evt);
      nextIndex = this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        // Return early if enter key is pressed on anchor element which triggers synthetic MouseEvent event.
        var target = evt.target;

        if (target && target.tagName === 'A' && isEnter) {
          return;
        }

        this.preventDefaultEvent_(evt);

        if (this.isSelectableList_()) {
          this.setSelectedIndexOnAction_(currentIndex);
        }

        this.adapter_.notifyAction(currentIndex);
      }
    }

    this.focusedItemIndex_ = currentIndex;

    if (nextIndex !== undefined) {
      this.setTabindexAtIndex_(nextIndex);
      this.focusedItemIndex_ = nextIndex;
    }
  };
  /**
   * Click handler for the list.
   */


  MDCListFoundation.prototype.handleClick = function (index, toggleCheckbox) {
    if (index === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      return;
    }

    if (this.isSelectableList_()) {
      this.setSelectedIndexOnAction_(index, toggleCheckbox);
    }

    this.adapter_.notifyAction(index);
    this.setTabindexAtIndex_(index);
    this.focusedItemIndex_ = index;
  };
  /**
   * Focuses the next element on the list.
   */


  MDCListFoundation.prototype.focusNextElement = function (index) {
    var count = this.adapter_.getListItemCount();
    var nextIndex = index + 1;

    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(nextIndex);
    return nextIndex;
  };
  /**
   * Focuses the previous element on the list.
   */


  MDCListFoundation.prototype.focusPrevElement = function (index) {
    var prevIndex = index - 1;

    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter_.getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return index;
      }
    }

    this.adapter_.focusItemAtIndex(prevIndex);
    return prevIndex;
  };

  MDCListFoundation.prototype.focusFirstElement = function () {
    this.adapter_.focusItemAtIndex(0);
    return 0;
  };

  MDCListFoundation.prototype.focusLastElement = function () {
    var lastIndex = this.adapter_.getListItemCount() - 1;
    this.adapter_.focusItemAtIndex(lastIndex);
    return lastIndex;
  };
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */


  MDCListFoundation.prototype.setEnabled = function (itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }

    if (isEnabled) {
      this.adapter_.removeClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_DISABLED, 'false');
    } else {
      this.adapter_.addClassForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
      this.adapter_.setAttributeForElementIndex(itemIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_DISABLED, 'true');
    }
  };
  /**
   * Ensures that preventDefault is only called if the containing element doesn't
   * consume the event, and it will cause an unintended scroll.
   */


  MDCListFoundation.prototype.preventDefaultEvent_ = function (evt) {
    var target = evt.target;
    var tagName = ("" + target.tagName).toLowerCase();

    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  };

  MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function (index) {
    if (this.selectedIndex_ === index) {
      return;
    }

    var selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_SELECTED_CLASS;

    if (this.useActivatedClass_) {
      selectedClassName = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_ACTIVATED_CLASS;
    }

    if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
    }

    this.adapter_.addClassForElementIndex(index, selectedClassName);
    this.setAriaForSingleSelectionAtIndex_(index);
    this.selectedIndex_ = index;
  };
  /**
   * Sets aria attribute for single selection at given index.
   */


  MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function (index) {
    // Detect the presence of aria-current and get the value only during list initialization when it is in unset state.
    if (this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CURRENT);
    }

    var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    var ariaAttribute = isAriaCurrent ? _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CURRENT : _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED;

    if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, 'false');
    }

    var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : 'true';
    this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
  };
  /**
   * Toggles radio at give index. Radio doesn't change the checked state if it is already checked.
   */


  MDCListFoundation.prototype.setRadioAtIndex_ = function (index) {
    this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);

    if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, 'false');
    }

    this.adapter_.setAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, 'true');
    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setCheckboxAtIndex_ = function (index) {
    for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
      var isChecked = false;

      if (index.indexOf(i) >= 0) {
        isChecked = true;
      }

      this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
      this.adapter_.setAttributeForElementIndex(i, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, isChecked ? 'true' : 'false');
    }

    this.selectedIndex_ = index;
  };

  MDCListFoundation.prototype.setTabindexAtIndex_ = function (index) {
    if (this.focusedItemIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX && index !== 0) {
      // If no list item was selected set first list item's tabindex to -1.
      // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
      this.adapter_.setAttributeForElementIndex(0, 'tabindex', '-1');
    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
      this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, 'tabindex', '-1');
    }

    this.adapter_.setAttributeForElementIndex(index, 'tabindex', '0');
  };
  /**
   * @return Return true if it is single selectin list, checkbox list or radio list.
   */


  MDCListFoundation.prototype.isSelectableList_ = function () {
    return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
  };

  MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function () {
    var targetIndex = 0;

    if (this.isSelectableList_()) {
      if (typeof this.selectedIndex_ === 'number' && this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX) {
        targetIndex = this.selectedIndex_;
      } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
        targetIndex = this.selectedIndex_.reduce(function (currentIndex, minIndex) {
          return Math.min(currentIndex, minIndex);
        });
      }
    }

    this.setTabindexAtIndex_(targetIndex);
  };

  MDCListFoundation.prototype.isIndexValid_ = function (index) {
    var _this = this;

    if (index instanceof Array) {
      if (!this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Array of index is only supported for checkbox based list');
      }

      if (index.length === 0) {
        return true;
      } else {
        return index.some(function (i) {
          return _this.isIndexInRange_(i);
        });
      }
    } else if (typeof index === 'number') {
      if (this.isCheckboxList_) {
        throw new Error('MDCListFoundation: Expected array of index for checkbox based list but got number: ' + index);
      }

      return this.isIndexInRange_(index);
    } else {
      return false;
    }
  };

  MDCListFoundation.prototype.isIndexInRange_ = function (index) {
    var listSize = this.adapter_.getListItemCount();
    return index >= 0 && index < listSize;
  };
  /**
   * Sets selected index on user action, toggles checkbox / radio based on toggleCheckbox value.
   * User interaction should not toggle list item(s) when disabled.
   */


  MDCListFoundation.prototype.setSelectedIndexOnAction_ = function (index, toggleCheckbox) {
    if (toggleCheckbox === void 0) {
      toggleCheckbox = true;
    }

    if (this.adapter_.listItemAtIndexHasClass(index, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS)) {
      return;
    }

    if (this.isCheckboxList_) {
      this.toggleCheckboxAtIndex_(index, toggleCheckbox);
    } else {
      this.setSelectedIndex(index);
    }
  };

  MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function (index, toggleCheckbox) {
    var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);

    if (toggleCheckbox) {
      isChecked = !isChecked;
      this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
    }

    this.adapter_.setAttributeForElementIndex(index, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED, isChecked ? 'true' : 'false'); // If none of the checkbox items are selected and selectedIndex is not initialized then provide a default value.

    var selectedIndexes = this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].UNSET_INDEX ? [] : this.selectedIndex_.slice();

    if (isChecked) {
      selectedIndexes.push(index);
    } else {
      selectedIndexes = selectedIndexes.filter(function (i) {
        return i !== index;
      });
    }

    this.selectedIndex_ = selectedIndexes;
  };

  return MDCListFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCListFoundation);

/***/ }),

/***/ "./node_modules/@material/menu-surface/component.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/menu-surface/component.js ***!
  \**********************************************************/
/*! exports provided: MDCMenuSurface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuSurface", function() { return MDCMenuSurface; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/menu-surface/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/menu-surface/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/@material/menu-surface/util.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCMenuSurface =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCMenuSurface, _super);

  function MDCMenuSurface() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenuSurface.attachTo = function (root) {
    return new MDCMenuSurface(root);
  };

  MDCMenuSurface.prototype.initialSyncWithDOM = function () {
    var _this = this;

    var parentEl = this.root_.parentElement;
    this.anchorElement = parentEl && parentEl.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ANCHOR) ? parentEl : null;

    if (this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].FIXED)) {
      this.setFixedPosition(true);
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleBodyClick_ = function (evt) {
      return _this.foundation_.handleBodyClick(evt);
    };

    this.registerBodyClickListener_ = function () {
      return document.body.addEventListener('click', _this.handleBodyClick_);
    };

    this.deregisterBodyClickListener_ = function () {
      return document.body.removeEventListener('click', _this.handleBodyClick_);
    };

    this.listen('keydown', this.handleKeydown_);
    this.listen(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].OPENED_EVENT, this.registerBodyClickListener_);
    this.listen(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSED_EVENT, this.deregisterBodyClickListener_);
  };

  MDCMenuSurface.prototype.destroy = function () {
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].OPENED_EVENT, this.registerBodyClickListener_);
    this.unlisten(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].CLOSED_EVENT, this.deregisterBodyClickListener_);

    _super.prototype.destroy.call(this);
  };

  MDCMenuSurface.prototype.isOpen = function () {
    return this.foundation_.isOpen();
  };

  MDCMenuSurface.prototype.open = function () {
    this.foundation_.open();
  };

  MDCMenuSurface.prototype.close = function (skipRestoreFocus) {
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }

    this.foundation_.close(skipRestoreFocus);
  };

  Object.defineProperty(MDCMenuSurface.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.foundation_.setQuickOpen(quickOpen);
    },
    enumerable: true,
    configurable: true
  });
  /** Sets the foundation to use page offsets for an positioning when the menu is hoisted to the body. */

  MDCMenuSurface.prototype.setIsHoisted = function (isHoisted) {
    this.foundation_.setIsHoisted(isHoisted);
  };
  /** Sets the element that the menu-surface is anchored to. */


  MDCMenuSurface.prototype.setMenuSurfaceAnchorElement = function (element) {
    this.anchorElement = element;
  };
  /** Sets the menu-surface to position: fixed. */


  MDCMenuSurface.prototype.setFixedPosition = function (isFixed) {
    if (isFixed) {
      this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].FIXED);
    } else {
      this.root_.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].FIXED);
    }

    this.foundation_.setFixedPosition(isFixed);
  };
  /** Sets the absolute x/y position to position based on. Requires the menu to be hoisted. */


  MDCMenuSurface.prototype.setAbsolutePosition = function (x, y) {
    this.foundation_.setAbsolutePosition(x, y);
    this.setIsHoisted(true);
  };
  /**
   * @param corner Default anchor corner alignment of top-left surface corner.
   */


  MDCMenuSurface.prototype.setAnchorCorner = function (corner) {
    this.foundation_.setAnchorCorner(corner);
  };

  MDCMenuSurface.prototype.setAnchorMargin = function (margin) {
    this.foundation_.setAnchorMargin(margin);
  };

  MDCMenuSurface.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      hasAnchor: function hasAnchor() {
        return !!_this.anchorElement;
      },
      notifyClose: function notifyClose() {
        return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCMenuSurfaceFoundation"].strings.CLOSED_EVENT, {});
      },
      notifyOpen: function notifyOpen() {
        return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCMenuSurfaceFoundation"].strings.OPENED_EVENT, {});
      },
      isElementInContainer: function isElementInContainer(el) {
        return _this.root_.contains(el);
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      setTransformOrigin: function setTransformOrigin(origin) {
        var propertyName = _util__WEBPACK_IMPORTED_MODULE_4__["getTransformPropertyName"](window) + "-origin";

        _this.root_.style.setProperty(propertyName, origin);
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.root_;
      },
      saveFocus: function saveFocus() {
        _this.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        if (_this.root_.contains(document.activeElement)) {
          if (_this.previousFocus_ && _this.previousFocus_.focus) {
            _this.previousFocus_.focus();
          }
        }
      },
      getInnerDimensions: function getInnerDimensions() {
        return {
          width: _this.root_.offsetWidth,
          height: _this.root_.offsetHeight
        };
      },
      getAnchorDimensions: function getAnchorDimensions() {
        return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
      },
      getWindowDimensions: function getWindowDimensions() {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      getBodyDimensions: function getBodyDimensions() {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      },
      getWindowScroll: function getWindowScroll() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      setPosition: function setPosition(position) {
        _this.root_.style.left = 'left' in position ? position.left + "px" : '';
        _this.root_.style.right = 'right' in position ? position.right + "px" : '';
        _this.root_.style.top = 'top' in position ? position.top + "px" : '';
        _this.root_.style.bottom = 'bottom' in position ? position.bottom + "px" : '';
      },
      setMaxHeight: function setMaxHeight(height) {
        _this.root_.style.maxHeight = height;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_3__["MDCMenuSurfaceFoundation"](adapter);
  };

  return MDCMenuSurface;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/menu-surface/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/menu-surface/constants.js ***!
  \**********************************************************/
/*! exports provided: cssClasses, strings, numbers, CornerBit, Corner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerBit", function() { return CornerBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corner", function() { return Corner; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ANCHOR: 'mdc-menu-surface--anchor',
  ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
  ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
  FIXED: 'mdc-menu-surface--fixed',
  OPEN: 'mdc-menu-surface--open',
  ROOT: 'mdc-menu-surface'
}; // tslint:disable:object-literal-sort-keys

var strings = {
  CLOSED_EVENT: 'MDCMenuSurface:closed',
  OPENED_EVENT: 'MDCMenuSurface:opened',
  FOCUSABLE_ELEMENTS: ['button:not(:disabled)', '[href]:not([aria-disabled="true"])', 'input:not(:disabled)', 'select:not(:disabled)', 'textarea:not(:disabled)', '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(', ')
}; // tslint:enable:object-literal-sort-keys

var numbers = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,

  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,

  /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. */
  MARGIN_TO_EDGE: 32,

  /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */

var CornerBit;

(function (CornerBit) {
  CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
  CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
  CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
  CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */


var Corner;

(function (Corner) {
  Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner[Corner["TOP_START"] = 8] = "TOP_START";
  Corner[Corner["TOP_END"] = 12] = "TOP_END";
  Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));



/***/ }),

/***/ "./node_modules/@material/menu-surface/foundation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material/menu-surface/foundation.js ***!
  \***********************************************************/
/*! exports provided: MDCMenuSurfaceFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuSurfaceFoundation", function() { return MDCMenuSurfaceFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/menu-surface/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCMenuSurfaceFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCMenuSurfaceFoundation, _super);

  function MDCMenuSurfaceFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCMenuSurfaceFoundation.defaultAdapter, adapter)) || this;

    _this.isOpen_ = false;
    _this.isQuickOpen_ = false;
    _this.isHoistedElement_ = false;
    _this.isFixedPosition_ = false;
    _this.openAnimationEndTimerId_ = 0;
    _this.closeAnimationEndTimerId_ = 0;
    _this.animationRequestId_ = 0;
    _this.anchorCorner_ = _constants__WEBPACK_IMPORTED_MODULE_2__["Corner"].TOP_START;
    _this.anchorMargin_ = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    _this.position_ = {
      x: 0,
      y: 0
    };
    return _this;
  }

  Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["Corner"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        hasAnchor: function hasAnchor() {
          return false;
        },
        isElementInContainer: function isElementInContainer() {
          return false;
        },
        isFocused: function isFocused() {
          return false;
        },
        isRtl: function isRtl() {
          return false;
        },
        getInnerDimensions: function getInnerDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return null;
        },
        getWindowDimensions: function getWindowDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getBodyDimensions: function getBodyDimensions() {
          return {
            height: 0,
            width: 0
          };
        },
        getWindowScroll: function getWindowScroll() {
          return {
            x: 0,
            y: 0
          };
        },
        setPosition: function setPosition() {
          return undefined;
        },
        setMaxHeight: function setMaxHeight() {
          return undefined;
        },
        setTransformOrigin: function setTransformOrigin() {
          return undefined;
        },
        saveFocus: function saveFocus() {
          return undefined;
        },
        restoreFocus: function restoreFocus() {
          return undefined;
        },
        notifyClose: function notifyClose() {
          return undefined;
        },
        notifyOpen: function notifyOpen() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCMenuSurfaceFoundation.prototype.init = function () {
    var _a = MDCMenuSurfaceFoundation.cssClasses,
        ROOT = _a.ROOT,
        OPEN = _a.OPEN;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(ROOT + " class required in root element.");
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    }
  };

  MDCMenuSurfaceFoundation.prototype.destroy = function () {
    clearTimeout(this.openAnimationEndTimerId_);
    clearTimeout(this.closeAnimationEndTimerId_); // Cancel any currently running animations.

    cancelAnimationFrame(this.animationRequestId_);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu surface corner.
   */


  MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
    this.anchorCorner_ = corner;
  };
  /**
   * @param margin Set of margin values from anchor.
   */


  MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
    this.anchorMargin_.top = margin.top || 0;
    this.anchorMargin_.right = margin.right || 0;
    this.anchorMargin_.bottom = margin.bottom || 0;
    this.anchorMargin_.left = margin.left || 0;
  };
  /** Used to indicate if the menu-surface is hoisted to the body. */


  MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
    this.isHoistedElement_ = isHoisted;
  };
  /** Used to set the menu-surface calculations based on a fixed position menu. */


  MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
    this.isFixedPosition_ = isFixedPosition;
  };
  /** Sets the menu-surface position on the page. */


  MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
    this.position_.x = this.isFinite_(x) ? x : 0;
    this.position_.y = this.isFinite_(y) ? y : 0;
  };

  MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
    this.isQuickOpen_ = quickOpen;
  };

  MDCMenuSurfaceFoundation.prototype.isOpen = function () {
    return this.isOpen_;
  };
  /**
   * Open the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.open = function () {
    var _this = this;

    this.adapter_.saveFocus();

    if (!this.isQuickOpen_) {
      this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
    }

    this.animationRequestId_ = requestAnimationFrame(function () {
      _this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

      _this.dimensions_ = _this.adapter_.getInnerDimensions();

      _this.autoPosition_();

      if (_this.isQuickOpen_) {
        _this.adapter_.notifyOpen();
      } else {
        _this.openAnimationEndTimerId_ = setTimeout(function () {
          _this.openAnimationEndTimerId_ = 0;

          _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);

          _this.adapter_.notifyOpen();
        }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].TRANSITION_OPEN_DURATION);
      }
    });
    this.isOpen_ = true;
  };
  /**
   * Closes the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
    var _this = this;

    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }

    if (!this.isQuickOpen_) {
      this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
    }

    requestAnimationFrame(function () {
      _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);

      if (_this.isQuickOpen_) {
        _this.adapter_.notifyClose();
      } else {
        _this.closeAnimationEndTimerId_ = setTimeout(function () {
          _this.closeAnimationEndTimerId_ = 0;

          _this.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);

          _this.adapter_.notifyClose();
        }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].TRANSITION_CLOSE_DURATION);
      }
    });
    this.isOpen_ = false;

    if (!skipRestoreFocus) {
      this.maybeRestoreFocus_();
    }
  };
  /** Handle clicks and close if not within menu-surface element. */


  MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
    var el = evt.target;

    if (this.adapter_.isElementInContainer(el)) {
      return;
    }

    this.close();
  };
  /** Handle keys that close the surface. */


  MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
    var keyCode = evt.keyCode,
        key = evt.key;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEscape) {
      this.close();
    }
  };

  MDCMenuSurfaceFoundation.prototype.autoPosition_ = function () {
    var _a; // Compute measurements for autoposition methods reuse.


    this.measurements_ = this.getAutoLayoutMeasurements_();
    var corner = this.getOriginCorner_();
    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
    var verticalAlignment = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM) ? 'bottom' : 'top';
    var horizontalAlignment = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT) ? 'right' : 'left';
    var horizontalOffset = this.getHorizontalOriginOffset_(corner);
    var verticalOffset = this.getVerticalOriginOffset_(corner);
    var _b = this.measurements_,
        anchorSize = _b.anchorSize,
        surfaceSize = _b.surfaceSize;
    var position = (_a = {}, _a[horizontalAlignment] = horizontalOffset, _a[verticalAlignment] = verticalOffset, _a); // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.

    if (anchorSize.width / surfaceSize.width > _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
      horizontalAlignment = 'center';
    } // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element


    if (this.isHoistedElement_ || this.isFixedPosition_) {
      this.adjustPositionForHoistedElement_(position);
    }

    this.adapter_.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
    this.adapter_.setPosition(position);
    this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
  };
  /**
   * @return Measurements used to position menu surface popup.
   */


  MDCMenuSurfaceFoundation.prototype.getAutoLayoutMeasurements_ = function () {
    var anchorRect = this.adapter_.getAnchorDimensions();
    var bodySize = this.adapter_.getBodyDimensions();
    var viewportSize = this.adapter_.getWindowDimensions();
    var windowScroll = this.adapter_.getWindowScroll();

    if (!anchorRect) {
      // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
      anchorRect = {
        top: this.position_.y,
        right: this.position_.x,
        bottom: this.position_.y,
        left: this.position_.x,
        width: 0,
        height: 0
      }; // tslint:enable:object-literal-sort-keys
    }

    return {
      anchorSize: anchorRect,
      bodySize: bodySize,
      surfaceSize: this.dimensions_,
      viewportDistance: {
        // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left
      },
      viewportSize: viewportSize,
      windowScroll: windowScroll
    };
  };
  /**
   * Computes the corner of the anchor from which to animate and position the menu surface.
   */


  MDCMenuSurfaceFoundation.prototype.getOriginCorner_ = function () {
    // Defaults: open from the top left.
    var corner = _constants__WEBPACK_IMPORTED_MODULE_2__["Corner"].TOP_LEFT;
    var _a = this.measurements_,
        viewportDistance = _a.viewportDistance,
        anchorSize = _a.anchorSize,
        surfaceSize = _a.surfaceSize;
    var isBottomAligned = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
    var availableTop = isBottomAligned ? viewportDistance.top + anchorSize.height + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
    var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorSize.height - this.anchorMargin_.top;
    var topOverflow = surfaceSize.height - availableTop;
    var bottomOverflow = surfaceSize.height - availableBottom;

    if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
      corner = this.setBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
    }

    var isRtl = this.adapter_.isRtl();
    var isFlipRtl = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].FLIP_RTL);
    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);
    var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
    var availableLeft = isAlignedRight ? viewportDistance.left + anchorSize.width + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
    var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorSize.width - this.anchorMargin_.left;
    var leftOverflow = surfaceSize.width - availableLeft;
    var rightOverflow = surfaceSize.width - availableRight;

    if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
      corner = this.setBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);
    }

    return corner;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
   */


  MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight_ = function (corner) {
    var viewportDistance = this.measurements_.viewportDistance;
    var maxHeight = 0;
    var isBottomAligned = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
    var isBottomAnchored = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE; // When maximum height is not specified, it is handled from CSS.

    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;

      if (!isBottomAnchored) {
        maxHeight += this.measurements_.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - MARGIN_TO_EDGE;

      if (isBottomAnchored) {
        maxHeight -= this.measurements_.anchorSize.height;
      }
    }

    return maxHeight;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
   */


  MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset_ = function (corner) {
    var anchorSize = this.measurements_.anchorSize; // isRightAligned corresponds to using the 'right' property on the surface.

    var isRightAligned = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);
    var avoidHorizontalOverlap = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].RIGHT);

    if (isRightAligned) {
      var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.left : this.anchorMargin_.right; // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
      // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
      // the right property is correct.

      if (this.isHoistedElement_ || this.isFixedPosition_) {
        return rightOffset - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width);
      }

      return rightOffset;
    }

    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin_.right : this.anchorMargin_.left;
  };
  /**
   * @param corner Origin corner of the menu surface.
   * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
   */


  MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset_ = function (corner) {
    var anchorSize = this.measurements_.anchorSize;
    var isBottomAligned = this.hasBit_(corner, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
    var avoidVerticalOverlap = this.hasBit_(this.anchorCorner_, _constants__WEBPACK_IMPORTED_MODULE_2__["CornerBit"].BOTTOM);
    var y = 0;

    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin_.top : -this.anchorMargin_.bottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin_.bottom : this.anchorMargin_.top;
    }

    return y;
  };
  /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */


  MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement_ = function (position) {
    var e_1, _a;

    var _b = this.measurements_,
        windowScroll = _b.windowScroll,
        viewportDistance = _b.viewportDistance;
    var props = Object.keys(position);

    try {
      for (var props_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        var value = position[prop] || 0; // Hoisted surfaces need to have the anchor elements location on the page added to the
        // position properties for proper alignment on the body.

        value += viewportDistance[prop]; // Surfaces that are absolutely positioned need to have additional calculations for scroll
        // and bottom positioning.

        if (!this.isFixedPosition_) {
          if (prop === 'top') {
            value += windowScroll.y;
          } else if (prop === 'bottom') {
            value -= windowScroll.y;
          } else if (prop === 'left') {
            value += windowScroll.x;
          } else {
            // prop === 'right'
            value -= windowScroll.x;
          }
        }

        position[prop] = value;
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1["return"])) _a.call(props_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };
  /**
   * The last focused element when the menu surface was opened should regain focus, if the user is
   * focused on or within the menu surface when it is closed.
   */


  MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus_ = function () {
    var isRootFocused = this.adapter_.isFocused();
    var childHasFocus = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);

    if (isRootFocused || childHasFocus) {
      this.adapter_.restoreFocus();
    }
  };

  MDCMenuSurfaceFoundation.prototype.hasBit_ = function (corner, bit) {
    return Boolean(corner & bit); // tslint:disable-line:no-bitwise
  };

  MDCMenuSurfaceFoundation.prototype.setBit_ = function (corner, bit) {
    return corner | bit; // tslint:disable-line:no-bitwise
  };
  /**
   * isFinite that doesn't force conversion to number type.
   * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
   */


  MDCMenuSurfaceFoundation.prototype.isFinite_ = function (num) {
    return typeof num === 'number' && isFinite(num);
  };

  return MDCMenuSurfaceFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCMenuSurfaceFoundation);

/***/ }),

/***/ "./node_modules/@material/menu-surface/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/menu-surface/util.js ***!
  \*****************************************************/
/*! exports provided: getTransformPropertyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropertyName", function() { return getTransformPropertyName; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cachedCssTransformPropertyName_;
/**
 * Returns the name of the correct transform property to use on the current browser.
 */

function getTransformPropertyName(globalObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  if (cachedCssTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    cachedCssTransformPropertyName_ = 'transform' in el.style ? 'transform' : 'webkitTransform';
  }

  return cachedCssTransformPropertyName_;
}



/***/ }),

/***/ "./node_modules/@material/menu/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/menu/component.js ***!
  \**************************************************/
/*! exports provided: MDCMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenu", function() { return MDCMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/list/component */ "./node_modules/@material/list/component.js");
/* harmony import */ var _material_list_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/list/foundation */ "./node_modules/@material/list/foundation.js");
/* harmony import */ var _material_menu_surface_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/menu-surface/component */ "./node_modules/@material/menu-surface/component.js");
/* harmony import */ var _material_menu_surface_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/menu-surface/foundation */ "./node_modules/@material/menu-surface/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/menu/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/menu/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */










var MDCMenu =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCMenu, _super);

  function MDCMenu() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCMenu.attachTo = function (root) {
    return new MDCMenu(root);
  };

  MDCMenu.prototype.initialize = function (menuSurfaceFactory, listFactory) {
    if (menuSurfaceFactory === void 0) {
      menuSurfaceFactory = function menuSurfaceFactory(el) {
        return new _material_menu_surface_component__WEBPACK_IMPORTED_MODULE_5__["MDCMenuSurface"](el);
      };
    }

    if (listFactory === void 0) {
      listFactory = function listFactory(el) {
        return new _material_list_component__WEBPACK_IMPORTED_MODULE_3__["MDCList"](el);
      };
    }

    this.menuSurfaceFactory_ = menuSurfaceFactory;
    this.listFactory_ = listFactory;
  };

  MDCMenu.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
    var list = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_7__["strings"].LIST_SELECTOR);

    if (list) {
      this.list_ = this.listFactory_(list);
      this.list_.wrapFocus = true;
    } else {
      this.list_ = null;
    }

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleItemAction_ = function (evt) {
      return _this.foundation_.handleItemAction(_this.items[evt.detail.index]);
    };

    this.handleMenuSurfaceOpened_ = function () {
      return _this.foundation_.handleMenuSurfaceOpened();
    };

    this.menuSurface_.listen(_material_menu_surface_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCMenuSurfaceFoundation"].strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.listen('keydown', this.handleKeydown_);
    this.listen(_material_list_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"].strings.ACTION_EVENT, this.handleItemAction_);
  };

  MDCMenu.prototype.destroy = function () {
    if (this.list_) {
      this.list_.destroy();
    }

    this.menuSurface_.destroy();
    this.menuSurface_.unlisten(_material_menu_surface_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCMenuSurfaceFoundation"].strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
    this.unlisten('keydown', this.handleKeydown_);
    this.unlisten(_material_list_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCListFoundation"].strings.ACTION_EVENT, this.handleItemAction_);

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCMenu.prototype, "open", {
    get: function get() {
      return this.menuSurface_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.menuSurface_.open();
      } else {
        this.menuSurface_.close();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "wrapFocus", {
    get: function get() {
      return this.list_ ? this.list_.wrapFocus : false;
    },
    set: function set(value) {
      if (this.list_) {
        this.list_.wrapFocus = value;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "items", {
    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */
    get: function get() {
      return this.list_ ? this.list_.listElements : [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenu.prototype, "quickOpen", {
    set: function set(quickOpen) {
      this.menuSurface_.quickOpen = quickOpen;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   * @param focusState Default focus state.
   */

  MDCMenu.prototype.setDefaultFocusState = function (focusState) {
    this.foundation_.setDefaultFocusState(focusState);
  };
  /**
   * @param corner Default anchor corner alignment of top-left menu corner.
   */


  MDCMenu.prototype.setAnchorCorner = function (corner) {
    this.menuSurface_.setAnchorCorner(corner);
  };

  MDCMenu.prototype.setAnchorMargin = function (margin) {
    this.menuSurface_.setAnchorMargin(margin);
  };
  /**
   * Sets the list item as the selected row at the specified index.
   * @param index Index of list item within menu.
   */


  MDCMenu.prototype.setSelectedIndex = function (index) {
    this.foundation_.setSelectedIndex(index);
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenu.prototype.setEnabled = function (index, isEnabled) {
    this.foundation_.setEnabled(index, isEnabled);
  };
  /**
   * @return The item within the menu at the index specified.
   */


  MDCMenu.prototype.getOptionByIndex = function (index) {
    var items = this.items;

    if (index < items.length) {
      return this.items[index];
    } else {
      return null;
    }
  };

  MDCMenu.prototype.setFixedPosition = function (isFixed) {
    this.menuSurface_.setFixedPosition(isFixed);
  };

  MDCMenu.prototype.setIsHoisted = function (isHoisted) {
    this.menuSurface_.setIsHoisted(isHoisted);
  };

  MDCMenu.prototype.setAbsolutePosition = function (x, y) {
    this.menuSurface_.setAbsolutePosition(x, y);
  };
  /**
   * Sets the element that the menu-surface is anchored to.
   */


  MDCMenu.prototype.setAnchorElement = function (element) {
    this.menuSurface_.anchorElement = element;
  };

  MDCMenu.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.add(className);
      },
      removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
        var list = _this.items;
        list[index].classList.remove(className);
      },
      addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
        var list = _this.items;
        list[index].setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
        var list = _this.items;
        list[index].removeAttribute(attr);
      },
      elementContainsClass: function elementContainsClass(element, className) {
        return element.classList.contains(className);
      },
      closeSurface: function closeSurface(skipRestoreFocus) {
        return _this.menuSurface_.close(skipRestoreFocus);
      },
      getElementIndex: function getElementIndex(element) {
        return _this.items.indexOf(element);
      },
      notifySelected: function notifySelected(evtData) {
        return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["strings"].SELECTED_EVENT, {
          index: evtData.index,
          item: _this.items[evtData.index]
        });
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.items.length;
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        return _this.items[index].focus();
      },
      focusListRoot: function focusListRoot() {
        return _this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_7__["strings"].LIST_SELECTOR).focus();
      },
      isSelectableItemAtIndex: function isSelectableItemAtIndex(index) {
        return !!Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(_this.items[index], "." + _constants__WEBPACK_IMPORTED_MODULE_7__["cssClasses"].MENU_SELECTION_GROUP);
      },
      getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex(index) {
        var selectionGroupEl = Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_2__["closest"])(_this.items[index], "." + _constants__WEBPACK_IMPORTED_MODULE_7__["cssClasses"].MENU_SELECTION_GROUP);
        var selectedItemEl = selectionGroupEl.querySelector("." + _constants__WEBPACK_IMPORTED_MODULE_7__["cssClasses"].MENU_SELECTED_LIST_ITEM);
        return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_8__["MDCMenuFoundation"](adapter);
  };

  return MDCMenu;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/menu/constants.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/menu/constants.js ***!
  \**************************************************/
/*! exports provided: cssClasses, strings, numbers, DefaultFocusState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFocusState", function() { return DefaultFocusState; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
  MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
  ROOT: 'mdc-menu'
};
var strings = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_DISABLED_ATTR: 'aria-disabled',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: '.mdc-list',
  SELECTED_EVENT: 'MDCMenu:selected'
};
var numbers = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;

(function (DefaultFocusState) {
  DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
  DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));



/***/ }),

/***/ "./node_modules/@material/menu/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/menu/foundation.js ***!
  \***************************************************/
/*! exports provided: MDCMenuFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCMenuFoundation", function() { return MDCMenuFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _material_list_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/list/constants */ "./node_modules/@material/list/constants.js");
/* harmony import */ var _material_menu_surface_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/menu-surface/foundation */ "./node_modules/@material/menu-surface/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/menu/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCMenuFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCMenuFoundation, _super);

  function MDCMenuFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCMenuFoundation.defaultAdapter, adapter)) || this;

    _this.closeAnimationEndTimerId_ = 0;
    _this.defaultFocusState_ = _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].LIST_ROOT;
    return _this;
  }

  Object.defineProperty(MDCMenuFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_4__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_4__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
    /**
     * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClassToElementAtIndex: function addClassToElementAtIndex() {
          return undefined;
        },
        removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {
          return undefined;
        },
        addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {
          return undefined;
        },
        removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {
          return undefined;
        },
        elementContainsClass: function elementContainsClass() {
          return false;
        },
        closeSurface: function closeSurface() {
          return undefined;
        },
        getElementIndex: function getElementIndex() {
          return -1;
        },
        notifySelected: function notifySelected() {
          return undefined;
        },
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        focusItemAtIndex: function focusItemAtIndex() {
          return undefined;
        },
        focusListRoot: function focusListRoot() {
          return undefined;
        },
        getSelectedSiblingOfItemAtIndex: function getSelectedSiblingOfItemAtIndex() {
          return -1;
        },
        isSelectableItemAtIndex: function isSelectableItemAtIndex() {
          return false;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCMenuFoundation.prototype.destroy = function () {
    if (this.closeAnimationEndTimerId_) {
      clearTimeout(this.closeAnimationEndTimerId_);
    }

    this.adapter_.closeSurface();
  };

  MDCMenuFoundation.prototype.handleKeydown = function (evt) {
    var key = evt.key,
        keyCode = evt.keyCode;
    var isTab = key === 'Tab' || keyCode === 9;

    if (isTab) {
      this.adapter_.closeSurface(
      /** skipRestoreFocus */
      true);
    }
  };

  MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
    var _this = this;

    var index = this.adapter_.getElementIndex(listItem);

    if (index < 0) {
      return;
    }

    this.adapter_.notifySelected({
      index: index
    });
    this.adapter_.closeSurface(); // Wait for the menu to close before adding/removing classes that affect styles.

    this.closeAnimationEndTimerId_ = setTimeout(function () {
      // Recompute the index in case the menu contents have changed.
      var recomputedIndex = _this.adapter_.getElementIndex(listItem);

      if (_this.adapter_.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, _material_menu_surface_foundation__WEBPACK_IMPORTED_MODULE_3__["MDCMenuSurfaceFoundation"].numbers.TRANSITION_CLOSE_DURATION);
  };

  MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
    switch (this.defaultFocusState_) {
      case _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].FIRST_ITEM:
        this.adapter_.focusItemAtIndex(0);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].LAST_ITEM:
        this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_4__["DefaultFocusState"].NONE:
        // Do nothing.
        break;

      default:
        this.adapter_.focusListRoot();
        break;
    }
  };
  /**
   * Sets default focus state where the menu should focus every time when menu
   * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
   * default.
   */


  MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
    this.defaultFocusState_ = focusState;
  };
  /**
   * Selects the list item at `index` within the menu.
   * @param index Index of list item within the menu.
   */


  MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
    this.validatedIndex_(index);

    if (!this.adapter_.isSelectableItemAtIndex(index)) {
      throw new Error('MDCMenuFoundation: No selection group at specified index.');
    }

    var prevSelectedIndex = this.adapter_.getSelectedSiblingOfItemAtIndex(index);

    if (prevSelectedIndex >= 0) {
      this.adapter_.removeAttributeFromElementAtIndex(prevSelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_CHECKED_ATTR);
      this.adapter_.removeClassFromElementAtIndex(prevSelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].MENU_SELECTED_LIST_ITEM);
    }

    this.adapter_.addClassToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].MENU_SELECTED_LIST_ITEM);
    this.adapter_.addAttributeToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_CHECKED_ATTR, 'true');
  };
  /**
   * Sets the enabled state to isEnabled for the menu item at the given index.
   * @param index Index of the menu item
   * @param isEnabled The desired enabled state of the menu item.
   */


  MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
    this.validatedIndex_(index);

    if (isEnabled) {
      this.adapter_.removeClassFromElementAtIndex(index, _material_list_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_DISABLED_ATTR, 'false');
    } else {
      this.adapter_.addClassToElementAtIndex(index, _material_list_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].LIST_ITEM_DISABLED_CLASS);
      this.adapter_.addAttributeToElementAtIndex(index, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ARIA_DISABLED_ATTR, 'true');
    }
  };

  MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
    var menuSize = this.adapter_.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;

    if (!isIndexInRange) {
      throw new Error('MDCMenuFoundation: No list item at specified index.');
    }
  };

  return MDCMenuFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCMenuFoundation);

/***/ }),

/***/ "./node_modules/@material/notched-outline/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/component.js ***!
  \*************************************************************/
/*! exports provided: MDCNotchedOutline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function() { return MDCNotchedOutline; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/foundation */ "./node_modules/@material/floating-label/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/notched-outline/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






var MDCNotchedOutline =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutline, _super);

  function MDCNotchedOutline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCNotchedOutline.attachTo = function (root) {
    return new MDCNotchedOutline(root);
  };

  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
    this.notchElement_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__["strings"].NOTCH_ELEMENT_SELECTOR);
    var label = this.root_.querySelector('.' + _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabelFoundation"].cssClasses.ROOT);

    if (label) {
      label.style.transitionDuration = '0s';
      this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].OUTLINE_UPGRADED);
      requestAnimationFrame(function () {
        label.style.transitionDuration = '';
      });
    } else {
      this.root_.classList.add(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].NO_LABEL);
    }
  };
  /**
   * Updates classes and styles to open the notch to the specified width.
   * @param notchWidth The notch width in the outline.
   */


  MDCNotchedOutline.prototype.notch = function (notchWidth) {
    this.foundation_.notch(notchWidth);
  };
  /**
   * Updates classes and styles to close the notch.
   */


  MDCNotchedOutline.prototype.closeNotch = function () {
    this.foundation_.closeNotch();
  };

  MDCNotchedOutline.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNotchWidthProperty: function setNotchWidthProperty(width) {
        return _this.notchElement_.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function removeNotchWidthProperty() {
        return _this.notchElement_.style.removeProperty('width');
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCNotchedOutlineFoundation"](adapter);
  };

  return MDCNotchedOutline;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/notched-outline/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/constants.js ***!
  \*************************************************************/
/*! exports provided: cssClasses, numbers, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
var numbers = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
var cssClasses = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};


/***/ }),

/***/ "./node_modules/@material/notched-outline/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/notched-outline/foundation.js ***!
  \**************************************************************/
/*! exports provided: MDCNotchedOutlineFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function() { return MDCNotchedOutlineFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/notched-outline/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCNotchedOutlineFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCNotchedOutlineFoundation, _super);

  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setNotchWidthProperty: function setNotchWidthProperty() {
          return undefined;
        },
        removeNotchWidthProperty: function removeNotchWidthProperty() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */

  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    if (notchWidth > 0) {
      notchWidth += _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter_.setNotchWidthProperty(notchWidth);
    this.adapter_.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
    this.adapter_.removeNotchWidthProperty();
  };

  return MDCNotchedOutlineFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCNotchedOutlineFoundation);

/***/ }),

/***/ "./node_modules/@material/radio/component.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/radio/component.js ***!
  \***************************************************/
/*! exports provided: MDCRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRadio", function() { return MDCRadio; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/radio/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCRadio =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRadio, _super);

  function MDCRadio() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCRadio.attachTo = function (root) {
    return new MDCRadio(root);
  };

  Object.defineProperty(MDCRadio.prototype, "checked", {
    get: function get() {
      return this.nativeControl_.checked;
    },
    set: function set(checked) {
      this.nativeControl_.checked = checked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadio.prototype, "disabled", {
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadio.prototype, "value", {
    get: function get() {
      return this.nativeControl_.value;
    },
    set: function set(value) {
      this.nativeControl_.value = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadio.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });

  MDCRadio.prototype.destroy = function () {
    this.ripple_.destroy();

    _super.prototype.destroy.call(this);
  };

  MDCRadio.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCRadioFoundation"](adapter);
  };

  MDCRadio.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__["MDCRipple"].createAdapter(this), {
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.nativeControl_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.nativeControl_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction.
      // This is not the UI we desire.
      isSurfaceActive: function isSurfaceActive() {
        return false;
      },
      isUnbounded: function isUnbounded() {
        return true;
      }
    }); // tslint:enable:object-literal-sort-keys


    return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_3__["MDCRipple"](this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](adapter));
  };

  Object.defineProperty(MDCRadio.prototype, "nativeControl_", {
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCRadioFoundation"].strings.NATIVE_CONTROL_SELECTOR;
      var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);

      if (!el) {
        throw new Error("Radio component requires a " + NATIVE_CONTROL_SELECTOR + " element");
      }

      return el;
    },
    enumerable: true,
    configurable: true
  });
  return MDCRadio;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/radio/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/radio/constants.js ***!
  \***************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};
var cssClasses = {
  DISABLED: 'mdc-radio--disabled',
  ROOT: 'mdc-radio'
};


/***/ }),

/***/ "./node_modules/@material/radio/foundation.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/radio/foundation.js ***!
  \****************************************************/
/*! exports provided: MDCRadioFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRadioFoundation", function() { return MDCRadioFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/radio/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCRadioFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRadioFoundation, _super);

  function MDCRadioFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRadioFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCRadioFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadioFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        setNativeControlDisabled: function setNativeControlDisabled() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRadioFoundation.prototype.setDisabled = function (disabled) {
    var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  };

  return MDCRadioFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCRadioFoundation);

/***/ }),

/***/ "./node_modules/@material/radio/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/radio/index.js ***!
  \***********************************************/
/*! exports provided: MDCRadio, strings, cssClasses, MDCRadioFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/radio/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRadio", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCRadio"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/radio/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/radio/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCRadioFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCRadioFoundation"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCRipple =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function get() {
      return Boolean(this.unbounded_);
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCRippleFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return MDCRippleFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/ripple/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



 // Activation events registered on the root element of each instance for activation

var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        browserSupportsCssVars: function browserSupportsCssVars() {
          return true;
        },
        computeBoundingRect: function computeBoundingRect() {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function containsEventTarget() {
          return true;
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        deregisterResizeHandler: function deregisterResizeHandler() {
          return undefined;
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function isSurfaceActive() {
          return true;
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return true;
        },
        isUnbounded: function isUnbounded() {
          return true;
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        registerResizeHandler: function registerResizeHandler() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        updateCssVariable: function updateCssVariable() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function getBoundedRadius() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCRippleFoundation);

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/*! exports provided: supportsCssVariables, getNormalizedEventCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}

/***/ }),

/***/ "./node_modules/@material/select/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/select/component.js ***!
  \****************************************************/
/*! exports provided: MDCSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelect", function() { return MDCSelect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_floating_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/component */ "./node_modules/@material/floating-label/component.js");
/* harmony import */ var _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/line-ripple/component */ "./node_modules/@material/line-ripple/component.js");
/* harmony import */ var _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/menu-surface/constants */ "./node_modules/@material/menu-surface/constants.js");
/* harmony import */ var _material_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/menu/component */ "./node_modules/@material/menu/component.js");
/* harmony import */ var _material_menu_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/menu/constants */ "./node_modules/@material/menu/constants.js");
/* harmony import */ var _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/notched-outline/component */ "./node_modules/@material/notched-outline/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/foundation.js");
/* harmony import */ var _helper_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helper-text/component */ "./node_modules/@material/select/helper-text/component.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon/component */ "./node_modules/@material/select/icon/component.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */















var MDCSelect =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSelect, _super);

  function MDCSelect() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelect.attachTo = function (root) {
    return new MDCSelect(root);
  };

  MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new _material_floating_label_component__WEBPACK_IMPORTED_MODULE_2__["MDCFloatingLabel"](el);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_3__["MDCLineRipple"](el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_7__["MDCNotchedOutline"](el);
      };
    }

    if (menuFactory === void 0) {
      menuFactory = function menuFactory(el) {
        return new _material_menu_component__WEBPACK_IMPORTED_MODULE_5__["MDCMenu"](el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new _icon_component__WEBPACK_IMPORTED_MODULE_13__["MDCSelectIcon"](el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new _helper_text_component__WEBPACK_IMPORTED_MODULE_12__["MDCSelectHelperText"](el);
      };
    }

    this.selectAnchor_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].SELECT_ANCHOR_SELECTOR);
    this.selectedText_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].SELECTED_TEXT_SELECTOR);

    if (!this.selectedText_) {
      throw new Error('MDCSelect: Missing required element: The following selector must be present: ' + ("'" + _constants__WEBPACK_IMPORTED_MODULE_10__["strings"].SELECTED_TEXT_SELECTOR + "'"));
    }

    if (this.selectedText_.hasAttribute(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].ARIA_CONTROLS)) {
      var helperTextElement = document.getElementById(this.selectedText_.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].ARIA_CONTROLS));

      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }

    this.menuSetup_(menuFactory);
    var labelElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null;
    var leadingIcon = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].LEADING_ICON_SELECTOR);

    if (leadingIcon) {
      this.leadingIcon_ = iconFactory(leadingIcon);
    }

    if (!this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_10__["cssClasses"].OUTLINED)) {
      this.ripple_ = this.createRipple_();
    }
  };
  /**
   * Initializes the select's event listeners and internal state based
   * on the environment's state.
   */


  MDCSelect.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleChange_ = function () {
      return _this.foundation_.handleChange();
    };

    this.handleFocus_ = function () {
      return _this.foundation_.handleFocus();
    };

    this.handleBlur_ = function () {
      return _this.foundation_.handleBlur();
    };

    this.handleClick_ = function (evt) {
      _this.selectedText_.focus();

      _this.foundation_.handleClick(_this.getNormalizedXCoordinate_(evt));
    };

    this.handleKeydown_ = function (evt) {
      return _this.foundation_.handleKeydown(evt);
    };

    this.handleMenuItemAction_ = function (evt) {
      return _this.foundation_.handleMenuItemAction(evt.detail.index);
    };

    this.handleMenuOpened_ = function () {
      return _this.foundation_.handleMenuOpened();
    };

    this.handleMenuClosed_ = function () {
      return _this.foundation_.handleMenuClosed();
    };

    this.selectedText_.addEventListener('focus', this.handleFocus_);
    this.selectedText_.addEventListener('blur', this.handleBlur_);
    this.selectedText_.addEventListener('click', this.handleClick_);
    this.selectedText_.addEventListener('keydown', this.handleKeydown_);
    this.menu_.listen(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].CLOSED_EVENT, this.handleMenuClosed_);
    this.menu_.listen(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].OPENED_EVENT, this.handleMenuOpened_);
    this.menu_.listen(_material_menu_constants__WEBPACK_IMPORTED_MODULE_6__["strings"].SELECTED_EVENT, this.handleMenuItemAction_);
    this.foundation_.init(); // Sets disabled state in foundation

    this.disabled = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_10__["cssClasses"].DISABLED);
  };

  MDCSelect.prototype.destroy = function () {
    this.selectedText_.removeEventListener('change', this.handleChange_);
    this.selectedText_.removeEventListener('focus', this.handleFocus_);
    this.selectedText_.removeEventListener('blur', this.handleBlur_);
    this.selectedText_.removeEventListener('keydown', this.handleKeydown_);
    this.selectedText_.removeEventListener('click', this.handleClick_);
    this.menu_.unlisten(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].CLOSED_EVENT, this.handleMenuClosed_);
    this.menu_.unlisten(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].OPENED_EVENT, this.handleMenuOpened_);
    this.menu_.unlisten(_material_menu_constants__WEBPACK_IMPORTED_MODULE_6__["strings"].SELECTED_EVENT, this.handleMenuItemAction_);
    this.menu_.destroy();

    if (this.ripple_) {
      this.ripple_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    _super.prototype.destroy.call(this);
  };

  Object.defineProperty(MDCSelect.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex,
      /** closeMenu */
      true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "disabled", {
    get: function get() {
      return this.foundation_.getDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
    /**
     * Sets the text content of the helper text.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "valid", {
    /**
     * Checks if the select is in a valid state.
     */
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * Sets the current invalid state of the select.
     */
    set: function set(isValid) {
      this.foundation_.setValid(isValid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelect.prototype, "required", {
    /**
     * Returns whether the select is required.
     */
    get: function get() {
      return this.foundation_.getRequired();
    },

    /**
     * Sets the control to the required state.
     */
    set: function set(isRequired) {
      this.foundation_.setRequired(isRequired);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Recomputes the outline SVG path for the outline element.
   */

  MDCSelect.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCSelect.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_());

    return new _foundation__WEBPACK_IMPORTED_MODULE_11__["MDCSelectFoundation"](adapter, this.getFoundationMap_());
  };
  /**
   * Handles setup for the menu.
   */


  MDCSelect.prototype.menuSetup_ = function (menuFactory) {
    this.menuElement_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].MENU_SELECTOR);
    this.menu_ = menuFactory(this.menuElement_);
  };

  MDCSelect.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_8__["MDCRipple"].createAdapter({
      root_: this.selectAnchor_
    }), {
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.selectedText_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.selectedText_.removeEventListener(evtType, handler);
      }
    }); // tslint:enable:object-literal-sort-keys


    return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_8__["MDCRipple"](this.selectAnchor_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_9__["MDCRippleFoundation"](adapter));
  };

  MDCSelect.prototype.getSelectAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getSelectedMenuItem: function getSelectedMenuItem() {
        return _this.menuElement_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].SELECTED_ITEM_SELECTOR);
      },
      getMenuItemAttr: function getMenuItemAttr(menuItem, attr) {
        return menuItem.getAttribute(attr);
      },
      setSelectedText: function setSelectedText(text) {
        return _this.selectedText_.textContent = text;
      },
      isSelectedTextFocused: function isSelectedTextFocused() {
        return document.activeElement === _this.selectedText_;
      },
      getSelectedTextAttr: function getSelectedTextAttr(attr) {
        return _this.selectedText_.getAttribute(attr);
      },
      setSelectedTextAttr: function setSelectedTextAttr(attr, value) {
        return _this.selectedText_.setAttribute(attr, value);
      },
      openMenu: function openMenu() {
        return _this.menu_.open = true;
      },
      closeMenu: function closeMenu() {
        return _this.menu_.open = false;
      },
      getAnchorElement: function getAnchorElement() {
        return _this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].SELECT_ANCHOR_SELECTOR);
      },
      setMenuAnchorElement: function setMenuAnchorElement(anchorEl) {
        return _this.menu_.setAnchorElement(anchorEl);
      },
      setMenuAnchorCorner: function setMenuAnchorCorner(anchorCorner) {
        return _this.menu_.setAnchorCorner(anchorCorner);
      },
      setMenuWrapFocus: function setMenuWrapFocus(wrapFocus) {
        return _this.menu_.wrapFocus = wrapFocus;
      },
      setAttributeAtIndex: function setAttributeAtIndex(index, attributeName, attributeValue) {
        return _this.menu_.items[index].setAttribute(attributeName, attributeValue);
      },
      removeAttributeAtIndex: function removeAttributeAtIndex(index, attributeName) {
        return _this.menu_.items[index].removeAttribute(attributeName);
      },
      focusMenuItemAtIndex: function focusMenuItemAtIndex(index) {
        return _this.menu_.items[index].focus();
      },
      getMenuItemCount: function getMenuItemCount() {
        return _this.menu_.items.length;
      },
      getMenuItemValues: function getMenuItemValues() {
        return _this.menu_.items.map(function (el) {
          return el.getAttribute(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].VALUE_ATTR) || '';
        });
      },
      getMenuItemTextAtIndex: function getMenuItemTextAtIndex(index) {
        return _this.menu_.items[index].textContent;
      },
      addClassAtIndex: function addClassAtIndex(index, className) {
        return _this.menu_.items[index].classList.add(className);
      },
      removeClassAtIndex: function removeClassAtIndex(index, className) {
        return _this.menu_.items[index].classList.remove(className);
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getCommonAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setRippleCenter: function setRippleCenter(normalizedX) {
        return _this.lineRipple_ && _this.lineRipple_.setRippleCenter(normalizedX);
      },
      activateBottomLine: function activateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.activate();
      },
      deactivateBottomLine: function deactivateBottomLine() {
        return _this.lineRipple_ && _this.lineRipple_.deactivate();
      },
      notifyChange: function notifyChange(value) {
        var index = _this.selectedIndex;

        _this.emit(_constants__WEBPACK_IMPORTED_MODULE_10__["strings"].CHANGE_EVENT, {
          value: value,
          index: index
        }, true
        /* shouldBubble  */
        );
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      },
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCSelect.prototype.getLabelAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      hasLabel: function hasLabel() {
        return !!_this.label_;
      },
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_["float"](shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      }
    }; // tslint:enable:object-literal-sort-keys
  };
  /**
   * Calculates where the line ripple should start based on the x coordinate within the component.
   */


  MDCSelect.prototype.getNormalizedXCoordinate_ = function (evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var xCoordinate = this.isTouchEvent_(evt) ? evt.touches[0].clientX : evt.clientX;
    return xCoordinate - targetClientRect.left;
  };

  MDCSelect.prototype.isTouchEvent_ = function (evt) {
    return Boolean(evt.touches);
  };
  /**
   * Returns a map of all subcomponents to subfoundations.
   */


  MDCSelect.prototype.getFoundationMap_ = function () {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined
    };
  };

  return MDCSelect;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/select/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/select/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ACTIVATED: 'mdc-select--activated',
  DISABLED: 'mdc-select--disabled',
  FOCUSED: 'mdc-select--focused',
  INVALID: 'mdc-select--invalid',
  OUTLINED: 'mdc-select--outlined',
  REQUIRED: 'mdc-select--required',
  ROOT: 'mdc-select',
  SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
  WITH_LEADING_ICON: 'mdc-select--with-leading-icon'
};
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  ARIA_SELECTED_ATTR: 'aria-selected',
  CHANGE_EVENT: 'MDCSelect:change',
  LABEL_SELECTOR: '.mdc-floating-label',
  LEADING_ICON_SELECTOR: '.mdc-select__icon',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  MENU_SELECTOR: '.mdc-select__menu',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  SELECTED_ITEM_SELECTOR: "." + cssClasses.SELECTED_ITEM_CLASS,
  SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
  SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
  VALUE_ATTR: 'data-value'
};
var numbers = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1
};


/***/ }),

/***/ "./node_modules/@material/select/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/select/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCSelectFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() { return MDCSelectFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/menu-surface/constants */ "./node_modules/@material/menu-surface/constants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var MDCSelectFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSelectFoundation, _super);
  /* istanbul ignore next: optional argument is not a branch statement */

  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCSelectFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSelectFoundation.defaultAdapter, adapter)) || this; // Index of the currently selected menu item.


    _this.selectedIndex_ = _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX; // Disabled state

    _this.disabled_ = false; // isMenuOpen_ is used to track the state of the menu by listening to the MDCMenuSurface:closed event
    // For reference, menu.open will return false if the menu is still closing, but isMenuOpen_ returns false only after
    // the menu has closed

    _this.isMenuOpen_ = false;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.helperText_ = foundationMap.helperText;
    _this.menuItemValues_ = _this.adapter_.getMenuItemValues();
    return _this;
  }

  Object.defineProperty(MDCSelectFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_3__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        activateBottomLine: function activateBottomLine() {
          return undefined;
        },
        deactivateBottomLine: function deactivateBottomLine() {
          return undefined;
        },
        getSelectedMenuItem: function getSelectedMenuItem() {
          return null;
        },
        hasLabel: function hasLabel() {
          return false;
        },
        floatLabel: function floatLabel() {
          return undefined;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return false;
        },
        notchOutline: function notchOutline() {
          return undefined;
        },
        closeOutline: function closeOutline() {
          return undefined;
        },
        setRippleCenter: function setRippleCenter() {
          return undefined;
        },
        notifyChange: function notifyChange() {
          return undefined;
        },
        setSelectedText: function setSelectedText() {
          return undefined;
        },
        isSelectedTextFocused: function isSelectedTextFocused() {
          return false;
        },
        getSelectedTextAttr: function getSelectedTextAttr() {
          return '';
        },
        setSelectedTextAttr: function setSelectedTextAttr() {
          return undefined;
        },
        openMenu: function openMenu() {
          return undefined;
        },
        closeMenu: function closeMenu() {
          return undefined;
        },
        getAnchorElement: function getAnchorElement() {
          return null;
        },
        setMenuAnchorElement: function setMenuAnchorElement() {
          return undefined;
        },
        setMenuAnchorCorner: function setMenuAnchorCorner() {
          return undefined;
        },
        setMenuWrapFocus: function setMenuWrapFocus() {
          return undefined;
        },
        setAttributeAtIndex: function setAttributeAtIndex() {
          return undefined;
        },
        removeAttributeAtIndex: function removeAttributeAtIndex() {
          return undefined;
        },
        focusMenuItemAtIndex: function focusMenuItemAtIndex() {
          return undefined;
        },
        getMenuItemCount: function getMenuItemCount() {
          return 0;
        },
        getMenuItemValues: function getMenuItemValues() {
          return [];
        },
        getMenuItemTextAtIndex: function getMenuItemTextAtIndex() {
          return '';
        },
        getMenuItemAttr: function getMenuItemAttr() {
          return '';
        },
        addClassAtIndex: function addClassAtIndex() {
          return undefined;
        },
        removeClassAtIndex: function removeClassAtIndex() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /** Returns the index of the currently selected menu item, or -1 if none. */

  MDCSelectFoundation.prototype.getSelectedIndex = function () {
    return this.selectedIndex_;
  };

  MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu) {
    if (closeMenu === void 0) {
      closeMenu = false;
    }

    if (index >= this.adapter_.getMenuItemCount()) {
      return;
    }

    var previouslySelectedIndex = this.selectedIndex_;
    this.selectedIndex_ = index;

    if (this.selectedIndex_ === _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX) {
      this.adapter_.setSelectedText('');
    } else {
      this.adapter_.setSelectedText(this.adapter_.getMenuItemTextAtIndex(this.selectedIndex_).trim());
    }

    if (previouslySelectedIndex !== _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX) {
      this.adapter_.removeClassAtIndex(previouslySelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SELECTED_ITEM_CLASS);
      this.adapter_.removeAttributeAtIndex(previouslySelectedIndex, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_SELECTED_ATTR);
    }

    if (this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX) {
      this.adapter_.addClassAtIndex(this.selectedIndex_, _constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].SELECTED_ITEM_CLASS);
      this.adapter_.setAttributeAtIndex(this.selectedIndex_, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].ARIA_SELECTED_ATTR, 'true');
    }

    this.layout();

    if (closeMenu) {
      this.adapter_.closeMenu();
    }

    this.handleChange();
  };

  MDCSelectFoundation.prototype.setValue = function (value) {
    var index = this.menuItemValues_.indexOf(value);
    this.setSelectedIndex(index);
    this.handleChange();
  };

  MDCSelectFoundation.prototype.getValue = function () {
    var listItem = this.adapter_.getSelectedMenuItem();

    if (listItem) {
      return this.adapter_.getMenuItemAttr(listItem, _constants__WEBPACK_IMPORTED_MODULE_3__["strings"].VALUE_ATTR) || '';
    }

    return '';
  };

  MDCSelectFoundation.prototype.getDisabled = function () {
    return this.disabled_;
  };

  MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
    this.disabled_ = isDisabled;

    if (this.disabled_) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].DISABLED);
      this.adapter_.closeMenu();
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(this.disabled_);
    }

    this.adapter_.setSelectedTextAttr('tabindex', this.disabled_ ? '-1' : '0');
    this.adapter_.setSelectedTextAttr('aria-disabled', this.disabled_.toString());
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.layout = function () {
    if (this.adapter_.hasLabel()) {
      var openNotch = this.getValue().length > 0;
      this.notchOutline(openNotch);
    }
  };

  MDCSelectFoundation.prototype.handleMenuOpened = function () {
    if (this.adapter_.getMenuItemValues().length === 0) {
      return;
    }

    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].ACTIVATED); // Menu should open to the last selected element, should open to first menu item otherwise.

    var focusItemIndex = this.selectedIndex_ >= 0 ? this.selectedIndex_ : 0;
    this.adapter_.focusMenuItemAtIndex(focusItemIndex);
  };

  MDCSelectFoundation.prototype.handleMenuClosed = function () {
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].ACTIVATED);
    this.isMenuOpen_ = false;
    this.adapter_.setSelectedTextAttr('aria-expanded', 'false'); // Unfocus the select if menu is closed without a selection

    if (!this.adapter_.isSelectedTextFocused()) {
      this.blur_();
    }
  };
  /**
   * Handles value changes, via change event or programmatic updates.
   */


  MDCSelectFoundation.prototype.handleChange = function () {
    this.updateLabel_();
    this.adapter_.notifyChange(this.getValue());
    var isRequired = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);

    if (isRequired) {
      this.setValid(this.isValid());

      if (this.helperText_) {
        this.helperText_.setValidity(this.isValid());
      }
    }
  };

  MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
    this.setSelectedIndex(index,
    /** closeMenu */
    true);
  };
  /**
   * Handles focus events from select element.
   */


  MDCSelectFoundation.prototype.handleFocus = function () {
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(true);
      this.adapter_.floatLabel(true);
    }

    this.adapter_.activateBottomLine();

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Handles blur events from select element.
   */


  MDCSelectFoundation.prototype.handleBlur = function () {
    if (this.isMenuOpen_) {
      return;
    }

    this.blur_();
  };

  MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
    if (this.isMenuOpen_) {
      return;
    }

    this.adapter_.setRippleCenter(normalizedX);
    this.adapter_.openMenu();
    this.isMenuOpen_ = true;
    this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
  };

  MDCSelectFoundation.prototype.handleKeydown = function (event) {
    if (this.isMenuOpen_) {
      return;
    }

    var isEnter = event.key === 'Enter' || event.keyCode === 13;
    var isSpace = event.key === 'Space' || event.keyCode === 32;
    var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
    var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

    if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
      this.adapter_.openMenu();
      this.isMenuOpen_ = true;
      this.adapter_.setSelectedTextAttr('aria-expanded', 'true');
      event.preventDefault();
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    var isFocused = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED);

    if (openNotch) {
      var labelScale = _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else if (!isFocused) {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };

  MDCSelectFoundation.prototype.setValid = function (isValid) {
    this.adapter_.setSelectedTextAttr('aria-invalid', (!isValid).toString());

    if (isValid) {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INVALID);
    } else {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].INVALID);
    }
  };

  MDCSelectFoundation.prototype.isValid = function () {
    if (this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED) && !this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].DISABLED)) {
      // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
      // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
      return this.selectedIndex_ !== _constants__WEBPACK_IMPORTED_MODULE_3__["numbers"].UNSET_INDEX && (this.selectedIndex_ !== 0 || Boolean(this.getValue()));
    }

    return true;
  };

  MDCSelectFoundation.prototype.setRequired = function (isRequired) {
    if (isRequired) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);
    }

    this.adapter_.setSelectedTextAttr('aria-required', isRequired.toString());
  };

  MDCSelectFoundation.prototype.getRequired = function () {
    return this.adapter_.getSelectedTextAttr('aria-required') === 'true';
  };

  MDCSelectFoundation.prototype.init = function () {
    var anchorEl = this.adapter_.getAnchorElement();

    if (anchorEl) {
      this.adapter_.setMenuAnchorElement(anchorEl);
      this.adapter_.setMenuAnchorCorner(_material_menu_surface_constants__WEBPACK_IMPORTED_MODULE_2__["Corner"].BOTTOM_START);
    }

    this.adapter_.setMenuWrapFocus(false);
    var value = this.getValue();

    if (value) {
      this.setValue(value);
    } // Initially sync floating label


    this.updateLabel_();
  };
  /**
   * Notches the outline and floats the label when appropriate.
   */


  MDCSelectFoundation.prototype.updateLabel_ = function () {
    var value = this.getValue();
    var optionHasValue = value.length > 0;

    if (this.adapter_.hasLabel()) {
      this.notchOutline(optionHasValue);

      if (!this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED)) {
        this.adapter_.floatLabel(optionHasValue);
      }
    }
  };
  /**
   * Unfocuses the select component.
   */


  MDCSelectFoundation.prototype.blur_ = function () {
    this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].FOCUSED);
    this.updateLabel_();
    this.adapter_.deactivateBottomLine();
    var isRequired = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_3__["cssClasses"].REQUIRED);

    if (isRequired) {
      this.setValid(this.isValid());

      if (this.helperText_) {
        this.helperText_.setValidity(this.isValid());
      }
    }
  };

  return MDCSelectFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCSelectFoundation);

/***/ }),

/***/ "./node_modules/@material/select/helper-text/component.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/select/helper-text/component.js ***!
  \****************************************************************/
/*! exports provided: MDCSelectHelperText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectHelperText", function() { return MDCSelectHelperText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/helper-text/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCSelectHelperText =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSelectHelperText, _super);

  function MDCSelectHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelectHelperText.attachTo = function (root) {
    return new MDCSelectHelperText(root);
  };

  Object.defineProperty(MDCSelectHelperText.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCSelectHelperTextFoundation"](adapter);
  };

  return MDCSelectHelperText;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/select/helper-text/constants.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material/select/helper-text/constants.js ***!
  \****************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};
var cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
};


/***/ }),

/***/ "./node_modules/@material/select/helper-text/foundation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/select/helper-text/foundation.js ***!
  \*****************************************************************/
/*! exports provided: MDCSelectHelperTextFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectHelperTextFoundation", function() { return MDCSelectHelperTextFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/helper-text/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCSelectHelperTextFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSelectHelperTextFoundation, _super);

  function MDCSelectHelperTextFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSelectHelperTextFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets the content of the helper text field.
   */

  MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };
  /**
   *  Sets the persistency of the helper text.
   */


  MDCSelectHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to screen readers.
   */


  MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the select validity.
   */


  MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCSelectHelperTextFoundation.prototype.hide_ = function () {
    this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN, 'true');
  };

  return MDCSelectHelperTextFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCSelectHelperTextFoundation);

/***/ }),

/***/ "./node_modules/@material/select/helper-text/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/select/helper-text/index.js ***!
  \************************************************************/
/*! exports provided: MDCSelectHelperText, MDCSelectHelperTextFoundation, helperTextCssClasses, helperTextStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/select/helper-text/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectHelperText", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCSelectHelperText"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/helper-text/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectHelperTextFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCSelectHelperTextFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/helper-text/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/select/icon/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/select/icon/component.js ***!
  \*********************************************************/
/*! exports provided: MDCSelectIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectIcon", function() { return MDCSelectIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/icon/foundation.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCSelectIcon =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSelectIcon, _super);

  function MDCSelectIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSelectIcon.attachTo = function (root) {
    return new MDCSelectIcon(root);
  };

  Object.defineProperty(MDCSelectIcon.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function getAttr(attr) {
        return _this.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCSelectIconFoundation"].strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCSelectIconFoundation"](adapter);
  };

  return MDCSelectIcon;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/select/icon/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/select/icon/constants.js ***!
  \*********************************************************/
/*! exports provided: strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  ICON_EVENT: 'MDCSelect:icon',
  ICON_ROLE: 'button'
};


/***/ }),

/***/ "./node_modules/@material/select/icon/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/select/icon/foundation.js ***!
  \**********************************************************/
/*! exports provided: MDCSelectIconFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelectIconFoundation", function() { return MDCSelectIconFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/icon/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCSelectIconFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSelectIconFoundation, _super);

  function MDCSelectIconFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSelectIconFoundation.defaultAdapter, adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCSelectIconFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function getAttr() {
          return null;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        notifyIconAction: function notifyIconAction() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCSelectIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCSelectIconFoundation.prototype.destroy = function () {
    var _this = this;

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ICON_ROLE);
    }
  };

  MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter_.setAttr('aria-label', label);
  };

  MDCSelectIconFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };

  MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      this.adapter_.notifyIconAction();
    }
  };

  return MDCSelectIconFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCSelectIconFoundation);

/***/ }),

/***/ "./node_modules/@material/select/icon/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/select/icon/index.js ***!
  \*****************************************************/
/*! exports provided: MDCSelectIcon, MDCSelectIconFoundation, iconStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/select/icon/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectIcon", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCSelectIcon"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/icon/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectIconFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCSelectIconFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/icon/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/select/index.js":
/*!************************************************!*\
  !*** ./node_modules/@material/select/index.js ***!
  \************************************************/
/*! exports provided: MDCSelect, cssClasses, strings, numbers, MDCSelectFoundation, MDCSelectHelperText, MDCSelectHelperTextFoundation, helperTextCssClasses, helperTextStrings, MDCSelectIcon, MDCSelectIconFoundation, iconStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/select/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelect", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCSelect"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/select/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/select/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCSelectFoundation"]; });

/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/@material/select/helper-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectHelperText", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_3__["MDCSelectHelperText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectHelperTextFoundation", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_3__["MDCSelectHelperTextFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_3__["helperTextCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_3__["helperTextStrings"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/index */ "./node_modules/@material/select/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectIcon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_4__["MDCSelectIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCSelectIconFoundation", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_4__["MDCSelectIconFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_4__["iconStrings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/component.js ***!
  \*************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return MDCTextFieldCharacterCounter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldCharacterCounter =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounter, _super);

  function MDCTextFieldCharacterCounter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldCharacterCounter.attachTo = function (root) {
    return new MDCTextFieldCharacterCounter(root);
  };

  Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldCharacterCounterFoundation"](adapter);
  };

  return MDCTextFieldCharacterCounter;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/constants.js ***!
  \*************************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ROOT: 'mdc-text-field-character-counter'
};
var strings = {
  ROOT_SELECTOR: "." + cssClasses.ROOT
};


/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/foundation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/foundation.js ***!
  \**************************************************************************/
/*! exports provided: MDCTextFieldCharacterCounterFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return MDCTextFieldCharacterCounterFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldCharacterCounterFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldCharacterCounterFoundation, _super);

  function MDCTextFieldCharacterCounterFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      return {
        setContent: function setContent() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
    currentLength = Math.min(currentLength, maxLength);
    this.adapter_.setContent(currentLength + " / " + maxLength);
  };

  return MDCTextFieldCharacterCounterFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldCharacterCounterFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/index.js ***!
  \*********************************************************************/
/*! exports provided: MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, characterCountCssClasses, characterCountStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldCharacterCounter"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/character-counter/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/textfield/component.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/component.js ***!
  \*******************************************************/
/*! exports provided: MDCTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return MDCTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/floating-label/component */ "./node_modules/@material/floating-label/component.js");
/* harmony import */ var _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/line-ripple/component */ "./node_modules/@material/line-ripple/component.js");
/* harmony import */ var _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/notched-outline/component */ "./node_modules/@material/notched-outline/component.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _character_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./character-counter/component */ "./node_modules/@material/textfield/character-counter/component.js");
/* harmony import */ var _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-counter/foundation */ "./node_modules/@material/textfield/character-counter/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony import */ var _helper_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper-text/component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony import */ var _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helper-text/foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon/component */ "./node_modules/@material/textfield/icon/component.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

















var MDCTextField =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextField, _super);

  function MDCTextField() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextField.attachTo = function (root) {
    return new MDCTextField(root);
  };

  MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function rippleFactory(el, foundation) {
        return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"](el, foundation);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function lineRippleFactory(el) {
        return new _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCLineRipple"](el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function helperTextFactory(el) {
        return new _helper_text_component__WEBPACK_IMPORTED_MODULE_13__["MDCTextFieldHelperText"](el);
      };
    }

    if (characterCounterFactory === void 0) {
      characterCounterFactory = function characterCounterFactory(el) {
        return new _character_counter_component__WEBPACK_IMPORTED_MODULE_9__["MDCTextFieldCharacterCounter"](el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function iconFactory(el) {
        return new _icon_component__WEBPACK_IMPORTED_MODULE_15__["MDCTextFieldIcon"](el);
      };
    }

    if (labelFactory === void 0) {
      labelFactory = function labelFactory(el) {
        return new _material_floating_label_component__WEBPACK_IMPORTED_MODULE_4__["MDCFloatingLabel"](el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function outlineFactory(el) {
        return new _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_6__["MDCNotchedOutline"](el);
      };
    }

    this.input_ = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].INPUT_SELECTOR);
    var labelElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null; // Helper text

    var helperTextStrings = _helper_text_foundation__WEBPACK_IMPORTED_MODULE_14__["MDCTextFieldHelperTextFoundation"].strings;
    var nextElementSibling = this.root_.nextElementSibling;
    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].HELPER_LINE);
    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null; // Character counter

    var characterCounterStrings = _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__["MDCTextFieldCharacterCounterFoundation"].strings;
    var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR); // If character counter is not found in root element search in sibling element.

    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
    }

    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null; // Leading icon

    var leadingIconEl = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].LEADING_ICON_SELECTOR);
    this.leadingIcon_ = leadingIconEl ? iconFactory(leadingIconEl) : null; // Trailing icon

    var trailingIconEl = this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_11__["strings"].TRAILING_ICON_SELECTOR);
    this.trailingIcon_ = trailingIconEl ? iconFactory(trailingIconEl) : null;
    this.ripple = this.createRipple_(rippleFactory);
  };

  MDCTextField.prototype.destroy = function () {
    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    if (this.characterCounter_) {
      this.characterCounter_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.destroy();
    }

    if (this.label_) {
      this.label_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Initializes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDOM = function () {
    this.disabled = this.input_.disabled;
  };

  Object.defineProperty(MDCTextField.prototype, "value", {
    get: function get() {
      return this.foundation_.getValue();
    },

    /**
     * @param value The value to set on the input.
     */
    set: function set(value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "disabled", {
    get: function get() {
      return this.foundation_.isDisabled();
    },

    /**
     * @param disabled Sets the Text Field disabled or enabled.
     */
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "valid", {
    get: function get() {
      return this.foundation_.isValid();
    },

    /**
     * @param valid Sets the Text Field valid or invalid.
     */
    set: function set(valid) {
      this.foundation_.setValid(valid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "required", {
    get: function get() {
      return this.input_.required;
    },

    /**
     * @param required Sets the Text Field to required.
     */
    set: function set(required) {
      this.input_.required = required;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "pattern", {
    get: function get() {
      return this.input_.pattern;
    },

    /**
     * @param pattern Sets the input element's validation pattern.
     */
    set: function set(pattern) {
      this.input_.pattern = pattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "minLength", {
    get: function get() {
      return this.input_.minLength;
    },

    /**
     * @param minLength Sets the input element's minLength.
     */
    set: function set(minLength) {
      this.input_.minLength = minLength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "maxLength", {
    get: function get() {
      return this.input_.maxLength;
    },

    /**
     * @param maxLength Sets the input element's maxLength.
     */
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set to a value less than zero
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "min", {
    get: function get() {
      return this.input_.min;
    },

    /**
     * @param min Sets the input element's min.
     */
    set: function set(min) {
      this.input_.min = min;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "max", {
    get: function get() {
      return this.input_.max;
    },

    /**
     * @param max Sets the input element's max.
     */
    set: function set(max) {
      this.input_.max = max;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "step", {
    get: function get() {
      return this.input_.step;
    },

    /**
     * @param step Sets the input element's step.
     */
    set: function set(step) {
      this.input_.step = step;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
    /**
     * Sets the helper text element content.
     */
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
    /**
     * Sets the aria label of the leading icon.
     */
    set: function set(label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function set(content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
    /**
     * Sets the aria label of the trailing icon.
     */
    set: function set(label) {
      this.foundation_.setTrailingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
    /**
     * Sets the text content of the trailing icon.
     */
    set: function set(content) {
      this.foundation_.setTrailingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    set: function set(useNativeValidation) {
      this.foundation_.setUseNativeValidation(useNativeValidation);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Focuses the input element.
   */

  MDCTextField.prototype.focus = function () {
    this.input_.focus();
  };
  /**
   * Recomputes the outline SVG path for the outline element.
   */


  MDCTextField.prototype.layout = function () {
    var openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  };

  MDCTextField.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()); // tslint:enable:object-literal-sort-keys


    return new _foundation__WEBPACK_IMPORTED_MODULE_12__["MDCTextFieldFoundation"](adapter, this.getFoundationMap_());
  };

  MDCTextField.prototype.getRootAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
        var getAttributesList = function getAttributesList(mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          }).filter(function (attributeName) {
            return attributeName;
          });
        };

        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var config = {
          attributes: true
        };
        observer.observe(_this.input_, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        return observer.disconnect();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getInputAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getNativeInput: function getNativeInput() {
        return _this.input_;
      },
      isFocused: function isFocused() {
        return document.activeElement === _this.input_;
      },
      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getLabelAdapterMethods_ = function () {
    var _this = this;

    return {
      floatLabel: function floatLabel(shouldFloat) {
        return _this.label_ && _this.label_["float"](shouldFloat);
      },
      getLabelWidth: function getLabelWidth() {
        return _this.label_ ? _this.label_.getWidth() : 0;
      },
      hasLabel: function hasLabel() {
        return Boolean(_this.label_);
      },
      shakeLabel: function shakeLabel(shouldShake) {
        return _this.label_ && _this.label_.shake(shouldShake);
      }
    };
  };

  MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
    var _this = this;

    return {
      activateLineRipple: function activateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function deactivateLineRipple() {
        if (_this.lineRipple_) {
          _this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
        if (_this.lineRipple_) {
          _this.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this;

    return {
      closeOutline: function closeOutline() {
        return _this.outline_ && _this.outline_.closeNotch();
      },
      hasOutline: function hasOutline() {
        return Boolean(_this.outline_);
      },
      notchOutline: function notchOutline(labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      }
    };
  };
  /**
   * @return A map of all subcomponents to subfoundations.
   */


  MDCTextField.prototype.getFoundationMap_ = function () {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined
    };
  };

  MDCTextField.prototype.createRipple_ = function (rippleFactory) {
    var _this = this;

    var isTextArea = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].TEXTAREA);
    var isOutlined = this.root_.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_11__["cssClasses"].OUTLINED);

    if (isTextArea || isOutlined) {
      return null;
    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_7__["MDCRipple"].createAdapter(this), {
      isSurfaceActive: function isSurfaceActive() {
        return _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"](_this.input_, ':active');
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      }
    }); // tslint:enable:object-literal-sort-keys


    return rippleFactory(this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_8__["MDCRippleFoundation"](adapter));
  };

  return MDCTextField;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/*! exports provided: cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return VALIDATION_ATTR_WHITELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return ALWAYS_FLOAT_TYPES; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
var cssClasses = {
  DENSE: 'mdc-text-field--dense',
  DISABLED: 'mdc-text-field--disabled',
  FOCUSED: 'mdc-text-field--focused',
  FULLWIDTH: 'mdc-text-field--fullwidth',
  HELPER_LINE: 'mdc-text-field-helper-line',
  INVALID: 'mdc-text-field--invalid',
  NO_LABEL: 'mdc-text-field--no-label',
  OUTLINED: 'mdc-text-field--outlined',
  ROOT: 'mdc-text-field',
  TEXTAREA: 'mdc-text-field--textarea',
  WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
  WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon'
};
var numbers = {
  DENSE_LABEL_SCALE: 0.923,
  LABEL_SCALE: 0.75
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */

var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */

var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];


/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/*! exports provided: MDCTextFieldFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return MDCTextFieldFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldFoundation, _super);
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCTextFieldFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;

    _this.isFocused_ = false;
    _this.receivedUserInput_ = false;
    _this.isValid_ = true;
    _this.useNativeValidation_ = true;
    _this.helperText_ = foundationMap.helperText;
    _this.characterCounter_ = foundationMap.characterCounter;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.trailingIcon_ = foundationMap.trailingIcon;

    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };

    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };

    _this.inputInputHandler_ = function () {
      return _this.handleInput();
    };

    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };

    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };

    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
    get: function get() {
      var type = this.getNativeInput_().type;
      return _constants__WEBPACK_IMPORTED_MODULE_2__["ALWAYS_FLOAT_TYPES"].indexOf(type) >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
    get: function get() {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
    get: function get() {
      return !this.isFocused_ && !this.isValid() && !!this.getValue();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return true;
        },
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {
          return undefined;
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {
          return undefined;
        },
        registerInputInteractionHandler: function registerInputInteractionHandler() {
          return undefined;
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {
          return undefined;
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {
          return new MutationObserver(function () {
            return undefined;
          });
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {
          return undefined;
        },
        getNativeInput: function getNativeInput() {
          return null;
        },
        isFocused: function isFocused() {
          return false;
        },
        activateLineRipple: function activateLineRipple() {
          return undefined;
        },
        deactivateLineRipple: function deactivateLineRipple() {
          return undefined;
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {
          return undefined;
        },
        shakeLabel: function shakeLabel() {
          return undefined;
        },
        floatLabel: function floatLabel() {
          return undefined;
        },
        hasLabel: function hasLabel() {
          return false;
        },
        getLabelWidth: function getLabelWidth() {
          return 0;
        },
        hasOutline: function hasOutline() {
          return false;
        },
        notchOutline: function notchOutline() {
          return undefined;
        },
        closeOutline: function closeOutline() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldFoundation.prototype.init = function () {
    var _this = this;

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    } else if (this.adapter_.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter_.floatLabel(true);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    this.setCharacterCounter_(this.getValue().length);
  };

  MDCTextFieldFoundation.prototype.destroy = function () {
    var _this = this;

    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  };
  /**
   * Handles user interactions with the Text Field.
   */


  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
    var nativeInput = this.adapter_.getNativeInput();

    if (nativeInput && nativeInput.disabled) {
      return;
    }

    this.receivedUserInput_ = true;
  };
  /**
   * Handles validation attribute changes
   */


  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
    var _this = this;

    attributesList.some(function (attributeName) {
      if (_constants__WEBPACK_IMPORTED_MODULE_2__["VALIDATION_ATTR_WHITELIST"].indexOf(attributeName) > -1) {
        _this.styleValidity_(true);

        return true;
      }

      return false;
    });

    if (attributesList.indexOf('maxlength') > -1) {
      this.setCharacterCounter_(this.getValue().length);
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    if (openNotch) {
      var isDense = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DENSE);
      var labelScale = isDense ? _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].DENSE_LABEL_SCALE : _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Activates the text field focus state.
   */


  MDCTextFieldFoundation.prototype.activateFocus = function () {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   */


  MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
    var touches = evt.touches;
    var targetEvent = touches ? touches[0] : evt;
    var targetClientRect = targetEvent.target.getBoundingClientRect();
    var normalizedX = targetEvent.clientX - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  };
  /**
   * Handles input change of text input and text area.
   */


  MDCTextFieldFoundation.prototype.handleInput = function () {
    this.autoCompleteFocus();
    this.setCharacterCounter_(this.getValue().length);
  };
  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programmatically).
   */


  MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  };
  /**
   * Deactivates the Text Field's focus state.
   */


  MDCTextFieldFoundation.prototype.deactivateFocus = function () {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (!this.shouldFloat) {
      this.receivedUserInput_ = false;
    }
  };

  MDCTextFieldFoundation.prototype.getValue = function () {
    return this.getNativeInput_().value;
  };
  /**
   * @param value The value to set on the input Element.
   */


  MDCTextFieldFoundation.prototype.setValue = function (value) {
    // Prevent Safari from moving the caret to the end of the input when the value has not changed.
    if (this.getValue() !== value) {
      this.getNativeInput_().value = value;
    }

    this.setCharacterCounter_(value.length);
    var isValid = this.isValid();
    this.styleValidity_(isValid);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
  };
  /**
   * @return The custom validity state, if set; otherwise, the result of a native validity check.
   */


  MDCTextFieldFoundation.prototype.isValid = function () {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  };
  /**
   * @param isValid Sets the custom validity state of the Text Field.
   */


  MDCTextFieldFoundation.prototype.setValid = function (isValid) {
    this.isValid_ = isValid;
    this.styleValidity_(isValid);
    var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();

    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(shouldShake);
    }
  };
  /**
   * Enables or disables the use of native validation. Use this for custom validation.
   * @param useNativeValidation Set this to false to ignore native input validation.
   */


  MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
    this.useNativeValidation_ = useNativeValidation;
  };

  MDCTextFieldFoundation.prototype.isDisabled = function () {
    return this.getNativeInput_().disabled;
  };
  /**
   * @param disabled Sets the text-field disabled or enabled.
   */


  MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setContent(content);
    }
  };
  /**
   * Sets character counter values that shows characters used and the total character limit.
   */


  MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
    if (!this.characterCounter_) {
      return;
    }

    var maxLength = this.getNativeInput_().maxLength;

    if (maxLength === -1) {
      throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
    }

    this.characterCounter_.setCounterValue(currentLength, maxLength);
  };
  /**
   * @return True if the Text Field input fails in converting the user-supplied value.
   */


  MDCTextFieldFoundation.prototype.isBadInput_ = function () {
    // The badInput property is not supported in IE 11 💩.
    return this.getNativeInput_().validity.badInput || false;
  };
  /**
   * @return The result of native validity checking (ValidityState.valid).
   */


  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
    return this.getNativeInput_().validity.valid;
  };
  /**
   * Styles the component based on the validity state.
   */


  MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }

    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  };
  /**
   * Styles the component based on the focused state.
   */


  MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

    if (isFocused) {
      this.adapter_.addClass(FOCUSED);
    } else {
      this.adapter_.removeClass(FOCUSED);
    }
  };
  /**
   * Styles the component based on the disabled state.
   */


  MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
    var _a = MDCTextFieldFoundation.cssClasses,
        DISABLED = _a.DISABLED,
        INVALID = _a.INVALID;

    if (isDisabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.removeClass(DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(isDisabled);
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.setDisabled(isDisabled);
    }
  };
  /**
   * @return The native text input element from the host environment, or an object with the same shape for unit tests.
   */


  MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
    // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
    // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
    // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
    var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
    return nativeInput || {
      disabled: false,
      maxLength: -1,
      type: 'input',
      validity: {
        badInput: false,
        valid: true
      },
      value: ''
    };
  };

  return MDCTextFieldFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/component.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/component.js ***!
  \*******************************************************************/
/*! exports provided: MDCTextFieldHelperText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return MDCTextFieldHelperText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldHelperText =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperText, _super);

  function MDCTextFieldHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldHelperText.attachTo = function (root) {
    return new MDCTextFieldHelperText(root);
  };

  Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldHelperTextFoundation"](adapter);
  };

  return MDCTextFieldHelperText;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/constants.js ***!
  \*******************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
  ROOT: 'mdc-text-field-helper-text'
};
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  ROOT_SELECTOR: "." + cssClasses.ROOT
};


/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/foundation.js ***!
  \********************************************************************/
/*! exports provided: MDCTextFieldHelperTextFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return MDCTextFieldHelperTextFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldHelperTextFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldHelperTextFoundation, _super);

  function MDCTextFieldHelperTextFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function addClass() {
          return undefined;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        hasClass: function hasClass() {
          return false;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets the content of the helper text field.
   */

  MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };
  /**
   * @param isPersistent Sets the persistency of the helper text.
   */


  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to the screen reader.
   */


  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the input validity.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
    this.adapter_.setAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_HIDDEN, 'true');
  };

  return MDCTextFieldHelperTextFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldHelperTextFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/index.js ***!
  \***************************************************************/
/*! exports provided: MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, helperTextCssClasses, helperTextStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/helper-text/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldHelperText"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/helper-text/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldHelperTextFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/helper-text/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/textfield/icon/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/component.js ***!
  \************************************************************/
/*! exports provided: MDCTextFieldIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return MDCTextFieldIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCTextFieldIcon =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIcon, _super);

  function MDCTextFieldIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldIcon.attachTo = function (root) {
    return new MDCTextFieldIcon(root);
  };

  Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
    get: function get() {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function getAttr(attr) {
        return _this.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"].strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldIconFoundation"](adapter);
  };

  return MDCTextFieldIcon;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/textfield/icon/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/constants.js ***!
  \************************************************************/
/*! exports provided: strings, cssClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};
var cssClasses = {
  ROOT: 'mdc-text-field__icon'
};


/***/ }),

/***/ "./node_modules/@material/textfield/icon/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/foundation.js ***!
  \*************************************************************/
/*! exports provided: MDCTextFieldIconFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return MDCTextFieldIconFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldIconFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCTextFieldIconFoundation, _super);

  function MDCTextFieldIconFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
     */
    get: function get() {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function getAttr() {
          return null;
        },
        setAttr: function setAttr() {
          return undefined;
        },
        removeAttr: function removeAttr() {
          return undefined;
        },
        setContent: function setContent() {
          return undefined;
        },
        registerInteractionHandler: function registerInteractionHandler() {
          return undefined;
        },
        deregisterInteractionHandler: function deregisterInteractionHandler() {
          return undefined;
        },
        notifyIconAction: function notifyIconAction() {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.destroy = function () {
    var _this = this;

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ICON_ROLE);
    }
  };

  MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter_.setAttr('aria-label', label);
  };

  MDCTextFieldIconFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };

  MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      evt.preventDefault(); // stop click from causing host label to focus
      // input

      this.adapter_.notifyIconAction();
    }
  };

  return MDCTextFieldIconFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCTextFieldIconFoundation);

/***/ }),

/***/ "./node_modules/@material/textfield/icon/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/icon/index.js ***!
  \********************************************************/
/*! exports provided: MDCTextFieldIcon, MDCTextFieldIconFoundation, iconCssClasses, iconStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/icon/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextFieldIcon"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/icon/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCTextFieldIconFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/icon/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/textfield/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/textfield/index.js ***!
  \***************************************************/
/*! exports provided: MDCTextField, cssClasses, strings, numbers, VALIDATION_ATTR_WHITELIST, ALWAYS_FLOAT_TYPES, MDCTextFieldFoundation, MDCTextFieldCharacterCounter, MDCTextFieldCharacterCounterFoundation, characterCountCssClasses, characterCountStrings, MDCTextFieldHelperText, MDCTextFieldHelperTextFoundation, helperTextCssClasses, helperTextStrings, MDCTextFieldIcon, MDCTextFieldIconFoundation, iconCssClasses, iconStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/textfield/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCTextField"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/textfield/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["numbers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_ATTR_WHITELIST", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["VALIDATION_ATTR_WHITELIST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALWAYS_FLOAT_TYPES", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["ALWAYS_FLOAT_TYPES"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/textfield/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_2__["MDCTextFieldFoundation"]; });

/* harmony import */ var _character_counter_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-counter/index */ "./node_modules/@material/textfield/character-counter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounter", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldCharacterCounterFoundation", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["MDCTextFieldCharacterCounterFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountCssClasses", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterCountStrings", function() { return _character_counter_index__WEBPACK_IMPORTED_MODULE_3__["characterCountStrings"]; });

/* harmony import */ var _helper_text_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper-text/index */ "./node_modules/@material/textfield/helper-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperTextFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextCssClasses", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helperTextStrings", function() { return _helper_text_index__WEBPACK_IMPORTED_MODULE_4__["helperTextStrings"]; });

/* harmony import */ var _icon_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/index */ "./node_modules/@material/textfield/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextFieldIconFoundation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconCssClasses", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconCssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconStrings", function() { return _icon_index__WEBPACK_IMPORTED_MODULE_5__["iconStrings"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}

/***/ }),

/***/ "./src/js/admin-frontend-addasset.js":
/*!*******************************************!*\
  !*** ./src/js/admin-frontend-addasset.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dialog */ "./node_modules/@material/dialog/index.js");
/* harmony import */ var _material_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/radio */ "./node_modules/@material/radio/index.js");
/* harmony import */ var _material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/select */ "./node_modules/@material/select/index.js");
/* harmony import */ var _material_select_helper_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/select/helper-text */ "./node_modules/@material/select/helper-text/index.js");
/* harmony import */ var _material_textfield_helper_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield/helper-text */ "./node_modules/@material/textfield/helper-text/index.js");
/* harmony import */ var _material_textfield_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/textfield/index */ "./node_modules/@material/textfield/index.js");
/* harmony import */ var _scss_frontend_media_uploader_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/frontend-media-uploader.scss */ "./src/scss/frontend-media-uploader.scss");
/*

* Grouping Assets For Sharing *
  // DONE: [feat] Checkbox on cards and button to copy link that will show you all of them as a single query

* Frontend Add Assets *
  // TODO: [feat] Project Type/Year labels and menu options
  // TODO: [fix] Project Type/Year should be required only when New Project text field has input
  // TODO: [feat] Link and Creator field
  // TODO: [feat] Thumbnails for attachments with generated thumbnails (docs, videos)
  // TODO: [feat] Icon thumbnails for attachments that can not be processed into thumbnails (links, docx)
  // TODO: [feat] More hidden fields for attachment data (attachment ID, upload_dir/file_path,)
  // TODO: [feat] Construct wp_insert_post from form _POST data

* Thumbnails *
  // TODO: [feat] Redo how thumbnails are displayed. Every thumb can have a background of grey, a background-image, and an icon. If there's no image (ex. docx) then just icon shows.

* Frontend Edit Tags *
  // TODO: [feat] Tags: Just make them editable on the card by clicking them. Convert div to input and validate.

* Sidebar *
  // TODO: [feat] Sort Projects by Year with Current year expanded

*/







var counter = 1;

function count() {
  console.log(counter);
  counter++;
}

var addAssetTemplate = document.getElementById("tpl-add-asset-dialog").innerHTML;
var addAssetDialogHTML = template.render(addAssetTemplate);
$('.mdc-dialog__content').append(addAssetDialogHTML);

function checkSaveButton() {
  if (addAssetFormEl.checkValidity() === true) {
    addAssetDialog.buttons_[1].disabled = false;
  } else {
    addAssetDialog.buttons_[1].disabled = true;
  }
}
/* ------------------------- Variable Instantiation ------------------------- */


var wasEscaped = false;
var addAssetFormEl, addAssetSidebar, addAssetTitle, artistSelect, artistSelectHelperText, artistSelectInput, artistSelectMenuEl, cancelArtistHelperText, cancelProjectHelperText, creatorField, currentPreviewEl, formatRadios, linkField, newArtistField, newArtistForm, newProjectField, newProjectForm, newProjectType, newProjectTypeInput, newProjectYear, newProjectYearInput, previewContainerEl, previewAudioEl, previewEl, previewDocEl, previewImageEl, previewThumbEl, previewVideoEl, previewZipEl, projectSelect, projectInputEl, projectSelectHelperText, projectSelectList, projectsMenu, uploadButton, uploadEditButton, uploadFileUrlInput, uploadFileIDInput;

function initialization() {
  addAssetFormEl = document.getElementById("frontend_add_asset_form");
  addAssetSidebar = document.getElementById("add-asset__sidebar");
  addAssetTitle = new _material_textfield_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextField"](document.querySelector(".add-asset-title-input"));
  formatRadios = [].map.call(document.querySelectorAll(".mdc-radio"), function (el) {
    return new _material_radio__WEBPACK_IMPORTED_MODULE_1__["MDCRadio"](el);
  });
  uploadButton = document.querySelector("#upload_button");
  uploadEditButton = document.querySelector("#edit_button");
  uploadFileUrlInput = document.querySelector("#upload_url");
  uploadFileIDInput = document.querySelector("#upload_file_id");
  creatorField = new _material_textfield_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextField"](document.querySelector(".add-asset-creator-input"));
  linkField = new _material_textfield_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextField"](document.querySelector(".add-asset-link-input"));
  previewThumbEl = document.querySelector(".add-asset__preview--thumb");
  previewEl = document.querySelector(".add-asset__preview");
  previewContainerEl = document.querySelector(".add-asset__file--container");
  artistSelect = new _material_select__WEBPACK_IMPORTED_MODULE_2__["MDCSelect"](document.querySelector(".add-asset__category--artist"));
  artistSelectHelperText = new _material_select_helper_text__WEBPACK_IMPORTED_MODULE_3__["MDCSelectHelperText"](document.querySelector('.add-asset__new-artist--helper-text'));
  artistSelectInput = document.getElementById("add-asset__category--artist-input");
  artistSelectMenuEl = document.querySelector(".add-asset__category--artist-select");
  cancelArtistHelperText = new _material_textfield_helper_text__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperText"](document.querySelector('.add-asset__cancel-artist--helper-text'));
  cancelProjectHelperText = new _material_textfield_helper_text__WEBPACK_IMPORTED_MODULE_4__["MDCTextFieldHelperText"](document.querySelector('.add-asset__cancel-project--helper-text'));
  newArtistField = new _material_textfield_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextField"](document.querySelector('.add-asset__new-artist--field'));
  newArtistForm = document.getElementById('add-asset__new-artist--container');
  newProjectField = new _material_textfield_index__WEBPACK_IMPORTED_MODULE_5__["MDCTextField"](document.querySelector('.add-asset__new-project--field'));
  newProjectForm = document.getElementById('add-asset__new-project--container');
  newProjectType = new _material_select__WEBPACK_IMPORTED_MODULE_2__["MDCSelect"](document.querySelector(".add-asset__new-project--type"));
  newProjectTypeInput = document.querySelector('#new-project-type');
  newProjectYear = new _material_select__WEBPACK_IMPORTED_MODULE_2__["MDCSelect"](document.querySelector(".add-asset__new-project--year"));
  newProjectYearInput = document.querySelector('#new-project-year');
  projectSelect = new _material_select__WEBPACK_IMPORTED_MODULE_2__["MDCSelect"](document.querySelector(".add-asset__category--project"));
  projectInputEl = document.querySelector("#cat_project_id");
  projectSelectHelperText = new _material_select_helper_text__WEBPACK_IMPORTED_MODULE_3__["MDCSelectHelperText"](document.querySelector('.add-asset__new-project--helper-text'));
  projectSelectList = document.querySelector("#project_select_list");
  projectsMenu = projectSelect.menu_;
}

var originalDialog = document.querySelector(".dam-add-asset-dialog").innerHTML;
var changeEvent = new Event('change', {
  bubbles: true
});
var addAssetDialog = new _material_dialog__WEBPACK_IMPORTED_MODULE_0__["MDCDialog"](document.querySelector(".dam-add-asset-dialog"));
addAssetDialog.listen('MDCDialog:opening', function () {
  initialization();
  /* -------------------------------------------------------------------------- */

  /*                               FORM VALIDATION                              */

  /* -------------------------------------------------------------------------- */

  wasEscaped ? null : addAssetFormEl.addEventListener('change', function (e) {
    checkSaveButton();

    if (addAssetFormEl.elements.format.value === 'format_link') {
      creatorField.root_.style.display = 'flex';
      creatorField.root_.parentNode.style.display = 'flex';
      linkField.input_.required = true;
      uploadFileUrlInput.required = false;
      uploadFileIDInput.required = false;
      uploadButton.disabled = true;
      uploadEditButton.disabled = true;
      previewContainerEl.style.display = 'none';
      $(uploadButton).animate({
        opacity: '0'
      });
      $(linkField).animate({
        opacity: '100'
      });
      linkField.root_.style.display = 'flex';
      checkSaveButton();
    } else if (formatRadios.find(function (el) {
      return el.checked;
    })) {
      creatorField.root_.style.display = 'flex';
      creatorField.root_.parentNode.style.display = 'flex';
      linkField.input_.required = false;
      uploadFileUrlInput.required = true;
      uploadFileIDInput.required = true;
      previewContainerEl.querySelector('#upload_button_helper-text').style.display = 'none';
      uploadButton.disabled = false;
      uploadEditButton.disabled = false;

      if (linkField.root_.style.display !== 'none') {
        linkField.root_.style.display = 'none';
      }

      $(linkField).animate({
        opacity: '100'
      });

      if (previewContainerEl.style.display !== 'flex') {
        previewContainerEl.style.display = 'flex';
        $(previewContainerEl).animate({
          opacity: '100'
        });
        $(uploadButton).animate({
          opacity: '100'
        });
      }

      checkSaveButton();
    }
  });
  wasEscaped ? null : addAssetTitle.listen("input", function (e) {
    checkSaveButton();
  });
  wasEscaped ? null : linkField.listen("input", function (e) {
    checkSaveButton();
  });
  wasEscaped ? null : newArtistField.listen("input", function (e) {
    checkSaveButton();
  });
  wasEscaped ? null : newProjectField.listen("input", function (e) {
    if (e.rangeOffset === 0) {
      newProjectYearInput.required = false;
      newProjectTypeInput.required = false;
      newProjectYear.required = false;
      newProjectType.required = false;
      checkSaveButton();
    } else {
      newProjectYearInput.required = true;
      newProjectTypeInput.required = true;
      newProjectYear.required = true;
      newProjectType.required = true;
      checkSaveButton();
    }
  });
  /* -------------------------------------------------------------------------- */

  /*                           SIDEBAR FIELD HANDLING                           */

  /* -------------------------------------------------------------------------- */

  function isHidden(el) {
    return el.offsetParent === null;
  }
  /* ------------------------ DOWN = SHOW | UP = HIDE ----------------------- */


  function swapProjectField() {
    if (!isHidden(projectSelect.root_)) {
      projectSelect.selectedIndex = 0;
      $(projectSelect.root_).slideUp(150);
      $(newProjectForm).slideDown(150);
      checkSaveButton();
    } else {
      newProjectField.value = "";
      newProjectType.selectedIndex = 0;
      newProjectTypeInput.required = false;
      newProjectYearInput.required = false;
      $(newProjectForm).slideUp(150);
      $(projectSelect.root_).slideDown(150);
      checkSaveButton();
    }
  }

  function swapArtistField(option) {
    if (!isHidden(artistSelect.root_)) {
      artistSelectInput.value = "";
      artistSelect.selectedIndex = 0;
      artistSelect.required = false;
      artistSelectInput.required = false;
      newArtistField.input_.required = true;
      $(artistSelect.root_).slideUp(150);
      $(newArtistForm).slideDown(150);
      $(cancelProjectHelperText.root_).hide();

      if (!isHidden(projectSelect.root_)) {
        swapProjectField();
      }

      checkSaveButton();
    } else {
      artistSelect.required = true;
      artistSelectInput.required = true;
      newArtistField.input_.required = false;
      newArtistField.foundation_.setValue("");
      $(newArtistForm).slideUp(150);
      $(artistSelect.root_).slideDown(150);
      $(cancelProjectHelperText.root_).hide();

      if (option !== 'cancel') {
        swapProjectField();
      } else {
        $(cancelProjectHelperText.root_).show();
      }

      checkSaveButton();
    }

    addAssetFormEl.dispatchEvent(changeEvent);
  }

  wasEscaped ? null : artistSelectHelperText.root_.addEventListener("click", function (e) {
    swapArtistField();
  });
  wasEscaped ? null : cancelArtistHelperText.root_.addEventListener("click", function (e) {
    swapArtistField('cancel');
  });
  wasEscaped ? null : projectSelectHelperText.root_.addEventListener("click", function (e) {
    swapProjectField();
  });
  wasEscaped ? null : cancelProjectHelperText.root_.addEventListener("click", function (e) {
    swapProjectField('cancel');
  });
  /* ---------------------- HANDLE "HIDDEN" INPUT FIELDS ---------------------- */

  artistSelect.menu_.listen('MDCMenuSurface:opened', function () {
    var sidebarHeight = $("#add-asset__sidebar").height() - 56;
    console.log(sidebarHeight);
    artistSelect.menu_.menuSurface_.foundation_.adapter_.setMaxHeight(sidebarHeight + "px");
  });
  wasEscaped ? null : artistSelect.listen("MDCSelect:change", function (e) {
    if (artistSelectInput.value !== e.detail.value) {
      artistSelectInput.value = e.detail.value;
    }

    projectSelect.foundation_.setValue("");
    var projectsMenuItems = projectsMenu.items.slice(1);

    for (var item in projectsMenuItems) {
      var itemIndex = parseInt(item);
      var projectParentID = parseInt(projectsMenuItems[itemIndex].attributes.parent.value);
      projectsMenuItems[itemIndex].style.display = "none";

      if (projectParentID == parseInt(artistSelect.value)) {
        projectsMenuItems[itemIndex].style.display = "flex";
      }
    }

    addAssetFormEl.dispatchEvent(changeEvent);
  });
  wasEscaped ? null : projectSelect.listen("MDCSelect:change", function (e) {
    projectInputEl.value = e.detail.value;
  });
  wasEscaped ? null : newProjectType.listen("MDCSelect:change", function (e) {
    newProjectTypeInput.value = e.detail.value;
    addAssetFormEl.dispatchEvent(changeEvent);
  });
  wasEscaped ? null : newProjectYear.listen("MDCSelect:change", function (e) {
    newProjectYearInput.value = e.detail.value;
    addAssetFormEl.dispatchEvent(changeEvent);
  });
  /* -------------------------------------------------------------------------- */

  /*                          WORDPRESS MEDIA UPLOADER                          */

  /* -------------------------------------------------------------------------- */

  wasEscaped ? null : uploadEditButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (mediaUploader) {
      mediaUploader.open();
      return;
    }
  });
  wasEscaped ? null : uploadButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (mediaUploader) {
      mediaUploader.open();
      return;
    }

    mediaUploader.open();
  });
});
var mediaUploader;
$(document).ready(function () {
  function replaceExt(url, ext) {
    var pos = url.lastIndexOf(".");
    var newUrl = url.substr(0, pos < 0 ? url.length : pos) + ext;
    return newUrl;
  }

  mediaUploader = wp.media(wp.media.view.MediaFrame.Select);
  mediaUploader.on('select', function () {
    var attachment = mediaUploader.state().get('selection').first().toJSON();
    var selectedFormat = formatRadios.find(function (el) {
      return el.checked;
    }).value;

    switch (attachment.type) {
      case "image":
        formatRadios.find(function (el) {
          return el.value === 'format_image';
        }).checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        previewThumbEl.classList.remove('icon');
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewImageEl = document.createElement("img");
        previewThumbEl.prepend(previewImageEl);
        previewImageEl.classList.add('add-asset__preview-image');
        uploadFileUrlInput.setAttribute('value', attachment.url);
        uploadFileIDInput.setAttribute('value', attachment.id);
        previewImageEl.src = typeof attachment.sizes.medium !== 'undefined' ? attachment.sizes.medium.url : typeof attachment.sizes.thumbnail !== 'undefined' ? attachment.sizes.thumbnail.url : attachment.url;
        currentPreviewEl = previewImageEl;
        break;

      case "video":
        formatRadios.find(function (el) {
          return el.value === 'format_video';
        }).checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        previewThumbEl.classList.remove('icon');
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewVideoEl = document.createElement("img");
        previewThumbEl.prepend(previewVideoEl);
        previewVideoEl.classList.add('add-asset__preview-image');
        uploadFileUrlInput.setAttribute('value', attachment.url);
        uploadFileIDInput.setAttribute('value', attachment.id);
        previewVideoEl.src = replaceExt(attachment.url, '_thumb.jpg');
        currentPreviewEl = previewVideoEl;
        break;

      case "audio":
        formatRadios.find(function (el) {
          return el.value === 'format_audio';
        }).checked = true;
        previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
        currentPreviewEl ? currentPreviewEl.remove() : null;
        previewAudioEl = document.createElement("div");
        previewThumbEl.prepend(previewAudioEl);
        previewThumbEl.classList.add('icon');
        previewThumbEl.querySelector('.preview-file-name').append(attachment.filename);
        previewAudioEl.classList.add('add-asset__preview-icon', 'material-icons');
        previewAudioEl.innerHTML = 'library_music';
        uploadFileUrlInput.setAttribute('value', attachment.url);
        uploadFileIDInput.setAttribute('value', attachment.id);
        currentPreviewEl = previewAudioEl;
        break;

      case "application":
        switch (attachment.subtype) {
          case "vnd.openxmlformats-officedocument.wordprocessingml.document":
            formatRadios.find(function (el) {
              return el.value === 'format_document';
            }).checked = true;
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewDocEl = document.createElement("div");
            previewThumbEl.prepend(previewDocEl);
            previewThumbEl.classList.add('icon');
            previewThumbEl.querySelector('.preview-file-name').append(attachment.filename);
            previewDocEl.classList.add('add-asset__preview-icon', 'material-icons');
            previewDocEl.innerHTML = 'description';
            uploadFileUrlInput.setAttribute('value', attachment.url);
            uploadFileIDInput.setAttribute('value', attachment.id);
            currentPreviewEl = previewDocEl;
            break;

          case "pdf":
            formatRadios.find(function (el) {
              return el.value === 'format_document';
            }).checked = true;
            previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
            previewThumbEl.classList.remove('icon');
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewDocEl = document.createElement("img");
            previewThumbEl.prepend(previewDocEl);
            previewDocEl.classList.add('add-asset__preview-image');
            uploadFileUrlInput.setAttribute('value', attachment.url);
            uploadFileIDInput.setAttribute('value', attachment.id);
            previewDocEl.src = attachment.sizes.medium.url;
            currentPreviewEl = previewDocEl;
            break;

          case "zip":
            console.log(formatRadios.find(function (el) {
              return el.checked === true;
            }).value);

            if (formatRadios.find(function (el) {
              return el.checked === true;
            }).value !== 'format_audio-zip' && formatRadios.find(function (el) {
              return el.checked === true;
            }).value !== 'format_zip') {
              formatRadios.find(function (el) {
                return el.value === 'format_zip';
              }).checked = true;
            }

            previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
            currentPreviewEl ? currentPreviewEl.remove() : null;
            previewZipEl = document.createElement("img");
            previewThumbEl.classList.add('icon');
            previewThumbEl.querySelector('.preview-file-name').append(attachment.filename);
            previewThumbEl.prepend(previewZipEl);
            previewZipEl.classList.add('add-asset__preview-image');
            uploadFileUrlInput.setAttribute('value', attachment.url);
            uploadFileIDInput.setAttribute('value', attachment.id);
            previewZipEl.src = attachment.icon;
            currentPreviewEl = previewZipEl;
            break;
        }

        break;

      default:
    }

    checkSaveButton();
    previewEl.style = "display: flex";
    uploadButton.style = "display:none";
  });
});
/* -------------------------------------------------------------------------- */

/*                                   ACTIONS                                  */

/* -------------------------------------------------------------------------- */

$(".dam-add-asset__button").on("click", function () {
  addAssetDialog.open();
  checkSaveButton();
});
/* -------------------------------------------------------------------------- */

/*                           RESET FIELDS ON CANCEL                           */

/* -------------------------------------------------------------------------- */

addAssetDialog.listen("MDCDialog:closing", function (e) {
  if (e.detail.action === "reset") {
    $('.mdc-dialog__content').empty();
    $('.mdc-dialog__content').append(addAssetDialogHTML);
  } else {
    wasEscaped = true;
  }
});
/* -------------------------------------------------------------------------- */

/*                                 EDIT ASSETS                                */

/* -------------------------------------------------------------------------- */

$(document).ajaxSuccess(function () {
  var editAssetButtons = document.querySelectorAll(".dam-edit-asset__button");
  var editPostIDInput;
  editAssetButtons.forEach(function (el) {
    return $(el).on("click", function () {
      addAssetDialog.open();
      var assetCard = event.target.closest('article');
      var assetData = JSON.parse(assetCard.attributes['data-asset-json'].value);
      var addAssetDialogRoot = document.querySelector('.dam-add-asset-dialog'); // Create hidden input that adds post_id to the POST object for updating the post

      editPostIDInput = document.createElement('input');
      $(editPostIDInput).attr({
        "name": "edit_post_id",
        'id': "edit_post_id",
        'style': "display:none;",
        'value': assetData.id
      });
      addAssetFormEl.prepend(editPostIDInput);
      /* ------------------------ EDIT LABELS OUTSIDE FORM ------------------------ */

      addAssetDialogRoot.querySelector('.mdc-dialog__title').innerText = 'Editing: ' + assetData.title;
      addAssetDialogRoot.querySelector('#add-asset__save-button').innerText = 'Update';
      /* ----------------------- EDIT FORM LABELS AND INPUTS ---------------------- */
      // Asset Title

      addAssetTitle.root_.querySelector('.mdc-floating-label').innerText = 'Edit Title';
      addAssetTitle.value = assetData.title; // Format Option

      formatRadios.find(function (el) {
        return el.value === assetData.format;
      }).checked = true; // Creator Field

      assetData.creator ? creatorField.value = assetData.creator : null; // Artist Selection

      artistSelect.foundation_.setValue(assetData.artist_id.toString());
      artistSelect.menu_.list_.selectedIndex = artistSelect.selectedIndex;
      artistSelect.value = assetData.artist_id.toString();
      artistSelectInput.value = assetData.artist_id;
      artistSelect.foundation_.notchOutline(artistSelect.foundation_.adapter_.getLabelWidth());
      artistSelect.foundation_.adapter_.floatLabel(true); // Project Selection

      if (assetData.project_id) {
        projectSelect.foundation_.setValue(assetData.project_id.toString());
        projectSelect.menu_.list_.selectedIndex = projectSelect.selectedIndex;
        projectInputEl.value = assetData.project_id;
        projectSelect.foundation_.notchOutline(projectSelect.foundation_.adapter_.getLabelWidth());
        projectSelect.foundation_.adapter_.floatLabel(true);
      }
      /* -------------------------------------------------------------------------- */

      /*                               HANDLE PREVIEW                               */

      /* -------------------------------------------------------------------------- */


      if (assetData.format === 'format_link') {
        creatorField.root_.style.display = 'flex';
        creatorField.root_.parentNode.style.display = 'flex';
        linkField.input_.required = true;
        linkField.value = assetData.permalink;
        uploadFileUrlInput.required = false;
        uploadFileIDInput.required = false;
        uploadButton.disabled = true;
        uploadEditButton.disabled = true;
        previewContainerEl.style.display = 'none';
        $(uploadButton).animate({
          opacity: '0'
        });
        $(linkField).animate({
          opacity: '100'
        });
        linkField.root_.style.display = 'flex';
        checkSaveButton();
      } else {
        creatorField.root_.style.display = 'flex';
        creatorField.root_.parentNode.style.display = 'flex';
        linkField.input_.required = false;
        uploadFileUrlInput.required = true;
        uploadFileIDInput.required = true;
        previewContainerEl.querySelector('#upload_button_helper-text').style.display = 'none';
        uploadButton.disabled = false;
        uploadEditButton.disabled = false;

        if (linkField.root_.style.display !== 'none') {
          linkField.root_.style.display = 'none';
        }

        $(linkField).animate({
          opacity: '100'
        });

        if (previewContainerEl.style.display !== 'flex') {
          previewContainerEl.style.display = 'flex';
          $(previewContainerEl).animate({
            opacity: '100'
          });
          $(uploadButton).animate({
            opacity: '100'
          });
        }

        checkSaveButton();
      }

      var mimeType = assetData.mime;

      switch (mimeType.split("/")[0]) {
        case "image":
          formatRadios.find(function (el) {
            return el.value === 'format_image';
          }).checked = true;
          previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
          previewThumbEl.querySelector('.preview-file-name').style = 'display:none';
          previewThumbEl.classList.remove('icon');
          currentPreviewEl ? currentPreviewEl.remove() : null;
          previewImageEl = document.createElement("img");
          previewThumbEl.prepend(previewImageEl);
          previewImageEl.classList.add('add-asset__preview-image');
          uploadFileUrlInput.setAttribute('value', assetData.permalink);
          uploadFileIDInput.setAttribute('value', assetData.attachment_id);
          previewImageEl.src = assetData.thumbnail;
          currentPreviewEl = previewImageEl;
          break;

        case "video":
          formatRadios.find(function (el) {
            return el.value === 'format_video';
          }).checked = true;
          previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
          previewThumbEl.querySelector('.preview-file-name').style = 'display:none';
          previewThumbEl.classList.remove('icon');
          currentPreviewEl ? currentPreviewEl.remove() : null;
          previewVideoEl = document.createElement("img");
          previewThumbEl.prepend(previewVideoEl);
          previewVideoEl.classList.add('add-asset__preview-image');
          uploadFileUrlInput.setAttribute('value', assetData.permalink);
          uploadFileIDInput.setAttribute('value', assetData.attachment_id);
          previewVideoEl.src = assetData.thumbnail;
          currentPreviewEl = previewVideoEl;
          break;

        case "audio":
          formatRadios.find(function (el) {
            return el.value === 'format_audio';
          }).checked = true;
          previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
          previewThumbEl.querySelector('.preview-file-name').style = 'display:block';
          currentPreviewEl ? currentPreviewEl.remove() : null;
          previewAudioEl = document.createElement("div");
          previewThumbEl.prepend(previewAudioEl);
          previewThumbEl.classList.add('icon');
          previewThumbEl.querySelector('.preview-file-name').append(assetData.filename);
          previewAudioEl.classList.add('add-asset__preview-icon', 'material-icons');
          previewAudioEl.innerHTML = 'library_music';
          uploadFileUrlInput.setAttribute('value', assetData.permalink);
          uploadFileIDInput.setAttribute('value', assetData.attachment_id);
          currentPreviewEl = previewAudioEl;
          break;

        case "application":
          switch (mimeType.split("/")[1]) {
            case "vnd.openxmlformats-officedocument.wordprocessingml.document":
              formatRadios.find(function (el) {
                return el.value === 'format_document';
              }).checked = true;
              currentPreviewEl ? currentPreviewEl.remove() : null;
              previewDocEl = document.createElement("div");
              previewThumbEl.prepend(previewDocEl);
              previewThumbEl.classList.add('icon');
              previewThumbEl.querySelector('.preview-file-name').style = 'display:block';
              previewThumbEl.querySelector('.preview-file-name').append(assetData.filename);
              previewDocEl.classList.add('add-asset__preview-icon', 'material-icons');
              previewDocEl.innerHTML = 'description';
              uploadFileUrlInput.setAttribute('value', assetData.permalink);
              uploadFileIDInput.setAttribute('value', assetData.attachment_id);
              currentPreviewEl = previewDocEl;
              break;

            case "pdf":
              formatRadios.find(function (el) {
                return el.value === 'format_document';
              }).checked = true;
              previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
              previewThumbEl.querySelector('.preview-file-name').style = 'display:none';
              previewThumbEl.classList.remove('icon');
              currentPreviewEl ? currentPreviewEl.remove() : null;
              previewDocEl = document.createElement("img");
              previewThumbEl.prepend(previewDocEl);
              previewDocEl.classList.add('add-asset__preview-image');
              uploadFileUrlInput.setAttribute('value', assetData.permalink);
              uploadFileIDInput.setAttribute('value', assetData.attachment_id);
              previewDocEl.src = assetData.thumbnail;
              currentPreviewEl = previewDocEl;
              break;

            case "zip":
              console.log(formatRadios.find(function (el) {
                return el.checked === true;
              }).value);

              if (formatRadios.find(function (el) {
                return el.checked === true;
              }).value !== 'format_audio-zip' && formatRadios.find(function (el) {
                return el.checked === true;
              }).value !== 'format_zip') {
                formatRadios.find(function (el) {
                  return el.value === 'format_zip';
                }).checked = true;
              }

              previewThumbEl.querySelector('.preview-file-name').innerHTML = "";
              currentPreviewEl ? currentPreviewEl.remove() : null;
              previewZipEl = document.createElement("div");
              previewThumbEl.classList.add('icon');
              previewThumbEl.querySelector('.preview-file-name').style = 'display:block';
              previewThumbEl.querySelector('.preview-file-name').append(assetData.filename);
              previewThumbEl.prepend(previewZipEl);
              previewZipEl.classList.add('add-asset__preview-icon', 'media-archive-icon');
              previewZipEl.innerHTML = 'media-archive';
              uploadFileUrlInput.setAttribute('value', assetData.permalink);
              uploadFileIDInput.setAttribute('value', assetData.attachment_id);
              currentPreviewEl = previewZipEl;
              break;
          }

          break;
      }

      previewEl.style = "display: flex";
      uploadButton.style = "display:none";
      addAssetFormEl.dispatchEvent(changeEvent);
      /* -------------------------------------------------------------------------- */

      /*                                RESET DIALOG                                */

      /* -------------------------------------------------------------------------- */

      addAssetDialog.listen("MDCDialog:closed", function (e) {
        /* -------------------- RESET EDITED LABELS OUTSIDE FORM -------------------- */
        addAssetDialogRoot.querySelector('.mdc-dialog__title').innerText = 'Add New Asset';
        addAssetDialogRoot.querySelector('#add-asset__save-button').innerText = 'Save';
        $('.mdc-dialog__content').empty();
        $('.mdc-dialog__content').append(addAssetDialogHTML);
        wasEscaped = false;
      });
    });
  });
});

/***/ }),

/***/ "./src/scss/frontend-media-uploader.scss":
/*!***********************************************!*\
  !*** ./src/scss/frontend-media-uploader.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "../css/frontend-media-uploader.css");

/***/ })

/******/ });
//# sourceMappingURL=frontend-addasset-min.js.map