(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["syonet_eight_design_system"] = factory(require("react"));
	else
		root["syonet_eight_design_system"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/process/browser.js":
/*!*****************************************************************************!*\
  !*** C:/Users/igara/workspace/syonet_eight/node_modules/process/browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://syonet_eight_design_system/C:/Users/igara/workspace/syonet_eight/node_modules/process/browser.js?");

/***/ }),

/***/ "../../node_modules/string-hash/index.js":
/*!*******************************************************************************!*\
  !*** C:/Users/igara/workspace/syonet_eight/node_modules/string-hash/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction hash(str) {\n  var hash = 5381,\n      i    = str.length;\n\n  while(i) {\n    hash = (hash * 33) ^ str.charCodeAt(--i);\n  }\n\n  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed\n   * integers. Since we want the results to be always positive, convert the\n   * signed int to an unsigned by doing an unsigned bitshift. */\n  return hash >>> 0;\n}\n\nmodule.exports = hash;\n\n\n//# sourceURL=webpack://syonet_eight_design_system/C:/Users/igara/workspace/syonet_eight/node_modules/string-hash/index.js?");

/***/ }),

/***/ "../../node_modules/styled-jsx/dist/lib/hash.js":
/*!**************************************************************************************!*\
  !*** C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/lib/hash.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.computeId = computeId;\nexports.computeSelector = computeSelector;\n\nvar _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ \"../../node_modules/string-hash/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar sanitize = function sanitize(rule) {\n  return rule.replace(/\\/style/gi, '\\\\/style');\n};\n\nvar cache = {};\n/**\n * computeId\n *\n * Compute and memoize a jsx id from a basedId and optionally props.\n */\n\nfunction computeId(baseId, props) {\n  if (!props) {\n    return \"jsx-\" + baseId;\n  }\n\n  var propsToString = String(props);\n  var key = baseId + propsToString;\n\n  if (!cache[key]) {\n    cache[key] = \"jsx-\" + (0, _stringHash[\"default\"])(baseId + \"-\" + propsToString);\n  }\n\n  return cache[key];\n}\n/**\n * computeSelector\n *\n * Compute and memoize dynamic selectors.\n */\n\n\nfunction computeSelector(id, css) {\n  var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g; // Sanitize SSR-ed CSS.\n  // Client side code doesn't need to be sanitized since we use\n  // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).\n\n  if (typeof window === 'undefined') {\n    css = sanitize(css);\n  }\n\n  var idcss = id + css;\n\n  if (!cache[idcss]) {\n    cache[idcss] = css.replace(selectoPlaceholderRegexp, id);\n  }\n\n  return cache[idcss];\n}\n\n//# sourceURL=webpack://syonet_eight_design_system/C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/lib/hash.js?");

/***/ }),

/***/ "../../node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************************************************!*\
  !*** C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nexports.__esModule = true;\nexports[\"default\"] = void 0;\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\nBased on Glamor's sheet\nhttps://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js\n*/\nvar isProd = typeof process !== 'undefined' && process.env && \"development\" === 'production';\n\nvar isString = function isString(o) {\n  return Object.prototype.toString.call(o) === '[object String]';\n};\n\nvar StyleSheet = /*#__PURE__*/function () {\n  function StyleSheet(_temp) {\n    var _ref = _temp === void 0 ? {} : _temp,\n        _ref$name = _ref.name,\n        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,\n        _ref$optimizeForSpeed = _ref.optimizeForSpeed,\n        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,\n        _ref$isBrowser = _ref.isBrowser,\n        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;\n\n    invariant(isString(name), '`name` must be a string');\n    this._name = name;\n    this._deletedRulePlaceholder = \"#\" + name + \"-deleted-rule____{}\";\n    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');\n    this._optimizeForSpeed = optimizeForSpeed;\n    this._isBrowser = isBrowser;\n    this._serverSheet = undefined;\n    this._tags = [];\n    this._injected = false;\n    this._rulesCount = 0;\n    var node = this._isBrowser && document.querySelector('meta[property=\"csp-nonce\"]');\n    this._nonce = node ? node.getAttribute('content') : null;\n  }\n\n  var _proto = StyleSheet.prototype;\n\n  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {\n    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');\n    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');\n    this.flush();\n    this._optimizeForSpeed = bool;\n    this.inject();\n  };\n\n  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {\n    return this._optimizeForSpeed;\n  };\n\n  _proto.inject = function inject() {\n    var _this = this;\n\n    invariant(!this._injected, 'sheet already injected');\n    this._injected = true;\n\n    if (this._isBrowser && this._optimizeForSpeed) {\n      this._tags[0] = this.makeStyleTag(this._name);\n      this._optimizeForSpeed = 'insertRule' in this.getSheet();\n\n      if (!this._optimizeForSpeed) {\n        if (!isProd) {\n          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');\n        }\n\n        this.flush();\n        this._injected = true;\n      }\n\n      return;\n    }\n\n    this._serverSheet = {\n      cssRules: [],\n      insertRule: function insertRule(rule, index) {\n        if (typeof index === 'number') {\n          _this._serverSheet.cssRules[index] = {\n            cssText: rule\n          };\n        } else {\n          _this._serverSheet.cssRules.push({\n            cssText: rule\n          });\n        }\n\n        return index;\n      },\n      deleteRule: function deleteRule(index) {\n        _this._serverSheet.cssRules[index] = null;\n      }\n    };\n  };\n\n  _proto.getSheetForTag = function getSheetForTag(tag) {\n    if (tag.sheet) {\n      return tag.sheet;\n    } // this weirdness brought to you by firefox\n\n\n    for (var i = 0; i < document.styleSheets.length; i++) {\n      if (document.styleSheets[i].ownerNode === tag) {\n        return document.styleSheets[i];\n      }\n    }\n  };\n\n  _proto.getSheet = function getSheet() {\n    return this.getSheetForTag(this._tags[this._tags.length - 1]);\n  };\n\n  _proto.insertRule = function insertRule(rule, index) {\n    invariant(isString(rule), '`insertRule` accepts only strings');\n\n    if (!this._isBrowser) {\n      if (typeof index !== 'number') {\n        index = this._serverSheet.cssRules.length;\n      }\n\n      this._serverSheet.insertRule(rule, index);\n\n      return this._rulesCount++;\n    }\n\n    if (this._optimizeForSpeed) {\n      var sheet = this.getSheet();\n\n      if (typeof index !== 'number') {\n        index = sheet.cssRules.length;\n      } // this weirdness for perf, and chrome's weird bug\n      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule\n\n\n      try {\n        sheet.insertRule(rule, index);\n      } catch (error) {\n        if (!isProd) {\n          console.warn(\"StyleSheet: illegal rule: \\n\\n\" + rule + \"\\n\\nSee https://stackoverflow.com/q/20007992 for more info\");\n        }\n\n        return -1;\n      }\n    } else {\n      var insertionPoint = this._tags[index];\n\n      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));\n    }\n\n    return this._rulesCount++;\n  };\n\n  _proto.replaceRule = function replaceRule(index, rule) {\n    if (this._optimizeForSpeed || !this._isBrowser) {\n      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;\n\n      if (!rule.trim()) {\n        rule = this._deletedRulePlaceholder;\n      }\n\n      if (!sheet.cssRules[index]) {\n        // @TBD Should we throw an error?\n        return index;\n      }\n\n      sheet.deleteRule(index);\n\n      try {\n        sheet.insertRule(rule, index);\n      } catch (error) {\n        if (!isProd) {\n          console.warn(\"StyleSheet: illegal rule: \\n\\n\" + rule + \"\\n\\nSee https://stackoverflow.com/q/20007992 for more info\");\n        } // In order to preserve the indices we insert a deleteRulePlaceholder\n\n\n        sheet.insertRule(this._deletedRulePlaceholder, index);\n      }\n    } else {\n      var tag = this._tags[index];\n      invariant(tag, \"old rule at index `\" + index + \"` not found\");\n      tag.textContent = rule;\n    }\n\n    return index;\n  };\n\n  _proto.deleteRule = function deleteRule(index) {\n    if (!this._isBrowser) {\n      this._serverSheet.deleteRule(index);\n\n      return;\n    }\n\n    if (this._optimizeForSpeed) {\n      this.replaceRule(index, '');\n    } else {\n      var tag = this._tags[index];\n      invariant(tag, \"rule at index `\" + index + \"` not found\");\n      tag.parentNode.removeChild(tag);\n      this._tags[index] = null;\n    }\n  };\n\n  _proto.flush = function flush() {\n    this._injected = false;\n    this._rulesCount = 0;\n\n    if (this._isBrowser) {\n      this._tags.forEach(function (tag) {\n        return tag && tag.parentNode.removeChild(tag);\n      });\n\n      this._tags = [];\n    } else {\n      // simpler on server\n      this._serverSheet.cssRules = [];\n    }\n  };\n\n  _proto.cssRules = function cssRules() {\n    var _this2 = this;\n\n    if (!this._isBrowser) {\n      return this._serverSheet.cssRules;\n    }\n\n    return this._tags.reduce(function (rules, tag) {\n      if (tag) {\n        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {\n          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;\n        }));\n      } else {\n        rules.push(null);\n      }\n\n      return rules;\n    }, []);\n  };\n\n  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {\n    if (cssString) {\n      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');\n    }\n\n    var tag = document.createElement('style');\n    if (this._nonce) tag.setAttribute('nonce', this._nonce);\n    tag.type = 'text/css';\n    tag.setAttribute(\"data-\" + name, '');\n\n    if (cssString) {\n      tag.appendChild(document.createTextNode(cssString));\n    }\n\n    var head = document.head || document.getElementsByTagName('head')[0];\n\n    if (relativeToTag) {\n      head.insertBefore(tag, relativeToTag);\n    } else {\n      head.appendChild(tag);\n    }\n\n    return tag;\n  };\n\n  _createClass(StyleSheet, [{\n    key: \"length\",\n    get: function get() {\n      return this._rulesCount;\n    }\n  }]);\n\n  return StyleSheet;\n}();\n\nexports[\"default\"] = StyleSheet;\n\nfunction invariant(condition, message) {\n  if (!condition) {\n    throw new Error(\"StyleSheet: \" + message + \".\");\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ \"../../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://syonet_eight_design_system/C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/lib/stylesheet.js?");

/***/ }),

/***/ "../../node_modules/styled-jsx/dist/style.js":
/*!***********************************************************************************!*\
  !*** C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/style.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports[\"default\"] = JSXStyle;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _stylesheetRegistry = __webpack_require__(/*! ./stylesheet-registry */ \"../../node_modules/styled-jsx/dist/stylesheet-registry.js\");\n\nvar _hash = __webpack_require__(/*! ./lib/hash */ \"../../node_modules/styled-jsx/dist/lib/hash.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.\n// https://github.com/reactwg/react-18/discussions/110\nvar useInsertionEffect = _react[\"default\"].useInsertionEffect || _react[\"default\"].useLayoutEffect;\n\nfunction JSXStyle(props) {\n  var registry = (0, _stylesheetRegistry.useStyleRegistry)(); // If `registry` does not exist, we do nothing here.\n\n  if (!registry) {\n    return null;\n  }\n\n  if (typeof window === 'undefined') {\n    registry.add(props);\n    return null;\n  }\n\n  useInsertionEffect(function () {\n    registry.add(props);\n    return function () {\n      registry.remove(props);\n    }; // props.children can be string[], will be striped since id is identical\n  }, [props.id, String(props.dynamic)]);\n  return null;\n}\n\nJSXStyle.dynamic = function (info) {\n  return info.map(function (tagInfo) {\n    var baseId = tagInfo[0];\n    var props = tagInfo[1];\n    return (0, _hash.computeId)(baseId, props);\n  }).join(' ');\n};\n\n//# sourceURL=webpack://syonet_eight_design_system/C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/style.js?");

/***/ }),

/***/ "../../node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.createStyleRegistry = createStyleRegistry;\nexports.StyleRegistry = StyleRegistry;\nexports.useStyleRegistry = useStyleRegistry;\nexports.StyleSheetContext = exports.StyleSheetRegistry = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ \"../../node_modules/styled-jsx/dist/lib/stylesheet.js\"));\n\nvar _hash = __webpack_require__(/*! ./lib/hash */ \"../../node_modules/styled-jsx/dist/lib/hash.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction mapRulesToStyle(cssRules, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  return cssRules.map(function (args) {\n    var id = args[0];\n    var css = args[1];\n    return _react[\"default\"].createElement('style', {\n      id: \"__\" + id,\n      // Avoid warnings upon render with a key\n      key: \"__\" + id,\n      nonce: options.nonce ? options.nonce : undefined,\n      dangerouslySetInnerHTML: {\n        __html: css\n      }\n    });\n  });\n}\n\nvar StyleSheetRegistry = /*#__PURE__*/function () {\n  function StyleSheetRegistry(_temp) {\n    var _ref = _temp === void 0 ? {} : _temp,\n        _ref$styleSheet = _ref.styleSheet,\n        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,\n        _ref$optimizeForSpeed = _ref.optimizeForSpeed,\n        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,\n        _ref$isBrowser = _ref.isBrowser,\n        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;\n\n    this._sheet = styleSheet || new _stylesheet[\"default\"]({\n      name: 'styled-jsx',\n      optimizeForSpeed: optimizeForSpeed\n    });\n\n    this._sheet.inject();\n\n    if (styleSheet && typeof optimizeForSpeed === 'boolean') {\n      this._sheet.setOptimizeForSpeed(optimizeForSpeed);\n\n      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();\n    }\n\n    this._isBrowser = isBrowser;\n    this._fromServer = undefined;\n    this._indices = {};\n    this._instancesCounts = {};\n  }\n\n  var _proto = StyleSheetRegistry.prototype;\n\n  _proto.add = function add(props) {\n    var _this = this;\n\n    if (undefined === this._optimizeForSpeed) {\n      this._optimizeForSpeed = Array.isArray(props.children);\n\n      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);\n\n      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();\n    }\n\n    if (this._isBrowser && !this._fromServer) {\n      this._fromServer = this.selectFromServer();\n      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {\n        acc[tagName] = 0;\n        return acc;\n      }, {});\n    }\n\n    var _this$getIdAndRules = this.getIdAndRules(props),\n        styleId = _this$getIdAndRules.styleId,\n        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.\n\n\n    if (styleId in this._instancesCounts) {\n      this._instancesCounts[styleId] += 1;\n      return;\n    }\n\n    var indices = rules.map(function (rule) {\n      return _this._sheet.insertRule(rule);\n    }) // Filter out invalid rules\n    .filter(function (index) {\n      return index !== -1;\n    });\n    this._indices[styleId] = indices;\n    this._instancesCounts[styleId] = 1;\n  };\n\n  _proto.remove = function remove(props) {\n    var _this2 = this;\n\n    var _this$getIdAndRules2 = this.getIdAndRules(props),\n        styleId = _this$getIdAndRules2.styleId;\n\n    invariant(styleId in this._instancesCounts, \"styleId: `\" + styleId + \"` not found\");\n    this._instancesCounts[styleId] -= 1;\n\n    if (this._instancesCounts[styleId] < 1) {\n      var tagFromServer = this._fromServer && this._fromServer[styleId];\n\n      if (tagFromServer) {\n        tagFromServer.parentNode.removeChild(tagFromServer);\n        delete this._fromServer[styleId];\n      } else {\n        this._indices[styleId].forEach(function (index) {\n          return _this2._sheet.deleteRule(index);\n        });\n\n        delete this._indices[styleId];\n      }\n\n      delete this._instancesCounts[styleId];\n    }\n  };\n\n  _proto.update = function update(props, nextProps) {\n    this.add(nextProps);\n    this.remove(props);\n  };\n\n  _proto.flush = function flush() {\n    this._sheet.flush();\n\n    this._sheet.inject();\n\n    this._fromServer = undefined;\n    this._indices = {};\n    this._instancesCounts = {};\n  };\n\n  _proto.cssRules = function cssRules() {\n    var _this3 = this;\n\n    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {\n      return [styleId, _this3._fromServer[styleId]];\n    }) : [];\n\n    var cssRules = this._sheet.cssRules();\n\n    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {\n      return [styleId, _this3._indices[styleId].map(function (index) {\n        return cssRules[index].cssText;\n      }).join(_this3._optimizeForSpeed ? '' : '\\n')];\n    }) // filter out empty rules\n    .filter(function (rule) {\n      return Boolean(rule[1]);\n    }));\n  };\n\n  _proto.styles = function styles(options) {\n    return mapRulesToStyle(this.cssRules(), options);\n  };\n\n  _proto.getIdAndRules = function getIdAndRules(props) {\n    var css = props.children,\n        dynamic = props.dynamic,\n        id = props.id;\n\n    if (dynamic) {\n      var styleId = (0, _hash.computeId)(id, dynamic);\n      return {\n        styleId: styleId,\n        rules: Array.isArray(css) ? css.map(function (rule) {\n          return (0, _hash.computeSelector)(styleId, rule);\n        }) : [(0, _hash.computeSelector)(styleId, css)]\n      };\n    }\n\n    return {\n      styleId: (0, _hash.computeId)(id),\n      rules: Array.isArray(css) ? css : [css]\n    };\n  }\n  /**\n   * selectFromServer\n   *\n   * Collects style tags from the document with id __jsx-XXX\n   */\n  ;\n\n  _proto.selectFromServer = function selectFromServer() {\n    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^=\"__jsx-\"]'));\n    return elements.reduce(function (acc, element) {\n      var id = element.id.slice(2);\n      acc[id] = element;\n      return acc;\n    }, {});\n  };\n\n  return StyleSheetRegistry;\n}();\n\nexports.StyleSheetRegistry = StyleSheetRegistry;\n\nfunction invariant(condition, message) {\n  if (!condition) {\n    throw new Error(\"StyleSheetRegistry: \" + message + \".\");\n  }\n}\n\nvar StyleSheetContext = (0, _react.createContext)(null);\nexports.StyleSheetContext = StyleSheetContext;\n\nfunction createStyleRegistry() {\n  return new StyleSheetRegistry();\n}\n\nfunction StyleRegistry(_ref2) {\n  var configuredRegistry = _ref2.registry,\n      children = _ref2.children;\n  var rootRegistry = (0, _react.useContext)(StyleSheetContext);\n\n  var _useState = (0, _react.useState)(function () {\n    return rootRegistry || configuredRegistry || createStyleRegistry();\n  }),\n      registry = _useState[0];\n\n  return _react[\"default\"].createElement(StyleSheetContext.Provider, {\n    value: registry\n  }, children);\n}\n\nfunction useStyleRegistry() {\n  return (0, _react.useContext)(StyleSheetContext);\n}\n\n//# sourceURL=webpack://syonet_eight_design_system/C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/dist/stylesheet-registry.js?");

/***/ }),

/***/ "../../node_modules/styled-jsx/style.js":
/*!******************************************************************************!*\
  !*** C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/style.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/style */ \"../../node_modules/styled-jsx/dist/style.js\")\n\n\n//# sourceURL=webpack://syonet_eight_design_system/C:/Users/igara/workspace/syonet_eight/node_modules/styled-jsx/style.js?");

/***/ }),

/***/ "./src/components/dialog/dialog.style.ts":
/*!***********************************************!*\
  !*** ./src/components/dialog/dialog.style.ts ***!
  \***********************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"styles\", function() { return styles; });\nvar styles = new String(\"\");\nstyles.__hash = \"4176783968\";\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/dialog/dialog.style.ts?");

/***/ }),

/***/ "./src/components/dialog/dialog.tsx":
/*!******************************************!*\
  !*** ./src/components/dialog/dialog.tsx ***!
  \******************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dialog\", function() { return Dialog; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dialog_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.style */ \"./src/components/dialog/dialog.style.ts\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar Dialog = function Dialog() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: _dialog_style__WEBPACK_IMPORTED_MODULE_2__[\"styles\"].__hash\n  }, _dialog_style__WEBPACK_IMPORTED_MODULE_2__[\"styles\"]), __jsx(\"dialog\", {\n    className: \"jsx-\".concat(_dialog_style__WEBPACK_IMPORTED_MODULE_2__[\"styles\"].__hash) + \" \" + \"dialog\"\n  }));\n};\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/dialog/dialog.tsx?");

/***/ }),

/***/ "./src/components/dialog/index.ts":
/*!****************************************!*\
  !*** ./src/components/dialog/index.ts ***!
  \****************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ \"./src/components/dialog/dialog.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dialog\", function() { return _dialog__WEBPACK_IMPORTED_MODULE_0__[\"Dialog\"]; });\n\n\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/dialog/index.ts?");

/***/ }),

/***/ "./src/components/icons/index.ts":
/*!***************************************!*\
  !*** ./src/components/icons/index.ts ***!
  \***************************************/
/*! exports provided: MenuIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_icon */ \"./src/components/icons/menu_icon/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MenuIcon\", function() { return _menu_icon__WEBPACK_IMPORTED_MODULE_0__[\"MenuIcon\"]; });\n\n\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/icons/index.ts?");

/***/ }),

/***/ "./src/components/icons/menu_icon/index.ts":
/*!*************************************************!*\
  !*** ./src/components/icons/menu_icon/index.ts ***!
  \*************************************************/
/*! exports provided: MenuIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_icon */ \"./src/components/icons/menu_icon/menu_icon.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MenuIcon\", function() { return _menu_icon__WEBPACK_IMPORTED_MODULE_0__[\"MenuIcon\"]; });\n\n\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/icons/menu_icon/index.ts?");

/***/ }),

/***/ "./src/components/icons/menu_icon/menu_icon.module.css":
/*!*************************************************************!*\
  !*** ./src/components/icons/menu_icon/menu_icon.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .menuIcon {\\n|   color: red;\\n| }\");\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/icons/menu_icon/menu_icon.module.css?");

/***/ }),

/***/ "./src/components/icons/menu_icon/menu_icon.tsx":
/*!******************************************************!*\
  !*** ./src/components/icons/menu_icon/menu_icon.tsx ***!
  \******************************************************/
/*! exports provided: MenuIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuIcon\", function() { return MenuIcon; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_icon_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_icon.module.css */ \"./src/components/icons/menu_icon/menu_icon.module.css\");\n/* harmony import */ var _menu_icon_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu_icon_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar MenuIcon = function MenuIcon() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"i\", {\n    className: _menu_icon_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuIcon\n  }, \"c\"));\n};\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/icons/menu_icon/menu_icon.tsx?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Dialog, MenuIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ \"./src/components/dialog/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dialog\", function() { return _dialog__WEBPACK_IMPORTED_MODULE_0__[\"Dialog\"]; });\n\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./src/components/icons/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MenuIcon\", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__[\"MenuIcon\"]; });\n\n\n\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/components/index.ts?");

/***/ }),

/***/ "./src/globals/index.ts":
/*!******************************!*\
  !*** ./src/globals/index.ts ***!
  \******************************/
/*! exports provided: Variables, GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/globals/variables.ts\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"Variables\", function() { return _variables__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/globals/styles.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return _styles__WEBPACK_IMPORTED_MODULE_1__[\"GlobalStyles\"]; });\n\n\n\n\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/globals/index.ts?");

/***/ }),

/***/ "./src/globals/styles.ts":
/*!*******************************!*\
  !*** ./src/globals/styles.ts ***!
  \*******************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\nvar GlobalStyles = new String(\".jsx-942434468:root{--colors-navigation:#ebffe7;}html.jsx-942434468,body.jsx-942434468{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu, Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}*.jsx-942434468{box-sizing:border-box;}\");\nGlobalStyles.__hash = \"942434468\";\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/globals/styles.ts?");

/***/ }),

/***/ "./src/globals/variables.ts":
/*!**********************************!*\
  !*** ./src/globals/variables.ts ***!
  \**********************************/
/*! exports provided: breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakpoints\", function() { return breakpoints; });\nvar breakpoints = {\n  small: '576px',\n  middle: '768px',\n  large: '992px',\n  xlarge: '1200px'\n};\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/globals/variables.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Dialog, MenuIcon, Variables, GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./src/components/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Dialog\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"Dialog\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MenuIcon\", function() { return _components__WEBPACK_IMPORTED_MODULE_0__[\"MenuIcon\"]; });\n\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ \"./src/globals/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Variables\", function() { return _globals__WEBPACK_IMPORTED_MODULE_1__[\"Variables\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return _globals__WEBPACK_IMPORTED_MODULE_1__[\"GlobalStyles\"]; });\n\n\n\n\n//# sourceURL=webpack://syonet_eight_design_system/./src/index.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack://syonet_eight_design_system/multi_./src/index.ts?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://syonet_eight_design_system/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});