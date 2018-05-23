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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(9);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(27);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(4);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @return {!MDCRippleFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelectionControl = exports.MDCSelectionControlState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-enable no-unused-vars */

/**
 * @typedef {{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
var MDCSelectionControlState = void 0;

/**
 * @record
 */

var MDCSelectionControl = function () {
  function MDCSelectionControl() {
    _classCallCheck(this, MDCSelectionControl);
  }

  _createClass(MDCSelectionControl, [{
    key: 'ripple',

    /** @return {?MDCRipple} */
    get: function get() {}
  }]);

  return MDCSelectionControl;
}();

exports.MDCSelectionControlState = MDCSelectionControlState;
exports.MDCSelectionControl = MDCSelectionControl;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCComponent = exports.MDCFoundation = undefined;

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.MDCFoundation = _foundation2.default;
exports.MDCComponent = _component2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(17);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */
var MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

  _createClass(MDCTextFieldHelperTextFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /**
     * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldHelperTextAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldHelperTextAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldHelperTextAdapter} adapter
     */

  }]);

  function MDCTextFieldHelperTextFoundation(adapter) {
    _classCallCheck(this, MDCTextFieldHelperTextFoundation);

    return _possibleConstructorReturn(this, (MDCTextFieldHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperTextFoundation)).call(this, Object.assign(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */


  _createClass(MDCTextFieldHelperTextFoundation, [{
    key: 'setContent',
    value: function setContent(content) {
      this.adapter_.setContent(content);
    }

    /** @param {boolean} isPersistent Sets the persistency of the helper text. */

  }, {
    key: 'setPersistent',
    value: function setPersistent(isPersistent) {
      if (isPersistent) {
        this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      }
    }

    /**
     * @param {boolean} isValidation True to make the helper text act as an
     *   error validation message.
     */

  }, {
    key: 'setValidation',
    value: function setValidation(isValidation) {
      if (isValidation) {
        this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      }
    }

    /** Makes the helper text visible to the screen reader. */

  }, {
    key: 'showToScreenReader',
    value: function showToScreenReader() {
      this.adapter_.removeAttr(_constants.strings.ARIA_HIDDEN);
    }

    /**
     * Sets the validity of the helper text based on the input validity.
     * @param {boolean} inputIsValid
     */

  }, {
    key: 'setValidity',
    value: function setValidity(inputIsValid) {
      var helperTextIsPersistent = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
      var helperTextIsValidationMsg = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setAttr(_constants.strings.ROLE, 'alert');
      } else {
        this.adapter_.removeAttr(_constants.strings.ROLE);
      }

      if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
        this.hide_();
      }
    }

    /**
     * Hides the help text from screen readers.
     * @private
     */

  }, {
    key: 'hide_',
    value: function hide_() {
      this.adapter_.setAttr(_constants.strings.ARIA_HIDDEN, 'true');
    }
  }]);

  return MDCTextFieldHelperTextFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldHelperTextFoundation;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(18);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
 * @final
 */
var MDCTextFieldIconFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldIconFoundation, _MDCFoundation);

  _createClass(MDCTextFieldIconFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /**
     * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldIconAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldIconAdapter} */{
          getAttr: function getAttr() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          notifyIconAction: function notifyIconAction() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldIconAdapter} adapter
     */

  }]);

  function MDCTextFieldIconFoundation(adapter) {
    _classCallCheck(this, MDCTextFieldIconFoundation);

    /** @private {string?} */
    var _this = _possibleConstructorReturn(this, (MDCTextFieldIconFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldIconFoundation)).call(this, Object.assign(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

    _this.savedTabIndex_ = null;

    /** @private {function(!Event): undefined} */
    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };
    return _this;
  }

  _createClass(MDCTextFieldIconFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

      ['click', 'keydown'].forEach(function (evtType) {
        _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      ['click', 'keydown'].forEach(function (evtType) {
        _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
      });
    }

    /**
     * Sets the content of the helper text field.
     * @param {boolean} disabled
     */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      if (!this.savedTabIndex_) {
        return;
      }

      if (disabled) {
        this.adapter_.setAttr('tabindex', '-1');
        this.adapter_.removeAttr('role');
      } else {
        this.adapter_.setAttr('tabindex', this.savedTabIndex_);
        this.adapter_.setAttr('role', _constants.strings.ICON_ROLE);
      }
    }

    /**
     * Handles an interaction event
     * @param {!Event} evt
     */

  }, {
    key: 'handleInteraction',
    value: function handleInteraction(evt) {
      if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
        this.adapter_.notifyIconAction();
      }
    }
  }]);

  return MDCTextFieldIconFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldIconFoundation;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFloatingLabelFoundation = exports.MDCFloatingLabel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(11);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(38);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */
var MDCFloatingLabel = function (_MDCComponent) {
  _inherits(MDCFloatingLabel, _MDCComponent);

  function MDCFloatingLabel() {
    _classCallCheck(this, MDCFloatingLabel);

    return _possibleConstructorReturn(this, (MDCFloatingLabel.__proto__ || Object.getPrototypeOf(MDCFloatingLabel)).apply(this, arguments));
  }

  _createClass(MDCFloatingLabel, [{
    key: 'shake',


    /**
     * Styles the label to produce the label shake for errors.
     * @param {boolean} shouldShake styles the label to shake by adding shake class
     * if true, otherwise will stop shaking by removing shake class.
     */
    value: function shake(shouldShake) {
      this.foundation_.shake(shouldShake);
    }

    /**
     * Styles label to float/dock.
     * @param {boolean} shouldFloat styles the label to float by adding float class
     * if true, otherwise docks the label by removing the float class.
     */

  }, {
    key: 'float',
    value: function float(shouldFloat) {
      this.foundation_.float(shouldFloat);
    }

    /**
     * @return {number}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.foundation_.getWidth();
    }

    /**
     * @return {!MDCFloatingLabelFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        getWidth: function getWidth() {
          return _this2.root_.offsetWidth;
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        }
      });
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCFloatingLabel}
     */
    value: function attachTo(root) {
      return new MDCFloatingLabel(root);
    }
  }]);

  return MDCFloatingLabel;
}(_component2.default);

exports.MDCFloatingLabel = MDCFloatingLabel;
exports.MDCFloatingLabelFoundation = _foundation2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCFloatingLabelAdapter = function () {
  function MDCFloatingLabelAdapter() {
    _classCallCheck(this, MDCFloatingLabelAdapter);
  }

  _createClass(MDCFloatingLabelAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the label element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the label element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns the width of the label element.
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {}

    /**
     * Registers an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the root element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}
  }]);

  return MDCFloatingLabelAdapter;
}();

exports.default = MDCFloatingLabelAdapter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCLineRippleFoundation = exports.MDCLineRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(13);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(40);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCLineRippleFoundation>}
 * @final
 */
var MDCLineRipple = function (_MDCComponent) {
  _inherits(MDCLineRipple, _MDCComponent);

  function MDCLineRipple() {
    _classCallCheck(this, MDCLineRipple);

    return _possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
  }

  _createClass(MDCLineRipple, [{
    key: 'activate',


    /**
     * Activates the line ripple
     */
    value: function activate() {
      this.foundation_.activate();
    }

    /**
     * Deactivates the line ripple
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }

    /**
     * Sets the transform origin given a user's click location. The `rippleCenter` is the
     * x-coordinate of the middle of the ripple.
     * @param {number} xCoordinate
     */

  }, {
    key: 'setRippleCenter',
    value: function setRippleCenter(xCoordinate) {
      this.foundation_.setRippleCenter(xCoordinate);
    }

    /**
     * @return {!MDCLineRippleFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCLineRippleAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        setStyle: function setStyle(propertyName, value) {
          return _this2.root_.style[propertyName] = value;
        },
        registerEventHandler: function registerEventHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        }
      }));
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCLineRipple}
     */
    value: function attachTo(root) {
      return new MDCLineRipple(root);
    }
  }]);

  return MDCLineRipple;
}(_component2.default);

exports.MDCLineRipple = MDCLineRipple;
exports.MDCLineRippleFoundation = _foundation2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC TextField Line Ripple.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the line ripple into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCLineRippleAdapter = function () {
  function MDCLineRippleAdapter() {
    _classCallCheck(this, MDCLineRippleAdapter);
  }

  _createClass(MDCLineRippleAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the line ripple element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the line ripple element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets the style property with propertyName to value on the root element.
     * @param {string} propertyName
     * @param {string} value
     */

  }, {
    key: "setStyle",
    value: function setStyle(propertyName, value) {}

    /**
     * Registers an event listener on the line ripple element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerEventHandler",
    value: function registerEventHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the line ripple element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterEventHandler",
    value: function deregisterEventHandler(evtType, handler) {}
  }]);

  return MDCLineRippleAdapter;
}();

exports.default = MDCLineRippleAdapter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = exports.cssClasses = {
  BOX: 'mdc-select--box',
  DISABLED: 'mdc-select--disabled',
  ROOT: 'mdc-select'
};

var strings = exports.strings = {
  CHANGE_EVENT: 'MDCSelect:change',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  LABEL_SELECTOR: '.mdc-floating-label',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-text-field',
  UPGRADED: 'mdc-text-field--upgraded',
  DISABLED: 'mdc-text-field--disabled',
  DENSE: 'mdc-text-field--dense',
  FOCUSED: 'mdc-text-field--focused',
  INVALID: 'mdc-text-field--invalid',
  BOX: 'mdc-text-field--box',
  OUTLINED: 'mdc-text-field--outlined'
};

/** @enum {number} */
var numbers = {
  LABEL_SCALE: 0.75,
  DENSE_LABEL_SCALE: 0.923
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoundationMapType = exports.NativeInputType = exports.MDCTextFieldAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _foundation = __webpack_require__(6);

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = __webpack_require__(7);

var _foundation4 = _interopRequireDefault(_foundation3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * @typedef {{
 *   value: string,
 *   disabled: boolean,
 *   badInput: boolean,
 *   validity: {
 *     badInput: boolean,
 *     valid: boolean,
 *   },
 * }}
 */
var NativeInputType = void 0;

/**
 * @typedef {{
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 * }}
 */
var FoundationMapType = void 0;

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTextFieldAdapter = function () {
  function MDCTextFieldAdapter() {
    _classCallCheck(this, MDCTextFieldAdapter);
  }

  _createClass(MDCTextFieldAdapter, [{
    key: 'addClass',

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /**
     * Returns true if the root element contains the given class name.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: 'hasClass',
    value: function hasClass(className) {}

    /**
     * Registers an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'registerTextFieldInteractionHandler',
    value: function registerTextFieldInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the root element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'deregisterTextFieldInteractionHandler',
    value: function deregisterTextFieldInteractionHandler(type, handler) {}

    /**
     * Registers an event listener on the native input element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'registerInputInteractionHandler',
    value: function registerInputInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the native input element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: 'deregisterInputInteractionHandler',
    value: function deregisterInputInteractionHandler(evtType, handler) {}

    /**
     * Registers a validation attribute change listener on the input element.
     * @param {function(!Array): undefined} handler
     * @return {!MutationObserver}
     */

  }, {
    key: 'registerValidationAttributeChangeHandler',
    value: function registerValidationAttributeChangeHandler(handler) {}

    /**
     * Disconnects a validation attribute observer on the input element.
     * @param {!MutationObserver} observer
     */

  }, {
    key: 'deregisterValidationAttributeChangeHandler',
    value: function deregisterValidationAttributeChangeHandler(observer) {}

    /**
     * Returns an object representing the native text input element, with a
     * similar API shape. The object returned should include the value, disabled
     * and badInput properties, as well as the checkValidity() function. We never
     * alter the value within our code, however we do update the disabled
     * property, so if you choose to duck-type the return value for this method
     * in your implementation it's important to keep this in mind. Also note that
     * this method can return null, which the foundation will handle gracefully.
     * @return {?Element|?NativeInputType}
     */

  }, {
    key: 'getNativeInput',
    value: function getNativeInput() {}

    /**
     * Returns true if the textfield is focused.
     * We achieve this via `document.activeElement === this.root_`.
     * @return {boolean}
     */

  }, {
    key: 'isFocused',
    value: function isFocused() {}

    /**
     * Returns true if the direction of the root element is set to RTL.
     * @return {boolean}
     */

  }, {
    key: 'isRtl',
    value: function isRtl() {}

    /**
     * Activates the line ripple.
     */

  }, {
    key: 'activateLineRipple',
    value: function activateLineRipple() {}

    /**
     * Deactivates the line ripple.
     */

  }, {
    key: 'deactivateLineRipple',
    value: function deactivateLineRipple() {}

    /**
     * Sets the transform origin of the line ripple.
     * @param {number} normalizedX
     */

  }, {
    key: 'setLineRippleTransformOrigin',
    value: function setLineRippleTransformOrigin(normalizedX) {}

    /**
     * Only implement if label exists.
     * Shakes label if shouldShake is true.
     * @param {boolean} shouldShake
     */

  }, {
    key: 'shakeLabel',
    value: function shakeLabel(shouldShake) {}

    /**
     * Only implement if label exists.
     * Floats the label above the input element if shouldFloat is true.
     * @param {boolean} shouldFloat
     */

  }, {
    key: 'floatLabel',
    value: function floatLabel(shouldFloat) {}

    /**
     * Returns true if label element exists, false if it doesn't.
     * @return {boolean}
     */

  }, {
    key: 'hasLabel',
    value: function hasLabel() {}

    /**
     * Only implement if label exists.
     * Returns width of label in pixels.
     * @return {number}
     */

  }, {
    key: 'getLabelWidth',
    value: function getLabelWidth() {}

    /**
     * Returns true if outline element exists, false if it doesn't.
     * @return {boolean}
     */

  }, {
    key: 'hasOutline',
    value: function hasOutline() {}

    /**
     * Only implement if outline element exists.
     * Updates SVG Path and outline element based on the
     * label element width and RTL context.
     * @param {number} labelWidth
     * @param {boolean=} isRtl
     */

  }, {
    key: 'notchOutline',
    value: function notchOutline(labelWidth, isRtl) {}

    /**
     * Only implement if outline element exists.
     * Closes notch in outline element.
     */

  }, {
    key: 'closeOutline',
    value: function closeOutline() {}
  }]);

  return MDCTextFieldAdapter;
}();

exports.MDCTextFieldAdapter = MDCTextFieldAdapter;
exports.NativeInputType = NativeInputType;
exports.FoundationMapType = FoundationMapType;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldHelperTextAdapter = function () {
  function MDCTextFieldHelperTextAdapter() {
    _classCallCheck(this, MDCTextFieldHelperTextAdapter);
  }

  _createClass(MDCTextFieldHelperTextAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the helper text element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the helper text element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns whether or not the helper text element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets an attribute with a given value on the helper text element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Removes an attribute from the helper text element.
     * @param {string} attr
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(attr) {}

    /**
     * Sets the text content for the helper text element.
     * @param {string} content
     */

  }, {
    key: "setContent",
    value: function setContent(content) {}
  }]);

  return MDCTextFieldHelperTextAdapter;
}();

exports.default = MDCTextFieldHelperTextAdapter;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Icon.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the text field icon into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldIconAdapter = function () {
  function MDCTextFieldIconAdapter() {
    _classCallCheck(this, MDCTextFieldIconAdapter);
  }

  _createClass(MDCTextFieldIconAdapter, [{
    key: "getAttr",

    /**
     * Gets the value of an attribute on the icon element.
     * @param {string} attr
     * @return {string}
     */
    value: function getAttr(attr) {}

    /**
     * Sets an attribute on the icon element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttr",
    value: function setAttr(attr, value) {}

    /**
     * Removes an attribute from the icon element.
     * @param {string} attr
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(attr) {}

    /**
     * Registers an event listener on the icon element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * Deregisters an event listener on the icon element for a given event.
     * @param {string} evtType
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
     */

  }, {
    key: "notifyIconAction",
    value: function notifyIconAction() {}
  }]);

  return MDCTextFieldIconAdapter;
}();

exports.default = MDCTextFieldIconAdapter;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCNotchedOutlineAdapter = function () {
  function MDCNotchedOutlineAdapter() {
    _classCallCheck(this, MDCNotchedOutlineAdapter);
  }

  _createClass(MDCNotchedOutlineAdapter, [{
    key: "getWidth",

    /**
     * Returns the width of the root element.
     * @return {number}
     */
    value: function getWidth() {}

    /**
     * Returns the height of the root element.
     * @return {number}
     */

  }, {
    key: "getHeight",
    value: function getHeight() {}

    /**
     * Adds a class to the root element.
     * @param {string} className
     */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /**
     * Removes a class from the root element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Sets the "d" attribute of the outline element's SVG path.
     * @param {string} value
     */

  }, {
    key: "setOutlinePathAttr",
    value: function setOutlinePathAttr(value) {}

    /**
     * Returns the idle outline element's computed style value of the given css property `propertyName`.
     * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
     * @param {string} propertyName
     * @return {string}
     */

  }, {
    key: "getIdleOutlineStyleValue",
    value: function getIdleOutlineStyleValue(propertyName) {}
  }]);

  return MDCNotchedOutlineAdapter;
}();

exports.default = MDCNotchedOutlineAdapter;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle'
};

/** @enum {string} */
var cssClasses = {
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched'
};

exports.cssClasses = cssClasses;
exports.strings = strings;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCComponent = exports.MDCFoundation = undefined;

var _foundation = __webpack_require__(8);

var _foundation2 = _interopRequireDefault(_foundation);

var _component = __webpack_require__(22);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.MDCFoundation = _foundation2.default;
exports.MDCComponent = _component2.default;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(8);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-menu',
  OPEN: 'mdc-menu--open',
  ANIMATING_OPEN: 'mdc-menu--animating-open',
  ANIMATING_CLOSED: 'mdc-menu--animating-closed',
  SELECTED_LIST_ITEM: 'mdc-list-item--selected'
};

/** @enum {string} */
var strings = {
  ITEMS_SELECTOR: '.mdc-menu__items',
  SELECTED_EVENT: 'MDCMenu:selected',
  CANCEL_EVENT: 'MDCMenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled'
};

/** @enum {number} */
var numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of menu open animation.
  TRANSITION_OPEN_DURATION: 120,
  // Total duration of menu close animation.
  TRANSITION_CLOSE_DURATION: 75,
  // Margin left to the edge of the viewport when menu is at maximum possible height.
  MARGIN_TO_EDGE: 32,
  // Ratio of anchor width to menu width for switching from corner positioning to center positioning.
  ANCHOR_TO_MENU_WIDTH_RATIO: 0.67,
  // Ratio of vertical offset to menu height for switching from corner to mid-way origin positioning.
  OFFSET_TO_MENU_HEIGHT_RATIO: 0.1
};

/**
 * Enum for bits in the {@see Corner) bitmap.
 * @enum {number}
 */
var CornerBit = {
  BOTTOM: 1,
  CENTER: 2,
  RIGHT: 4,
  FLIP_RTL: 8
};

/**
 * Enum for representing an element corner for positioning the menu.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 *
 * @enum {number}
 */
var Corner = {
  TOP_LEFT: 0,
  TOP_RIGHT: CornerBit.RIGHT,
  BOTTOM_LEFT: CornerBit.BOTTOM,
  BOTTOM_RIGHT: CornerBit.BOTTOM | CornerBit.RIGHT,
  TOP_START: CornerBit.FLIP_RTL,
  TOP_END: CornerBit.FLIP_RTL | CornerBit.RIGHT,
  BOTTOM_START: CornerBit.BOTTOM | CornerBit.FLIP_RTL,
  BOTTOM_END: CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;
exports.CornerBit = CornerBit;
exports.Corner = Corner;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ripple = __webpack_require__(2);

var _toolbar = __webpack_require__(29);

var _checkbox = __webpack_require__(32);

var _select = __webpack_require__(37);

var _mui = __webpack_require__(43);

var _textfield = __webpack_require__(44);

var _dialog = __webpack_require__(52);

var _radio = __webpack_require__(61);

var _menu = __webpack_require__(65);

var radios = [];

for (var z = 0; z < document.querySelectorAll('.mdc-radio').length; z++) {
    radios[z] = new _radio.MDCRadio(document.querySelectorAll('.mdc-radio')[z]);
}

var buttons1 = [];

for (var j = 0; j < document.querySelectorAll('.mdc-button').length; j++) {
    buttons1[j] = new _ripple.MDCRipple(document.querySelectorAll('.mdc-button')[j]);
}

var toolbar = _toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

var checkboxs = [];

for (var i = 0; i < document.querySelectorAll('.mdc-checkbox').length; i++) {
    checkboxs[i] = new _checkbox.MDCCheckbox(document.querySelectorAll('.mdc-checkbox')[i]);
    console.log(checkboxs[i]);
}

var textfields = [];

for (var k = 0; k < document.querySelectorAll('.mdc-text-field').length; k++) {
    textfields[i] = new _textfield.MDCTextField(document.querySelectorAll('.mdc-text-field')[k]);
}

if (document.querySelector('#evaluation-dialog') !== null) {
    var dialog = new _dialog.MDCDialog(document.querySelector('#evaluation-dialog'));
    var dialog2 = new _dialog.MDCDialog(document.querySelector('#special-evaluation-dialog'));
    var dialog3 = new _dialog.MDCDialog(document.querySelector('#feedback-dialog'));

    dialog.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });

    dialog.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });

    dialog2.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });

    dialog2.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });

    dialog3.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });

    dialog3.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });

    for (var le = 0; le < document.querySelectorAll('.button-confirm').length; le++) {
        document.querySelectorAll('.button-confirm')[le].onclick = function (evt) {
            if (this.innerHTML === 'Feedback') {
                dialog3.lastFocusedTarget = evt.target;
                dialog3.show();
            } else {
                if (this.parentElement.parentElement.children[4].innerHTML === 'Avulsa') {
                    dialog.lastFocusedTarget = evt.target;
                    dialog.show();
                } else {
                    dialog2.lastFocusedTarget = evt.target;
                    dialog2.show();
                }
            }
        };
    }

    document.querySelector('#problema_id').onclick = function () {
        if (checkboxs[0].checked) {
            console.log('teste');
            document.querySelector('#description-problem').innerHTML = '<span class="mdc-typography--subtitle">Tipo de problema</span><section><label id="ocorrencia-radio-label-id"><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" id="ocorrencia-radio-id" name="reserve-type" checked><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div>Ocorrência</label><label id="anormalidade-radio-label-id"><div class="mdc-radio"><input class="mdc-radio__native-control" type="radio" id="anormalidade-radio-id" name="reserve-type"><div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div><div class="mdc-radio__inner-circle"></div></div></div>Anormalidade</label></section><div class="row"><form class="col s12"><div class="row"><div class="input-field col s12"><textarea id="feedback-textarea-id" class="materialize-textarea"></textarea><label for="feedback-textarea-id">Dê mais informações sobre o problema</label></div></div></form></div>';
        } else {
            console.log('teste1');
            document.querySelector('#description-problem').textContent = 'Caso não haja nenhum problema, clique em confirmar.';
        }
    };
}

if (document.querySelector('#fixed-dialog') !== null) {
    var dialog4 = new _dialog.MDCDialog(document.querySelector('#fixed-dialog'));

    dialog4.listen('MDCDialog:accept', function () {
        console.log('accepted');
    });

    dialog4.listen('MDCDialog:cancel', function () {
        console.log('canceled');
    });

    for (var ca = 0; ca < document.querySelectorAll('.button-fixed-confirm').length; ca++) {
        document.querySelectorAll('.button-fixed-confirm')[ca].onclick = function (evt) {
            dialog4.lastFocusedTarget = evt.target;
            dialog4.show();
        };
    }
}

//const select = new MDCSelect(document.querySelector('.mdc-select'));
//console.log(select);

// b.click(function () {
//     if (!b.is('glayson')) {
//         console.log('glayson existe')
//         b.attr('glayson', 'rola')
//         setTimeout(() => $('div.mui-select__menu'), 300)
//     } else {
//         b.prop('glayson', null)
//         console.log('glayson foi removido')
//     }
// });


//index

var menuEl = document.querySelector('.mdc-menu');
if (menuEl) {
  // menu Instantiation
  var menu = new _menu.MDCMenu(menuEl);
  setTimeout(function() {
      var menuButtonEl = document.querySelector('.user-menu-link');

      // Toggle menu open
      if(menuButtonEl)
      menuButtonEl.addEventListener('click', function () {
          menu.open = !menu.open;
      });

      for (var i = 0; i < document.querySelectorAll('.mdc-menu .mdc-list-item').length; i++) {
          var element = document.querySelectorAll('.mdc-menu .mdc-list-item')[i];
          element.onclick = function () {
              menu.open = !menu.open;
              element.getElementsByTagName("a")[0].click();
          };
      }
  }, 40)
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(9);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(28);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',
    value: function isSupported_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.registerRootHandlers_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this2.layoutInternal_();
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (!this.isSupported_()) {
        return;
      }

      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

        this.adapter_.removeClass(FG_ACTIVATION);
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    /** @private */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_() {
      var _this4 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCToolbar = exports.MDCToolbarFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = __webpack_require__(5);

var _index2 = __webpack_require__(2);

var _foundation = __webpack_require__(30);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCToolbarFoundation = _foundation2.default;

var MDCToolbar = exports.MDCToolbar = function (_MDCComponent) {
  _inherits(MDCToolbar, _MDCComponent);

  function MDCToolbar() {
    _classCallCheck(this, MDCToolbar);

    return _possibleConstructorReturn(this, (MDCToolbar.__proto__ || Object.getPrototypeOf(MDCToolbar)).apply(this, arguments));
  }

  _createClass(MDCToolbar, [{
    key: 'initialize',
    value: function initialize() {
      this.ripples_ = [].map.call(this.root_.querySelectorAll(_foundation2.default.strings.ICON_SELECTOR), function (icon) {
        var ripple = _index2.MDCRipple.attachTo(icon);
        ripple.unbounded = true;
        return ripple;
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripples_.forEach(function (ripple) {
        ripple.destroy();
      });
      _get(MDCToolbar.prototype.__proto__ || Object.getPrototypeOf(MDCToolbar.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        registerScrollHandler: function registerScrollHandler(handler) {
          return window.addEventListener('scroll', handler);
        },
        deregisterScrollHandler: function deregisterScrollHandler(handler) {
          return window.removeEventListener('scroll', handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        getViewportWidth: function getViewportWidth() {
          return window.innerWidth;
        },
        getViewportScrollY: function getViewportScrollY() {
          return window.pageYOffset;
        },
        getOffsetHeight: function getOffsetHeight() {
          return _this2.root_.offsetHeight;
        },
        getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
          return _this2.firstRowElement_.offsetHeight;
        },
        notifyChange: function notifyChange(evtData) {
          return _this2.emit(_foundation2.default.strings.CHANGE_EVENT, evtData);
        },
        setStyle: function setStyle(property, value) {
          return _this2.root_.style.setProperty(property, value);
        },
        setStyleForTitleElement: function setStyleForTitleElement(property, value) {
          return _this2.titleElement_.style.setProperty(property, value);
        },
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement(property, value) {
          return _this2.firstRowElement_.style.setProperty(property, value);
        },
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement(property, value) {
          if (_this2.fixedAdjustElement) {
            _this2.fixedAdjustElement.style.setProperty(property, value);
          }
        }
      });
    }
  }, {
    key: 'firstRowElement_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.FIRST_ROW_SELECTOR);
    }
  }, {
    key: 'titleElement_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.TITLE_SELECTOR);
    }
  }, {
    key: 'fixedAdjustElement',
    set: function set(fixedAdjustElement) {
      this.fixedAdjustElement_ = fixedAdjustElement;
      this.foundation_.updateAdjustElementStyles();
    },
    get: function get() {
      return this.fixedAdjustElement_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCToolbar(root);
    }
  }]);

  return MDCToolbar;
}(_index.MDCComponent);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MDCToolbarFoundation = function (_MDCFoundation) {
  _inherits(MDCToolbarFoundation, _MDCFoundation);

  _createClass(MDCToolbarFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        hasClass: function hasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
        deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        getViewportWidth: function getViewportWidth() {
          return (/* number */0
          );
        },
        getViewportScrollY: function getViewportScrollY() {
          return (/* number */0
          );
        },
        getOffsetHeight: function getOffsetHeight() {
          return (/* number */0
          );
        },
        getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
          return (/* number */0
          );
        },
        notifyChange: function notifyChange() /* evtData: {flexibleExpansionRatio: number} */{},
        setStyle: function setStyle() /* property: string, value: string */{},
        setStyleForTitleElement: function setStyleForTitleElement() /* property: string, value: string */{},
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement() /* property: string, value: string */{},
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement() /* property: string, value: string */{}
      };
    }
  }]);

  function MDCToolbarFoundation(adapter) {
    _classCallCheck(this, MDCToolbarFoundation);

    var _this = _possibleConstructorReturn(this, (MDCToolbarFoundation.__proto__ || Object.getPrototypeOf(MDCToolbarFoundation)).call(this, Object.assign(MDCToolbarFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.checkRowHeight_();
    };
    _this.scrollHandler_ = function () {
      return _this.updateToolbarStyles_();
    };
    _this.checkRowHeightFrame_ = 0;
    _this.scrollFrame_ = 0;
    _this.executedLastChange_ = false;

    _this.calculations_ = {
      toolbarRowHeight: 0,
      // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
      toolbarRatio: 0, // The ratio of toolbar height to row height
      flexibleExpansionRatio: 0, // The ratio of flexible space height to row height
      maxTranslateYRatio: 0, // The ratio of max toolbar move up distance to row height
      scrollThresholdRatio: 0, // The ratio of max scrollTop that we should listen to to row height
      // Derived Heights based on the above key ratios.
      toolbarHeight: 0,
      flexibleExpansionHeight: 0, // Flexible row minus toolbar height (derived)
      maxTranslateYDistance: 0, // When toolbar only fix last row (derived)
      scrollThreshold: 0
    };
    // Toolbar fixed behavior
    // If toolbar is fixed
    _this.fixed_ = false;
    // If fixed is targeted only at the last row
    _this.fixedLastrow_ = false;
    // Toolbar flexible behavior
    // If the first row is flexible
    _this.hasFlexibleRow_ = false;
    // If use the default behavior
    _this.useFlexDefaultBehavior_ = false;
    return _this;
  }

  _createClass(MDCToolbarFoundation, [{
    key: 'init',
    value: function init() {
      this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
      this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
      this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
      if (this.hasFlexibleRow_) {
        this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
      }
      this.initKeyRatio_();
      this.setKeyHeights_();
      this.adapter_.registerResizeHandler(this.resizeHandler_);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'updateAdjustElementStyles',
    value: function updateAdjustElementStyles() {
      if (this.fixed_) {
        this.adapter_.setStyleForFixedAdjustElement('margin-top', this.calculations_.toolbarHeight + 'px');
      }
    }
  }, {
    key: 'getFlexibleExpansionRatio_',
    value: function getFlexibleExpansionRatio_(scrollTop) {
      // To prevent division by zero when there is no flexibleExpansionHeight
      var delta = 0.0001;
      return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
    }
  }, {
    key: 'checkRowHeight_',
    value: function checkRowHeight_() {
      var _this2 = this;

      cancelAnimationFrame(this.checkRowHeightFrame_);
      this.checkRowHeightFrame_ = requestAnimationFrame(function () {
        return _this2.setKeyHeights_();
      });
    }
  }, {
    key: 'setKeyHeights_',
    value: function setKeyHeights_() {
      var newToolbarRowHeight = this.getRowHeight_();
      if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
        this.calculations_.toolbarRowHeight = newToolbarRowHeight;
        this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
        this.calculations_.flexibleExpansionHeight = this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
        this.calculations_.maxTranslateYDistance = this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
        this.calculations_.scrollThreshold = this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
        this.updateAdjustElementStyles();
        this.updateToolbarStyles_();
      }
    }
  }, {
    key: 'updateToolbarStyles_',
    value: function updateToolbarStyles_() {
      var _this3 = this;

      cancelAnimationFrame(this.scrollFrame_);
      this.scrollFrame_ = requestAnimationFrame(function () {
        var scrollTop = _this3.adapter_.getViewportScrollY();
        var hasScrolledOutOfThreshold = _this3.scrolledOutOfThreshold_(scrollTop);

        if (hasScrolledOutOfThreshold && _this3.executedLastChange_) {
          return;
        }

        var flexibleExpansionRatio = _this3.getFlexibleExpansionRatio_(scrollTop);

        _this3.updateToolbarFlexibleState_(flexibleExpansionRatio);
        if (_this3.fixedLastrow_) {
          _this3.updateToolbarFixedState_(scrollTop);
        }
        if (_this3.hasFlexibleRow_) {
          _this3.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
        }
        _this3.executedLastChange_ = hasScrolledOutOfThreshold;
        _this3.adapter_.notifyChange({ flexibleExpansionRatio: flexibleExpansionRatio });
      });
    }
  }, {
    key: 'scrolledOutOfThreshold_',
    value: function scrolledOutOfThreshold_(scrollTop) {
      return scrollTop > this.calculations_.scrollThreshold;
    }
  }, {
    key: 'initKeyRatio_',
    value: function initKeyRatio_() {
      var toolbarRowHeight = this.getRowHeight_();
      var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
      this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
      this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
      this.calculations_.maxTranslateYRatio = this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
      this.calculations_.scrollThresholdRatio = (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
    }
  }, {
    key: 'getRowHeight_',
    value: function getRowHeight_() {
      var breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
      return this.adapter_.getViewportWidth() < breakpoint ? MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
    }
  }, {
    key: 'updateToolbarFlexibleState_',
    value: function updateToolbarFlexibleState_(flexibleExpansionRatio) {
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
      if (flexibleExpansionRatio === 1) {
        this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
      } else if (flexibleExpansionRatio === 0) {
        this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
      }
    }
  }, {
    key: 'updateToolbarFixedState_',
    value: function updateToolbarFixedState_(scrollTop) {
      var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
      this.adapter_.setStyle('transform', 'translateY(' + -translateDistance + 'px)');

      if (translateDistance === this.calculations_.maxTranslateYDistance) {
        this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
      } else {
        this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
      }
    }
  }, {
    key: 'updateFlexibleRowElementStyles_',
    value: function updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
      if (this.fixed_) {
        var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
        this.adapter_.setStyleForFlexibleRowElement('height', height + this.calculations_.toolbarRowHeight + 'px');
      }
      if (this.useFlexDefaultBehavior_) {
        this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
      }
    }
  }, {
    key: 'updateElementStylesDefaultBehavior_',
    value: function updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
      var maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
      var minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
      var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;

      this.adapter_.setStyleForTitleElement('font-size', currentTitleSize + 'rem');
    }
  }]);

  return MDCToolbarFoundation;
}(_foundation2.default);

exports.default = MDCToolbarFoundation;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = exports.cssClasses = {
  FIXED: 'mdc-toolbar--fixed',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized'
};

var strings = exports.strings = {
  TITLE_SELECTOR: '.mdc-toolbar__title',
  ICON_SELECTOR: '.mdc-toolbar__icon',
  FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
  CHANGE_EVENT: 'MDCToolbar:change'
};

var numbers = exports.numbers = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56,
  TOOLBAR_MOBILE_BREAKPOINT: 600
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCCheckbox = exports.MDCCheckboxFoundation = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(33);

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index2 = __webpack_require__(3);

var _foundation = __webpack_require__(34);

var _foundation2 = _interopRequireDefault(_foundation);

var _index3 = __webpack_require__(2);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 * @implements {MDCSelectionControl}
 */
var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',


    /**
     * Returns the state of the native control element, or null if the native control element is not present.
     * @return {?MDCSelectionControlState}
     * @private
     */
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

      var cbEl = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return cbEl;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCCheckbox(root);
    }
  }]);

  function MDCCheckbox() {
    var _ref;

    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  _createClass(MDCCheckbox, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
      var adapter = Object.assign(_index3.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeCb_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeCb_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeCb_.removeEventListener(type, handler);
        }
      });
      var foundation = new _index3.MDCRippleFoundation(adapter);
      return new _index3.MDCRipple(this.root_, foundation);
    }

    /** @return {!MDCCheckboxFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        setNativeControlAttr: function setNativeControlAttr(attr, value) {
          return _this3.nativeCb_.setAttribute(attr, value);
        },
        removeNativeControlAttr: function removeNativeControlAttr(attr) {
          return _this3.nativeCb_.removeAttribute(attr);
        },
        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
          return _this3.root_.addEventListener((0, _index.getCorrectEventName)(window, 'animationend'), handler);
        },
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
          return _this3.root_.removeEventListener((0, _index.getCorrectEventName)(window, 'animationend'), handler);
        },
        registerChangeHandler: function registerChangeHandler(handler) {
          return _this3.nativeCb_.addEventListener('change', handler);
        },
        deregisterChangeHandler: function deregisterChangeHandler(handler) {
          return _this3.nativeCb_.removeEventListener('change', handler);
        },
        getNativeControl: function getNativeControl() {
          return _this3.nativeCb_;
        },
        forceLayout: function forceLayout() {
          return _this3.root_.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this3.root_.parentNode);
        }
      });
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    }

    /** @param {boolean} indeterminate */
    ,
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(_component2.default);

exports.MDCCheckboxFoundation = _foundation2.default;
exports.MDCCheckbox = MDCCheckbox;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

exports.transformStyleProperties = transformStyleProperties;
exports.getCorrectEventName = getCorrectEventName;
exports.getCorrectPropertyName = getCorrectPropertyName;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _index = __webpack_require__(3);

var _adapter = __webpack_require__(35);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/** @const {!Array<string>} */
var CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /** @return {!MDCCheckboxAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCCheckboxAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setNativeControlAttr: function setNativeControlAttr() /* attr: string, value: string */{},
          removeNativeControlAttr: function removeNativeControlAttr() /* attr: string */{},
          registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
          deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
          registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
          deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{},
          forceLayout: function forceLayout() {},
          isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
        }
      );
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    /** @private {string} */
    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = _constants.strings.TRANSITION_STATE_INIT;

    /** @private {string} */
    _this.currentAnimationClass_ = '';

    /** @private {number} */
    _this.animEndLatchTimer_ = 0;

    _this.animEndHandler_ = /** @private {!EventListener} */function () {
      return _this.handleAnimationEnd();
    };

    _this.changeHandler_ = /** @private {!EventListener} */function () {
      return _this.handleChange();
    };
    return _this;
  }

  _createClass(MDCCheckboxFoundation, [{
    key: 'init',
    value: function init() {
      this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
      this.updateAriaChecked_();
      this.adapter_.addClass(_constants.cssClasses.UPGRADED);
      this.adapter_.registerChangeHandler(this.changeHandler_);
      this.installPropertyChangeHooks_();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterChangeHandler(this.changeHandler_);
      this.uninstallPropertyChangeHooks_();
    }

    /** @return {boolean} */

  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }

    /** @param {boolean} checked */

  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }

    /** @return {boolean} */

  }, {
    key: 'isIndeterminate',
    value: function isIndeterminate() {
      return this.getNativeControl_().indeterminate;
    }

    /** @param {boolean} indeterminate */

  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      this.getNativeControl_().indeterminate = indeterminate;
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(_constants.cssClasses.DISABLED);
      } else {
        this.adapter_.removeClass(_constants.cssClasses.DISABLED);
      }
    }

    /** @return {?string} */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }

    /** @param {?string} value */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }

    /**
     * Handles the animationend event for the checkbox
     */

  }, {
    key: 'handleAnimationEnd',
    value: function handleAnimationEnd() {
      var _this2 = this;

      clearTimeout(this.animEndLatchTimer_);
      this.animEndLatchTimer_ = setTimeout(function () {
        _this2.adapter_.removeClass(_this2.currentAnimationClass_);
        _this2.adapter_.deregisterAnimationEndHandler(_this2.animEndHandler_);
      }, _constants.numbers.ANIM_END_LATCH_MS);
    }

    /**
     * Handles the change event for the checkbox
     */

  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.transitionCheckState_();
    }

    /** @private */

  }, {
    key: 'installPropertyChangeHooks_',
    value: function installPropertyChangeHooks_() {
      var _this3 = this;

      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          var nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);
              _this3.transitionCheckState_();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          };
          Object.defineProperty(nativeCb, controlState, nativeCbDesc);
        }
      });
    }

    /** @private */

  }, {
    key: 'uninstallPropertyChangeHooks_',
    value: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }

    /** @private */

  }, {
    key: 'transitionCheckState_',
    value: function transitionCheckState_() {
      var nativeCb = this.adapter_.getNativeControl();
      if (!nativeCb) {
        return;
      }
      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_(nativeCb);
      if (oldState === newState) {
        return;
      }

      this.updateAriaChecked_();

      // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.
      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState;

      // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.
      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
      }
    }

    /**
     * @param {!MDCSelectionControlState} nativeCb
     * @return {string}
     * @private
     */

  }, {
    key: 'determineCheckState_',
    value: function determineCheckState_(nativeCb) {
      var TRANSITION_STATE_INDETERMINATE = _constants.strings.TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;


      if (nativeCb.indeterminate) {
        return TRANSITION_STATE_INDETERMINATE;
      }
      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }

    /**
     * @param {string} oldState
     * @param {string} newState
     * @return {string}
     */

  }, {
    key: 'getTransitionAnimationClass_',
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = _constants.strings.TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }
        // fallthrough
        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE
        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: 'updateAriaChecked_',
    value: function updateAriaChecked_() {
      // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
      if (this.isIndeterminate()) {
        this.adapter_.setNativeControlAttr(_constants.strings.ARIA_CHECKED_ATTR, _constants.strings.ARIA_CHECKED_INDETERMINATE_VALUE);
      } else {
        this.adapter_.removeNativeControlAttr(_constants.strings.ARIA_CHECKED_ATTR);
      }
    }

    /**
     * @return {!MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        indeterminate: false,
        disabled: false,
        value: null
      };
    }
  }]);

  return MDCCheckboxFoundation;
}(_foundation2.default);

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */


function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

exports.default = MDCCheckboxFoundation;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCCheckboxAdapter = function () {
  function MDCCheckboxAdapter() {
    _classCallCheck(this, MDCCheckboxAdapter);
  }

  _createClass(MDCCheckboxAdapter, [{
    key: 'addClass',

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /**
     * Sets an attribute with a given value on the input element.
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: 'setNativeControlAttr',
    value: function setNativeControlAttr(attr, value) {}

    /**
     * Removes an attribute from the input element.
     * @param {string} attr
     */

  }, {
    key: 'removeNativeControlAttr',
    value: function removeNativeControlAttr(attr) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'registerAnimationEndHandler',
    value: function registerAnimationEndHandler(handler) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'deregisterAnimationEndHandler',
    value: function deregisterAnimationEndHandler(handler) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'registerChangeHandler',
    value: function registerChangeHandler(handler) {}

    /** @param {!EventListener} handler */

  }, {
    key: 'deregisterChangeHandler',
    value: function deregisterChangeHandler(handler) {}

    /** @return {!MDCSelectionControlState} */

  }, {
    key: 'getNativeControl',
    value: function getNativeControl() {}
  }, {
    key: 'forceLayout',
    value: function forceLayout() {}

    /** @return {boolean} */

  }, {
    key: 'isAttachedToDOM',
    value: function isAttachedToDOM() {}
  }]);

  return MDCCheckboxAdapter;
}();

exports.default = MDCCheckboxAdapter;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const {string} */
var ROOT = 'mdc-checkbox';

/** @enum {string} */
var cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
};

/** @enum {number} */
var numbers = {
  ANIM_END_LATCH_MS: 250
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelect = exports.MDCSelectFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = __webpack_require__(5);

var _index2 = __webpack_require__(10);

var _index3 = __webpack_require__(12);

var _index4 = __webpack_require__(2);

var _foundation = __webpack_require__(42);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCSelectFoundation = _foundation2.default;

var MDCSelect = exports.MDCSelect = function (_MDCComponent) {
  _inherits(MDCSelect, _MDCComponent);

  function MDCSelect() {
    _classCallCheck(this, MDCSelect);

    return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
  }

  _createClass(MDCSelect, [{
    key: 'initialize',
    value: function initialize() {
      var labelFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new _index2.MDCFloatingLabel(el);
      };
      var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new _index3.MDCLineRipple(el);
      };

      this.nativeControl_ = this.root_.querySelector(_constants.strings.NATIVE_CONTROL_SELECTOR);
      var labelElement = this.root_.querySelector(_constants.strings.LABEL_SELECTOR);
      if (labelElement) {
        this.label_ = labelFactory(labelElement);
      }
      var lineRippleElement = this.root_.querySelector(_constants.strings.LINE_RIPPLE_SELECTOR);
      if (lineRippleElement) {
        this.lineRipple_ = lineRippleFactory(lineRippleElement);
      }

      if (this.root_.classList.contains(_constants.cssClasses.BOX)) {
        this.ripple = this.initRipple_();
      }
    }
  }, {
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(_index4.MDCRipple.createAdapter(this), {
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        }
      });
      var foundation = new _index4.MDCRippleFoundation(adapter);
      return new _index4.MDCRipple(this.root_, foundation);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        floatLabel: function floatLabel(value) {
          if (_this3.label_) {
            _this3.label_.float(value);
          }
        },
        activateBottomLine: function activateBottomLine() {
          if (_this3.lineRipple_) {
            _this3.lineRipple_.activate();
          }
        },
        deactivateBottomLine: function deactivateBottomLine() {
          if (_this3.lineRipple_) {
            _this3.lineRipple_.deactivate();
          }
        },
        setDisabled: function setDisabled(disabled) {
          return _this3.nativeControl_.disabled = disabled;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this3.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this3.nativeControl_.removeEventListener(type, handler);
        },
        getSelectedIndex: function getSelectedIndex() {
          return _this3.nativeControl_.selectedIndex;
        },
        setSelectedIndex: function setSelectedIndex(index) {
          return _this3.nativeControl_.selectedIndex = index;
        },
        getValue: function getValue() {
          return _this3.nativeControl_.value;
        },
        setValue: function setValue(value) {
          return _this3.nativeControl_.value = value;
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // needed to sync floating label
      this.selectedIndex = this.nativeControl_.selectedIndex;

      if (this.nativeControl_.disabled) {
        this.disabled = true;
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.ripple) {
        this.ripple.destroy();
      }
      _get(MDCSelect.prototype.__proto__ || Object.getPrototypeOf(MDCSelect.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.nativeControl_.value;
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.nativeControl_.selectedIndex;
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSelect(root);
    }
  }]);

  return MDCSelect;
}(_index.MDCComponent);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(11);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */
var MDCFloatingLabelFoundation = function (_MDCFoundation) {
  _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

  _createClass(MDCFloatingLabelFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCFloatingLabelAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCFloatingLabelAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          getWidth: function getWidth() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {}
        }
      );
    }

    /**
     * @param {!MDCFloatingLabelAdapter} adapter
     */

  }]);

  function MDCFloatingLabelFoundation(adapter) {
    _classCallCheck(this, MDCFloatingLabelFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCFloatingLabelFoundation.__proto__ || Object.getPrototypeOf(MDCFloatingLabelFoundation)).call(this, Object.assign(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };
    return _this;
  }

  _createClass(MDCFloatingLabelFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    }

    /**
     * Returns the width of the label element.
     * @return {number}
     */

  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.adapter_.getWidth();
    }

    /**
     * Styles the label to produce the label shake for errors.
     * @param {boolean} shouldShake adds shake class if true,
     * otherwise removes shake class.
     */

  }, {
    key: 'shake',
    value: function shake(shouldShake) {
      var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

      if (shouldShake) {
        this.adapter_.addClass(LABEL_SHAKE);
      } else {
        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }

    /**
     * Styles the label to float or dock.
     * @param {boolean} shouldFloat adds float class if true, otherwise remove
     * float and shake class to dock label.
     */

  }, {
    key: 'float',
    value: function float(shouldFloat) {
      var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
          LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
          LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

      if (shouldFloat) {
        this.adapter_.addClass(LABEL_FLOAT_ABOVE);
      } else {
        this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }

    /**
     * Handles an interaction event on the root element.
     */

  }, {
    key: 'handleShakeAnimationEnd_',
    value: function handleShakeAnimationEnd_() {
      var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

      this.adapter_.removeClass(LABEL_SHAKE);
    }
  }]);

  return MDCFloatingLabelFoundation;
}(_foundation2.default);

exports.default = MDCFloatingLabelFoundation;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake'
};

exports.cssClasses = cssClasses;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(13);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCLineRippleAdapter>}
 * @final
 */
var MDCLineRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCLineRippleFoundation, _MDCFoundation);

  _createClass(MDCLineRippleFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCLineRippleAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCLineRippleAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCLineRippleAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setStyle: function setStyle() {},
          registerEventHandler: function registerEventHandler() {},
          deregisterEventHandler: function deregisterEventHandler() {}
        }
      );
    }

    /**
     * @param {!MDCLineRippleAdapter=} adapter
     */

  }]);

  function MDCLineRippleFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /** @type {!MDCLineRippleAdapter} */{};

    _classCallCheck(this, MDCLineRippleFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, Object.assign(MDCLineRippleFoundation.defaultAdapter, adapter)));

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };
    return _this;
  }

  _createClass(MDCLineRippleFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    }

    /**
     * Activates the line ripple
     */

  }, {
    key: 'activate',
    value: function activate() {
      this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
      this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
    }

    /**
     * Sets the center of the ripple animation to the given X coordinate.
     * @param {number} xCoordinate
     */

  }, {
    key: 'setRippleCenter',
    value: function setRippleCenter(xCoordinate) {
      this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
    }

    /**
     * Deactivates the line ripple
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
    }

    /**
     * Handles a transition end event
     * @param {!Event} evt
     */

  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(evt) {
      // Wait for the line ripple to be either transparent or opaque
      // before emitting the animation end event
      var isDeactivating = this.adapter_.hasClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);

      if (evt.propertyName === 'opacity') {
        if (isDeactivating) {
          this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
          this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
        }
      }
    }
  }]);

  return MDCLineRippleFoundation;
}(_foundation2.default);

exports.default = MDCLineRippleFoundation;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};

exports.cssClasses = cssClasses;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(5);

var _constants = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        floatLabel: function floatLabel() /* value: boolean */{},
        activateBottomLine: function activateBottomLine() {},
        deactivateBottomLine: function deactivateBottomLine() {},
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        getSelectedIndex: function getSelectedIndex() {
          return (/* number */-1
          );
        },
        setSelectedIndex: function setSelectedIndex() /* index: number */{},
        setDisabled: function setDisabled() /* disabled: boolean */{},
        getValue: function getValue() {
          return (/* string */''
          );
        },
        setValue: function setValue() /* value: string */{}
      };
    }
  }]);

  function MDCSelectFoundation(adapter) {
    _classCallCheck(this, MDCSelectFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, Object.assign(MDCSelectFoundation.defaultAdapter, adapter)));

    _this.focusHandler_ = function (evt) {
      return _this.handleFocus_(evt);
    };
    _this.blurHandler_ = function (evt) {
      return _this.handleBlur_(evt);
    };
    _this.selectionHandler_ = function (evt) {
      return _this.handleSelect_(evt);
    };
    return _this;
  }

  _createClass(MDCSelectFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
      this.adapter_.registerInteractionHandler('change', this.selectionHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
      this.adapter_.deregisterInteractionHandler('change', this.selectionHandler_);
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      this.adapter_.setSelectedIndex(index);
      this.floatLabelWithValue_();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.adapter_.setValue(value);
      this.setSelectedIndex(this.adapter_.getSelectedIndex());
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

      this.adapter_.setDisabled(disabled);
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'floatLabelWithValue_',
    value: function floatLabelWithValue_() {
      var optionHasValue = this.adapter_.getValue().length > 0;
      this.adapter_.floatLabel(optionHasValue);
    }
  }, {
    key: 'handleFocus_',
    value: function handleFocus_() {
      this.adapter_.floatLabel(true);
      this.adapter_.activateBottomLine();
    }
  }, {
    key: 'handleBlur_',
    value: function handleBlur_() {
      this.floatLabelWithValue_();
      this.adapter_.deactivateBottomLine();
    }
  }, {
    key: 'handleSelect_',
    value: function handleSelect_() {
      this.setSelectedIndex(this.adapter_.getSelectedIndex());
    }
  }]);

  return MDCSelectFoundation;
}(_index.MDCFoundation);

exports.default = MDCSelectFoundation;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;var require;

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return require(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    /**
     * MUI CSS/JS main module
     * @module main
     */

    (function (win) {
      'use strict';

      // return if library has been loaded already

      if (win._muiLoadedJS) return;else win._muiLoadedJS = true;

      // load dependencies
      var jqLite = require('src/js/lib/jqLite'),
          dropdown = require('src/js/dropdown'),
          overlay = require('src/js/overlay'),
          ripple = require('src/js/ripple'),
          select = require('src/js/select'),
          tabs = require('src/js/tabs'),
          textfield = require('src/js/textfield');

      // expose api
      win.mui = {
        overlay: overlay,
        tabs: tabs.api
      };

      // init libraries
      jqLite.ready(function () {
        textfield.initListeners();
        select.initListeners();
        ripple.initListeners();
        dropdown.initListeners();
        tabs.initListeners();
      });
    })(window);
  }, { "src/js/dropdown": 3, "src/js/lib/jqLite": 6, "src/js/overlay": 8, "src/js/ripple": 9, "src/js/select": 10, "src/js/tabs": 11, "src/js/textfield": 12 }], 2: [function (require, module, exports) {
    /**
     * MUI config module
     * @module config
     */

    /** Define module API */
    module.exports = {
      /** Use debug mode */
      debug: true
    };
  }, {}], 3: [function (require, module, exports) {
    /**
     * MUI CSS/JS dropdown module
     * @module dropdowns
     */

    'use strict';

    var jqLite = require('./lib/jqLite'),
        util = require('./lib/util'),
        animationHelpers = require('./lib/animationHelpers'),
        attrKey = 'data-mui-toggle',
        attrSelector = '[data-mui-toggle="dropdown"]',
        openClass = 'mui--is-open',
        menuClass = 'mui-dropdown__menu';

    /**
     * Initialize toggle element.
     * @param {Element} toggleEl - The toggle element.
     */
    function initialize(toggleEl) {
      // check flag
      if (toggleEl._muiDropdown === true) return;else toggleEl._muiDropdown = true;

      // use type "button" to prevent form submission by default
      var tagName = toggleEl.tagName;
      if ((tagName === 'INPUT' || tagName === 'BUTTON') && !toggleEl.hasAttribute('type')) {
        toggleEl.type = 'button';
      }

      // attach click handler
      jqLite.on(toggleEl, 'click', clickHandler);
    }

    /**
     * Handle click events on dropdown toggle element.
     * @param {Event} ev - The DOM event
     */
    function clickHandler(ev) {
      // only left clicks
      if (ev.button !== 0) return;

      var toggleEl = this;

      // exit if toggle button is disabled
      if (toggleEl.getAttribute('disabled') !== null) return;

      // toggle dropdown
      toggleDropdown(toggleEl);
    }

    /**
     * Toggle the dropdown.
     * @param {Element} toggleEl - The dropdown toggle element.
     */
    function toggleDropdown(toggleEl) {
      var wrapperEl = toggleEl.parentNode,
          menuEl = toggleEl.nextElementSibling,
          doc = wrapperEl.ownerDocument;

      // exit if no menu element
      if (!menuEl || !jqLite.hasClass(menuEl, menuClass)) {
        return util.raiseError('Dropdown menu element not found');
      }

      // method to close dropdown
      function closeDropdownFn() {
        jqLite.removeClass(menuEl, openClass);

        // remove event handlers
        jqLite.off(doc, 'click', closeDropdownFn);
        jqLite.off(doc, 'keydown', handleKeyDownFn);
      }

      // close dropdown on escape key press
      function handleKeyDownFn(ev) {
        var key = ev.key;
        if (key === 'Escape' || key === 'Esc') closeDropdownFn();
      }

      // method to open dropdown
      function openDropdownFn() {
        // position menu element below toggle button
        var wrapperRect = wrapperEl.getBoundingClientRect(),
            toggleRect = toggleEl.getBoundingClientRect();

        var top = toggleRect.top - wrapperRect.top + toggleRect.height;
        jqLite.css(menuEl, 'top', top + 'px');

        // add open class to wrapper
        jqLite.addClass(menuEl, openClass);

        setTimeout(function () {
          // close dropdown when user clicks outside of menu or hits escape key
          jqLite.on(doc, 'click', closeDropdownFn);
          jqLite.on(doc, 'keydown', handleKeyDownFn);
        }, 0);
      }

      // toggle dropdown
      if (jqLite.hasClass(menuEl, openClass)) closeDropdownFn();else openDropdownFn();
    }

    /** Define module API */
    module.exports = {
      /** Initialize module listeners */
      initListeners: function initListeners() {
        // markup elements available when method is called
        var elList = document.querySelectorAll(attrSelector),
            i = elList.length;
        while (i--) {
          initialize(elList[i]);
        }

        // listen for new elements
        animationHelpers.onAnimationStart('mui-dropdown-inserted', function (ev) {
          initialize(ev.target);
        });
      }
    };
  }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }], 4: [function (require, module, exports) {
    /**
     * MUI CSS/JS animation helper module
     * @module lib/animationHelpers
     */

    'use strict';

    var jqLite = require('./jqLite'),
        util = require('./util'),
        animationEvents = 'animationstart mozAnimationStart webkitAnimationStart',
        animationCallbacks = {};

    /**
     * Register callbacks
     * @param {String} name - The animation name
     * @param {Function} callbackFn = The callback function
     */
    function onAnimationStartFn(name, callbackFn) {
      // get/set callback function
      var callbacks = animationCallbacks[name];
      if (!callbacks) callbacks = animationCallbacks[name] = [];
      callbacks.push(callbackFn);

      // initialize listeners
      if (!this.init) {
        // add css classes
        loadCss();

        // add listener
        jqLite.on(document, animationEvents, animationStartHandler, true);

        // set flag
        this.init = true;
      }
    }

    /**
     * Animation start handler
     * @param {Event} ev - The DOM event
     */
    function animationStartHandler(ev) {
      var callbacks = animationCallbacks[ev.animationName] || [],
          i = callbacks.length;

      // exit if a callback hasn't been registered
      if (!i) return;

      // stop other callbacks from firing
      ev.stopImmediatePropagation();

      // iterate through callbacks
      while (i--) {
        callbacks[i](ev);
      }
    }

    /**
     * Load animation css
     */
    function loadCss() {
      // define rules
      var rules = [['.mui-btn', 'mui-btn-inserted'], ['[data-mui-toggle="dropdown"]', 'mui-dropdown-inserted'], ['.mui-btn[data-mui-toggle="dropdown"]', 'mui-btn-inserted,mui-dropdown-inserted'], ['[data-mui-toggle="tab"]', 'mui-tab-inserted'], ['.mui-textfield > input', 'mui-textfield-inserted'], ['.mui-textfield > textarea', 'mui-textfield-inserted'], ['.mui-textfield > input:-webkit-autofill', 'mui-textfield-autofill'], ['.mui-textfield > textarea:-webkit-autofill', 'mui-textfield-autofill'], ['.mui-select > select', 'mui-select-inserted'], ['.mui-select > select ~ .mui-event-trigger', 'mui-node-inserted'], ['.mui-select > select:disabled ~ .mui-event-trigger', 'mui-node-disabled']];

      // build css
      var css = '',
          rule;

      for (var i = 0, m = rules.length; i < m; i++) {
        rule = rules[i];
        css += '@keyframes ' + rule[1];
        css += '{from{transform:none;}to{transform:none;}}';
        css += rule[0];
        css += '{animation-duration:0.0001s;animation-name:' + rule[1] + ';}';
      }

      // add CSS to DOM
      util.loadStyle(css);
    }

    /**
     * Define module API
     */
    module.exports = {
      animationEvents: animationEvents,
      onAnimationStart: onAnimationStartFn
    };
  }, { "./jqLite": 6, "./util": 7 }], 5: [function (require, module, exports) {
    /**
     * MUI CSS/JS form helpers module
     * @module lib/forms.py
     */

    'use strict';

    var jqLite = require('./jqLite');

    /**
     * Menu position/size/scroll helper
     * @returns {Object} Object with keys 'height', 'top', 'scrollTop'
     */
    function getMenuPositionalCSSFn(wrapperEl, menuEl, selectedRow) {
      var viewHeight = document.documentElement.clientHeight,
          numRows = menuEl.children.length;

      // determine menu height
      var h = parseInt(menuEl.offsetHeight),
          height = Math.min(h, viewHeight);

      // determine row height
      var p = parseInt(jqLite.css(menuEl, 'padding-top')),
          rowHeight = (h - 2 * p) / numRows;

      // determine 'top'
      var top, initTop, minTop, maxTop;

      initTop = -1 * selectedRow * rowHeight;
      minTop = -1 * wrapperEl.getBoundingClientRect().top;
      maxTop = viewHeight - height + minTop;

      top = Math.min(Math.max(initTop, minTop), maxTop);

      // determine 'scrollTop'
      var scrollTop = 0,
          scrollIdeal,
          scrollMax;

      if (h > viewHeight) {
        scrollIdeal = top + p + selectedRow * rowHeight;
        scrollMax = numRows * rowHeight + 2 * p - height;
        scrollTop = Math.min(scrollIdeal, scrollMax);
      }

      return {
        'height': height + 'px',
        'top': top + 'px',
        'scrollTop': scrollTop
      };
    }

    /** Define module API */
    module.exports = {
      getMenuPositionalCSS: getMenuPositionalCSSFn
    };
  }, { "./jqLite": 6 }], 6: [function (require, module, exports) {
    /**
     * MUI CSS/JS jqLite module
     * @module lib/jqLite
     */

    'use strict';

    /**
     * Add a class to an element.
     * @param {Element} element - The DOM element.
     * @param {string} cssClasses - Space separated list of class names.
     */

    function jqLiteAddClass(element, cssClasses) {
      if (!cssClasses || !element.setAttribute) return;

      var existingClasses = _getExistingClasses(element),
          splitClasses = cssClasses.split(' '),
          cssClass;

      for (var i = 0; i < splitClasses.length; i++) {
        cssClass = splitClasses[i].trim();
        if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
          existingClasses += cssClass + ' ';
        }
      }

      element.setAttribute('class', existingClasses.trim());
    }

    /**
     * Get or set CSS properties.
     * @param {Element} element - The DOM element.
     * @param {string} [name] - The property name.
     * @param {string} [value] - The property value.
     */
    function jqLiteCss(element, name, value) {
      // Return full style object
      if (name === undefined) {
        return getComputedStyle(element);
      }

      var nameType = jqLiteType(name);

      // Set multiple values
      if (nameType === 'object') {
        for (var key in name) {
          element.style[_camelCase(key)] = name[key];
        }return;
      }

      // Set a single value
      if (nameType === 'string' && value !== undefined) {
        element.style[_camelCase(name)] = value;
      }

      var styleObj = getComputedStyle(element),
          isArray = jqLiteType(name) === 'array';

      // Read single value
      if (!isArray) return _getCurrCssProp(element, name, styleObj);

      // Read multiple values
      var outObj = {},
          key;

      for (var i = 0; i < name.length; i++) {
        key = name[i];
        outObj[key] = _getCurrCssProp(element, key, styleObj);
      }

      return outObj;
    }

    /**
     * Check if element has class.
     * @param {Element} element - The DOM element.
     * @param {string} cls - The class name string.
     */
    function jqLiteHasClass(element, cls) {
      if (!cls || !element.getAttribute) return false;
      return _getExistingClasses(element).indexOf(' ' + cls + ' ') > -1;
    }

    /**
     * Return the type of a variable.
     * @param {} somevar - The JavaScript variable.
     */
    function jqLiteType(somevar) {
      // handle undefined
      if (somevar === undefined) return 'undefined';

      // handle others (of type [object <Type>])
      var typeStr = Object.prototype.toString.call(somevar);
      if (typeStr.indexOf('[object ') === 0) {
        return typeStr.slice(8, -1).toLowerCase();
      } else {
        throw new Error("MUI: Could not understand type: " + typeStr);
      }
    }

    /**
     * Attach an event handler to a DOM element
     * @param {Element} element - The DOM element.
     * @param {string} events - Space separated event names.
     * @param {Function} callback - The callback function.
     * @param {Boolean} useCapture - Use capture flag.
     */
    function jqLiteOn(element, events, callback, useCapture) {
      useCapture = useCapture === undefined ? false : useCapture;

      var cache = element._muiEventCache = element._muiEventCache || {};

      events.split(' ').map(function (event) {
        // add to DOM
        element.addEventListener(event, callback, useCapture);

        // add to cache
        cache[event] = cache[event] || [];
        cache[event].push([callback, useCapture]);
      });
    }

    /**
     * Remove an event handler from a DOM element
     * @param {Element} element - The DOM element.
     * @param {string} events - Space separated event names.
     * @param {Function} callback - The callback function.
     * @param {Boolean} useCapture - Use capture flag.
     */
    function jqLiteOff(element, events, callback, useCapture) {
      useCapture = useCapture === undefined ? false : useCapture;

      // remove from cache
      var cache = element._muiEventCache = element._muiEventCache || {},
          argsList,
          args,
          i;

      events.split(' ').map(function (event) {
        argsList = cache[event] || [];

        i = argsList.length;
        while (i--) {
          args = argsList[i];

          // remove all events if callback is undefined
          if (callback === undefined || args[0] === callback && args[1] === useCapture) {

            // remove from cache
            argsList.splice(i, 1);

            // remove from DOM
            element.removeEventListener(event, args[0], args[1]);
          }
        }
      });
    }

    /**
     * Attach an event hander which will only execute once per element per event
     * @param {Element} element - The DOM element.
     * @param {string} events - Space separated event names.
     * @param {Function} callback - The callback function.
     * @param {Boolean} useCapture - Use capture flag.
     */
    function jqLiteOne(element, events, callback, useCapture) {
      events.split(' ').map(function (event) {
        jqLiteOn(element, event, function onFn(ev) {
          // execute callback
          if (callback) callback.apply(this, arguments);

          // remove wrapper
          jqLiteOff(element, event, onFn, useCapture);
        }, useCapture);
      });
    }

    /**
     * Get or set horizontal scroll position
     * @param {Element} element - The DOM element
     * @param {number} [value] - The scroll position
     */
    function jqLiteScrollLeft(element, value) {
      var win = window;

      // get
      if (value === undefined) {
        if (element === win) {
          var docEl = document.documentElement;
          return (win.pageXOffset || docEl.scrollLeft) - (docEl.clientLeft || 0);
        } else {
          return element.scrollLeft;
        }
      }

      // set
      if (element === win) win.scrollTo(value, jqLiteScrollTop(win));else element.scrollLeft = value;
    }

    /**
     * Get or set vertical scroll position
     * @param {Element} element - The DOM element
     * @param {number} value - The scroll position
     */
    function jqLiteScrollTop(element, value) {
      var win = window;

      // get
      if (value === undefined) {
        if (element === win) {
          var docEl = document.documentElement;
          return (win.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
        } else {
          return element.scrollTop;
        }
      }

      // set
      if (element === win) win.scrollTo(jqLiteScrollLeft(win), value);else element.scrollTop = value;
    }

    /**
     * Return object representing top/left offset and element height/width.
     * @param {Element} element - The DOM element.
     */
    function jqLiteOffset(element) {
      var win = window,
          rect = element.getBoundingClientRect(),
          scrollTop = jqLiteScrollTop(win),
          scrollLeft = jqLiteScrollLeft(win);

      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        height: rect.height,
        width: rect.width
      };
    }

    /**
     * Attach a callback to the DOM ready event listener
     * @param {Function} fn - The callback function.
     */
    function jqLiteReady(fn) {
      var done = false,
          top = true,
          doc = document,
          win = doc.defaultView,
          root = doc.documentElement,
          add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
          rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
          pre = doc.addEventListener ? '' : 'on';

      var init = function init(e) {
        if (e.type == 'readystatechange' && doc.readyState != 'complete') {
          return;
        }

        (e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
        if (!done && (done = true)) fn.call(win, e.type || e);
      };

      var poll = function poll() {
        try {
          root.doScroll('left');
        } catch (e) {
          setTimeout(poll, 50);return;
        }
        init('poll');
      };

      if (doc.readyState == 'complete') {
        fn.call(win, 'lazy');
      } else {
        if (doc.createEventObject && root.doScroll) {
          try {
            top = !win.frameElement;
          } catch (e) {}
          if (top) poll();
        }
        doc[add](pre + 'DOMContentLoaded', init, false);
        doc[add](pre + 'readystatechange', init, false);
        win[add](pre + 'load', init, false);
      }
    }

    /**
     * Remove classes from a DOM element
     * @param {Element} element - The DOM element.
     * @param {string} cssClasses - Space separated list of class names.
     */
    function jqLiteRemoveClass(element, cssClasses) {
      if (!cssClasses || !element.setAttribute) return;

      var existingClasses = _getExistingClasses(element),
          splitClasses = cssClasses.split(' '),
          cssClass;

      for (var i = 0; i < splitClasses.length; i++) {
        cssClass = splitClasses[i].trim();
        while (existingClasses.indexOf(' ' + cssClass + ' ') >= 0) {
          existingClasses = existingClasses.replace(' ' + cssClass + ' ', ' ');
        }
      }

      element.setAttribute('class', existingClasses.trim());
    }

    // ------------------------------
    // Utilities
    // ------------------------------
    var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g,
        MOZ_HACK_REGEXP = /^moz([A-Z])/,
        ESCAPE_REGEXP = /([.*+?^=!:${}()|\[\]\/\\])/g;

    function _getExistingClasses(element) {
      var classes = (element.getAttribute('class') || '').replace(/[\n\t]/g, '');
      return ' ' + classes + ' ';
    }

    function _camelCase(name) {
      return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
      }).replace(MOZ_HACK_REGEXP, 'Moz$1');
    }

    function _escapeRegExp(string) {
      return string.replace(ESCAPE_REGEXP, "\\$1");
    }

    function _getCurrCssProp(elem, name, computed) {
      var ret;

      // try computed style
      ret = computed.getPropertyValue(name);

      // try style attribute (if element is not attached to document)
      if (ret === '' && !elem.ownerDocument) ret = elem.style[_camelCase(name)];

      return ret;
    }

    /**
     * Module API
     */
    module.exports = {
      /** Add classes */
      addClass: jqLiteAddClass,

      /** Get or set CSS properties */
      css: jqLiteCss,

      /** Check for class */
      hasClass: jqLiteHasClass,

      /** Remove event handlers */
      off: jqLiteOff,

      /** Return offset values */
      offset: jqLiteOffset,

      /** Add event handlers */
      on: jqLiteOn,

      /** Add an execute-once event handler */
      one: jqLiteOne,

      /** DOM ready event handler */
      ready: jqLiteReady,

      /** Remove classes */
      removeClass: jqLiteRemoveClass,

      /** Check JavaScript variable instance type */
      type: jqLiteType,

      /** Get or set horizontal scroll position */
      scrollLeft: jqLiteScrollLeft,

      /** Get or set vertical scroll position */
      scrollTop: jqLiteScrollTop
    };
  }, {}], 7: [function (require, module, exports) {
    /**
     * MUI CSS/JS utilities module
     * @module lib/util
     */

    'use strict';

    var config = require('../config'),
        jqLite = require('./jqLite'),
        scrollLock = 0,
        scrollLockCls = 'mui-scroll-lock',
        scrollLockPos,
        scrollStyleEl,
        scrollEventHandler,
        _scrollBarWidth,
        _supportsPointerEvents;

    scrollEventHandler = function scrollEventHandler(ev) {
      // stop propagation on window scroll events
      if (!ev.target.tagName) ev.stopImmediatePropagation();
    };

    /**
     * Logging function
     */
    function logFn() {
      var win = window;

      if (config.debug && typeof win.console !== "undefined") {
        try {
          win.console.log.apply(win.console, arguments);
        } catch (a) {
          var e = Array.prototype.slice.call(arguments);
          win.console.log(e.join("\n"));
        }
      }
    }

    /**
     * Load CSS text in new stylesheet
     * @param {string} cssText - The css text.
     */
    function loadStyleFn(cssText) {
      var doc = document,
          head;

      // copied from jQuery 
      head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;

      var e = doc.createElement('style');
      e.type = 'text/css';

      if (e.styleSheet) e.styleSheet.cssText = cssText;else e.appendChild(doc.createTextNode(cssText));

      // add to document
      head.insertBefore(e, head.firstChild);

      return e;
    }

    /**
     * Raise an error
     * @param {string} msg - The error message.
     */
    function raiseErrorFn(msg, useConsole) {
      if (useConsole) {
        if (typeof console !== 'undefined') console.warn('MUI Warning: ' + msg);
      } else {
        throw new Error('MUI: ' + msg);
      }
    }

    /**
     * Convert Classname object, with class as key and true/false as value, to an
     * class string.
     * @param  {Object} classes The classes
     * @return {String}         class string
     */
    function classNamesFn(classes) {
      var cs = '';
      for (var i in classes) {
        cs += classes[i] ? i + ' ' : '';
      }
      return cs.trim();
    }

    /**
     * Check if client supports pointer events.
     */
    function supportsPointerEventsFn() {
      // check cache
      if (_supportsPointerEvents !== undefined) return _supportsPointerEvents;

      var element = document.createElement('x');
      element.style.cssText = 'pointer-events:auto';
      _supportsPointerEvents = element.style.pointerEvents === 'auto';
      return _supportsPointerEvents;
    }

    /**
     * Create callback closure.
     * @param {Object} instance - The object instance.
     * @param {String} funcName - The name of the callback function.
     */
    function callbackFn(instance, funcName) {
      return function () {
        instance[funcName].apply(instance, arguments);
      };
    }

    /**
     * Dispatch event.
     * @param {Element} element - The DOM element.
     * @param {String} eventType - The event type.
     * @param {Boolean} bubbles=true - If true, event bubbles.
     * @param {Boolean} cancelable=true = If true, event is cancelable
     * @param {Object} [data] - Data to add to event object
     */
    function dispatchEventFn(element, eventType, bubbles, cancelable, data) {
      var ev = document.createEvent('HTMLEvents'),
          bubbles = bubbles !== undefined ? bubbles : true,
          cancelable = cancelable !== undefined ? cancelable : true,
          k;

      ev.initEvent(eventType, bubbles, cancelable);

      // add data to event object
      if (data) for (k in data) {
        ev[k] = data[k];
      } // dispatch
      if (element) element.dispatchEvent(ev);

      return ev;
    }

    /**
     * Turn on window scroll lock.
     */
    function enableScrollLockFn() {
      // increment counter
      scrollLock += 1;

      // add lock
      if (scrollLock === 1) {
        var doc = document,
            win = window,
            htmlEl = doc.documentElement,
            bodyEl = doc.body,
            scrollBarWidth = getScrollBarWidth(),
            cssProps,
            cssStr,
            x;

        // define scroll lock class dynamically
        cssProps = ['overflow:hidden'];

        if (scrollBarWidth) {
          // scrollbar-y
          if (htmlEl.scrollHeight > htmlEl.clientHeight) {
            x = parseInt(jqLite.css(bodyEl, 'padding-right')) + scrollBarWidth;
            cssProps.push('padding-right:' + x + 'px');
          }

          // scrollbar-x
          if (htmlEl.scrollWidth > htmlEl.clientWidth) {
            x = parseInt(jqLite.css(bodyEl, 'padding-bottom')) + scrollBarWidth;
            cssProps.push('padding-bottom:' + x + 'px');
          }
        }

        // define css class dynamically
        cssStr = '.' + scrollLockCls + '{';
        cssStr += cssProps.join(' !important;') + ' !important;}';
        scrollStyleEl = loadStyleFn(cssStr);

        // cancel 'scroll' event listener callbacks
        jqLite.on(win, 'scroll', scrollEventHandler, true);

        // add scroll lock
        scrollLockPos = { left: jqLite.scrollLeft(win), top: jqLite.scrollTop(win) };
        jqLite.addClass(bodyEl, scrollLockCls);
      }
    }

    /**
     * Turn off window scroll lock.
     * @param {Boolean} resetPos - Reset scroll position to original value.
     */
    function disableScrollLockFn(resetPos) {
      // ignore
      if (scrollLock === 0) return;

      // decrement counter
      scrollLock -= 1;

      // remove lock 
      if (scrollLock === 0) {
        // remove scroll lock and delete style element
        jqLite.removeClass(document.body, scrollLockCls);

        // restore scroll position
        if (resetPos) window.scrollTo(scrollLockPos.left, scrollLockPos.top);

        // restore scroll event listeners
        jqLite.off(window, 'scroll', scrollEventHandler, true);

        // delete style element (deferred for Firefox Quantum bugfix)
        setTimeout(function () {
          scrollStyleEl.parentNode.removeChild(scrollStyleEl);
        }, 0);
      }
    }

    /**
     * Return scroll bar width.
     */
    var getScrollBarWidth = function getScrollBarWidth() {
      // check cache
      if (_scrollBarWidth !== undefined) return _scrollBarWidth;

      // calculate scroll bar width
      var doc = document,
          bodyEl = doc.body,
          el = doc.createElement('div');

      el.innerHTML = '<div style="width:50px;height:50px;position:absolute;' + 'left:-50px;top:-50px;overflow:auto;"><div style="width:1px;' + 'height:100px;"></div></div>';
      el = el.firstChild;
      bodyEl.appendChild(el);
      _scrollBarWidth = el.offsetWidth - el.clientWidth;
      bodyEl.removeChild(el);

      return _scrollBarWidth;
    };

    /**
     * requestAnimationFrame polyfilled
     * @param {Function} callback - The callback function
     */
    function requestAnimationFrameFn(callback) {
      var fn = window.requestAnimationFrame;
      if (fn) fn(callback);else setTimeout(callback, 0);
    }

    /**
     * Define the module API
     */
    module.exports = {
      /** Create callback closures */
      callback: callbackFn,

      /** Classnames object to string */
      classNames: classNamesFn,

      /** Disable scroll lock */
      disableScrollLock: disableScrollLockFn,

      /** Dispatch event */
      dispatchEvent: dispatchEventFn,

      /** Enable scroll lock */
      enableScrollLock: enableScrollLockFn,

      /** Log messages to the console when debug is turned on */
      log: logFn,

      /** Load CSS text as new stylesheet */
      loadStyle: loadStyleFn,

      /** Raise MUI error */
      raiseError: raiseErrorFn,

      /** Request animation frame */
      requestAnimationFrame: requestAnimationFrameFn,

      /** Support Pointer Events check */
      supportsPointerEvents: supportsPointerEventsFn
    };
  }, { "../config": 2, "./jqLite": 6 }], 8: [function (require, module, exports) {
    /**
     * MUI CSS/JS overlay module
     * @module overlay
     */

    'use strict';

    var util = require('./lib/util'),
        jqLite = require('./lib/jqLite'),
        overlayId = 'mui-overlay',
        bodyClass = 'mui--overflow-hidden',
        iosRegex = /(iPad|iPhone|iPod)/g,
        activeElement;

    /**
     * Turn overlay on/off.
     * @param {string} action - Turn overlay "on"/"off".
     * @param {object} [options]
     * @config {boolean} [keyboard] - If true, close when escape key is pressed.
     * @config {boolean} [static] - If false, close when backdrop is clicked.
     * @config {Function} [onclose] - Callback function to execute on close
     * @param {Element} [childElement] - Child element to add to overlay.
     */
    function overlayFn(action) {
      var overlayEl;

      if (action === 'on') {
        // extract arguments
        var arg, options, childElement;

        // pull options and childElement from arguments
        for (var i = arguments.length - 1; i > 0; i--) {
          arg = arguments[i];

          if (jqLite.type(arg) === 'object') options = arg;
          if (arg instanceof Element && arg.nodeType === 1) childElement = arg;
        }

        // option defaults
        options = options || {};
        if (options.keyboard === undefined) options.keyboard = true;
        if (options.static === undefined) options.static = false;

        // execute method
        overlayEl = overlayOn(options, childElement);
      } else if (action === 'off') {
        overlayEl = overlayOff();
      } else {
        // raise error
        util.raiseError("Expecting 'on' or 'off'");
      }

      return overlayEl;
    }

    /**
     * Turn on overlay.
     * @param {object} options - Overlay options.
     * @param {Element} childElement - The child element.
     */
    function overlayOn(options, childElement) {
      var doc = document,
          bodyEl = doc.body,
          overlayEl = doc.getElementById(overlayId);

      // cache activeElement
      if (doc.activeElement) activeElement = doc.activeElement;

      // add overlay
      util.enableScrollLock();

      if (!overlayEl) {
        // create overlayEl
        overlayEl = doc.createElement('div');
        overlayEl.setAttribute('id', overlayId);
        overlayEl.setAttribute('tabindex', '-1');

        // add child element
        if (childElement) overlayEl.appendChild(childElement);

        bodyEl.appendChild(overlayEl);
      } else {
        // remove existing children
        while (overlayEl.firstChild) {
          overlayEl.removeChild(overlayEl.firstChild);
        } // add child element
        if (childElement) overlayEl.appendChild(childElement);
      }

      // iOS bugfix
      if (iosRegex.test(navigator.userAgent)) {
        jqLite.css(overlayEl, 'cursor', 'pointer');
      }

      // handle options
      if (options.keyboard) addKeyupHandler();else removeKeyupHandler();

      if (options.static) removeClickHandler(overlayEl);else addClickHandler(overlayEl);

      // attach options
      overlayEl.muiOptions = options;

      // focus overlay element
      overlayEl.focus();

      return overlayEl;
    }

    /**
     * Turn off overlay.
     */
    function overlayOff() {
      var overlayEl = document.getElementById(overlayId),
          callbackFn;

      if (overlayEl) {
        // remove children
        while (overlayEl.firstChild) {
          overlayEl.removeChild(overlayEl.firstChild);
        } // remove overlay element
        overlayEl.parentNode.removeChild(overlayEl);

        // callback reference
        callbackFn = overlayEl.muiOptions.onclose;

        // remove click handler
        removeClickHandler(overlayEl);
      }

      util.disableScrollLock();

      // remove keyup handler
      removeKeyupHandler();

      // return focus to activeElement
      if (activeElement) activeElement.focus();

      // execute callback
      if (callbackFn) callbackFn();

      return overlayEl;
    }

    /**
     * Add keyup handler.
     */
    function addKeyupHandler() {
      jqLite.on(document, 'keyup', onKeyup);
    }

    /**
     * Remove keyup handler.
     */
    function removeKeyupHandler() {
      jqLite.off(document, 'keyup', onKeyup);
    }

    /**
     * Teardown overlay when escape key is pressed.
     */
    function onKeyup(ev) {
      if (ev.keyCode === 27) overlayOff();
    }

    /**
     * Add click handler.
     */
    function addClickHandler(overlayEl) {
      jqLite.on(overlayEl, 'click', onClick);
    }

    /**
     * Remove click handler.
     */
    function removeClickHandler(overlayEl) {
      jqLite.off(overlayEl, 'click', onClick);
    }

    /**
     * Teardown overlay when backdrop is clicked.
     */
    function onClick(ev) {
      if (ev.target.id === overlayId) overlayOff();
    }

    /** Define module API */
    module.exports = overlayFn;
  }, { "./lib/jqLite": 6, "./lib/util": 7 }], 9: [function (require, module, exports) {
    /**
     * MUI CSS/JS ripple module
     * @module ripple
     */

    'use strict';

    var jqLite = require('./lib/jqLite'),
        util = require('./lib/util'),
        animationHelpers = require('./lib/animationHelpers'),
        supportsTouch = 'ontouchstart' in document.documentElement,
        mouseDownEvents = supportsTouch ? 'touchstart' : 'mousedown',
        mouseUpEvents = supportsTouch ? 'touchend' : 'mouseup mouseleave';

    /**
     * Add ripple effects to button element.
     * @param {Element} buttonEl - The button element.
     */
    function initialize(buttonEl) {
      // check flag
      if (buttonEl._muiRipple === true) return;else buttonEl._muiRipple = true;

      // exit if element is INPUT (doesn't support absolute positioned children)
      if (buttonEl.tagName === 'INPUT') return;

      // attach event handler
      jqLite.on(buttonEl, mouseDownEvents, mouseDownHandler);
    }

    /**
     * MouseDown Event handler.
     * @param {Event} ev - The DOM event
     */
    function mouseDownHandler(ev) {
      // only left clicks
      if (ev.type === 'mousedown' && ev.button !== 0) return;

      var buttonEl = this,
          rippleEl = buttonEl._rippleEl;

      // exit if button is disabled
      if (buttonEl.disabled) return;

      if (!rippleEl) {
        // add ripple container (to avoid https://github.com/muicss/mui/issues/169)
        var el = document.createElement('span');
        el.className = 'mui-btn__ripple-container';
        el.innerHTML = '<span class="mui-ripple"></span>';
        buttonEl.appendChild(el);

        // cache reference to ripple element
        rippleEl = buttonEl._rippleEl = el.children[0];

        // add mouseup handler on first-click
        jqLite.on(buttonEl, mouseUpEvents, mouseUpHandler);
      }

      // get ripple element offset values and (x, y) position of click
      var offset = jqLite.offset(buttonEl),
          clickEv = ev.type === 'touchstart' ? ev.touches[0] : ev,
          radius,
          diameter;

      // calculate radius
      radius = Math.sqrt(offset.height * offset.height + offset.width * offset.width);

      diameter = radius * 2 + 'px';

      // set position and dimensions
      jqLite.css(rippleEl, {
        width: diameter,
        height: diameter,
        top: Math.round(clickEv.pageY - offset.top - radius) + 'px',
        left: Math.round(clickEv.pageX - offset.left - radius) + 'px'
      });

      jqLite.removeClass(rippleEl, 'mui--is-animating');
      jqLite.addClass(rippleEl, 'mui--is-visible');

      // start animation
      util.requestAnimationFrame(function () {
        jqLite.addClass(rippleEl, 'mui--is-animating');
      });
    }

    /**
     * MouseUp event handler.
     * @param {Event} ev - The DOM event
     */
    function mouseUpHandler(ev) {
      // get ripple element
      var rippleEl = this._rippleEl;

      // allow a repaint to occur before removing class so animation shows for
      // tap events
      util.requestAnimationFrame(function () {
        jqLite.removeClass(rippleEl, 'mui--is-visible');
      });
    }

    /** Define module API */
    module.exports = {
      /** Initialize module listeners */
      initListeners: function initListeners() {
        // markup elements available when method is called
        var elList = document.getElementsByClassName('mui-btn'),
            i = elList.length;
        while (i--) {
          initialize(elList[i]);
        } // listen for new elements
        animationHelpers.onAnimationStart('mui-btn-inserted', function (ev) {
          initialize(ev.target);
        });
      }
    };
  }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }], 10: [function (require, module, exports) {
    /**
     * MUI CSS/JS select module
     * @module forms/select
     */

    'use strict';

    var jqLite = require('./lib/jqLite'),
        util = require('./lib/util'),
        animationHelpers = require('./lib/animationHelpers'),
        formlib = require('./lib/forms'),
        wrapperClass = 'mui-select',
        cssSelector = '.mui-select > select',
        menuClass = 'mui-select__menu',
        selectedClass = 'mui--is-selected',
        disabledClass = 'mui--is-disabled',
        doc = document,
        win = window;

    /**
     * Initialize select element.
     * @param {Element} selectEl - The select element.
     */
    function initialize(selectEl) {
      // check flag
      if (selectEl._muiSelect === true) return;else selectEl._muiSelect = true;

      // use default behavior on touch devices
      if ('ontouchstart' in doc.documentElement) return;

      // NOTE: To get around cross-browser issues with <select> behavior we will
      //       defer focus to the parent element and handle events there

      var wrapperEl = selectEl.parentNode;

      // exit if use-default
      if (jqLite.hasClass(wrapperEl, 'mui-select--use-default')) return;

      // initialize variables
      wrapperEl._selectEl = selectEl;
      wrapperEl._menu = null;
      wrapperEl._q = '';
      wrapperEl._qTimeout = null;

      // make wrapper tab focusable, remove tab focus from <select>
      if (!selectEl.disabled) wrapperEl.tabIndex = 0;
      selectEl.tabIndex = -1;

      // prevent built-in menu from opening on <select>
      jqLite.on(selectEl, 'mousedown', onInnerMouseDown);

      // attach event listeners for custom menu
      jqLite.on(wrapperEl, 'click', onWrapperClick);
      jqLite.on(wrapperEl, 'blur focus', onWrapperBlurOrFocus);
      jqLite.on(wrapperEl, 'keydown', onWrapperKeyDown);
      jqLite.on(wrapperEl, 'keypress', onWrapperKeyPress);

      // add element to detect 'disabled' change (using sister element due to 
      // IE/Firefox issue
      var el = document.createElement('div');
      el.className = 'mui-event-trigger';
      wrapperEl.appendChild(el);

      // handle 'disabled' add/remove
      jqLite.on(el, animationHelpers.animationEvents, function (ev) {
        var parentEl = ev.target.parentNode;

        // no need to propagate
        ev.stopPropagation();

        if (ev.animationName === 'mui-node-disabled') {
          parentEl.removeAttribute('tabIndex');
        } else {
          parentEl.tabIndex = 0;
        }
      });
    }

    /**
     * Disable default dropdown on mousedown.
     * @param {Event} ev - The DOM event
     */
    function onInnerMouseDown(ev) {
      // only left clicks
      if (ev.button !== 0) return;

      // prevent built-in menu from opening
      ev.preventDefault();
    }

    /**
     * Dispatch focus and blur events on inner <select> element.
     * @param {Event} ev - The DOM event
     */
    function onWrapperBlurOrFocus(ev) {
      util.dispatchEvent(this._selectEl, ev.type, false, false);
    }

    /**
     * Handle keydown events when wrapper is focused
     **/
    function onWrapperKeyDown(ev) {
      if (ev.defaultPrevented) return;

      var keyCode = ev.keyCode,
          menu = this._menu;

      if (!menu) {
        // spacebar, down, up
        if (keyCode === 32 || keyCode === 38 || keyCode === 40) {
          ev.preventDefault();

          // open custom menu
          renderMenu(this);
        }
      } else {
        // tab
        if (keyCode === 9) return menu.destroy();

        // escape | up | down | enter
        if (keyCode === 27 || keyCode === 40 || keyCode === 38 || keyCode === 13) {
          ev.preventDefault();
        }

        if (keyCode === 27) {
          // escape
          menu.destroy();
        } else if (keyCode === 40) {
          // up
          menu.increment();
        } else if (keyCode === 38) {
          // down
          menu.decrement();
        } else if (keyCode === 13) {
          // enter
          menu.selectCurrent();
          menu.destroy();
        }
      }
    }

    /**
     *
     */
    function onWrapperKeyPress(ev) {
      var menu = this._menu;

      // exit if default prevented or menu is closed
      if (ev.defaultPrevented || !menu) return;

      // handle query timer
      var self = this;
      clearTimeout(this._qTimeout);
      this._q += ev.key;
      this._qTimeout = setTimeout(function () {
        self._q = '';
      }, 300);

      // select first match alphabetically
      var prefixRegex = new RegExp('^' + this._q, 'i'),
          itemArray = menu.itemArray,
          pos;

      for (pos in itemArray) {
        if (prefixRegex.test(itemArray[pos].innerText)) {
          menu.selectPos(pos);
          break;
        }
      }
    }

    /**
     * Handle click events on wrapper element.
     * @param {Event} ev - The DOM event
     */
    function onWrapperClick(ev) {
      // only left clicks, check default and disabled flags
      if (ev.button !== 0 || this._selectEl.disabled) return;

      // focus wrapper
      this.focus();

      // open menu
      renderMenu(this);
    }

    /**
     * Render options menu
     */
    function renderMenu(wrapperEl) {
      // check instance
      if (wrapperEl._menu) return;

      // render custom menu
      wrapperEl._menu = new Menu(wrapperEl, wrapperEl._selectEl, function () {
        wrapperEl._menu = null; // de-reference instance
        wrapperEl.focus();
      });
    }

    /**
     * Creates a new Menu
     * @class
     */
    function Menu(wrapperEl, selectEl, wrapperCallbackFn) {
      // add scroll lock
      util.enableScrollLock();

      // instance variables
      this.itemArray = [];
      this.origPos = null;
      this.currentPos = null;
      this.selectEl = selectEl;
      this.wrapperEl = wrapperEl;

      var res = this._createMenuEl(wrapperEl, selectEl),
          menuEl = this.menuEl = res[0];

      var cb = util.callback;

      this.onClickCB = cb(this, 'onClick');
      this.destroyCB = cb(this, 'destroy');
      this.wrapperCallbackFn = wrapperCallbackFn;

      // add to DOM
      wrapperEl.appendChild(this.menuEl);

      // set position
      var props = formlib.getMenuPositionalCSS(wrapperEl, menuEl, res[1]);

      jqLite.css(menuEl, props);
      jqLite.scrollTop(menuEl, props.scrollTop);

      // attach event handlers
      var destroyCB = this.destroyCB;
      jqLite.on(menuEl, 'click', this.onClickCB);
      jqLite.on(win, 'resize', destroyCB);

      // attach event handler after current event loop exits
      setTimeout(function () {
        jqLite.on(doc, 'click', destroyCB);
      }, 0);
    }

    /**
     * Create menu element
     * @param {Element} selectEl - The select element
     */
    Menu.prototype._createMenuEl = function (wrapperEl, selectEl) {
      var menuEl = doc.createElement('div'),
          childEls = selectEl.children,
          itemArray = this.itemArray,
          itemPos = 0,
          origPos = -1,
          selectedPos = 0,
          selectedRow = 0,
          numRows = 0,
          docFrag = document.createDocumentFragment(),
          // for speed
      loopEl,
          rowEl,
          optionEls,
          inGroup,
          i,
          iMax,
          j,
          jMax;

      menuEl.className = menuClass;

      for (i = 0, iMax = childEls.length; i < iMax; i++) {
        loopEl = childEls[i];

        if (loopEl.tagName === 'OPTGROUP') {
          // add row item to menu
          rowEl = doc.createElement('div');
          rowEl.textContent = loopEl.label;
          rowEl.className = 'mui-optgroup__label';
          docFrag.appendChild(rowEl);

          inGroup = true;
          optionEls = loopEl.children;
        } else {
          inGroup = false;
          optionEls = [loopEl];
        }

        // loop through option elements
        for (j = 0, jMax = optionEls.length; j < jMax; j++) {
          loopEl = optionEls[j];

          // add row item to menu
          rowEl = doc.createElement('div');
          rowEl.textContent = loopEl.textContent;

          // handle optgroup options
          if (inGroup) jqLite.addClass(rowEl, 'mui-optgroup__option');

          if (loopEl.hidden) {
            continue;
          } else if (loopEl.disabled) {
            // do not attach muiIndex to disable <option> elements to make them
            // unselectable.
            jqLite.addClass(rowEl, disabledClass);
          } else {
            rowEl._muiIndex = loopEl.index;
            rowEl._muiPos = itemPos;

            // handle selected options
            if (loopEl.selected) {
              selectedRow = numRows;
              origPos = itemPos;
              selectedPos = itemPos;
            }

            // add to item array
            itemArray.push(rowEl);
            itemPos += 1;
          }

          docFrag.appendChild(rowEl);
          numRows += 1;
        }
      }

      // add rows to menu
      menuEl.appendChild(docFrag);

      // save indices
      this.origPos = origPos;
      this.currentPos = selectedPos;

      // paint selectedPos
      if (itemArray.length) jqLite.addClass(itemArray[selectedPos], selectedClass);

      return [menuEl, selectedRow];
    };

    /**
     * Handle click events on menu element.
     * @param {Event} ev - The DOM event
     */
    Menu.prototype.onClick = function (ev) {
      // don't allow events to bubble
      ev.stopPropagation();

      var item = ev.target,
          index = item._muiIndex;

      // ignore clicks on non-items                                               
      if (index === undefined) return;

      // select option
      this.currentPos = item._muiPos;
      this.selectCurrent();

      // destroy menu
      this.destroy();
    };

    /**
     * Increment selected item
     */
    Menu.prototype.increment = function () {
      if (this.currentPos === this.itemArray.length - 1) return;

      // un-select old row
      jqLite.removeClass(this.itemArray[this.currentPos], selectedClass);

      // select new row
      this.currentPos += 1;
      jqLite.addClass(this.itemArray[this.currentPos], selectedClass);
    };

    /**
     * Decrement selected item
     */
    Menu.prototype.decrement = function () {
      if (this.currentPos === 0) return;

      // un-select old row
      jqLite.removeClass(this.itemArray[this.currentPos], selectedClass);

      // select new row
      this.currentPos -= 1;
      jqLite.addClass(this.itemArray[this.currentPos], selectedClass);
    };

    /**
     * Select current item
     */
    Menu.prototype.selectCurrent = function () {
      if (this.currentPos !== this.origPos) {
        this.selectEl.selectedIndex = this.itemArray[this.currentPos]._muiIndex;

        // trigger change and input events
        util.dispatchEvent(this.selectEl, 'change', true, false);
        util.dispatchEvent(this.selectEl, 'input', true, false);
      }
    };

    /**
     * Select item at position
     */
    Menu.prototype.selectPos = function (pos) {
      // un-select old row                                                      
      jqLite.removeClass(this.itemArray[this.currentPos], selectedClass);

      // select new row
      this.currentPos = pos;
      var itemEl = this.itemArray[pos];
      jqLite.addClass(itemEl, selectedClass);

      // scroll (if necessary)
      var menuEl = this.menuEl,
          itemRect = itemEl.getBoundingClientRect();

      if (itemRect.top < 0) {
        // menu item is hidden above visible window
        menuEl.scrollTop = menuEl.scrollTop + itemRect.top - 5;
      } else if (itemRect.top > window.innerHeight) {
        // menu item is hidden below visible window
        menuEl.scrollTop = menuEl.scrollTop + (itemRect.top + itemRect.height - window.innerHeight) + 5;
      }
    };

    /**
     * Destroy menu and detach event handlers
     */
    Menu.prototype.destroy = function () {
      // remove scroll lock
      util.disableScrollLock(true);

      // remove event handlers
      jqLite.off(this.menuEl, 'click', this.clickCallbackFn);
      jqLite.off(doc, 'click', this.destroyCB);
      jqLite.off(win, 'resize', this.destroyCB);

      // remove element and execute wrapper callback
      var parentNode = this.menuEl.parentNode;
      if (parentNode) {
        parentNode.removeChild(this.menuEl);
        this.wrapperCallbackFn();
      }
    };

    /** Define module API */
    module.exports = {
      /** Initialize module listeners */
      initListeners: function initListeners() {
        // markup elements available when method is called
        var elList = doc.querySelectorAll(cssSelector),
            i = elList.length;
        while (i--) {
          initialize(elList[i]);
        } // listen for mui-node-inserted events
        animationHelpers.onAnimationStart('mui-select-inserted', function (ev) {
          initialize(ev.target);
        });
      }
    };
  }, { "./lib/animationHelpers": 4, "./lib/forms": 5, "./lib/jqLite": 6, "./lib/util": 7 }], 11: [function (require, module, exports) {
    /**
     * MUI CSS/JS tabs module
     * @module tabs
     */

    'use strict';

    var jqLite = require('./lib/jqLite'),
        util = require('./lib/util'),
        animationHelpers = require('./lib/animationHelpers'),
        attrKey = 'data-mui-toggle',
        attrSelector = '[' + attrKey + '="tab"]',
        controlsAttrKey = 'data-mui-controls',
        activeClass = 'mui--is-active',
        showstartKey = 'mui.tabs.showstart',
        showendKey = 'mui.tabs.showend',
        hidestartKey = 'mui.tabs.hidestart',
        hideendKey = 'mui.tabs.hideend';

    /**
     * Initialize the toggle element
     * @param {Element} toggleEl - The toggle element.
     */
    function initialize(toggleEl) {
      // check flag
      if (toggleEl._muiTabs === true) return;else toggleEl._muiTabs = true;

      // attach click handler
      jqLite.on(toggleEl, 'click', clickHandler);
    }

    /**
     * Handle clicks on the toggle element.
     * @param {Event} ev - The DOM event.
     */
    function clickHandler(ev) {
      // only left clicks
      if (ev.button !== 0) return;

      var toggleEl = this;

      // exit if toggle element is disabled
      if (toggleEl.getAttribute('disabled') !== null) return;

      activateTab(toggleEl);
    }

    /**
     * Activate the tab controlled by the toggle element.
     * @param {Element} toggleEl - The toggle element.
     */
    function activateTab(currToggleEl) {
      var currTabEl = currToggleEl.parentNode,
          currPaneId = currToggleEl.getAttribute(controlsAttrKey),
          currPaneEl = document.getElementById(currPaneId),
          prevTabEl,
          prevPaneEl,
          prevPaneId,
          prevToggleEl,
          currData,
          prevData,
          ev1,
          ev2,
          cssSelector;

      // exit if already active
      if (jqLite.hasClass(currTabEl, activeClass)) return;

      // raise error if pane doesn't exist
      if (!currPaneEl) util.raiseError('Tab pane "' + currPaneId + '" not found');

      // get previous pane
      prevPaneEl = getActiveSibling(currPaneEl);
      prevPaneId = prevPaneEl.id;

      // get previous toggle and tab elements
      cssSelector = '[' + controlsAttrKey + '="' + prevPaneId + '"]';
      prevToggleEl = document.querySelectorAll(cssSelector)[0];
      prevTabEl = prevToggleEl.parentNode;

      // define event data
      currData = { paneId: currPaneId, relatedPaneId: prevPaneId };
      prevData = { paneId: prevPaneId, relatedPaneId: currPaneId };

      // dispatch 'hidestart', 'showstart' events
      ev1 = util.dispatchEvent(prevToggleEl, hidestartKey, true, true, prevData);
      ev2 = util.dispatchEvent(currToggleEl, showstartKey, true, true, currData);

      // let events bubble
      setTimeout(function () {
        // exit if either event was canceled
        if (ev1.defaultPrevented || ev2.defaultPrevented) return;

        // de-activate previous
        if (prevTabEl) jqLite.removeClass(prevTabEl, activeClass);
        if (prevPaneEl) jqLite.removeClass(prevPaneEl, activeClass);

        // activate current
        jqLite.addClass(currTabEl, activeClass);
        jqLite.addClass(currPaneEl, activeClass);

        // dispatch 'hideend', 'showend' events
        util.dispatchEvent(prevToggleEl, hideendKey, true, false, prevData);
        util.dispatchEvent(currToggleEl, showendKey, true, false, currData);
      }, 0);
    }

    /** 
     * Get previous active sibling.
     * @param {Element} el - The anchor element.
     */
    function getActiveSibling(el) {
      var elList = el.parentNode.children,
          q = elList.length,
          activeEl = null,
          tmpEl;

      while (q-- && !activeEl) {
        tmpEl = elList[q];
        if (tmpEl !== el && jqLite.hasClass(tmpEl, activeClass)) activeEl = tmpEl;
      }

      return activeEl;
    }

    /** Define module API */
    module.exports = {
      /** Initialize module listeners */
      initListeners: function initListeners() {
        // markup elements available when method is called
        var elList = document.querySelectorAll(attrSelector),
            i = elList.length;
        while (i--) {
          initialize(elList[i]);
        }

        animationHelpers.onAnimationStart('mui-tab-inserted', function (ev) {
          initialize(ev.target);
        });
      },

      /** External API */
      api: {
        activate: function activate(paneId) {
          var cssSelector = '[' + controlsAttrKey + '=' + paneId + ']',
              toggleEl = document.querySelectorAll(cssSelector);

          if (!toggleEl.length) {
            util.raiseError('Tab control for pane "' + paneId + '" not found');
          }

          activateTab(toggleEl[0]);
        }
      }
    };
  }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }], 12: [function (require, module, exports) {
    /**
     * MUI CSS/JS form-control module
     * @module forms/form-control
     */

    'use strict';

    var jqLite = require('./lib/jqLite'),
        util = require('./lib/util'),
        animationHelpers = require('./lib/animationHelpers'),
        cssSelector = '.mui-textfield > input, .mui-textfield > textarea',
        floatingLabelClass = 'mui-textfield--float-label';

    var touchedClass = 'mui--is-touched',
        // hasn't lost focus yet
    untouchedClass = 'mui--is-untouched',
        pristineClass = 'mui--is-pristine',
        // user hasn't interacted yet 
    dirtyClass = 'mui--is-dirty',
        emptyClass = 'mui--is-empty',
        // control is empty
    notEmptyClass = 'mui--is-not-empty';

    /**
     * Initialize input element.
     * @param {Element} inputEl - The input element.
     */
    function initialize(inputEl) {
      // check flag
      if (inputEl._muiTextfield === true) return;else inputEl._muiTextfield = true;

      // add initial control state classes
      if (inputEl.value.length) jqLite.addClass(inputEl, notEmptyClass);else jqLite.addClass(inputEl, emptyClass);

      jqLite.addClass(inputEl, untouchedClass + ' ' + pristineClass);

      // replace `untouched` with `touched` when control loses focus
      jqLite.on(inputEl, 'blur', function blurHandler() {
        // ignore if event is a window blur
        if (document.activeElement === inputEl) return;

        // replace class and remove event handler
        jqLite.removeClass(inputEl, untouchedClass);
        jqLite.addClass(inputEl, touchedClass);
        jqLite.off(inputEl, 'blur', blurHandler);
      });

      // replace `pristine` with `dirty` when user interacts with control
      jqLite.one(inputEl, 'input change', function () {
        jqLite.removeClass(inputEl, pristineClass);
        jqLite.addClass(inputEl, dirtyClass);
      });

      // add change handler
      jqLite.on(inputEl, 'input change', inputHandler);
    }

    /**
     * Handle input events.
     */
    function inputHandler() {
      var inputEl = this;

      if (inputEl.value.length) {
        jqLite.removeClass(inputEl, emptyClass);
        jqLite.addClass(inputEl, notEmptyClass);
      } else {
        jqLite.removeClass(inputEl, notEmptyClass);
        jqLite.addClass(inputEl, emptyClass);
      }
    }

    /**
     * Handle autofill events.
     */
    function autofillHandler(inputEl) {
      // exit if not under css/js control
      if (inputEl._muiTextfield !== true) return;

      // execute inputHandler
      inputHandler.call(inputEl);
    }

    /** Define module API */
    module.exports = {
      /** Initialize input elements */
      initialize: initialize,

      /** Initialize module listeners */
      initListeners: function initListeners() {
        var doc = document;

        // markup elements available when method is called
        var elList = doc.querySelectorAll(cssSelector),
            i = elList.length;
        while (i--) {
          initialize(elList[i]);
        } // listen for new elements
        animationHelpers.onAnimationStart('mui-textfield-inserted', function (ev) {
          initialize(ev.target);
        });

        // add transition css for floating labels
        setTimeout(function () {
          var css = '.mui-textfield.mui-textfield--float-label > label {' + ['-webkit-transition', '-moz-transition', '-o-transition', 'transition', ''].join(':all .15s ease-out;') + '}';

          util.loadStyle(css);
        }, 150);

        // listen for autofill events
        animationHelpers.onAnimationStart('mui-textfield-autofill', function (ev) {
          autofillHandler(ev.target);
        });

        // pointer-events shim for floating labels
        if (util.supportsPointerEvents() === false) {
          jqLite.on(doc, 'click', function (ev) {
            var targetEl = ev.target;

            if (targetEl.tagName === 'LABEL' && jqLite.hasClass(targetEl.parentNode, floatingLabelClass)) {
              var inputEl = targetEl.previousElementSibling;
              if (inputEl) inputEl.focus();
            }
          });
        }
      }
    };
  }, { "./lib/animationHelpers": 4, "./lib/jqLite": 6, "./lib/util": 7 }] }, {}, [1]);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldIconFoundation = exports.MDCTextFieldIcon = exports.MDCTextFieldHelperTextFoundation = exports.MDCTextFieldHelperText = exports.MDCTextFieldFoundation = exports.MDCTextField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(2);

var _util = __webpack_require__(4);

var _constants = __webpack_require__(15);

var _adapter = __webpack_require__(16);

var _foundation = __webpack_require__(47);

var _foundation2 = _interopRequireDefault(_foundation);

var _index2 = __webpack_require__(12);

var _index3 = __webpack_require__(48);

var _index4 = __webpack_require__(49);

var _index5 = __webpack_require__(10);

var _index6 = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */
var MDCTextField = function (_MDCComponent) {
  _inherits(MDCTextField, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTextField() {
    var _ref;

    _classCallCheck(this, MDCTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTextField.__proto__ || Object.getPrototypeOf(MDCTextField)).call.apply(_ref, [this].concat(args)));

    _this.input_;
    /** @type {?MDCRipple} */
    _this.ripple;
    /** @private {?MDCLineRipple} */
    _this.lineRipple_;
    /** @private {?MDCTextFieldHelperText} */
    _this.helperText_;
    /** @private {?MDCTextFieldIcon} */
    _this.icon_;
    /** @private {?MDCFloatingLabel} */
    _this.label_;
    /** @private {?MDCNotchedOutline} */
    _this.outline_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */


  _createClass(MDCTextField, [{
    key: 'initialize',


    /**
     * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
     * creates a new MDCRipple.
     * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
     * creates a new MDCLineRipple.
     * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
     * creates a new MDCTextFieldHelperText.
     * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
     * creates a new MDCTextFieldIcon.
     * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
     * creates a new MDCFloatingLabel.
     * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
     * creates a new MDCNotchedOutline.
     */
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
        return new _index.MDCRipple(el, foundation);
      };
      var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
        return new _index2.MDCLineRipple(el);
      };
      var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
        return new _index3.MDCTextFieldHelperText(el);
      };
      var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
        return new _index4.MDCTextFieldIcon(el);
      };

      var _this2 = this;

      var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
        return new _index5.MDCFloatingLabel(el);
      };
      var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
        return new _index6.MDCNotchedOutline(el);
      };

      this.input_ = this.root_.querySelector(_constants.strings.INPUT_SELECTOR);
      var labelElement = this.root_.querySelector(_constants.strings.LABEL_SELECTOR);
      if (labelElement) {
        this.label_ = labelFactory(labelElement);
      }
      var lineRippleElement = this.root_.querySelector(_constants.strings.LINE_RIPPLE_SELECTOR);
      if (lineRippleElement) {
        this.lineRipple_ = lineRippleFactory(lineRippleElement);
      }
      var outlineElement = this.root_.querySelector(_constants.strings.OUTLINE_SELECTOR);
      if (outlineElement) {
        this.outline_ = outlineFactory(outlineElement);
      }
      if (this.input_.hasAttribute(_constants.strings.ARIA_CONTROLS)) {
        var helperTextElement = document.getElementById(this.input_.getAttribute(_constants.strings.ARIA_CONTROLS));
        if (helperTextElement) {
          this.helperText_ = helperTextFactory(helperTextElement);
        }
      }
      var iconElement = this.root_.querySelector(_constants.strings.ICON_SELECTOR);
      if (iconElement) {
        this.icon_ = iconFactory(iconElement);
      }

      this.ripple = null;
      if (this.root_.classList.contains(_constants.cssClasses.BOX)) {
        var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
        var adapter = Object.assign(_index.MDCRipple.createAdapter( /** @type {!RippleCapableSurface} */this), {
          isSurfaceActive: function isSurfaceActive() {
            return _this2.input_[MATCHES](':active');
          },
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            return _this2.input_.addEventListener(type, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            return _this2.input_.removeEventListener(type, handler);
          }
        });
        var foundation = new _index.MDCRippleFoundation(adapter);
        this.ripple = rippleFactory(this.root_, foundation);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.ripple) {
        this.ripple.destroy();
      }
      if (this.lineRipple_) {
        this.lineRipple_.destroy();
      }
      if (this.helperText_) {
        this.helperText_.destroy();
      }
      if (this.icon_) {
        this.icon_.destroy();
      }
      if (this.label_) {
        this.label_.destroy();
      }
      if (this.outline_) {
        this.outline_.destroy();
      }
      _get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
    }

    /**
     * Initiliazes the Text Field's internal state based on the environment's
     * state.
     */

  }, {
    key: 'initialSyncWithDom',
    value: function initialSyncWithDom() {
      this.disabled = this.input_.disabled;
    }

    /**
     * @return {string} The value of the input.
     */

  }, {
    key: 'layout',


    /**
     * Recomputes the outline SVG path for the outline element.
     */
    value: function layout() {
      var openNotch = this.foundation_.shouldFloat;
      this.foundation_.notchOutline(openNotch);
    }

    /**
     * @return {!MDCTextFieldFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default(
      /** @type {!MDCTextFieldAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this3.root_.classList.contains(className);
        },
        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
          return _this3.root_.addEventListener(evtType, handler);
        },
        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
          return _this3.root_.removeEventListener(evtType, handler);
        },
        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
          var observer = new MutationObserver(handler);
          var targetNode = _this3.root_.querySelector(_constants.strings.INPUT_SELECTOR);
          var config = { attributes: true };
          observer.observe(targetNode, config);
          return observer;
        },
        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
          return observer.disconnect();
        },
        isFocused: function isFocused() {
          return document.activeElement === _this3.root_.querySelector(_constants.strings.INPUT_SELECTOR);
        },
        isRtl: function isRtl() {
          return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
        }
      }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
    }

    /**
     * @return {!{
     *   shakeLabel: function(boolean): undefined,
     *   floatLabel: function(boolean): undefined,
     *   hasLabel: function(): boolean,
     *   getLabelWidth: function(): number,
     * }}
     */

  }, {
    key: 'getLabelAdapterMethods_',
    value: function getLabelAdapterMethods_() {
      var _this4 = this;

      return {
        shakeLabel: function shakeLabel(shouldShake) {
          return _this4.label_.shake(shouldShake);
        },
        floatLabel: function floatLabel(shouldFloat) {
          return _this4.label_.float(shouldFloat);
        },
        hasLabel: function hasLabel() {
          return !!_this4.label_;
        },
        getLabelWidth: function getLabelWidth() {
          return _this4.label_.getWidth();
        }
      };
    }

    /**
     * @return {!{
     *   activateLineRipple: function(): undefined,
     *   deactivateLineRipple: function(): undefined,
     *   setLineRippleTransformOrigin: function(number): undefined,
     * }}
     */

  }, {
    key: 'getLineRippleAdapterMethods_',
    value: function getLineRippleAdapterMethods_() {
      var _this5 = this;

      return {
        activateLineRipple: function activateLineRipple() {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.activate();
          }
        },
        deactivateLineRipple: function deactivateLineRipple() {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.deactivate();
          }
        },
        setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
          if (_this5.lineRipple_) {
            _this5.lineRipple_.setRippleCenter(normalizedX);
          }
        }
      };
    }

    /**
     * @return {!{
     *   notchOutline: function(number, boolean): undefined,
     *   hasOutline: function(): boolean,
     * }}
     */

  }, {
    key: 'getOutlineAdapterMethods_',
    value: function getOutlineAdapterMethods_() {
      var _this6 = this;

      return {
        notchOutline: function notchOutline(labelWidth, isRtl) {
          return _this6.outline_.notch(labelWidth, isRtl);
        },
        closeOutline: function closeOutline() {
          return _this6.outline_.closeNotch();
        },
        hasOutline: function hasOutline() {
          return !!_this6.outline_;
        }
      };
    }

    /**
     * @return {!{
     *   registerInputInteractionHandler: function(string, function()): undefined,
     *   deregisterInputInteractionHandler: function(string, function()): undefined,
     *   getNativeInput: function(): ?Element,
     * }}
     */

  }, {
    key: 'getInputAdapterMethods_',
    value: function getInputAdapterMethods_() {
      var _this7 = this;

      return {
        registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
          return _this7.input_.addEventListener(evtType, handler);
        },
        deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
          return _this7.input_.removeEventListener(evtType, handler);
        },
        getNativeInput: function getNativeInput() {
          return _this7.input_;
        }
      };
    }

    /**
     * Returns a map of all subcomponents to subfoundations.
     * @return {!FoundationMapType}
     */

  }, {
    key: 'getFoundationMap_',
    value: function getFoundationMap_() {
      return {
        helperText: this.helperText_ ? this.helperText_.foundation : undefined,
        icon: this.icon_ ? this.icon_.foundation : undefined
      };
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /**
     * @param {string} value The value to set on the input.
     */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /**
     * @param {boolean} disabled Sets the Text Field disabled or enabled.
     */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /**
     * @return {boolean} valid True if the Text Field is valid.
     */

  }, {
    key: 'valid',
    get: function get() {
      return this.foundation_.isValid();
    }

    /**
     * @param {boolean} valid Sets the Text Field valid or invalid.
     */
    ,
    set: function set(valid) {
      this.foundation_.setValid(valid);
    }

    /**
     * @return {boolean} True if the Text Field is required.
     */

  }, {
    key: 'required',
    get: function get() {
      return this.input_.required;
    }

    /**
     * @param {boolean} required Sets the Text Field to required.
     */
    ,
    set: function set(required) {
      this.input_.required = required;
    }

    /**
     * @return {string} The input element's validation pattern.
     */

  }, {
    key: 'pattern',
    get: function get() {
      return this.input_.pattern;
    }

    /**
     * @param {string} pattern Sets the input element's validation pattern.
     */
    ,
    set: function set(pattern) {
      this.input_.pattern = pattern;
    }

    /**
     * @return {number} The input element's minLength.
     */

  }, {
    key: 'minLength',
    get: function get() {
      return this.input_.minLength;
    }

    /**
     * @param {number} minLength Sets the input element's minLength.
     */
    ,
    set: function set(minLength) {
      this.input_.minLength = minLength;
    }

    /**
     * @return {number} The input element's maxLength.
     */

  }, {
    key: 'maxLength',
    get: function get() {
      return this.input_.maxLength;
    }

    /**
     * @param {number} maxLength Sets the input element's maxLength.
     */
    ,
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set < 0
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    }

    /**
     * @return {string} The input element's min.
     */

  }, {
    key: 'min',
    get: function get() {
      return this.input_.min;
    }

    /**
     * @param {string} min Sets the input element's min.
     */
    ,
    set: function set(min) {
      this.input_.min = min;
    }

    /**
     * @return {string} The input element's max.
     */

  }, {
    key: 'max',
    get: function get() {
      return this.input_.max;
    }

    /**
     * @param {string} max Sets the input element's max.
     */
    ,
    set: function set(max) {
      this.input_.max = max;
    }

    /**
     * @return {string} The input element's step.
     */

  }, {
    key: 'step',
    get: function get() {
      return this.input_.step;
    }

    /**
     * @param {string} step Sets the input element's step.
     */
    ,
    set: function set(step) {
      this.input_.step = step;
    }

    /**
     * Sets the helper text element content.
     * @param {string} content
     */

  }, {
    key: 'helperTextContent',
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTextField(root);
    }
  }]);

  return MDCTextField;
}(_component2.default);

exports.MDCTextField = MDCTextField;
exports.MDCTextFieldFoundation = _foundation2.default;
exports.MDCTextFieldHelperText = _index3.MDCTextFieldHelperText;
exports.MDCTextFieldHelperTextFoundation = _index3.MDCTextFieldHelperTextFoundation;
exports.MDCTextFieldIcon = _index4.MDCTextFieldIcon;
exports.MDCTextFieldIconFoundation = _index4.MDCTextFieldIconFoundation;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};

/** @enum {string} */
var cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};

exports.strings = strings;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = __webpack_require__(6);

var _foundation4 = _interopRequireDefault(_foundation3);

var _foundation5 = __webpack_require__(7);

var _foundation6 = _interopRequireDefault(_foundation5);

var _adapter = __webpack_require__(16);

var _constants = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */

var MDCTextFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldFoundation, _MDCFoundation);

  _createClass(MDCTextFieldFoundation, [{
    key: 'shouldShake',


    /** @return {boolean} */
    get: function get() {
      return !this.isValid() && !this.isFocused_;
    }

    /** @return {boolean} */

  }, {
    key: 'shouldFloat',
    get: function get() {
      return !this.isBadInput_() && (!!this.getValue() || this.isFocused_);
    }

    /**
     * {@see MDCTextFieldAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldAdapter}
     */

  }], [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
          deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
          registerInputInteractionHandler: function registerInputInteractionHandler() {},
          deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
          registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
          deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
          getNativeInput: function getNativeInput() {},
          isFocused: function isFocused() {},
          isRtl: function isRtl() {},
          activateLineRipple: function activateLineRipple() {},
          deactivateLineRipple: function deactivateLineRipple() {},
          setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
          shakeLabel: function shakeLabel() {},
          floatLabel: function floatLabel() {},
          hasLabel: function hasLabel() {},
          getLabelWidth: function getLabelWidth() {},
          hasOutline: function hasOutline() {},
          notchOutline: function notchOutline() {},
          closeOutline: function closeOutline() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldAdapter} adapter
     * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
     */

  }]);

  function MDCTextFieldFoundation(adapter) {
    var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

    _classCallCheck(this, MDCTextFieldFoundation);

    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    var _this = _possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter)));

    _this.helperText_ = foundationMap.helperText;
    /** @type {!MDCTextFieldIconFoundation|undefined} */
    _this.icon_ = foundationMap.icon;

    /** @private {boolean} */
    _this.isFocused_ = false;
    /** @private {boolean} */
    _this.receivedUserInput_ = false;
    /** @private {boolean} */
    _this.useCustomValidityChecking_ = false;
    /** @private {boolean} */
    _this.isValid_ = true;
    /** @private {function(): undefined} */
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus();
    };
    /** @private {function(!Event): undefined} */
    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };
    /** @private {function(!Event): undefined} */
    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };
    /** @private {function(!Array): undefined} */
    _this.validationAttributeChangeHandler_ = function (mutations) {
      return _this.handleValidationAttributeMutation_(mutations);
    };
    /** @private {!MutationObserver} */
    _this.validationObserver_;
    return _this;
  }

  _createClass(MDCTextFieldFoundation, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
      // Ensure label does not collide with any pre-filled value.
      if (this.adapter_.hasLabel() && this.getValue()) {
        this.adapter_.floatLabel(this.shouldFloat);
        this.notchOutline(this.shouldFloat);
      }

      if (this.adapter_.isFocused()) {
        this.inputFocusHandler_();
      }

      this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
      this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
      this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
      ['mousedown', 'touchstart'].forEach(function (evtType) {
        _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
      });
      ['click', 'keydown'].forEach(function (evtType) {
        _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
      });
      this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
      this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
      this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
      this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
      ['mousedown', 'touchstart'].forEach(function (evtType) {
        _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
      });
      ['click', 'keydown'].forEach(function (evtType) {
        _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
      });
      this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
    }

    /**
     * Handles user interactions with the Text Field.
     */

  }, {
    key: 'handleTextFieldInteraction',
    value: function handleTextFieldInteraction() {
      if (this.adapter_.getNativeInput().disabled) {
        return;
      }
      this.receivedUserInput_ = true;
    }

    /**
     * Handles validation attribute changes
     * @param {Array<MutationRecord>} mutationsList
     * @private
     */

  }, {
    key: 'handleValidationAttributeMutation_',
    value: function handleValidationAttributeMutation_(mutationsList) {
      var _this4 = this;

      mutationsList.some(function (mutation) {
        if (VALIDATION_ATTR_WHITELIST.indexOf(mutation.attributeName) > -1) {
          _this4.styleValidity_(true);
          return true;
        }
      });
    }

    /**
     * Opens/closes the notched outline.
     * @param {boolean} openNotch
     */

  }, {
    key: 'notchOutline',
    value: function notchOutline(openNotch) {
      if (!this.adapter_.hasOutline() || !this.adapter_.hasLabel()) {
        return;
      }

      if (openNotch) {
        var isDense = this.adapter_.hasClass(_constants.cssClasses.DENSE);
        var labelScale = isDense ? _constants.numbers.DENSE_LABEL_SCALE : _constants.numbers.LABEL_SCALE;
        var labelWidth = this.adapter_.getLabelWidth() * labelScale;
        var isRtl = this.adapter_.isRtl();
        this.adapter_.notchOutline(labelWidth, isRtl);
      } else {
        this.adapter_.closeOutline();
      }
    }

    /**
     * Activates the text field focus state.
     */

  }, {
    key: 'activateFocus',
    value: function activateFocus() {
      this.isFocused_ = true;
      this.styleFocused_(this.isFocused_);
      this.adapter_.activateLineRipple();
      this.notchOutline(this.shouldFloat);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
      }
      if (this.helperText_) {
        this.helperText_.showToScreenReader();
      }
    }

    /**
     * Sets the line ripple's transform origin, so that the line ripple activate
     * animation will animate out from the user's click location.
     * @param {!Event} evt
     */

  }, {
    key: 'setTransformOrigin',
    value: function setTransformOrigin(evt) {
      var targetClientRect = evt.target.getBoundingClientRect();
      var evtCoords = { x: evt.clientX, y: evt.clientY };
      var normalizedX = evtCoords.x - targetClientRect.left;
      this.adapter_.setLineRippleTransformOrigin(normalizedX);
    }

    /**
     * Activates the Text Field's focus state in cases when the input value
     * changes without user input (e.g. programatically).
     */

  }, {
    key: 'autoCompleteFocus',
    value: function autoCompleteFocus() {
      if (!this.receivedUserInput_) {
        this.activateFocus();
      }
    }

    /**
     * Deactivates the Text Field's focus state.
     */

  }, {
    key: 'deactivateFocus',
    value: function deactivateFocus() {
      this.isFocused_ = false;
      this.adapter_.deactivateLineRipple();
      var input = this.getNativeInput_();
      var shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
      var isValid = this.isValid();
      this.styleValidity_(isValid);
      this.styleFocused_(this.isFocused_);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
        this.notchOutline(this.shouldFloat);
      }
      if (shouldRemoveLabelFloat) {
        this.receivedUserInput_ = false;
      }
    }

    /**
     * @return {string} The value of the input Element.
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeInput_().value;
    }

    /**
     * @param {string} value The value to set on the input Element.
     */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeInput_().value = value;
      var isValid = this.isValid();
      this.styleValidity_(isValid);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
        this.adapter_.floatLabel(this.shouldFloat);
        this.notchOutline(this.shouldFloat);
      }
    }

    /**
     * @return {boolean} If a custom validity is set, returns that value.
     *     Otherwise, returns the result of native validity checks.
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      return this.useCustomValidityChecking_ ? this.isValid_ : this.isNativeInputValid_();
    }

    /**
     * @param {boolean} isValid Sets the validity state of the Text Field.
     */

  }, {
    key: 'setValid',
    value: function setValid(isValid) {
      this.useCustomValidityChecking_ = true;
      this.isValid_ = isValid;
      // Retrieve from the getter to ensure correct logic is applied.
      isValid = this.isValid();
      this.styleValidity_(isValid);
      if (this.adapter_.hasLabel()) {
        this.adapter_.shakeLabel(this.shouldShake);
      }
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeInput_().disabled;
    }

    /**
     * @param {boolean} disabled Sets the text-field disabled or enabled.
     */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeInput_().disabled = disabled;
      this.styleDisabled_(disabled);
    }

    /**
     * @param {string} content Sets the content of the helper text.
     */

  }, {
    key: 'setHelperTextContent',
    value: function setHelperTextContent(content) {
      if (this.helperText_) {
        this.helperText_.setContent(content);
      }
    }

    /**
     * @return {boolean} True if the Text Field input fails in converting the
     *     user-supplied value.
     * @private
     */

  }, {
    key: 'isBadInput_',
    value: function isBadInput_() {
      return this.getNativeInput_().validity.badInput;
    }

    /**
     * @return {boolean} The result of native validity checking
     *     (ValidityState.valid).
     */

  }, {
    key: 'isNativeInputValid_',
    value: function isNativeInputValid_() {
      return this.getNativeInput_().validity.valid;
    }

    /**
     * Styles the component based on the validity state.
     * @param {boolean} isValid
     * @private
     */

  }, {
    key: 'styleValidity_',
    value: function styleValidity_(isValid) {
      var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

      if (isValid) {
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.addClass(INVALID);
      }
      if (this.helperText_) {
        this.helperText_.setValidity(isValid);
      }
    }

    /**
     * Styles the component based on the focused state.
     * @param {boolean} isFocused
     * @private
     */

  }, {
    key: 'styleFocused_',
    value: function styleFocused_(isFocused) {
      var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

      if (isFocused) {
        this.adapter_.addClass(FOCUSED);
      } else {
        this.adapter_.removeClass(FOCUSED);
      }
    }

    /**
     * Styles the component based on the disabled state.
     * @param {boolean} isDisabled
     * @private
     */

  }, {
    key: 'styleDisabled_',
    value: function styleDisabled_(isDisabled) {
      var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
          DISABLED = _MDCTextFieldFoundati.DISABLED,
          INVALID = _MDCTextFieldFoundati.INVALID;

      if (isDisabled) {
        this.adapter_.addClass(DISABLED);
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
      if (this.icon_) {
        this.icon_.setDisabled(isDisabled);
      }
    }

    /**
     * @return {!Element|!NativeInputType} The native text input from the
     * host environment, or a dummy if none exists.
     * @private
     */

  }, {
    key: 'getNativeInput_',
    value: function getNativeInput_() {
      return this.adapter_.getNativeInput() ||
      /** @type {!NativeInputType} */{
        value: '',
        disabled: false,
        validity: {
          badInput: false,
          valid: true
        }
      };
    }
  }]);

  return MDCTextFieldFoundation;
}(_foundation2.default);

exports.default = MDCTextFieldFoundation;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldHelperTextFoundation = exports.MDCTextFieldHelperText = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(17);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(6);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */
var MDCTextFieldHelperText = function (_MDCComponent) {
  _inherits(MDCTextFieldHelperText, _MDCComponent);

  function MDCTextFieldHelperText() {
    _classCallCheck(this, MDCTextFieldHelperText);

    return _possibleConstructorReturn(this, (MDCTextFieldHelperText.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperText)).apply(this, arguments));
  }

  _createClass(MDCTextFieldHelperText, [{
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTextFieldHelperTextFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCTextFieldHelperTextAdapter} */Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        removeAttr: function removeAttr(attr) {
          return _this2.root_.removeAttribute(attr);
        },
        setContent: function setContent(content) {
          _this2.root_.textContent = content;
        }
      }));
    }
  }, {
    key: 'foundation',


    /**
     * @return {!MDCTextFieldHelperTextFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTextFieldHelperText}
     */
    value: function attachTo(root) {
      return new MDCTextFieldHelperText(root);
    }
  }]);

  return MDCTextFieldHelperText;
}(_component2.default);

exports.MDCTextFieldHelperText = MDCTextFieldHelperText;
exports.MDCTextFieldHelperTextFoundation = _foundation2.default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldIconFoundation = exports.MDCTextFieldIcon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(18);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(7);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */
var MDCTextFieldIcon = function (_MDCComponent) {
  _inherits(MDCTextFieldIcon, _MDCComponent);

  function MDCTextFieldIcon() {
    _classCallCheck(this, MDCTextFieldIcon);

    return _possibleConstructorReturn(this, (MDCTextFieldIcon.__proto__ || Object.getPrototypeOf(MDCTextFieldIcon)).apply(this, arguments));
  }

  _createClass(MDCTextFieldIcon, [{
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTextFieldIconFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default( /** @type {!MDCTextFieldIconAdapter} */Object.assign({
        getAttr: function getAttr(attr) {
          return _this2.root_.getAttribute(attr);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        removeAttr: function removeAttr(attr) {
          return _this2.root_.removeAttribute(attr);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return _this2.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return _this2.root_.removeEventListener(evtType, handler);
        },
        notifyIconAction: function notifyIconAction() {
          return _this2.emit(_foundation2.default.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
        }
      }));
    }
  }, {
    key: 'foundation',


    /**
     * @return {!MDCTextFieldIconFoundation}
     */
    get: function get() {
      return this.foundation_;
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCTextFieldIcon}
     */
    value: function attachTo(root) {
      return new MDCTextFieldIcon(root);
    }
  }]);

  return MDCTextFieldIcon;
}(_component2.default);

exports.MDCTextFieldIcon = MDCTextFieldIcon;
exports.MDCTextFieldIconFoundation = _foundation2.default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCNotchedOutlineFoundation = exports.MDCNotchedOutline = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(19);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(51);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */
var MDCNotchedOutline = function (_MDCComponent) {
  _inherits(MDCNotchedOutline, _MDCComponent);

  function MDCNotchedOutline() {
    _classCallCheck(this, MDCNotchedOutline);

    return _possibleConstructorReturn(this, (MDCNotchedOutline.__proto__ || Object.getPrototypeOf(MDCNotchedOutline)).apply(this, arguments));
  }

  _createClass(MDCNotchedOutline, [{
    key: 'notch',


    /**
      * Updates outline selectors and SVG path to open notch.
      * @param {number} notchWidth The notch width in the outline.
      * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
      * will be right justified in outline path, otherwise left justified.
      */
    value: function notch(notchWidth, isRtl) {
      this.foundation_.notch(notchWidth, isRtl);
    }

    /**
     * Updates the outline selectors to close notch and return it to idle state.
     */

  }, {
    key: 'closeNotch',
    value: function closeNotch() {
      this.foundation_.closeNotch();
    }

    /**
     * @return {!MDCNotchedOutlineFoundation}
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        getWidth: function getWidth() {
          return _this2.root_.offsetWidth;
        },
        getHeight: function getHeight() {
          return _this2.root_.offsetHeight;
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setOutlinePathAttr: function setOutlinePathAttr(value) {
          var path = _this2.root_.querySelector(_constants.strings.PATH_SELECTOR);
          path.setAttribute('d', value);
        },
        getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
          var idleOutlineElement = _this2.root_.parentNode.querySelector(_constants.strings.IDLE_OUTLINE_SELECTOR);
          return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
        }
      });
    }
  }], [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCNotchedOutline}
     */
    value: function attachTo(root) {
      return new MDCNotchedOutline(root);
    }
  }]);

  return MDCNotchedOutline;
}(_component2.default);

exports.MDCNotchedOutline = MDCNotchedOutline;
exports.MDCNotchedOutlineFoundation = _foundation2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(19);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */
var MDCNotchedOutlineFoundation = function (_MDCFoundation) {
  _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

  _createClass(MDCNotchedOutlineFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /**
     * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCNotchedOutlineAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCNotchedOutlineAdapter} */{
          getWidth: function getWidth() {},
          getHeight: function getHeight() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          setOutlinePathAttr: function setOutlinePathAttr() {},
          getIdleOutlineStyleValue: function getIdleOutlineStyleValue() {}
        }
      );
    }

    /**
     * @param {!MDCNotchedOutlineAdapter} adapter
     */

  }]);

  function MDCNotchedOutlineFoundation(adapter) {
    _classCallCheck(this, MDCNotchedOutlineFoundation);

    return _possibleConstructorReturn(this, (MDCNotchedOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCNotchedOutlineFoundation)).call(this, Object.assign(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
  }

  /**
   * Adds the outline notched selector and updates the notch width
   * calculated based off of notchWidth and isRtl.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */


  _createClass(MDCNotchedOutlineFoundation, [{
    key: 'notch',
    value: function notch(notchWidth) {
      var isRtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

      this.adapter_.addClass(OUTLINE_NOTCHED);
      this.updateSvgPath_(notchWidth, isRtl);
    }

    /**
     * Removes notched outline selector to close the notch in the outline.
     */

  }, {
    key: 'closeNotch',
    value: function closeNotch() {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

      this.adapter_.removeClass(OUTLINE_NOTCHED);
    }

    /**
     * Updates the SVG path of the focus outline element based on the notchWidth
     * and the RTL context.
     * @param {number} notchWidth
     * @param {boolean=} isRtl
     * @private
     */

  }, {
    key: 'updateSvgPath_',
    value: function updateSvgPath_(notchWidth, isRtl) {
      // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
      var radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
      var radius = parseFloat(radiusStyleValue);
      var width = this.adapter_.getWidth();
      var height = this.adapter_.getHeight();
      var cornerWidth = radius + 1.2;
      var leadingStrokeLength = Math.abs(11 - cornerWidth);
      var paddedNotchWidth = notchWidth + 8;

      // The right, bottom, and left sides of the outline follow the same SVG path.
      var pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

      var path = void 0;
      if (!isRtl) {
        path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
      } else {
        path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength);
      }

      this.adapter_.setOutlinePathAttr(path);
    }
  }]);

  return MDCNotchedOutlineFoundation;
}(_foundation2.default);

exports.default = MDCNotchedOutlineFoundation;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCDialog = exports.util = exports.MDCDialogFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = __webpack_require__(21);

var _index2 = __webpack_require__(53);

var _foundation = __webpack_require__(56);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(58);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCDialogFoundation = _foundation2.default;
exports.util = util;

var MDCDialog = exports.MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, (MDCDialog.__proto__ || Object.getPrototypeOf(MDCDialog)).apply(this, arguments));
  }

  _createClass(MDCDialog, [{
    key: 'initialize',
    value: function initialize() {
      this.focusTrap_ = util.createFocusTrapInstance(this.dialogSurface_, this.acceptButton_);
      this.footerBtnRipples_ = [];

      var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
      for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
        this.footerBtnRipples_.push(new _index2.MDCRipple(footerBtn));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.footerBtnRipples_.forEach(function (ripple) {
        return ripple.destroy();
      });
      _get(MDCDialog.prototype.__proto__ || Object.getPrototypeOf(MDCDialog.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'show',
    value: function show() {
      this.foundation_.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.foundation_.close();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(evt, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(evt, handler);
        },
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.addEventListener(evt, handler);
        },
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.removeEventListener(evt, handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.dialogSurface_.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.dialogSurface_.removeEventListener('transitionend', handler);
        },
        notifyAccept: function notifyAccept() {
          return _this2.emit(_foundation2.default.strings.ACCEPT_EVENT);
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit(_foundation2.default.strings.CANCEL_EVENT);
        },
        trapFocusOnSurface: function trapFocusOnSurface() {
          return _this2.focusTrap_.activate();
        },
        untrapFocusOnSurface: function untrapFocusOnSurface() {
          return _this2.focusTrap_.deactivate();
        },
        isDialog: function isDialog(el) {
          return el === _this2.dialogSurface_;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.DIALOG_SURFACE_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCDialog(root);
    }
  }]);

  return MDCDialog;
}(_index.MDCComponent);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(22);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(23);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(54);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(24);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /** @return {!MDCRippleFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(8);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(23);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(55);

var _util = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return requestAnimationFrame(function () {
        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',
    value: function isSupported_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_()) {
        return;
      }
      this.registerRootHandlers_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this2.layoutInternal_();
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (!this.isSupported_()) {
        return;
      }

      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

        this.adapter_.removeClass(FG_ACTIVATION);
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    /** @private */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_() {
      var _this4 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = null;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @param {?Event} e
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */Object.assign({}, activationState);

      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(evtObject, state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(e, state);
          _this13.resetActivationState_();
        });
      }
    }

    /**
     * @param {?Event=} event Optional event containing position information.
     */

  }, {
    key: 'deactivate',
    value: function deactivate() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.deactivate_(event);
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(21);

var _constants = __webpack_require__(57);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {},
        isDialog: function isDialog() {
          return (/* el: Element */ /* boolean */false
          );
        }
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, (MDCDialogFoundation.__proto__ || Object.getPrototypeOf(MDCDialogFoundation)).call(this, Object.assign(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function (evt) {
      if (_this.adapter_.eventTargetHasClass(evt.target, _constants.cssClasses.BACKDROP)) {
        _this.cancel(true);
      }
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd_(evt);
    };
    return _this;
  }

  _createClass(MDCDialogFoundation, [{
    key: 'destroy',
    value: function destroy() {
      // Ensure that dialog is cleaned up when destroyed
      if (this.isOpen_) {
        this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
        this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
        this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
        this.adapter_.untrapFocusOnSurface();
        this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
        this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
        this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
        this.enableScroll_();
      }
    }
  }, {
    key: 'open',
    value: function open() {
      this.isOpen_ = true;
      this.disableScroll_();
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
    }
  }, {
    key: 'close',
    value: function close() {
      this.isOpen_ = false;
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }, {
    key: 'accept',
    value: function accept(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyAccept();
      }

      this.close();
    }
  }, {
    key: 'cancel',
    value: function cancel(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyCancel();
      }

      this.close();
    }
  }, {
    key: 'handleDialogClick_',
    value: function handleDialogClick_(evt) {
      var target = evt.target;

      if (this.adapter_.eventTargetHasClass(target, _constants.cssClasses.ACCEPT_BTN)) {
        this.accept(true);
      } else if (this.adapter_.eventTargetHasClass(target, _constants.cssClasses.CANCEL_BTN)) {
        this.cancel(true);
      }
    }
  }, {
    key: 'handleTransitionEnd_',
    value: function handleTransitionEnd_(evt) {
      if (this.adapter_.isDialog(evt.target)) {
        this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
        this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
        if (this.isOpen_) {
          this.adapter_.trapFocusOnSurface();
        } else {
          this.enableScroll_();
        };
      };
    }
  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.adapter_.addBodyClass(_constants.cssClasses.SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll_',
    value: function enableScroll_() {
      this.adapter_.removeBodyClass(_constants.cssClasses.SCROLL_LOCK);
    }
  }]);

  return MDCDialogFoundation;
}(_index.MDCFoundation);

exports.default = MDCDialogFoundation;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = exports.strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel'
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFocusTrapInstance = createFocusTrapInstance;

var _focusTrap = __webpack_require__(59);

var _focusTrap2 = _interopRequireDefault(_focusTrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
  var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _focusTrap2.default;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true
  });
} /**
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tabbable = __webpack_require__(60);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var firstTabbableNode = null;
  var lastTabbableNode = null;
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;
  var tabEvent = null;

  var container = typeof element === 'string' ? document.querySelector(element) : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = userOptions && userOptions.returnFocusOnDeactivate !== undefined ? userOptions.returnFocusOnDeactivate : true;
  config.escapeDeactivates = userOptions && userOptions.escapeDeactivates !== undefined ? userOptions.escapeDeactivates : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: activateOptions && activateOptions.onActivate !== undefined ? activateOptions.onActivate : config.onActivate
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate,
      onDeactivate: deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();

    if (tabEvent) {
      readjustFocus(tabEvent);
    }
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    updateTabbableNodes();

    if (e.target.hasAttribute('tabindex') && Number(e.target.getAttribute('tabindex')) < 0) {
      return tabEvent = e;
    }

    e.preventDefault();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
    firstTabbableNode = tabbableNodes[0];
    lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
  }

  function readjustFocus(e) {
    if (e.shiftKey) return tryFocus(lastTabbableNode);

    tryFocus(firstTabbableNode);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  if (node === document.activeElement) return;

  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];

  var candidates = el.querySelectorAll(candidateSelectors.join(','));

  if (options.includeContainer) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    if (candidateSelectors.some(function (candidateSelector) {
      return matches.call(el, candidateSelector);
    })) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate, elementDocument)) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(function (a, b) {
    return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
  }).map(function (a) {
    return a.node;
  });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  };
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRadioFoundation = exports.MDCRadio = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(3);

var _foundation = __webpack_require__(62);

var _foundation2 = _interopRequireDefault(_foundation);

var _index2 = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends MDCComponent<!MDCRadioFoundation>
 * @implements {MDCSelectionControl}
 */
var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',


    /** @return {boolean} */
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(_index2.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        }
      });
      var foundation = new _index2.MDCRippleFoundation(adapter);
      return new _index2.MDCRipple(this.root_, foundation);
    }

    /**
     * Returns the state of the native control element, or null if the native control element is not present.
     * @return {?MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }

    /** @return {!MDCRadioFoundation} */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(_foundation2.default.strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

      var el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return el;
    }
  }]);

  return MDCRadio;
}(_component2.default);

exports.MDCRadio = MDCRadio;
exports.MDCRadioFoundation = _foundation2.default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _index = __webpack_require__(3);

var _adapter = __webpack_require__(63);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */
var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',


    /** @return {boolean} */
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }

    /** @param {boolean} checked */

  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }

    /** @return {boolean} */

  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }

    /** @param {boolean} disabled */

  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }

    /** @return {?string} */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }

    /** @param {?string} value */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }

    /**
     * @return {!MDCSelectionControlState}
     * @private
     */

  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false,
        value: null
      };
    }
  }], [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return {!MDCRadioAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCRadioAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{}
        }
      );
    }
  }]);

  return MDCRadioFoundation;
}(_foundation2.default);

exports.default = MDCRadioFoundation;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/* eslint-disable no-unused-vars */


var _index = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Radio. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRadioAdapter = function () {
  function MDCRadioAdapter() {
    _classCallCheck(this, MDCRadioAdapter);
  }

  _createClass(MDCRadioAdapter, [{
    key: 'addClass',

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {}

    /** @return {!MDCSelectionControlState} */

  }, {
    key: 'getNativeControl',
    value: function getNativeControl() {}
  }]);

  return MDCRadioAdapter;
}();

exports.default = MDCRadioAdapter;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

exports.strings = strings;
exports.cssClasses = cssClasses;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CornerBit = exports.Corner = exports.AnchorMargin = exports.MDCMenu = exports.MDCMenuFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(66);

var _foundation = __webpack_require__(67);

var _constants = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCMenuFoundation>
 */
var MDCMenu = function (_MDCComponent) {
  _inherits(MDCMenu, _MDCComponent);

  /** @param {...?} args */
  function MDCMenu() {
    var _ref;

    _classCallCheck(this, MDCMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCMenu.__proto__ || Object.getPrototypeOf(MDCMenu)).call.apply(_ref, [this].concat(args)));

    _this.previousFocus_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCMenu}
   */


  _createClass(MDCMenu, [{
    key: 'show',


    /** @param {{focusIndex: ?number}=} options */
    value: function show() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$focusIndex = _ref2.focusIndex,
          focusIndex = _ref2$focusIndex === undefined ? null : _ref2$focusIndex;

      this.foundation_.open({ focusIndex: focusIndex });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.foundation_.close();
    }

    /**
     * @param {Corner} corner Default anchor corner alignment of top-left
     *     menu corner.
     */

  }, {
    key: 'setAnchorCorner',
    value: function setAnchorCorner(corner) {
      this.foundation_.setAnchorCorner(corner);
    }

    /**
     * @param {AnchorMargin} margin
     */

  }, {
    key: 'setAnchorMargin',
    value: function setAnchorMargin(margin) {
      this.foundation_.setAnchorMargin(margin);
    }

    /**
     * Return the item container element inside the component.
     * @return {?Element}
     */

  }, {
    key: 'getOptionByIndex',


    /**
     * Return the item within the menu that is selected.
     * @param {number} index
     * @return {?Element}
     */
    value: function getOptionByIndex(index) {
      var items = this.items;

      if (index < items.length) {
        return this.items[index];
      } else {
        return null;
      }
    }

    /** @param {number} index */

  }, {
    key: 'getDefaultFoundation',


    /** @return {!MDCMenuFoundation} */
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation.MDCMenuFoundation({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.itemsContainer_);
        },
        getAttributeForEventTarget: function getAttributeForEventTarget(target, attributeName) {
          return target.getAttribute(attributeName);
        },
        getInnerDimensions: function getInnerDimensions() {
          var itemsContainer = _this2.itemsContainer_;

          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
        },
        hasAnchor: function hasAnchor() {
          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this2.root_.parentElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        getNumberOfItems: function getNumberOfItems() {
          return _this2.items.length;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        registerBodyClickHandler: function registerBodyClickHandler(handler) {
          return document.body.addEventListener('click', handler);
        },
        deregisterBodyClickHandler: function deregisterBodyClickHandler(handler) {
          return document.body.removeEventListener('click', handler);
        },
        getIndexForEventTarget: function getIndexForEventTarget(target) {
          return _this2.items.indexOf(target);
        },
        notifySelected: function notifySelected(evtData) {
          return _this2.emit(_foundation.MDCMenuFoundation.strings.SELECTED_EVENT, {
            index: evtData.index,
            item: _this2.items[evtData.index]
          });
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit(_foundation.MDCMenuFoundation.strings.CANCEL_EVENT, {});
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.previousFocus_) {
            _this2.previousFocus_.focus();
          }
        },
        isFocused: function isFocused() {
          return document.activeElement === _this2.root_;
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        getFocusedItemIndex: function getFocusedItemIndex() {
          return _this2.items.indexOf(document.activeElement);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          return _this2.items[index].focus();
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this2.root_.style[(0, _util.getTransformPropertyName)(window) + '-origin'] = origin;
        },
        setPosition: function setPosition(position) {
          _this2.root_.style.left = 'left' in position ? position.left : null;
          _this2.root_.style.right = 'right' in position ? position.right : null;
          _this2.root_.style.top = 'top' in position ? position.top : null;
          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        setMaxHeight: function setMaxHeight(height) {
          _this2.root_.style.maxHeight = height;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
          return _this2.items[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
          return _this2.items[index].removeAttribute(attr);
        },
        addClassForOptionAtIndex: function addClassForOptionAtIndex(index, className) {
          return _this2.items[index].classList.add(className);
        },
        rmClassForOptionAtIndex: function rmClassForOptionAtIndex(index, className) {
          return _this2.items[index].classList.remove(className);
        }
      });
    }
  }, {
    key: 'open',


    /** @return {boolean} */
    get: function get() {
      return this.foundation_.isOpen();
    }

    /** @param {boolean} value */
    ,
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'itemsContainer_',
    get: function get() {
      return this.root_.querySelector(_foundation.MDCMenuFoundation.strings.ITEMS_SELECTOR);
    }

    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     * @return {!Array<!Element>}
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }, {
    key: 'selectedItemIndex',
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    }

    /** @return {number} */
    ,
    get: function get() {
      return this.foundation_.getSelectedIndex();
    }

    /** @param {!boolean} rememberSelection */

  }, {
    key: 'rememberSelection',
    set: function set(rememberSelection) {
      this.foundation_.setRememberSelection(rememberSelection);
    }

    /** @param {boolean} quickOpen */

  }, {
    key: 'quickOpen',
    set: function set(quickOpen) {
      this.foundation_.setQuickOpen(quickOpen);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCMenu(root);
    }
  }]);

  return MDCMenu;
}(_component2.default);

exports.MDCMenuFoundation = _foundation.MDCMenuFoundation;
exports.MDCMenu = MDCMenu;
exports.AnchorMargin = _foundation.AnchorMargin;
exports.Corner = _constants.Corner;
exports.CornerBit = _constants.CornerBit;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @type {string|undefined} */
var storedTransformPropertyName_ = void 0;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

/**
 * Clamps a value between the minimum and the maximum, returning the clamped value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
function solvePositionFromXValue_(xVal, x1, x2) {
  var EPSILON = 1e-6;
  var MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

exports.getTransformPropertyName = getTransformPropertyName;
exports.clamp = clamp;
exports.bezierProgress = bezierProgress;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnchorMargin = exports.MDCMenuFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(0);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(68);

var _constants = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   top: number,
 *   right: number,
 *   bottom: number,
 *   left: number
 * }}
 */
var AnchorMargin = void 0;

/* eslint-disable no-unused-vars */
/**
 * @typedef {{
 *   viewport: { width: number, height: number },
 *   viewportDistance: {top: number, right: number, bottom: number, left: number},
 *   anchorHeight: number,
 *   anchorWidth: number,
 *   menuHeight: number,
 *   menuWidth: number,
 * }}
 */
var AutoLayoutMeasurements = void 0;
/* eslint-enable no-unused-vars */

/**
 * @extends {MDCFoundation<!MDCMenuAdapter>}
 */
var MDCMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCMenuFoundation, _MDCFoundation);

  _createClass(MDCMenuFoundation, null, [{
    key: 'cssClasses',

    /** @return enum{cssClasses} */
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum{strings} */

  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }

    /** @return enum{numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /** @return enum{number} */

  }, {
    key: 'Corner',
    get: function get() {
      return _constants.Corner;
    }

    /**
     * {@see MDCMenuAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCMenuAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCMenuAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {
            return false;
          },
          hasNecessaryDom: function hasNecessaryDom() {
            return false;
          },
          getAttributeForEventTarget: function getAttributeForEventTarget() {},
          getInnerDimensions: function getInnerDimensions() {
            return {};
          },
          hasAnchor: function hasAnchor() {
            return false;
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return {};
          },
          getWindowDimensions: function getWindowDimensions() {
            return {};
          },
          getNumberOfItems: function getNumberOfItems() {
            return 0;
          },
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          registerBodyClickHandler: function registerBodyClickHandler() {},
          deregisterBodyClickHandler: function deregisterBodyClickHandler() {},
          getIndexForEventTarget: function getIndexForEventTarget() {
            return 0;
          },
          notifySelected: function notifySelected() {},
          notifyCancel: function notifyCancel() {},
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          isFocused: function isFocused() {
            return false;
          },
          focus: function focus() {},
          getFocusedItemIndex: function getFocusedItemIndex() {
            return -1;
          },
          focusItemAtIndex: function focusItemAtIndex() {},
          isRtl: function isRtl() {
            return false;
          },
          setTransformOrigin: function setTransformOrigin() {},
          setPosition: function setPosition() {},
          setMaxHeight: function setMaxHeight() {},
          setAttrForOptionAtIndex: function setAttrForOptionAtIndex() {},
          rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() {},
          addClassForOptionAtIndex: function addClassForOptionAtIndex() {},
          rmClassForOptionAtIndex: function rmClassForOptionAtIndex() {}
        }
      );
    }

    /** @param {!MDCMenuAdapter} adapter */

  }]);

  function MDCMenuFoundation(adapter) {
    _classCallCheck(this, MDCMenuFoundation);

    /** @private {function(!Event)} */
    var _this = _possibleConstructorReturn(this, (MDCMenuFoundation.__proto__ || Object.getPrototypeOf(MDCMenuFoundation)).call(this, Object.assign(MDCMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    /** @private {function(!Event)} */
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    /** @private {function(!Event)} */
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    /** @private {function(!Event)} */
    _this.documentClickHandler_ = function (evt) {
      return _this.handleDocumentClick_(evt);
    };
    /** @private {boolean} */
    _this.isOpen_ = false;
    /** @private {number} */
    _this.openAnimationEndTimerId_ = 0;
    /** @private {number} */
    _this.closeAnimationEndTimerId_ = 0;
    /** @private {number} */
    _this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    _this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    _this.dimensions_;
    /** @private {number} */
    _this.itemHeight_;
    /** @private {Corner} */
    _this.anchorCorner_ = _constants.Corner.TOP_START;
    /** @private {AnchorMargin} */
    _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
    /** @private {?AutoLayoutMeasurements} */
    _this.measures_ = null;
    /** @private {number} */
    _this.selectedIndex_ = -1;
    /** @private {boolean} */
    _this.rememberSelection_ = false;
    /** @private {boolean} */
    _this.quickOpen_ = false;

    // A keyup event on the menu needs to have a corresponding keydown
    // event on the menu. If the user opens the menu with a keydown event on a
    // button, the menu will only get the key up event causing buggy behavior with selected elements.
    /** @private {boolean} */
    _this.keyDownWithinMenu_ = false;
    return _this;
  }

  _createClass(MDCMenuFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCMenuFoundation$cs = MDCMenuFoundation.cssClasses,
          ROOT = _MDCMenuFoundation$cs.ROOT,
          OPEN = _MDCMenuFoundation$cs.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }

      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearTimeout(this.selectedTriggerTimerId_);
      clearTimeout(this.openAnimationEndTimerId_);
      clearTimeout(this.closeAnimationEndTimerId_);
      // Cancel any currently running animations.
      cancelAnimationFrame(this.animationRequestId_);
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
    }

    /**
     * @param {!Corner} corner Default anchor corner alignment of top-left menu corner.
     */

  }, {
    key: 'setAnchorCorner',
    value: function setAnchorCorner(corner) {
      this.anchorCorner_ = corner;
    }

    /**
     * @param {!AnchorMargin} margin 4-plet of margins from anchor.
     */

  }, {
    key: 'setAnchorMargin',
    value: function setAnchorMargin(margin) {
      this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
      this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
      this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
      this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
    }

    /** @param {boolean} rememberSelection */

  }, {
    key: 'setRememberSelection',
    value: function setRememberSelection(rememberSelection) {
      this.rememberSelection_ = rememberSelection;
      this.setSelectedIndex(-1);
    }

    /** @param {boolean} quickOpen */

  }, {
    key: 'setQuickOpen',
    value: function setQuickOpen(quickOpen) {
      this.quickOpen_ = quickOpen;
    }

    /**
     * @param {?number} focusIndex
     * @private
     */

  }, {
    key: 'focusOnOpen_',
    value: function focusOnOpen_(focusIndex) {
      if (focusIndex === null) {
        // If this instance of MDCMenu remembers selections, and the user has
        // made a selection, then focus the last selected item
        if (this.rememberSelection_ && this.selectedIndex_ >= 0) {
          this.adapter_.focusItemAtIndex(this.selectedIndex_);
          return;
        }

        this.adapter_.focus();
        // If that doesn't work, focus first item instead.
        if (!this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        }
      } else {
        this.adapter_.focusItemAtIndex(focusIndex);
      }
    }

    /**
     * Handle clicks and cancel the menu if not a child list-item
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handleDocumentClick_',
    value: function handleDocumentClick_(evt) {
      var el = evt.target;

      while (el && el !== document.documentElement) {
        if (this.adapter_.getIndexForEventTarget(el) !== -1) {
          return;
        }
        el = el.parentNode;
      }

      this.adapter_.notifyCancel();
      this.close(evt);
    }
  }, {
    key: 'handleKeyboardDown_',


    /**
     * Handle keys that we want to repeat on hold (tab and arrows).
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */
    value: function handleKeyboardDown_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;

      var isTab = key === 'Tab' || keyCode === 9;
      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEnter = key === 'Enter' || keyCode === 13;
      // The menu needs to know if the keydown event was triggered on the menu
      this.keyDownWithinMenu_ = isEnter || isSpace;

      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

      if (shiftKey && isTab && focusedItemIndex === 0) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
        evt.preventDefault();
        return false;
      }

      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
        this.adapter_.focusItemAtIndex(0);
        evt.preventDefault();
        return false;
      }

      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
      if (isArrowUp || isArrowDown || isSpace) {
        evt.preventDefault();
      }

      if (isArrowUp) {
        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(lastItemIndex);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
        }
      } else if (isArrowDown) {
        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
        }
      }

      return true;
    }

    /**
     * Handle keys that we don't want to repeat on hold (Enter, Space, Escape).
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */

  }, {
    key: 'handleKeyboardUp_',
    value: function handleKeyboardUp_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key;

      var isEnter = key === 'Enter' || keyCode === 13;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEnter || isSpace) {
        // If the keydown event didn't occur on the menu, then it should
        // disregard the possible selected event.
        if (this.keyDownWithinMenu_) {
          this.handlePossibleSelected_(evt);
        }
        this.keyDownWithinMenu_ = false;
      }

      if (isEscape) {
        this.adapter_.notifyCancel();
        this.close();
      }

      return true;
    }

    /**
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'handlePossibleSelected_',
    value: function handlePossibleSelected_(evt) {
      var _this2 = this;

      if (this.adapter_.getAttributeForEventTarget(evt.target, _constants.strings.ARIA_DISABLED_ATTR) === 'true') {
        return;
      }
      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
      if (targetIndex < 0) {
        return;
      }
      // Debounce multiple selections
      if (this.selectedTriggerTimerId_) {
        return;
      }
      this.selectedTriggerTimerId_ = setTimeout(function () {
        _this2.selectedTriggerTimerId_ = 0;
        _this2.close();
        if (_this2.rememberSelection_) {
          _this2.setSelectedIndex(targetIndex);
        }
        _this2.adapter_.notifySelected({ index: targetIndex });
      }, _constants.numbers.SELECTED_TRIGGER_DELAY);
    }

    /**
     * @return {AutoLayoutMeasurements} Measurements used to position menu popup.
     */

  }, {
    key: 'getAutoLayoutMeasurements_',
    value: function getAutoLayoutMeasurements_() {
      var anchorRect = this.adapter_.getAnchorDimensions();
      var viewport = this.adapter_.getWindowDimensions();

      return {
        viewport: viewport,
        viewportDistance: {
          top: anchorRect.top,
          right: viewport.width - anchorRect.right,
          left: anchorRect.left,
          bottom: viewport.height - anchorRect.bottom
        },
        anchorHeight: anchorRect.height,
        anchorWidth: anchorRect.width,
        menuHeight: this.dimensions_.height,
        menuWidth: this.dimensions_.width
      };
    }

    /**
     * Computes the corner of the anchor from which to animate and position the menu.
     * @return {Corner}
     * @private
     */

  }, {
    key: 'getOriginCorner_',
    value: function getOriginCorner_() {
      // Defaults: open from the top left.
      var corner = _constants.Corner.TOP_LEFT;

      var _measures_ = this.measures_,
          viewportDistance = _measures_.viewportDistance,
          anchorHeight = _measures_.anchorHeight,
          anchorWidth = _measures_.anchorWidth,
          menuHeight = _measures_.menuHeight,
          menuWidth = _measures_.menuWidth;

      var isBottomAligned = Boolean(this.anchorCorner_ & _constants.CornerBit.BOTTOM);
      var availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
      var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;

      var topOverflow = menuHeight - availableTop;
      var bottomOverflow = menuHeight - availableBottom;
      if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
        corner |= _constants.CornerBit.BOTTOM;
      }

      var isRtl = this.adapter_.isRtl();
      var isFlipRtl = Boolean(this.anchorCorner_ & _constants.CornerBit.FLIP_RTL);
      var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & _constants.CornerBit.RIGHT);
      var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
      var availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
      var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorWidth - this.anchorMargin_.left;

      var leftOverflow = menuWidth - availableLeft;
      var rightOverflow = menuWidth - availableRight;

      if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
        corner |= _constants.CornerBit.RIGHT;
      }

      return corner;
    }

    /**
     * @param {Corner} corner Origin corner of the menu.
     * @return {number} Horizontal offset of menu origin corner from corresponding anchor corner.
     * @private
     */

  }, {
    key: 'getHorizontalOriginOffset_',
    value: function getHorizontalOriginOffset_(corner) {
      var anchorWidth = this.measures_.anchorWidth;

      var isRightAligned = Boolean(corner & _constants.CornerBit.RIGHT);
      var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & _constants.CornerBit.RIGHT);
      var x = 0;
      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right;
        x = rightOffset;
      } else {
        var leftOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
        x = leftOffset;
      }
      return x;
    }

    /**
     * @param {Corner} corner Origin corner of the menu.
     * @return {number} Vertical offset of menu origin corner from corresponding anchor corner.
     * @private
     */

  }, {
    key: 'getVerticalOriginOffset_',
    value: function getVerticalOriginOffset_(corner) {
      var _measures_2 = this.measures_,
          viewport = _measures_2.viewport,
          viewportDistance = _measures_2.viewportDistance,
          anchorHeight = _measures_2.anchorHeight,
          menuHeight = _measures_2.menuHeight;

      var isBottomAligned = Boolean(corner & _constants.CornerBit.BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuFoundation.numbers.MARGIN_TO_EDGE;

      var avoidVerticalOverlap = Boolean(this.anchorCorner_ & _constants.CornerBit.BOTTOM);
      var canOverlapVertically = !avoidVerticalOverlap;
      var y = 0;

      if (isBottomAligned) {
        y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
        // adjust for when menu can overlap anchor, but too tall to be aligned to bottom
        // anchor corner. Bottom margin is ignored in such cases.
        if (canOverlapVertically && menuHeight > viewportDistance.top + anchorHeight) {
          y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.top + anchorHeight));
        }
      } else {
        y = avoidVerticalOverlap ? anchorHeight + this.anchorMargin_.bottom : this.anchorMargin_.top;
        // adjust for when menu can overlap anchor, but too tall to be aligned to top
        // anchor corners. Top margin is ignored in that case.
        if (canOverlapVertically && menuHeight > viewportDistance.bottom + anchorHeight) {
          y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.bottom + anchorHeight));
        }
      }
      return y;
    }

    /**
     * @param {Corner} corner Origin corner of the menu.
     * @return {number} Maximum height of the menu, based on available space. 0 indicates should not be set.
     * @private
     */

  }, {
    key: 'getMenuMaxHeight_',
    value: function getMenuMaxHeight_(corner) {
      var maxHeight = 0;
      var viewportDistance = this.measures_.viewportDistance;

      var isBottomAligned = Boolean(corner & _constants.CornerBit.BOTTOM);

      // When maximum height is not specified, it is handled from css.
      if (this.anchorCorner_ & _constants.CornerBit.BOTTOM) {
        if (isBottomAligned) {
          maxHeight = viewportDistance.top + this.anchorMargin_.top;
        } else {
          maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom;
        }
      }

      return maxHeight;
    }

    /** @private */

  }, {
    key: 'autoPosition_',
    value: function autoPosition_() {
      var _position;

      if (!this.adapter_.hasAnchor()) {
        return;
      }

      // Compute measurements for autoposition methods reuse.
      this.measures_ = this.getAutoLayoutMeasurements_();

      var corner = this.getOriginCorner_();
      var maxMenuHeight = this.getMenuMaxHeight_(corner);
      var verticalAlignment = corner & _constants.CornerBit.BOTTOM ? 'bottom' : 'top';
      var horizontalAlignment = corner & _constants.CornerBit.RIGHT ? 'right' : 'left';
      var horizontalOffset = this.getHorizontalOriginOffset_(corner);
      var verticalOffset = this.getVerticalOriginOffset_(corner);
      var position = (_position = {}, _defineProperty(_position, horizontalAlignment, horizontalOffset ? horizontalOffset + 'px' : '0'), _defineProperty(_position, verticalAlignment, verticalOffset ? verticalOffset + 'px' : '0'), _position);
      var _measures_3 = this.measures_,
          anchorWidth = _measures_3.anchorWidth,
          menuHeight = _measures_3.menuHeight,
          menuWidth = _measures_3.menuWidth;
      // Center align when anchor width is comparable or greater than menu, otherwise keep corner.

      if (anchorWidth / menuWidth > _constants.numbers.ANCHOR_TO_MENU_WIDTH_RATIO) {
        horizontalAlignment = 'center';
      }

      // Adjust vertical origin when menu is positioned with significant offset from anchor. This is done so that
      // scale animation is "anchored" on the anchor.
      if (!(this.anchorCorner_ & _constants.CornerBit.BOTTOM) && Math.abs(verticalOffset / menuHeight) > _constants.numbers.OFFSET_TO_MENU_HEIGHT_RATIO) {
        var verticalOffsetPercent = Math.abs(verticalOffset / menuHeight) * 100;
        var originPercent = corner & _constants.CornerBit.BOTTOM ? 100 - verticalOffsetPercent : verticalOffsetPercent;
        verticalAlignment = Math.round(originPercent * 100) / 100 + '%';
      }

      this.adapter_.setTransformOrigin(horizontalAlignment + ' ' + verticalAlignment);
      this.adapter_.setPosition(position);
      this.adapter_.setMaxHeight(maxMenuHeight ? maxMenuHeight + 'px' : '');

      // Clear measures after positioning is complete.
      this.measures_ = null;
    }

    /**
     * Open the menu.
     * @param {{focusIndex: ?number}=} options
     */

  }, {
    key: 'open',
    value: function open() {
      var _this3 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.adapter_.saveFocus();

      if (!this.quickOpen_) {
        this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
      }

      this.animationRequestId_ = requestAnimationFrame(function () {
        _this3.dimensions_ = _this3.adapter_.getInnerDimensions();
        _this3.autoPosition_();
        _this3.adapter_.addClass(MDCMenuFoundation.cssClasses.OPEN);
        _this3.focusOnOpen_(focusIndex);
        _this3.adapter_.registerBodyClickHandler(_this3.documentClickHandler_);
        if (!_this3.quickOpen_) {
          _this3.openAnimationEndTimerId_ = setTimeout(function () {
            _this3.openAnimationEndTimerId_ = 0;
            _this3.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
          }, _constants.numbers.TRANSITION_OPEN_DURATION);
        }
      });
      this.isOpen_ = true;
    }

    /**
     * Closes the menu.
     * @param {Event=} evt
     */

  }, {
    key: 'close',
    value: function close() {
      var _this4 = this;

      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var targetIsDisabled = evt ? this.adapter_.getAttributeForEventTarget(evt.target, _constants.strings.ARIA_DISABLED_ATTR) === 'true' : false;

      if (targetIsDisabled) {
        return;
      }

      this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);

      if (!this.quickOpen_) {
        this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
      }

      requestAnimationFrame(function () {
        _this4.adapter_.removeClass(MDCMenuFoundation.cssClasses.OPEN);
        if (!_this4.quickOpen_) {
          _this4.closeAnimationEndTimerId_ = setTimeout(function () {
            _this4.closeAnimationEndTimerId_ = 0;
            _this4.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
          }, _constants.numbers.TRANSITION_CLOSE_DURATION);
        }
      });
      this.isOpen_ = false;
      this.adapter_.restoreFocus();
    }

    /** @return {boolean} */

  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /** @return {number} */

  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.selectedIndex_;
    }

    /**
     * @param {number} index Index of the item to set as selected.
     */

  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      if (index === this.selectedIndex_) {
        return;
      }

      var prevSelectedIndex = this.selectedIndex_;
      if (prevSelectedIndex >= 0) {
        this.adapter_.rmAttrForOptionAtIndex(prevSelectedIndex, 'aria-selected');
        this.adapter_.rmClassForOptionAtIndex(prevSelectedIndex, _constants.cssClasses.SELECTED_LIST_ITEM);
      }

      this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfItems() ? index : -1;
      if (this.selectedIndex_ >= 0) {
        this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
        this.adapter_.addClassForOptionAtIndex(this.selectedIndex_, _constants.cssClasses.SELECTED_LIST_ITEM);
      }
    }
  }]);

  return MDCMenuFoundation;
}(_foundation2.default);

exports.MDCMenuFoundation = MDCMenuFoundation;
exports.AnchorMargin = AnchorMargin;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCMenuAdapter = function () {
  function MDCMenuAdapter() {
    _classCallCheck(this, MDCMenuAdapter);
  }

  _createClass(MDCMenuAdapter, [{
    key: "addClass",

    /** @param {string} className */
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /** @return {boolean} */

  }, {
    key: "hasNecessaryDom",
    value: function hasNecessaryDom() {}

    /**
     * @param {EventTarget} target
     * @param {string} attributeName
     * @return {string}
     */

  }, {
    key: "getAttributeForEventTarget",
    value: function getAttributeForEventTarget(target, attributeName) {}

    /** @return {{ width: number, height: number }} */

  }, {
    key: "getInnerDimensions",
    value: function getInnerDimensions() {}

    /** @return {boolean} */

  }, {
    key: "hasAnchor",
    value: function hasAnchor() {}

    /** @return {{width: number, height: number, top: number, right: number, bottom: number, left: number}} */

  }, {
    key: "getAnchorDimensions",
    value: function getAnchorDimensions() {}

    /** @return {{ width: number, height: number }} */

  }, {
    key: "getWindowDimensions",
    value: function getWindowDimensions() {}

    /** @return {number} */

  }, {
    key: "getNumberOfItems",
    value: function getNumberOfItems() {}

    /**
     * @param {string} type
     * @param {function(!Event)} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(type, handler) {}

    /**
     * @param {string} type
     * @param {function(!Event)} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(type, handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerBodyClickHandler",
    value: function registerBodyClickHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterBodyClickHandler",
    value: function deregisterBodyClickHandler(handler) {}

    /**
     * @param {EventTarget} target
     * @return {number}
     */

  }, {
    key: "getIndexForEventTarget",
    value: function getIndexForEventTarget(target) {}

    /** @param {{index: number}} evtData */

  }, {
    key: "notifySelected",
    value: function notifySelected(evtData) {}
  }, {
    key: "notifyCancel",
    value: function notifyCancel() {}
  }, {
    key: "saveFocus",
    value: function saveFocus() {}
  }, {
    key: "restoreFocus",
    value: function restoreFocus() {}

    /** @return {boolean} */

  }, {
    key: "isFocused",
    value: function isFocused() {}
  }, {
    key: "focus",
    value: function focus() {}

    /** @return {number} */

  }, {
    key: "getFocusedItemIndex",
    value: function getFocusedItemIndex() /* number */{}

    /** @param {number} index */

  }, {
    key: "focusItemAtIndex",
    value: function focusItemAtIndex(index) {}

    /** @return {boolean} */

  }, {
    key: "isRtl",
    value: function isRtl() {}

    /** @param {string} origin */

  }, {
    key: "setTransformOrigin",
    value: function setTransformOrigin(origin) {}

    /** @param {{
    *   top: (string|undefined),
    *   right: (string|undefined),
    *   bottom: (string|undefined),
    *   left: (string|undefined)
    * }} position */

  }, {
    key: "setPosition",
    value: function setPosition(position) {}

    /** @param {string} height */

  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(height) {}

    /**
     * @param {number} index
     * @param {string} attr
     * @param {string} value
     */

  }, {
    key: "setAttrForOptionAtIndex",
    value: function setAttrForOptionAtIndex(index, attr, value) {}

    /**
     * @param {number} index
     * @param {string} attr
     */

  }, {
    key: "rmAttrForOptionAtIndex",
    value: function rmAttrForOptionAtIndex(index, attr) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "addClassForOptionAtIndex",
    value: function addClassForOptionAtIndex(index, className) {}

    /**
     * @param {number} index
     * @param {string} className
     */

  }, {
    key: "rmClassForOptionAtIndex",
    value: function rmClassForOptionAtIndex(index, className) {}
  }]);

  return MDCMenuAdapter;
}();

exports.MDCMenuAdapter = MDCMenuAdapter;

/***/ })
/******/ ]);