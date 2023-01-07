"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[shortId]";
exports.ids = ["pages/[shortId]"];
exports.modules = {

/***/ "./pages/[shortId].tsx":
/*!*****************************!*\
  !*** ./pages/[shortId].tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShortIdPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ShortIdPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Redirect...\"\n        }, void 0, false, {\n            fileName: \"/Volumes/data/workspace/projects/link/pages/[shortId].tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\nasync function getServerSideProps({ params  }) {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n    const { shortId  } = params;\n    let url = \"/\";\n    const data = await prisma.shortener_Link.findUnique({\n        where: {\n            shortUrl: shortId\n        }\n    });\n    if (data != null) url = data.url;\n    return {\n        redirect: {\n            destination: url\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2hvcnRJZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQzZDO0FBRTlCLFNBQVNDLGNBQTZCO0lBQ25ELHFCQUNFO2tCQUNFLDRFQUFDQztzQkFBSTs7Ozs7OztBQUdYLENBQUM7QUFFTSxlQUFlQyxtQkFBb0IsRUFBRUMsT0FBTSxFQUFPLEVBQW1CO0lBQzFFLE1BQU1DLFNBQVMsSUFBSUwsd0RBQVlBO0lBQy9CLE1BQU0sRUFBRU0sUUFBTyxFQUFFLEdBQUdGO0lBQ3BCLElBQUlHLE1BQWM7SUFFbEIsTUFBTUMsT0FBTyxNQUFNSCxPQUFPSSxjQUFjLENBQUNDLFVBQVUsQ0FBQztRQUNsREMsT0FBTztZQUFFQyxVQUFVTjtRQUFRO0lBQzdCO0lBRUEsSUFBSUUsUUFBUSxJQUFJLEVBQUVELE1BQU1DLEtBQUtELEdBQUc7SUFFaEMsT0FBTztRQUFFTSxVQUFVO1lBQUVDLGFBQWFQO1FBQUk7SUFBRTtBQUMxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluay8uL3BhZ2VzL1tzaG9ydElkXS50c3g/MThiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG9ydElkUGFnZSAoKTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5SZWRpcmVjdC4uLjwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKHsgcGFyYW1zIH06IGFueSk6IFByb21pc2U8b2JqZWN0PiB7XG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBjb25zdCB7IHNob3J0SWQgfSA9IHBhcmFtc1xuICBsZXQgdXJsOiBzdHJpbmcgPSAnLydcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLnNob3J0ZW5lcl9MaW5rLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHNob3J0VXJsOiBzaG9ydElkIH1cbiAgfSlcblxuICBpZiAoZGF0YSAhPSBudWxsKSB1cmwgPSBkYXRhLnVybFxuXG4gIHJldHVybiB7IHJlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiB1cmwgfSB9XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiU2hvcnRJZFBhZ2UiLCJkaXYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJwcmlzbWEiLCJzaG9ydElkIiwidXJsIiwiZGF0YSIsInNob3J0ZW5lcl9MaW5rIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic2hvcnRVcmwiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[shortId].tsx\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[shortId].tsx"));
module.exports = __webpack_exports__;

})();