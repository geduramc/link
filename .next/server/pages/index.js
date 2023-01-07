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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz8yNTRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImNlbnRlclwiOiBcIkhvbWVfY2VudGVyX180QkZnQ1wiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCIsXG5cdFwidGhpcnRlZW5cIjogXCJIb21lX3RoaXJ0ZWVuX19jTUlfa1wiLFxuXHRcInJvdGF0ZVwiOiBcIkhvbWVfcm90YXRlX19fX1hzSVwiLFxuXHRcImNvbnRlbnRcIjogXCJIb21lX2NvbnRlbnRfX1p5MDJYXCIsXG5cdFwidmVyY2VsTG9nb1wiOiBcIkhvbWVfdmVyY2VsTG9nb19fZHRTazlcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const input = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [shortURL, setShortURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const url = input.current !== undefined ? input.current.value : null;\n        if (url.length <= 0) return console.error(\"Error or missing url\");\n        fetch(\"/api/shortUrl\", {\n            method: \"POST\",\n            headers: {\n                \"Content-type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                url\n            })\n        }).then(async (res)=>await res.json()).then((data)=>{\n            console.log(data);\n            setShortURL(data.shortUrl);\n        }).catch((err)=>{\n            console.error(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"geduramc - url shortener\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Url shortener by geduramc\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: input,\n                                type: \"text\",\n                                name: \"\",\n                                id: \"\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                                placeholder: \"URL\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                                children: \"Shorten\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                        children: shortURL\n                    }, void 0, false, {\n                        fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/data/workspace/projects/link/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDMEI7QUFDUjtBQUUvQixTQUFTSSxPQUFzQjtJQUM1QyxNQUFNQyxRQUFRSCw2Q0FBTUE7SUFDcEIsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1PLGVBQWUsQ0FBQ0MsSUFBZ0I7UUFDcENBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsTUFBYyxNQUFPQyxPQUFPLEtBQUtDLFlBQWFSLE1BQU1PLE9BQU8sQ0FBQ0UsS0FBSyxHQUFHLElBQUk7UUFFOUUsSUFBSUgsSUFBSUksTUFBTSxJQUFJLEdBQUcsT0FBT0MsUUFBUUMsS0FBSyxDQUFDO1FBRTFDQyxNQUFNLGlCQUFpQjtZQUNyQkMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVaO1lBQUk7UUFDN0IsR0FBR2EsSUFBSSxDQUFDLE9BQU1DLE1BQU8sTUFBTUEsSUFBSUMsSUFBSSxJQUFJRixJQUFJLENBQUNHLENBQUFBLE9BQVE7WUFDbERYLFFBQVFZLEdBQUcsQ0FBQ0Q7WUFDWnBCLFlBQVlvQixLQUFLRSxRQUFRO1FBQzNCLEdBQUdDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTztZQUNkZixRQUFRQyxLQUFLLENBQUNjO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUMvQixrREFBSUE7O2tDQUNILDhEQUFDZ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7Z0JBQUtDLFdBQVdyQyxxRUFBVzs7a0NBQzFCLDhEQUFDc0M7d0JBQUtELFdBQVdyQyxxRUFBVzt3QkFBRXdDLFVBQVVuQzs7MENBQ3RDLDhEQUFDSDtnQ0FBTXVDLEtBQUt2QztnQ0FBT3dDLE1BQUs7Z0NBQU9YLE1BQUs7Z0NBQUdZLElBQUc7Z0NBQUdOLFdBQVdyQyxzRUFBWTtnQ0FBRTRDLGFBQVk7Ozs7OzswQ0FDbEYsOERBQUNDO2dDQUFPUixXQUFXckMsdUVBQWE7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFcEMsOERBQUM4Qzt3QkFBS1QsV0FBV3JDLHNFQUFZO2tDQUFHRzs7Ozs7Ozs7Ozs7Ozs7QUFJeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmsvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgaW5wdXQgPSB1c2VSZWY8YW55PigpXG4gIGNvbnN0IFtzaG9ydFVSTCwgc2V0U2hvcnRVUkxdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSk6IGFueSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSAoaW5wdXQuY3VycmVudCAhPT0gdW5kZWZpbmVkKSA/IGlucHV0LmN1cnJlbnQudmFsdWUgOiBudWxsXG5cbiAgICBpZiAodXJsLmxlbmd0aCA8PSAwKSByZXR1cm4gY29uc29sZS5lcnJvcignRXJyb3Igb3IgbWlzc2luZyB1cmwnKVxuXG4gICAgZmV0Y2goJy9hcGkvc2hvcnRVcmwnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXJsIH0pXG4gICAgfSkudGhlbihhc3luYyByZXMgPT4gYXdhaXQgcmVzLmpzb24oKSkudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBzZXRTaG9ydFVSTChkYXRhLnNob3J0VXJsKVxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5nZWR1cmFtYyAtIHVybCBzaG9ydGVuZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nVXJsIHNob3J0ZW5lciBieSBnZWR1cmFtYycgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dH0gdHlwZT0ndGV4dCcgbmFtZT0nJyBpZD0nJyBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gcGxhY2Vob2xkZXI9J1VSTCcgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+U2hvcnRlbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT57c2hvcnRVUkx9PC9zcGFuPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiSG9tZSIsImlucHV0Iiwic2hvcnRVUkwiLCJzZXRTaG9ydFVSTCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwibG9nIiwic2hvcnRVcmwiLCJjYXRjaCIsImVyciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZm9ybSIsImNhcmQiLCJvblN1Ym1pdCIsInJlZiIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();