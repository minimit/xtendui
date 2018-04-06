(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _xtend = require('./xtend');

//////////////////////
// Constructor
//////////////////////

var XtUtil = {};

//////////////////////
// Properties
//////////////////////

// Xt currents based on namespace (so shared between Xt objects)

XtUtil.currents = {};

//////////////////////
// Methods
//////////////////////

/**
 * init all data-xt classes
 */
XtUtil.initAll = function () {
  // xt-toggle
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll('[data-xt-toggle]')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      new _xtend.XtToggle(el);
    }
    // xt-scroll
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = document.querySelectorAll('[data-xt-scroll]')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _el = _step2.value;

      new _xtend.XtScroll(_el);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

/**
 * request animation frame
 * @param {Function} Function for animation frame
 * @returns {Number} AnimationFrame id
 * USAGE: let animationFrame = XtUtil.requestAnimationFrame.call(window, function () {});
 */
XtUtil.requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

/**
 * cancel animation frame
 * @param {Number} id AnimationFrame id
 * USAGE: XtUtil.cancelAnimationFrame.call(window, animationFrame);
 */
XtUtil.cancelAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (callback) {
    window.clearTimeout(id);
  };
}();

/**
 * Get unique id
 * @returns {String} Unique id
 */
XtUtil.getUniqueID = function () {
  XtUtil.uid = XtUtil.uid !== undefined ? XtUtil.uid : 0;
  return 'unique-id-' + XtUtil.uid++;
};

/**
 * Merge objects
 * @param {Array} arr Array of objects to merge
 * @returns {Object} Merged object
 */
XtUtil.merge = function (arr) {
  var final = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = arr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var obj = _step3.value;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.entries(obj)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _slicedToArray(_step4.value, 2),
              key = _step4$value[0],
              value = _step4$value[1];

          final[key] = value;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return final;
};

/**
 * Make an array when element is only one
 * @param {Object|Array} element
 * @returns {Array}
 */
XtUtil.arrSingle = function (single) {
  if (single.length === undefined) {
    var arr = new Array(1);
    arr[0] = single;
    return arr;
  } else {
    return single;
  }
};

/**
 * Create DOM element from html string
 * @param {String} str Html string (only 1 root html tag)
 * @return {Element} DOM element
 */
XtUtil.createElement = function (str) {
  var div = document.createElement('div');
  div.innerHTML = str.trim();
  return div.firstChild;
};

/**
 * Query element's parents
 * @param {Element} element Child element
 * @param {String} query Query parents
 * @return {Element} Parents elements by query
 */
XtUtil.parents = function (element, query) {
  var parents = [];
  while (element = element.parentElement.closest(query)) {
    parents.push(element);
  }
  return parents;
};

/**
 * Get element index
 * @param {Element} node Element to check the index of
 * @return {Number} Element's index
 */
/*
XtUtil.getElementIndex = function (node) {
  let index = 0;
  while ((node = node.previousElementSibling)) {
    index++;
  }
  return index;
};
*/

/**
 * Get the closest matching element up the DOM tree
 * @param {Element} element Starting element
 * @param {String} selector Selector to match against (class, ID, or data attribute)
 * @return {Boolean|Element} Returns false if not match found
 */
/*
XtUtil.getClosest = function (element, selector) {
  let firstChar = selector.charAt(0);
  for (; element && element !== document; element = element.parentNode) {
    if (firstChar === '.') {
      if (element.classList.contains(selector.substr(1))) {
        return element;
      }
    } else if (firstChar === '#') {
      if (element.id === selector.substr(1)) {
        return element;
      }
    } else if (firstChar === '[') {
      if (element.hasAttribute(selector.substr(1, selector.length - 2))) {
        return element;
      }
    }
  }
  return false;
};
*/

//////////////////////
// Public APIs
//////////////////////

exports.default = XtUtil;

//////////////////////
// Scope polyfill (https://stackoverflow.com/questions/6481612/queryselector-search-immediate-children)
// USAGE : querySelectorAll(':scope > .selector');
//////////////////////

(function (doc, proto) {
  try {
    // check if browser supports :scope natively
    doc.querySelector(':scope body');
  } catch (err) {
    // polyfill native methods if it doesn't
    var _arr = ['querySelector', 'querySelectorAll'];

    var _loop = function _loop() {
      var method = _arr[_i];
      var nativ = proto[method];
      proto[method] = function (selectors) {
        if (/(^|,)\s*:scope/.test(selectors)) {
          // only if selectors contains :scope
          var _id = this.id; // remember current element id
          this.id = 'ID_' + Date.now(); // assign new unique id
          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
          var result = doc[method](selectors);
          this.id = _id; // restore previous id
          return result;
        } else {
          return nativ.call(this, selectors); // use native code for other selectors
        }
      };
    };

    for (var _i = 0; _i < _arr.length; _i++) {
      _loop();
    }
  }
})(window.document, Element.prototype);

},{"./xtend":2}],2:[function(require,module,exports){
/*! xtend v0.0.14 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XtScroll = exports.XtToggle = exports.Xt = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _xtendUtils = require('./xtend-utils');

var _xtendUtils2 = _interopRequireDefault(_xtendUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//////////////////////
// Xt
//////////////////////

var Xt = exports.Xt = function () {

  /**
   * Constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @param {String} attr Attribute name with json options
   * @constructor
   */
  function Xt(object, jsOptions, attr) {
    _classCallCheck(this, Xt);

    this.object = object;
    this.defaults = this.constructor.defaults;
    // js options
    this.options = _xtendUtils2.default.merge([this.defaults, jsOptions || {}]);
    // markup options
    var markupOptions = this.object.getAttribute(attr);
    this.options = _xtendUtils2.default.merge([this.options, markupOptions ? JSON.parse(markupOptions) : {}]);
    // classes
    if (this.options.class) {
      this.options.classes = [].concat(_toConsumableArray(this.options.classes), _toConsumableArray(this.options.class.split(' ')));
    }
    // init
    this.initSetup();
    this.initScope();
  }

  //////////////////////
  // Init Methods
  //////////////////////

  /**
   * setup namespace, container and options
   */


  _createClass(Xt, [{
    key: 'initSetup',
    value: function initSetup() {
      var options = this.options;
      // setup (based on xtend mode)
      if (options.targets && options.targets.indexOf('#') !== -1) {
        // xtend all mode
        this.mode = 'all';
        this.container = document;
        options.max = Infinity;
        this.namespace = options.targets.toString() + '-' + options.classes.toString();
      } else {
        // xtend unique mode
        this.mode = 'unique';
        this.container = this.object;
        this.namespace = _xtendUtils2.default.getUniqueID();
      }
      // final namespace
      this.namespace = this.namespace.replace(/\W+/g, '');
      // currents array based on namespace (so shared between Xt objects)
      if (!this.getCurrents()) {
        this.setCurrents([]);
      }
    }

    /**
     * init elements, targets and currents
     */

  }, {
    key: 'initScope',
    value: function initScope() {
      var self = this;
      var options = this.options;
      // elements
      this.elements = [];
      if (options.elements) {
        this.elements = _xtendUtils2.default.arrSingle(this.container.querySelectorAll(options.elements));
      }
      if (!this.elements.length) {
        this.elements = _xtendUtils2.default.arrSingle(this.object);
        // @FIX on next frame set all elements querying the namespace
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          self.elements = _xtendUtils2.default.arrSingle(document.querySelectorAll('[data-xt-namespace=' + self.namespace + ']'));
        });
      }
      // targets
      if (options.targets) {
        var arr = Array.from(this.container.querySelectorAll(options.targets));
        arr = arr.filter(function (x) {
          return !_xtendUtils2.default.parents(x, options.targets).length;
        }); // filter out nested options.targets
        this.targets = _xtendUtils2.default.arrSingle(arr);
      }
      // @FIX set namespace for next frame
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          el.setAttribute('data-xt-namespace', self.namespace);
        }
        // currents
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        if (self.elements.length) {
          // activate defaults.class
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = self.elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _el$classList;

              var el = _step2.value;

              if ((_el$classList = el.classList).contains.apply(_el$classList, _toConsumableArray(self.defaults.classes))) {
                self.eventOn(el);
              }
            }
            // if currents < min
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var todo = options.min - self.getCurrents().length;
          if (todo) {
            for (var i = 0; i < todo; i++) {
              self.eventOn(self.elements[i]);
            }
          }
        }
      });
    }

    //////////////////////
    // Utils Methods
    //////////////////////

    /**
     * choose which elements to activate/deactivate (based on xtend mode and containers)
     * @param {Element} element Element that triggered interaction
     * @returns {Object} object.all and object.single
     */

  }, {
    key: 'getElements',
    value: function getElements(element) {
      if (!this.elements || !this.elements.length) {
        return { all: [], single: null };
      }
      if (this.mode === 'all') {
        // choose all elements
        return { all: this.elements, single: this.elements };
      } else if (this.mode === 'unique') {
        // choose element by group
        var group = element.getAttribute('data-group');
        if (group) {
          // all group elements if group
          var groupElements = Array.from(this.elements).filter(function (x) {
            return x.getAttribute('data-group') === group;
          });
          var final = _xtendUtils2.default.arrSingle(groupElements);
          return { all: final, single: final[0] };
        } else {
          // element if not group
          var _final = element;
          return { all: _xtendUtils2.default.arrSingle(_final), single: _final };
        }
      }
    }

    /**
     * choose which targets to activate/deactivate (based on xtend mode and containers)
     * @param {Element} element Element that triggered interaction
     * @returns {Array}
     */

  }, {
    key: 'getTargets',
    value: function getTargets(element) {
      if (!this.targets || !this.targets.length) {
        return [];
      }
      if (this.mode === 'all') {
        // choose all targets
        return this.targets;
      } else if (this.mode === 'unique') {
        // choose only target by group
        var group = element.getAttribute('data-group');
        var groupElements = Array.from(this.elements).filter(function (x) {
          return x.getAttribute('data-group') === group;
        });
        var groupTargets = Array.from(this.targets).filter(function (x) {
          return x.getAttribute('data-group') === group;
        });
        if (group) {
          // all group targets if group
          var final = groupTargets;
          return _xtendUtils2.default.arrSingle(final);
        } else {
          // not group targets by index if not group
          var index = groupElements.findIndex(function (x) {
            return x === element;
          });
          var _final2 = groupTargets[index];
          return _xtendUtils2.default.arrSingle(_final2);
        }
      }
    }

    /**
     * get currents based on namespace (so shared between Xt objects)
     * @returns {Element}
     */

  }, {
    key: 'getCurrents',
    value: function getCurrents() {
      return _xtendUtils2.default.currents[this.namespace];
    }

    /**
     * set currents based on namespace (so shared between Xt objects)
     * @param {Array} arr
     */

  }, {
    key: 'setCurrents',
    value: function setCurrents(arr) {
      _xtendUtils2.default.currents[this.namespace] = arr;
    }

    /**
     * add current based on namespace (so shared between Xt objects)
     * @param {Element} element To be added
     */

  }, {
    key: 'addCurrent',
    value: function addCurrent(element) {
      var arr = _xtendUtils2.default.currents[this.namespace];
      arr.push(element);
    }

    /**
     * remove currents based on namespace (so shared between Xt objects)
     * @param {Element} element To be removed
     */

  }, {
    key: 'removeCurrent',
    value: function removeCurrent(element) {
      _xtendUtils2.default.currents[this.namespace] = _xtendUtils2.default.currents[this.namespace].filter(function (x) {
        return x !== element;
      });
    }

    //////////////////////
    // Event Methods
    //////////////////////

    /**
     * element on
     * @param {Element} element To be activated
     */

  }, {
    key: 'eventOn',
    value: function eventOn(element) {
      var _element$classList;

      var options = this.options;
      // activate or deactivate
      if (!(_element$classList = element.classList).contains.apply(_element$classList, _toConsumableArray(this.defaults.classes))) {
        var fElements = this.getElements(element);
        this.addCurrent(fElements.single);
        this.activationOn(fElements.all);
        var targets = this.getTargets(element);
        this.activationOn(targets);
      } else {
        this.eventOff(element);
      }
      // if currents > max
      var currents = this.getCurrents();
      if (currents.length > options.max) {
        this.eventOff(currents[0]);
      }
    }

    /**
     * element off
     * @param {Element} element To be deactivated
     */

  }, {
    key: 'eventOff',
    value: function eventOff(element) {
      var _element$classList2;

      var options = this.options;
      // if currents < min
      var todo = options.min - this.getCurrents().length;
      if (!todo) {
        return;
      }
      // deactivate
      if ((_element$classList2 = element.classList).contains.apply(_element$classList2, _toConsumableArray(this.defaults.classes))) {
        var fElements = this.getElements(element);
        this.removeCurrent(fElements.single);
        this.activationOff(fElements.all);
        var targets = this.getTargets(element);
        this.activationOff(targets);
      }
    }

    //////////////////////
    // Activation Methods
    //////////////////////

    /**
     * element on activation
     * @param {Element} element To be activated
     */

  }, {
    key: 'activationOn',
    value: function activationOn(els) {
      var self = this;
      var options = this.options;
      // activate
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = els[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _el$classList2;

          var el = _step3.value;

          (_el$classList2 = el.classList).add.apply(_el$classList2, _toConsumableArray(options.classes));
          el.classList.remove('out');
          self.activationOnAnimate(el);
          // specials
          self.collapseOn(el);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    /**
     * element on animation
     * @param {Element} element To be animated
     */

  }, {
    key: 'activationOnAnimate',
    value: function activationOnAnimate(el) {
      this.activationOffClear(el);
      // timing
      var timing = options.timing;
      var transition = parseFloat(getComputedStyle(el)['transitionDuration']);
      var animation = parseFloat(getComputedStyle(el)['animationDuration']);
      if (transition || animation) {
        timing = Math.max(transition, animation);
      }
      // delay
      if (!timing) {
        // collapse-width and collapse-height
        if (el.classList.contains('collapse-height')) {
          el.style.height = 'auto';
        }
        if (el.classList.contains('collapse-width')) {
          el.style.width = 'auto';
        }
      } else {
        timing = timing * 1000;
        var timeout = setTimeout(function (el) {
          // collapse-width and collapse-height
          if (el.classList.contains('collapse-height')) {
            el.style.height = 'auto';
          }
          if (el.classList.contains('collapse-width')) {
            el.style.width = 'auto';
          }
        }, timing, el);
        el.setAttribute('xt-activation-animation-timeout', timeout);
      }
    }

    /**
     * element off activation
     * @param {Element} element To be deactivated
     */

  }, {
    key: 'activationOff',
    value: function activationOff(els) {
      var self = this;
      var options = this.options;
      // deactivate
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = els[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _el$classList3;

          var el = _step4.value;

          (_el$classList3 = el.classList).remove.apply(_el$classList3, _toConsumableArray(options.classes));
          el.classList.add('out');
          self.activationOffAnimate(el);
          // specials
          self.collapseOff(el);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }

    /**
     * element off animation
     * @param {Element} element To be animated
     */

  }, {
    key: 'activationOffAnimate',
    value: function activationOffAnimate(el) {
      this.activationOffClear(el);
      // timing
      var timing = options.timing;
      var transition = parseFloat(getComputedStyle(el)['transitionDuration']);
      var animation = parseFloat(getComputedStyle(el)['animationDuration']);
      if (transition || animation) {
        timing = Math.max(transition, animation);
      }
      // delay
      if (!timing) {
        el.classList.remove('out');
      } else {
        timing = timing * 1000;
        var timeout = setTimeout(function (el) {
          el.classList.remove('out');
        }, timing, el);
        el.setAttribute('xt-activation-animation-timeout', timeout);
      }
    }

    /**
     * clear activationOffAnimate
     * @param {Element} element
     */

  }, {
    key: 'activationOffClear',
    value: function activationOffClear(el) {
      clearTimeout(parseFloat(el.getAttribute('xt-activation-animation-timeout')));
    }

    //////////////////////
    // Special Methods
    //////////////////////

    /**
     * collapseOn on activation
     * @param {Element} element
     */

  }, {
    key: 'collapseOn',
    value: function collapseOn(el) {
      if (el.classList.contains('collapse-height')) {
        el.classList.add('no-transition');
        el.style.height = 'auto';
        el.style.paddingTop = '';
        el.style.paddingBottom = '';
        var h = el.clientHeight + 'px';
        var pt = el.style.paddingTop;
        var pb = el.style.paddingBottom;
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.style.height = '0';
          el.style.paddingTop = '0';
          el.style.paddingBottom = '0';
          _xtendUtils2.default.requestAnimationFrame.call(window, function () {
            el.classList.remove('no-transition');
            el.style.height = h;
            el.style.paddingTop = pt;
            el.style.paddingBottom = pb;
          });
        });
      }
      if (el.classList.contains('collapse-width')) {
        el.style.width = 'auto';
        el.style.paddingLeft = '';
        el.style.paddingRight = '';
        var w = el.clientHeight + 'px';
        var pl = el.style.paddingLeft;
        var pr = el.style.paddingRight;
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.style.width = '0';
          el.style.paddingLeft = '0';
          el.style.paddingRight = '0';
          _xtendUtils2.default.requestAnimationFrame.call(window, function () {
            el.classList.remove('no-transition');
            el.style.width = w;
            el.style.paddingLeft = pl;
            el.style.paddingRight = pr;
          });
        });
      }
    }

    /**
     * collapseOff on deactivation
     * @param {Element} element
     */

  }, {
    key: 'collapseOff',
    value: function collapseOff(el) {
      if (el.classList.contains('collapse-height')) {
        var h = el.clientHeight + 'px';
        var pt = el.style.paddingTop;
        var pb = el.style.paddingBottom;
        el.style.height = h;
        el.style.paddingTop = pt;
        el.style.paddingBottom = pb;
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.style.height = '0';
          el.style.paddingTop = '0';
          el.style.paddingBottom = '0';
        });
      }
      if (el.classList.contains('collapse-width')) {
        var w = el.clientWidth + 'px';
        var pl = el.style.paddingLeft;
        var pr = el.style.paddingRight;
        el.style.width = w;
        el.style.paddingLeft = pl;
        el.style.paddingRight = pr;
        _xtendUtils2.default.requestAnimationFrame.call(window, function () {
          el.style.width = '0';
          el.style.paddingLeft = '0';
          el.style.paddingRight = '0';
        });
      }
    }
  }]);

  return Xt;
}();

// defaults

Xt.defaults = {
  classes: ['active']
};

//////////////////////
// XtToggle
//////////////////////

var XtToggle = exports.XtToggle = function (_Xt) {
  _inherits(XtToggle, _Xt);

  /**
   * Constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  function XtToggle(object, jsOptions) {
    _classCallCheck(this, XtToggle);

    var _this = _possibleConstructorReturn(this, (XtToggle.__proto__ || Object.getPrototypeOf(XtToggle)).call(this, object, jsOptions, 'data-xt-toggle'));

    _this.initEvents();
    return _this;
  }

  //////////////////////
  // Init Methods
  //////////////////////

  /**
   * init events
   */


  _createClass(XtToggle, [{
    key: 'initEvents',
    value: function initEvents() {
      var self = this;
      var options = this.options;
      // on and off
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this.elements[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var el = _step5.value;

          if (options.on) {
            el.addEventListener(options.on, function (e) {
              self.eventOn(this);
            });
          }
          if (options.off) {
            el.addEventListener(options.off, function (e) {
              self.eventOff(this);
            });
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }]);

  return XtToggle;
}(Xt);

// defaults

XtToggle.defaults = {
  elements: ':scope > .btn',
  targets: '[class^="toggle-"], [class*=" toggle-"]',
  classes: ['active'],
  on: 'click',
  min: 0,
  max: 1
};

//////////////////////
// XtScroll
//////////////////////

var XtScroll = exports.XtScroll = function (_Xt2) {
  _inherits(XtScroll, _Xt2);

  /**
   * Constructor
   * @param {Element} object Base element
   * @param {Object} options User options
   * @constructor
   */
  function XtScroll(object, jsOptions) {
    _classCallCheck(this, XtScroll);

    var _this2 = _possibleConstructorReturn(this, (XtScroll.__proto__ || Object.getPrototypeOf(XtScroll)).call(this, object, jsOptions, 'data-xt-scroll'));

    _this2.initEvents();
    return _this2;
  }

  //////////////////////
  // Init Methods
  //////////////////////

  /**
   * init elements, targets and currents
   */


  _createClass(XtScroll, [{
    key: 'initScope',
    value: function initScope() {
      _get(XtScroll.prototype.__proto__ || Object.getPrototypeOf(XtScroll.prototype), 'initScope', this).call(this);
      // mode
      this.mode = 'all';
      // container
      this.container = _xtendUtils2.default.parents(this.object, '.xt-container.xt-position');
      if (!this.container.length) {
        this.container = _xtendUtils2.default.createElement('<div class="xt-container xt-position"></div>');
        this.object.before(this.container);
        this.container.append(this.object);
        this.container = _xtendUtils2.default.parents(this.object, '.xt-container.xt-position');
      }
      // targets
      this.targets = this.container[0].querySelectorAll('.xt-clone.xt-ignore');
      if (this.targets) {
        this.targets = this.object.cloneNode(true);
        this.targets.classList.add('xt-clone', 'xt-ignore');
        this.container[0].append(this.targets);
      }
      this.targets = _xtendUtils2.default.arrSingle(this.targets);
    }

    //////////////////////
    // Init Methods
    //////////////////////

    /**
     * init events
     */

  }, {
    key: 'initEvents',
    value: function initEvents() {
      var self = this;
      var options = this.options;
      // scroll
      window.addEventListener(options.on, function (e) {
        self.eventScroll(self.object);
      });
    }

    //////////////////////
    // Event Methods
    //////////////////////

    /**
     * window scroll
     * @param {Element} element To be activated or deactivated
     */

  }, {
    key: 'eventScroll',
    value: function eventScroll(element) {
      var self = this;
      var options = this.options;
      // scroll
      var scrollTop = document.documentElement.scrollTop;
      _xtendUtils2.default.cancelAnimationFrame.call(window, this.scrollFrame);
      this.scrollFrame = _xtendUtils2.default.requestAnimationFrame.call(window, function () {
        var rectContainer = self.container[0].getBoundingClientRect();
        var top = rectContainer.top;
        var bottom = Infinity;
        // top
        if (!isNaN(parseFloat(options.top))) {
          top = options.top;
        } else {
          var elTop = document.querySelectorAll(options.top);
          if (elTop.length) {
            var rectTop = elTop[0].getBoundingClientRect();
            top = rectTop.top + scrollTop;
          } else if (self.targets.length) {
            var _rectTop = self.targets[0].getBoundingClientRect();
            top = _rectTop.top + scrollTop;
          }
        }
        // bottom
        if (options.bottom !== undefined) {
          if (!isNaN(parseFloat(options.bottom))) {
            bottom = options.bottom;
          } else {
            var elBottom = document.querySelectorAll(options.bottom);
            if (elBottom.length) {
              var rectBottom = elBottom[0].getBoundingClientRect();
              bottom = rectBottom.top + scrollTop;
            } else if (self.targets.length) {
              var _rectBottom = self.targets[0].getBoundingClientRect();
              bottom = _rectBottom.top + scrollTop;
            }
          }
        }
        // check
        if (scrollTop >= top && scrollTop < bottom) {
          var _element$classList3;

          // inside
          if (!(_element$classList3 = element.classList).contains.apply(_element$classList3, _toConsumableArray(self.defaults.classes))) {
            self.eventOn(element);
            // direction
            var fElements = self.getElements(element);
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = fElements.all[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var el = _step6.value;

                el.classList.remove('scroll-off-top', 'scroll-off-bottom');
                if (self.scrollTop > scrollTop) {
                  el.classList.remove('scroll-on-top');
                  el.classList.add('scroll-on-bottom');
                } else {
                  el.classList.add('scroll-on-top');
                  el.classList.remove('scroll-on-bottom');
                }
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }
        } else {
          var _element$classList4;

          // outside
          if ((_element$classList4 = element.classList).contains.apply(_element$classList4, _toConsumableArray(self.defaults.classes))) {
            self.eventOff(element);
            // direction
            var _fElements = self.getElements(element);
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = _fElements.all[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var _el = _step7.value;

                _el.classList.remove('scroll-on-top', 'scroll-on-bottom');
                if (self.scrollTop > scrollTop) {
                  _el.classList.remove('scroll-off-top');
                  _el.classList.add('scroll-off-bottom');
                } else {
                  _el.classList.add('scroll-off-top');
                  _el.classList.remove('scroll-off-bottom');
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        }
        // save for direction
        self.scrollTop = scrollTop;
      });
    }
  }]);

  return XtScroll;
}(Xt);

// defaults

XtScroll.defaults = {
  classes: ['active'],
  on: 'scroll',
  min: 0,
  max: Infinity
};

/*
// overlay html
if (settings.name === 'xt-overlay') {
  var $additional = $('html');
  if (!$additional.hasClass(object.defaultClass)) {
    $additional.addClass(settings.class);
    // add paddings
    object.onFixed($('html, .xt-backdrop')); // use this for all position fixed $('*:fixed').not($target);
  }
}
// overlay html
if (settings.name === 'xt-overlay') {
  var $additional = $('html');
  if ($additional.hasClass(object.defaultClass)) {
    $additional.removeClass(settings.class);
    // remove paddings
    object.offFixed($('.xt-fixed')); // use this for all position fixed $('*:fixed').not($target);
  }
}

Xt.prototype.onFixed = function($el) {
  var object = this;
  var settings = this.settings;
  var group = this.group;
  var $group = $(this.group);
  // add scrollbar padding
  var w = object.scrollbarWidth($el);
  w = $el.css('overflow-y') === 'hidden' ? 0 : w;
  $el.addClass('xt-fixed').css('right', w).css('padding-right', w);
};

Xt.prototype.offFixed = function($el) {
  var object = this;
  var settings = this.settings;
  var group = this.group;
  var $group = $(this.group);
  // remove scrollbar padding
  $el.removeClass('xt-fixed').css('right', 0).css('padding-right', 0);
};
*/

},{"./xtend-utils":1}]},{},[2])

