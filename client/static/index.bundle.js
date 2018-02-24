module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _constants = __webpack_require__(3);

var _constants2 = _interopRequireDefault(_constants);

var _middlewares = __webpack_require__(4);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initial exprss server
const app = (0, _express2.default)();

// Middleware
(0, _middlewares2.default)(app);

console.log('=======================================================');
console.log(_constants2.default);
console.log('=======================================================');

// Router
(0, _router2.default)(app);

app.listen(_constants2.default.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
        Listening on port ${_constants2.default.PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
    `);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const defaultConfig = {
  PORT: process.env.PORT || 3008
};

exports.default = Object.assign({}, defaultConfig);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = __webpack_require__(5);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = __webpack_require__(6);

var _morgan2 = _interopRequireDefault(_morgan);

var _compression = __webpack_require__(7);

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

exports.default = app => {
  if (isProd) {
    app.use((0, _compression2.default)());
    app.use((0, _morgan2.default)('common'));
  }

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));

  if (isDev) {
    app.use((0, _morgan2.default)('dev'));
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = __webpack_require__(9);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use('/api/v1/', _routes2.default);
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(1);

const routes = new _express.Router();

routes.get('/getPrices', (req, res) => {
  res.status(200).send('this is working');
});

exports.default = routes;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQwNWQ5MzNlZWFkMTFlMzlhNmEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb25maWcvbWlkZGxld2FyZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsiYXBwIiwiY29uc29sZSIsImxvZyIsImxpc3RlbiIsIlBPUlQiLCJlcnIiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJkZWZhdWx0Q29uZmlnIiwiaXNEZXYiLCJpc1Byb2QiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsInJvdXRlcyIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLE1BQU1BLE1BQU0sd0JBQVo7O0FBRUE7QUFDQSwyQkFBa0JBLEdBQWxCOztBQUVBQyxRQUFRQyxHQUFSLENBQVkseURBQVo7QUFDQUQsUUFBUUMsR0FBUjtBQUNBRCxRQUFRQyxHQUFSLENBQVkseURBQVo7O0FBRUE7QUFDQSxzQkFBVUYsR0FBVjs7QUFFQUEsSUFBSUcsTUFBSixDQUFXLG9CQUFVQyxJQUFyQixFQUEyQkMsT0FBTztBQUNoQyxNQUFJQSxHQUFKLEVBQVM7QUFDUCxVQUFNQSxHQUFOO0FBQ0QsR0FGRCxNQUVPO0FBQ0xKLFlBQVFDLEdBQVIsQ0FBYTs0QkFDVyxvQkFBVUUsSUFBSzs7cUJBRXRCRSxRQUFRQyxHQUFSLENBQVlDLFFBQVM7O0tBSHRDO0FBTUQ7QUFDRixDQVhELEU7Ozs7OztBQ25CQSxvQzs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7Ozs7QUNDQSxNQUFNQyxnQkFBZ0I7QUFDcEJMLFFBQU1FLFFBQVFDLEdBQVIsQ0FBWUgsSUFBWixJQUFvQjtBQUROLENBQXRCOztvQ0FLS0ssYTs7Ozs7Ozs7Ozs7OztBQ05MOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsTUFBTUMsUUFBUUosUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQXZDO0FBQ0EsTUFBTUcsU0FBU0wsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXhDOztrQkFFZVIsT0FBTztBQUNwQixNQUFJVyxNQUFKLEVBQVk7QUFDVlgsUUFBSVksR0FBSixDQUFRLDRCQUFSO0FBQ0FaLFFBQUlZLEdBQUosQ0FBUSxzQkFBTyxRQUFQLENBQVI7QUFDRDs7QUFFRFosTUFBSVksR0FBSixDQUFRLHFCQUFXQyxJQUFYLEVBQVI7QUFDQWIsTUFBSVksR0FBSixDQUFRLHFCQUFXRSxVQUFYLENBQXNCLEVBQUVDLFVBQVUsSUFBWixFQUF0QixDQUFSOztBQUVBLE1BQUlMLEtBQUosRUFBVztBQUNUVixRQUFJWSxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0Q7QUFDRixDOzs7Ozs7QUNwQkQsd0M7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7a0JBRWVaLE9BQU87QUFDcEJBLE1BQUlZLEdBQUosQ0FBUSxVQUFSO0FBQ0FaLE1BQUlnQixHQUFKLENBQVEsR0FBUixFQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCQSxRQUFJQyxJQUFKLENBQVMsY0FBVDtBQUNELEdBRkQ7QUFHRCxDOzs7Ozs7Ozs7Ozs7O0FDUEQ7O0FBRUEsTUFBTUMsU0FBUyxxQkFBZjs7QUFFQUEsT0FBT0osR0FBUCxDQUFXLFlBQVgsRUFBeUIsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDckNBLE1BQUlHLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQixpQkFBckI7QUFDRCxDQUZEOztrQkFJZUMsTSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNDA1ZDkzM2VlYWQxMWUzOWE2YSIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi9jb25maWcvY29uc3RhbnRzJztcbmltcG9ydCBtaWRkbGV3YXJlc0NvbmZpZyBmcm9tICcuL2NvbmZpZy9taWRkbGV3YXJlcyc7XG5pbXBvcnQgYXBpUm91dGVzIGZyb20gJy4vcm91dGVyJztcblxuLy8gSW5pdGlhbCBleHByc3Mgc2VydmVyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbi8vIE1pZGRsZXdhcmVcbm1pZGRsZXdhcmVzQ29uZmlnKGFwcCk7XG5cbmNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG5jb25zb2xlLmxvZyhjb25zdGFudHMpO1xuY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcblxuLy8gUm91dGVyXG5hcGlSb3V0ZXMoYXBwKTtcblxuYXBwLmxpc3Rlbihjb25zdGFudHMuUE9SVCwgZXJyID0+IHtcbiAgaWYgKGVycikge1xuICAgIHRocm93IGVycjtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhgXG4gICAgICAgIExpc3RlbmluZyBvbiBwb3J0ICR7Y29uc3RhbnRzLlBPUlR9XG4gICAgICAgIC0tLVxuICAgICAgICBSdW5uaW5nIG9uICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9XG4gICAgICAgIC0tLVxuICAgIGApO1xuICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL3NlcnZlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gIFBPUlQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwOCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uZGVmYXVsdENvbmZpZ1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2NvbmZpZy9jb25zdGFudHMuanMiLCJpbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcblxuXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgaXNQcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgYXBwID0+IHtcbiAgaWYgKGlzUHJvZCkge1xuICAgIGFwcC51c2UoY29tcHJlc3Npb24oKSk7XG4gICAgYXBwLnVzZShtb3JnYW4oJ2NvbW1vbicpKVxuICB9XG5cbiAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gIGFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG4gIGlmIChpc0Rldikge1xuICAgIGFwcC51c2UobW9yZ2FuKCdkZXYnKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvY29uZmlnL21pZGRsZXdhcmVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vcmdhblwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXBwID0+IHtcbiAgYXBwLnVzZSgnL2FwaS92MS8nLCByb3V0ZXMpO1xuICBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIScpO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvcm91dGVyL2luZGV4LmpzIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmNvbnN0IHJvdXRlcyA9IG5ldyBSb3V0ZXIoKTtcblxucm91dGVzLmdldCgnL2dldFByaWNlcycsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc3RhdHVzKDIwMCkuc2VuZCgndGhpcyBpcyB3b3JraW5nJylcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9yb3V0ZXIvcm91dGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==